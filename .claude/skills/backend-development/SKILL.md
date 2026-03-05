---
name: backend-development
description: Backend development patterns, API design, database optimization, authentication, and server architecture. Use when building APIs, optimizing databases, implementing auth, or designing server logic.
user-invocable: true
allowed-tools: Read, Write, Edit, Bash
---

# Backend Development Handbook

## API Design Best Practices

### RESTful API Conventions

**HTTP Verbs:**
```
GET     - Retrieve resource(s)
POST    - Create new resource
PUT     - Replace entire resource
PATCH   - Partial update resource
DELETE  - Remove resource
```

**URL Structure:**
```
GET    /users              - List all users
GET    /users/{id}         - Get specific user
POST   /users              - Create new user
PUT    /users/{id}         - Replace user
PATCH  /users/{id}         - Update user
DELETE /users/{id}         - Delete user

GET    /users/{id}/posts   - Get user's posts (nested resource)
```

**Response Format (Consistent):**
```json
{
  "status": "success",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe"
    }
  },
  "meta": {
    "timestamp": "2026-03-05T10:30:00Z"
  }
}

// Error Response
{
  "status": "error",
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

### Pagination

```javascript
// Request
GET /items?page=2&limit=20&sort=-created_at&filter=active

// Response
{
  "status": "success",
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 20,
    "total": 150,
    "pages": 8,
    "hasNext": true,
    "hasPrev": true
  }
}
```

### Filtering, Sorting, Searching

```
GET /products?category=electronics&price_min=100&price_max=500
GET /posts?sort=-created_at,title
GET /users?search=john&fields=id,name,email
```

## Database Optimization

### Indexing Strategy

```sql
-- Index foreign keys
CREATE INDEX idx_posts_user_id ON posts(user_id);

-- Index frequently filtered columns
CREATE INDEX idx_users_email ON users(email);

-- Composite index for common queries
CREATE INDEX idx_posts_user_created
ON posts(user_id, created_at DESC);

-- Unique index for constraints
CREATE UNIQUE INDEX idx_users_email_unique ON users(email);
```

**Index Guidelines:**
- ✅ Index foreign keys
- ✅ Index columns in WHERE clauses
- ✅ Index columns in ORDER BY
- ✅ Use composite indexes for multi-column queries
- ❌ Don't over-index (hurts write performance)
- ❌ Don't index low-cardinality columns

### Query Optimization

```javascript
// ❌ N+1 Query Problem
const users = await User.findAll();
for (const user of users) {
  const posts = await Post.findAll({ where: { userId: user.id } });
  user.posts = posts;
}

// ✅ Solution: Use JOIN or eager loading
const users = await User.findAll({
  include: [{ model: Post }]
});

// ✅ Or use batch loading
const users = await User.findAll();
const userIds = users.map(u => u.id);
const posts = await Post.findAll({ where: { userId: userIds } });
// Group posts by userId and assign
```

**Optimization Tips:**
```sql
-- Use EXPLAIN to analyze queries
EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';

-- Select only needed columns
SELECT id, name FROM users; -- Not SELECT *

-- Use LIMIT for pagination
SELECT * FROM posts ORDER BY created_at DESC LIMIT 20 OFFSET 40;

-- Use connection pooling (not new connection per request)
```

### Caching Strategies

```javascript
// Redis caching example
const cache = require('redis').createClient();

// Cache-aside pattern
async function getUser(id) {
  // Check cache first
  const cached = await cache.get(`user:${id}`);
  if (cached) return JSON.parse(cached);

  // If not in cache, fetch from DB
  const user = await User.findByPk(id);

  // Store in cache (expire after 1 hour)
  await cache.setex(`user:${id}`, 3600, JSON.stringify(user));

  return user;
}

// Invalidate cache on update
async function updateUser(id, data) {
  await User.update(data, { where: { id } });
  await cache.del(`user:${id}`); // Clear cache
}
```

## Authentication & Authorization

### JWT Authentication

```javascript
const jwt = require('jsonwebtoken');

// Generate token
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// Verify token middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Authorization middleware
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
}

// Usage
app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Admin only' });
});
```

### Password Hashing

```javascript
const bcrypt = require('bcrypt');

// Hash password on registration
async function registerUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ email, password: hashedPassword });
}

// Verify password on login
async function loginUser(email, password) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid password');

  const token = generateToken(user);
  return { user, token };
}
```

## Error Handling

### Centralized Error Handler

```javascript
// Custom error class
class APIError extends Error {
  constructor(code, message, statusCode = 400, details = {}) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

// Error handler middleware (Express)
function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      status: 'error',
      error: {
        code: err.code,
        message: err.message,
        details: err.details
      }
    });
  }

  // Unknown errors
  res.status(500).json({
    status: 'error',
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred'
    }
  });
}

// Usage
app.post('/users', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new APIError(
        'VALIDATION_ERROR',
        'Email and password are required',
        400,
        { fields: ['email', 'password'] }
      );
    }

    const user = await createUser(email, password);
    res.status(201).json({ status: 'success', data: { user } });
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);
```

## Validation

```javascript
// Using Joi for validation
const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2).max(50),
  age: Joi.number().integer().min(18).max(120)
});

// Validation middleware
function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false
    });

    if (error) {
      const details = error.details.map(d => ({
        field: d.path.join('.'),
        message: d.message
      }));

      throw new APIError(
        'VALIDATION_ERROR',
        'Validation failed',
        400,
        { fields: details }
      );
    }

    req.validatedBody = value;
    next();
  };
}

// Usage
app.post('/users', validate(userSchema), async (req, res) => {
  const user = await createUser(req.validatedBody);
  res.json({ status: 'success', data: { user } });
});
```

## Security Checklist

- [ ] **Input validation** - Validate all user input
- [ ] **SQL injection prevention** - Use parameterized queries
- [ ] **XSS prevention** - Sanitize output, use Content-Security-Policy
- [ ] **CSRF protection** - Use CSRF tokens for state-changing requests
- [ ] **Rate limiting** - Prevent abuse
- [ ] **CORS configuration** - Restrict allowed origins
- [ ] **HTTPS enforced** - Redirect HTTP to HTTPS
- [ ] **Secrets in environment variables** - Never hardcode secrets
- [ ] **Password hashing** - Use bcrypt/argon2
- [ ] **JWT security** - Short expiry, secure secret, HTTPS only
- [ ] **Dependency scanning** - `npm audit` regularly
- [ ] **Error messages** - Don't leak sensitive info

### Rate Limiting Example

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later'
});

app.use('/api/', limiter);

// Stricter limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many login attempts'
});

app.use('/api/auth/', authLimiter);
```

## Testing

```javascript
// Unit test example (Jest)
describe('User API', () => {
  test('should create user with valid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        email: 'test@example.com',
        password: 'securepass123'
      });

    expect(response.status).toBe(201);
    expect(response.body.status).toBe('success');
    expect(response.body.data.user.email).toBe('test@example.com');
  });

  test('should reject invalid email', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        email: 'invalid-email',
        password: 'securepass123'
      });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });
});
```

## Performance Tips

1. **Database:** Index properly, use connection pooling, optimize queries
2. **Caching:** Use Redis for frequently accessed data
3. **Async Operations:** Use background jobs for heavy tasks (Bull, Agenda)
4. **Compression:** Enable gzip compression
5. **CDN:** Serve static assets from CDN
6. **Monitoring:** Use APM tools (New Relic, DataDog)

## Task

Backend task: $ARGUMENTS

Follow best practices for security, performance, and maintainability.
