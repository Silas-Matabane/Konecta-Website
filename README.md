# KONECTA Website

Africa's Premier Telecoms & Technology Consultancy — corporate website.

## Project Structure

```
├── index.html           Main HTML page
├── css/
│   └── styles.css       All styles (variables, components, responsive)
├── js/
│   └── main.js          JavaScript (smooth scroll, interactions)
├── assets/
│   └── images/          Image assets (see README inside for naming)
└── README.md            This file
```

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, grid, flexbox, keyframe animations
- **Vanilla JS** — no frameworks or build tools
- **Fonts** — Google Fonts (Syne + DM Sans)

## Running Locally

Open `index.html` in a browser. No build step required.

For live reload during development, use any static server:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

## Design Tokens

Defined as CSS custom properties in `:root` within `css/styles.css`:

| Token            | Value     |
| ---------------- | --------- |
| `--black`        | `#0A0A0A` |
| `--white`        | `#F5F2EC` |
| `--orange`       | `#E85A1B` |
| `--orange-light` | `#FF7A3D` |
| `--gold`         | `#C9A84C` |
| `--blue`         | `#0078D4` |

## Responsive

Single breakpoint at `960px` for mobile/tablet layouts.
