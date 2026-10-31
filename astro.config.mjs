import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
// The website address comes from the CMS: SEO Settings > Website address
const seo = JSON.parse(fs.readFileSync(new URL('./src/data/seo.json', import.meta.url), 'utf8'));
export default defineConfig({ site: seo.siteUrl, integrations:[sitemap()], server:{host:true} });
