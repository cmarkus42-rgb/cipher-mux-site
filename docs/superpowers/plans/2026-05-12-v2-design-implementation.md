# v2 Design Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the Claude Design v2 handoff into the existing Astro site — new visual language for Landing + Docs, pixel-faithful to the JSX prototypes.

**Architecture:** The current site already has the correct token system (teal accent, Nord dark, cut-corners, Rajdhani+Fira Code). The v2 redesign changes page layouts and introduces new components, not the foundational tokens. Work proceeds bottom-up: shared components first, then Docs pages (priority), then Landing page.

**Tech Stack:** Astro, vanilla CSS with CSS custom properties, TypeScript i18n files.

---

## File Structure

### New files
```
src/components/PixelGlyph.astro          — 8x8 pixel art icons for entities/personas
src/components/ScreenshotSlot.astro      — dashed placeholder for missing screenshots
src/components/DocsHero.astro            — shared hero for all docs subpages
src/components/DocsSection.astro         — section wrapper with section marker
src/components/CMBox.astro               — cut-corner box (elevated/accent variants)
src/components/Callout.astro             — tip/warn/rule callout with left border
src/components/LedRow.astro              — voice LED status visualization
src/components/Ladder.astro              — hierarchical list with priority markers
```

### Modified files
```
src/styles/components.css                — new component classes (.cm-box, .callout, .pixel-glyph, etc.)
src/styles/theme-light.css               — add --color-warn if missing
src/styles/theme-dark.css                — add --color-warn if missing
src/components/DocsNav.astro             — update to match v2 TabBar (subtitle per tab)
src/pages/de/docs/index.astro            — v2 docs hub with page heading
src/pages/de/docs/start.astro            — v2 layout with DocsHero, DocsSection, ScreenshotSlot
src/pages/de/docs/concepts.astro         — v2 layout with PixelGlyph, pipeline, Ladder
src/pages/de/docs/usage.astro            — v2 layout with LedRow, restructured sections
src/pages/de/index.astro                 — v2 landing: Hero A, Story-Stack pillars, Systemabgrenzung
src/components/HeroCockpit.astro         — v2 Hero A (cockpit mock with 4 sessions)
src/i18n/de/landing.ts                   — v2 hero text, pillar colors, Systemabgrenzung items
src/i18n/en/landing.ts                   — mirror changes
src/i18n/de/docs-hub.ts                  — v2 page heading text
src/i18n/en/docs-hub.ts                  — mirror
src/i18n/ui.ts                           — update docs-nav subtitles
src/pages/en/docs/index.astro            — mirror DE changes
src/pages/en/index.astro                 — mirror DE changes
```

---

## Task 1: Add missing CSS tokens and utility classes

**Files:**
- Modify: `src/styles/theme-light.css`
- Modify: `src/styles/theme-dark.css`
- Modify: `src/styles/components.css`

- [ ] **Step 1: Add `--color-warn` token to both themes**

In `theme-light.css` add:
```css
--color-warn: #D08770;
```

In `theme-dark.css` add:
```css
--color-warn: #D08770;
```

- [ ] **Step 2: Add v2 utility classes to `components.css`**

Append to `components.css`:
```css
/* ─── v2 Cut-corner sizes ─── */
.cut-sm  { clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }
.cut-md  { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
.cut-lg  { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }

/* ─── v2 Section kicker (// NN + line + label) ─── */
.cm-kicker {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--color-text-dim);
  text-transform: uppercase;
  margin-bottom: 18px;
}
.cm-kicker__num { color: var(--color-accent); }
.cm-kicker__line { flex: 0 0 14px; height: 1px; background: var(--color-border); }
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npx astro check 2>&1 | tail -5`
Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add src/styles/theme-light.css src/styles/theme-dark.css src/styles/components.css
git commit -m "feat(tokens): add --color-warn and v2 utility classes"
```

---

## Task 2: Create shared v2 components (CMBox, Callout, ScreenshotSlot, DocsHero, DocsSection)

**Files:**
- Create: `src/components/CMBox.astro`
- Create: `src/components/Callout.astro`
- Create: `src/components/ScreenshotSlot.astro`
- Create: `src/components/DocsHero.astro`
- Create: `src/components/DocsSection.astro`

- [ ] **Step 1: Create CMBox.astro**

Cut-corner box with elevated/accent variants. Props: `elevated?: boolean`, `accent?: boolean`, `padding?: number`.

```astro
---
interface Props {
  elevated?: boolean;
  accent?: boolean;
  padding?: number;
}
const { elevated = false, accent = false, padding = 24 } = Astro.props;
---
<div
  class:list={['cm-box', { 'cm-box--elevated': elevated, 'cm-box--accent': accent }]}
  style={`padding: ${padding}px;`}
>
  <slot />
</div>

<style>
  .cm-box {
    border: 1px solid var(--color-border);
    background: var(--color-bg);
    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
  }
  .cm-box--elevated { background: var(--color-bg-elevated); }
  .cm-box--accent { border-color: var(--color-accent); }
</style>
```

- [ ] **Step 2: Create Callout.astro**

Props: `kind: 'tip' | 'warn' | 'rule'`, `title?: string`.

```astro
---
interface Props {
  kind: 'tip' | 'warn' | 'rule';
  title?: string;
}
const { kind, title } = Astro.props;
---
<div class={`callout callout--${kind}`}>
  {title && <div class="callout__title">{title}</div>}
  <div class="callout__body"><slot /></div>
</div>

<style>
  .callout {
    padding: 14px 18px;
    margin: 16px 0;
    border: 1px solid var(--color-border);
    background: var(--color-bg-sunken);
  }
  .callout--tip  { border-left: 3px solid var(--color-accent); }
  .callout--warn { border-left: 3px solid var(--color-warn); }
  .callout--rule { border-left: 3px solid var(--color-text); }
  .callout__title {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: var(--color-text);
    margin-bottom: 6px;
  }
  .callout__body {
    font-family: 'Rajdhani', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
</style>
```

- [ ] **Step 3: Create ScreenshotSlot.astro**

Props: `caption: string`, `placeholder: string`.

```astro
---
interface Props {
  caption: string;
  placeholder: string;
}
const { caption, placeholder } = Astro.props;
---
<figure class="screenshot-slot">
  <div class="screenshot-slot__box">
    <div class="screenshot-slot__caption">{caption}</div>
    <div class="screenshot-slot__placeholder">{placeholder}</div>
  </div>
</figure>

<style>
  .screenshot-slot { margin: 20px 0 14px; }
  .screenshot-slot__box {
    padding: 40px 28px;
    border: 1px dashed var(--color-border);
    background: var(--color-bg-sunken);
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    color: var(--color-text-dim);
    text-align: center;
    letter-spacing: 0.5px;
  }
  .screenshot-slot__caption {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 6px;
  }
  .screenshot-slot__placeholder {
    font-style: italic;
    opacity: 0.7;
  }
</style>
```

- [ ] **Step 4: Create DocsHero.astro**

Props: `kicker`, `title`, `titleAccent`, `body`.

```astro
---
interface Props {
  kicker: string;
  title: string;
  titleAccent: string;
  body: string;
}
const { kicker, title, titleAccent, body } = Astro.props;
---
<section class="docs-hero-v2">
  <div class="docs-hero-v2__inner">
    <div class="docs-hero-v2__kicker">{kicker}</div>
    <h1 class="docs-hero-v2__title">
      {title} <span class="accent">{titleAccent}</span>
    </h1>
    <p class="docs-hero-v2__body">{body}</p>
  </div>
</section>

<style>
  .docs-hero-v2 {
    padding: var(--section-pad-y) var(--section-pad-x) calc(var(--section-pad-y) * 0.6);
    border-bottom: 1px solid var(--color-border);
  }
  .docs-hero-v2__inner { max-width: 920px; }
  .docs-hero-v2__kicker {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: 14px;
  }
  .docs-hero-v2__title {
    font-size: clamp(40px, 5.4vw, 64px);
    letter-spacing: -0.02em;
    line-height: 1.0;
    margin: 0 0 18px;
  }
  .docs-hero-v2__title .accent { color: var(--color-accent); }
  .docs-hero-v2__body {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    color: var(--color-text-secondary);
    margin: 0;
    max-width: 680px;
    line-height: 1.7;
  }
</style>
```

- [ ] **Step 5: Create DocsSection.astro**

Props: `id`, `num`, `title`, `lead?`.

```astro
---
interface Props {
  id: string;
  num: string;
  title: string;
  lead?: string;
}
const { id, num, title, lead } = Astro.props;
---
<section id={id} class="docs-section-v2">
  <div class="cm-kicker">
    <span class="cm-kicker__num">{'$'} {num}</span>
    <span class="cm-kicker__line"></span>
    <span>{title}</span>
  </div>
  <h2 class="docs-section-v2__title">{title}</h2>
  {lead && <p class="docs-section-v2__lead">{lead}</p>}
  <slot />
</section>

<style>
  .docs-section-v2 {
    padding: var(--section-pad-y) var(--section-pad-x);
    border-top: 1px solid var(--color-border);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  .docs-section-v2__title {
    font-size: clamp(28px, 3.5vw, 38px);
    letter-spacing: -0.5px;
    margin: 0 0 14px;
  }
  .docs-section-v2__lead {
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    line-height: 1.7;
    color: var(--color-text-secondary);
    max-width: 760px;
    margin: 0 0 28px;
  }
</style>
```

- [ ] **Step 6: Verify build**

Run: `npx astro check 2>&1 | tail -5`

- [ ] **Step 7: Commit**

```bash
git add src/components/CMBox.astro src/components/Callout.astro src/components/ScreenshotSlot.astro src/components/DocsHero.astro src/components/DocsSection.astro
git commit -m "feat(components): add v2 shared components — CMBox, Callout, ScreenshotSlot, DocsHero, DocsSection"
```

---

## Task 3: Create PixelGlyph, LedRow, Ladder components

**Files:**
- Create: `src/components/PixelGlyph.astro`
- Create: `src/components/LedRow.astro`
- Create: `src/components/Ladder.astro`

- [ ] **Step 1: Create PixelGlyph.astro**

8x8 pixel art grid. Props: `name: string`, `color: string`, `size?: number`. Glyph data embedded as a JS map (from `docs-v2-konzepte.jsx` PIXEL_GLYPHS). Each cell: 0=transparent, 1=color, 2=background.

```astro
---
interface Props {
  name: string;
  color: string;
  size?: number;
}
const { name, color, size = 40 } = Astro.props;

const GLYPHS: Record<string, number[][]> = {
  companion:    [[0,1,1,1,1,1,1,0],[1,2,2,2,2,2,2,1],[1,2,1,0,0,1,2,1],[1,2,0,2,2,0,2,1],[1,2,0,2,2,0,2,1],[1,2,1,0,0,1,2,1],[1,2,2,2,2,2,2,1],[0,1,1,1,1,1,1,0]],
  voice:        [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0]],
  ideation:     [[0,0,0,1,1,0,0,0],[0,0,1,2,2,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,0,1,2,2,1,0,0],[0,0,1,1,1,1,0,0]],
  refinement:   [[1,1,0,0,0,0,1,1],[1,2,1,0,0,1,2,1],[0,1,2,1,1,2,1,0],[0,0,1,2,2,1,0,0],[0,0,1,2,2,1,0,0],[0,1,2,1,1,2,1,0],[1,2,1,0,0,1,2,1],[1,1,0,0,0,0,1,1]],
  cyberFactory: [[1,1,1,1,1,1,1,1],[1,2,2,1,1,2,2,1],[1,2,1,1,1,1,2,1],[1,1,1,2,2,1,1,1],[1,1,1,2,2,1,1,1],[1,2,1,1,1,1,2,1],[1,2,2,1,1,2,2,1],[1,1,1,1,1,1,1,1]],
  workshop:     [[0,1,1,0,0,1,1,0],[1,2,2,1,1,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,1,1,2,2,1],[0,1,1,0,0,1,1,0]],
  testing:      [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,1,1,1,1,2,1],[1,2,1,2,2,1,2,1],[1,2,1,1,1,1,2,1],[0,1,2,1,1,2,1,0],[0,0,1,2,2,1,0,0],[0,0,0,1,1,0,0,0]],
  debugger:     [[1,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,0],[1,1,2,1,1,2,1,1],[1,2,2,1,1,2,2,1],[1,2,2,1,1,2,2,1],[1,1,2,1,1,2,1,1],[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1]],
  audit:        [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[0,1,2,2,2,2,1,0],[0,0,1,1,1,1,0,0]],
};

const grid = GLYPHS[name];
const pixel = size / 8;
---
{grid && (
  <span class="pixel-glyph" style={`width:${size}px;height:${size}px;grid-template-columns:repeat(8,${pixel}px);grid-template-rows:repeat(8,${pixel}px);`}>
    {grid.flat().map((v) => (
      <span style={`background:${v === 1 ? color : v === 2 ? 'var(--color-bg)' : 'transparent'};`}></span>
    ))}
  </span>
)}

<style>
  .pixel-glyph {
    display: inline-grid;
    flex-shrink: 0;
  }
</style>
```

- [ ] **Step 2: Create LedRow.astro**

Props: `states: Array<{ color: string; label: string; desc: string }>`.

Horizontal row of LED indicators with glow effect for active states.

- [ ] **Step 3: Create Ladder.astro**

Props: `rungs: Array<{ label: string; priority: string; desc: string }>`.

Vertical hierarchical list with numbered layers and left border.

- [ ] **Step 4: Verify build, commit**

```bash
git add src/components/PixelGlyph.astro src/components/LedRow.astro src/components/Ladder.astro
git commit -m "feat(components): add PixelGlyph, LedRow, Ladder for docs v2"
```

---

## Task 4: Update DocsNav to v2 TabBar style

**Files:**
- Modify: `src/components/DocsNav.astro`
- Modify: `src/i18n/ui.ts`

- [ ] **Step 1: Add tab subtitles to ui.ts**

Add to both `de` and `en` objects:
```typescript
'docs-nav.start.sub': '01 · Vom Start zum Projekt',
'docs-nav.concepts.sub': '02 · Warum spezialisierte Sessions',
'docs-nav.usage.sub': '03 · Volle Referenz',
```

- [ ] **Step 2: Rewrite DocsNav.astro to match v2 TabBar**

Two-line tabs: label (Rajdhani 700, 16px) + subtitle (Fira Code 10px, accent when active). Active tab gets 2px solid accent bottom border. Sticky below header (top: 64px).

- [ ] **Step 3: Verify build, commit**

```bash
git add src/components/DocsNav.astro src/i18n/ui.ts
git commit -m "feat(docs): update DocsNav to v2 TabBar with subtitles"
```

---

## Task 5: Rebuild Docs Hub page (v2)

**Files:**
- Modify: `src/pages/de/docs/index.astro`
- Modify: `src/i18n/de/docs-hub.ts`
- Modify: `src/pages/en/docs/index.astro`
- Modify: `src/i18n/en/docs-hub.ts`

- [ ] **Step 1: Add v2 page heading content to docs-hub.ts**

Add `pageHeading` with kicker "// Handbuch" and title "Dokumentation", version string.

- [ ] **Step 2: Rebuild DE docs hub page**

Structure from `docs-v2-page.jsx`:
1. DocsPageHeading: kicker + h1 + version (right-aligned)
2. DocsNav (sticky)
3. Companion intro section
4. 3-card grid (numbered, linking to subpages)
5. Bottom CTA ("Frag den Companion")

- [ ] **Step 3: Mirror to EN hub page**

- [ ] **Step 4: Verify build, commit**

```bash
git commit -m "feat(docs): rebuild hub page to v2 design"
```

---

## Task 6: Rebuild Docs Start page (v2)

**Files:**
- Modify: `src/pages/de/docs/start.astro`
- Modify: `src/i18n/de/docs-start.ts`
- Modify: `src/pages/en/docs/start.astro` (stub update)

- [ ] **Step 1: Update i18n content for v2 hero**

Add `hero` object with kicker, title, titleAccent, body matching `docs-v2-start.jsx`:
```typescript
hero: {
  kicker: 'Schnelleinstieg · v0.9.101',
  title: 'Vom Start',
  titleAccent: 'zum ersten Projekt.',
  body: 'Installation steht? Dann los. ...',
}
```

- [ ] **Step 2: Rewrite start.astro with v2 components**

Replace custom inline styles with: DocsHero, DocsSection, ScreenshotSlot, CMBox, Callout components. Match structure from `docs-v2-start.jsx` exactly:
- Section 01: Orientation (DocsList + ScreenshotSlot)
- Section 02: Workspace (steps + Callout rule + ScreenshotSlot)
- Section 03: Sessions (2-col CMBox grid: preset vs path + DocsTable + ScreenshotSlot)
- Section 04: Overview (DocsTable 3-col + Callout tip)
- Section 05: Voice (DocsList + Callout tip)
- Section 06: Next (2-col CMBox grid linking to concepts/usage)

- [ ] **Step 3: Update EN stub**

- [ ] **Step 4: Verify build, commit**

```bash
git commit -m "feat(docs): rebuild start page to v2 design"
```

---

## Task 7: Rebuild Docs Concepts page (v2)

**Files:**
- Modify: `src/pages/de/docs/concepts.astro`
- Modify: `src/i18n/de/docs-konzepte.ts`
- Modify: `src/pages/en/docs/concepts.astro` (stub update)

- [ ] **Step 1: Update i18n content for v2 hero**

- [ ] **Step 2: Rewrite concepts.astro with v2 components**

Match `docs-v2-konzepte.jsx`:
- Section 01: Die Idee (prose + Callout rule)
- Section 02: Lebenszyklus (pipeline strip with colored phase boxes + arrow connectors, phase detail blocks with colored left borders showing Eingang/Prozess/Ausgang)
- Section 03: Entities (PixelGlyph per entity + colored left border + desc, "Welche Entity wann?" DocsTable)
- Section 04: Presets (Ladder component for 5-layer hierarchy + Callout + folder structure)
- Section 05: Personas (DocsTable + Global Override + Custom sections)
- Section 06: Memory, Tags & Scoping (3 scopes table + Notes + Tags + Note vs Memory table)
- Section 07: Ehrlichkeit (numbered warn-callout cards)

- [ ] **Step 3: Verify build, commit**

```bash
git commit -m "feat(docs): rebuild concepts page to v2 design with PixelGlyphs and pipeline"
```

---

## Task 8: Rebuild Docs Usage page (v2)

**Files:**
- Modify: `src/pages/de/docs/usage.astro`
- Modify: `src/i18n/de/docs-nutzung.ts`
- Modify: `src/pages/en/docs/usage.astro` (stub update)

- [ ] **Step 1: Update i18n content for v2 hero**

- [ ] **Step 2: Rewrite usage.astro with v2 components**

Match `docs-v2-nutzung.jsx` (10 sections):
- 01 Grid (Drag & Drop DocsList + Grid Size + ScreenshotSlot)
- 02 Zell-Header (Callout tip for context colors + DocsTable 3-col for buttons)
- 03 Focus & Pop-Out (2-col CMBox: Focus Mode vs Pop-Out)
- 04 Sidebar (DocsTable + Callout tip for detach)
- 05 Voice (LedRow + Callout rule + DocsTable for commands + COM/BT section)
- 06 Notes (DocsList)
- 07 Projekte (DocsTable for adoption modes)
- 08 Einstellungen (DocsTable for 6 tabs)
- 09 Bugreport (DocsTable 3-col for modes)
- 10 Shortcuts (3 grouped DocksTables: Navigation, Layout, Actions)

- [ ] **Step 3: Verify build, commit**

```bash
git commit -m "feat(docs): rebuild usage page to v2 design with LedRow and restructured sections"
```

---

## Task 9: Rebuild Landing Hero (v2 Hero A — Schematic)

**Files:**
- Modify: `src/components/HeroCockpit.astro`
- Modify: `src/i18n/de/landing.ts`
- Modify: `src/i18n/en/landing.ts`

- [ ] **Step 1: Update landing.ts hero content**

```typescript
hero: {
  label: 'Open Source · macOS · MIT',
  tagline: 'Agentic Engineering',
  taglineAccent: 'for Makers.',
  taglineEnd: 'And everyone else.',
  subtext: 'Orchestriert Claude Code zu einem echten Entwicklungsprozess — mit Rollen, Gedächtnis und Stimme.',
  buttons: [
    { label: 'Dokumentation', href: '/de/docs/', primary: true },
    { label: 'Features', href: '/de/features' },
    { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron', external: true },
  ],
}
```

- [ ] **Step 2: Rewrite HeroCockpit.astro to v2 Hero A**

Two-column grid (1fr 540px): Left = label tag + h1 (tagline/accent/end) + subtext + CTAs. Right = cockpit mock with macOS chrome, 4 session cells (ideation, refinement, cyber-factory, companion), statusbar strip. Match `landing-v2-heroes.jsx HeroA` pixel-faithful.

- [ ] **Step 3: Mirror hero content to EN**

- [ ] **Step 4: Verify build, commit**

```bash
git commit -m "feat(landing): v2 Hero A with cockpit schematic"
```

---

## Task 10: Rebuild Landing Pillars (Story-Stack) + Systemabgrenzung + Bottom CTA

**Files:**
- Modify: `src/pages/de/index.astro`
- Modify: `src/i18n/de/landing.ts`
- Modify: `src/pages/en/index.astro`
- Modify: `src/i18n/en/landing.ts`

- [ ] **Step 1: Update pillar colors in landing.ts**

Change pillar accent colors to v2:
```typescript
pillarColors: ['#5E81AC', '#EBCB8B', '#A3BE8C', '#88C0D0'],
```

- [ ] **Step 2: Replace 2x2 pillar grid with Story-Stack layout**

3-column layout per pillar (from `landing-v2-pillar-alts.jsx` PillarsStory):
- Col 1: Large number (64px Rajdhani 700, pillar color) + "// pfeiler" label
- Col 2: Title (24px h3) + Description (15.5px Rajdhani 500)
- Col 3: Detail text (12px Fira Code, colored left border)
- Section kicker: `// 01 — VIER PFEILER · EIN MANIFEST`
- Responsive: single column below 720px

- [ ] **Step 3: Rebuild Systemabgrenzung section**

Replace "Not" section with v2 numbered list (from `landing-v2-sections.jsx SecSystemabgrenzung`):
- Kicker: `// 03 — Systemabgrenzung`
- h2: `Was CIPHER-MUX nicht ist.` (with "nicht" in dim color)
- Numbered items (01-05) with dotted bottom borders and accent-colored numbers

- [ ] **Step 4: Rebuild bottom CTA**

From `landing-v2-page.jsx`:
- Background: sunken
- Kicker: `// Bereit?`
- h2: `Lies das Handbuch. Oder lad's runter.` (accent period, dim second sentence)
- CTA buttons

- [ ] **Step 5: Rebuild Built-with-Itself section to v2**

From `landing-v2-sections.jsx SecBuiltWithItself`:
- Kicker: `// 02 — Selbstreferenz`
- h2: `Built with Itself.`
- Lead in Fira Code
- 4 stat CMBoxes (1.509 Testcases, 100% Pass Rate, ~32 LOC pro Test, ~90s Runtime)
- Horizontal bar chart for waves (with dotted borders, accent for waves 5+)
- Closing paragraphs with bold highlights

- [ ] **Step 6: Mirror to EN landing**

- [ ] **Step 7: Verify build, commit**

```bash
git commit -m "feat(landing): v2 Story-Stack pillars, Systemabgrenzung, bottom CTA, built-with chart"
```

---

## Task 11: Final verification and cleanup

**Files:**
- Various cleanup

- [ ] **Step 1: Full build check**

Run: `npx astro build 2>&1 | tail -20`
Expected: build succeeds, no errors

- [ ] **Step 2: Dev server visual check**

Run: `npx astro dev` and verify:
- Landing DE: Hero A, Story-Stack pillars, Built-with chart, Systemabgrenzung, CTA
- Docs hub: page heading, tab bar, card grid
- Docs start: DocsHero, 6 sections with ScreenshotSlots
- Docs concepts: PixelGlyphs, pipeline, Ladder, honesty cards
- Docs usage: LedRow, restructured sections
- Theme toggle works on all pages
- Responsive below 768px

- [ ] **Step 3: Remove unused components if any**

Check if old `PillarCard.astro`, `PixelGrid.astro`, `ScrollNav.astro`, `ThemeShowcase.astro`, `FeatureSection.astro` are referenced anywhere. If not, delete.

- [ ] **Step 4: Final commit**

```bash
git commit -m "chore: v2 design cleanup — remove unused components, verify build"
```

---

## Summary

| Task | Scope | Est. Complexity |
|------|-------|----------------|
| 1 | CSS tokens + utilities | Low |
| 2 | 5 shared components | Medium |
| 3 | 3 specialized components | Medium |
| 4 | DocsNav v2 | Low |
| 5 | Docs Hub v2 | Low |
| 6 | Docs Start v2 | Medium |
| 7 | Docs Concepts v2 | High (pipeline, PixelGlyphs, Ladder) |
| 8 | Docs Usage v2 | High (10 sections, LedRow) |
| 9 | Landing Hero v2 | Medium (cockpit mock) |
| 10 | Landing sections v2 | High (Story-Stack, chart, Systemabgrenzung) |
| 11 | Verification + cleanup | Low |

**Dependencies:** Tasks 1-3 are foundation (must go first). Tasks 4-8 (Docs) and 9-10 (Landing) are independent of each other after foundation. Task 11 is last.
