# i18n Migration + Ton-Bereinigung

**Datum:** 2026-05-12
**Scope:** Landing, Features, Install — DE + EN
**Ziel:** Alle sichtbaren Strings in i18n-Dateien, ein Template pro Seite, konsistenter Maker-Ton

---

## Problem

1. **Doppelte Templates:** Jede Seite existiert als `de/*.astro` und `en/*.astro` mit identischem Markup und unterschiedlichen hardcoded Strings. Pflege-Albtraum.
2. **Inkonsistenter Ton:** i18n-Texte klingen förmlich ("es empfiehlt sich", "steht zur Verfuegung"), Template-Texte klingen direkt ("Hey! Gib /startup ein"). Zwei Register auf derselben Seite.
3. **~178 hardcoded Strings** ueber alle drei Seiten, die bei jeder Textaenderung in zwei Dateien angefasst werden muessen.

## Loesung

### Architektur

Shared Page-Components + duenne Wrapper:

```
src/
  components/pages/
    LandingPage.astro       # Markup + CSS, empfaengt {lang, content} als Props
    FeaturesPage.astro       # dito
    InstallPage.astro        # dito
  pages/
    de/index.astro           # Wrapper (~10 Zeilen): importiert de/landing, rendert LandingPage
    en/index.astro           # Wrapper: importiert en/landing, rendert LandingPage
    de/features.astro        # Wrapper: importiert de/features, rendert FeaturesPage
    en/features.astro        # Wrapper: importiert en/features, rendert FeaturesPage
    de/start.astro           # Wrapper: importiert de/install, rendert InstallPage
    en/start.astro           # Wrapper: importiert en/install, rendert InstallPage
  i18n/
    de/landing.ts            # erweitert um bisher hardcoded Strings
    en/landing.ts            # dito
    de/features.ts           # erweitert um ~60 Strings
    en/features.ts           # dito
    de/install.ts            # erweitert um ~106 Strings
    en/install.ts            # dito
```

### Wrapper-Format

```astro
---
import LandingPage from '../../components/pages/LandingPage.astro';
import content from '../../i18n/de/landing';
---
<LandingPage lang="de" content={content} />
```

### i18n-Dateien: Erweiterungsprinzip

Jede Datei bekommt die Strings, die aktuell hardcoded im Template stehen. Struktur folgt den Sektionen auf der Seite. Bestehende Keys bleiben, neue kommen dazu.

#### install.ts — Beispiel-Struktur (groesste Aenderung)

```ts
const install = {
  hero: {
    kicker: 'Get started',
    title: 'Vom Mac zum Cockpit.',
    titleAccent: '~20 Minuten.',
    titleSuffix: 'Einmalig.',
    body: '...',
  },
  phaseStrip: [
    { label: 'Installation', time: '~10 min' },
    { label: 'Erster Start', time: '~5 min' },
    { label: 'Erstes Ergebnis', time: '~5-10 min' },
    { label: 'Weiter', time: 'wann du willst' },
  ],
  dmg: {
    buttonLabel: 'cipher-mux-0.9.99.dmg',
    meta: 'macOS / Apple Silicon / 142 MB / SHA-256 verifiziert',
  },
  requirements: {
    label: 'Was du brauchst',
    body: 'macOS 12 Monterey oder neuer ...',
  },
  steps: {
    a: {
      title: 'App installieren',
      desc: 'Standard-DMG-Flow ...',
      items: [
        { strong: 'DMG herunterladen', detail: 'GitHub Releases -> ...' },
        // ...
      ],
      pitfall: { label: 'Warum xattr?', items: ['...'] },
    },
    b: {
      title: 'Setup-Wizard',
      desc: '...',
      disclosureLabel: 'Was der Wizard einrichtet',
      wizardItems: [
        { name: 'Homebrew', tag: 'Pflicht / ~200 MB', body: '...' },
        // ...
      ],
      pitfall: { label: 'Hinweis', items: ['...'] },
    },
    c: {
      title: 'Claude Code einloggen',
      desc: '...',
      terminal: { cmd: 'claude login', out: 'Browser oeffnet sich, einloggen, fertig.' },
      pitfall: { label: 'Hinweis', items: ['...'] },
    },
  },
  companion: {
    mockHeader: 'companion / cell 1/1',
    mockMessages: [
      { type: 'name', text: 'companion' },
      { type: 'msg', text: 'Hey! Gib /startup ein ...' },
      // ...
    ],
    narrativeTitle: 'So laeuft es ab',
    narrativeSteps: [
      { strong: 'App oeffnet -> leeres Grid', detail: '...' },
      // ...
    ],
  },
  actions: [
    { num: 'AKTION 01', title: 'Etwas tippen', body: '...', terminal: '...' },
    { num: 'AKTION 02', title: 'Zweite Session', body: '...', terminal: '...' },
    { num: 'AKTION 03', title: 'Sidebar entdecken', body: '...', terminal: '...' },
  ],
  outcome: {
    label: 'Nach diesen drei Aktionen hast du',
    items: ['Claude Code laeuft', 'Zwei parallele Sessions', '...'],
  },
  nextSteps: {
    title: 'Der Companion schlaegt vor -- du waehlst',
    lead: '...',
    cards: [
      { guide: 'Guide 02', tag: 'Einsteiger', title: 'Voice + Notes', body: '...' },
      // ...
    ],
  },
  bottom: {
    title: 'Bereit?',
    titleAccent: "Lad's runter.",
    subtitle: 'macOS 12+ / Apple Silicon oder Intel. Linux & Windows: kommt.',
    buttons: [
      { label: 'DMG herunterladen', href: '...', primary: true },
      { label: 'github / cipher-mux', href: '...' },
      { label: 'docs', href: '/{lang}/docs' },
    ],
  },
} as const;
```

#### landing.ts — Erweiterung

Neue Keys:

- `pillars.kicker` ("VIER PFEILER / EIN MANIFEST")
- `pillars.numLabel` ("// pfeiler")
- `builtWithItself.kicker` ("Selbstreferenz")
- `builtWithItself.waveChartHeader` ("// wachstum der test-suite ...")
- `notSection.kicker` ("Systemabgrenzung")
- `bottomCta.kicker` ("// Bereit?")
- `bottomCta.title` ("Lies das Handbuch.")
- `bottomCta.titleDim` ("Oder lad's runter.")
- `bottomCta.buttons` ([...])

#### features.ts — Erweiterung

Neue Keys pro Sektion (Beispiele):

- `sections[02].layoutLabels` (Solo, Dual, Triage, Maker + Grid-Dims)
- `sections[03].anatomy` (6 Bullet-Punkte Session-Anatomy)
- `sections[03].recovery` (Mock-Texte + Button-Labels)
- `sections[06].promptResolution` (4 Steps + 3 Layers)
- `sections[07].voiceBoxes` (4x Titel+Sub+Items)
- `sections[07].ttsStrip` (Body + Modes)
- `sections[08].notesEditor` (Titel, 7 Bullets)
- `sections[08].companionMemory` (Titel, Desc, Categories, Footer)
- `sections[09].mcpGrid` (10 Karten mit Name, Count, Examples)
- `sections[09].mcpFooter` (3 Strings)
- `sections[11].efficiencyItems` (6x Titel+Desc)

---

## Ton-Bereinigung

Parallel zur String-Migration werden die Texte bereinigt. Betrifft hauptsaechlich die i18n-Leads in `features.ts` und `install.ts`.

### Regeln (aus gute-sprache.md destilliert)

1. **Fuellkonstruktionen raus:** "es empfiehlt sich", "steht zur Verfuegung", "wir begleiten dich", "nimmt etwas Zeit in Anspruch", "unter anderem"
2. **Direkte Formulierung:** Aktiv statt passiv, konkret statt abstrakt
3. **Maker-Register:** Du-Form, sachlich-direkt, wie Landing-Texte und Companion-Mock
4. **Rhythmus:** Satzlaengen variieren. Nicht alle Leads im gleichen Satzbau.
5. **Keine Selbstmoderation:** Kein "im Folgenden", kein "hier findest du"
6. **Abgenutzte Bilder ersetzen:** "Ein Blick unter die Haube" -> konkreter

### Nicht aendern

- Inhaltliche Aussagen bleiben gleich
- Persona-/Preset-Beschreibungen (sind bereits gut)
- Zahlen und Fakten
- Landing-Texte (sind die Ton-Referenz)

---

## Reihenfolge

1. **Install** — groesster Anteil hardcoded, staerkster Ton-Bruch
2. **Features** — zweitgroesster Anteil
3. **Landing** — am wenigsten zu tun

Pro Seite:
1. i18n-Dateien erweitern (DE + EN parallel)
2. Shared Page-Component erstellen (Markup + CSS aus bestehendem Template)
3. DE/EN-Wrapper auf Component umstellen
4. Alte Template-Duplikate pruefen und loeschen
5. Build + visueller Check

---

## Was sich NICHT aendert

- URL-Struktur (`/de/`, `/en/`, `/de/features`, etc.)
- CSS (wandert mit ins Page-Component)
- Docs-Seiten (anderer Scope, eigener Umbau)
- Impressum, Datenschutz, Changelog, 404
- `ui.ts` (Navigation/Footer — bereits sauber)
- Schema.org Markup (bleibt in Landing-Wrapper wg. sprachunabhaengig)

---

## Risiken

- **Astro Props Typing:** Die i18n-Objekte sind `as const`. Die Page-Components brauchen passende Prop-Types. Loesung: `typeof import('...')` oder explizite Interfaces.
- **Build-Breakage:** Nach jedem Seiten-Umbau Build pruefen.
- **Visuelle Regression:** CSS bleibt identisch, aber Layout-Aenderungen durch fehlende Strings moeglich. Visueller Check pro Seite.
