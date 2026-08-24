# Lorenzo Vicino — sito personale

Un sito statico e volutamente semplice per raccogliere percorso, strumenti e progetti.

## Struttura

- `index.html` — contenuti, struttura semantica e metadati SEO
- `css/style.css` — stile responsive
- `images/` — immagini dei progetti e favicon
- `404.html` — pagina non trovata
- `sitemap.xml` e `robots.txt` — indicizzazione

## Scelte

- solo HTML e CSS
- nessun framework
- nessun JavaScript
- font di sistema
- contenuti leggibili anche senza effetti o interazioni
- navigazione da tastiera, skip link e focus visibile

## Anteprima locale

```bash
python3 -m http.server 8000
```

Poi apri `http://localhost:8000`.

## Pubblicazione

Il push su `main` avvia il workflow GitHub Pages in `.github/workflows/deploy.yml`.
