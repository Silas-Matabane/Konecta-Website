# Konecta Group — Corporate Website

The official corporate website for **Konecta Group (Pty) Ltd**, Africa's leading telecoms and digital infrastructure consultancy. Built as a modern single-page application with a premium glassmorphism design system.

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 3** — Utility-first styling
- **PostCSS + Autoprefixer** — CSS processing

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/konecta-website.git
cd konecta-website/konecta-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000) with hot module replacement enabled.

### 4. Build for production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

### 6. Lint

```bash
npm run lint
```

## Project Structure

```
konecta-app/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI components
│   │   │   ├── CTASection.jsx        # Call-to-action banner
│   │   │   ├── MicrosoftLogo.jsx     # Microsoft partner logo
│   │   │   ├── ScrollToTop.jsx       # Scroll restoration on route change
│   │   │   ├── SectionEyebrow.jsx    # Section label component
│   │   │   └── Ticker.jsx            # Scrolling ticker band
│   │   ├── layout/             # App shell
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   └── sections/           # Homepage & page sections
│   │       ├── Hero.jsx              # Hero banner with animated counters
│   │       ├── Pipeline.jsx          # 4-stage value chain
│   │       ├── ServicesGrid.jsx      # 6 service pillars (tabbed)
│   │       ├── KaiSection.jsx        # AI Infrastructure & Factory
│   │       ├── MicrosoftPartnership.jsx  # Microsoft ecosystem
│   │       ├── EventsSection.jsx     # Industry events
│   │       ├── ImpactSection.jsx     # Case studies & impact
│   │       ├── Leadership.jsx        # CEO & leadership
│   │       ├── InsightsSection.jsx   # Blog / insights
│   │       ├── AfricaPresence.jsx    # Pan-African footprint
│   │       ├── CredibilityBand.jsx   # B-BBEE, Microsoft, women-owned
│   │       ├── LogoMarquee.jsx       # Partner logos marquee
│   │       ├── PartnersSection.jsx   # Technology partners
│   │       ├── Testimonials.jsx      # Client testimonials
│   │       └── WiTechAfricaBand.jsx  # WiTechAfrica promo band
│   ├── data/                   # Centralised content & data
│   │   ├── constants.js              # Company info, stats, nav links
│   │   ├── services.js               # Services, pipeline stages, Microsoft solutions
│   │   ├── events.js                 # Event listings
│   │   ├── insights.js               # Blog posts & case studies
│   │   ├── partners.js               # Technology partner logos
│   │   └── testimonials.js           # Client quotes
│   ├── hooks/                  # Custom React hooks
│   │   ├── useClock.js               # Real-time clock
│   │   ├── useCountUp.js            # Animated number counter
│   │   └── useInView.js             # Intersection Observer hook
│   ├── pages/                  # Route-level page components
│   │   ├── HomePage.jsx
│   │   ├── PlatformPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── MicrosoftPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ImpactPage.jsx
│   │   ├── InsightsPage.jsx
│   │   ├── AboutPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx                 # Router & route definitions
│   ├── main.jsx                # Application entry point
│   └── index.css               # Tailwind directives & global styles
├── index.html
├── vite.config.js              # Vite config with path aliases
├── tailwind.config.js          # Tailwind theme (Konecta colours, fonts)
├── postcss.config.js
├── eslint.config.js
└── package.json
```

## Path Aliases

The project uses Vite path aliases for clean imports:

| Alias         | Path              |
| ------------- | ----------------- |
| `@`           | `src/`            |
| `@components` | `src/components/` |
| `@pages`      | `src/pages/`      |
| `@data`       | `src/data/`       |
| `@hooks`      | `src/hooks/`      |
| `@assets`     | `src/assets/`     |

## Design System

The site uses a custom glassmorphism design system built on Tailwind CSS:

- **Colour palette** — `konecta-black`, `konecta-orange`, `konecta-blue`, `konecta-gold`, `konecta-white`, `konecta-muted`
- **Typography** — Syne (headings), Inter (body)
- **Glass cards** — `glass-card`, `glass-card-orange`, `glass-card-blue` utility classes
- **Gradient text** — `text-gradient-orange`, `text-gradient-blue`
- **Animations** — `animate-float`, `animate-float-slow`, `animate-pulse-dot`, `animate-fade-in`

## Key Sections

| Section               | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| **Hero**              | Full-screen banner with animated stat counters                 |
| **Pipeline**          | 4-stage model: Build → Platform → Analytics → Value Creation   |
| **Services**          | 6 pillars: WiFi, Managed IT, AI, Platform Dev, Consulting, OTT |
| **AI Infrastructure** | Enterprise AI Factory practice                                 |
| **Microsoft**         | Azure, Copilot, M365, Dynamics, Security partnership           |
| **Events**            | CIO Konect, Municipal Indaba, WiTechAfrica                     |
| **Impact**            | Case studies with measurable results                           |
| **Leadership**        | CEO Yandisa Sokhanyile and executive team                      |

## License

Proprietary — Konecta Group (Pty) Ltd. All rights reserved.
