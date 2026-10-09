import type { APIRoute } from 'astro';
import { site } from '../data/site.js';

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = (astroSite?.origin ?? site.url).replace(/\/$/, '');

  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
