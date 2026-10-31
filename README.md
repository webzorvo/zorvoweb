# ZorvoWeb website (Astro, static) + Decap CMS

## Run locally
    npm install
    npm run dev       -> http://localhost:4321
    npm run cms       (2nd terminal) -> http://localhost:4321/admin/   (note the trailing slash)

## Before going live
1. Get a free access key at web3forms.com (enter your email) and paste it in CMS > Site Settings (or src/data/site.json).
2. Replace phone, WhatsApp, email, location and founder name with REAL details.
3. Set your real domain in astro.config.mjs (`site:`).
4. Only add real testimonials and real projects. Leave testimonials empty until you have them.

## Deploy free (Cloudflare Pages)
Push to GitHub > Cloudflare Pages > Connect repo > Build command `npm run build` > Output `dist`.
For /admin online, set `repo:` in public/admin/config.yml and set up GitHub login for Decap CMS.
