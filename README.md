# Harry Miller — Portfolio

Static portfolio built with Next.js 14.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for deployment

```bash
npm run build      # outputs static site to /out
```

Upload the `/out` folder to any static host (Vercel, Netlify, GitHub Pages).

## Pages

- `/` — Home
- `/business` — Business Projects catalogue
- `/masters` — Masters Projects (coming soon)
- `/projects/template` — Template project page
- `/projects/template-store` — Template Store project page

## Customising

- **Projects:** Edit `data/projects.js` to update titles, descriptions, tags, and add new entries.
- **Name / bio:** Edit `pages/index.js`.
- **Nav:** Edit `components/Nav.js`.
- **Theme:** Dark/light mode is handled via `context/ThemeContext.js` — preference is persisted in `localStorage`.
- **Images:** Replace the `Image Placeholder` divs with `<Image>` components from `next/image`.
