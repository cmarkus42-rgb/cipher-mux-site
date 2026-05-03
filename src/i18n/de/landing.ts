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
      title: 'Vibecoding, aber richtig',
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
    ],
  },
  footer: {
    mark: 'CIPHER-MUX',
    version: 'v0.9.9 · macOS · MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
      { label: 'Issues', href: 'https://github.com/cmarkus42/cipher-mux-electron/issues' },
      { label: 'Datenschutz', href: '/de/datenschutz' },
      { label: 'Impressum', href: '/de/impressum' },
    ],
  },
} as const;

export default landing;
