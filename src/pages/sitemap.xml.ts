/* Sitemap per Google e motori AI: solo le pagine indicizzabili. */
import { site } from '../data/site.js';
const pages = ['/', '/il-software/', '/marketing/', '/trova-la-soluzione/', '/chi-siamo/', '/demo/', '/guida/', '/calcolatore/', '/faq/', '/contatti/', '/privacy-policy/', '/cookie-policy/'];
export const GET = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((p) => `  <url><loc>${site.url}${p}</loc><lastmod>${today}</lastmod><priority>${p === '/' ? '1.0' : p.includes('policy') ? '0.2' : '0.8'}</priority></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
};
