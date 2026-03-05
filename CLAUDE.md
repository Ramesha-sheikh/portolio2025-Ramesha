# CLAUDE.md - Project Instructions

## 🎯 Project Overview

**Portfolio Website for Ramesha Javed**
- **Type:** Professional Portfolio
- **Role:** Certified Agentic AI Developer & Founder of VisionDX AI
- **Version:** 2.0.0
- **Status:** Production-ready with recent certifications update

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** Next.js 15.5 (App Router) with Turbopack
- **Language:** TypeScript 5.0 (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 12.23 + GSAP 3.13
- **Icons:** Lucide React
- **Theme:** next-themes (dark mode support)

### Package Manager
- **Use npm** (not yarn or pnpm)
- Always run `npm install` after adding dependencies

---

## 📁 Project Structure

```
├── public/                          # Static assets (images, certificates)
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── api/                     # API routes
│   │   ├── blog/                    # Blog pages
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Home page
│   ├── components/                  # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── GlowCard.tsx
│   │   └── ...
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── CertificationsSection.tsx  # NEW - 4 certifications
│   │   ├── ProjectSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   ├── types/                       # TypeScript types
│   └── utils/                       # Utility functions
├── _posts/                          # Blog posts (MDX)
└── Documentation files (*.md)
```

---

## 🎨 Design System

### Color Scheme
- **Light Mode Primary:** `rgb(0, 122, 122)` - Marrs Green
- **Dark Mode Primary:** `rgb(5, 206, 145)` - Caribbean Green
- **Background Light:** Custom via Tailwind config
- **Background Dark:** Custom via Tailwind config

### Design Principles
- **Glassmorphism** with backdrop blur
- **Gradient backgrounds** for premium feel
- **Smooth animations** (Framer Motion)
- **Responsive design** (mobile-first)
- **Dark mode** fully supported

---

## 🚀 Development Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack

# Production
npm run build            # Build for production with Turbopack
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

---

## ✅ Important Rules & Guidelines

### Code Style
1. **TypeScript:** Always use TypeScript, never plain JavaScript
2. **Imports:** Use absolute imports with `@/` prefix
3. **Components:** Use functional components with TypeScript interfaces
4. **Styling:** Use Tailwind CSS classes, avoid inline styles
5. **Animations:** Prefer Framer Motion for React components

### File Naming
- **Components:** PascalCase (e.g., `HeroSection.tsx`)
- **Utilities:** camelCase (e.g., `formatDate.ts`)
- **Types:** PascalCase (e.g., `Certificate.ts`)

### Best Practices
- **Read before edit:** Always read files before modifying
- **Preserve existing code:** Don't refactor unless necessary
- **Test locally:** Run `npm run dev` to test changes
- **ESLint:** Fix any linting errors before committing
- **No emojis:** Don't add emojis unless explicitly requested

### Critical Notes
- **Don't modify:** `package.json` dependencies without asking
- **Don't delete:** Existing components or sections
- **Don't create:** New files unless necessary
- **Image paths:** All certificate images are in `/public/` folder
- **Case-sensitive paths:** Windows but using bash syntax

---

## 🏆 Current Certifications (Version 2.0.0)

The portfolio showcases 4 professional certifications:

1. **Agentic AI Level 1 Developer**
   - Institution: PIAIC
   - Image: `public/agentic ai level 1 exam  certification.jpg`

2. **Agentic AI Professional Level 2 Developer**
   - Institution: PIAIC
   - Image: `public/agentic ai professioanl level 02 exam certification.jpg`

3. **Prompt and Context Engineering: Level 1 Developer**
   - Institution: PIAIC
   - Image: `public/prompt eng certification .jpg`

4. **From Freelancers to Founder 3.0**
   - Institution: PAFLA
   - Image: `public/pafla certification.jpg`

---

## 📝 Recent Updates (v2.0.0)

### Completed Features
- ✅ New CertificationsSection.tsx component
- ✅ Enhanced Hero section with certification badge
- ✅ Updated About section with cert details
- ✅ Added "Certifications" to navigation
- ✅ SEO optimization with cert keywords
- ✅ Interactive certificate modal viewer
- ✅ Responsive design for all screen sizes

### Modified Files
- `src/app/page.tsx`
- `src/components/Header.tsx`
- `src/sections/HeroSection.tsx`
- `src/sections/AboutSection.tsx`
- `src/sections/CertificationsSection.tsx` (NEW)

---

## 🔧 Common Tasks

### Adding New Certifications
1. Add image to `/public/` folder
2. Update `src/sections/CertificationsSection.tsx`
3. Add to the `certificates` array
4. Update stats count in Hero section

### Adding New Projects
1. Add project data to `ProjectSection.tsx`
2. Add project image to `/public/` folder
3. Update project count in stats

### Writing Blog Posts
1. Create MDX file in `_posts/` folder
2. Add frontmatter (title, excerpt, date, coverImage)
3. Add cover image to `/public/blog/`

### Updating Personal Info
- **Hero:** `src/sections/HeroSection.tsx`
- **About:** `src/sections/AboutSection.tsx`
- **SEO:** `src/app/page.tsx` (meta tags)

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Image Not Loading
- Check file path (case-sensitive)
- Verify image is in `/public/` folder
- Use forward slashes in paths

### TypeScript Errors
```bash
npm run lint
npx tsc --noEmit
```

---

## 📦 Dependencies Management

### Adding New Package
```bash
# Ask before adding
npm install <package-name>
```

### Important Packages
- `next` - Core framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `next-themes` - Dark mode

---

## 🚀 Deployment

### Platform: Vercel (Recommended)
```bash
# Push to GitHub
git add .
git commit -m "Your message"
git push origin main

# Vercel auto-deploys from main branch
```

### Environment Variables
- Set in `.env.local` for development
- Set in Vercel dashboard for production
- `NEXT_PUBLIC_URL` - Your deployed URL

---

## 📞 Support & Documentation

### Documentation Files
- `README_PORTFOLIO.md` - Full documentation
- `PORTFOLIO_UPDATES_SUMMARY.md` - Changelog
- `QUICK_START.md` - Quick start guide
- `CV_UPDATE_GUIDE.md` - CV update instructions

### External Docs
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

---

## ⚠️ Important Notes

1. **Git Branch:** Currently on `main` branch
2. **Modified Files:** Several files have uncommitted changes
3. **Build Status:** Check `build-output.txt` for build logs
4. **Certificate Images:** Already in `/public/` folder
5. **Turbopack:** Always use `--turbopack` flag for dev/build

---

## 🎯 Project Goals

- Showcase 4+ professional certifications
- Modern, award-winning UI/UX design
- SEO optimized for AI developer keywords
- Fast performance (95+ Lighthouse score)
- Fully responsive and accessible
- Dark mode support
- Interactive user experience

---

**Last Updated:** March 5, 2026
**Author:** Ramesha Javed
**Maintained By:** Claude Code
