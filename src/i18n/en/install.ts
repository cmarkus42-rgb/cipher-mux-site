const install = {
  hero: {
    kicker: 'Setup',
    title: 'System Requirements and Installation.',
    body: 'Operation requires macOS, an Anthropic account for API usage, and basic terminal commands to install dependencies.',
  },
  phases: [
    {
      num: '01' as const,
      kicker: 'Process',
      title: 'Dependencies and App Installation',
      lead: 'Installation of Node.js and the Claude Code CLI (npm install -g @anthropic-ai/claude-code). Subsequently, the .dmg image is copied into the Applications folder. macOS security policies require a right-click → Open on the first launch. Accessibility permissions must be granted for system-wide shortcuts.',
    },
    {
      num: '02' as const,
      kicker: 'First Launch',
      title: 'Profile Setup',
      lead: 'Upon the first launch, the system initiates a configuration session to assess technical background knowledge, adjusting the detail level of future system messages and explanations accordingly.',
    },
    {
      num: '03' as const,
      kicker: 'Overview',
      title: 'Basic Navigation',
      lead: 'It is recommended to systematically open a project, add an additional column for parallel sessions (Cmd + →), and display the sidebar (Cmd + B) to familiarize oneself with the window layout.',
    },
  ],
} as const;

export default install;
