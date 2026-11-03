#!/usr/bin/env bash
# Build del sito + creazione dello ZIP pronto per il deploy.
# Uso:  ./scripts/package.sh
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
ZIP="$OUT/crmhotellerie-emozione-$STAMP.zip"
mkdir -p "$OUT"

# Pulizia di eventuali file di sistema
find dist -name '.DS_Store' -delete 2>/dev/null || true

echo "▸ Creazione dello ZIP…"
rm -f "$ZIP"
# -X esclude gli attributi estesi macOS; i file finiscono nella root dello zip.
( cd dist && zip -q -r -X "$ZIP" . -x '.*' -x '__MACOSX/*' )

# Copia "latest" sempre allo stesso nome, comoda per gli upload ricorrenti
cp "$ZIP" "$OUT/crmhotellerie-emozione-latest.zip"

echo "✓ Fatto:"
echo "  $ZIP"
echo "  $OUT/crmhotellerie-emozione-latest.zip"
ls -lh "$ZIP" | awk '{print "  dimensione: " $5}'
