# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended - Easiest)
- Push code to GitHub
- Import to Vercel
- Auto-deploys on push
- Free SSL & CDN included

### 2. Netlify
- Similar to Vercel
- Connect Git repo
- Auto-deploy

### 3. Docker
- Build: `docker build -t consulting-website .`
- Run: `docker run -p 3000:3000 consulting-website`

### 4. Traditional Server (VPS)
```bash
# Install Node.js 18+
npm install
npm run build
npm start
# Use PM2 for process management
```

## Environment Variables (Production)
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Company Name
```

## Pre-Deployment Checklist
- [ ] Test build locally: `npm run build`
- [ ] Set environment variables
- [ ] Configure custom domain
- [ ] Enable SSL/HTTPS
- [ ] Test all pages and languages
- [ ] Setup monitoring/analytics

For detailed deployment instructions, see platform documentation.
