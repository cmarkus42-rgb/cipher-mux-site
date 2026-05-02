# CIPHER-MUX Website — Design Spec

**Datum:** 2026-05-02
**Projekt:** cipher-mux-site
**Stack:** Astro + TypeScript-strict, Vanilla CSS, keine Frameworks
**Deployment:** GitHub Pages via withastro/action@v3

---

## Seitenstruktur (Hybrid B)

4 echte Seiten. Die 6 Claim-Seiten aus den fertigen Texten werden zu einem scrollbaren Deep-Dive zusammengefasst.

| Seite | URL | Inhalt | Textquelle |
|-------|-----|--------|------------|
| Landing | `/` | Hero, 4 Saeulen, "Was es nicht ist", CTAs | Seite 0 aus website-texte-final.md |
| Features (Deep-Dive) | `/features` | 6 Scroll-Sektionen mit Anker-Nav | Seiten 1-6 aus website-texte-final.md (gestrafft) |
| Download & Install | `/start` | Voraussetzungen, Installation, First Steps, Troubleshooting | Seite 8 + Teile von 9 (Roadmap) |
| Community | `/community` | Maintainer-Story, Feedback, Beitragen, Roadmap | Seiten 7 + 9 aus website-texte-final.md |

### Deep-Dive Scroll-Sektionen

1. Bauen ohne Code-Angst (Seite 1)
2. Ein Team, kein Tool (Seite 2)
3. Das glaeserne Cockpit (Seite 3)
4. Barrierefreies Coding (Seite 4)
5. Orchestrierung (Seite 5)
6. Alles bleibt bei dir (Seite 6)

### Navigation

- **Header:** Fixiert, kompakt (48px). Wordmark links, 3 Nav-Links + Theme-Toggle rechts.
- **Deep-Dive Scroll-Indikation:** Dezent, typografisch. Zeigt aktuelle Sektion beim Scrollen.
- **Kein Hamburger-Menu** — bei 3 Links unnoetig.

---

## Themes

### Default: Light Mode (Primary)

Aufpoliertes cipher-ivory mit waermerem Grundton:

```
--color-bg:           #F4F3ED     (warm off-white)
--color-bg-elevated:  #FEFEFB     (cards, header)
--color-bg-sunken:    #ECEAE2     (sunken areas)
--color-border:       #C8C5B8     (standard)
--color-border-strong:#3A3F47     (kräftig)
--color-text:         #1A1A1D     (primary)
--color-text-secondary:#4A4A52
--color-text-dim:     #8A8A82
--color-accent:       #006B7A     (Deep Cyan, AA-safe)
--color-neon-green:   #2d8a4e
```

### Alternative: Dark Mode (Secondary)

Nord-basiert, nicht tiefschwarz:

```
--color-bg:           #2E3440     (Nord polar night)
--color-bg-elevated:  #3B4252
--color-bg-sunken:    #272C36
--color-border:       #434C5E
--color-text:         #ECEFF4     (Nord snow storm)
--color-text-secondary:#D8DEE9
--color-text-dim:     #7B8394
--color-accent:       #88C0D0     (Nord frost)
--color-neon-green:   #A3BE8C     (Nord aurora)
```

### Theme-Showcase (Spielerei)

Zusaetzlich zum Dark/Light-Toggle: kleines Theme-Karussell (Deep-Dive oder Footer) das die 10 cipher-mux Themes live auf die Website anwendet. Easter-Egg-Charakter.

### Toggle

Button im Header, Cut-Corner-Stil. Speichert Praeferenz in localStorage.

---

## Design-System

### Geometrie

- **Keine Border-Radius.** Cut Corners ueberall: `clip-path: polygon(8px 0, 100% 0, ...)`.
- **Cut Corner Sizes:** 8px standard, 14px gross.
- **4px Baseline-Grid** fuer Spacing.
- **Grid-Hintergrund:** Subtiles 40px-Raster als Hintergrundmuster (opacity 0.12-0.25).

### Typografie

- **Headlines:** Rajdhani 700, letter-spacing 2-5px, uppercase wo passend.
- **Subheads:** Rajdhani 500.
- **Body:** Fira Code 400, 14-15px. Monospace als Designentscheidung, nicht nur fuer Code.
- **Labels/Captions:** Fira Code 400, 11-12px, uppercase, letter-spacing 1.5-2.5px.
- **Schriften lokal** in public/fonts/ (SIL OFL).

### Icons

- **Pixel-Art / CSS-Art** — keine Emoji, keine SVG-Icon-Libraries.
- **5x5 Pixel-Grids** fuer Saeulen-Icons, jedes mit eigenem Muster.
- **3x3 Pixel-Grid** im Hero als Markenzeichen.
- Stil: minimalistisch, geometrisch, aus der Farbpalette.

### Buttons

- Ghost-Buttons mit Border und Cut Corners.
- Uppercase, letter-spacing, Fira Code.
- Hover: Accent-Farbe fuer Border + Text.
- Primary: Accent Border/Text, hover filled.

### Trennlinien

- Hairlines zwischen Sektionen (1px solid border-color).
- Pillar-Grid: Linien-Trenner statt Gap-Hintergrund.
- "Was es nicht ist": border-left Akzent pro Item.

---

## Content-Strategie

### Textquelle

- **Primaer:** `website-texte-final.md` (10 Seiten, Opus-geschrieben, Gemini-polished).
- **Referenz:** `docs/website-content-brain.md` (Feature-Inventar, technische Fakten).
- **Parallel-Update:** cyber-factory-pack (Entity/Preset-System wird rebuilt — Content-Brain ist bereits aktualisiert).

### Straffung

Die 6 Claim-Seiten werden fuer den Scroll-Deep-Dive gestrafft:
- Redundanzen entfernen (z.B. "nicht Prompt rein, Code raus" kommt 3x vor).
- Pro Sektion die staerksten Absaetze behalten.
- Ziel: ~2500 Woerter statt ~4000, Lesbarkeit geht vor Vollstaendigkeit.
- Qualitaet halten oder verbessern — keine Inhalts-Improvisation.

### Schema.org

- Landing: `WebSite` + `SoftwareApplication`
- Deep-Dive: Keine extra Schema (ist Content-Seite)
- Download: `HowTo` falls als Schrittanleitung formatiert
- Community: Kein Schema noetig
- **Kein** `LocalBusiness`, kein `FAQPage` (keine FAQ-Seite mehr im Hybrid-Modell)

### Tonfall

- Deutsch, Du-Form, Maker-Zielgruppe.
- Enthusiastisch aber ehrlich. Vorstellen statt vermarkten.
- Keine Buzzwords, keine Superlative, keine Marketing-Floskeln.
- Einschraenkungen offen benennen.
- Maintainer-Stimme sichtbar.

---

## Astro-Projektstruktur

```
cipher-mux-site/
├── src/
│   ├── layouts/
│   │   └── Layout.astro          (Header, Footer, Theme-Toggle, Meta)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PixelGrid.astro       (3x3 Hero-Icon)
│   │   ├── PillarCard.astro      (Saeulen-Komponente)
│   │   ├── ScrollNav.astro       (Deep-Dive Scroll-Indikator)
│   │   └── ThemeShowcase.astro   (Theme-Karussell Spielerei)
│   ├── pages/
│   │   ├── index.astro           (Landing)
│   │   ├── features.astro        (Deep-Dive)
│   │   ├── start.astro           (Download & Install)
│   │   └── community.astro       (Community + Roadmap)
│   └── styles/
│       ├── global.css            (Reset, Tokens, Base)
│       ├── theme-light.css       (Light Mode Tokens)
│       ├── theme-dark.css        (Dark/Nord Mode Tokens)
│       └── components.css        (Buttons, Cards, Layout)
├── public/
│   ├── fonts/
│   │   ├── Rajdhani-Bold.woff2
│   │   ├── Rajdhani-Medium.woff2
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

## Deployment

- GitHub Pages aus Repo `cipher-mux-site`.
- GitHub Action: `withastro/action@v3` in `.github/workflows/deploy.yml`.
- Keine Custom Domain in v1 — GitHub-Pages-Default-URL.
- `.superpowers/` in `.gitignore`.

---

## Was NICHT gebaut wird

- Kein Tracking, kein Analytics, keine Telemetrie.
- Kein Newsletter, kein Sponsoring, keine "Made with"-Floskeln.
- Keine externen Frameworks (kein Tailwind, kein Bootstrap).
- Kein JavaScript Build-Tool ausser Astro selbst.
- Keine Cross-Platform-Versprechen ueber v1/macOS hinaus.
- Pixel-perfektes Visual Design wird in separater Claude-Design-Session verfeinert — hier geht es um funktionale Basis + Content.

---

## Offene Punkte

- **Wordmark:** SVG aus cipher-mux-Repo verfuegbar (`assets/banner.svg`). Einbindung in Header als Text oder SVG — Text reicht fuer v1.
- **App-Screenshots:** Noch keine vorhanden. Platzhalter einbauen, spaeter ersetzen.
- **Favicon:** Brand Mark aus cipher-mux-Repo oder generieren.
- **Schriften:** Aus cipher-mux-Repo kopieren (`src/renderer/styles/` referenziert lokal gebundelte Fonts, Pfad zu woff2-Dateien pruefen).
