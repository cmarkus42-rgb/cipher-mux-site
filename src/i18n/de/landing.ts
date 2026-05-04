const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering',
    taglineSub: 'for Makers.',
    taglineEnd: 'And everyone else.',
    subtext:
      'Eine grafische Schicht über Claude Code. Für alle die bauen wollen, ohne alles im Terminal zu jonglieren.',
    buttons: [
      { label: 'Dokumentation', href: '/de/docs', primary: true },
      { label: 'Features', href: '/de/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Coding mit KI, aber richtig',
      description:
        'Du hast eine Idee? Dann bau sie. cipher-mux strukturiert den Weg von der Idee zum Code — mit spezialisierten Agenten, die Qualität und Sicherheit einbauen, die man mit einer einzelnen Chat-Session nicht erreicht.',
    },
    {
      title: 'Gebaut für alle',
      description:
        'Kein Informatikstudium nötig. Der Companion zeigt dir alles — per Chat, per Voice, per UI-Highlighting. Wer eine Idee beschreiben kann, kann hier bauen.',
    },
    {
      title: 'Transparent statt magisch',
      description:
        'Du siehst, was die Agenten tun. Prompts, Kontext, Entscheidungen — alles liegt offen. So lernst du nebenbei, wie KI-gestütztes Entwickeln funktioniert.',
    },
    {
      title: 'Zugänglich gestaltet',
      description:
        'WCAG-AAA-Themes, lokale Spracherkennung, Bluetooth-Fernbedienung. Technik passt sich an — nicht umgekehrt.',
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
      { value: '1.207', label: 'Testcases' },
      { value: '100 %', label: 'Pass Rate' },
      { value: '~33', label: 'LOC pro Test' },
      { value: '90s', label: 'Runtime' },
    ],
    waves: [
      { label: 'Welle 0', tests: 400, note: 'Baseline' },
      { label: 'Welle 1–2', tests: 520, note: 'Hub, MCP, Grid' },
      { label: 'Welle 3–4', tests: 700, note: 'Debugger, Factory' },
      { label: 'Welle 5', tests: 841, note: 'Entity-Pipeline aktiv' },
      { label: 'Welle 6', tests: 1050, note: 'Handoff, Voice' },
      { label: 'Welle 7', tests: 1207, note: 'Audit, Pre-Release' },
    ],
    detail: 'Ab Welle 5 war die Testing-Entity im Prozess verdrahtet: sie schreibt Tests, reicht Findings an den Debugger weiter, und der Zyklus läuft ohne manuellen Anstoß. 366 der 1.207 Tests entstanden in den letzten beiden Wellen — durch den Prozess selbst. 0 High-Severity Findings im finalen Audit.',
    closer: 'Die Aufgabe des Entwicklers war, den Prozess zu entwerfen — und ihm dann nicht im Weg zu stehen.',
  },
  footer: {
    mark: 'CIPHER-MUX',
    version: 'v0.9.99 · macOS · MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
      { label: 'Issues', href: 'https://github.com/cmarkus42/cipher-mux-electron/issues' },
      { label: 'Datenschutz', href: '/de/datenschutz' },
      { label: 'Impressum', href: '/de/impressum' },
    ],
  },
} as const;

export default landing;
