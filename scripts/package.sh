#!/usr/bin/env bash
# Build della landing + creazione dello ZIP pronto per il deploy.
# Uso:  npm run package     (oppure ./scripts/package.sh)
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Node non è installato a livello di sistema: aggiungiamo la build locale al PATH.
if ! command -v node >/dev/null 2>&1; then
  for d in "$HOME/.local/nodejs"/*/bin; do
    [ -d "$d" ] && export PATH="$d:$PATH" && break
  done
fi

echo "▸ Build in corso…"
npm run build

STAMP="$(date +%Y%m%d-%H%M)"
OUT="$ROOT/deploy"
ZIP="$OUT/crm-hotellerie-dato-$STAMP.zip"
mkdir -p "$OUT"

# Pulizia dei file di sistema macOS
find dist -name '.DS_Store' -delete 2>/dev/null || true

echo "▸ Creazione dello ZIP…"
rm -f "$ZIP"
# -X esclude gli attributi estesi macOS; i file finiscono nella root dello zip.
( cd dist && zip -q -r -X "$ZIP" . -x '.*' -x '__MACOSX/*' )

# Copia "latest", comoda per gli upload ricorrenti
cp "$ZIP" "$OUT/crm-hotellerie-dato-latest.zip"

echo "✓ Fatto:"
echo "  $ZIP"
echo "  $OUT/crm-hotellerie-dato-latest.zip"
ls -lh "$ZIP" | awk '{print "  dimensione: " $5}'
echo
echo "  Il contenuto dello ZIP va caricato nella ROOT del dominio"
echo "  (index.html deve trovarsi al primo livello, non in una sottocartella)."
