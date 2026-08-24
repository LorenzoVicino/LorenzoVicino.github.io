# Lorenzo Vicino — Portfolio

Portfolio personale statico, progettato per presentare in modo guidato profilo, competenze, progetti e formazione.

## Struttura

- `index.html` — contenuti, metadati SEO e struttura semantica
- `css/style.css` — design system, layout responsive e temi
- `js/main.js` — tema chiaro/scuro, navigazione attiva e menu mobile
- `images/` — anteprime dei progetti
- `404.html` — pagina di errore coordinata al portfolio

## Caratteristiche

- HTML, CSS e JavaScript senza framework o build step
- design responsive da 375 px in su
- tema chiaro/scuro con preferenza persistente
- navigazione da tastiera, skip link e focus visibile
- supporto a `prefers-reduced-motion`
- canonical, Open Graph, Twitter Card e dati strutturati `Person`/`ProfilePage`
- sitemap XML e robots.txt per l'indicizzazione

## Anteprima locale

```bash
python3 -m http.server 8000
```

Apri `http://localhost:8000` nel browser.

## Pubblicazione e indicizzazione

Il sito è servito dalla root del repository tramite GitHub Pages. Dopo il deploy, registra la proprietà in Google Search Console e invia `https://lorenzovicino.github.io/sitemap.xml`.
