---
name: ui-design
description: Create beautiful, modern UI designs following 2026 design trends and best practices. Use for designing components, layouts, color schemes, and establishing visual hierarchy.
user-invocable: true
---

# UI Design System - 2026 Trends

## Core Design Principles

### 1. Visual Hierarchy
- **Size:** Larger = more important
- **Color:** High contrast for primary actions
- **Spacing:** More whitespace around important elements
- **Typography:** Different weights for hierarchy

### 2. Whitespace (Negative Space)
- Generous spacing reduces cognitive load
- Minimum 16px between related elements
- Minimum 32px between sections
- Use 8px spacing scale: 8, 16, 24, 32, 40, 48, 64

### 3. Typography Scale
```css
/* Modern type scale */
--text-xs: 0.75rem;    /* 12px - captions, labels */
--text-sm: 0.875rem;   /* 14px - body small */
--text-base: 1rem;     /* 16px - body */
--text-lg: 1.125rem;   /* 18px - body large */
--text-xl: 1.25rem;    /* 20px - h4 */
--text-2xl: 1.5rem;    /* 24px - h3 */
--text-3xl: 1.875rem;  /* 30px - h2 */
--text-4xl: 2.25rem;   /* 36px - h1 */
--text-5xl: 3rem;      /* 48px - hero */
```

### 4. Color Theory (2026 Trends)

**Color Palette Structure:**
```
Primary: Brand color (60% of UI)
Secondary: Complement or analogous (30%)
Accent: High contrast for CTAs (10%)
Neutral: Grays for text, backgrounds, borders
Semantic: Success, Warning, Error, Info
```

**Modern Color Trends:**
- Glassmorphism with subtle transparency
- Gradient overlays and backgrounds
- Dark mode as default consideration
- Neon accents for CTAs

### 5. Responsive Design

**Breakpoints:**
```css
/* Mobile first */
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
--ultra: 1920px;
```

**Touch Targets:**
- Minimum 44x44px for mobile
- Minimum 32x32px for desktop
- Add 8px padding around clickable elements

## Component Design Patterns

### Buttons

```jsx
// Primary Button
<button className="
  bg-primary text-white
  px-6 py-3 rounded-lg
  font-semibold
  hover:bg-primary-dark
  active:scale-95
  transition-all duration-200
  shadow-lg hover:shadow-xl
">
  Primary Action
</button>

// Secondary Button
<button className="
  border-2 border-primary text-primary
  px-6 py-3 rounded-lg
  font-semibold
  hover:bg-primary hover:text-white
  transition-all duration-200
">
  Secondary Action
</button>

// Ghost Button
<button className="
  text-primary
  px-4 py-2
  font-medium
  hover:bg-primary/10
  rounded-md
  transition-colors
">
  Tertiary Action
</button>
```

### Cards (2026 Style)

```jsx
// Glassmorphism Card
<div className="
  backdrop-blur-lg bg-white/10
  border border-white/20
  rounded-2xl
  p-6
  shadow-xl
  hover:shadow-2xl
  transition-all duration-300
  hover:-translate-y-1
">
  Card Content
</div>

// Gradient Card
<div className="
  bg-gradient-to-br from-blue-500/20 to-purple-500/20
  border border-white/10
  rounded-xl
  p-6
  backdrop-blur-sm
">
  Gradient Card
</div>
```

### Input Fields

```jsx
// Modern Input
<div className="relative">
  <label className="block text-sm font-medium mb-2">
    Email Address
  </label>
  <input
    type="email"
    className="
      w-full px-4 py-3
      border-2 border-gray-300
      rounded-lg
      focus:border-primary focus:ring-4 focus:ring-primary/20
      transition-all
      placeholder:text-gray-400
    "
    placeholder="you@example.com"
  />
</div>
```

### Modals

```jsx
// Modern Modal
<div className="
  fixed inset-0 z-50
  flex items-center justify-center
  bg-black/50 backdrop-blur-sm
">
  <div className="
    bg-white dark:bg-gray-900
    rounded-2xl
    max-w-md w-full
    p-8
    shadow-2xl
    transform transition-all
  ">
    Modal Content
  </div>
</div>
```

## 2026 Design Trends

### 1. Glassmorphism
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### 2. Neumorphism (Soft UI)
```css
background: #e0e5ec;
box-shadow:
  9px 9px 16px rgba(163, 177, 198, 0.6),
  -9px -9px 16px rgba(255, 255, 255, 0.5);
```

### 3. Gradient Mesh Backgrounds
```css
background: linear-gradient(
  135deg,
  #667eea 0%,
  #764ba2 50%,
  #f093fb 100%
);
```

### 4. Micro-interactions
- Hover scale effects
- Click ripples
- Loading skeletons
- Smooth transitions

## Accessibility Checklist

- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] All interactive elements have focus states
- [ ] Form inputs have labels
- [ ] Images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Touch targets minimum 44x44px
- [ ] Reduced motion support

## Dark Mode Design

```css
/* Light mode */
--bg-primary: #ffffff;
--text-primary: #1f2937;

/* Dark mode */
--bg-primary: #111827;
--text-primary: #f9fafb;
```

**Dark Mode Tips:**
- Don't use pure black (#000)
- Use #0a0a0a to #1a1a1a for backgrounds
- Reduce image brightness by 20%
- Adjust color saturation

## Design Checklist

- [ ] Clear visual hierarchy established
- [ ] Consistent spacing scale used
- [ ] Typography hierarchy clear
- [ ] Color contrast sufficient
- [ ] Responsive breakpoints tested
- [ ] Touch targets adequate size
- [ ] Loading states designed
- [ ] Error states designed
- [ ] Empty states designed
- [ ] Dark mode considered

## Task

Design: $ARGUMENTS

Follow modern 2026 trends: glassmorphism, smooth animations, excellent accessibility.
