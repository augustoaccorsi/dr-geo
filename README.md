# Dr. Geo — Daiana Rodrigues, Geóloga

Site profissional de **Daiana Rodrigues**, geóloga — oferecendo mapeamento geológico, consultoria ambiental, análise de solo e rocha, e levantamentos de campo.

🌐 **Live:** [augustoaccorsi.github.io/dr-geo](https://augustoaccorsi.github.io/dr-geo/)

---

## Stack

| Tech | Role |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite 7 | Build tool & dev server |
| styled-components | CSS-in-JS styling |
| react-router-dom v7 | Client-side routing |
| react-i18next | Internationalisation (PT / EN) |
| react-icons | Icon library |
| GitHub Actions | CI/CD deploy to GitHub Pages |

## Pages

- **Home** — hero, stats, highlights, process steps, CTA
- **Sobre** — bio, mission/vision, values, credentials, career timeline
- **Serviços** — service cards, feature deep-dives, pricing packages
- **Contato** — mailto form (subject + message), contact info, FAQ

## Getting Started

```bash
cd dr-geo
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dr-geo/dist/`.

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via `.github/workflows/deploy.yml`.

To enable for the first time:
1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to **GitHub Actions**
3. Push any commit — the workflow handles the rest

## Internationalisation

Default language is **Portuguese (pt)**. English is also available.
To change the default, update `lng` in [`src/i18n/index.ts`](src/i18n/index.ts).
Translation files live in [`src/i18n/locales/`](src/i18n/locales/).
