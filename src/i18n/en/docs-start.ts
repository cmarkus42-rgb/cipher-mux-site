const docsStart = {
  hero: {
    kicker: 'Quick Start · v0.11.3',
    title: 'From start',
    titleAccent: 'to your first project.',
    body: 'Installation done? Then start here. You set up your first Workspace and get to know the most important areas of the app.',
  },

  sections: [
    { id: 'orientation', num: '01', title: 'Orientation', navLabel: 'Orientation' },
    { id: 'workspace', num: '02', title: 'Create a Workspace', navLabel: 'Workspace' },
    { id: 'sessions', num: '03', title: 'Start Sessions', navLabel: 'Sessions' },
    { id: 'overview', num: '04', title: 'The App at a Glance', navLabel: 'Overview' },
    { id: 'voice', num: '05', title: 'Try Voice', navLabel: 'Voice' },
    { id: 'next', num: '06', title: 'Next', navLabel: 'Next' },
  ],

  orientation: {
    lead: 'When you open cipher-mux, you see the Grid — the central work area. Empty cells show a +, the status bar sits along the bottom edge. That is all.',
    items: [
      'Installation and first-time setup are described in detail on the <a href="/en/start" class="docs-inline-link">download page</a>.',
      'On the very first launch, the <strong>Companion</strong> takes the first cell. Type <span class="docs-mono">/startup</span> — it asks about your background and creates a profile. From then on, every Entity adjusts its level of detail to your level.',
      'The Companion can also explain everything that is written on these pages. Instead of searching here, ask it.',
    ],
    screenshot: {
      placeholder: 'Screenshot: Empty grid with the Companion in the first cell',
      caption: 'First launch — Companion ready',
    },
  },

  workspace: {
    lead: 'A Workspace bundles everything for one project: grid layout, Preset assignments, project directory, Workspace prompt. When you load a Workspace, every Session immediately knows what is being worked on.',
    flow: [
      'Click <strong>workspaces</strong> in the status bar — the Workspace editor opens.',
      'Create a new Workspace and name it (e.g. "My Project").',
      'Add a <strong>Workspace prompt</strong> — a few sentences about your project are enough: what it is, which language/framework, what is coming up next.',
      'If you already have a project folder: add it as a <strong>Context Directory</strong>. If not, add it later once it exists.',
      'Set the grid size (e.g. 2x1 to start with) and optionally assign Presets.',
      'Save. Mark it as the default if you want.',
    ],
    callout: 'Switching Workspace = different context. All Sessions, Notes and tags are filtered to the active Workspace automatically. This is the central organizing mechanism in cipher-mux.',
    screenshot: {
      placeholder: 'Screenshot: Workspace editor with Workspace prompt and Context Directory',
      caption: 'Workspace editor — setting up a project',
    },
  },

  sessions: {
    lead: 'With a Workspace set up, you can start Sessions. Two ways:',
    presetTitle: 'Via Preset',
    presetSteps: [
      'Click <span class="docs-mono">+</span> in an empty cell → <strong>Presets</strong> tab',
      'Pick a Preset (Companion, Refinement, Cyber Factory, ...)',
      'The Session starts with the Workspace context + the Preset instructions',
    ],
    pathTitle: 'Via Path',
    pathSteps: [
      'Click <span class="docs-mono">+</span> → <strong>Path</strong> tab',
      'Pick a project folder — a bare Claude session without a Preset',
    ],
    optionsTitle: 'Options',
    options: [
      { label: 'Shell Only', desc: 'A plain terminal without Claude. For git, npm, quick commands.' },
      { label: 'Skip Permissions', desc: 'Claude carries out actions without asking back. Can also be enabled globally under Settings → General.' },
      { label: 'Resume', desc: 'Continue an earlier Session. The context is preserved.' },
    ],
    screenshot: {
      placeholder: 'Screenshot: Launcher popup with the Presets tab',
      caption: 'Starting a Session — Preset or Path',
    },
  },

  overview: {
    lead: 'Before you go deeper — where do you find what? A quick tour of the interface.',
    areas: [
      { label: 'Grid', desc: 'The central area. Your Sessions run here — each in its own cell. Drag & drop swaps positions. Adjust columns/rows via the status bar (1-7 x 1-3).', link: '/en/docs/usage#grid' },
      { label: 'Session Header', desc: 'Every cell has a header bar with a status dot, a context bar and buttons: Focus Mode, Fork, Screenshot, Pop-Out, Shell, Background, Close.', link: '/en/docs/usage#header' },
      { label: 'Status Bar', desc: 'Along the bottom edge: voice control, grid size, Workspaces, sidebar toggle, theme, settings. Your command center.', link: '/en/docs/usage#grid' },
      { label: 'Sidebar', desc: 'The right-hand panel with five sections: Notes, Background Sessions, Orphaned Sessions, Companion Memory, Messages. Open it via "sidebar" in the status bar.', link: '/en/docs/usage#sidebar' },
      { label: 'Workspace Editor', desc: 'Its own window for grid layouts, Personas, Preset configuration and tags. Open it via "workspaces" in the status bar.', link: '/en/docs/usage#settings' },
      { label: 'Settings', desc: 'Seven tabs: General (Skip Permissions, Keep Working, Default CLI), Language, Themes (13 of them + your own), Shortcuts, Remote, A11y, About.', link: '/en/docs/usage#settings' },
    ],
    callout: 'All details on each area are in <a href="/en/docs/usage" class="docs-inline-link">Using the App</a>.',
  },

  voice: {
    lead: 'Voice control runs entirely local via Whisper. No network, no cloud.',
    items: [
      'Click the voice pill in the status bar — the LED turns green (ready).',
      'Press the STT button — the LED turns red (recording).',
      'Speak. When you are done, say <strong>"submit"</strong> — the text is inserted into the focused cell.',
      'The text is inserted but <strong>not sent automatically</strong>. You can review and edit it before you press Enter.',
    ],
    linkNote: 'Everything else about voice control — Voice Commands, COM mode, BT clicker, TTS — is in',
    linkLabel: 'Using the App',
    linkHref: '/en/docs/usage#voice',
  },

  next: {
    lead: 'You have seen the essentials. Two ways to read on:',
    concepts: {
      title: 'Process & Concepts',
      body: 'How the Entities work together — and why cipher-mux is more than a terminal grid.',
      href: '/en/docs/concepts',
    },
    usage: {
      title: 'Using the App',
      body: 'Every function, every button, every menu. The complete reference.',
      href: '/en/docs/usage',
    },
  },

  bottom: {
    title: 'Ready?',
    titleAccent: 'The Companion is waiting.',
    body: 'Start cipher-mux, open the Companion, and tell it what you have in mind. You work out the rest together.',
    downloadLabel: 'Download the app',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsStart;
