# CRM Hotel — landing page (Mineo)

Sito statico fatto con [Astro](https://astro.build). Contenuti e testi in `src/data/site.js`, pagine in `src/pages/`.

## Sviluppo locale

```bash
npm install
npm run dev        # sviluppo, http://localhost:4321
npm run build      # genera dist/
npm run serve      # anteprima di dist/ su http://localhost:4330
```

## Pubblicazione con GitHub

Il workflow `.github/workflows/deploy.yml` costruisce il sito e lo pubblica su GitHub Pages a ogni push su `main`.

1. Crea il repository su GitHub e fai il push del ramo `main`.
2. In **Settings → Pages** imposta **Source: GitHub Actions**.
3. Dominio: `site` in `astro.config.mjs` è `https://crmhotel.mineoepartners.it`. Per usare questo dominio aggiungi un file `public/CNAME` con il dominio e il record DNS CNAME verso `<organizzazione>.github.io`.
   Se invece il sito resta sull'indirizzo `https://<organizzazione>.github.io/<repo>/`, imposta in `astro.config.mjs` `site: 'https://<organizzazione>.github.io'` e `base: '/<repo>'` (i link interni usano l'helper `u()` e si adeguano da soli).

Le intestazioni di `public/_headers` valgono solo su Netlify/Cloudflare Pages: GitHub Pages le ignora.
