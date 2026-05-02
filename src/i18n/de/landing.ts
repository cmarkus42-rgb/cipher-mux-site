const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering for Makers.',
    taglineSub: 'And everyone else.',
    subtext:
      'CIPHER-MUX macht KI-gestütztes Bauen zugänglich, transparent und lehrbar. Für alle die Ideen haben.',
    buttons: [
      { label: 'Dokumentation', href: '/de/docs', primary: true },
      { label: 'Features', href: '/de/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Anforderungsbasierte Entwicklung',
      description:
        'Spezifikationen werden durch parallel arbeitende Agenten umgesetzt. Der Prozess ist in einer Grid-Oberfläche sicht- und steuerbar.',
    },
    {
      title: 'Strukturierter Software-Lebenszyklus',
      description:
        'Fünf Phasen der Softwareentwicklung (Ideation bis Audit) werden durch spezialisierte System-Prompts abgebildet.',
    },
    {
      title: 'Transparente Architektur',
      description:
        'Prompts, Kontext-Fenster und Agenten-Entscheidungen liegen offen, um die Arbeitsweise der Modelle analytisch nachvollziehen zu können.',
    },
    {
      title: 'Alternative Zugangswege',
      description:
        'Das Interface integriert lokale Spracherkennung (Whisper), Text-to-Speech und auf Barrierefreiheit optimierte Themes (WCAG AAA).',
    },
  ],
  notSection: {
    title: 'Systemabgrenzung',
    items: [
      'Kein kommerzielles Produkt, sondern ein generiertes Open-Source-Projekt.',
      'Ersetzt nicht die Claude Code CLI, sondern fungiert als grafische Orchestrierungsschicht.',
      'Erfordert die Fähigkeit, technische Spezifikationen präzise zu formulieren.',
      'Aktuell auf macOS beschränkt, da es auf spezifischen Terminal-Architekturen (tmux) aufbaut.',
    ],
  },
} as const;

export default landing;
