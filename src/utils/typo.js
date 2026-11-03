// Tipografia: articoli e preposizioni brevi restano attaccati alla parola che
// segue, così una riga non si chiude mai con "la", "di", "un" e simili.
const BREVI = ['a', 'e', 'o', 'i', 'è', 'il', 'la', 'le', 'lo', 'un', 'di', 'da', 'in', 'su', 'al', 'ai', 'ad', 'ed', 'se'];
const RE = new RegExp('(^|[\\s(«"“])(' + BREVI.join('|') + ') ', 'gi');

/** Sostituisce lo spazio dopo le parole brevi con uno spazio unificatore. */
export function tighten(text) {
  if (typeof text !== 'string') return text;
  let out = text, prev;
  do {
    prev = out;
    out = out.replace(RE, (m, pre, w) => pre + w + ' ');
  } while (out !== prev);
  return out;
}
