const install = {
  hero: {
    kicker: 'Setup',
    title: 'From Mac to Cockpit. In a few steps.',
    body: 'The initial setup takes a little bit of time. The background: You need macOS, an Anthropic account for the API, and a few terminal commands to install the basic dependencies. We will guide you through this process.',
  },
  phases: [
    {
      num: '01' as const,
      kicker: 'Process',
      title: 'Dependencies and App Installation',
      lead: 'The Claude Code CLI is installed via the terminal, as there is currently no standard installation wizard for it. We recommend the following workflow:',
      steps: [
        'First, install Node.js and the CLI via npm install -g @anthropic-ai/claude-code.',
        'Then, copy the .dmg image into your Applications folder as usual.',
        'Due to macOS security policies, a right-click -> "Open" is often required on the very first launch.',
        'For system-wide keyboard shortcuts to work properly, it is advisable to grant the app Accessibility permissions in your System Settings.',
      ],
    },
    {
      num: '02' as const,
      kicker: 'First Launch',
      title: 'Profile Setup with the Companion',
      lead: 'To provide you with tailored support, a brief configuration session starts upon your first launch. This assesses your technical background. This way, the system can pleasantly adapt the detail level of explanations and system messages to your existing knowledge.',
    },
    {
      num: '03' as const,
      kicker: 'Overview',
      title: 'First steps for orientation',
      lead: 'To get comfortable with the grid, we recommend opening an existing project first. You can use Cmd + → to add a second column for a parallel session. Pressing Cmd + B opens the sidebar. Doing this will quickly familiarize you with the basic navigation.',
    },
  ],
} as const;

export default install;
