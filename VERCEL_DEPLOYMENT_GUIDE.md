# 🚀 Vercel Deployment Guide

## Quick Deployment Steps

### Step 1: Push to GitHub (Already Done ✅)
```bash
git push origin portfolio-transformation
```

### Step 2: Connect to Vercel

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select: `Ramesha-sheikh/portolio2025-Ramesha`
   - Branch: `portfolio-transformation` (or `main` after merge)

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

### Step 3: Add Environment Variables

**CRITICAL: Add these in Vercel Dashboard**

Go to: Project Settings → Environment Variables

Add the following variables:

```
Variable Name: EMAIL_USER
Value: Rameshajaved1@gmail.com
Environment: Production, Preview, Development

Variable Name: EMAIL_PASS
Value: xnso vdrp dxnz coxk
Environment: Production, Preview, Development

Variable Name: EMAIL_TO
Value: Rameshajaved1@gmail.com
Environment: Production, Preview, Development
```

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. Your site will be live at: `https://your-project.vercel.app`

---

## Custom Domain Setup (Optional)

1. Go to: Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

---

## Environment Variables Setup (Detailed)

### Method 1: Via Vercel Dashboard (Recommended)

1. Open your project on Vercel
2. Go to **Settings** → **Environment Variables**
3. Add each variable:
   - **Name:** EMAIL_USER
   - **Value:** Rameshajaved1@gmail.com
   - **Environments:** Check all (Production, Preview, Development)
   - Click **"Save"**

4. Repeat for:
   - EMAIL_PASS
   - EMAIL_TO

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variables
vercel env add EMAIL_USER
# Enter value: Rameshajaved1@gmail.com

vercel env add EMAIL_PASS
# Enter value: xnso vdrp dxnz coxk

vercel env add EMAIL_TO
# Enter value: Rameshajaved1@gmail.com
```

---

## Build Settings

### Optimized for Vercel ✅

- **Framework:** Next.js 15.5.2
- **Node Version:** 20.x (auto-detected)
- **Package Manager:** npm
- **Build Command:** `npm run build`
- **Install Command:** `npm install`

### Performance Optimizations

The `vercel.json` includes:
- ✅ Security headers (XSS, Frame Options, etc.)
- ✅ Caching strategies for fonts and static assets
- ✅ Telemetry disabled for faster builds
- ✅ Singapore region (sin1) for optimal performance

---

## Troubleshooting

### Build Fails with "Module not found"
**Solution:** Clear build cache
```bash
vercel --prod --force
```

### Environment Variables Not Working
**Solution:**
1. Check spelling of variable names
2. Ensure they're set for correct environment (Production/Preview/Development)
3. Redeploy after adding variables

### Build Warnings (ESLint)
**Note:** These are warnings, not errors. Build will succeed.
- Unescaped quotes in JSX
- Unused variables
- Missing metadataBase

**To fix later:**
```bash
npm run lint -- --fix
```

---

## Post-Deployment Checklist

After successful deployment:

- [ ] Test contact form (ensure emails are sent)
- [ ] Check all pages load correctly
- [ ] Verify images display properly
- [ ] Test dark mode toggle
- [ ] Check mobile responsiveness
- [ ] Test blog posts
- [ ] Verify certifications display
- [ ] Check project pages

---

## Monitoring & Analytics

### Enable Analytics (Optional)

1. Go to: Project → Analytics
2. Enable **Web Analytics**
3. Enable **Speed Insights**

### Monitor Deployments

- **Deployments:** https://vercel.com/dashboard/deployments
- **Logs:** Click any deployment → View Logs
- **Performance:** Lighthouse scores shown automatically

---

## Continuous Deployment

**Auto-Deploy Setup:**

Vercel automatically deploys when you push to GitHub:

```bash
# Any push to connected branch triggers deployment
git add .
git commit -m "Update portfolio"
git push origin portfolio-transformation
```

**Branch Deployments:**
- `main` → Production URL
- Other branches → Preview URLs

---

## Important Notes

1. **Environment Variables:** NEVER commit `.env.local` to GitHub
2. **Build Time:** First build takes 2-3 minutes, subsequent builds ~1 minute
3. **Free Tier Limits:**
   - 100 GB bandwidth/month
   - Unlimited deployments
   - 6000 build minutes/month

4. **Custom Domain:** Free SSL certificate included

---

## Support

**Vercel Documentation:**
- https://vercel.com/docs
- https://vercel.com/docs/frameworks/nextjs

**Need Help?**
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

---

**Deployment Date:** March 10, 2026
**Version:** 2.0.0
**Framework:** Next.js 15.5.2
**Deployed By:** Ramesha Javed
