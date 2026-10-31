import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// Change 'site' to your real domain before deploying (needed for sitemap/SEO)
export default defineConfig({ site:'https://zorvoweb.com', integrations:[sitemap()], server:{host:true} });
