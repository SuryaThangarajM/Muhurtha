# Muhurtha Divine Works — Website

Short static site for Muhurtha Divine Works built with Vite, React, and Tailwind CSS.

## Features
- Lightweight React frontend using Vite for fast dev reloads
- Tailwind CSS for utility-first styling
- Image and asset organization under `public/assets`

## Tech Stack
- Vite
- React (JSX)
- Tailwind CSS + PostCSS

## Project Structure
- [index.html](index.html)
- [package.json](package.json)
- [vite.config.js](vite.config.js)
- [tailwind.config.js](tailwind.config.js)
- [postcss.config.js](postcss.config.js)
- [src/](src/)
  - [src/main.jsx](src/main.jsx)
  - [src/App.jsx](src/App.jsx)
  - [src/index.css](src/index.css)
  - [src/assets/](src/assets/)
  - [src/components/](src/components/)
  - [src/sections/](src/sections/)
- [public/](public/) — static assets served as-is

## Prerequisites
- Node.js (recommended >= 16)
- npm or pnpm

## Setup & Development
1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

Notes: package scripts assume default Vite scripts (`dev`, `build`, `preview`). If your `package.json` uses different script names, run the corresponding commands.

## Tailwind / PostCSS
Configuration files are at the project root: [tailwind.config.js](tailwind.config.js) and [postcss.config.js](postcss.config.js). Styles entry is [src/index.css](src/index.css).

## Assets
All static images and media are in `public/assets`. When referencing in code, use absolute paths beginning with `/assets/` so Vite serves them correctly.

## Deployment
- This is a static SPA; build output is placed in `dist/` by Vite. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3).

## Contributing
- Open an issue or submit a PR for fixes and improvements.

## License
- Add your preferred license here.
