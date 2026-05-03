# Accessibility (WCAG AA) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring cipher-mux-site to WCAG AA compliance and add a CVD accessibility showcase in §10 of the Features page.

**Architecture:** All changes are CSS/HTML edits in existing files — no new dependencies, no build changes. Tasks 1-7 are quick structural fixes. Task 8 is a content+template rebuild of §10 on the Features page.

**Tech Stack:** Astro, CSS, vanilla JS

---

### Task 1: Fix contrast — dark and light theme dim text

**Files:**
- Modify: `src/styles/theme-dark.css:10`
- Modify: `src/styles/theme-light.css:10`

- [ ] **Step 1: Fix dark theme dim text**

In `src/styles/theme-dark.css`, change line 10:

```css
/* before */
  --color-text-dim: #9BA3B0;        /* brighter: was #7B8394 */

/* after */
  --color-text-dim: #A8B1BD;        /* WCAG AA: 4.5:1 on #2E3440 */
```

- [ ] **Step 2: Fix light theme dim text**

In `src/styles/theme-light.css`, change line 10:

```css
/* before */
  --color-text-dim: #8A8A82;

/* after */
  --color-text-dim: #6E6E68;        /* WCAG AA: 5.5:1+ on #F4F3ED */
```

- [ ] **Step 3: Verify visually**

Run: `npx astro dev --port 4321`

Check `http://localhost:4321/de/features` in both themes. Dim text (nav labels, kicker lines, footer) should be noticeably more readable, especially in dark mode.

- [ ] **Step 4: Commit**

```bash
git add src/styles/theme-dark.css src/styles/theme-light.css
git commit -m "fix: improve dim text contrast to meet WCAG AA (4.5:1)"
```

---

### Task 2: Fix heading hierarchy on landing page

**Files:**
- Modify: `src/pages/de/index.astro:60`
- Modify: `src/pages/en/index.astro:60`
- Modify: `src/pages/de/index.astro:69`
- Modify: `src/pages/en/index.astro:69`
- Modify: `src/styles/components.css:308-315` (pillar h3→h2 selector)

- [ ] **Step 1: Change pillar titles from h3 to h2 (de)**

In `src/pages/de/index.astro`, change line 60:

```html
<!-- before -->
        <h3>{pillar.title}</h3>
<!-- after -->
        <h2>{pillar.title}</h2>
```

Also change the notSection title at line 69:

```html
<!-- before -->
    <h3>{content.notSection.title}</h3>
<!-- after -->
    <h2>{content.notSection.title}</h2>
```

- [ ] **Step 2: Change pillar titles from h3 to h2 (en)**

Same changes in `src/pages/en/index.astro` at lines 60 and 69.

- [ ] **Step 3: Update CSS selectors**

In `src/styles/components.css`, change the `.cm-pillar h3` selector (around line 308):

```css
/* before */
.cm-pillar h3 {

/* after */
.cm-pillar h2 {
```

And the `.cm-not h3` selector if it exists — search for `.cm-not`:

```css
/* before */
.cm-not h3 {

/* after */
.cm-not h2 {
```

- [ ] **Step 4: Verify heading hierarchy**

Open `http://localhost:4321/de/` in browser. Use browser DevTools → Accessibility → heading tree. Should show: h1 (Agentic Engineering...) → h2 (Vibecoding...) → h2 (Gebaut...) → h2 (Transparent...) → h2 (Zugänglich...) → h2 (Systemabgrenzung).

- [ ] **Step 5: Commit**

```bash
git add src/pages/de/index.astro src/pages/en/index.astro src/styles/components.css
git commit -m "fix: correct heading hierarchy on landing page (h3→h2)"
```

---

### Task 3: Add focus-visible styles

**Files:**
- Modify: `src/styles/global.css` (append after line 59)

- [ ] **Step 1: Add focus-visible rule**

In `src/styles/global.css`, after the `a:hover` rule (line 59), add:

```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

- [ ] **Step 2: Verify focus ring**

Open any page, press Tab repeatedly. Each focusable element (links, buttons, theme toggle) should show a 2px accent-colored outline. Clicking with mouse should NOT show the outline.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add focus-visible styles for keyboard navigation"
```

---

### Task 4: Add skip-to-content link

**Files:**
- Modify: `src/layouts/Layout.astro:46-48`
- Modify: `src/styles/global.css` (append skip-link styles)

- [ ] **Step 1: Add skip link to Layout**

In `src/layouts/Layout.astro`, change lines 46-48:

```html
<!-- before -->
  <body>
    <Header lang={lang} active={active} />
    <main>

<!-- after -->
  <body>
    <a href="#main-content" class="skip-link">{lang === 'de' ? 'Zum Inhalt springen' : 'Skip to content'}</a>
    <Header lang={lang} active={active} />
    <main id="main-content">
```

- [ ] **Step 2: Add skip-link CSS**

In `src/styles/global.css`, after the `:focus-visible` rule, add:

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  z-index: 1000;
  padding: 8px 16px;
  background: var(--color-accent);
  color: var(--color-bg);
  font-family: 'Fira Code', monospace;
  font-size: 12px;
  letter-spacing: 1px;
  text-decoration: none;
  clip-path: polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px);
}
.skip-link:focus {
  top: 8px;
}
```

- [ ] **Step 3: Verify skip link**

Open any page, press Tab once. The "Zum Inhalt springen" / "Skip to content" link should appear at top-left. Press Enter — focus jumps to main content. Press Tab again — the link disappears.

- [ ] **Step 4: Commit**

```bash
git add src/layouts/Layout.astro src/styles/global.css
git commit -m "feat: add skip-to-content link for keyboard navigation"
```

---

### Task 5: Add ARIA labels to theme dots and LangSwitch

**Files:**
- Modify: `src/pages/de/features.astro` (theme dot buttons, around line 149)
- Modify: `src/pages/en/features.astro` (theme dot buttons, around line 102)
- Modify: `src/components/LangSwitch.astro:13-18`

- [ ] **Step 1: Add aria-label to theme dots (de)**

In `src/pages/de/features.astro`, find the theme dot `<button>` element (in the `.map()` around line 149). Change:

```html
<!-- before -->
<button class="grid-theme-dot" data-theme-id={t.id} ... title={t.id}>

<!-- after -->
<button class="grid-theme-dot" data-theme-id={t.id} ... title={t.id} aria-label={`Theme ${t.id} anwenden`}>
```

- [ ] **Step 2: Add aria-label to theme dots (en)**

Same change in `src/pages/en/features.astro`:

```html
<!-- before -->
... title={t.id}>

<!-- after -->
... title={t.id} aria-label={`Apply ${t.id} theme`}>
```

- [ ] **Step 3: Add aria-label to LangSwitch**

In `src/components/LangSwitch.astro`, change the `<a>` tag (line 13-18):

```html
<!-- before -->
<a
  href={newPath}
  class="cm-lang-switch"
  title={otherLang === 'de' ? 'Deutsch' : 'English'}
>

<!-- after -->
<a
  href={newPath}
  class="cm-lang-switch"
  title={otherLang === 'de' ? 'Deutsch' : 'English'}
  aria-label={otherLang === 'de' ? 'Sprache wechseln: Deutsch' : 'Switch language: English'}
>
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/de/features.astro src/pages/en/features.astro src/components/LangSwitch.astro
git commit -m "feat: add aria-labels to theme dots and language switch"
```

---

### Task 6: Respect prefers-color-scheme

**Files:**
- Modify: `src/layouts/Layout.astro:37-43`

- [ ] **Step 1: Update theme init script**

In `src/layouts/Layout.astro`, replace the inline script (lines 37-43):

```html
<!-- before -->
    <script is:inline>
      (function () {
        var stored = localStorage.getItem('theme');
        var theme = stored === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>

<!-- after -->
    <script is:inline>
      (function () {
        var stored = localStorage.getItem('theme');
        var theme;
        if (stored === 'dark' || stored === 'light') {
          theme = stored;
        } else {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', theme);
      })();
    </script>
```

- [ ] **Step 2: Verify**

Clear localStorage (`localStorage.removeItem('theme')` in DevTools console). Set OS to dark mode. Reload page — should render dark. Set OS to light — should render light. Manually toggle via theme button — should persist in localStorage and override OS preference.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: respect prefers-color-scheme for initial theme selection"
```

---

### Task 7: Add prefers-reduced-motion

**Files:**
- Modify: `src/styles/global.css` (append at end)

- [ ] **Step 1: Add reduced motion media query**

At the end of `src/styles/global.css`, add:

```css
/* === Accessibility: Reduced Motion === */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

- [ ] **Step 2: Verify**

In Chrome DevTools → Rendering → Emulate CSS media feature → prefers-reduced-motion: reduce. Toggle theme — change should be instant (no transition). Hover pillar cards — no background transition.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: respect prefers-reduced-motion, disable all animations"
```

---

### Task 8: Rebuild §10 as CVD accessibility showcase

**Files:**
- Modify: `src/i18n/de/features.ts:88-92` (§10 content)
- Modify: `src/i18n/en/features.ts:88-92` (§10 content)
- Modify: `src/pages/de/features.astro` (§10 template + styles)
- Modify: `src/pages/en/features.astro` (§10 template + styles)

- [ ] **Step 1: Update §10 content (de)**

In `src/i18n/de/features.ts`, replace the §10 section object (num: '10'):

```typescript
    {
      num: '10',
      kicker: 'Barrierefreiheit',
      title: 'Zugänglich für alle',
      lead: 'cipher-mux nimmt Barrierefreiheit ernst. Neben 10 wählbaren Farbthemes (siehe oben) gibt es dedizierte Profile für Farbfehlsichtigkeit — damit alle Statusinformationen auch ohne Farbunterscheidung lesbar bleiben.',
      a11yProfiles: [
        { name: 'High Contrast', type: 'Sehschwäche', affected: 'variabel', strategy: 'WCAG AAA · Schwarz/Weiß/Gelb · Maximaler Kontrast', colors: ['#000000', '#FFFFFF', '#FFFF00', '#00FFFF'] },
        { name: 'Deuteranopie', type: 'Rot-Grün-Schwäche', affected: '~7 % der Männer', strategy: 'Rot/Grün → Blau/Orange · Okabe-Ito-Palette', colors: ['#0072B2', '#E69F00', '#56B4E9', '#D55E00'] },
        { name: 'Tritanopie', type: 'Blau-Gelb-Schwäche', affected: '<0,01 %', strategy: 'Blau/Gelb → Magenta/Grün', colors: ['#CC79A7', '#009E73', '#F0E442', '#D55E00'] },
        { name: 'Achromatopsie', type: 'Komplett farbenblind', affected: '~0,003 %', strategy: 'Reine Graustufen · Formen und Text als Informationsträger', colors: ['#000000', '#555555', '#AAAAAA', '#FFFFFF'] },
      ],
    },
```

- [ ] **Step 2: Update §10 content (en)**

In `src/i18n/en/features.ts`, replace the §10 section object:

```typescript
    {
      num: '10',
      kicker: 'Accessibility',
      title: 'Accessible for everyone',
      lead: 'cipher-mux takes accessibility seriously. Beyond 10 selectable color themes (see above), dedicated profiles for color vision deficiency ensure all status information remains readable without relying on color alone.',
      a11yProfiles: [
        { name: 'High Contrast', type: 'Low vision', affected: 'variable', strategy: 'WCAG AAA · Black/White/Yellow · Maximum contrast', colors: ['#000000', '#FFFFFF', '#FFFF00', '#00FFFF'] },
        { name: 'Deuteranopia', type: 'Red-green deficiency', affected: '~7% of men', strategy: 'Red/Green → Blue/Orange · Okabe-Ito palette', colors: ['#0072B2', '#E69F00', '#56B4E9', '#D55E00'] },
        { name: 'Tritanopia', type: 'Blue-yellow deficiency', affected: '<0.01%', strategy: 'Blue/Yellow → Magenta/Green', colors: ['#CC79A7', '#009E73', '#F0E442', '#D55E00'] },
        { name: 'Achromatopsia', type: 'Complete color blindness', affected: '~0.003%', strategy: 'Pure grayscale · Shapes and text as information carriers', colors: ['#000000', '#555555', '#AAAAAA', '#FFFFFF'] },
      ],
    },
```

- [ ] **Step 3: Add TypeScript type for a11yProfiles**

In both `src/pages/de/features.astro` and `src/pages/en/features.astro`, add a type alias near the other type declarations (around line 23-24):

```typescript
type SectionWithA11y = typeof content.sections[0] & { a11yProfiles?: readonly { name: string; type: string; affected: string; strategy: string; colors: readonly string[] }[] };
```

And add `SectionWithA11y` to the union in the `const s = section as ...` line.

- [ ] **Step 4: Replace §10 theme swatches with CVD cards (de)**

In `src/pages/de/features.astro`, find the `{section.num === '10' && (` block and replace it entirely:

```html
          {/* 10 Accessibility — CVD profile cards */}
          {s.a11yProfiles && (
            <div class="a11y-grid">
              {s.a11yProfiles.map((profile) => (
                <div class="a11y-card">
                  <div class="a11y-card-colors">
                    {profile.colors.map((c) => (
                      <span class="a11y-color-dot" style={`background:${c}`}></span>
                    ))}
                  </div>
                  <div class="a11y-card-name">{profile.name}</div>
                  <div class="a11y-card-type">{profile.type} · {profile.affected}</div>
                  <div class="a11y-card-strategy">{profile.strategy}</div>
                </div>
              ))}
            </div>
          )}
```

- [ ] **Step 5: Replace §10 theme swatches with CVD cards (en)**

Same template change in `src/pages/en/features.astro`.

- [ ] **Step 6: Add CVD card styles (de)**

In `src/pages/de/features.astro`, replace the `/* ====== 10 Themes ====== */` CSS block:

```css
  /* ====== 10 Accessibility ====== */
  .a11y-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-top: 24px;
  }
  .a11y-card {
    background: var(--color-bg-elevated);
    border: 1px solid var(--color-border);
    clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .a11y-card-colors {
    display: flex;
    gap: 6px;
    margin-bottom: 4px;
  }
  .a11y-color-dot {
    width: 18px;
    height: 18px;
    border: 1px solid var(--color-border);
    clip-path: polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px);
  }
  .a11y-card-name {
    font-family: 'Rajdhani', sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--color-text);
  }
  .a11y-card-type {
    font-family: 'Fira Code', monospace;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--color-accent);
  }
  .a11y-card-strategy {
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }
```

- [ ] **Step 7: Add CVD card styles (en)**

Same CSS in `src/pages/en/features.astro`, replacing the themes-grid styles.

- [ ] **Step 8: Update responsive rules**

In both de and en features.astro, in the `@media (max-width: 768px)` block, replace:

```css
/* before */
.themes-grid { grid-template-columns: repeat(3, 1fr); }

/* after */
.a11y-grid { grid-template-columns: 1fr; }
```

- [ ] **Step 9: Verify CVD cards**

Open `http://localhost:4321/de/features#themes`. Should show 4 cards in a 2x2 grid: High Contrast, Deuteranopie, Tritanopie, Achromatopsie. Each with color dots, name, type info, and strategy text.

- [ ] **Step 10: Commit**

```bash
git add src/i18n/de/features.ts src/i18n/en/features.ts src/pages/de/features.astro src/pages/en/features.astro
git commit -m "feat: replace theme swatches with CVD accessibility showcase in §10"
```

---

### Post-Implementation

After all 8 tasks are done:

```bash
npx astro build && npx netlify deploy --dir=dist --prod
```

Verify on Netlify:
1. Dark theme dim text readable
2. Tab through page — accent focus ring visible
3. First Tab press shows skip link
4. Theme dots have screen-reader-friendly labels
5. OS dark mode preference respected on first visit
6. §10 shows 4 CVD profile cards
