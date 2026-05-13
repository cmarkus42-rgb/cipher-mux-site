const install = {
  hero: {
    kicker: 'Get started',
    title: 'From Mac to Cockpit.',
    titleAccent: '~20 minutes.',
    titleSuffix: 'One-time.',
    body: 'You need macOS, an Anthropic account, and a few terminal commands. This guide walks you through it.',
  },
  phaseStrip: [
    { n: '01', label: 'Installation', time: '~10 min' },
    { n: '02', label: 'First Launch', time: '~5 min' },
    { n: '03', label: 'First Result', time: '~5\u201310 min' },
    { n: '04', label: 'Next Steps', time: 'whenever' },
  ] as const,
  dmg: {
    buttonLabel: '\u2193 cipher-mux-0.9.99.dmg',
    meta: 'macOS \u00b7 Apple Silicon \u00b7 142 MB \u00b7 SHA-256 verified',
  },
  requirements: {
    label: 'Requirements',
    body: 'macOS 12 Monterey or later (Apple Silicon or Intel) \u00b7 Anthropic account with Claude Max or API Key \u00b7 approx. 1 GB free space (App ~140 MB, Voice Models optional ~530 MB)',
  },
  phases: [
    {
      num: '01' as const,
      headerLabel: '01 \u00b7 Installation',
      headerTime: '~5 min \u00b7 one-time',
      title: 'Download DMG, run the wizard, log in.',
      lead: 'Three steps: install the app, run the setup wizard, log in to Claude Code. The wizard detects what\u0027s missing.',
    },
    {
      num: '02' as const,
      headerLabel: '02 \u00b7 First Launch',
      headerTime: '~5 min',
      title: 'The Companion gets to know you.',
      lead: 'On first launch, the Companion asks about your background. Three quick questions, then the system adapts to your level.',
    },
    {
      num: '03' as const,
      headerLabel: '03 \u00b7 First Result',
      headerTime: '~5\u201310 min',
      title: 'Grid, Cells, Sidebar \u2014 try once, get it.',
      lead: 'Three actions: send a prompt, open a second session, discover the sidebar. After that you know the basics.',
    },
  ] as const,
  stepA: {
    title: 'Install the App',
    desc: 'Standard DMG flow \u2014 download, open, drag to Applications.',
    items: [
      { strong: 'Download DMG', detail: '', linkLabel: 'GitHub Releases', code: 'cipher-mux-0.9.99-arm64.dmg' },
      { strong: 'Open DMG', detail: 'Double-click \u2192 drag cipher-mux.app to Applications' },
      { strong: 'Remove macOS quarantine', detail: 'One-time in Terminal:', code: 'xattr -cr /Applications/cipher-mux.app' },
      { strong: 'Launch', detail: 'Spotlight \u2192 cipher-mux \u2192 Enter' },
    ] as const,
    pitfall: {
      label: '\u26a0 Why xattr?',
      items: [
        'cipher-mux is open source but not yet signed with an Apple certificate. macOS blocks unsigned apps by default \u2014 standard security behavior.',
        'The xattr -cr command removes the quarantine flag. The app itself is not modified. One-time only.',
      ] as const,
    },
  },
  stepB: {
    title: 'Setup Wizard',
    desc: 'On first launch, the app detects what\u0027s missing on your system. You decide what gets installed \u2014 one click on \u201cStart Setup\u201d, the rest runs automatically.',
    disclosureLabel: 'What the Wizard installs',
    wizardItems: [
      { name: 'Homebrew', tag: 'Required \u00b7 ~200 MB', body: 'The standard macOS package manager. Skipped if already present. A Terminal window opens automatically \u2014 enter your macOS password there.' },
      { name: 'tmux', tag: 'Required \u00b7 ~2 MB', body: 'Terminal multiplexer \u2014 the invisible infrastructure cipher-mux is built on. Every Claude session runs in its own tmux session. Without tmux, no sessions can start.' },
      { name: 'Node.js', tag: 'Recommended \u00b7 ~30 MB', body: 'JavaScript runtime for Claude Code CLI and the TTS engine. Detected automatically if installed via NVM, Volta, or Homebrew.' },
      { name: 'Claude Code CLI', tag: 'Recommended \u00b7 ~50 MB', body: 'Anthropic\u0027s AI coding assistant \u2014 the core engine behind cipher-mux. Installed via npm. Requires a one-time claude login in Terminal afterwards.' },
      { name: 'Whisper Model', tag: 'Optional \u00b7 ~500 MB', body: 'Local speech-to-text. Voice control without cloud. Fully offline. Can be installed later at any time.' },
      { name: 'Piper TTS', tag: 'Optional \u00b7 ~30 MB', body: 'Local text-to-speech. Summaries, status updates, milestones \u2014 spoken, not just written.' },
    ] as const,
    pitfall: {
      label: '\u2139 Note',
      items: [
        'Voice is an upgrade, not a requirement. Without Whisper and Piper, cipher-mux works fully \u2014 chat, sessions, all entities, the entire workflow.',
        'The wizard shows you what\u0027s being installed in real time. After completion, the app starts automatically.',
        'If Homebrew and tmux are already installed, a \u201cSkip\u201d link appears \u2014 the wizard becomes optional.',
      ] as const,
    },
  },
  stepC: {
    title: 'Log in to Claude Code',
    desc: 'The Setup Wizard installs Claude Code CLI automatically. Then log in once in Terminal:',
    terminal: {
      cmd: 'claude login',
      out: '\u2192 Browser opens, log in, done.',
    },
    pitfall: {
      label: '\u26a0 Note',
      items: [
        'You need an Anthropic account with Claude Code access. Which plan includes it: anthropic.com',
      ] as const,
    },
  },
  companion: {
    mockHeader: 'companion \u00b7 cell 1/1',
    mockLines: [
      { type: 'name' as const, text: 'companion \u25b6' },
      { type: 'msg' as const, text: 'Hey! Type /startup \u2014 then we\u0027ll set everything up together.' },
      { type: 'cmd' as const, text: '> /startup' },
      { type: 'msg' as const, text: 'Got it. A few quick questions, then everything adapts.' },
      { type: 'qlabel' as const, text: 'How much coding experience do you have?' },
      { type: 'input' as const, text: 'Some \u2014 I can read and modify scripts_' },
      { type: 'qlabel' as const, text: 'Have you worked with AI coding tools before?' },
      { type: 'input' as const, text: 'Yes, Claude Code for a few weeks_' },
      { type: 'qlabel' as const, text: 'What do you want to build first?' },
      { type: 'input' as const, text: 'Just exploring \u2014 maybe some notes tools_' },
      { type: 'confirm' as const, text: '\u2713 user-profile.json created' },
    ] as const,
    narrativeTitle: 'How it works',
    narrativeSteps: [
      { strong: 'App opens \u2192 empty grid', detail: 'A 1\u00d71 layout to start. The Companion takes the first cell.' },
      { strong: 'Type /startup', detail: 'The Companion asks about your background, your AI experience, and your goals. No multiple choice \u2014 just answer.' },
      { strong: 'Profile gets created', detail: 'Your answers are saved as user-profile.json. All entities adapt their detail level to your skill from now on.' },
      { strong: 'Create a workspace', detail: 'Pick a name, assign your project folder \u2014 done. Every session in the workspace now knows what you\u0027re working on.' },
    ] as const,
  },
  actions: [
    {
      num: 'ACTION 01',
      title: 'Type something',
      body: 'Give Claude a simple task in the first cell. You\u0027ll see it work, output appears in the terminal.',
      terminal: 'Explain what\u0027s happening in this project',
      layout: '1x1' as const,
    },
    {
      num: 'ACTION 02',
      title: 'Second session',
      body: 'Add column, open new session. Two parallel Claude cells. The core feature.',
      terminal: '\u2318 + \u2192 adds column to the right',
      terminalComment: '# Shortcut',
      layout: '2x1' as const,
    },
    {
      num: 'ACTION 03',
      title: 'Discover sidebar',
      body: 'Open sidebar, notes tab, write first note. Memory lives here.',
      terminal: '\u2318 + B toggles sidebar',
      terminalComment: '# Shortcut',
      layout: 'sidebar' as const,
    },
  ] as const,
  outcome: {
    label: 'After these three actions you have',
    items: [
      '\u2713 Claude Code running',
      '\u2713 Two parallel sessions',
      '\u2713 Grid \u00b7 Cells \u00b7 Focus understood',
      '\u2713 Sidebar + Notes found',
    ] as const,
  },
  nextSteps: {
    title: 'The Companion suggests \u2014 you choose',
    lead: 'Depending on your skill level, the Companion has different next steps. No pressure \u2014 you can also just go for it.',
    cards: [
      { guide: 'Guide 02', tag: 'Beginner', title: 'Voice + Notes', body: 'Tomorrow I\u0027ll show you Voice Input and how to use Notes as a second brain.' },
      { guide: 'Guide 03', tag: 'Intermediate', title: 'Workshop', body: 'If you want, I\u0027ll show you the Workshop \u2014 how multiple sessions work together.' },
      { guide: 'Guide 03 + 05', tag: 'Power User', title: 'Cyber Factory + Presets', body: 'You know what you\u0027re doing. Parallel worker sessions and custom preset configuration if you want to go deeper.' },
    ] as const,
  },
  bottom: {
    title: 'Ready?',
    titleAccent: 'Download it.',
    subtitle: 'macOS 12+ \u00b7 Apple Silicon or Intel. Linux & Windows: coming.',
    dmgLabel: '\u2193 Download DMG',
    githubLabel: 'github / cipher-mux \u2197',
    docsLabel: 'docs \u2197',
  },
} as const;

export default install;
