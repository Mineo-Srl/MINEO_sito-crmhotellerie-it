import type { APIRoute } from 'astro';
import { site } from '../data/site.js';

/** Solo le pagine indicizzabili: privacy e cookie policy sono in noindex. */
const pages = [{ path: '/', priority: '1.0', changefreq: 'monthly' }];

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite?.origin ?? site.url).replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${origin}${p.path === '/' ? '/' : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
