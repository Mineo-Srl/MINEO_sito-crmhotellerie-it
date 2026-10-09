/* Genera public/img/og-crm-hotellerie.png (1200×630) da scripts/og-template.html
   usando Chrome in headless. Uso:  npm run og                                */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import { promisify } from 'node:util';

const run = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const CHROME = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.svg': 'image/svg+xml',
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let file;
  if (url.pathname === '/') file = join(root, 'scripts/og-template.html');
  else if (url.pathname.startsWith('/fonts/')) file = join(root, 'src', normalize(url.pathname));
  else file = join(root, 'public', normalize(url.pathname));

  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end('not found');
  }
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));
const { port } = server.address();

let chrome = null;
for (const c of CHROME) {
  try { await readFile(c); chrome = c; break; } catch { /* prova il successivo */ }
}
if (!chrome) {
  server.close();
  console.error('✗ Nessun browser Chromium trovato: salto la generazione dell’immagine OG.');
  process.exit(1);
}

const out = join(root, 'public/img/og-crm-hotellerie.png');
await run(chrome, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=1',
  '--window-size=1200,630',
  `--screenshot=${out}`,
  `http://127.0.0.1:${port}/`,
]);

server.close();
console.log('✓ Immagine OG generata: public/img/og-crm-hotellerie.png');
