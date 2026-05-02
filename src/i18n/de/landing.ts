const landing = {
  hero: {
    label: 'v0.9.9 · macOS · MIT',
    tagline: 'Dein',
    taglineSub: 'Coding-Cockpit.',
    subtext:
      'CIPHER-MUX orchestriert mehrere Claude-Code-Sessions parallel — sichtbar, steuerbar, lehrbar.',
    buttons: [
      { label: 'Loslegen', href: '/de/start', primary: true },
      { label: 'Features', href: '/de/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Anforderungsbasierte Entwicklung',
      description:
        'Du formulierst die Spezifikationen, während parallel arbeitende Agenten an der Umsetzung arbeiten. Das visuelle Grid-System hilft dir dabei, diesen Prozess entspannt zu steuern und zu beobachten.',
      tag: 'orchestrator',
      color: 'var(--color-preset-cyberfactory)',
    },
    {
      title: 'Strukturierter Software-Lebenszyklus',
      description:
        'Das Cockpit begleitet dich durch fünf Phasen (von der ersten Idee bis zum finalen Audit). Spezialisierte System-Prompts nehmen dir dabei die Strukturierung ab.',
      tag: 'project-launcher',
      color: 'var(--color-preset-debugger)',
    },
    {
      title: 'Transparente Architektur',
      description:
        'Wir glauben, dass man KI am besten lernt, wenn man ihr zuschauen kann. Prompts, Kontext-Fenster und Agenten-Entscheidungen liegen offen, damit du die Arbeitsweise analytisch nachvollziehen kannst.',
      tag: 'companion',
      color: 'var(--color-preset-companion)',
    },
    {
      title: 'Alternative Zugangswege',
      description:
        'Technik sollte sich anpassen, nicht umgekehrt. Das Interface bietet lokale Spracherkennung (Whisper), Text-to-Speech und auf Barrierefreiheit optimierte Themes (WCAG AAA) als alternative Zugangswege.',
      tag: 'voice-relay',
      color: 'var(--color-preset-voice)',
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
