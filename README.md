# Muthu Balamurugan — Neo-Brutalist Portfolio

A high-performance, accessible, responsive portfolio built with React 18, TypeScript, and modern Vanilla CSS following strict Neo-Brutalist design principles and the project specifications in `PORTFOLIO_RULES.md`.

## Features

- **Neo-Brutalist Aesthetic**: Crisp high-contrast black borders (`3.5px`), bold hard drop shadows (`6px 6px 0 #000`), vibrant curated color palette (electric yellow, deep purple, hot pink, mint green), and subtle blueprint grid accents.
- **Real Content Only**: Features authentic projects (EchoVerse AI, AI Student OS, Motor Health Monitor, Eye Moment), real skills grouped by domain, verified certificates, and user profile photo.
- **Zero Emoji Spam**: Uses unified 2px/2.5px SVG icons across all sections.
- **7 Core Modular Sections**:
  1. `Home (Hero)`: Headline with highlighter splash, tilted "IDEAS INTO REALITY" block, 4 stat cards, and tools marquee ribbon.
  2. `About`: Short background story, engineering focus areas, and B.Tech education profile (7.8 CGPA).
  3. `Skills`: Grouped by domain (Programming Languages, AI/ML/CV, Web Engineering, Databases & DevOps, IoT & Hardware).
  4. `Projects`: Case-study cards with interactive modal popup detailing problem statements, technical architecture, and links.
  5. `Certifications`: Verified industry and academic credentials with verification links.
  6. `Resume`: Viewable structured summary and direct download for `Muthubala_Resume.pdf`.
  7. `Contact`: Interactive form with anti-spam honeypot, validation, copy-to-clipboard email button, and direct socials.
- **Accessibility & Responsive**: Full keyboard navigation, visible custom focus rings, semantic HTML5, skip-to-content link, mobile drawer with focus trap & ESC listener, responsive from 320px to 1920px+.
- **SEO & Performance**: Open Graph tags, Twitter card, SVG favicon, manifest, robots.txt, sitemap.xml, and Person JSON-LD structured data.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
The application will start at `http://localhost:3000/`.

### Production Build
```bash
npm run build
```
Build output is optimized and emitted to the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
