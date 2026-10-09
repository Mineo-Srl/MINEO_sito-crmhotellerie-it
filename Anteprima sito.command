#!/bin/zsh
# Doppio clic su questo file per vedere la landing in locale come sarà online.
# Si apre una finestra di Terminale e il browser sull'anteprima: lasciala aperta
# mentre navighi, chiudila (o Ctrl+C) quando hai finito.
#
# Nota: aprire i file .html con doppio clic non funziona, perché il browser non sa
# che /privacy-policy corrisponde a privacy-policy/index.html e cerca CSS e immagini
# nella radice del disco.

cd "$(dirname "$0")" || exit 1

export PATH="$HOME/.local/nodejs/node-v24.19.0-darwin-x64/bin:$PATH"

if ! command -v node > /dev/null 2>&1; then
  echo "✗ Node non trovato in ~/.local/nodejs/node-v24.19.0-darwin-x64/bin"
  echo "  La landing non può essere generata senza Node."
  echo ""
  read "?Premi Invio per chiudere."
  exit 1
fi

# Se manca la build la rigenera
if [ ! -d dist ]; then
  echo "Genero la landing…"
  npm run build || { echo "✗ Build fallita."; read "?Premi Invio per chiudere."; exit 1; }
fi

node scripts/serve.mjs dist 4328
