import { site } from '../data/site.js';
export const GET = () => new Response(`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });
