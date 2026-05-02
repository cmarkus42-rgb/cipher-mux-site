# CIPHER-MUX Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page Astro website for the CIPHER-MUX open-source release with full content, dual themes (light/dark), and GitHub Pages deployment.

**Architecture:** Static Astro site with TypeScript-strict, vanilla CSS custom properties for theming, locally bundled fonts (Rajdhani, Fira Code), cut-corner geometry throughout. Light mode default, Nord-based dark mode as alternative. Content from existing finalized texts, strategically tightened for scroll-based deep-dive layout.

**Tech Stack:** Astro 5.x, TypeScript strict, vanilla CSS, GitHub Pages via withastro/action@v3.

**Design Spec:** `docs/superpowers/specs/2026-05-02-cipher-mux-website-design.md`

**Content Sources:**
- Primary texts: `/Users/Shared/Nextcloud/Claude/mux_community/Webdesign/CIPHER-MUX Webdesign Session/website-texte-final.md`
- Feature reference: `docs/website-content-brain.md`
- Brand guide: `/Users/Shared/Nextcloud/Claude/ClaudeCode01/cipher-mux-electron/docs/BRAND.md`

---

## File Structure

```
cipher-mux-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML, head, meta, schema.org, font loading
│   ├── components/
│   │   ├── Header.astro              # Fixed header: wordmark, nav, theme toggle
│   │   ├── Footer.astro              # MIT, GitHub link, minimal
│   │   ├── ThemeToggle.astro         # Cut-corner button + localStorage script
│   │   ├── PixelGrid.astro           # 3x3 hero icon, configurable colors
│   │   ├── PillarCard.astro          # Single pillar with 5x5 pixel icon
│   │   ├── ScrollNav.astro           # Dezente Scroll-Indikation fuer Deep-Dive
│   │   ├── FeatureSection.astro      # Single scroll section in Deep-Dive
│   │   └── ThemeShowcase.astro       # Theme-Karussell Easter Egg
│   ├── pages/
│   │   ├── index.astro               # Landing page
│   │   ├── features.astro            # Deep-Dive (6 scroll sections)
│   │   ├── start.astro               # Download & Install
│   │   └── community.astro           # Community + Roadmap
│   └── styles/
│       ├── global.css                # Reset, font-face, base tokens, spacing
│       ├── theme-light.css           # Light mode CSS custom properties
│       ├── theme-dark.css            # Dark/Nord mode CSS custom properties
│       └── components.css            # Buttons, cards, layout patterns, cut corners
├── public/
│   ├── fonts/
│   │   ├── Rajdhani-Bold.woff2
│   │   ├── FiraCode-Regular.woff2
│   │   └── FiraCode-Medium.woff2
│   └── favicon.png
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml
```

---

### Task 1: Astro Project Scaffolding

**Files:**
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`

- [ ] **Step 1: Initialize Astro project**

```bash
cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site
npm create astro@latest . -- --template minimal --typescript strict --install --no-git
```

- [ ] **Step 2: Configure astro.config.mjs for GitHub Pages**

```javascript
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cmarkus42.github.io',
  base: '/cipher-mux-site',
  integrations: [sitemap()],
});
```

Install sitemap:
```bash
npx astro add sitemap
```

- [ ] **Step 3: Add .superpowers/ to .gitignore**

Append to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 4: Initialize git and commit**

```bash
git init
git add .
git commit -m "chore: initial Astro setup with TypeScript strict"
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: Astro dev server on localhost:4321, default welcome page.

---

### Task 2: Fonts and Base Styles

**Files:**
- Create: `public/fonts/Rajdhani-Bold.woff2`, `public/fonts/FiraCode-Regular.woff2`, `public/fonts/FiraCode-Medium.woff2`
- Create: `src/styles/global.css`, `src/styles/theme-light.css`, `src/styles/theme-dark.css`, `src/styles/components.css`

- [ ] **Step 1: Copy font files from cipher-mux-electron**

```bash
mkdir -p public/fonts
cp /Users/Shared/Nextcloud/Claude/ClaudeCode01/cipher-mux-electron/src/renderer/fonts/Rajdhani-Bold.woff2 public/fonts/
cp /Users/Shared/Nextcloud/Claude/ClaudeCode01/cipher-mux-electron/src/renderer/fonts/FiraCode-Regular.woff2 public/fonts/
cp /Users/Shared/Nextcloud/Claude/ClaudeCode01/cipher-mux-electron/src/renderer/fonts/FiraCode-Medium.woff2 public/fonts/
```

- [ ] **Step 2: Create global.css with reset, font-face, and base tokens**

```css
/* src/styles/global.css */

/* === Reset === */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  line-height: 1.7;
  background: var(--color-bg);
  color: var(--color-text);
  transition: background 0.3s ease, color 0.3s ease;
}
a { color: var(--color-accent); text-decoration: none; }
a:hover { text-decoration: underline; }
img { max-width: 100%; display: block; }

/* === Font Face === */
@font-face {
  font-family: 'Rajdhani';
  src: url('/cipher-mux-site/fonts/Rajdhani-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Fira Code';
  src: url('/cipher-mux-site/fonts/FiraCode-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Fira Code';
  src: url('/cipher-mux-site/fonts/FiraCode-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}

/* === Geometry Tokens === */
:root {
  --cut-corner: 8px;
  --cut-corner-lg: 14px;
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 12px;
  --space-lg: 16px;
  --space-xl: 24px;
  --space-2xl: 32px;
  --space-3xl: 48px;
  --space-4xl: 80px;
  --max-width: 960px;
  --transition-fast: 0.1s ease;
  --transition-base: 0.15s ease;
  --transition-slow: 0.3s ease;
}

/* === Typography === */
h1, h2, h3 {
  font-family: 'Rajdhani', Impact, 'Arial Narrow', sans-serif;
  font-weight: 700;
  line-height: 1.2;
}
h1 { font-size: clamp(36px, 5vw, 52px); letter-spacing: 2px; }
h2 { font-size: 28px; letter-spacing: 1.5px; }
h3 { font-size: 20px; letter-spacing: 1px; }
```

- [ ] **Step 3: Create theme-light.css (primary/default)**

```css
/* src/styles/theme-light.css */
:root, [data-theme="light"] {
  --color-bg: #F4F3ED;
  --color-bg-elevated: #FEFEFB;
  --color-bg-sunken: #ECEAE2;
  --color-border: #C8C5B8;
  --color-border-strong: #3A3F47;
  --color-text: #1A1A1D;
  --color-text-secondary: #4A4A52;
  --color-text-dim: #8A8A82;
  --color-accent: #006B7A;
  --color-accent-hover: #0088A0;
  --color-neon-green: #2d8a4e;
  --color-bg-overlay: rgba(244, 243, 237, 0.85);
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.06);
}
```

- [ ] **Step 4: Create theme-dark.css (Nord-based)**

```css
/* src/styles/theme-dark.css */
[data-theme="dark"] {
  --color-bg: #2E3440;
  --color-bg-elevated: #3B4252;
  --color-bg-sunken: #272C36;
  --color-border: #434C5E;
  --color-border-strong: #4C566A;
  --color-text: #ECEFF4;
  --color-text-secondary: #D8DEE9;
  --color-text-dim: #7B8394;
  --color-accent: #88C0D0;
  --color-accent-hover: #8FBCBB;
  --color-neon-green: #A3BE8C;
  --color-bg-overlay: rgba(46, 52, 64, 0.85);
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.20), 0 2px 6px rgba(0,0,0,0.16);
}
```

- [ ] **Step 5: Create components.css**

```css
/* src/styles/components.css */

/* === Cut Corner Clip Paths === */
.cut-corner {
  clip-path: polygon(
    var(--cut-corner) 0, 100% 0,
    100% calc(100% - var(--cut-corner)),
    calc(100% - var(--cut-corner)) 100%,
    0 100%, 0 var(--cut-corner)
  );
}
.cut-corner-lg {
  clip-path: polygon(
    var(--cut-corner-lg) 0, 100% 0,
    100% calc(100% - var(--cut-corner-lg)),
    calc(100% - var(--cut-corner-lg)) 100%,
    0 100%, 0 var(--cut-corner-lg)
  );
}

/* === Buttons === */
.btn {
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 10px 24px;
  border: 1px solid var(--color-border-strong);
  background: none;
  color: var(--color-text);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  clip-path: polygon(
    var(--cut-corner) 0, 100% 0,
    100% calc(100% - var(--cut-corner)),
    calc(100% - var(--cut-corner)) 100%,
    0 100%, 0 var(--cut-corner)
  );
  transition: border-color var(--transition-base), color var(--transition-base),
              background var(--transition-base);
}
.btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  text-decoration: none;
}
.btn--primary {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.btn--primary:hover {
  background: var(--color-accent);
  color: var(--color-bg-elevated);
}

/* === Label Tag === */
.label-tag {
  display: inline-block;
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-text-dim);
  border: 1px solid var(--color-border);
  padding: 3px 10px;
  clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
}

/* === Section Container === */
.section {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-3xl) var(--space-2xl);
}

/* === Grid Background === */
.grid-bg {
  position: relative;
}
.grid-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg, transparent, transparent 39px, var(--color-border) 39px, var(--color-border) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, var(--color-border) 39px, var(--color-border) 40px);
  opacity: 0.15;
  pointer-events: none;
}

/* === Responsive === */
@media (max-width: 768px) {
  .section { padding: var(--space-2xl) var(--space-lg); }
}
```

- [ ] **Step 6: Commit**

```bash
git add public/fonts/ src/styles/
git commit -m "feat: add fonts and base CSS with light/dark theme tokens"
```

---

### Task 3: Layout and Core Components

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/components/Header.astro`, `src/components/Footer.astro`, `src/components/ThemeToggle.astro`

- [ ] **Step 1: Create Layout.astro**

Base layout with HTML shell, CSS imports, Schema.org JSON-LD slot, theme initialization script.

Key points:
- Import all 4 CSS files in order: global, theme-light, theme-dark, components
- `<script>` in head that reads `localStorage.getItem('theme')` and sets `data-theme` on `<html>` before paint (no flash)
- `<slot name="schema" />` for per-page Schema.org
- `<slot />` for page content
- Wrap in Header + Footer

- [ ] **Step 2: Create Header.astro**

Fixed header, 48px height:
- Left: "CIPHER-MUX" wordmark in Rajdhani 700, letter-spacing 5px
- Right: 3 nav links (Features, Download, Community) + ThemeToggle
- Border-bottom, background bg-elevated
- Mobile: links stay visible (only 3, they fit)

- [ ] **Step 3: Create ThemeToggle.astro**

Cut-corner button, 20x20px:
- Click toggles `data-theme` between "light" and "dark" on `<html>`
- Saves to `localStorage`
- Visual: half-filled square icon via CSS pseudo-element

- [ ] **Step 4: Create Footer.astro**

Minimal footer:
- Left: "MIT License · Single Maintainer"
- Right: GitHub repo link
- Border-top, text-dim color

- [ ] **Step 5: Verify layout renders**

Create minimal `src/pages/index.astro` with Layout wrapper and placeholder text.

```bash
npm run dev
```

Expected: Page renders with header, footer, grid background, correct fonts.

- [ ] **Step 6: Commit**

```bash
git add src/layouts/ src/components/ src/pages/
git commit -m "feat: add Layout, Header, Footer, ThemeToggle components"
```

---

### Task 4: Landing Page

**Files:**
- Create: `src/components/PixelGrid.astro`, `src/components/PillarCard.astro`
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Create PixelGrid.astro**

3x3 CSS grid of `<span>` elements, configurable size (prop: `cellSize`, default 14px).
Center cell gets accent color, corner cells get varying opacity. Props for customization.

- [ ] **Step 2: Create PillarCard.astro**

Component for one pillar in the 2x2 grid. Props: `title`, `description`, `link`, `iconPattern` (string identifying which 5x5 pixel pattern to render). Renders the 5x5 pixel-art icon, h3, paragraph, and "Mehr erfahren →" link.

- [ ] **Step 3: Build index.astro with full Landing content**

Sections in order:
1. **Hero** — grid-bg, PixelGrid, label-tag "Open Source · macOS · MIT", h1 "Dein Coding-Cockpit.", subtitle, 3 CTA buttons
2. **Pillars** — 2x2 grid with PillarCard: Beschreiben statt coden, Von der Idee zum Projekt, Lernen durch Machen, Fuer alle
3. **"Was es nicht ist"** — 5 bullet points with border-left accent
4. **Schema.org** — WebSite + SoftwareApplication JSON-LD

Text source: Seite 0 from `website-texte-final.md`.

- [ ] **Step 4: Preview and verify**

```bash
npm run dev
```

Expected: Full landing page with hero, pillars, not-section. Both themes work via toggle. Responsive on mobile.

- [ ] **Step 5: Commit**

```bash
git add src/
git commit -m "feat: landing page with hero, pillars, and content"
```

---

### Task 5: Deep-Dive Features Page

**Files:**
- Create: `src/components/FeatureSection.astro`, `src/components/ScrollNav.astro`
- Create: `src/pages/features.astro`

- [ ] **Step 1: Create FeatureSection.astro**

Component for one scroll section. Props: `id` (anchor), `title`, `subtitle`. Uses `<slot>` for body content. Renders with section separator (hairline), anchor target, and consistent spacing.

- [ ] **Step 2: Create ScrollNav.astro**

Dezente scroll-indikation. Fixed or sticky position. Shows 6 section labels in small text. Highlights current section via IntersectionObserver. Typographic styling (Fira Code, small uppercase, letter-spacing). Appears only on the features page.

- [ ] **Step 3: Build features.astro with 6 tightened content sections**

Sections (each as FeatureSection):
1. **Bauen ohne Code-Angst** (`#bauen`) — "Die Wand hat eine Tuer." Core pitch: describe instead of code. Concrete workflow example. Quality section.
2. **Ein Team, kein Tool** (`#prozess`) — 5-phase lifecycle. Personas as cognitive specializations. "Du musst das nicht steuern."
3. **Das glaeserne Cockpit** (`#transparent`) — Everything visible. Learning by observing. Honest assessment.
4. **Barrierefreies Coding** (`#zugaenglich`) — Voice, WCAG AAA, BT Remote, Companion, learning paths, grid abstraction.
5. **Orchestrierung** (`#orchestrierung`) — Grid, sessions, Orchestrator, MPO. The cockpit feeling.
6. **Alles bleibt bei dir** (`#lokal`) — Local-first list, cloud contact explanation, MIT license.

Text source: Seiten 1-6 from `website-texte-final.md`, tightened for scroll context. Remove redundancies, keep strongest passages.

- [ ] **Step 4: Preview scroll behavior**

```bash
npm run dev
```

Expected: Smooth scroll between sections, scroll-nav shows current position, all content readable. Anchors work from landing page pillar links.

- [ ] **Step 5: Commit**

```bash
git add src/
git commit -m "feat: deep-dive features page with 6 scroll sections"
```

---

### Task 6: Download & Install Page

**Files:**
- Create: `src/pages/start.astro`

- [ ] **Step 1: Build start.astro**

Technical page, structured as:
1. **Voraussetzungen** — Table (Was | Pruefen | Installieren) for macOS, Homebrew, tmux, Node, Claude Code CLI, Anthropic Account
2. **Installation** — Code block with git clone + npm install + build + start. Voice-Hinweis.
3. **Erster Start** — Numbered list: tmux init, Projekt oeffnen, zweite Session, Sidebar, Orchestrator
4. **Tipp: Companion** — Short paragraph
5. **Erster Workflow** — 5-step walkthrough
6. **Troubleshooting** — Table (Problem | Loesung)
7. **Settings** — Short list

Text source: Seite 8 from `website-texte-final.md`.

Style: Tables with cut-corner treatment. Code blocks with bg-sunken background, Fira Code. Numbered lists with accent-colored numbers.

- [ ] **Step 2: Preview**

```bash
npm run dev
```

Expected: Clean technical page, tables readable, code block styled.

- [ ] **Step 3: Commit**

```bash
git add src/pages/start.astro
git commit -m "feat: download & install page"
```

---

### Task 7: Community Page

**Files:**
- Create: `src/pages/community.astro`

- [ ] **Step 1: Build community.astro**

Personal page, structured as:
1. **Warum es existiert** — Maintainer story (Seite 7, "Warum es existiert" + "Was es ist")
2. **Feedback** — What's welcome, how to give it
3. **Beitragen** — GitHub Issues, Discussions, PRs
4. **Was ich nicht verspreche** — Expectations management
5. **Roadmap** — v1 (jetzt), v2 (geplant), v3 (Perspektive), Windows (nicht auf dem Pfad) — from Seite 9

Text source: Seiten 7 + 9 from `website-texte-final.md`.

Style: More personal tone. Blockquotes for maintainer voice. Roadmap as timeline-style list with version markers.

- [ ] **Step 2: Preview**

```bash
npm run dev
```

Expected: Personal, warm page. Roadmap readable. GitHub links present.

- [ ] **Step 3: Commit**

```bash
git add src/pages/community.astro
git commit -m "feat: community page with maintainer story and roadmap"
```

---

### Task 8: Theme Showcase (Spielerei)

**Files:**
- Create: `src/components/ThemeShowcase.astro`
- Modify: `src/pages/features.astro` (add showcase at bottom)

- [ ] **Step 1: Create ThemeShowcase.astro**

Small interactive component:
- Shows 10 theme swatches as clickable color tiles (name + colors from cipher-mux themes)
- Clicking a swatch temporarily applies that theme's colors to the page via CSS custom property overrides
- "Zuruecksetzen" button restores normal light/dark toggle
- Label: "So fuehlt sich CIPHER-MUX an" or similar
- All 10 theme color sets defined inline (cipher-dark, cipher-ivory, blueprint, warm-paper, gruvbox, nord, synthwave, matrix, brutalist, high-contrast)

- [ ] **Step 2: Add showcase to features.astro**

Place after the last FeatureSection, before footer. Subtle placement — it's a bonus, not a main feature.

- [ ] **Step 3: Preview theme switching**

```bash
npm run dev
```

Expected: Clicking theme tiles changes page colors. Feels playful. Reset works.

- [ ] **Step 4: Commit**

```bash
git add src/
git commit -m "feat: theme showcase easter egg on features page"
```

---

### Task 9: Schema.org, Meta, and Polish

**Files:**
- Modify: `src/layouts/Layout.astro` (meta tags)
- Modify: `src/pages/index.astro` (Schema.org)
- Modify: all pages (page-specific meta)

- [ ] **Step 1: Add comprehensive meta tags to Layout.astro**

- `<title>` per page (prop)
- `<meta name="description">` per page (prop)
- `<meta property="og:*">` tags
- `<link rel="icon" href="/cipher-mux-site/favicon.png">`
- `<meta name="theme-color">` for light/dark

- [ ] **Step 2: Add Schema.org to Landing**

JSON-LD in index.astro:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CIPHER-MUX",
  "url": "https://cmarkus42.github.io/cipher-mux-site"
}
```
Plus SoftwareApplication:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CIPHER-MUX",
  "operatingSystem": "macOS",
  "applicationCategory": "DeveloperApplication",
  "license": "https://opensource.org/licenses/MIT",
  "url": "https://github.com/cmarkus42/cipher-mux-electron"
}
```

- [ ] **Step 3: Copy favicon**

```bash
cp /Users/Shared/Nextcloud/Claude/ClaudeCode01/cipher-mux-electron/assets/icon.png public/favicon.png
```

(Or generate a 32x32 crop if the full icon is too large.)

- [ ] **Step 4: Responsive check**

Preview all pages at 375px, 768px, 1024px, 1440px width. Fix any layout issues.

- [ ] **Step 5: Build test**

```bash
npm run build
```

Expected: Clean build, no errors, output in `dist/`.

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: meta tags, schema.org, favicon, responsive polish"
```

---

### Task 10: GitHub Pages Deploy

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy workflow**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Install, build, and upload
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Final build verification**

```bash
npm run build && npx astro preview
```

Expected: Site works correctly at preview URL with base path.

- [ ] **Step 3: Commit**

```bash
git add .github/
git commit -m "ci: add GitHub Pages deploy workflow"
```

- [ ] **Step 4: Ready for push**

Site is ready. Push to `cipher-mux-site` GitHub repo when Christian gives the go.

---

## Checkpoint Summary

| After Task | Preview Checkpoint |
|------------|-------------------|
| 3 | Layout, header, footer, fonts, theme toggle working |
| 4 | Landing page with full content |
| 5 | Deep-dive with 6 scroll sections + scroll nav |
| 6 | Download page with tables and code blocks |
| 7 | Community page with story and roadmap |
| 8 | Theme showcase functional |
| 9 | Meta, schema, responsive — production-ready |
| 10 | Deploy pipeline — ready for push |
