const landing = {
  hero: {
    label: 'Open Source · macOS · MIT',
    tagline: 'Agentic Engineering for Makers.',
    taglineSub: 'And everyone else.',
    subtext:
      'CIPHER-MUX visualizes and orchestrates LLM-assisted development processes. The system makes agent interactions transparent and controllable.',
    buttons: [
      { label: 'Documentation', href: '/en/docs', primary: true },
      { label: 'Features', href: '/en/features' },
      { label: 'GitHub', href: 'https://github.com/cmarkus42/cipher-mux-electron' },
    ],
  },
  pillars: [
    {
      title: 'Requirements-driven development',
      description:
        'Specifications are implemented by agents working in parallel. The process is visible and manageable within a grid interface.',
    },
    {
      title: 'Structured software lifecycle',
      description:
        'Five phases of software development (from ideation to audit) are mapped using specialized system prompts.',
    },
    {
      title: 'Transparent architecture',
      description:
        'Prompts, context windows, and agent decisions are exposed to allow analytical tracking of the models\' workflows.',
    },
    {
      title: 'Alternative access methods',
      description:
        'The interface integrates local speech recognition (Whisper), text-to-speech, and accessibility-optimized themes (WCAG AAA).',
    },
  ],
  notSection: {
    title: 'System Boundaries',
    items: [
      'Not a commercial product, but a generated open-source project.',
      'Does not replace the Claude Code CLI, but acts as a graphical orchestration layer on top of it.',
      'Requires the ability to formulate technical specifications precisely.',
      'Currently limited to macOS, as it relies on specific terminal architectures (tmux).',
    ],
  },
} as const;

export default landing;
