const landing = {
  hero: {
    label: 'v0.9.9 · macOS · MIT',
    tagline: 'Your',
    taglineSub: 'Coding Cockpit.',
    subtext:
      'CIPHER-MUX orchestrates multiple Claude Code sessions in parallel — visible, controllable, teachable.',
    buttons: [
      { label: 'Get Started', href: '/en/start', primary: true },
      { label: 'Features', href: '/en/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Requirements-driven development',
      description:
        'You define the specifications, while agents work in parallel to implement them. The visual grid system allows you to manage and observe this process comfortably.',
      tag: 'orchestrator',
      color: 'var(--color-preset-cyberfactory)',
    },
    {
      title: 'Structured software lifecycle',
      description:
        'The cockpit guides you through five phases (from ideation to final audit). Specialized system prompts take care of the heavy lifting regarding structural organization.',
      tag: 'project-launcher',
      color: 'var(--color-preset-debugger)',
    },
    {
      title: 'Transparent architecture',
      description:
        'We believe the best way to understand AI is to watch it work. Prompts, context windows, and agent decisions are fully exposed so you can analytically trace their workflows.',
      tag: 'companion',
      color: 'var(--color-preset-companion)',
    },
    {
      title: 'Alternative access methods',
      description:
        'Technology should adapt to you. The interface offers local speech recognition (Whisper), text-to-speech, and accessibility-optimized themes (WCAG AAA) as alternative ways to interact.',
      tag: 'voice-relay',
      color: 'var(--color-preset-voice)',
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
