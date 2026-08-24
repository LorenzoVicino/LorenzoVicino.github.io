# Lorenzo Vicino — portfolio

Portfolio statico in stile terminale per raccogliere percorso, strumenti e progetti.

## Struttura

- `index.html` — contenuti, struttura semantica e metadati SEO
- `css/style.css` — stile responsive
- `js/main.js` — menu mobile, filtri, progetti espandibili e modulo email
- `images/` — immagini dei progetti e favicon
- `404.html` — pagina non trovata
- `sitemap.xml` e `robots.txt` — indicizzazione

## Scelte

- HTML, CSS e JavaScript senza dipendenze applicative
- nessun framework
- JetBrains Mono con fallback monospace di sistema
- layout desktop e mobile dedicati
- navigazione da tastiera, skip link e focus visibile

## Anteprima locale

```bash
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Pubblicazione

Il push su `main` avvia il workflow GitHub Pages in `.github/workflows/deploy.yml`.
