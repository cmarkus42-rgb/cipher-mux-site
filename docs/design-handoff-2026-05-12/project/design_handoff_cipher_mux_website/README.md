# Handoff: CIPHER-MUX Marketing Website

## Overview

Marketing- und Dokumentations-Website für **cipher-mux** — eine native Mac-App, die Claude Code im Grid-Layout orchestriert. Vier Seiten:

1. **Landing** — Hero, Features-Übersicht, Statusbar-Demo, CTAs
2. **Features** — Detaillierte Feature-Beschreibungen (Cockpit, Grid, Sessions, Voice, MCP, Personas etc.)
3. **Install** — 4-Phasen-Installations-Guide mit Terminal-Blocks und Stolperstellen
4. **Docs / Handbuch** — 15-Kapitel-Referenz, Lang-Scroll, Sticky Anchor-Nav

Visuelle DNA: **Cyberpunk-Pragmatismus** — Cut-corners (clipPath polygon), Mono-Type für UI-Hinweise, Fira Code + Rajdhani, dunkle und helle Themes wählbar via Tweaks. Designsprache wirkt wie ein Cockpit, nicht wie eine SaaS-Landingpage.

---

## About the Design Files

Die HTML-Files in diesem Paket sind **Design-Referenzen** — Prototypen die den Look und Behavior zeigen, kein produktiver Code zum direkten Kopieren. Die Aufgabe ist, diese Designs in der Ziel-Codebase mit deren etablierten Patterns nachzubauen.

Die Files nutzen React 18 + Babel-Standalone als Transpilation-Layer im Browser — das ist explizit ein Design-Tool, kein Production-Pattern. In der echten Implementierung:

- **Wenn es schon eine Codebase gibt:** deren Framework, Komponenten und Build-Pipeline nutzen.
- **Wenn nicht:** Empfehlung ist Astro (statisch), Next.js (App Router), oder SvelteKit — die Site ist content-heavy mit minimaler Interaktion und passt zu einem statischen / partial-hydration-Ansatz.

Die Tweaks-Panel-Logik (Live-Theming) ist ein Design-Tool-Feature, **nicht** Teil der echten Site. Die finale Site liefert ein gewähltes Theme aus.

---

## Fidelity

**High-fidelity** — alle Farben, Typographie, Spacing, Shadows und Cut-corner-Geometrien sind final. Pixel-genau übernehmen.

Alle Design-Tokens stehen zentral in `features-shared.jsx` (Funktion `cmPalette` für Farben, `cmSpacing` für Spacing-Scale). Diese sollten in der Ziel-Codebase als CSS-Custom-Properties oder Theme-Tokens umgesetzt werden.

---

## Pages / Views

### 1 · Landing Page (`CIPHER-MUX Website Design.html`)

**Zweck:** Erster Eindruck, Conversion zu Install/Features/Docs.

**Layout (Top-Down):**
- **Hero:** Großes H1 ("cipher-mux"), Subline mit Pitch ("Cockpit für KI-Multiplexing"), zwei CTAs (Install + Features), terminal-artige ASCII-Mock zentral platziert
- **Pillar-Section:** 3-Spalten-Grid mit Icon-Cards (Grid · Sessions · Companion)
- **Statusbar-Demo:** Mockup der echten App-Statusleiste — zeigt Voice-Pill, Grid-Controls, Workspaces-Button
- **Footer:** Links zu Features/Install/Docs/GitHub, Domain `cipher-mux.dev`, Version-Tag

**Variations:** Light + Dark via Tweaks. Mehrere Hero-Varianten und Pillar-Icon-Stile als Artboards auf Design-Canvas.

### 2 · Features Page (`CIPHER-MUX Features Page.html`)

**Zweck:** Tieferes Verständnis aller Funktionen.

**Layout:**
- **Sticky Header oben** (Logo links, Nav rechts: Features · Install · Docs)
- **Sticky Anchor-Nav rechts** (vertikal, subtil) mit Sprungmarken zu allen Sektionen
- **Hero:** Großer Titel + Pitch, kein CTA hier
- **Sektionen** (Long-Scroll, je ~80vh):
  - Cockpit · Grid · Sessions · Entities · Voice · MCP · Workspaces · Personas · Themes
- **Footer**

**Komponenten:**
- `CMSectionHeader` — Section-Titel mit Kicker, Nummerierung, Akzent-Strich
- `CMBox` — Cut-corner-Box mit Border + Surface-Background
- `CMRule` — gepunktete Trennlinie
- `CMTag` — Mono-Type-Badge mit Cut-corners
- `CMDot` — kleines Akzent-Quadrat (clipPath)

### 3 · Install Page (`CIPHER-MUX Install Page.html`)

**Zweck:** Vom DMG-Download bis zum ersten Erfolg, in 4 Phasen.

**Layout:**
- **Hero:** "Vom Mac zum Cockpit. ~20 Minuten." + 4-Spalten-Phase-Strip (01 Installation, 02 Erster Start, 03 Erstes Ergebnis, 04 Weiter) + DMG-Download-Button + "Ehrlich gesagt"-Disclosure-Box
- **Phase 1 — Installation:** Step A (Claude Code CLI via Terminal) + Step B (DMG-Drag-and-Drop), mit `TerminalBlock` und `PitfallCard` pro Step
- **Phase 2 — Erster Start:** 2-Spalten-Layout: links Companion-Conversation-Mock (Wayne stellt 3 Fragen), rechts narrative 5-Step-Liste
- **Phase 3 — Erstes Ergebnis:** 3-Spalten-Grid mit Mikro-Aktion-Cards, jede mit `MiniGrid`-Mock + Shortcut-Hinweis
- **Phase 4 — Weiter:** 3 Cards (Einsteiger / Fortgeschritten / Power-User) mit Verweisen auf weitere Guides
- **Bottom CTA:** Download + Links zu Github/Docs

**Komponenten:**
- `PhaseShell` — Sektion-Wrapper mit Phasen-Marker
- `StepBlock` — Letter-Badge (A, B…) + Title + Desc
- `TerminalBlock` — Mac-Terminal-Mock mit Title-Bar (3 Mac-Buttons), Prompt-/Output-/Comment-Lines
- `PitfallCard` — orange-akzentuierte Warnungs-Card mit "⚠ Stolperstellen"
- `MiniGrid` — winzige Grid-Visualisierung für Phase 3

### 4 · Docs Page (`CIPHER-MUX Docs Page.html`)

**Zweck:** Vollständiges Handbuch zum Nachschlagen, 15 Kapitel.

**Layout:**
- **Sticky Anchor-Nav rechts** mit allen 15 Kapiteln
- **Hero:** "Das Handbuch. Vollständig. Zum Nachschlagen."
- **Companion-Intro** (vor Kapitel 1, anderer Surface-Background): "Du musst das hier nicht lesen." — knüpft an Wayne aus dem Install-Flow an, erklärt die 3 Modi (Tutor/Berater/Helfer), Faustregel "Companion vs. Handbuch"
- **15 Kapitel** als Long-Scroll:
  1. Das Fenster verstehen
  2. Sessions
  3. Grid
  4. Sprachsteuerung
  5. Seitenleiste
  6. Notizen
  7. Projekte und Projekt-Struktur
  8. Software-Lebenszyklus (Presets)
  9. Companion (Wayne im Detail)
  10. Personas
  11. Workspace-Editor (2 Tabs)
  12. Einstellungen (5 Tabs: General · Themes · Models · Shortcuts · About)
  13. Tastenkürzel
  14. Bugreports und Feature-Requests
  15. Dialoge im Überblick
- **Bottom CTA:** "Frag Wayne." (verweist zurück zum Companion)

**Komponenten:**
- `DocsSection` — Section mit "§ NN · KAPITEL"-Marker, Title, Lead, Children
- `DocsSubhead` — H3 mit kleinem Akzent-Quadrat (clipPath)
- `DocsP`, `B`, `Mono` — Body, Bold inline, Inline-Mono mit Cut-corner-Border
- `DocsTable` — 2- oder 3-Spalten-Reference-Tabelle mit Mono-Label-Spalte
- `DocsList` — Custom-Bullet-List mit `›`-Marker in Akzentfarbe
- `Callout` — 3 Kinds: `tip` (Akzent), `warn` (Warn-Color), `rule` (Text-Color), je mit Left-Border-Bar
- `LedRow` — Voice-Status-LEDs (für Kapitel Sprachsteuerung)
- `PipelineRow` — Pfeil-verbundene Step-Boxen (für Lifecycle/Presets)
- `Ladder` — Hierarchie-Liste mit Prio-Markern (für Persona-Hierarchie)

---

## Interactions & Behavior

**Sticky Header (Features + Docs):** bleibt am oberen Rand, nutzt `position: sticky; top: 0` mit subtilem Bottom-Border.

**Sticky Anchor-Nav (Features + Docs):** rechts, vertikal, `position: absolute; top: 200px; right: 32px`. In der echten Site sollte das `position: sticky` sein und beim Scrollen den aktiven Anker hervorheben (Scroll-Spy).

**Smooth-Scroll:** Klick auf Anchor-Nav-Items springt zur Sektion. CSS `scroll-behavior: smooth` reicht.

**Theme-Toggle:** In den Design-Files via Tweaks-Panel (nicht Teil der finalen Site). Final: entweder System-Default folgen (`prefers-color-scheme`), oder kleinen Toggle in den Header (Mond/Sonne-Icon).

**Keine komplexen Animationen:** kein Parallax, kein Reveal-on-Scroll, kein Carousel. Statisches Layout, schnell ladend.

**Hover States:** Links bekommen einen Underline-Übergang. CTAs leicht aufhellen via `filter: brightness(1.05)`. Cards heben sich nicht — die Cut-corners sind das visuelle Statement.

**Responsive:**
- Desktop ≥ 1200px: volles Layout mit Anchor-Nav
- Tablet 768–1199px: Anchor-Nav ausblenden, Sektionen volle Breite
- Mobile < 768px: Header-Nav als Burger-Menü (in den Designs nicht implementiert — dort sollte ein Slide-In-Drawer oder simples Stacked-Menu rein)

---

## State Management

**Minimal.** Die Site ist im Wesentlichen statisch. Was an State existiert:

- **Theme-Preference** (Light / Dark) — in `localStorage`, sync mit `prefers-color-scheme` als Default
- **Active-Anchor** für die Anchor-Nav (Scroll-Spy via `IntersectionObserver`)
- **Mobile-Menu open/close**

Kein Routing-State außer der Browser-URL. Kein User-Account, kein Backend.

---

## Design Tokens

### Farben (Light Theme — Default)

```
bg              #FFF7E8  (warm ivory background)
surface         #F2EAD0  (slightly darker surface)
surfaceAlt      #E8DEB8  (alt surface for callouts/footer)
text            #2A2A1F  (deep warm-black)
textSecondary   #4A4938
textDim         #8A8970
line            #D4C9A4  (border / dotted divider)
accent          #4E9D3F  (brand green — overridable via Tweaks)
warn            #D08770  (warm orange for warnings)
terminalBg      #1A1A1D  (dark terminal panel)
terminalChrome  #252528
terminalText    #C9C7B5
```

### Farben (Dark Theme)

```
bg              #1A1A1D
surface         #232327
surfaceAlt      #2A2A2E
text            #ECEFF4
textSecondary   #C5C7CD
textDim         #7E8088
line            #3A3A40
accent          #6FBE5C  (brighter green for dark)
warn            #D08770
terminalBg      #0F0F11
terminalChrome  #1A1A1D
terminalText    #C9C7B5
```

→ Vollständige Token-Definition in `features-shared.jsx` Funktion `cmPalette(theme, accent)`.

### Typographie

- **Display / Headings:** `'Rajdhani', sans-serif` — Weights 400, 500, 600, 700
- **Body:** `'Rajdhani', sans-serif` — Weight 400 für Fließtext, 600 für Bold inline
- **Mono / Code / UI-Mono:** `'Fira Code', monospace` — Weights 400, 500
- **Google Fonts Import:** `https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap`

### Type-Scale

```
Hero H1            clamp(48px, 6vw, 96px)  Rajdhani 700  -0.02em  line-height 0.95
Section H2         38–48px                  Rajdhani 700  -0.01em  line-height 1.05
Subhead H3         22–26px                  Rajdhani 700           line-height 1.1–1.15
Body P             16–19px                  Rajdhani 400           line-height 1.45–1.55
Lead P             18–22px                  Rajdhani 400           line-height 1.4–1.5
Mono UI-Hint       11–13px                  Fira Code 400  +0.06–0.18em letterspacing
Mono Tag/Kicker    10–13px UPPERCASE        Fira Code 400  +0.14–0.22em letterspacing
```

`text-wrap: pretty` wo immer Fließtext steht.

### Spacing-Scale

Zwei Densities — `luftig` (Default) und `dicht` (kompakt):

**Luftig:**
- sectionPadY: 80
- sectionPadX: 64
- gap: 24
- h2Size: 48
- leadSize: 19
- bodySize: 16

**Dicht:**
- sectionPadY: 56
- sectionPadX: 48
- gap: 18
- h2Size: 36
- leadSize: 14
- bodySize: 13.5

→ In `features-shared.jsx` Funktion `cmSpacing(density)`.

### Cut-corner-Geometrie

Das wichtigste visuelle Element. Boxes haben asymmetrisch abgeschnittene Ecken (oben-links + unten-rechts) via `clip-path: polygon(...)`. Standard-Größen:

```css
/* Klein (Inline-Tags, kleine Buttons): 6px */
clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);

/* Mittel (Cards, Mono-Code): 8px */
clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);

/* Groß (CTA-Buttons, Hero-Boxes): 10–14px */
clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
```

Wo `clip-path` problematisch wird (z.B. wegen Schatten), kann die Form auch via `mask-image` mit SVG umgesetzt werden.

### Borders & Dividers

- Solid Border: `1px solid {palette.line}`
- Dotted Divider (zwischen Listen-Items): `1px dotted {palette.line}`
- Linker Akzent-Bar (Callouts): `3px solid {accent | warn | text}`

### Shadows

Bewusst sparsam. Nur in Terminal-Blocks (Mac-Window-Buttons haben subtile Inner-Höhen). Keine Card-Hover-Shadows, keine Drop-Shadows. Die Cut-corners ersetzen typische Shadow-Hierarchien.

---

## Assets

Keine externen Bild-Assets im Paket — alle visuellen Elemente sind CSS, SVG-inline, oder Type. Konkret:

- **Logo / Branding:** Aktuell nur Text "cipher-mux" mit Akzent. In der finalen Site sollte ein einfaches Wordmark oder Glyph aus dem `CM`-Monogram (siehe DMG-Mock in Phase 1B) entwickelt werden.
- **Mac-Terminal-Buttons:** drei Kreise rot/gelb/grün — Standard-macOS-Farben (`#FF5F57`, `#FEBC2E`, `#28C840`).
- **Icons:** Es werden keine Icon-Libraries eingesetzt. Symbole sind entweder Unicode (`›`, `→`, `↥`, `↧`, `⇄`, `✕`, `↓`, `⌘`) oder kleine clipPath-Quadrate.
- **Domain im Footer:** `cipher-mux.dev`

---

## Files in diesem Paket

### Design-Referenzen (HTML)

- `CIPHER-MUX Website Design.html` — Landing-Page-Mockup mit Design-Canvas (mehrere Artboards für Varianten)
- `CIPHER-MUX Features Page.html` — Features-Page Single-Artboard
- `CIPHER-MUX Install Page.html` — Install-Page Single-Artboard
- `CIPHER-MUX Docs Page.html` — Docs-Page Single-Artboard

### Source-JSX (zur Referenz)

Alle Komponenten als React-JSX-Files, im Handoff-Root neben den HTML-Files (damit die HTML-Mockups direkt funktionieren — sie laden die JSX via Babel-Standalone). Die Site selbst sollte **nicht** Babel-Standalone im Browser nutzen — diese Files dienen nur dem Verständnis der Struktur und dem Extrahieren der Design-Tokens.

- `features-shared.jsx` — **wichtigste Datei.** Enthält `cmPalette`, `cmSpacing`, `cmThemes`, `CMPageHeader`, `CMPageFooter`, `CMAnchorNav`, sowie alle Atom-Komponenten (`CMTag`, `CMSectionHeader`, `CMBox`, `CMBodyText`, `CMRule`, `CMDot`)
- `features-page.jsx`, `features-sections.jsx` — Features-Page-spezifische Sections
- `install-page.jsx`, `install-sections.jsx` — Install-Page mit `PhaseShell`, `TerminalBlock`, `PitfallCard`, `MiniGrid`, `StepBlock`
- `docs-page.jsx`, `docs-shared.jsx`, `docs-sections-1.jsx`, `docs-sections-2.jsx` — Docs-Page mit `DocsSection`, `DocsTable`, `DocsList`, `Callout`, `LedRow`, `PipelineRow`, `Ladder`
- `artboards.jsx`, `components.jsx` — Landing-Page-Komponenten

### Hilfs-Files

- `design-canvas.jsx` — Design-Tool für Multi-Artboard-Vergleich (nur in den HTML-Mockups, nicht für die Final-Site)
- `tweaks-panel.jsx` — Live-Theme-Tweaks (nur Design-Tool)
- `styles.css` — Shared-Styles, falls noch genutzt

---

## Wichtigste Implementierungs-Hinweise

1. **Design-Tokens zentralisieren.** Übernimm `cmPalette` und `cmSpacing` aus `features-shared.jsx` als CSS-Custom-Properties oder als Theme-Object in der Ziel-Codebase. Das Theme-Switch (Light/Dark) sollte über CSS-Variables laufen, nicht über JS-Object-Swaps.

2. **Cut-corners als Pattern.** Die meisten Boxes haben 6/8/10px-Cuts. Definier dir eine Mixin/Utility-Class:
   ```css
   .cut-sm  { clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px); }
   .cut-md  { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
   .cut-lg  { clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px); }
   ```

3. **Type-Loading optimieren.** Die Site nutzt Rajdhani + Fira Code. Self-hosting via `@font-face` + `font-display: swap` ist Production-Standard. Nicht direkt das Google-Fonts-CSS einbinden in Production.

4. **Sticky Anchor-Nav richtig machen.** Die Mockups nutzen `position: absolute`. In Production: `position: sticky; top: <header-height + offset>`. Plus `IntersectionObserver` für Scroll-Spy.

5. **`text-wrap: pretty` aktiv halten.** Setzt der Browser für alle Body-Paragraphen, schöneres Line-Breaking.

6. **Keine Animations-Frameworks.** Die Site braucht weder Framer Motion noch GSAP. CSS-Transitions reichen.

7. **Bilder gibt's keine.** Falls später welche dazukommen (Screenshots der App?), unbedingt mit `loading="lazy"` und `aspect-ratio` arbeiten — die Page ist sehr lang, Layout-Shifts vermeiden.

8. **Performance-Ziel:** Lighthouse 95+ in allen Kategorien. Bei korrekter Umsetzung (statische HTML, optimierte Fonts, keine JS-Frameworks für die meisten Pages) ist das problemlos erreichbar.

---

## Offene Punkte für die echte Implementierung

- **Mobile-Navigation** — ist in den Designs nicht ausgearbeitet. Empfehlung: einfacher Slide-In-Drawer von rechts.
- **Impressum / Privacy** — kommt in der nächsten Iteration, minimalistisch.
- **Real-content vs. Placeholder** — alle Texte in den Designs sind final. Versionsnummern (v0.9.9, 0.9.0.dmg etc.) und SHA-256-Hinweise im Install-Hero müssen in Production aus dem Build-Prozess kommen.
- **Download-Links** — aktuell `href="#"`. Müssen auf reale DMG-URLs zeigen (vermutlich GitHub-Releases).
- **GitHub-Link** — `github / cipher-mux` ist Platzhalter, muss auf das echte Repo zeigen.
