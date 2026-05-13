const install = {
  hero: {
    kicker: 'Get started',
    title: 'DMG laden, Wizard starten,',
    titleAccent: 'losprompten.',
    titleSuffix: '',
    body: 'Du brauchst macOS, einen Anthropic-Account und ein paar Terminal-Befehle. Diese Anleitung f\u00fchrt dich durch.',
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
      title: 'Setup. Schritt f\u00fcr Schritt.',
      lead: 'App installieren, Setup-Wizard ausf\u00fchren, Claude Code einloggen. Der Wizard erkennt, was fehlt.',
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
      lead: 'Drei Aktionen: Prompt abschicken, zweite Session \u00f6ffnen, Sidebar entdecken. Danach kennst du die Grundstruktur.',
    },
  ] as const,
  stepA: {
    title: 'App installieren',
    desc: 'Standard-DMG-Flow \u2014 herunterladen, \u00f6ffnen, in Applications ziehen.',
    items: [
      { strong: 'DMG herunterladen', detail: '', linkLabel: 'GitHub Releases', code: 'cipher-mux-0.9.99-arm64.dmg' },
      { strong: 'DMG \u00f6ffnen', detail: 'Doppelklick \u2192 cipher-mux.app in Applications ziehen' },
      { strong: 'macOS-Sperre aufheben', detail: 'Einmalig im Terminal:', code: 'xattr -cr /Applications/cipher-mux.app' },
      { strong: 'Starten', detail: 'Spotlight \u2192 cipher-mux \u2192 Enter' },
    ] as const,
    pitfall: {
      label: '\u26a0 Warum xattr?',
      items: [
        'cipher-mux ist Open Source, aber noch nicht mit einem Apple-Zertifikat signiert. macOS blockiert deshalb den ersten Start \u2014 das ist normales Sicherheitsverhalten.',
        'Der xattr -cr Befehl entfernt die Quarant\u00e4ne-Markierung. Die App wird dabei nicht ver\u00e4ndert. Einmalig.',
      ] as const,
    },
  },
  stepB: {
    title: 'Setup-Wizard',
    desc: 'Beim ersten Start erkennt die App automatisch, was auf deinem System fehlt. Du entscheidest, was installiert wird \u2014 ein Klick auf \u201eSetup starten\u201c, der Rest l\u00e4uft automatisch.',
    disclosureLabel: 'Was der Wizard einrichtet',
    wizardItems: [
      { name: 'Homebrew', tag: 'Pflicht \u00b7 ~200 MB', body: 'Der Standard-Paketmanager f\u00fcr macOS. Falls schon vorhanden, wird der Schritt \u00fcbersprungen. Ein Terminal-Fenster \u00f6ffnet sich automatisch \u2014 dort dein macOS-Passwort eingeben.' },
      { name: 'tmux', tag: 'Pflicht \u00b7 ~2 MB', body: 'Terminal-Multiplexer \u2014 die unsichtbare Infrastruktur, auf der cipher-mux aufbaut. Jede Claude-Session l\u00e4uft in einer eigenen tmux-Session. Ohne tmux startet keine einzige Session.' },
      { name: 'Node.js', tag: 'Empfohlen \u00b7 ~30 MB', body: 'JavaScript-Runtime f\u00fcr Claude Code CLI und die TTS-Engine. Falls \u00fcber NVM, Volta oder Homebrew schon da, wird es erkannt.' },
      { name: 'Claude Code CLI', tag: 'Empfohlen \u00b7 ~50 MB', body: 'Anthropics KI-Coding-Assistant \u2014 die Kernfunktion von cipher-mux. Wird via npm installiert. Danach einmalig claude login im Terminal.' },
      { name: 'Whisper Model', tag: 'Optional \u00b7 ~500 MB', body: 'Lokales Speech-to-Text. Sprache steuern, ohne Cloud. Komplett offline. Kann jederzeit sp\u00e4ter nachinstalliert werden.' },
      { name: 'Piper TTS', tag: 'Optional \u00b7 ~30 MB', body: 'Lokale Sprachausgabe f\u00fcr deutsch. Zusammenfassungen, Status-Updates, Meilensteine \u2014 gesprochen statt nur geschrieben.' },
    ] as const,
    pitfall: {
      label: '\u2139 Hinweis',
      items: [
        'Voice ist ein Upgrade, kein Muss. Ohne Whisper und Piper funktioniert cipher-mux vollst\u00e4ndig \u2014 Chat, Sessions, alle Entities, der gesamte Workflow.',
        'Der Wizard zeigt dir live, was gerade installiert wird. Nach Abschluss startet die App automatisch.',
        'Wenn Homebrew und tmux bereits installiert sind, erscheint ein \u201e\u00dcberspringen\u201c-Link \u2014 der Wizard ist dann optional.',
      ] as const,
    },
  },
  stepC: {
    title: 'Claude Code einloggen',
    desc: 'Der Setup-Wizard installiert Claude Code CLI automatisch. Danach einmalig im Terminal einloggen:',
    terminal: {
      cmd: 'claude login',
      out: '\u2192 Browser \u00f6ffnet sich, einloggen, fertig.',
    },
    pitfall: {
      label: '\u26a0 Hinweis',
      items: [
        'Du brauchst einen Anthropic-Account mit Claude Code Zugang. Welches Abo das einschlie\u00dft: anthropic.com',
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
    narrativeTitle: 'So l\u00e4uft\u0027s ab',
    narrativeSteps: [
      { strong: 'App \u00f6ffnet \u2192 leeres Grid', detail: 'Ein 1\u00d71 Layout zur Begr\u00fc\u00dfung. Der Companion belegt die erste Zelle.' },
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
      terminal: 'Erkl\u00e4r mir was in diesem Projekt passiert',
      screenshotLight: '/images/screenshots/cipher-ivory-1x1.webp',
      screenshotDark: '/images/screenshots/cipher-dark-1x1.webp',
      screenshotAlt: 'CIPHER-MUX \u2014 1\u00d71 Grid, erste Session',
    },
    {
      num: 'AKTION 02',
      title: 'Zweite Session',
      body: 'Spalte hinzuf\u00fcgen, neue Session \u00f6ffnen. Zwei parallele Claude-Cells. Das Kernfeature.',
      terminal: '\u2318 + \u2192 f\u00fcgt Spalte rechts hinzu',
      terminalComment: '# Shortcut',
      screenshotLight: '/images/screenshots/cipher-ivory-2x1.webp',
      screenshotDark: '/images/screenshots/cipher-dark-2x1.webp',
      screenshotAlt: 'CIPHER-MUX \u2014 2\u00d71 Grid, zwei Sessions',
    },
    {
      num: 'AKTION 03',
      title: 'Sidebar entdecken',
      body: 'Sidebar \u00f6ffnen, Notes-Tab \u00f6ffnen, erste Notiz schreiben. Memory ist hier zuhause.',
      terminal: '\u2318 + B schaltet Sidebar um',
      terminalComment: '# Shortcut',
      screenshotLight: '/images/screenshots/sidebar-notes-light.png',
      screenshotDark: '/images/screenshots/sidebar-notes-dark.png',
      screenshotAlt: 'CIPHER-MUX \u2014 Sidebar mit Notes',
    },
  ] as const,
  outcome: {
    label: 'Nach diesen drei Aktionen hast du',
    items: [
      '\u2713 Claude Code l\u00e4uft',
      '\u2713 Zwei parallele Sessions',
      '\u2713 Grid \u00b7 Cells \u00b7 Focus verstanden',
      '\u2713 Sidebar + Notes gefunden',
    ] as const,
  },
  nextSteps: {
    headerLabel: '04 \u00b7 Weiter',
    headerTime: 'wann du willst',
    title: 'Weiter geht\u2019s wie du willst.',
    titleDim: 'Der Companion begleitet dich.',
    lead: 'Drei Guides zum gezielten Vertiefen \u2014 vom Erstkontakt bis zu LLM-Grundlagen.',
    cards: [
      { guide: 'Guide 01', tag: 'Erstkontakt', title: 'First Steps', body: 'Was ist cipher-mux, wie startest du, erste Session. Der Einstieg.' },
      { guide: 'Guide 02', tag: 'T\u00e4glicher Umgang', title: 'Daily Workflow', body: 'Sessions anlegen, Tasks verteilen, Notes nutzen, Grid konfigurieren.' },
      { guide: 'Guide 04', tag: 'LLM-Grundlagen', title: 'Prompting Fundamentals', body: 'Kontext verstehen, Prompts schreiben, typische Fehler vermeiden.' },
    ] as const,
  },
  bottom: {
    title: 'Bereit?',
    titleAccent: 'Lad\u0027s runter.',
    subtitle: 'macOS 12+ \u00b7 Apple Silicon oder Intel. Linux & Windows: kommt.',
    dmgLabel: '\u2193 DMG herunterladen',
    githubLabel: 'github / cipher-mux \u2197',
    docsLabel: 'docs \u2197',
  },
} as const;

export default install;
