import { site } from '../data/site.js';

import { apps } from '../data/apps.js';

const pages: Array<[string, string]> = [
  ['/', '1.0'],
  ['/perche', '0.9'],
  ['/come-funziona', '0.9'],
  ['/app', '0.9'],
  ['/casi', '0.8'],
  ['/prezzi', '0.9'],
  ['/chi-siamo', '0.7'],
  ['/demo', '0.9'],
  ['/calcolatore', '0.8'],
  ['/faq', '0.7'],
  ['/contatti', '0.6'],
  ...apps.map((a) => [`/${a.slug}`, '0.9'] as [string, string]),
  ['/guida', '0.7'],
  ['/gestionale', '0.7'],
  ['/privacy-policy', '0.2'],
  ['/cookie-policy', '0.2'],
];

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      ([path, priority]) => `  <url>
    <loc>${site.url}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
