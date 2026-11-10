/* ==========================================================================
   SEO e GEO: title, meta description e parole chiave di ogni pagina, in un
   solo posto. Base.astro le legge in base al percorso; se una pagina non è
   qui, usa title e description passati dal componente.
   Regole: title ≤ 60 caratteri, description 120–158 caratteri, parola
   chiave principale all'inizio. Niente parola "problema".
   ========================================================================== */

export const seo = {
  '/': {
    title: 'Software gestionale per hotel su Zoho | CRM Hotellerie',
    description: 'Prenotazioni dirette senza commissioni, CRM ospiti, marketing e fatturazione in un unico software per hotel. Parti da un’area, i dati restano tuoi.',
    keywords: ['software gestionale hotel', 'CRM per hotel', 'booking engine hotel', 'PMS hotel', 'Zoho per hotel', 'prenotazioni dirette hotel'],
    crumb: null,
  },
  '/il-software/': {
    title: 'Booking engine, CRM e PMS per hotel | CRM Hotellerie',
    description: 'Le cinque aree di CRM Hotellerie in una pagina: marketing, booking engine e channel manager, CRM ospiti, PMS e reparti, analytics. Ognuna si attiva da sola.',
    keywords: ['booking engine hotel', 'channel manager hotel', 'CRM ospiti hotel', 'PMS hotel', 'fatturazione elettronica hotel', 'app pulizie hotel', 'analytics hotel'],
    crumb: 'Il software',
  },
  '/marketing/': {
    title: 'App di marketing per hotel su Zoho | CRM Hotellerie',
    description: 'PageSense, SalesIQ, Social, Forms, Marketing Automation, Survey e Thrive: le principali app Zoho per far prenotare e tornare gli ospiti del tuo hotel.',
    keywords: ['marketing per hotel', 'Zoho PageSense hotel', 'Zoho SalesIQ hotel', 'marketing automation hotel', 'NPS hotel', 'loyalty hotel'],
    crumb: 'Marketing',
  },
  '/trova-la-soluzione/': {
    title: 'Componi la soluzione per il tuo hotel | CRM Hotellerie',
    description: 'Scegli tipo di struttura ed esigenze: in due passi componi la tua soluzione CRM Hotellerie su misura e la porti in una demo gratuita con il team Mineo.',
    keywords: ['software hotel su misura', 'gestionale hotel modulare', 'CRM hotel per agriturismi e B&B', 'software resort'],
    crumb: 'Componi la tua soluzione',
  },
  '/chi-siamo/': {
    title: 'Mineo, Zoho Authorized Partner per hotel | CRM Hotellerie',
    description: 'Mineo S.r.l., Zoho Authorized Partner da 9 anni: configuriamo CRM Hotellerie sul tuo hotel, formiamo lo staff e restiamo al tuo fianco. I dati restano tuoi.',
    keywords: ['Zoho Authorized Partner', 'partner Zoho hotel', 'consulenza Zoho', 'Mineo'],
    crumb: 'Chi siamo',
  },
  '/demo/': {
    title: 'Prenota una demo gratuita | CRM Hotellerie',
    description: 'Demo gratuita e senza impegno di CRM Hotellerie con il team Mineo: ti mostriamo il software dal vivo e ragioniamo sui numeri della tua struttura.',
    keywords: ['demo software hotel', 'demo CRM hotel', 'prova gestionale hotel'],
    crumb: 'Prenota una demo',
  },
  '/guida/': {
    title: 'Guida gratuita: Zoho per il tuo hotel (PDF) | CRM Hotellerie',
    description: 'Scarica la guida gratuita di 9 pagine su marketing, booking engine, CRM, PMS e analytics per hotel su Zoho, con schermate reali e l’esempio sui numeri.',
    keywords: ['guida software hotel', 'Zoho per hotel PDF', 'guida CRM hotel'],
    crumb: 'Guida gratuita',
  },
  '/calcolatore/': {
    title: 'Calcolatore commissioni OTA per hotel | CRM Hotellerie',
    description: 'Calcola quanto ti costano le commissioni di Booking.com e degli altri portali e quanto margine guadagni su ogni camera prenotata dal tuo sito. Gratuito.',
    keywords: ['commissioni OTA', 'commissioni Booking.com', 'calcolo commissioni hotel', 'disintermediazione hotel'],
    crumb: 'Calcolatore commissioni',
  },
  '/faq/': {
    title: 'Domande frequenti: licenze Zoho e dati | CRM Hotellerie',
    description: 'Risposte su licenze Zoho, proprietà dei dati degli ospiti, channel manager, RMS, adempimenti e assistenza di CRM Hotellerie, il software per hotel su Zoho.',
    keywords: ['licenze Zoho hotel', 'dati ospiti hotel', 'FAQ software hotel'],
    crumb: 'Domande frequenti',
  },
  '/contatti/': {
    title: 'Contatti | CRM Hotellerie',
    description: 'Contatta il team Mineo per CRM Hotellerie, il software per hotel su Zoho: email, WhatsApp o demo gratuita. Ti rispondiamo in italiano.',
    keywords: ['contatti CRM Hotellerie', 'Mineo contatti'],
    crumb: 'Contatti',
  },
};

/* Pagine delle singole app di marketing (/marketing/<app>/): title e description
   da apps.js, con due titoli accorciati sotto i 60 caratteri. */
import { apps } from './apps.js';
const shortTitle = {
  'marketing-automation': 'Zoho Marketing Automation per hotel: email automatiche',
  social: 'Zoho Social per hotel: post, messaggi e lead in una coda',
};
for (const a of apps) {
  seo[`/marketing/${a.slug}/`] = {
    title: shortTitle[a.slug] || a.seo.title,
    description: a.seo.description.length > 158 ? a.seo.description.replace(' e registrazioni', '') : a.seo.description,
    keywords: a.seo.keywords,
    crumb: a.name,
  };
}
