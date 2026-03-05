# Project Memory

## Project Context
- **Type:** Next.js 15.5 Portfolio Website
- **Owner:** Ramesha Javed - Certified Agentic AI Developer
- **Version:** 2.0.0
- **Status:** Production-ready

## Tech Stack Preferences
- Use **npm** (not yarn or pnpm)
- Use **TypeScript** for all code
- Use **Tailwind CSS** for styling
- Use **Framer Motion** for animations
- Always use Turbopack with Next.js (`--turbopack` flag)

## Important Patterns

### File Structure
- Components in `src/components/`
- Sections in `src/sections/`
- Pages in `src/app/`
- Static assets in `public/`

### Design System
- Light mode primary: `rgb(0, 122, 122)` (Marrs Green)
- Dark mode primary: `rgb(5, 206, 145)` (Caribbean Green)
- Use glassmorphism with backdrop blur
- Mobile-first responsive design

### Code Style
- Functional components with TypeScript interfaces
- Absolute imports with `@/` prefix
- No inline styles, use Tailwind classes
- Preserve existing code structure unless refactoring is requested

## Recent Updates (v2.0.0)
- Added CertificationsSection with 4 professional certificates
- Enhanced Hero section with certification badge
- Updated About section with detailed cert info
- Added navigation link for Certifications
- SEO optimization with certification keywords

## Common Tasks

### Adding Certifications
1. Add image to `/public/`
2. Update `CertificationsSection.tsx` certificates array
3. Update stats in Hero section

### Adding Projects
1. Update `ProjectSection.tsx`
2. Add project image to `/public/`
3. Update project count

### Writing Blog Posts
1. Create MDX in `_posts/`
2. Add frontmatter
3. Add cover image to `/public/blog/`

## Known Issues
- None currently

## User Preferences
- Prefers concise explanations
- Uses mix of English and Urdu/Hindi
- Wants to see results quickly
- Appreciates step-by-step guidance

---

*Last Updated: March 5, 2026*
