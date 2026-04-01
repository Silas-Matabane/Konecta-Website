# KONECTA Website

Africa's Premier Telecoms & Technology Consultancy — corporate website.

## Quick Start

The main application lives in the `konecta-app/` directory. You'll need **Node.js v18+** installed.

```bash
git clone https://github.com/Silas-Matabane/Konecta-Website.git
cd Konecta-Website/konecta-app
npm install
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000).

See [konecta-app/README.md](konecta-app/README.md) for the full project documentation, structure, and available scripts.

## Repository Structure

```
├── konecta-app/         React application (Vite + Tailwind CSS)
├── index.html           Legacy static HTML page
├── css/                 Legacy styles
├── js/                  Legacy scripts
├── assets/              Shared image assets
└── docs/                Documentation
```

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 3** — Utility-first styling

## Available Scripts

Run these from the `konecta-app/` directory:

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start dev server with hot reload         |
| `npm run build`   | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint                               |

## Legacy Static Site

The root-level `index.html`, `css/`, and `js/` directories contain the original static HTML version of the site. These are kept for reference but are no longer actively maintained.

## License

Proprietary — Konecta Group (Pty) Ltd. All rights reserved.
