const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering',
    taglineSub: 'for Makers.',
    taglineEnd: 'And everyone else.',
    subtext:
      'Orchestrates Claude Code into a real development process — with roles, memory, and voice.',
    buttons: [
      { label: 'Documentation', href: '/en/docs', primary: true },
      { label: 'Features', href: '/en/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42-rgb/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Coding with AI, done right',
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
      'Requires Claude Code — which subscription includes it may change. Current info: anthropic.com',
    ],
  },
  builtWithItself: {
    title: 'Built with Itself',
    lead: 'cipher-mux was built with cipher-mux. Not a single test was written by hand — every one was produced by Claude Code. First in individual sessions, then from Wave 5 onward by the Testing Entity as part of the pipeline.',
    stats: [
      { value: '1,207', label: 'Test Cases' },
      { value: '100%', label: 'Pass Rate' },
      { value: '~33', label: 'LOC per Test' },
      { value: '90s', label: 'Runtime' },
    ],
    waves: [
      { label: 'Wave 0', tests: 400, note: 'Baseline' },
      { label: 'Wave 1–2', tests: 520, note: 'Hub, MCP, Grid' },
      { label: 'Wave 3–4', tests: 700, note: 'Debugger, Factory' },
      { label: 'Wave 5', tests: 841, note: 'Entity pipeline active' },
      { label: 'Wave 6', tests: 1050, note: 'Handoff, Voice' },
      { label: 'Wave 7', tests: 1207, note: 'Audit, Pre-Release' },
    ],
    detail: 'From Wave 5, the Testing Entity was wired into the process: it writes tests, hands findings to the Debugger, and the cycle runs without manual trigger. 366 of 1,207 tests were produced in the last two waves — by the process itself. 0 high-severity findings in the final audit.',
    closer: 'The developer\'s job was to design the process — and stay out of its way.',
  },
  footer: {
    mark: 'CIPHER-MUX',
    version: 'v0.9.99 · macOS · MIT',
    links: [
      { label: 'GitHub', href: 'https://github.com/cmarkus42-rgb/cipher-mux-electron' },
      { label: 'Issues', href: 'https://github.com/cmarkus42-rgb/cipher-mux-electron/issues' },
      { label: 'Privacy Policy', href: '/en/privacy' },
      { label: 'Imprint', href: '/en/imprint' },
    ],
  },
} as const;

export default landing;
