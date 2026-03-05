---
name: ui-improvements
description: Analyze and improve user interface designs for better UX, accessibility, and visual appeal. Use when reviewing components or suggesting UI enhancements.
user-invocable: true
context: fork
agent: Explore
---

# UI Improvement Analysis Framework

Analyze and improve UI across three critical dimensions:

## 1. User Experience (UX) Analysis

### Clarity
- **Question:** Is the purpose of each element immediately obvious?
- **Check for:**
  - Clear labels on buttons and inputs
  - Obvious navigation structure
  - Descriptive headings
  - Meaningful icons with labels

### Discoverability
- **Question:** Can users find what they need?
- **Check for:**
  - Logical information architecture
  - Visible navigation
  - Search functionality (if needed)
  - Clear CTAs (Call-to-Actions)

### Efficiency
- **Question:** Can users complete tasks quickly?
- **Check for:**
  - Minimal steps to complete actions
  - Autofill and smart defaults
  - Keyboard shortcuts
  - Bulk actions where appropriate

### Feedback
- **Question:** Does UI respond to user actions?
- **Check for:**
  - Loading states (spinners, skeletons)
  - Success/error messages
  - Hover states
  - Click feedback (active states)
  - Progress indicators

### Error Handling
- **Question:** Are errors clear and recoverable?
- **Check for:**
  - Specific error messages (not generic)
  - Suggestions for fixing errors
  - Inline validation
  - Prevention of errors before submission

## 2. Accessibility (a11y) Audit

### Color Contrast (WCAG AA)
```
Minimum contrast ratios:
- Normal text: 4.5:1
- Large text (18px+): 3:1
- UI components: 3:1
```

**Tools to check:**
- Chrome DevTools Accessibility Panel
- WebAIM Contrast Checker
- axe DevTools extension

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] No keyboard traps
- [ ] Skip links for long navigation

### Screen Reader Compatibility
- [ ] Images have meaningful alt text
- [ ] Forms have proper labels
- [ ] ARIA labels where needed
- [ ] Semantic HTML used (`<nav>`, `<main>`, `<article>`)
- [ ] Live regions for dynamic content

### Focus Management
- [ ] Visible focus indicators (outline or ring)
- [ ] Focus not trapped in modals
- [ ] Focus moved to modals when opened
- [ ] Focus returned when modals closed

### Form Accessibility
- [ ] Labels associated with inputs
- [ ] Error messages linked to fields
- [ ] Required fields indicated
- [ ] Field instructions clear

## 3. Visual Design Improvements

### Visual Hierarchy
**Issues to look for:**
- Similar sized elements competing for attention
- No clear entry point for the eye
- Too many font sizes/weights
- Insufficient contrast between levels

**Solutions:**
```
Primary: Largest, boldest, high contrast
Secondary: Medium size, medium weight
Tertiary: Smaller, lighter weight
```

### Spacing & Alignment
**Issues:**
- Inconsistent spacing
- Elements not aligned
- Too cramped or too sparse
- Unbalanced whitespace

**Solutions:**
- Use 8px spacing scale: 8, 16, 24, 32, 48, 64
- Align related elements
- Group related items with proximity
- Add breathing room around important elements

### Typography
**Issues:**
- Too many fonts (>3)
- Poor line length (>75 chars or <45 chars)
- Insufficient line height
- Poor font pairing

**Solutions:**
```css
/* Optimal typography */
line-height: 1.5 (body), 1.2 (headings);
max-width: 65ch; /* ~65 characters */
font-family: 2 fonts max (one for headings, one for body);
```

### Color Usage
**Issues:**
- Too many colors
- Poor contrast
- Colors don't match brand
- Semantic colors misused

**Solutions:**
- Limit palette: Primary, Secondary, Accent, Neutral, Semantic
- Use color consistently (e.g., blue always means link)
- Check contrast ratios
- Use semantic colors (green=success, red=error, yellow=warning)

### Component Consistency
**Issues:**
- Different button styles across pages
- Inconsistent spacing
- Mixed border radius values
- Different shadow styles

**Solutions:**
- Create design tokens/variables
- Use a component library
- Document patterns in style guide

## Analysis Process

### Step 1: Initial Scan
Look at the UI and note first impressions:
- What draws your eye first?
- What's confusing?
- What feels inconsistent?

### Step 2: Detailed Audit
Check each dimension systematically:
1. UX (clarity, discoverability, efficiency, feedback, errors)
2. Accessibility (contrast, keyboard, screen readers, focus, forms)
3. Visual design (hierarchy, spacing, typography, color, consistency)

### Step 3: Prioritize Issues
Rank by impact:
- **Critical:** Blocks users or fails accessibility
- **High:** Significantly hurts usability
- **Medium:** Minor usability issues
- **Low:** Polish improvements

### Step 4: Propose Solutions
For each issue:
1. **Problem:** Describe the issue
2. **Impact:** How it affects users
3. **Solution:** Specific fix with code example
4. **Effort:** Low/Medium/High

## Output Format

```markdown
## UI Improvement Analysis

### Critical Issues
1. **[Issue Name]**
   - Problem: [Description]
   - Impact: [User experience effect]
   - Solution: [Specific code change]
   - Effort: [Low/Medium/High]

### High Priority
[Same format]

### Medium Priority
[Same format]

### Polish Improvements
[Same format]

## Quick Wins (Low Effort, High Impact)
- [List of easy improvements]

## Summary
Total issues: X
Estimated effort: Y hours
Expected impact: [Description]
```

## Common Improvements

### Low Effort, High Impact
- Add focus states to buttons/links
- Increase color contrast
- Add loading states
- Fix alignment issues
- Increase touch target sizes
- Add hover states

### Medium Effort, High Impact
- Improve error messaging
- Add skeleton loaders
- Implement responsive design
- Add keyboard shortcuts
- Improve form validation

### High Effort, High Impact
- Redesign information architecture
- Add animations/micro-interactions
- Implement dark mode
- Full accessibility audit & fixes
- Comprehensive design system

## Instructions

Analyze the UI/component at: **$ARGUMENTS**

Provide:
1. Top 5 improvement opportunities
2. Specific, implementable solutions
3. Code examples for fixes
4. Priority ranking by user impact
