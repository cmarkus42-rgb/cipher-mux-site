const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering',
    taglineSub: 'for Makers.',
    taglineEnd: 'And everyone else.',
    subtext:
      'A graphical layer on top of Claude Code. For everyone who wants to build without juggling terminals.',
    buttons: [
      { label: 'Documentation', href: '/en/docs', primary: true },
      { label: 'Features', href: '/en/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Vibecoding, done right',
      description:
        'Got an idea? Build it. cipher-mux structures the path from idea to code — with specialized agents that build in quality and security you can\'t get from a single chat session.',
    },
    {
      title: 'Built for everyone',
      description:
        'No CS degree required. The Companion shows you everything — via chat, voice, or UI highlighting. If you can describe an idea, you can build here.',
    },
    {
      title: 'Transparent, not magic',
      description:
        'You see what the agents do. Prompts, context, decisions — everything is exposed. Learn how AI-powered development works by watching it happen.',
    },
    {
      title: 'Designed for access',
      description:
        'WCAG AAA themes, local speech recognition, Bluetooth remote control. Technology adapts to you — not the other way around.',
    },
  ],
  notSection: {
    title: 'System Boundaries',
    lead: 'For clear expectations – what CIPHER-MUX is not:',
    items: [
      'Not a commercial product, but a generated open-source project born out of personal necessity.',
      'Not a replacement for the Claude Code CLI, but a graphical orchestration layer built on top of it.',
      'Not a magic wand for vague ideas. The ability to precisely formulate technical specifications remains essential.',
      'Currently limited to macOS, as the architecture is deeply integrated with the tmux terminal multiplexer.',
    ],
  },
  footer: {
    mark: 'CIPHER-MUX',
    version: 'v0.9.9 · macOS · MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
      { label: 'Issues', href: 'https://github.com/cmarkus42/cipher-mux-electron/issues' },
      { label: 'Privacy Policy', href: '/en/privacy' },
      { label: 'Imprint', href: '/en/imprint' },
    ],
  },
} as const;

export default landing;
