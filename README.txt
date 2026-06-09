# Nicole P. — Sito Link Page

## Struttura file
```
nicolepalmer/
├── index.html        ← pagina principale
├── css/
│   └── style.css     ← tutti gli stili
├── js/
│   └── main.js       ← logica age gate e interazioni
└── README.txt        ← questo file
```

## Come caricare su GitHub Pages

1. Vai nel tuo repository su GitHub
2. Carica tutti i file mantenendo la struttura delle cartelle
3. Assicurati che `index.html` sia nella root (cartella principale)
4. GitHub Pages pubblicherà automaticamente il sito

## Come aggiungere il link Fanvue

Apri il file `js/main.js` e cerca questa riga:
```
let fanvueUrl = '#'; // Verrà aggiornato con il link reale
```

Sostituisci `'#'` con il tuo link Fanvue, ad esempio:
```
let fanvueUrl = 'https://www.fanvue.com/nicolep';
```

## Come cambiare i link social

Apri `index.html` e cerca i tag `<a href="...">` dei social:
- Instagram: cerca `href="https://instagram.com"` → sostituisci con il tuo profilo
- Twitter: cerca `href="https://twitter.com"` → sostituisci con il tuo profilo
- It's: cerca `href="https://it.s"` → sostituisci con il tuo profilo

## Personalizzazione handle (@username)

In `index.html` cerca le righe con `@nicolep` e sostituisci con i tuoi username reali.

---
Creato con ❤ — 2026
