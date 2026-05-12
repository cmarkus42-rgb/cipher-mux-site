const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering',
    taglineSub: 'for Makers.',
    taglineEnd: 'And everyone else.',
    subtext:
      'Orchestriert {Claude Code} zu einem echten Entwicklungsprozess — mit Rollen, Gedächtnis und Stimme.',
    buttons: [
      { label: 'Dokumentation', href: '/de/docs/', primary: true },
      { label: 'Features', href: '/de/features' },
      { label: 'GitHub \u2197', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Coding mit KI, aber richtig',
      description:
        'Du hast eine Idee? Dann bau sie. cipher-mux strukturiert den Weg von der Idee zum Code — mit spezialisierten Agenten, die Qualität und Sicherheit einbauen, die man mit einer einzelnen Chat-Session nicht erreicht.',
      detail:
        'Das Problem: Eine einzelne Claude-Session, die gleichzeitig plant, codet und testet, verliert Fokus. Der Kontext füllt sich, frühere Anweisungen werden komprimiert, die Qualität sinkt. cipher-mux trennt diese Phasen in eigene Sessions — Ideation, Refinement, Cyber Factory, Testing, Debugger, Audit — jede mit eigenem Kontext und eigenen Anweisungen. Saubere Übergaben zwischen den Phasen statt Kontextvermischung.',
    },
    {
      title: 'Gebaut für alle',
      description:
        'Kein Informatikstudium nötig. Der Companion zeigt dir alles — per Chat, per Voice, per UI-Highlighting. Wer eine Idee beschreiben kann, kann hier bauen.',
      detail:
        'Der Companion ist dein Einstiegspunkt: er erklärt Konzepte, hilft bei Entscheidungen und führt auf Wunsch Aktionen aus. Er merkt sich dein Skill-Level und passt Erklärungen an. Per Voice-Modus sprichst du direkt mit ihm — ohne zu tippen. Und wenn du doch tippen willst, kennt er jedes Kapitel der Dokumentation und beantwortet Fragen schneller als du scrollst.',
    },
    {
      title: 'Transparent statt magisch',
      description:
        'Du siehst, was die Agenten tun. Prompts, Kontext, Entscheidungen — alles liegt offen. So lernst du nebenbei, wie KI-gestütztes Entwickeln funktioniert.',
      detail:
        'Jede Entity-Session läuft sichtbar in einer Grid-Zelle. Du siehst den Output in Echtzeit, kannst in jede Session eingreifen, und die CLAUDE.md-Schichten (Global Rules → Preset → Persona → Workspace → Cell) liegen alle offen im Dateisystem. Keine Black Box. Wenn du verstehen willst, warum eine Session so antwortet wie sie antwortet, liest du ihre Anweisungen — das sind Textdateien.',
    },
    {
      title: 'Zugänglich gestaltet',
      description:
        'WCAG-AAA-Themes, lokale Spracherkennung, Bluetooth-Fernbedienung. Technik passt sich an — nicht umgekehrt.',
      detail:
        '13 Themes, davon vier speziell für Farbenblindheit (Deuteranopie, Tritanopie, Achromatopsie) und ein High-Contrast-Theme nach WCAG AAA. Sprachsteuerung komplett lokal über Whisper — kein Netzwerk, keine Cloud. Bluetooth-Fernbedienung für freihändiges Arbeiten. Und ein Theme-Editor, mit dem du jede Farbe anpassen kannst.',
    },
  ],
  notSection: {
    title: 'Systemabgrenzung',
    lead: 'Zur transparenten Einordnung – was CIPHER-MUX nicht ist:',
    items: [
      'Kein kommerzielles Produkt, sondern ein generiertes Open-Source-Projekt, das aus dem eigenen Bedarf heraus entstanden ist.',
      'Kein Ersatz für die Claude Code CLI, sondern eine grafische Orchestrierungsschicht, die darauf aufsetzt.',
      'Kein Werkzeug, das vage Ideen magisch umsetzt. Die Fähigkeit, technische Spezifikationen präzise zu formulieren, bleibt wichtig.',
      'Aktuell auf macOS beschränkt, da die Architektur stark mit dem Terminal-Multiplexer tmux verzahnt ist.',
      'Setzt Claude Code voraus — welches Abo das einschließt, kann sich ändern. Aktuelle Infos: anthropic.com',
    ],
  },
  builtWithItself: {
    title: 'Built with Itself',
    lead: 'cipher-mux wurde mit cipher-mux gebaut. Kein Testcase wurde von Hand geschrieben — jeder einzelne stammt von Claude Code. Erst in Einzel-Sessions, ab Welle 5 durch die verdrahtete Testing-Entity als Teil der Pipeline.',
    stats: [
      { value: '1.509', label: 'Testcases' },
      { value: '100 %', label: 'Pass Rate' },
      { value: '~32', label: 'LOC pro Test' },
      { value: '~90s', label: 'Runtime' },
    ],
    waves: [
      { label: 'Welle 0', tests: 400, note: 'Baseline' },
      { label: 'Welle 1–2', tests: 520, note: 'Hub, MCP, Grid' },
      { label: 'Welle 3–4', tests: 700, note: 'Debugger, Factory' },
      { label: 'Welle 5', tests: 841, note: 'Entity-Pipeline aktiv' },
      { label: 'Welle 6', tests: 1050, note: 'Handoff, Voice' },
      { label: 'Welle 7', tests: 1207, note: 'Audit, Pre-Release' },
      { label: 'Welle 8', tests: 1509, note: 'Audit-Fixes, Detach, Tags, Test-Cleanup' },
    ],
    detail: 'Ab Welle 5 war die Testing-Entity im Prozess verdrahtet: sie schreibt Tests, reicht Findings an den Debugger weiter, und der Zyklus läuft ohne manuellen Anstoß. 668 der 1.509 Tests entstanden in den letzten drei Wellen — durch den Prozess selbst. 0 High-Severity Findings im finalen Audit.',
    closer: 'Die Aufgabe des Entwicklers war, den Prozess zu entwerfen — und ihm dann nicht im Weg zu stehen.',
  },
  footer: {
    mark: 'CIPHER-MUX',
    version: 'v0.9.101 · macOS · MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/cmarkus42-rgb/cipher-mux-electron' },
      { label: 'Issues', href: 'https://github.com/cmarkus42-rgb/cipher-mux-electron/issues' },
      { label: 'Datenschutz', href: '/de/datenschutz' },
      { label: 'Impressum', href: '/de/impressum' },
    ],
  },
} as const;

export default landing;
