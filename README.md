# Tornik View — Coming Soon Landing Page

Production-ready landing page for tornikview.com.

## What's inside

- `index.html` — Main landing page (Coming Soon, with email signup)
- `favicon.svg` — Mountain logo favicon (vector)
- `vercel.json` — Vercel deployment config with security headers
- `robots.txt` — Search engine instructions
- `sitemap.xml` — SEO sitemap

## Features

- ✅ Mobile responsive (works perfectly on phone/tablet/desktop)
- ✅ Brand colors: Pine Green, Snow Cream, Sunrise Gold
- ✅ Cormorant Garamond + Inter typography
- ✅ Animated mountain silhouettes (decorative SVG)
- ✅ Email capture form (saves to localStorage; Formspree-ready)
- ✅ SEO optimized (Open Graph, Twitter Cards, JSON-LD)
- ✅ Performance: <50 KB total, no images, no JS framework
- ✅ Accessible (aria-labels, semantic HTML, keyboard navigation)

## Deployment to Vercel

### Option A — Drag & drop (easiest, 2 min)

1. Go to https://vercel.com/new
2. Sign in with GitHub or email
3. Click "Browse" or drag this entire folder into the upload area
4. Vercel auto-detects it as a static site
5. Click "Deploy"
6. Done — you get a URL like https://tornik-view-landing.vercel.app

### Option B — Via GitHub (recommended for updates)

1. Create new GitHub repo: `tornik-view-landing`
2. Upload all files in this folder
3. Go to https://vercel.com/new
4. Import the GitHub repo
5. Deploy

### Option C — Vercel CLI (power user)

```bash
npm i -g vercel
cd tornik-view-landing
vercel --prod
```

## Connect tornikview.com domain

After Vercel deployment:

1. In Vercel project → Settings → Domains
2. Add `tornikview.com` and `www.tornikview.com`
3. Vercel shows you DNS records to add
4. Go to Cloudflare dashboard → tornikview.com → DNS
5. Add the records Vercel showed you:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
6. Wait 1-5 minutes for DNS propagation
7. https://tornikview.com is live!

## Email capture integration (optional)

The form currently saves emails to browser localStorage. To collect real emails:

1. Sign up at https://formspree.io (free tier: 50 submissions/month)
2. Create new form → copy your Form ID
3. In `index.html`, find the commented section in `<script>`
4. Uncomment the fetch() block
5. Replace `YOUR_FORM_ID` with your real Formspree ID
6. Re-deploy

Alternatives: Mailchimp, ConvertKit, Resend.

## Future development

When ready to build full website:

- Move to Next.js (you already use it for IBM platform)
- Add: gallery, rooms, location, booking, contact
- Keep same brand colors and typography
- Re-deploy on same Vercel project

