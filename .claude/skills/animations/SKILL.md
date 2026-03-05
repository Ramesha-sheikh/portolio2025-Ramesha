---
name: animations
description: Create smooth, performant animations using Framer Motion or GSAP. Use when adding motion design, transitions, micro-interactions, or scroll-based animations.
user-invocable: true
allowed-tools: Read, Edit, Write
---

# Animation Patterns - Framer Motion & GSAP

## Framer Motion (React) - 2026 Best Practices

### Installation

```bash
npm install framer-motion
```

### 1. Basic Motion Components

```jsx
import { motion } from 'framer-motion';

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Slide in from left
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  Content
</motion.div>

// Scale in
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  Content
</motion.div>
```

### 2. Variants (Reusable Animations)

```jsx
// Define variants
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4
    }
  }
};

// Use variants
<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  Content
</motion.div>
```

### 3. Stagger Children (Sequential Animations)

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 0.1s delay between children
      delayChildren: 0.2    // Start after 0.2s
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

<motion.div
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map((item, i) => (
    <motion.div key={i} variants={item}>
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

### 4. Gesture Animations (Hover, Tap, Drag)

```jsx
// Hover & Tap
<motion.button
  whileHover={{
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Click Me
</motion.button>

// Drag
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
  dragElastic={0.1}
  whileDrag={{ scale: 1.1 }}
>
  Drag me
</motion.div>

// Drag with snap back
<motion.div
  drag
  dragSnapToOrigin
  whileDrag={{ scale: 1.2, cursor: 'grabbing' }}
>
  Drag and release
</motion.div>
```

### 5. Scroll-based Animations

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollAnimation() {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to different values
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.div style={{ opacity, scale }}>
      Fades and scales on scroll
    </motion.div>
  );
}

// Viewport-based animations (appear when in view)
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }} // Trigger when 30% visible
  transition={{ duration: 0.6 }}
>
  Appears on scroll into view
</motion.div>
```

### 6. Layout Animations (Smooth Layout Changes)

```jsx
// Automatic layout animation
<motion.div layout>
  Content that changes size/position
</motion.div>

// Shared layout animations (morphing between elements)
import { motion, AnimatePresence } from 'framer-motion';

<AnimatePresence>
  {isExpanded ? (
    <motion.div layoutId="card" className="expanded-card">
      Expanded content
    </motion.div>
  ) : (
    <motion.div layoutId="card" className="small-card">
      Small card
    </motion.div>
  )}
</AnimatePresence>
```

### 7. Path Animations (SVG)

```jsx
<motion.svg viewBox="0 0 100 100">
  <motion.path
    d="M10 10 L90 90"
    stroke="#000"
    strokeWidth="2"
    fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
  />
</motion.svg>
```

## GSAP (GreenSock Animation Platform)

### Installation

```bash
npm install gsap
```

### 1. Basic Tweens

```javascript
import gsap from 'gsap';

// Animate to
gsap.to('.element', {
  duration: 1,
  x: 100,
  opacity: 0.5,
  ease: 'power2.out'
});

// Animate from
gsap.from('.element', {
  duration: 1,
  y: -100,
  opacity: 0
});

// Animate from-to
gsap.fromTo('.element',
  { opacity: 0, scale: 0 },
  { opacity: 1, scale: 1, duration: 0.5 }
);
```

### 2. Timeline (Sequential Animations)

```javascript
const tl = gsap.timeline({ repeat: -1, yoyo: true });

tl.to('.box', { duration: 1, x: 100 })
  .to('.box', { duration: 1, y: 100 })
  .to('.box', { duration: 0.5, rotation: 360 })
  .to('.box', { duration: 1, opacity: 0 });

// Position parameter: control timing
const tl2 = gsap.timeline();

tl2.to('.a', { x: 100, duration: 1 })
   .to('.b', { x: 100, duration: 1 }, '-=0.5') // Start 0.5s before previous ends
   .to('.c', { x: 100, duration: 1 }, 0)       // Start at beginning
   .to('.d', { x: 100, duration: 1 }, '+=0.5'); // Start 0.5s after previous ends
```

### 3. Stagger

```javascript
// Stagger multiple elements
gsap.to('.item', {
  duration: 0.5,
  y: -20,
  opacity: 1,
  stagger: 0.1 // 0.1s between each
});

// Advanced stagger
gsap.to('.item', {
  duration: 0.5,
  scale: 1.2,
  stagger: {
    amount: 1,      // Total time for all staggers
    from: 'center', // Start from center element
    grid: 'auto',   // For grid layouts
    ease: 'power2.inOut'
  }
});
```

### 4. ScrollTrigger (Scroll-based Animations)

```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Basic scroll trigger
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',    // When top of element hits center of viewport
    end: 'bottom center',
    scrub: true,            // Smooth scrubbing
    markers: true           // Show debug markers (remove in production)
  },
  x: 400,
  rotation: 360
});

// Pin element while scrolling
gsap.to('.panel', {
  scrollTrigger: {
    trigger: '.panel',
    start: 'top top',
    end: '+=500',
    pin: true,
    scrub: 1
  },
  opacity: 0
});

// Toggle class on scroll
ScrollTrigger.create({
  trigger: '.section',
  start: 'top center',
  onEnter: () => document.querySelector('.nav').classList.add('active'),
  onLeave: () => document.querySelector('.nav').classList.remove('active')
});
```

### 5. Morphing (SVG Paths)

```javascript
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
gsap.registerPlugin(MorphSVGPlugin);

gsap.to('#circle', {
  duration: 2,
  morphSVG: '#square',
  ease: 'power2.inOut',
  repeat: -1,
  yoyo: true
});
```

### 6. Text Animation

```javascript
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

// Typing effect
gsap.to('.text', {
  duration: 2,
  text: 'This text appears one character at a time',
  ease: 'none'
});

// Split text animation (requires SplitText plugin)
const chars = document.querySelectorAll('.text span');
gsap.from(chars, {
  duration: 0.8,
  opacity: 0,
  y: 50,
  stagger: 0.05,
  ease: 'back.out(1.7)'
});
```

## Performance Best Practices

### 1. GPU-Accelerated Properties (60fps)

```javascript
// ✅ FAST (GPU-accelerated)
transform: translate3d(), scale(), rotate()
opacity

// ❌ SLOW (CPU-bound, causes reflow)
width, height, top, left, margin, padding
```

### 2. Use `will-change` Carefully

```css
/* Add before animation starts */
.element {
  will-change: transform, opacity;
}

/* Remove after animation ends */
.element.animated {
  will-change: auto;
}
```

### 3. Reduce Motion for Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

```javascript
// In React with Framer Motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

<motion.div
  animate={prefersReducedMotion ? {} : { scale: 1.2 }}
>
  Content
</motion.div>
```

### 4. Batch DOM Reads/Writes

```javascript
// ❌ BAD: Layout thrashing
elements.forEach(el => {
  const height = el.offsetHeight; // Read (forces layout)
  el.style.height = height + 10 + 'px'; // Write
});

// ✅ GOOD: Batch reads, then batch writes
const heights = elements.map(el => el.offsetHeight); // All reads first
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px'; // Then all writes
});
```

## Common Animation Patterns

### 1. Fade In
```javascript
// Framer Motion
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>

// GSAP
gsap.from('.element', { opacity: 0, duration: 0.5 });
```

### 2. Slide In
```javascript
// From left
initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}

// From top
initial={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
```

### 3. Scale & Bounce
```javascript
<motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    type: 'spring',
    stiffness: 260,
    damping: 20
  }}
/>
```

### 4. Rotate
```javascript
gsap.to('.element', {
  rotation: 360,
  duration: 1,
  ease: 'power2.inOut'
});
```

### 5. Parallax Effect
```javascript
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

<motion.div style={{ y }}>
  Parallax content
</motion.div>
```

## Animation Easing (Timing Functions)

```javascript
// Framer Motion
ease: 'linear'
ease: 'easeIn'
ease: 'easeOut'
ease: 'easeInOut'
ease: [0.42, 0, 0.58, 1] // Cubic bezier

// Spring physics
type: 'spring'
stiffness: 100
damping: 10

// GSAP
ease: 'none'
ease: 'power1.out'
ease: 'power2.inOut'
ease: 'back.out(1.7)'
ease: 'elastic.out(1, 0.3)'
ease: 'bounce.out'
```

## Task

Animation task: $ARGUMENTS

Use Framer Motion for React components or GSAP for advanced timeline/scroll animations.
Follow performance best practices and ensure 60fps animations.
