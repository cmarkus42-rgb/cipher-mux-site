# i18n Migration + Ton-Bereinigung — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Alle hardcoded Strings aus 3 Astro-Seitenpaaren (DE/EN) in i18n-Dateien extrahieren, zu je einem shared Page-Component konsolidieren, und Ton-Probleme (Fuellkonstruktionen, Register-Brueche) fixen.

**Architecture:** Shared Page-Components in `src/components/pages/` erhalten `{lang, content}` als Props. Die bestehenden `de/*.astro` / `en/*.astro` werden zu duennen Wrappern. Alle sichtbaren Strings leben in `src/i18n/{de,en}/*.ts`.

**Tech Stack:** Astro, TypeScript (strict), bestehende i18n-Struktur (`as const` Objekte)

---

## Phase 1: Install-Seite (groesster Umbau)

### Task 1: DE Install i18n erweitern + Ton fixen

**Files:**
- Modify: `src/i18n/de/install.ts`

Kompletter Inhalt — alle bisher hardcoded Strings aus `de/start.astro`, Ton bereinigt.

- [ ] **Step 1: Lese aktuelle Datei**

Read `src/i18n/de/install.ts` und `src/pages/de/start.astro` komplett.

- [ ] **Step 2: Schreibe erweiterte i18n-Datei**

Ersetze `src/i18n/de/install.ts` mit folgendem Inhalt:

```ts
const install = {
  hero: {
    kicker: 'Get started',
    title: 'Vom Mac zum Cockpit.',
    titleAccent: '~20 Minuten.',
    titleSuffix: 'Einmalig.',
    body: 'Du brauchst macOS, einen Anthropic-Account und ein paar Terminal-Befehle. Diese Anleitung fuehrt dich durch.',
  },
  phaseStrip: [
    { n: '01', label: 'Installation', time: '~10 min' },
    { n: '02', label: 'Erster Start', time: '~5 min' },
    { n: '03', label: 'Erstes Ergebnis', time: '~5\u201310 min' },
    { n: '04', label: 'Weiter', time: 'wann du willst' },
  ] as const,
  dmg: {
    buttonLabel: '\u2193 cipher-mux-0.9.99.dmg',
    meta: 'macOS \u00b7 Apple Silicon \u00b7 142 MB \u00b7 SHA-256 verifiziert',
  },
  requirements: {
    label: 'Was du brauchst',
    body: 'macOS 12 Monterey oder neuer (Apple Silicon oder Intel) \u00b7 Anthropic-Account mit Claude Max oder API Key \u00b7 ca. 1 GB freier Speicher (App ~140 MB, Voice Models optional ~530 MB)',
  },
  phases: [
    {
      num: '01' as const,
      headerLabel: '01 \u00b7 Installation',
      headerTime: '~5 min \u00b7 einmalig',
      title: 'DMG laden, Wizard durchlaufen, einloggen.',
      lead: 'Drei Schritte: App installieren, Setup-Wizard ausfuehren, Claude Code einloggen. Der Wizard erkennt, was fehlt.',
    },
    {
      num: '02' as const,
      headerLabel: '02 \u00b7 Erster Start',
      headerTime: '~5 min',
      title: 'Der Companion lernt dich kennen.',
      lead: 'Beim ersten Start fragt der Companion nach deinem Hintergrund. Drei kurze Fragen, dann passt sich das System an dein Level an.',
    },
    {
      num: '03' as const,
      headerLabel: '03 \u00b7 Erstes Ergebnis',
      headerTime: '~5\u201310 min',
      title: 'Grid, Cells, Sidebar \u2014 einmal anfassen reicht.',
      lead: 'Drei Aktionen: Prompt abschicken, zweite Session oeffnen, Sidebar entdecken. Danach kennst du die Grundstruktur.',
    },
  ] as const,
  stepA: {
    title: 'App installieren',
    desc: 'Standard-DMG-Flow \u2014 herunterladen, oeffnen, in Applications ziehen.',
    items: [
      { strong: 'DMG herunterladen', detail: 'GitHub Releases \u2192 cipher-mux-0.9.99-arm64.dmg', linkLabel: 'GitHub Releases' },
      { strong: 'DMG oeffnen', detail: 'Doppelklick \u2192 cipher-mux.app in Applications ziehen' },
      { strong: 'macOS-Sperre aufheben', detail: 'Einmalig im Terminal:', code: 'xattr -cr /Applications/cipher-mux.app' },
      { strong: 'Starten', detail: 'Spotlight \u2192 cipher-mux \u2192 Enter' },
    ] as const,
    pitfall: {
      label: '\u26a0 Warum xattr?',
      items: [
        'cipher-mux ist Open Source, aber noch nicht mit einem Apple-Zertifikat signiert. macOS blockiert deshalb den ersten Start \u2014 normales Sicherheitsverhalten.',
        'Der xattr -cr Befehl entfernt die Quarantaene-Markierung. Die App wird dabei nicht veraendert. Einmalig.',
      ] as const,
    },
  },
  stepB: {
    title: 'Setup-Wizard',
    desc: 'Beim ersten Start erkennt die App automatisch, was auf deinem System fehlt. Du entscheidest, was installiert wird \u2014 ein Klick auf \u201eSetup starten\u201c, der Rest laeuft automatisch.',
    disclosureLabel: 'Was der Wizard einrichtet',
    wizardItems: [
      { name: 'Homebrew', tag: 'Pflicht \u00b7 ~200 MB', body: 'Der Standard-Paketmanager fuer macOS. Falls schon vorhanden, wird der Schritt uebersprungen. Ein Terminal-Fenster oeffnet sich automatisch \u2014 dort dein macOS-Passwort eingeben.' },
      { name: 'tmux', tag: 'Pflicht \u00b7 ~2 MB', body: 'Terminal-Multiplexer \u2014 die unsichtbare Infrastruktur, auf der cipher-mux aufbaut. Jede Claude-Session laeuft in einer eigenen tmux-Session. Ohne tmux startet keine einzige Session.' },
      { name: 'Node.js', tag: 'Empfohlen \u00b7 ~30 MB', body: 'JavaScript-Runtime fuer Claude Code CLI und die TTS-Engine. Falls ueber NVM, Volta oder Homebrew schon da, wird es erkannt.' },
      { name: 'Claude Code CLI', tag: 'Empfohlen \u00b7 ~50 MB', body: 'Anthropics KI-Coding-Assistant \u2014 die Kernfunktion von cipher-mux. Wird via npm installiert. Danach einmalig claude login im Terminal.' },
      { name: 'Whisper Model', tag: 'Optional \u00b7 ~500 MB', body: 'Lokales Speech-to-Text. Sprache steuern, ohne Cloud. Komplett offline. Kann jederzeit spaeter nachinstalliert werden.' },
      { name: 'Piper TTS', tag: 'Optional \u00b7 ~30 MB', body: 'Lokale Sprachausgabe fuer deutsch. Zusammenfassungen, Status-Updates, Meilensteine \u2014 gesprochen statt nur geschrieben.' },
    ] as const,
    pitfall: {
      label: '\u2139 Hinweis',
      items: [
        'Voice ist ein Upgrade, kein Muss. Ohne Whisper und Piper funktioniert cipher-mux vollstaendig \u2014 Chat, Sessions, alle Entities, der gesamte Workflow.',
        'Der Wizard zeigt dir live, was gerade installiert wird. Nach Abschluss startet die App automatisch.',
        'Wenn Homebrew und tmux bereits installiert sind, erscheint ein \u201eUeberspringen\u201c-Link \u2014 der Wizard ist dann optional.',
      ] as const,
    },
  },
  stepC: {
    title: 'Claude Code einloggen',
    desc: 'Der Setup-Wizard installiert Claude Code CLI automatisch. Danach einmalig im Terminal einloggen:',
    terminal: {
      cmd: 'claude login',
      out: '\u2192 Browser oeffnet sich, einloggen, fertig.',
    },
    pitfall: {
      label: '\u26a0 Hinweis',
      items: [
        'Du brauchst einen Anthropic-Account mit Claude Code Zugang. Welches Abo das einschliesst: anthropic.com',
      ] as const,
    },
  },
  companion: {
    mockHeader: 'companion \u00b7 cell 1/1',
    mockLines: [
      { type: 'name' as const, text: 'companion \u25b6' },
      { type: 'msg' as const, text: 'Hey! Gib /startup ein \u2014 dann richten wir alles zusammen ein.' },
      { type: 'cmd' as const, text: '> /startup' },
      { type: 'msg' as const, text: 'Alles klar. Ein paar kurze Fragen, dann passt sich alles an.' },
      { type: 'qlabel' as const, text: 'Wie viel Coding-Erfahrung hast du?' },
      { type: 'input' as const, text: 'Etwas \u2014 ich kann Skripte lesen und anpassen_' },
      { type: 'qlabel' as const, text: 'Hast du schon mit KI-Coding-Tools gearbeitet?' },
      { type: 'input' as const, text: 'Ja, Claude Code seit ein paar Wochen_' },
      { type: 'qlabel' as const, text: 'Was willst du als erstes bauen?' },
      { type: 'input' as const, text: 'Erstmal gucken \u2014 vielleicht ein paar Notizen-Tools_' },
      { type: 'confirm' as const, text: '\u2713 user-profile.json erstellt' },
    ] as const,
    narrativeTitle: 'So laeuft\u2019s ab',
    narrativeSteps: [
      { strong: 'App oeffnet \u2192 leeres Grid', detail: 'Ein 1\u00d71 Layout zur Begruessung. Der Companion belegt die erste Zelle.' },
      { strong: '/startup eingeben', detail: 'Der Companion fragt nach deinem Hintergrund, deiner KI-Erfahrung und deinem Vorhaben. Kein Multiple-Choice \u2014 einfach antworten.' },
      { strong: 'Profil wird erstellt', detail: 'Deine Antworten werden als user-profile.json gespeichert. Alle Entities passen ihren Detailgrad ab jetzt an dein Level an.' },
      { strong: 'Workspace anlegen', detail: 'Name vergeben, Projektordner hinterlegen \u2014 fertig. Alle Sessions im Workspace wissen ab jetzt, woran gearbeitet wird.' },
    ] as const,
  },
  actions: [
    {
      num: 'AKTION 01',
      title: 'Etwas tippen',
      body: 'Gib Claude einen einfachen Auftrag in der ersten Cell. Du siehst: er arbeitet, Output erscheint im Terminal.',
      terminal: 'Erklaer mir was in diesem Projekt passiert',
      layout: '1x1' as const,
    },
    {
      num: 'AKTION 02',
      title: 'Zweite Session',
      body: 'Spalte hinzufuegen, neue Session oeffnen. Zwei parallele Claude-Cells. Das Kernfeature.',
      terminalComment: '# Shortcut',
      terminal: '\u2318 + \u2192 fuegt Spalte rechts hinzu',
      layout: '2x1' as const,
    },
    {
      num: 'AKTION 03',
      title: 'Sidebar entdecken',
      body: 'Sidebar oeffnen, Notes-Tab oeffnen, erste Notiz schreiben. Memory ist hier zuhause.',
      terminalComment: '# Shortcut',
      terminal: '\u2318 + B schaltet Sidebar um',
      layout: 'sidebar' as const,
    },
  ] as const,
  outcome: {
    label: 'Nach diesen drei Aktionen hast du',
    items: [
      '\u2713 Claude Code laeuft',
      '\u2713 Zwei parallele Sessions',
      '\u2713 Grid \u00b7 Cells \u00b7 Focus verstanden',
      '\u2713 Sidebar + Notes gefunden',
    ] as const,
  },
  nextSteps: {
    title: 'Der Companion schlaegt vor \u2014 du waehlst',
    lead: 'Je nach Skill-Level hat der Companion verschiedene naechste Schritte. Kein Druck \u2014 du kannst auch einfach machen.',
    cards: [
      { guide: 'Guide 02', tag: 'Einsteiger', title: 'Voice + Notes', body: 'Morgen zeig ich dir Voice Input und wie du Notes als zweites Gedaechtnis nutzt.' },
      { guide: 'Guide 03', tag: 'Fortgeschritten', title: 'Workshop', body: 'Wenn du magst, zeig ich dir den Workshop \u2014 wie mehrere Sessions zusammenarbeiten.' },
      { guide: 'Guide 03 + 05', tag: 'Power-User', title: 'Cyber Factory + Presets', body: 'Du weisst was du tust. Parallele Worker-Sessions und eigene Preset-Konfiguration wenn du tiefer rein willst.' },
    ] as const,
  },
  bottom: {
    title: 'Bereit?',
    titleAccent: 'Lad\u2019s runter.',
    subtitle: 'macOS 12+ \u00b7 Apple Silicon oder Intel. Linux & Windows: kommt.',
    dmgLabel: '\u2193 DMG herunterladen',
    githubLabel: 'github / cipher-mux',
    docsLabel: 'docs',
  },
} as const;

export default install;
```

**Ton-Fixes gegenueber Original:**
- `hero.body`: "Die Ersteinrichtung nimmt etwas Zeit in Anspruch. Der Hintergrund: Du benoetigst..." -> "Du brauchst macOS, einen Anthropic-Account und ein paar Terminal-Befehle. Diese Anleitung fuehrt dich durch."
- `phases[0].title`: "Abhaengigkeiten und App-Installation" -> "DMG laden, Wizard durchlaufen, einloggen."
- `phases[0].lead`: "Die Installation der Claude Code CLI erfolgt ueber das Terminal, da es hierfuer aktuell keine klassische Installationsroutine gibt. Wir empfehlen folgenden Ablauf:" -> "Drei Schritte: App installieren, Setup-Wizard ausfuehren, Claude Code einloggen. Der Wizard erkennt, was fehlt."
- `phases[1].title`: "Profil-Setup mit dem Companion" -> "Der Companion lernt dich kennen."
- `phases[1].lead`: "Um dich kuenftig passgenau zu unterstuetzen, startet beim ersten Oeffnen eine kurze Konfigurations-Session..." -> "Beim ersten Start fragt der Companion nach deinem Hintergrund. Drei kurze Fragen, dann passt sich das System an dein Level an."
- `phases[2].title`: "Die ersten Schritte zur Orientierung" -> "Grid, Cells, Sidebar -- einmal anfassen reicht."
- `phases[2].lead`: "Um dich mit dem Grid vertraut zu machen, empfiehlt es sich..." -> "Drei Aktionen: Prompt abschicken, zweite Session oeffnen, Sidebar entdecken. Danach kennst du die Grundstruktur."

- [ ] **Step 3: Commit**

```bash
git add src/i18n/de/install.ts
git commit -m "i18n(de): extend install.ts with all page strings + tone fixes"
```

---

### Task 2: EN Install i18n erweitern + Companion-Mock fixen

**Files:**
- Modify: `src/i18n/en/install.ts`

- [ ] **Step 1: Lese aktuelle Datei**

Read `src/i18n/en/install.ts` und `src/pages/en/start.astro` komplett.

- [ ] **Step 2: Schreibe erweiterte i18n-Datei**

Ersetze `src/i18n/en/install.ts` — gleiche Struktur wie DE, englische Inhalte. Companion-Mock: Multiple-Choice-Buttons entfernen, durch Freitext-Inputs ersetzen (wie DE).

```ts
const install = {
  hero: {
    kicker: 'Get started',
    title: 'From Mac to Cockpit.',
    titleAccent: '~20 minutes.',
    titleSuffix: 'One-time.',
    body: 'You need macOS, an Anthropic account, and a few terminal commands. This guide walks you through it.',
  },
  phaseStrip: [
    { n: '01', label: 'Installation', time: '~10 min' },
    { n: '02', label: 'First Launch', time: '~5 min' },
    { n: '03', label: 'First Result', time: '~5\u201310 min' },
    { n: '04', label: 'Next Steps', time: 'whenever' },
  ] as const,
  dmg: {
    buttonLabel: '\u2193 cipher-mux-0.9.99.dmg',
    meta: 'macOS \u00b7 Apple Silicon \u00b7 142 MB \u00b7 SHA-256 verified',
  },
  requirements: {
    label: 'Requirements',
    body: 'macOS 12 Monterey or later (Apple Silicon or Intel) \u00b7 Anthropic account with Claude Max or API Key \u00b7 approx. 1 GB free space (App ~140 MB, Voice Models optional ~530 MB)',
  },
  phases: [
    {
      num: '01' as const,
      headerLabel: '01 \u00b7 Installation',
      headerTime: '~5 min \u00b7 one-time',
      title: 'Download DMG, run the wizard, log in.',
      lead: 'Three steps: install the app, run the setup wizard, log in to Claude Code. The wizard detects what\u2019s missing.',
    },
    {
      num: '02' as const,
      headerLabel: '02 \u00b7 First Launch',
      headerTime: '~5 min',
      title: 'The Companion gets to know you.',
      lead: 'On first launch, the Companion asks about your background. Three quick questions, then the system adapts to your level.',
    },
    {
      num: '03' as const,
      headerLabel: '03 \u00b7 First Result',
      headerTime: '~5\u201310 min',
      title: 'Grid, Cells, Sidebar \u2014 try once, get it.',
      lead: 'Three actions: send a prompt, open a second session, discover the sidebar. After that you know the basics.',
    },
  ] as const,
  stepA: {
    title: 'Install the App',
    desc: 'Standard DMG flow \u2014 download, open, drag to Applications.',
    items: [
      { strong: 'Download DMG', detail: 'GitHub Releases \u2192 cipher-mux-0.9.99-arm64.dmg', linkLabel: 'GitHub Releases' },
      { strong: 'Open DMG', detail: 'Double-click \u2192 drag cipher-mux.app to Applications' },
      { strong: 'Remove macOS quarantine', detail: 'One-time in Terminal:', code: 'xattr -cr /Applications/cipher-mux.app' },
      { strong: 'Launch', detail: 'Spotlight \u2192 cipher-mux \u2192 Enter' },
    ] as const,
    pitfall: {
      label: '\u26a0 Why xattr?',
      items: [
        'cipher-mux is open source but not yet signed with an Apple certificate. macOS blocks unsigned apps by default \u2014 standard security behavior.',
        'The xattr -cr command removes the quarantine flag. The app itself is not modified. One-time only.',
      ] as const,
    },
  },
  stepB: {
    title: 'Setup Wizard',
    desc: 'On first launch, the app detects what\u2019s missing on your system. You decide what gets installed \u2014 one click on \u201cStart Setup\u201d, the rest runs automatically.',
    disclosureLabel: 'What the Wizard installs',
    wizardItems: [
      { name: 'Homebrew', tag: 'Required \u00b7 ~200 MB', body: 'The standard macOS package manager. Skipped if already present. A Terminal window opens automatically \u2014 enter your macOS password there.' },
      { name: 'tmux', tag: 'Required \u00b7 ~2 MB', body: 'Terminal multiplexer \u2014 the invisible infrastructure cipher-mux is built on. Every Claude session runs in its own tmux session. Without tmux, no sessions can start.' },
      { name: 'Node.js', tag: 'Recommended \u00b7 ~30 MB', body: 'JavaScript runtime for Claude Code CLI and the TTS engine. Detected automatically if installed via NVM, Volta, or Homebrew.' },
      { name: 'Claude Code CLI', tag: 'Recommended \u00b7 ~50 MB', body: 'Anthropic\u2019s AI coding assistant \u2014 the core engine behind cipher-mux. Installed via npm. Requires a one-time claude login in Terminal afterwards.' },
      { name: 'Whisper Model', tag: 'Optional \u00b7 ~500 MB', body: 'Local speech-to-text. Voice control without cloud. Fully offline. Can be installed later at any time.' },
      { name: 'Piper TTS', tag: 'Optional \u00b7 ~30 MB', body: 'Local text-to-speech. Summaries, status updates, milestones \u2014 spoken, not just written.' },
    ] as const,
    pitfall: {
      label: '\u2139 Note',
      items: [
        'Voice is an upgrade, not a requirement. Without Whisper and Piper, cipher-mux works fully \u2014 chat, sessions, all entities, the entire workflow.',
        'The wizard shows you what\u2019s being installed in real time. After completion, the app starts automatically.',
        'If Homebrew and tmux are already installed, a \u201cSkip\u201d link appears \u2014 the wizard becomes optional.',
      ] as const,
    },
  },
  stepC: {
    title: 'Log in to Claude Code',
    desc: 'The Setup Wizard installs Claude Code CLI automatically. Then log in once in Terminal:',
    terminal: {
      cmd: 'claude login',
      out: '\u2192 Browser opens, log in, done.',
    },
    pitfall: {
      label: '\u26a0 Note',
      items: [
        'You need an Anthropic account with Claude Code access. Which plan includes it: anthropic.com',
      ] as const,
    },
  },
  companion: {
    mockHeader: 'companion \u00b7 cell 1/1',
    mockLines: [
      { type: 'name' as const, text: 'companion \u25b6' },
      { type: 'msg' as const, text: 'Hey! Type /startup \u2014 then we\u2019ll set everything up together.' },
      { type: 'cmd' as const, text: '> /startup' },
      { type: 'msg' as const, text: 'Got it. A few quick questions, then everything adapts.' },
      { type: 'qlabel' as const, text: 'How much coding experience do you have?' },
      { type: 'input' as const, text: 'Some \u2014 I can read and modify scripts_' },
      { type: 'qlabel' as const, text: 'Have you worked with AI coding tools?' },
      { type: 'input' as const, text: 'Yes, Claude Code for a few weeks_' },
      { type: 'qlabel' as const, text: 'What do you want to build first?' },
      { type: 'input' as const, text: 'Just exploring \u2014 maybe some notes tools_' },
      { type: 'confirm' as const, text: '\u2713 user-profile.json created' },
    ] as const,
    narrativeTitle: 'How it works',
    narrativeSteps: [
      { strong: 'App opens \u2192 empty grid', detail: 'A 1\u00d71 layout to start. The Companion takes the first cell.' },
      { strong: 'Type /startup', detail: 'The Companion asks about your background, AI experience, and goals. No multiple choice \u2014 just answer.' },
      { strong: 'Profile created', detail: 'Your answers are saved as user-profile.json. All entities now adapt their detail level to yours.' },
      { strong: 'Create a workspace', detail: 'Pick a name, assign your project folder \u2014 done. Every session in the workspace now knows what you\u2019re working on.' },
    ] as const,
  },
  actions: [
    {
      num: 'ACTION 01',
      title: 'Type something',
      body: 'Give Claude a simple task in the first cell. You\u2019ll see it work, output appears in the terminal.',
      terminal: 'Explain what\u2019s happening in this project',
      layout: '1x1' as const,
    },
    {
      num: 'ACTION 02',
      title: 'Second session',
      body: 'Add column, open new session. Two parallel Claude cells. The core feature.',
      terminalComment: '# Shortcut',
      terminal: '\u2318 + \u2192 adds column to the right',
      layout: '2x1' as const,
    },
    {
      num: 'ACTION 03',
      title: 'Discover sidebar',
      body: 'Open sidebar, notes tab, write first note. Memory lives here.',
      terminalComment: '# Shortcut',
      terminal: '\u2318 + B toggles sidebar',
      layout: 'sidebar' as const,
    },
  ] as const,
  outcome: {
    label: 'After these three actions you have',
    items: [
      '\u2713 Claude Code running',
      '\u2713 Two parallel sessions',
      '\u2713 Grid \u00b7 Cells \u00b7 Focus understood',
      '\u2713 Sidebar + Notes found',
    ] as const,
  },
  nextSteps: {
    title: 'The Companion suggests \u2014 you choose',
    lead: 'Depending on your skill level, the Companion has different next steps. No pressure \u2014 you can also just go for it.',
    cards: [
      { guide: 'Guide 02', tag: 'Beginner', title: 'Voice + Notes', body: 'Tomorrow I\u2019ll show you Voice Input and how to use Notes as a second brain.' },
      { guide: 'Guide 03', tag: 'Intermediate', title: 'Workshop', body: 'If you want, I\u2019ll show you the Workshop \u2014 how multiple sessions work together.' },
      { guide: 'Guide 03 + 05', tag: 'Power User', title: 'Cyber Factory + Presets', body: 'You know what you\u2019re doing. Parallel worker sessions and custom preset configuration if you want to go deeper.' },
    ] as const,
  },
  bottom: {
    title: 'Ready?',
    titleAccent: 'Download it.',
    subtitle: 'macOS 12+ \u00b7 Apple Silicon or Intel. Linux & Windows: coming.',
    dmgLabel: '\u2193 Download DMG',
    githubLabel: 'github / cipher-mux',
    docsLabel: 'docs',
  },
} as const;

export default install;
```

**Fix:** EN Companion-Mock von Multiple-Choice auf Freitext-Inputs umgestellt (gleiche Struktur wie DE).

- [ ] **Step 3: Commit**

```bash
git add src/i18n/en/install.ts
git commit -m "i18n(en): extend install.ts with all page strings, fix companion mock"
```

---

### Task 3: InstallPage shared Component erstellen

**Files:**
- Create: `src/components/pages/InstallPage.astro`

- [ ] **Step 1: Erstelle Verzeichnis**

```bash
ls src/components/pages/ 2>/dev/null || mkdir -p src/components/pages/
```

- [ ] **Step 2: Schreibe InstallPage.astro**

Nimm das komplette Markup + CSS aus `src/pages/de/start.astro` als Basis. Ersetze alle hardcoded Strings durch `{content.xxx}` Referenzen. Die Component empfaengt Props:

```astro
---
import Layout from '../../layouts/Layout.astro';
import type { Lang } from '../../i18n/ui';

interface Props {
  lang: Lang;
  content: typeof import('../../i18n/de/install').default;
}

const { lang, content } = Astro.props;
const ghRelease = 'https://github.com/cmarkus42-rgb/cipher-mux-electron/releases/latest';
const ghRepo = 'https://github.com/cmarkus42-rgb/cipher-mux-electron';
---
```

**Schluessel-Ersetzungen im Markup (Auszug der Muster):**

| Hardcoded | Wird zu |
|-----------|---------|
| `<div class="install-kicker">Get started</div>` | `<div class="install-kicker">{content.hero.kicker}</div>` |
| `<h1>Vom Mac zum Cockpit.<br/>...` | `<h1>{content.hero.title}<br/><span class="accent">{content.hero.titleAccent}</span> {content.hero.titleSuffix}</h1>` |
| Phase-Strip Array (hardcoded) | `{content.phaseStrip.map(p => ...)}` |
| DMG Button Label | `{content.dmg.buttonLabel}` |
| Requirements Box | `{content.requirements.label}`, `{content.requirements.body}` |
| Phase Header Labels | `{content.phases[0].headerLabel}`, `{content.phases[0].headerTime}` |
| Step A/B/C Titel, Desc | `{content.stepA.title}`, `{content.stepA.desc}` |
| Step A Items | `{content.stepA.items.map(item => ...)}` |
| Pitfall Labels + Items | `{content.stepA.pitfall.label}`, `{content.stepA.pitfall.items.map(...)}` |
| Wizard Items | `{content.stepB.wizardItems.map(w => ...)}` |
| Terminal cmd/out | `{content.stepC.terminal.cmd}`, `{content.stepC.terminal.out}` |
| Companion Mock Lines | `{content.companion.mockLines.map(line => { switch(line.type) { case 'name': ... } })}` |
| Narrative Steps | `{content.companion.narrativeSteps.map(s => ...)}` |
| Action Cards | `{content.actions.map(a => ...)}` |
| Outcome Items | `{content.outcome.items.map(i => ...)}` |
| Next Step Cards | `{content.nextSteps.cards.map(c => ...)}` |
| Bottom CTA | `{content.bottom.title}`, `{content.bottom.titleAccent}`, etc. |
| Links mit `/de/` | Dynamisch: `/{lang}/docs` |

**Companion Mock Rendering** — zentral, da DE-spezifischer Sonderfall behoben:

```astro
{content.companion.mockLines.map((line) => {
  if (line.type === 'name') return <div class="companion-name">{line.text}</div>;
  if (line.type === 'msg') return <div class="companion-msg">{line.text}</div>;
  if (line.type === 'cmd') return <div class="companion-q">{line.text}</div>;
  if (line.type === 'qlabel') return <div class="companion-qlabel">{line.text}</div>;
  if (line.type === 'input') return <div class="companion-input">{line.text}</div>;
  if (line.type === 'confirm') return <div class="companion-confirm">{line.text}</div>;
  return null;
})}
```

**Action Card Layout** — conditional grid based on `layout` field:

```astro
{action.layout === '1x1' && (
  <div class="action-mini-grid"><div class="action-mini-cell action-mini-cell--active">CC &#9656;</div></div>
)}
{action.layout === '2x1' && (
  <div class="action-mini-grid" style="grid-template-columns:1fr 1fr">
    <div class="action-mini-cell action-mini-cell--active">CC &#9656;</div>
    <div class="action-mini-cell action-mini-cell--active">CC &#9656;</div>
  </div>
)}
{action.layout === 'sidebar' && (
  <div class="action-sidebar-mock">
    <div class="action-sidebar-left">NOTES</div>
    <div class="action-sidebar-right">CC &#9656;</div>
  </div>
)}
```

CSS: Komplett aus `de/start.astro` uebernehmen (identisch in beiden Templates).

- [ ] **Step 3: Build pruefen**

```bash
cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit**

```bash
git add src/components/pages/InstallPage.astro
git commit -m "feat: create shared InstallPage component"
```

---

### Task 4: Install-Wrapper umstellen

**Files:**
- Modify: `src/pages/de/start.astro`
- Modify: `src/pages/en/start.astro`

- [ ] **Step 1: DE-Wrapper schreiben**

Ersetze den gesamten Inhalt von `src/pages/de/start.astro`:

```astro
---
import InstallPage from '../../components/pages/InstallPage.astro';
import content from '../../i18n/de/install';
---
<InstallPage lang="de" content={content} />
```

- [ ] **Step 2: EN-Wrapper schreiben**

Ersetze den gesamten Inhalt von `src/pages/en/start.astro`:

```astro
---
import InstallPage from '../../components/pages/InstallPage.astro';
import content from '../../i18n/en/install';
---
<InstallPage lang="en" content={content} />
```

- [ ] **Step 3: Build pruefen**

```bash
cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Visueller Check**

```bash
cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npx astro dev &
# Pruefen: http://localhost:4321/de/start und http://localhost:4321/en/start
```

- [ ] **Step 5: Commit**

```bash
git add src/pages/de/start.astro src/pages/en/start.astro
git commit -m "refactor: convert install page wrappers to use shared component"
```

---

## Phase 2: Features-Seite

### Task 5: DE Features i18n erweitern + Ton fixen

**Files:**
- Modify: `src/i18n/de/features.ts`

- [ ] **Step 1: Lese aktuelle Datei und Template**

Read `src/i18n/de/features.ts` und alle hardcoded Strings aus `src/pages/de/features.astro`.

- [ ] **Step 2: Erweitere i18n-Datei**

Neue Keys pro Sektion hinzufuegen. Bestehende Leads werden ton-bereinigt. Die vollstaendige Datei enthalt:

**Neue Schluessel (zusaetzlich zu bestehenden):**

```ts
// In sections[0] (01 Cockpit) — statusbar strings
sections[0].statusbarTheme = 'cipher-ivory';
sections[0].statusbarVersion = 'v0.9.99';

// In sections[1] (02 Grid) — layout labels
sections[1].layoutTag = '// typische Grid-Konfigurationen';
sections[1].layouts = [
  { label: 'Solo', dim: '1\u00d71' },
  { label: 'Dual', dim: '2\u00d71' },
  { label: 'Triage', dim: '3\u00d72' },
  { label: 'Maker', dim: '4\u00d72' },
];

// In sections[2] (03 Sessions) — anatomy + recovery
sections[2].anatomyTag = '// session anatomy';
sections[2].anatomyItems = [
  'Eigener Claude-Code-Prozess pro Zelle',
  'Eigener Kontext, eigene CLAUDE.md, eigene History',
  'Header-Controls: Expand, Projekt wechseln, Shell, Close',
  'Klick auf Header = Fokus, visuelle Hervorhebung',
  { text: 'direkt ins tmux-Terminal der Session', bold: '$-Button:' },
  { text: 'Session aus dem Grid in eigenes Fenster', bold: 'Eject:' },
];
sections[2].recoveryTag = '// recovery';
sections[2].recoveryLabel = '// nach app-restart';
sections[2].recoveryLine = '\u25cf 3 sessions found in tmux';
sections[2].recoverySessions = [
  { name: 'workshop', time: '2h 14m' },
  { name: 'companion', time: '2h 14m' },
  { name: 'cyber-factory', time: '0h 47m' },
];
sections[2].recoveryButtons = { resume: 'RESUME', close: 'CLOSE ALL' };

// sections[3] (04 Presets) — entity gallery tag
sections[3].entityTag = '// so stellen sich die entities vor';

// sections[5] (06 Prompts) — resolution hierarchy
sections[5].resolutionTag = '// persona-resolution beim session-start';
sections[5].resolutionSteps = [
  { strong: 'Globale Aktiv-Persona', dim: 'wenn gesetzt: gilt fuer alle Sessions' },
  { strong: 'Preset-Override', dim: 'Auswahl im Preset-Editor' },
  { strong: 'Default-Matrix', dim: 'Empfehlung aus dem Pack' },
  { fallback: 'Hardcoded Fallback: Relay' },
];
sections[5].layersTag = '// system-prompt \u00b7 3 ebenen pro session';
sections[5].layers = [
  { name: 'Preset', desc: 'Rolle, Phasen, Tools, Grenzen', color: 'cyberfactory' },
  { name: 'Persona', desc: 'Tonalitaet, Stilistik (Hut)', color: 'cipher' },
  { name: 'Workspace', desc: 'Projekt-Pfade, Memory, Custom-Prompt-Teile', color: 'accent' },
];

// sections[6] (07 Voice) — 4 boxes + TTS strip
sections[6].voiceBoxes = [
  { title: '\u25cf whisper.cpp', sub: 'lokal \u00b7 keine cloud', items: ['VAD: erkennt pausen', 'review-then-submit', 'transkript zuerst sichtbar'] },
  { title: '\u25cf voice cmds', sub: 'sprache \u2192 aktion', items: ['"abschicken" / "senden"', '"hoch" / "runter"', '"zum marker"'] },
  { title: '\u25cf grid nav', sub: 'fokus per stimme', items: ['"grid links/rechts"', '"grid hoch/runter"', 'fuzzy: "grit", "zelle"'] },
  { title: '\u25cf BT shutter', sub: 'physischer submit', items: ['STT-Pin auf session', 'BT-klick \u2192 send', 'komplett haendefrei'] },
];
sections[6].tts = {
  title: 'TTS',
  body: 'Jede Entity-Session kann Text vorlesen lassen. Piper im Voice-Modus, macOS say als Fallback.',
  modes: ['NORMAL', 'INTERRUPT'],
};

// sections[7] (08 Notes) — editor + memory
sections[7].editorTag = '// notes editor';
sections[7].editorTitle = 'CodeMirror 6 \u00b7 Markdown live';
sections[7].editorItems = [
  'YAML-Frontmatter (Titel, Tags)',
  'Auto-Save nach 2s \u00b7 Cmd+S triggert Auto-Tagging',
  'Ollama gemma3:4b (lokal) fuer Tag-Vorschlaege',
  'Global oder Workspace-scoped',
  'Tag-Tree in der Sidebar (NotesTreeView)',
  'TestcaseView mit Checkboxen + Screenshots',
  'Voller MCP-Zugriff: lesen, schreiben, suchen, handoff',
];
sections[7].memoryTag = '// companion memory';
sections[7].memoryTitle = 'SQLite \u00b7 FTS5 \u00b7 persistent';
sections[7].memoryDesc = 'Companion, Refinement, Voice merken sich Fakten, Praeferenzen, Interaktionen, Ereignisse \u2014 ueber Sessions hinweg.';
sections[7].memoryCategories = ['Fakten', 'Praeferenzen', 'Interaktionen', 'Ereignisse'];
sections[7].memoryFooter = 'Salienz-Bewertung 0\u20131 \u00b7 transparent \u00b7 vom User loeschbar';
sections[7].memoryTools = 'write \u00b7 recall \u00b7 search \u00b7 forget';

// sections[8] (09 MCP) — grid + footer
sections[8].mcpGrid = [
  { name: 'Session Mgmt', count: '08', ex: 'create \u00b7 kill \u00b7 focus \u00b7 eject \u00b7 scroll' },
  { name: 'Message Bus', count: '02', ex: 'send \u00b7 read' },
  { name: 'Context Monitor', count: '01', ex: 'context_status' },
  { name: 'Task Queue', count: '04', ex: 'create \u00b7 update \u00b7 list \u00b7 get' },
  { name: 'Bug Reports', count: '01', ex: 'resolve' },
  { name: 'Input Requests', count: '01', ex: 'create' },
  { name: 'Notes', count: '10', ex: 'CRUD \u00b7 search \u00b7 handoff_* \u00b7 open \u00b7 list' },
  { name: 'Companion Memory', count: '04', ex: 'write \u00b7 recall \u00b7 search \u00b7 forget' },
  { name: 'App Control', count: '12', ex: 'grid \u00b7 sidebar \u00b7 theme \u00b7 choreography \u00b7 highlight' },
  { name: 'Voice / TTS', count: '02', ex: 'tts_speak \u00b7 entity voice' },
];
sections[8].mcpFooter = [
  'Bearer-Token wird pro Entity automatisch injiziert',
  'Streamable HTTP \u2014 Standard MCP-Spec',
  'github.com/.../mcp \u2197',
];

// sections[10] (11 Efficiency) — 6 items
sections[10].efficiencyItems = [
  { k: 'StatusLine Monitor', d: 'Echtzeit-Kontextverbrauch pro Zelle. Gruen \u2192 orange (80%) \u2192 rot (90%).' },
  { k: 'Orchestrator-Watch', d: 'Prueft Workers alle 2 Minuten. Bei 90%: finish, summarize, frischer Worker.' },
  { k: 'Message Bus', d: 'Async Messaging zwischen Sessions. Wenige Dutzend Tokens statt Tausende fuer shared Conversation.' },
  { k: 'Multi-Model-Routing', d: 'Workshop (Opus), Workers (Sonnet), einfache Tasks (Haiku). Richtiges Modell fuer richtige Aufgabe.' },
  { k: 'Handover-Pattern', d: 'Zusammenfassung \u2192 neue Session \u2192 weitermachen. Kein Qualitaetsverlust durch volle Kontexte.' },
  { k: 'Doom-Loop-Prevention', d: 'Nach 2 gescheiterten Fixes: neue Session. Confirmation-Trap-Vermeidung in CLAUDE.md.' },
];
```

**Ton-Fixes in bestehenden Leads:**
- sections[1].lead: "Es empfiehlt sich, Sessions einfach per Drag & Drop so anzuordnen" -> "Ordne Sessions per Drag & Drop an, wie es fuer deinen Workflow passt."
- sections[6].lead: "Wenn du lieber sprichst als tippst, bietet die lokale Whisper.cpp-Integration eine gute Alternative" -> "Lieber sprechen als tippen? Whisper.cpp laeuft lokal, komplett ohne Cloud."
- sections[7].lead: "Fuer Notizen und Spezifikationen steht dir ein integrierter Editor ... zur Verfuegung" -> "Notizen und Specs landen im eingebauten Editor — CodeMirror 6, Markdown, Auto-Save."
- sections[8].lead: "Diese ermoeglichen den Agenten unter anderem das Session-Management" -> "Agenten steuern darueber Sessions, kommunizieren ueber einen Message Bus und greifen auf Notes und Memory zu."
- hero.title: "Ein Blick unter die Haube." -> "Was drin steckt."

- [ ] **Step 3: Commit**

```bash
git add src/i18n/de/features.ts
git commit -m "i18n(de): extend features.ts with all section strings + tone fixes"
```

---

### Task 6: EN Features i18n erweitern

**Files:**
- Modify: `src/i18n/en/features.ts`

- [ ] **Step 1: Erweitere analog zu DE**

Gleiche Struktur wie Task 5, englische Inhalte. Ton-Fixes analog.

**Ton-Fixes:**
- sections[1].lead: "We recommend organizing your sessions..." -> "Organize sessions via drag & drop to suit your workflow."
- sections[6].lead: "If you prefer speaking over typing, the local Whisper.cpp integration offers a great alternative" -> "Prefer speaking over typing? Whisper.cpp runs locally, no cloud involved."
- sections[7].lead: "An integrated editor (CodeMirror 6) with Markdown support is available for notes..." -> "Notes and specs go into the built-in editor — CodeMirror 6, Markdown, auto-save."
- sections[8].lead: "These enable agents to handle session management or communicate directly..." -> "Agents use them to manage sessions, communicate via message bus, and access notes and memory."
- hero.title: "A look under the hood." -> "What\u2019s inside."

- [ ] **Step 2: Commit**

```bash
git add src/i18n/en/features.ts
git commit -m "i18n(en): extend features.ts with all section strings"
```

---

### Task 7: FeaturesPage shared Component erstellen

**Files:**
- Create: `src/components/pages/FeaturesPage.astro`

- [ ] **Step 1: Erstelle Component**

Markup + CSS aus `src/pages/de/features.astro`. Alle hardcoded Strings durch `{content.xxx}` ersetzen. Props:

```astro
---
import Layout from '../../layouts/Layout.astro';
import { t } from '../../i18n/ui';
import type { Lang } from '../../i18n/ui';

interface Props {
  lang: Lang;
  content: typeof import('../../i18n/de/features').default;
}

const { lang, content } = Astro.props;
```

Schluessel-Pattern wie bei InstallPage. Section-spezifische Blöcke (Voice, Notes, MCP, etc.) rendern aus den neuen content-Keys.

Script-Block am Ende bleibt identisch (Theme Easter Egg, Preset Cards, Anchor Nav).

- [ ] **Step 2: Build pruefen**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/pages/FeaturesPage.astro
git commit -m "feat: create shared FeaturesPage component"
```

---

### Task 8: Features-Wrapper umstellen

**Files:**
- Modify: `src/pages/de/features.astro`
- Modify: `src/pages/en/features.astro`

- [ ] **Step 1: DE-Wrapper**

```astro
---
import FeaturesPage from '../../components/pages/FeaturesPage.astro';
import content from '../../i18n/de/features';
---
<FeaturesPage lang="de" content={content} />
```

- [ ] **Step 2: EN-Wrapper**

```astro
---
import FeaturesPage from '../../components/pages/FeaturesPage.astro';
import content from '../../i18n/en/features';
---
<FeaturesPage lang="en" content={content} />
```

- [ ] **Step 3: Build + visueller Check**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/de/features.astro src/pages/en/features.astro
git commit -m "refactor: convert features page wrappers to use shared component"
```

---

## Phase 3: Landing-Seite

### Task 9: DE Landing i18n erweitern

**Files:**
- Modify: `src/i18n/de/landing.ts`

- [ ] **Step 1: Neue Keys hinzufuegen**

```ts
// Neue Keys (bestehende bleiben):
pillarsKicker: 'VIER PFEILER \u00b7 EIN MANIFEST',
pillarsNumLabel: '// pfeiler',
builtKicker: 'Selbstreferenz',
builtWaveHeader: '// wachstum der test-suite ueber 8 wellen',
notKicker: 'Systemabgrenzung',
bottomCta: {
  kicker: '// Bereit?',
  title: 'Lies das Handbuch.',
  titleDim: 'Oder lad\u2019s runter.',
  buttons: [
    { label: 'Dokumentation', href: '/de/docs/', primary: true },
    { label: 'Features', href: '/de/features' },
    { label: 'GitHub \u2197', href: 'https://github.com/cmarkus42/cipher-mux-electron', external: true },
  ],
},
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/de/landing.ts
git commit -m "i18n(de): extend landing.ts with remaining hardcoded strings"
```

---

### Task 10: EN Landing i18n erweitern

**Files:**
- Modify: `src/i18n/en/landing.ts`

- [ ] **Step 1: Gleiche Keys, englische Inhalte**

```ts
pillarsKicker: 'FOUR PILLARS \u00b7 ONE MANIFEST',
pillarsNumLabel: '// pillar',
builtKicker: 'Self-Reference',
builtWaveHeader: '// test-suite growth across 8 waves',
notKicker: 'System Boundaries',
bottomCta: {
  kicker: '// Ready?',
  title: 'Read the handbook.',
  titleDim: 'Or download it.',
  buttons: [
    { label: 'Documentation', href: '/en/docs/', primary: true },
    { label: 'Features', href: '/en/features' },
    { label: 'GitHub \u2197', href: 'https://github.com/cmarkus42/cipher-mux-electron', external: true },
  ],
},
```

- [ ] **Step 2: Commit**

```bash
git add src/i18n/en/landing.ts
git commit -m "i18n(en): extend landing.ts with remaining hardcoded strings"
```

---

### Task 11: LandingPage shared Component erstellen

**Files:**
- Create: `src/components/pages/LandingPage.astro`

- [ ] **Step 1: Erstelle Component**

Markup + CSS aus `src/pages/de/index.astro`. Props: `{lang, content}`. Schema.org-Block bleibt im Component (sprachunabhaengig).

Schluessel-Ersetzungen:
- Kicker-Texte: `{content.pillarsKicker}`, `{content.builtKicker}`, `{content.notKicker}`
- Pillar num label: `{content.pillarsNumLabel}`
- Wave chart header: `{content.builtWaveHeader}`
- Bottom CTA komplett: `{content.bottomCta.kicker}`, `.title`, `.titleDim`, `.buttons.map(...)`

- [ ] **Step 2: Build pruefen**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 3: Commit**

```bash
git add src/components/pages/LandingPage.astro
git commit -m "feat: create shared LandingPage component"
```

---

### Task 12: Landing-Wrapper umstellen

**Files:**
- Modify: `src/pages/de/index.astro`
- Modify: `src/pages/en/index.astro`

- [ ] **Step 1: DE-Wrapper**

```astro
---
import LandingPage from '../../components/pages/LandingPage.astro';
import content from '../../i18n/de/landing';
---
<LandingPage lang="de" content={content} />
```

- [ ] **Step 2: EN-Wrapper**

```astro
---
import LandingPage from '../../components/pages/LandingPage.astro';
import content from '../../i18n/en/landing';
---
<LandingPage lang="en" content={content} />
```

- [ ] **Step 3: Build + visueller Check**

```bash
npm run build 2>&1 | tail -5
```

- [ ] **Step 4: Commit**

```bash
git add src/pages/de/index.astro src/pages/en/index.astro
git commit -m "refactor: convert landing page wrappers to use shared component"
```

---

## Phase 4: Aufraeum-Commit

### Task 13: Finaler Build + Cleanup

- [ ] **Step 1: Voller Build**

```bash
cd /Users/Shared/Nextcloud/Claude/WebsiteDesigner/projects/cipher-mux-site && npm run build
```

- [ ] **Step 2: Pruefen dass keine hardcoded deutschen/englischen Strings in Components uebrig sind**

Grep nach verdaechtigen Patterns in den neuen Component-Dateien:

```bash
rg '(empfiehlt sich|zur Verfuegung|begleiten dich|unter anderem)' src/components/pages/
```

- [ ] **Step 3: Pruefen dass die alten phases[].steps (unused in install.ts) entfernt wurden**

Die alten `steps` Arrays in `install.ts` (DE+EN) waren schon im Original nicht im Template verwendet. Sicherstellen, dass sie in der neuen Version nicht mehr vorhanden sind.

- [ ] **Step 4: Abschluss-Commit falls noetig**

```bash
git add -A && git status
# Falls Aenderungen: commit mit "chore: final cleanup after i18n migration"
```
