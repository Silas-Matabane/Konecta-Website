# Konecta Group — Corporate Website

The official corporate website for **Konecta Group (Pty) Ltd**, a Level 1 B-BBEE, 100% women-owned telecoms and digital infrastructure consultancy operating in the TMT (Technology, Media and Telecommunications) sector across Africa. Built as a modern single-page application with a premium glassmorphism design system.

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **React Router 7** — Client-side routing
- **Tailwind CSS 3** — Utility-first styling with custom design tokens
- **PostCSS + Autoprefixer** — CSS processing

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Silas-Matabane/Konecta-Website.git
cd Konecta-Website/konecta-app
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
├── public/                     # Static assets (images, fonts, case study HTML)
│   ├── case-studies/           # HTML case study documents
│   ├── fonts/                  # Custom Blur Medium font
│   └── images/                 # All site imagery organised by category
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI components
│   │   │   ├── Breadcrumbs.jsx       # Page breadcrumb navigation
│   │   │   ├── CTASection.jsx        # Call-to-action banner
│   │   │   ├── FloatingNav.jsx       # Sticky floating navigation
│   │   │   ├── MicrosoftLogo.jsx     # Microsoft partner 4-square logo
│   │   │   ├── PageHeader.jsx        # Standard inner-page hero header
│   │   │   ├── PageTransition.jsx    # Route transition wrapper
│   │   │   ├── ScrollProgressBar.jsx # Reading progress indicator
│   │   │   ├── ScrollToTop.jsx       # Scroll restoration on route change
│   │   │   ├── SectionEyebrow.jsx    # Uppercase section label
│   │   │   ├── SEO.jsx               # Page-level meta tags & Open Graph
│   │   │   └── ThemedIcon.jsx        # SVG icon component (named keys)
│   │   ├── layout/             # App shell
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   └── sections/           # Page section components
│   │       ├── Hero.jsx              # Full-screen hero with animated stat cards
│   │       ├── ServicesGrid.jsx      # 5 service pillars (tabbed selector)
│   │       ├── Pipeline.jsx          # 4-stage value chain (Build→Platform→Analytics→Revenue)
│   │       ├── KaiSection.jsx        # AI Infrastructure & Factory spotlight
│   │       ├── MicrosoftPartnership.jsx  # Microsoft ecosystem partnership
│   │       ├── EventsSection.jsx     # Industry events (CIO Konect, Municipal Indaba, etc.)
│   │       ├── UseCasesSection.jsx   # Tabbed real-world client use cases
│   │       ├── IndustriesSection.jsx # Industries served (6 sectors)
│   │       ├── Leadership.jsx        # CEO & leadership profile
│   │       ├── LogoMarquee.jsx       # Partner logos marquee
│   │       ├── PartnersSection.jsx   # Technology partner grid
│   │       ├── Testimonials.jsx      # Client testimonials grid
│   │       └── InsightsSection.jsx   # Latest insights & articles
│   ├── data/                   # Centralised content & data
│   │   ├── constants.js              # HERO_STATS, badges, PAGE_SEO, nav links, leadership data
│   │   ├── services.js               # Services array, pipelineStages, microsoftSolutions, kaiFeatures
│   │   ├── events.js / eventsData.js # Event listings
│   │   ├── blogData.js / insights.js # Blog posts & insights
│   │   ├── useCases.js               # Client use cases
│   │   ├── impactData.js             # Impact stats
│   │   ├── partners.js               # Technology partner logos
│   │   ├── testimonials.js           # Client quotes
│   │   └── wifiPlatform.js           # WiFi platform feature data
│   ├── hooks/                  # Custom React hooks
│   │   ├── useClock.js               # Real-time clock
│   │   ├── useCountUp.js             # Animated number counter (scroll-triggered)
│   │   └── useInView.js              # IntersectionObserver hook for scroll animations
│   ├── pages/                  # Route-level page components
│   │   ├── HomePage.jsx              # Main landing page
│   │   ├── AboutPage.jsx             # Company profile
│   │   ├── ServicesPage.jsx          # Services overview + AI Factory
│   │   ├── PlatformPage.jsx          # Intelligence platform detail
│   │   ├── MicrosoftPage.jsx         # Microsoft partnership detail
│   │   ├── WifiPlatformPage.jsx      # WiFi-as-a-Service platform
│   │   ├── AcademyPage.jsx           # Konecta Academy
│   │   ├── EventsPage.jsx            # Events listing & detail
│   │   ├── EventDetailPage.jsx       # Single event page
│   │   ├── ImpactPage.jsx            # Impact & case studies
│   │   ├── ImpactDetailPage.jsx      # Single impact story
│   │   ├── InsightsPage.jsx          # Blog & articles
│   │   ├── ArticlePage.jsx           # Single article
│   │   └── ContactPage.jsx           # Contact form & details
│   ├── css/
│   │   └── wifi-platform.css         # WiFi platform page custom styles
│   ├── App.jsx                 # Router & route definitions
│   ├── main.jsx                # Application entry point
│   └── index.css               # Tailwind directives, design tokens & global styles
├── index.html
├── vite.config.js              # Vite config with path aliases
├── tailwind.config.js          # Tailwind theme (Konecta colours, fonts, animations)
├── postcss.config.js
├── eslint.config.js
└── package.json
```

## Path Aliases

| Alias         | Path              |
| ------------- | ----------------- |
| `@`           | `src/`            |
| `@components` | `src/components/` |
| `@pages`      | `src/pages/`      |
| `@data`       | `src/data/`       |
| `@hooks`      | `src/hooks/`      |
| `@assets`     | `src/assets/`     |

## Design System

The site uses a custom glassmorphism design system built on Tailwind CSS.

### Colour Tokens

| Token                  | Value     | Usage                            |
| ---------------------- | --------- | -------------------------------- |
| `konecta-black`        | `#1E252C` | Primary dark background          |
| `konecta-dark-gray`    | `#161C22` | Alternating section background   |
| `konecta-mid-gray`     | `#1A2029` | Mid-depth panels                 |
| `konecta-orange`       | `#F48120` | Primary brand accent             |
| `konecta-orange-light` | `#FFA04D` | Hover states                     |
| `konecta-white`        | `#F5F2EC` | Primary text / light backgrounds |
| `konecta-muted`        | `#C4C9CC` | Secondary / muted text           |

### Typography

- **Blur** — Custom display font (logo wordmark)
- **Inter** — Headings (`font-heading`)
- **Catamaran** — Body text

### Utility Classes

| Class                  | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `glass-card`           | Semi-transparent glass panel with border    |
| `glass-card-orange`    | Orange-tinted glass card                    |
| `glass-card-blue`      | Blue-tinted glass card (Microsoft sections) |
| `text-gradient-orange` | Orange gradient text                        |
| `text-gradient-blue`   | Blue gradient text                          |
| `btn-primary`          | Solid orange CTA button                     |
| `btn-secondary`        | Ghost button                                |
| `content-px`           | Responsive horizontal padding (clamp-based) |
| `py-section`           | Responsive vertical section padding         |
| `section-title`        | Responsive section heading size             |

### Section Background Alternation

Sections use two alternating backgrounds to visually separate content:

- `bg-konecta-black` (#1E252C) — primary sections
- `bg-konecta-dark-gray` (#161C22) — alternating sections (MicrosoftPartnership, UseCasesSection, Leadership, InsightsSection, KaiSection)
- `bg-[#0D0D0D]` — Pipeline section (deep contrast accent)

## Pages & Routes

| Route             | Page             | Description                        |
| ----------------- | ---------------- | ---------------------------------- |
| `/`               | HomePage         | Landing page with all key sections |
| `/about`          | AboutPage        | Company overview and values        |
| `/services`       | ServicesPage     | Five service pillars + AI Factory  |
| `/platform`       | PlatformPage     | Intelligence platform detail       |
| `/microsoft`      | MicrosoftPage    | Microsoft partnership              |
| `/wifi-platform`  | WifiPlatformPage | WiFi-as-a-Service                  |
| `/academy`        | AcademyPage      | Konecta Academy                    |
| `/events`         | EventsPage       | Events listing                     |
| `/events/:id`     | EventDetailPage  | Single event detail                |
| `/impact`         | ImpactPage       | Impact & case studies              |
| `/impact/:id`     | ImpactDetailPage | Single impact story                |
| `/insights`       | InsightsPage     | Blog & articles                    |
| `/insights/:slug` | ArticlePage      | Single article                     |
| `/contact`        | ContactPage      | Contact form & details             |

## Services

| #   | Service                     | Description                                                      |
| --- | --------------------------- | ---------------------------------------------------------------- |
| 1   | WiFi-as-a-Service           | Managed public Wi-Fi with analytics, monetisation & guest CX     |
| 2   | Software & Digital Services | Custom platform development, apps & digital transformation       |
| 3   | Managed IT                  | End-to-end IT management, cloud, infrastructure & support        |
| 4   | Business Consulting         | TMT strategy, market entry, and enterprise advisory              |
| 5   | AI Infrastructure & Factory | Production-grade AI deployment and intelligent data environments |

## Key Data Files

All content is centralised in `src/data/` for easy updates without touching component code:

- **`constants.js`** — Edit `HERO_STATS` to update hero stat cards. Edit `PAGE_SEO` for meta tags per route. Edit `LEADERSHIP_DATA` for leadership section content.
- **`services.js`** — Edit `services` array for the ServicesGrid tabs. Edit `pipelineStages` for the Pipeline section. Edit `kaiFeatures` for AI Factory cards.
- **`events.js`** — Add/edit events shown on the homepage EventsSection and EventsPage.
- **`insights.js` / `blogData.js`** — Add/edit insights and blog posts.
- **`useCases.js`** — Add/edit the use case tabs on the homepage.
- **`testimonials.js`** — Edit client testimonials.
- **`partners.js`** — Edit the partner logo marquee.

## License

Proprietary — Konecta Group (Pty) Ltd. All rights reserved.

├── postcss.config.js
├── eslint.config.js
└── package.json

```

```
