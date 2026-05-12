# CIPHER-MUX Website — Design Decisions Brief

Stand der getroffenen Entscheidungen aus dem Design-Prozess. Damit Claude Code (oder jemand anders) die Website umsetzen kann, **ohne** Rohmaterial neu zu sichten oder Varianten neu zu evaluieren.

> **Lesereihenfolge:** Dieser Brief → `LEKTORAT_BRIEF.md` (Tonalität) → `TEXTE_ZUM_KORREKTURLESEN.md` (finale Texte). Nichts anderes ist autoritativ.

---

## 0 · Was die Website ist

Eine **statische Marketing-/Doku-Site für CIPHER-MUX**, Open-Source-macOS-App. Vier Seiten, deutsch, du-Form, Cockpit-Ästhetik. Kein CMS, kein Backend, kein Tracking. Hostable als statische Files (GitHub Pages reicht).

**Sitemap:**
1. **Landing** — `/` — Hero + Pillars + Not-Section + Bottom-CTA + Footer
2. **Features** — `/features` — Deep-Dive, 12 Sektionen + Anchor-Nav
3. **Download / Install** — `/install` — 4 Phasen + DMG-CTA
4. **Docs / Handbuch** — `/docs` — 15 Kapitel + Companion-Intro

Keine weiteren Seiten geplant. Blog, Changelog, Press, Pricing — explizit **nicht** Teil der Website.

---

## 1 · Visuelle DNA

**Stilrichtung:** "Cockpit-Cyberpunk-Sachlich". Inspiriert vom Look der App selbst (Statusbar, Grid, Terminals). **Kein** generischer SaaS-Landingpage-Look.

### Typografie
- **Display / Headings:** `Rajdhani` (semibold/bold, leicht kondensiert, technisch).
- **Body & UI:** `Rajdhani` regular für lange Lese-Texte.
- **Mono / Code / Tags:** `Fira Code` (für Statusbar, Terminal-Mocks, Code-Snippets, Tag-Pills).
- Keine Mischung mit System-Fonts. Wenn Rajdhani fehlt, Fallback auf system-sans — aber nicht designen für den Fallback.

### Farb-System (Light = Default)
- **Background:** warmes Off-White `#F4F3ED` (cipher-ivory)
- **Surface elevated:** `#FEFEFB`
- **Surface sunken:** `#ECEAE2`
- **Border:** `#C8C5B8`
- **Border strong:** `#3A3F47`
- **Text:** `#1A1A1D`
- **Text secondary:** `#4A4A52`
- **Text dim:** `#8A8A82`
- **Accent (Brand):** `#006B7A` — Default-Teal. **Tweakbar** über das Tweaks-Panel (siehe unten).
- **Warn:** `#D08770`

### Farb-System (Dark = Nord-basiert)
- **Background:** `#2E3440`
- **Surface elevated:** `#3B4252`
- **Surface sunken:** `#272C36`
- **Border:** `#434C5E`
- **Text:** `#ECEFF4`
- **Accent:** `#88C0D0` (Nord Frost)

Beide Modi sind erstklassig — kein "nice-to-have". Theme-Toggle steht im Header.

### Funktions-Farben (Presets — wiederkehrend in Pillars, Features, Docs)
- Ideation: `#C792EA` · Refinement: `#BF616A` · Cyber Factory: `#5E81AC` · Testing: `#A3BE8C` · Debugger: `#D08770` · Audit: `#B48EAD` · Companion: `#EBCB8B` · Voice: `#88C0D0`

### Persona-Farben
- Cipher: `#5BC8AF` (mint) · Relay: `#7B8394` (slate) · Wayne: `#E5A442` (gold) · Kyniker: `#9C9C9C` · Sokrates: `#7C9BD9` · Glitch: `#D070C8`

### Geometrie
- **Cut-Corner-Boxes** sind ein wiederkehrendes Motiv — `clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)`. Verwendet für Buttons, Cards, Tags, Mono-Pills. **Nicht** durch border-radius ersetzen.
- **Keine** weichen Schatten, keine Glassmorphism-Effekte, kein Blur (außer im DesignCanvas-Focus-Overlay).
- Trennlinien sind 1px solid `var(--border)` — nicht gradient, nicht ausgeblendet.

---

## 2 · Layout-System

### Container-Breite
- Maximum **1200 px** für den Content-Bereich.
- Sektions-Padding `88px Y / 64px X` (Density: luftig — Default) oder `56/48` (Density: dicht — Tweak).
- Anchor-Nav rechts (Features + Docs) ist im **64-px-Padding-Reservoir** rechts.

### Sektionen-Pattern
Jede Sektion hat:
1. **Kicker** — Mono, uppercase, Akzent-Farbe, mit Nummerierung (`§ 03` o. ä.)
2. **H2** — Rajdhani 38–48px, lineHeight 1.05
3. **Lead** — Rajdhani 18px, max-width 720px, `textWrap: pretty`
4. **Body** — eigentlicher Inhalt

Header `position: sticky` oben. Statusbar (auf Features) `position: sticky` unter Header.

---

## 3 · Variant-Entscheidungen (final ausgewählt)

Während des Designs gab es mehrere Varianten je Block. **Folgende sind ausgewählt und werden umgesetzt:**

### Landing — Hero
**`schematic`** — zwei-spaltiges Cockpit-Mock mit `coding-companion` links und `cyber-factory` rechts, eingerahmt in macOS-Window-Chrome. Tagline „Dein Coding-Cockpit." mit „Coding-Cockpit" als Akzent-Wort.

Alternativen `pixel` (5×5 Pixel-Block) und `terminal` (ASCII-Background) sind im Code als Fallback drin, **werden aber nicht ausgespielt**. Können entfernt werden, wenn ein Cleanup gewünscht ist.

### Landing — Pillars
**`preset`** — vier Pillars mit Preset-Farb-Markern (Tag wie `> orchestrator`, `> project-launcher`, `> companion`, `> voice-relay`). Direkter visueller Bezug zur App.

Alternativen: `pixel` (5×5 Patterns), `minimal` (numbered, kein Icon) — nicht ausgewählt.

### Landing — Footer
**`plain`** — klassischer Footer mit Brand + Versions-String + Standard-Links (GitHub · Issues · Datenschutz · Impressum).

Alternative: `statusbar` (App-Statusleiste-Look) — **nicht** ausgewählt für Footer (zu verwirrend mit der echten Statusbar). Statusbar-Variante kommt aber als Element auf der Features-Seite vor.

### Features + Docs — Dichte
**`luftig`** — Default. Größere Section-Paddings, größere H2.

`dicht` ist als Tweak da, aber `luftig` ist die ausgespielte Variante.

### Features + Docs — Anchor-Nav rechts
**`true`** — Anchor-Nav an, sticky rechts.

### Theme — Default
**`light` (cipher-ivory)** — Default beim ersten Aufruf. User kann auf Dark wechseln (toggle im Header). Auswahl wird in `localStorage` gespeichert (TODO bei Umsetzung).

### Accent-Farbe
**`#006B7A`** Light · **`#88C0D0`** Dark. Tweakbar im Tweaks-Panel (während des Designs). In der Production-Site **nicht** user-tweakbar — fixe Brand-Farbe.

---

## 4 · Komponenten-Inventar

Wiederverwendbare Komponenten aus den `*-shared.jsx` Dateien:

### Globale Page-Chrome (`features-shared.jsx`)
- `CMPageHeader({ palette, active })` — Wordmark + 4-Item-Nav. `active`-Prop hebt aktuellen Page-Tab hervor.
- `CMPageFooter({ palette })` — wie Landing-Footer, aber kompakter.
- `CMAnchorNav({ items, active, palette })` — sticky right-rail Anchor-Liste mit aktivem Highlight.
- `CMStatusbar({ palette })` — App-Statusleisten-Look mit OFF/STT/COM/Theme/Version-Pill.

### Section-Atome
- `CMSectionHeader({ num, kicker, title, lead, palette, sp })` — Standard-Sektions-Kopf.
- `CMBox({ palette, padding, elevated, accent })` — Cut-Corner-Box (Standard-Container).
- `CMBodyText({ palette, sp })` — Body-Paragraph.
- `CMTag({ children, color, palette })` — Mono-Tag/Pill.
- `CMRule` · `CMDot` — Mini-Linien und Dots für Decoration.

### Docs-spezifisch (`docs-shared.jsx`)
- `DocsSection({ num, title, lead })` — wie CMSectionHeader, aber mit `§ N`-Prefix statt `// NN`.
- `DocsSubhead` · `DocsP` · `B` · `Mono` — Inline-Atome für lange Lese-Texte.
- `DocsTable({ rows, columns, headers })` — Referenz-Tabelle (2- oder 3-spaltig).
- `DocsList({ items, marker })` — Bullet-Liste mit Mono-Marker.
- `Callout({ kind: 'tip'|'warn'|'rule', title })` — Hinweis-Boxen.
- `LedRow` · `PipelineRow` · `Ladder` — Spezial-Visuals für Voice-LED-States, Pipeline-Stages, Hierarchie-Stufen.

### Theme + Spacing
- `cmPalette(theme, accent)` — baut komplette Palette aus Theme-Mode + Accent-Override.
- `cmSpacing(density)` — `luftig` oder `dicht` Spacing-Tokens.

**Beim Umbau zu Production-CSS: diese Komponenten bleiben. Nicht durch Tailwind/CSS-Modules-Variants neu erfinden.**

---

## 5 · Tweaks (im Design vs. Production)

Während des Designs läuft auf jeder Page ein `<TweaksPanel>` mit:
- Theme-Toggle (light/dark)
- Density (luftig/dicht)
- Anchor-Nav an/aus
- Accent-Farbpicker

Plus auf der Landing zusätzlich Hero-/Pillar-/Footer-Varianten.

**In der Production-Site:** Tweaks-Panel wird entfernt. Nur Theme-Toggle (Header) und Sprache (geplant: DE/EN, später) bleiben als User-Controls.

---

## 6 · Mocks und Visuals

### Cockpit-Mock im Hero (Schematic)
Stellt **konkrete realistische** Sessions dar — kein Lorem-Ipsum:
- Linke Pane (`coding-companion`): User-Brief + Ablauf-Liste + Memory-Footer
- Rechte Pane (`cyber-factory`): Multi-Project-Lifecycle + 3 aktive Worker
- Permissions-Footer pro Pane: `▸▸ bypass permissions on (shift+tab to cycle)`
- Statusbar drunter: real-feeling Indikatoren (Spalten/Zeilen, Theme, Version)

### Grid-Mocks (Features § 02)
Vier Layout-Beispiele (Triage, Dual+Plan, Solo Focus, Maker) als Mini-SVG-Schematics. Annotations zeigen Row-Span, Notes-Zelle, Preset-Marker.

### LED-States (Docs § 04)
- aus / grün (bereit) / rot (aufnehmend) / gelb (verarbeitend)
- Konkrete `box-shadow: 0 0 8px <color>` Glow für aktive States.

### Recovery-Dialog-Mock (Features § 03)
Liste mit gefundenen Sessions + Laufzeit + Resume/Close-All-Buttons.

### Companion-Greeting (Install § 02)
Wayne-Persona stellt drei Fragen mit Optionen + Eingabe-Mock + JSON-Confirmation-Footer.

**Alle Mocks sind Static-Render — keine Interaktion in der Production-Site.**

---

## 7 · Inhaltliche Architektur

### Landing (in dieser Reihenfolge)
1. Header
2. Hero (Schematic)
3. Pillars (Preset, 4 Stück) — *Beschreiben statt coden · Von der Idee zum Projekt · Lernen durch Machen · Für alle*
4. Not-Section ("Was CIPHER-MUX nicht ist", 4 Punkte)
5. Bottom-CTA (Loslegen / Den Prozess verstehen / GitHub)
6. Footer (Plain)

### Features (12 Sektionen + Hero + Bottom-CTA)
Cockpit · Grid · Sessions · Personas · Presets · Persona × Preset & System-Prompt · Voice & TTS · Notes & Memory · MCP-Server · Themes · Barrierefreiheit · Effizienz · Bottom-CTA

### Install (4 Phasen + Hero + Bottom-CTA)
Phase 1 Installation (CLI + DMG) · Phase 2 Erster Start · Phase 3 Erstes Ergebnis · Phase 4 Wohin als nächstes · Download-CTA

### Docs (15 Kapitel + Hero + Companion-Intro + Bottom)
01 Fenster · 02 Sessions · 03 Grid · 04 Voice · 05 Sidebar · 06 Notizen · 07 Projekte · 08 Software-Lebenszyklus (Presets) · 09 Companion · 10 Personas · 11 Workspace-Editor · 12 Einstellungen · 13 Tastenkürzel · 14 Bugreports · 15 Dialoge im Überblick

**Vor Kapitel 01 steht der Companion-Intro-Block** ("Du musst das hier nicht lesen") — bewusste Hinleitung zum Companion statt zum Handbuch-Konsum.

---

## 8 · Was NICHT auf der Site sein soll

- **Keine** Testimonials (Produkt ist 0.9.9, niemand hat es benutzt).
- **Keine** Stats wie „3000+ Nutzer", „⭐ 1.2k auf GitHub". Wenn es echte Zahlen gibt: Footer-Pill mit Version reicht.
- **Keine** Newsletter-Anmeldung.
- **Keine** "Sign up" / "Try it free" Patterns — es gibt nichts, wofür man sich anmelden muss.
- **Keine** Animations-Carousels, parallax-scrolling, Lottie-Animationen. Statisch ist Programm.
- **Kein** Cookie-Banner — keine Cookies, kein Tracking, nichts zu bannen.
- **Keine** Roadmap oder „Coming Soon" Teaser. Wenn etwas kommt, kommt's. Bis dahin: macOS only.

---

## 9 · Tech-Stack-Empfehlung für die Umsetzung

Aktuell ist alles React-via-Babel-im-Browser (Designer-Mode). Für Production:

**Empfohlen:** **Astro** mit React-Inseln nur für Theme-Toggle. Keine SPA, kein Hydration-Overhead, statisches HTML.
**Alternativ:** **Next.js Static Export** wenn React durchgängig.
**Nicht empfohlen:** Vue/Nuxt/SvelteKit — die Komponenten sind alle React, Portierung ist sinnlos.

CSS-Strategie:
- **CSS-Variablen** für Themes (genauso wie aktuell `--bg`, `--text`, `--accent`).
- **Plain CSS / CSS-Modules** — nicht Tailwind. Die Cut-Corner-Polygons + Mono-Fontstack passen schlecht zu Utility-First.
- **Static Inlining** der Critical-CSS für die 4 Pages.

Assets:
- Rajdhani + Fira Code als **selbst gehostete Woff2** (nicht Google-Fonts-CDN — Privacy + Performance).
- DMG + SHA-256 als statische Files, gehostet bei GitHub Releases (nicht im Site-Repo).

Hosting:
- **GitHub Pages** oder **Cloudflare Pages**. Beides reicht. Domain `cipher-mux.dev`.

---

## 10 · Offene Punkte (vor Production zu klären)

1. **Localization:** Aktuell rein deutsch. Soll EN-Version mitgeliefert werden? Wenn ja: Astro-i18n statt Hardcode.
2. **DMG-Verifikation:** Wie wird die SHA-256 prominent angezeigt? Aktuell nur als Mini-Text neben dem Download.
3. **Apple-Notarisierung:** Erste-Start-Hinweis "Rechtsklick → Öffnen" ist im Install-Text drin. Falls Notarisierung kommt, kann das raus.
4. **GitHub-Stars-Counter:** Bewusst weggelassen. Falls doch erwünscht, gehört in den Header rechts.
5. **Search:** Docs-Page hat keine Suche. Companion-First-Ansatz bewusst — aber falls Doku weiter wächst, ist `pagefind` o. ä. eine Option.
6. **Analytics:** Aktuell **keine**. Falls Plausible/umami o. ä. gewünscht, ins Layout-Template, nicht pro Page.
7. **404-Page:** Existiert noch nicht. Bei Umsetzung mitliefern.

---

## 11 · Files-Übersicht (Design-Stand)

```
CIPHER-MUX Website Design.html       — Landing, alle Varianten als DesignCanvas
CIPHER-MUX Features Page.html        — Features-Seite Light + Dark
CIPHER-MUX Install Page.html         — Install-Seite Light + Dark
CIPHER-MUX Docs Page.html            — Docs-Seite (Light/Dark per Tweak)

components.jsx                       — Landing-Komponenten (Hero*, Pillars*, NotSection, Footer*)
artboards.jsx                        — FullLanding + Solo-Artboards
features-shared.jsx                  — Theme + Page-Chrome + Section-Atoms
features-sections.jsx                — die 12 Features-Sektionen
features-page.jsx                    — Features-Page-Composer
install-sections.jsx                 — Install-Phase-Sektionen
install-page.jsx                     — Install-Page-Composer
docs-shared.jsx                      — Docs-Atome (Tabelle, Liste, Callout, Ladder…)
docs-sections-1.jsx + docs-sections-2.jsx — die 15 Kapitel + Hero + Companion-Intro + Bottom
docs-page.jsx                        — Docs-Page-Composer

design-canvas.jsx                    — Designer-Tool (kommt nicht in Production)
tweaks-panel.jsx                     — Designer-Tool (kommt nicht in Production)
styles.css                           — globale CSS-Variablen + Base-Styles

LEKTORAT_BRIEF.md                    — Tonalität / Sprach-Konventionen
TEXTE_ZUM_KORREKTURLESEN.md          — finale Texte (zum Lektorieren)
DESIGN_DECISIONS_BRIEF.md            — diese Datei
```

---

## 12 · TL;DR für die Umsetzung

1. Landing-Hero ist **schematic**, Pillars sind **preset**, Footer ist **plain**.
2. Default-Theme ist **light (cipher-ivory)**, Dark (Nord) als gleichwertige Alternative.
3. Accent-Farbe ist **`#006B7A`** (Light) / **`#88C0D0`** (Dark) — fix in Production.
4. Density ist **luftig**, Anchor-Nav ist **an**.
5. Typo: **Rajdhani** + **Fira Code**, selbst gehostet.
6. Cut-Corner-Polygons bleiben — kein border-radius.
7. Vier Pages, deutsch, keine Localization (vorerst).
8. Tech: **Astro** mit Plain-CSS + CSS-Variablen.
9. Tweaks-Panel + DesignCanvas raus für Production.
10. Texte sind in `TEXTE_ZUM_KORREKTURLESEN.md` — nach Lektorat 1:1 übernehmen.

Wenn etwas hier widersprüchlich oder unklar ist: **fragen, nicht raten.**
