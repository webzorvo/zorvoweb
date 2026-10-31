import seo from '../data/seo.json';
export const GET=()=>new Response(`User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${seo.siteUrl.replace(/\/$/,'')}/sitemap-index.xml\n`,{headers:{'Content-Type':'text/plain'}});
