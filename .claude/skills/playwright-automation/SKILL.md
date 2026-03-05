---
name: playwright-automation
description: Use Playwright MCP server for browser automation, testing, and web scraping. Invoke when you need to automate browser tasks, test web applications, or extract data from web pages.
user-invocable: true
allowed-tools: Bash, Read, Write
---

# Playwright MCP Server Automation

Use Playwright for browser automation, testing, and web scraping tasks.

## Installation & Setup

```bash
# Install Playwright
npm install -D @playwright/test

# Install browsers
npx playwright install
```

## Common Playwright Patterns

### 1. Basic Browser Launch & Navigation

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to URL
  await page.goto('https://example.com');

  // Take screenshot
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
```

### 2. Element Interaction

```javascript
// Click elements
await page.click('button#submit');
await page.click('text=Sign In');

// Fill form fields
await page.fill('input[name="email"]', 'user@example.com');
await page.fill('#password', 'secret123');

// Select dropdown
await page.selectOption('select#country', 'USA');

// Check checkbox
await page.check('input[type="checkbox"]');

// Upload files
await page.setInputFiles('input[type="file"]', 'path/to/file.pdf');
```

### 3. Wait for Conditions

```javascript
// Wait for navigation
await page.waitForNavigation();

// Wait for selector
await page.waitForSelector('.results');

// Wait for specific condition
await page.waitForFunction(() => window.loaded === true);

// Wait for timeout
await page.waitForTimeout(2000); // 2 seconds
```

### 4. Data Extraction (Web Scraping)

```javascript
// Extract text content
const title = await page.textContent('h1');

// Extract multiple elements
const items = await page.$$eval('.item', elements =>
  elements.map(el => ({
    title: el.querySelector('.title')?.textContent,
    price: el.querySelector('.price')?.textContent,
    link: el.querySelector('a')?.href
  }))
);

// Get attribute
const href = await page.getAttribute('a.link', 'href');
```

### 5. Testing Patterns

```javascript
// Playwright Test
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');

  // Assertions
  await expect(page).toHaveTitle(/Example/);
  await expect(page.locator('.heading')).toBeVisible();
  await expect(page.locator('button')).toHaveText('Submit');
});
```

### 6. Handle Dialogs & Popups

```javascript
// Handle alerts
page.on('dialog', async dialog => {
  console.log(dialog.message());
  await dialog.accept();
});

// Handle new pages/popups
const [newPage] = await Promise.all([
  context.waitForEvent('page'),
  page.click('a[target="_blank"]')
]);
```

### 7. Network Interception

```javascript
// Wait for API response
const response = await page.waitForResponse(
  resp => resp.url().includes('/api/data') && resp.status() === 200
);
const data = await response.json();

// Mock API responses
await page.route('**/api/**', route => {
  route.fulfill({
    status: 200,
    body: JSON.stringify({ mocked: true })
  });
});
```

## MCP Server Integration

When using Playwright MCP server:

1. **Connect to MCP server**
2. **Send automation commands**
3. **Receive results and screenshots**
4. **Handle errors gracefully**

## Best Practices

- ✅ Always take screenshots for verification
- ✅ Use waitForSelector before interacting
- ✅ Handle timeouts gracefully
- ✅ Close browsers when done
- ✅ Use headless mode in CI/CD
- ✅ Save traces for debugging: `await context.tracing.start()`

## Task

$ARGUMENTS

Always verify state with screenshots and handle errors properly.
