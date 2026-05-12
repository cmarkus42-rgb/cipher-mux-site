const docsHub = {
  hero: {
    kicker: 'Handbook · v0.9.101',
    title: 'The Handbook.',
    titleAccent: 'Three chapters.',
    titleEnd: 'One Companion.',
    body: 'Quick start, concepts, reference — everything cipher-mux can do, split into three pages. Or ask the Companion, who knows every one of them.',
  },
  companionHint: {
    kicker: 'Before you scroll',
    title: 'You don\'t have to read this.',
    body: 'The <strong>Companion</strong> is always one click away. It knows every chapter of this handbook — and answers at your level, because it knows your profile. Instead of searching here, ask it.',
  },
  cards: [
    {
      num: '01',
      title: 'Quick Start',
      body: 'From download to your first session in five minutes.',
      href: '/en/docs/start',
    },
    {
      num: '02',
      title: 'Process & Concepts',
      body: 'How the entities work together — and why.',
      href: '/en/docs/concepts',
    },
    {
      num: '03',
      title: 'Using the App',
      body: 'Every function, every button, every menu.',
      href: '/en/docs/usage',
    },
  ],
  bottom: {
    title: 'Questions?',
    titleAccent: 'Ask the Companion.',
    body: 'The handbook is long. The Companion is in the cockpit. It knows every section — and answers faster than you can scroll.',
    downloadLabel: 'Download the app',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsHub;
