# CIPHER-MUX Website Rebuild — Claude Design + i18n

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the cipher-mux website based on the Claude Design handoff with i18n support (de/en), new design tokens, new component library, and updated content across 4 pages (Landing, Features, Install, Docs).

**Architecture:** Astro static site with i18n via directory-based routing (`/de/...`, `/en/...`), root redirects to `/de/`. Design tokens from Claude Design handoff as CSS custom properties. Components rebuilt to match handoff's Cyberpunk-Pragmatismus aesthetic. Content from `Texte_neu.md` (de+en).

**Tech Stack:** Astro 5.x, TypeScript strict, vanilla CSS, no frameworks.

**Key References:**
- Design handoff: `ClaudeDesign/design_handoff_cipher_mux_website/`
- Design tokens: `features-shared.jsx` → `cmPalette()`, `cmSpacing()`
- Component reference: `styles.css` (production-ready CSS)
- Content: `ClaudeDesign/Texte_neu.md`
- Existing site: `src/` (will be largely replaced)

---

## File Structure

```
src/
├── i18n/
│   ├── ui.ts                    # UI string translations (nav, footer, labels)
│   ├── de/
│   │   ├── landing.ts           # German landing page content
│   │   ├── features.ts          # German features page content
│   │   ├── install.ts           # German install page content
│   │   └── docs.ts              # German docs page content
│   └── en/
│       ├── landing.ts           # English landing page content
│       ├── features.ts          # English features page content
│       ├── install.ts           # English install page content
│       └── docs.ts              # English docs page content
├── layouts/
│   └── Layout.astro             # Base HTML (rebuilt with new tokens)
├── components/
│   ├── Header.astro             # Sticky header with lang switch
│   ├── Footer.astro             # Footer with domain + legal links
│   ├── ThemeToggle.astro        # Dark/light toggle (kept)
│   ├── LangSwitch.astro         # de/en language switcher
│   ├── PixelGrid.astro          # 3x3 hero icon (kept)
│   ├── PillarCard.astro         # Landing pillar (updated styling)
│   ├── CMSectionHeader.astro    # Section header with num + kicker
│   ├── CMBox.astro              # Cut-corner content box
│   ├── CMTag.astro              # Mono-type badge
│   ├── ScrollNav.astro          # Sticky anchor nav (rebuilt)
│   ├── TerminalBlock.astro      # Mac terminal mockup
│   ├── Callout.astro            # Tip/warn/rule callout box
│   └── ThemeShowcase.astro      # Theme carousel (kept)
├── pages/
│   ├── index.astro              # Root redirect → /de/
│   ├── de/
│   │   ├── index.astro          # Landing DE
│   │   ├── features.astro       # Features DE
│   │   ├── start.astro          # Install DE
│   │   ├── docs.astro           # Docs DE
│   │   ├── impressum.astro      # Legal DE
│   │   └── datenschutz.astro    # Privacy DE
│   └── en/
│       ├── index.astro          # Landing EN
│       ├── features.astro       # Features EN
│       ├── start.astro          # Install EN
│       ├── docs.astro           # Docs EN
│       ├── imprint.astro        # Legal EN
│       └── privacy.astro        # Privacy EN
└── styles/
    ├── global.css               # Reset, font-face, geometry tokens
    ├── theme-light.css          # Light tokens (updated from handoff)
    ├── theme-dark.css           # Dark tokens (updated from handoff)
    └── components.css           # All component styles (rebuilt from handoff styles.css)
```

---

### Task 1: i18n Content System

**Files:**
- Create: `src/i18n/ui.ts`
- Create: `src/i18n/de/landing.ts`, `src/i18n/de/features.ts`, `src/i18n/de/install.ts`, `src/i18n/de/docs.ts`
- Create: `src/i18n/en/landing.ts`, `src/i18n/en/features.ts`, `src/i18n/en/install.ts`, `src/i18n/en/docs.ts`

- [ ] **Step 1: Create ui.ts with shared UI translations**

Shared strings for nav, footer, theme toggle, labels — everything that appears in Layout/Header/Footer.

```typescript
// src/i18n/ui.ts
export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui: Record<Lang, Record<string, string>> = {
  de: {
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.docs': 'Dokumentation',
    'nav.github': 'GitHub',
    'theme.tooltip': 'Theme wechseln',
    'footer.mark': 'CIPHER-MUX',
    'footer.version': 'v0.9.9 · macOS · MIT',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// auf dieser seite',
  },
  en: {
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.docs': 'Documentation',
    'nav.github': 'GitHub',
    'theme.tooltip': 'Change theme',
    'footer.mark': 'CIPHER-MUX',
    'footer.version': 'v0.9.9 · macOS · MIT',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// on this page',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
```

- [ ] **Step 2: Create German content files**

All 4 content files from the German section of `Texte_neu.md`. Each exports typed content objects. Content is taken verbatim from the text file.

Source: `ClaudeDesign/Texte_neu.md` — Deutsche Version, Sections A-D.

- [ ] **Step 3: Create English content files**

Same structure, English content from `Texte_neu.md` — English Version, Sections A-D.

Note: The English hero tagline needs re-translation from the updated German. The file says "aus deutsch neu übersetzen bitte" — use: "Agentic Engineering for Makers. And everyone else." as the tagline (it's already good), but rephrase the subtext to match the German sachlich tone.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n content system with de/en translations"
```

---

### Task 2: Update Design Tokens and Styles

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/styles/theme-light.css`
- Modify: `src/styles/theme-dark.css`
- Rewrite: `src/styles/components.css`

- [ ] **Step 1: Update global.css**

Key changes from Claude Design handoff:
- Body font is now `'Rajdhani', sans-serif` for prose (NOT Fira Code)
- Fira Code is mono/UI only
- Type scale updated: H1 clamp(48px, 6vw, 96px), H2 38-48px, body 16-19px
- Add `text-wrap: pretty` on body paragraphs
- Header height now 52px (was 48px)
- Rajdhani weight 400 needed for body — we only have 700 (Bold). Must add Rajdhani-Medium.woff2 or use Google Fonts import for 400/500/600 weights.

Decision: Use Google Fonts for Rajdhani (4 weights: 400, 500, 600, 700) since we only have Bold locally. Keep Fira Code local. Add `@import` for Rajdhani in global.css.

- [ ] **Step 2: Update theme tokens**

From handoff `cmPalette()` — light theme `textSecondary` stays `#4A4A52`, dark theme `textSecondary` changes to `#E5E9F0` (was `#D8DEE9`), dark `textDim` to `#9BA3B0` (was `#7B8394` — brighter, addressing the "too dark" feedback).

Add preset colors and persona colors as CSS variables. Add terminal palette variables.

- [ ] **Step 3: Rewrite components.css from handoff styles.css**

Take `ClaudeDesign/design_handoff_cipher_mux_website/styles.css` as the new base. It already has all the right class names (`cm-header`, `cm-btn`, `cm-pillar`, etc.), tokens, and the refined styling. Adapt it for our CSS custom property system (replace hardcoded colors with `var(--color-*)` where the handoff uses class-based theming).

Key additions from handoff:
- `.cm-header` (52px, accent dot before wordmark)
- `.cm-statusbar` (app-flavored footer variant)
- `.cm-not h3::before` with `// ` prefix
- `.cm-pillar:hover` states
- `.cm-footer-mark` with letter-spacing 4px

- [ ] **Step 4: Verify build**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/styles/
git commit -m "feat: update design tokens and components from Claude Design handoff"
```

---

### Task 3: Rebuild Layout and Core Components

**Files:**
- Rewrite: `src/layouts/Layout.astro`
- Rewrite: `src/components/Header.astro`
- Create: `src/components/LangSwitch.astro`
- Rewrite: `src/components/Footer.astro`
- Keep: `src/components/ThemeToggle.astro` (minor update)

- [ ] **Step 1: Rebuild Layout.astro**

Accept props: `title`, `description`, `lang` (Lang type from i18n). Set `<html lang={lang}>`. Import styles. FOUC-prevention script. Slot for head extras.

- [ ] **Step 2: Rebuild Header.astro**

Props: `lang`, `active` (which nav item is current).
- 52px height, sticky
- Accent dot before wordmark (8px square, `var(--color-accent)`)
- Wordmark: Rajdhani 700, 17px, letter-spacing 6px
- Nav links with active state (border-bottom accent)
- LangSwitch + ThemeToggle on the right
- All links localized via `getLocalizedPath(lang, '/path')`

- [ ] **Step 3: Create LangSwitch.astro**

Simple toggle: shows "DE" or "EN", clicking switches to the other language version of the current page. Uses the current URL path to determine the equivalent path in the other language.

Style: Fira Code 11px, uppercase, cut-corner border, same style as theme toggle.

- [ ] **Step 4: Rebuild Footer.astro**

Props: `lang`.
From handoff: accent dot + wordmark + version + domain on left, link row on right.
Links: GitHub, Issues, Privacy, Imprint — all localized.

- [ ] **Step 5: Create root redirect**

`src/pages/index.astro` — redirects to `/de/`:

```astro
---
return Astro.redirect('/de/');
---
```

- [ ] **Step 6: Verify**

```bash
npm run dev
```

Navigate to localhost:4321/de/ — should show header with lang switch, footer, empty content area.

- [ ] **Step 7: Commit**

```bash
git add src/layouts/ src/components/ src/pages/index.astro
git commit -m "feat: rebuild layout with i18n, lang switch, and Claude Design header/footer"
```

---

### Task 4: Landing Page (de + en)

**Files:**
- Create: `src/pages/de/index.astro`
- Create: `src/pages/en/index.astro`
- Update: `src/components/PillarCard.astro`
- Keep: `src/components/PixelGrid.astro`

- [ ] **Step 1: Update PillarCard styling to match handoff**

Pillar hover state, h3 at 22px, letter-spacing 1.2px, link with arrow `::after`.

- [ ] **Step 2: Build de/index.astro**

Import German landing content from `src/i18n/de/landing.ts`. Structure:
1. Hero with PixelGrid, label-tag, tagline ("Agentic Engineering for Makers. And everyone else."), subtext, 3 CTAs
2. Pillars 2x2 grid (4 cards from content)
3. Not-section with `// ` prefix on heading
4. Schema.org JSON-LD

- [ ] **Step 3: Build en/index.astro**

Same structure, import English content. Minimal code duplication — the page structure is identical, only content source differs.

- [ ] **Step 4: Verify both languages**

```bash
npm run dev
```

Check `/de/` and `/en/` render correctly. Lang switch navigates between them.

- [ ] **Step 5: Commit**

```bash
git add src/pages/de/index.astro src/pages/en/index.astro src/components/PillarCard.astro
git commit -m "feat: landing page de/en with Claude Design styling"
```

---

### Task 5: Features Page (de + en)

**Files:**
- Create: `src/components/CMSectionHeader.astro`
- Create: `src/components/CMBox.astro`
- Create: `src/components/CMTag.astro`
- Update: `src/components/ScrollNav.astro`
- Create: `src/pages/de/features.astro`
- Create: `src/pages/en/features.astro`

- [ ] **Step 1: Create CMSectionHeader, CMBox, CMTag components**

From handoff:
- CMSectionHeader: num (accent), kicker (dim uppercase Fira Code), title (Rajdhani H2), optional lead
- CMBox: cut-corner box with border, optional `elevated` or `accent` variants
- CMTag: inline Fira Code badge, uppercase, 10px

- [ ] **Step 2: Update ScrollNav**

Match handoff's CMAnchorNav: `// auf dieser seite` / `// on this page` header, numbered items with left-border active state, accent highlight. Accept `lang` prop.

- [ ] **Step 3: Build de/features.astro**

11 sections from German features content. Each section uses CMSectionHeader. Section 01 (Cockpit) includes stat-boxes. Section 05 (Presets) includes preset role list with preset colors.

- [ ] **Step 4: Build en/features.astro**

Same structure, English content.

- [ ] **Step 5: Verify and commit**

```bash
git add src/components/ src/pages/de/features.astro src/pages/en/features.astro
git commit -m "feat: features page de/en with 11 sections and Claude Design components"
```

---

### Task 6: Install Page (de + en)

**Files:**
- Create: `src/components/TerminalBlock.astro`
- Create: `src/components/Callout.astro`
- Create: `src/pages/de/start.astro`
- Create: `src/pages/en/start.astro`

- [ ] **Step 1: Create TerminalBlock component**

Mac terminal mockup from handoff: title bar with 3 colored dots (red/yellow/green), dark terminal background, Fira Code content. Props: `title`, slot for content lines.

- [ ] **Step 2: Create Callout component**

From handoff: left-border accent bar, 3 kinds (tip/warn/rule). Props: `kind`, slot for content.

- [ ] **Step 3: Build de/start.astro**

3-phase install page from German content. Phase markers, terminal blocks for install commands, callout for voice note.

- [ ] **Step 4: Build en/start.astro**

Same structure, English content.

- [ ] **Step 5: Verify and commit**

```bash
git add src/components/ src/pages/de/start.astro src/pages/en/start.astro
git commit -m "feat: install page de/en with terminal blocks and phase layout"
```

---

### Task 7: Docs Page (de + en)

**Files:**
- Create: `src/pages/de/docs.astro`
- Create: `src/pages/en/docs.astro`

- [ ] **Step 1: Build de/docs.astro**

Long-scroll reference page. Hero with kicker "Referenz · v0.9.9". Sections §01-§15 grouped as in the content file. Uses CMSectionHeader with § prefix numbering. ScrollNav with all section anchors.

- [ ] **Step 2: Build en/docs.astro**

Same structure, English content.

- [ ] **Step 3: Verify and commit**

```bash
git add src/pages/de/docs.astro src/pages/en/docs.astro
git commit -m "feat: docs reference page de/en with 15-chapter structure"
```

---

### Task 8: Legal Pages + Theme Showcase

**Files:**
- Create: `src/pages/de/impressum.astro`, `src/pages/de/datenschutz.astro`
- Create: `src/pages/en/imprint.astro`, `src/pages/en/privacy.astro`
- Move: `src/components/ThemeShowcase.astro` (update for new token names)

- [ ] **Step 1: Create legal page scaffolds (de + en)**

Same placeholder structure as before, localized. German has Impressum/Datenschutz, English has Imprint/Privacy Policy.

- [ ] **Step 2: Update ThemeShowcase for new tokens**

Ensure theme showcase uses the new CSS variable names and works with the updated design system.

- [ ] **Step 3: Verify and commit**

```bash
git add src/pages/de/ src/pages/en/ src/components/ThemeShowcase.astro
git commit -m "feat: legal pages de/en and updated theme showcase"
```

---

### Task 9: Cleanup and Final Polish

**Files:**
- Delete: old single-language pages (`src/pages/features.astro`, `src/pages/start.astro`, `src/pages/community.astro`, `src/pages/impressum.astro`, `src/pages/datenschutz.astro`)
- Modify: `astro.config.mjs` (update for i18n)
- Modify: `src/layouts/Layout.astro` (OG meta, favicon)

- [ ] **Step 1: Remove old single-language pages**

Delete all pages that have been replaced by the `/de/` and `/en/` versions.

- [ ] **Step 2: Update astro.config.mjs**

Add i18n config:
```javascript
export default defineConfig({
  site: 'https://cipher-mux.dev',
  base: '/',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});
```

- [ ] **Step 3: Update meta tags and OG for new domain**

All references to `cmarkus42.github.io/cipher-mux-site` → `cipher-mux.dev`. Update font paths from `/cipher-mux-site/fonts/` to `/fonts/`.

- [ ] **Step 4: Full build and verify**

```bash
npm run build
```

Expected: 12+ pages (6 de + 6 en), clean build.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete rebuild with Claude Design, i18n de/en, new domain"
```

---

## Checkpoint Summary

| After Task | Preview Checkpoint |
|------------|-------------------|
| 1 | Content system ready, no visual change |
| 2 | Updated tokens — existing pages use new colors/type |
| 3 | New layout, header with lang switch, footer |
| 4 | Landing page in de + en |
| 5 | Features page with 11 sections, de + en |
| 6 | Install page with terminal blocks, de + en |
| 7 | Docs reference page, de + en |
| 8 | Legal + theme showcase |
| 9 | Clean, production-ready, all old pages removed |
