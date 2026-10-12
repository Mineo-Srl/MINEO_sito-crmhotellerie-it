/**
 * Server statico locale: fa vedere la landing esattamente come sarà online.
 *
 * Uso:  node scripts/serve.mjs [cartella] [porta]
 *       npm run serve                  → serve dist/ sulla porta 4329
 *       npm run serve -- deploy/xyz    → serve un'altra cartella
 *
 * Serve perché aprendo i file con doppio clic (file://) il browser non sa che
 * l'indirizzo /privacy-policy corrisponde a privacy-policy/index.html, e i percorsi
 * assoluti di CSS, font e immagini vengono cercati nella radice del disco.
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';

const PROJECT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = resolve(process.argv[2] || join(PROJECT, 'dist'));
const PORT = Number(process.argv[3] || 4329);

if (!existsSync(ROOT)) {
  console.error(`✗ Cartella "${ROOT}" inesistente. Esegui prima "npm run build".`);
  process.exit(1);
}

/* Legge il base path da astro.config.mjs, così resta allineato se cambia */
function readBase() {
  try {
    const cfg = readFileSync(join(PROJECT, 'astro.config.mjs'), 'utf8');
    const m = cfg.match(/^\s*base:\s*['"]([^'"]*)['"]/m);
    if (!m) return '';
    return m[1].replace(/\/+$/, '');
  } catch {
    return '';
  }
}
const BASE = readBase();

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
};

const isFile = (p) => existsSync(p) && statSync(p).isFile();

/** Riproduce il comportamento dell'hosting: /pagina → pagina/index.html oppure pagina.html */
const resolveFile = (urlPath) => {
  let clean = normalize(decodeURIComponent(urlPath.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  if (BASE && (clean === BASE || clean.startsWith(`${BASE}/`))) clean = clean.slice(BASE.length) || '/';
  const target = join(ROOT, clean);
  if (!target.startsWith(ROOT)) return null; // niente uscite dalla cartella
  if (isFile(target)) return target;
  for (const candidate of [join(target, 'index.html'), `${target}.html`]) {
    if (isFile(candidate)) return candidate;
  }
  return null;
};

const server = createServer((req, res) => {
  const url = req.url || '/';

  /* Comodità: se la landing vive in una sottocartella, la radice ci rimanda */
  if (BASE && (url === '/' || url === '')) {
    res.writeHead(302, { Location: `${BASE}/` });
    return res.end();
  }

  const file = resolveFile(url);

  if (!file) {
    const notFound = join(ROOT, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    if (isFile(notFound)) return createReadStream(notFound).pipe(res);
    return res.end('<h1>404</h1><p>Pagina non trovata.</p>');
  }

  res.writeHead(200, {
    'Content-Type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'Cache-Control': 'no-store', // in locale vogliamo vedere sempre l'ultima versione
  });
  createReadStream(file).pipe(res);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`✗ La porta ${PORT} è già occupata. Riprova così:\n   npm run serve -- dist ${PORT + 1}`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}${BASE}/`;
  console.log('\n  CRM Hotel — anteprima locale');
  console.log(`  Cartella:  ${ROOT}`);
  console.log(`  Indirizzo: ${url}\n`);
  console.log('  Lascia questa finestra aperta mentre navighi.');
  console.log('  Per chiudere: premi Ctrl+C oppure chiudi la finestra.\n');
  execFile('open', [url], () => {});
});
