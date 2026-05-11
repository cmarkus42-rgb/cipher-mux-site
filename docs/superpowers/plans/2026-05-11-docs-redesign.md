# Docs Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the monolithic docs page with a hub + three subpages (Schnelleinstieg, Prozess/Konzepte, Nutzung der App), keeping the external `/de/docs` link intact.

**Architecture:** Astro file-based routing via `src/pages/{de,en}/docs/` directories. Content driven by i18n TypeScript files. Shared `DocsNav.astro` component for tab navigation across all docs pages. All existing CSS patterns (tables, callouts, pipelines, ladders, LED rows) reused from the current docs page.

**Tech Stack:** Astro, TypeScript, vanilla CSS, existing design system (Rajdhani headers, Fira Code mono, cipher-mux clip-paths).

**URL slugs:** Same in both languages — `start`, `concepts`, `usage` — so LangSwitch works without a mapping table.

---

### Task 1: DocsNav Component + Screenshot Placeholder CSS

**Files:**
- Create: `src/components/DocsNav.astro`
- Modify: `src/i18n/ui.ts` (add docs-nav labels)

The navigation component used on all four docs pages (hub + 3 subpages). Styled like the existing `.cm-anchor-nav` but horizontal tabs linking to subpages instead of anchors.

- [ ] **Step 1: Add docs-nav i18n keys to ui.ts**

Add these keys to both `de` and `en` in `src/i18n/ui.ts`:

```typescript
// In de:
'docs.nav.label': '// dokumentation',
'docs.nav.start': 'Schnelleinstieg',
'docs.nav.concepts': 'Prozess & Konzepte',
'docs.nav.usage': 'Nutzung der App',

// In en:
'docs.nav.label': '// documentation',
'docs.nav.start': 'Quick Start',
'docs.nav.concepts': 'Process & Concepts',
'docs.nav.usage': 'Using the App',
```

- [ ] **Step 2: Create DocsNav.astro**

```astro
---
import { t, type Lang } from '../i18n/ui';

interface Props {
  lang: string;
  activePage?: 'start' | 'concepts' | 'usage' | null;
}

const { lang, activePage = null } = Astro.props;
const l = lang as Lang;

const items = [
  { key: 'start',    label: t(l, 'docs.nav.start'),    href: `/${lang}/docs/start` },
  { key: 'concepts', label: t(l, 'docs.nav.concepts'), href: `/${lang}/docs/concepts` },
  { key: 'usage',    label: t(l, 'docs.nav.usage'),    href: `/${lang}/docs/usage` },
];
---

<nav class="docs-nav" aria-label={t(l, 'docs.nav.label')}>
  <div class="docs-nav-label">{t(l, 'docs.nav.label')}</div>
  <div class="docs-nav-tabs">
    {items.map(item => (
      <a
        href={item.href}
        class:list={['docs-nav-tab', { 'docs-nav-tab--active': activePage === item.key }]}
      >
        {item.label}
      </a>
    ))}
  </div>
</nav>

<style>
  .docs-nav {
    padding: 0 0 0;
    margin: 0 0 8px;
  }

  .docs-nav-label {
    font-family: 'Fira Code', monospace;
    font-size: 9px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    color: var(--color-text-dim);
    margin-bottom: 10px;
  }

  .docs-nav-tabs {
    display: flex;
    gap: 0;
    border-bottom: 1px solid var(--color-border);
  }

  .docs-nav-tab {
    padding: 10px 18px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-text-dim);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    letter-spacing: 0.04em;
    transition: color 0.15s, border-color 0.15s;
  }

  .docs-nav-tab:hover {
    color: var(--color-text-secondary);
    text-decoration: none;
  }

  .docs-nav-tab--active {
    color: var(--color-text);
    border-bottom-color: var(--color-accent);
  }

  @media (max-width: 768px) {
    .docs-nav-tabs { flex-wrap: wrap; }
    .docs-nav-tab { padding: 8px 12px; font-size: 13px; }
  }
</style>
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npx astro build 2>&1 | tail -5`
Expected: Build succeeds (component not used yet, but no syntax errors).

- [ ] **Step 4: Commit**

```bash
git add src/components/DocsNav.astro src/i18n/ui.ts
git commit -m "feat(docs): add DocsNav component and docs-nav i18n keys"
```

---

### Task 2: Hub Page — DE Content + Page

**Files:**
- Create: `src/i18n/de/docs-hub.ts`
- Create: `src/pages/de/docs/index.astro`

The hub is the new landing for `/de/docs/`. Minimal: hero, companion hint, three cards linking to subpages.

- [ ] **Step 1: Create docs-hub.ts (DE)**

```typescript
const docsHub = {
  hero: {
    kicker: 'Handbuch · v0.9.99',
    title: 'Das Handbuch.',
    titleAccent: 'Drei Kapitel.',
    titleEnd: 'Ein Companion.',
    body: 'Schnelleinstieg, Konzepte, Referenz — alles was cipher-mux kann, aufgeteilt in drei Seiten. Oder frag den Companion, der kennt jede davon.',
  },
  companionHint: {
    kicker: 'Bevor du blaetterst',
    title: 'Du musst das hier nicht lesen.',
    body: 'Der <strong>Companion</strong> ist immer einen Klick entfernt. Er kennt jedes Kapitel dieses Handbuchs — und antwortet auf deinem Level, weil er dein Profil kennt. Statt hier zu suchen, frag ihn.',
  },
  cards: [
    {
      num: '01',
      title: 'Schnelleinstieg',
      body: 'Vom Download zur ersten Session in fuenf Minuten.',
      href: '/de/docs/start',
    },
    {
      num: '02',
      title: 'Prozess & Konzepte',
      body: 'Wie die Entities zusammenarbeiten — und warum.',
      href: '/de/docs/concepts',
    },
    {
      num: '03',
      title: 'Nutzung der App',
      body: 'Jede Funktion, jeder Button, jedes Menue.',
      href: '/de/docs/usage',
    },
  ],
  bottom: {
    title: 'Fragen offen?',
    titleAccent: 'Frag den Companion.',
    body: 'Das Handbuch ist lang. Der Companion ist im Cockpit. Er kennt jeden Abschnitt davon — und antwortet schneller als du scrollst.',
    downloadLabel: 'App herunterladen',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsHub;
```

- [ ] **Step 2: Create DE hub page (index.astro)**

```astro
---
import Layout from '../../../layouts/Layout.astro';
import DocsNav from '../../../components/DocsNav.astro';
import content from '../../../i18n/de/docs-hub';

const lang = 'de';
---

<Layout
  title="Dokumentation — CIPHER-MUX"
  description={content.hero.body}
  lang={lang}
  active="docs"
>
  <div class="docs-page">

    <DocsNav lang={lang} />

    <!-- Hero -->
    <section class="docs-hero">
      <div class="cm-tag">{content.hero.kicker}</div>
      <h1>{content.hero.title}<br /><span class="accent">{content.hero.titleAccent}</span> {content.hero.titleEnd}</h1>
      <p class="docs-body">{content.hero.body}</p>
    </section>

    <!-- Companion Hint -->
    <section class="docs-companion-intro">
      <div class="docs-inner">
        <div class="cm-tag">{content.companionHint.kicker}</div>
        <h2>{content.companionHint.title}</h2>
        <p class="docs-p" set:html={content.companionHint.body} />
      </div>
    </section>

    <!-- Cards -->
    <section class="docs-hub-cards">
      {content.cards.map((card) => (
        <a href={card.href} class="docs-hub-card">
          <span class="docs-hub-card-num">{card.num}</span>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          <span class="docs-hub-card-arrow">&rarr;</span>
        </a>
      ))}
    </section>

    <!-- Bottom CTA -->
    <div class="docs-bottom">
      <div class="docs-inner">
        <h2>{content.bottom.title} <span class="accent">{content.bottom.titleAccent}</span></h2>
        <p class="docs-bottom-body">{content.bottom.body}</p>
        <div class="docs-bottom-actions">
          <a href={`/${lang}/start`} class="cm-btn cm-btn--primary">&darr; {content.bottom.downloadLabel}</a>
          <a href="https://github.com/cmarkus42-rgb/cipher-mux-electron" class="docs-bottom-link">{content.bottom.githubLabel} &nearr;</a>
        </div>
      </div>
    </div>

  </div>
</Layout>

<style>
  /* Reuse core docs styles — will be extracted to shared file in Task 6 */

  .docs-page {
    position: relative;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 64px;
  }

  .docs-inner { max-width: 920px; }

  .docs-hero {
    padding: 120px 0 48px;
    border-bottom: 1px solid var(--color-border);
  }

  .cm-tag {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--color-accent);
    display: block;
    margin-bottom: 16px;
  }

  .docs-hero h1 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: clamp(38px, 5vw, 64px);
    line-height: 0.98;
    letter-spacing: -0.02em;
    margin: 0 0 24px;
  }

  .accent { color: var(--color-accent); }

  .docs-body {
    font-family: 'Rajdhani', sans-serif;
    font-size: 19px;
    line-height: 1.5;
    color: var(--color-text-secondary);
    max-width: 720px;
  }

  .docs-companion-intro {
    padding: 64px 64px;
    background: var(--color-bg-elevated);
    border-bottom: 1px solid var(--color-border);
    margin: 0 -64px;
  }

  .docs-companion-intro h2 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 38px;
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin: 0 0 16px;
  }

  .docs-p {
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    line-height: 1.55;
    color: var(--color-text-secondary);
    max-width: 760px;
    margin: 0 0 12px;
  }

  .docs-p :global(strong) { color: var(--color-text); font-weight: 600; }

  /* ─── Hub Cards ─── */
  .docs-hub-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 64px 0;
  }

  .docs-hub-card {
    display: flex;
    flex-direction: column;
    padding: 28px 24px;
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    text-decoration: none;
    color: inherit;
    clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
    transition: border-color 0.15s, background 0.15s;
  }

  .docs-hub-card:hover {
    border-color: var(--color-accent);
    text-decoration: none;
  }

  .docs-hub-card-num {
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    color: var(--color-accent);
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .docs-hub-card h3 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.15;
    margin: 0 0 8px;
  }

  .docs-hub-card p {
    font-family: 'Rajdhani', sans-serif;
    font-size: 15px;
    color: var(--color-text-secondary);
    line-height: 1.45;
    flex: 1;
    margin: 0;
  }

  .docs-hub-card-arrow {
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    color: var(--color-accent);
    margin-top: 16px;
    align-self: flex-end;
    opacity: 0;
    transition: opacity 0.15s;
  }

  .docs-hub-card:hover .docs-hub-card-arrow { opacity: 1; }

  /* ─── Bottom CTA ─── */
  .docs-bottom {
    padding: 64px 64px;
    background: var(--color-bg-elevated);
    border-top: 1px solid var(--color-border);
    margin: 0 -64px;
  }

  .docs-bottom h2 {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.05;
    letter-spacing: -0.01em;
    margin: 0 0 14px;
  }

  .docs-bottom-body {
    font-family: 'Rajdhani', sans-serif;
    font-size: 17px;
    color: var(--color-text-secondary);
    max-width: 640px;
    line-height: 1.5;
    margin: 0 0 22px;
  }

  .docs-bottom-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    align-items: center;
  }

  .docs-bottom-link {
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    color: var(--color-text-secondary);
    text-decoration: none;
    border-bottom: 1px dotted var(--color-text-dim);
    padding-bottom: 2px;
  }

  .docs-bottom-link:hover { color: var(--color-text); }

  .cm-btn {
    display: inline-block;
    padding: 12px 20px;
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  }

  .cm-btn--primary {
    background: var(--color-accent);
    color: var(--color-bg);
  }

  .cm-btn--primary:hover { opacity: 0.88; }

  @media (max-width: 768px) {
    .docs-page { padding: 0 20px; }
    .docs-hero { padding: 80px 0 40px; }
    .docs-hub-cards { grid-template-columns: 1fr; }
    .docs-companion-intro { padding: 32px 20px; margin: 0 -20px; }
    .docs-bottom { padding: 32px 20px; margin: 0 -20px; }
  }
</style>
```

- [ ] **Step 3: Verify build**

Run: `cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npx astro build 2>&1 | tail -5`
Expected: Build succeeds. The old `docs.astro` still exists at this point (coexists — Astro resolves `/de/docs/` from the directory index over the flat file, so `docs/index.astro` wins).

- [ ] **Step 4: Commit**

```bash
git add src/i18n/de/docs-hub.ts src/pages/de/docs/index.astro
git commit -m "feat(docs): add DE hub page at /de/docs/"
```

---

### Task 3: Hub Page — EN Content + Page

**Files:**
- Create: `src/i18n/en/docs-hub.ts`
- Create: `src/pages/en/docs/index.astro`

Mirror of Task 2 in English.

- [ ] **Step 1: Create docs-hub.ts (EN)**

```typescript
const docsHub = {
  hero: {
    kicker: 'Handbook · v0.9.99',
    title: 'The Handbook.',
    titleAccent: 'Three chapters.',
    titleEnd: 'One Companion.',
    body: 'Quick start, concepts, reference — everything cipher-mux can do, split into three pages. Or ask the Companion, who knows every one of them.',
  },
  companionHint: {
    kicker: 'Before you scroll',
    title: 'You don\'t have to read this.',
    body: 'The <strong>Companion</strong> is always one click away. It knows every chapter of this handbook — and answers at your level, because it knows your profile. Instead of searching here, ask it.',
  },
  cards: [
    {
      num: '01',
      title: 'Quick Start',
      body: 'From download to your first session in five minutes.',
      href: '/en/docs/start',
    },
    {
      num: '02',
      title: 'Process & Concepts',
      body: 'How the entities work together — and why.',
      href: '/en/docs/concepts',
    },
    {
      num: '03',
      title: 'Using the App',
      body: 'Every function, every button, every menu.',
      href: '/en/docs/usage',
    },
  ],
  bottom: {
    title: 'Questions?',
    titleAccent: 'Ask the Companion.',
    body: 'The handbook is long. The Companion is in the cockpit. It knows every section — and answers faster than you can scroll.',
    downloadLabel: 'Download the app',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsHub;
```

- [ ] **Step 2: Create EN hub page**

Same structure as DE hub but with `lang = 'en'`, importing from `../../../i18n/en/docs-hub`, title `"Documentation — CIPHER-MUX"`. Copy DE hub page and change:
- `lang = 'en'`
- Import path to `en/docs-hub`
- Title to `"Documentation — CIPHER-MUX"`
- `"Rule of thumb"` label in companion hint (if used)

- [ ] **Step 3: Verify build**

Run: `npx astro build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/i18n/en/docs-hub.ts src/pages/en/docs/index.astro
git commit -m "feat(docs): add EN hub page at /en/docs/"
```

---

### Task 4: Schnelleinstieg — DE Content + Page

**Files:**
- Create: `src/i18n/de/docs-start.ts`
- Create: `src/pages/de/docs/start.astro`

Compact page: 5 sections from first launch to productive session.

- [ ] **Step 1: Create docs-start.ts (DE)**

Content sourced from existing docs.ts companion intro + Companion Guide "Das Grid" + Guide "Workspaces". Sections:

1. Erster Start
2. Companion starten (three modes table)
3. Erste eigene Session (Path tab, Shell Only vs Claude, Skip Permissions)
4. Workspace einrichten
5. Voice ausprobieren
6. Weiter (links to other pages)

Write the full content object with all text. Use screenshot placeholders where spec indicates.

The content structure follows this pattern (matching existing docs content style):

```typescript
const docsStart = {
  hero: {
    kicker: 'Schnelleinstieg',
    title: 'In fuenf Minuten',
    titleAccent: 'produktiv.',
    body: 'Vom leeren Bildschirm zur ersten KI-Session. Schritt fuer Schritt, ohne Vorwissen.',
  },
  sections: [
    {
      id: 'first-launch',
      num: '01',
      title: 'Erster Start',
      navLabel: 'Start',
    },
    // ... remaining section metadata
  ],
  // Section-specific content as separate keys
  firstLaunch: {
    lead: '...',
    body: '...',
    screenshot: { placeholder: '...', caption: '...' },
  },
  // ... etc for each section
} as const;
```

Full content text is written during implementation, derived from the Companion guides and existing docs content. This task includes writing the complete German text for all 6 sections.

- [ ] **Step 2: Create start.astro (DE)**

Same page shell as the old docs.astro: Layout wrapper, DocsNav with `activePage="start"`, hero section, then rendered sections using the same CSS classes (docs-section, docs-inner, cm-section-header-meta, docs-table, docs-list, docs-callout, etc.).

Screenshot placeholders use:

```html
<figure class="docs-screenshot">
  <div class="docs-screenshot-placeholder">
    {section.screenshot.placeholder}
  </div>
  <figcaption>{section.screenshot.caption}</figcaption>
</figure>
```

Add screenshot placeholder CSS to the page's `<style>` block:

```css
.docs-screenshot { margin: 1.5rem 0; }
.docs-screenshot-placeholder {
  background: var(--color-bg-sunken);
  border: 2px dashed var(--color-border);
  border-radius: 0;
  padding: 3rem 2rem;
  text-align: center;
  color: var(--color-text-dim);
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  font-style: italic;
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
}
.docs-screenshot figcaption {
  font-family: 'Rajdhani', sans-serif;
  font-size: 13px;
  color: var(--color-text-dim);
  margin-top: 6px;
}
```

Include the full docs CSS block (copied from existing docs.astro — all section, table, list, callout, pipeline, button, responsive styles).

- [ ] **Step 3: Verify build + local preview**

Run: `npx astro build 2>&1 | tail -5`
Run: `npx astro dev &` then verify `/de/docs/start` renders.

- [ ] **Step 4: Commit**

```bash
git add src/i18n/de/docs-start.ts src/pages/de/docs/start.astro
git commit -m "content(docs): add Schnelleinstieg page (DE)"
```

---

### Task 5: Prozess & Konzepte — DE Content + Page

**Files:**
- Create: `src/i18n/de/docs-konzepte.ts`
- Create: `src/pages/de/docs/concepts.astro`

The most content-heavy page. Seven sections. Content sourced from Companion Guide "Die Entities", Wissensbase sections 7/8/16, plus new text for the Ehrlichkeit section and CLAUDE.md layers visualization.

- [ ] **Step 1: Create docs-konzepte.ts (DE)**

Seven sections:

1. **Die Idee** — Problem (General-Session verliert Fokus), Hypothese (Spezialisierung), ehrliche Einordnung (Experiment, Token-Kosten)
2. **Der Lebenszyklus** — Pipeline steps with descriptions (from existing docs §08 lifecycle + Companion guide enrichment)
3. **Die Entities im Detail** — Each entity with role description + "Welche Entity wann?" table (from Companion Guide "Die Entities")
4. **Presets verstehen** — CLAUDE.md layers visualization, Builtin vs Custom, folder structure
5. **Personas (Characters)** — Six built-in characters table (from Wissensbase section 7), Global Override, custom creation
6. **Memory, Tags und Workspace-Scoping** — Memory vs Notes table, tag format, workspace scoping (from Companion Guide "Notes" + Wissensbase section 16)
7. **Ehrlichkeit** — Token costs, limits, solo maintainer. New text.

Full German content for all sections written during implementation. Tone: bescheiden, informativ, kein Marketing. "Wir probieren das aus."

- [ ] **Step 2: Create concepts.astro (DE)**

Page shell: Layout + DocsNav with `activePage="concepts"`. Renders all seven sections.

Special elements:
- **Lifecycle pipeline** uses existing `.docs-pipeline` CSS (pipeline-step + pipeline-arrow pattern from current §08)
- **CLAUDE.md layers** uses a new `.docs-layers` styled block (4 stacked bars showing Layer 1-4)
- **Entity table** uses existing `.docs-table` 2-column pattern
- **Personas table** uses existing `.docs-table` 2-column pattern
- **Memory vs Notes** uses existing `.docs-table` 2-column pattern

New CSS for the layers visualization:

```css
.docs-layers {
  margin: 12px 0 24px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-sunken);
  clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
  overflow: hidden;
}
.docs-layer {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 12px 18px;
}
.docs-layer:not(:first-child) {
  border-top: 1px dotted var(--color-border);
}
.docs-layer-num {
  flex: 0 0 80px;
  font-family: 'Fira Code', monospace;
  font-size: 11px;
  color: var(--color-accent);
  letter-spacing: 0.1em;
}
.docs-layer-label {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--color-text);
  flex: 0 0 200px;
}
.docs-layer-desc {
  flex: 1;
  font-family: 'Rajdhani', sans-serif;
  font-size: 14.5px;
  color: var(--color-text-secondary);
  line-height: 1.45;
}
```

Include full docs CSS block + screenshot placeholder CSS + layers CSS.

- [ ] **Step 3: Verify build**

Run: `npx astro build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/i18n/de/docs-konzepte.ts src/pages/de/docs/concepts.astro
git commit -m "content(docs): add Prozess & Konzepte page (DE)"
```

---

### Task 6: Nutzung der App — DE Content + Page

**Files:**
- Create: `src/i18n/de/docs-nutzung.ts`
- Create: `src/pages/de/docs/usage.astro`

The reference page. Ten sections. Most content migrated from existing docs.astro §01-§15, enriched with Companion guides.

- [ ] **Step 1: Create docs-nutzung.ts (DE)**

Ten sections, content largely from existing `docs.ts` and inline HTML from existing `docs.astro`:

1. **Das Grid** — from §01 (window) + §03 (grid) + Companion Guide "Das Grid"
2. **Session-Zell-Header** — from §02 (sessions) + Wissensbase section 2.2 (complete header reference)
3. **Focus Mode und Pop-Out** — from Companion Guide "Focus Mode und Pop-Out" + Wissensbase section 3+4
4. **Die Sidebar** — from §05 + Companion Guide "Die Sidebar"
5. **Sprachsteuerung** — from §04 + Companion Guide "Sprachsteuerung"
6. **Notes** — from §06 + Companion Guide "Notes"
7. **Projekte und Hub** — from §07
8. **Einstellungen** — from §12 + Wissensbase section 12
9. **Bugreport-Dialog** — from §14 + Wissensbase section 13
10. **Tastenkuerzel** — from §13

This is the largest content file. Structure follows the same pattern as docs-start.ts.

- [ ] **Step 2: Create usage.astro (DE)**

Page shell: Layout + DocsNav with `activePage="usage"`. Renders all ten sections. Reuses all existing HTML patterns from the current docs.astro:
- `.docs-table` (2-col, 3-col, compact)
- `.docs-list` with markers
- `.docs-callout` (tip, warn, rule)
- `.docs-led-row` for voice LED status
- `.docs-pipeline` for lifecycle overview
- `.docs-ladder` for persona hierarchy
- `.docs-tab-strip` for settings tabs mockup
- `.docs-terminal` for folder structure
- `.docs-screenshot-row` for existing screenshots
- `.docs-screenshot` (placeholder) for new screenshots

Also includes an anchor nav on the right side (reused from current docs.astro) for the 10 sections — this page is long enough to warrant in-page navigation.

Include the full CSS block from current docs.astro (all patterns).

- [ ] **Step 3: Verify build**

Run: `npx astro build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/i18n/de/docs-nutzung.ts src/pages/de/docs/usage.astro
git commit -m "content(docs): add Nutzung der App page (DE)"
```

---

### Task 7: EN Subpage Stubs

**Files:**
- Create: `src/i18n/en/docs-start.ts`
- Create: `src/i18n/en/docs-concepts.ts`
- Create: `src/i18n/en/docs-usage.ts`
- Create: `src/pages/en/docs/start.astro`
- Create: `src/pages/en/docs/concepts.astro`
- Create: `src/pages/en/docs/usage.astro`

EN translation of new content comes later. For now: minimal stubs that show a "translation in progress" note and link to the DE version.

- [ ] **Step 1: Create EN content stubs**

Each file exports minimal content:

```typescript
// src/i18n/en/docs-start.ts
const docsStart = {
  hero: {
    kicker: 'Quick Start',
    title: 'Up and running',
    titleAccent: 'in five minutes.',
    body: 'From empty screen to your first AI session. Step by step, no prior knowledge needed.',
  },
  translationNote: 'This page is being translated. The full version is available in German.',
  germanLink: '/de/docs/start',
  germanLabel: 'Deutsche Version lesen',
} as const;

export default docsStart;
```

Same pattern for docs-concepts.ts and docs-usage.ts.

- [ ] **Step 2: Create EN stub pages**

Each page: Layout + DocsNav + hero + translation notice with link to German version.

```astro
---
import Layout from '../../../layouts/Layout.astro';
import DocsNav from '../../../components/DocsNav.astro';
import content from '../../../i18n/en/docs-start';

const lang = 'en';
---

<Layout title="Quick Start — CIPHER-MUX" description={content.hero.body} lang={lang} active="docs">
  <div class="docs-page">
    <DocsNav lang={lang} activePage="start" />
    <section class="docs-hero">
      <div class="cm-tag">{content.hero.kicker}</div>
      <h1>{content.hero.title}<br /><span class="accent">{content.hero.titleAccent}</span></h1>
      <p class="docs-body">{content.hero.body}</p>
    </section>
    <section class="docs-section">
      <div class="docs-inner">
        <div class="docs-callout docs-callout-tip">
          <div class="docs-callout-label">Translation in Progress</div>
          <div class="docs-callout-body">{content.translationNote} <a href={content.germanLink}>{content.germanLabel} &rarr;</a></div>
        </div>
      </div>
    </section>
  </div>
</Layout>
```

Include same CSS block as other docs pages.

- [ ] **Step 3: Verify build**

Run: `npx astro build 2>&1 | tail -5`

- [ ] **Step 4: Commit**

```bash
git add src/i18n/en/docs-start.ts src/i18n/en/docs-concepts.ts src/i18n/en/docs-usage.ts \
        src/pages/en/docs/start.astro src/pages/en/docs/concepts.astro src/pages/en/docs/usage.astro
git commit -m "feat(docs): add EN subpage stubs with translation notice"
```

---

### Task 8: Remove Old Docs Pages + Build Verification

**Files:**
- Delete: `src/pages/de/docs.astro`
- Delete: `src/pages/en/docs.astro`
- Keep: `src/i18n/de/docs.ts` (may still be referenced; delete only if no imports remain)
- Keep: `src/i18n/en/docs.ts` (same)

- [ ] **Step 1: Check for references to old docs.ts**

Run: `grep -r "from.*i18n/de/docs'" src/ --include='*.astro' --include='*.ts'`
Run: `grep -r "from.*i18n/en/docs'" src/ --include='*.astro' --include='*.ts'`

If only the old docs.astro files reference them, safe to delete.

- [ ] **Step 2: Delete old files**

```bash
rm src/pages/de/docs.astro src/pages/en/docs.astro
```

If no other references: also delete `src/i18n/de/docs.ts` and `src/i18n/en/docs.ts`.

- [ ] **Step 3: Verify full build**

Run: `npx astro build 2>&1 | tail -10`
Expected: Clean build, no errors.

- [ ] **Step 4: Verify all routes**

Run: `ls -la dist/de/docs/ dist/en/docs/`
Expected: `index.html`, `start/index.html`, `concepts/index.html`, `usage/index.html` in both.

- [ ] **Step 5: Local dev check**

Run: `npx astro dev &`
Check manually:
- `/de/docs/` — hub with three cards
- `/de/docs/start` — Schnelleinstieg
- `/de/docs/concepts` — Prozess & Konzepte
- `/de/docs/usage` — Nutzung der App
- `/en/docs/` — EN hub
- `/en/docs/start` — EN stub
- Header nav "Docs" link works
- LangSwitch toggles correctly on all pages
- DocsNav tabs highlight correctly

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore(docs): remove old monolithic docs pages, migration complete"
```

---

### Task 9: Header Nav Active State Fix

**Files:**
- Modify: `src/components/Header.astro`

The header nav checks `active === 'docs'` for highlighting. With subpages at `/de/docs/start` etc., the `active` prop is still `"docs"` (set in each page's Layout call), so this should work. But verify and fix if needed.

- [ ] **Step 1: Verify active state**

Check that all new pages pass `active="docs"` to Layout. They do (set in each .astro file). No changes needed unless build reveals issues.

- [ ] **Step 2: Commit (only if changes were needed)**

```bash
git add src/components/Header.astro
git commit -m "fix(docs): ensure header nav active state for docs subpages"
```
