const docsHub = {
  hero: {
    kicker: 'Handbuch · v0.9.101',
    title: 'Das Handbuch.',
    titleAccent: 'Drei Kapitel.',
    titleEnd: 'Ein Companion.',
    body: 'Schnelleinstieg, Konzepte, Referenz — alles was cipher-mux kann, aufgeteilt in drei Seiten. Oder frag den Companion, der kennt jede davon.',
  },
  companionHint: {
    kicker: 'Bevor du blaetterst',
    title: 'Du musst das hier nicht lesen.',
    body: 'Der <strong>Companion</strong> ist immer einen Klick entfernt. Er kennt jedes Kapitel dieses Handbuchs — und antwortet auf deinem Level, weil er dein Profil kennt. Statt hier zu suchen, frag ihn.',
  },
  cards: [
    {
      num: '01',
      title: 'Schnelleinstieg',
      body: 'Vom Download zur ersten Session in fuenf Minuten.',
      href: '/de/docs/start',
    },
    {
      num: '02',
      title: 'Prozess & Konzepte',
      body: 'Wie die Entities zusammenarbeiten — und warum.',
      href: '/de/docs/concepts',
    },
    {
      num: '03',
      title: 'Nutzung der App',
      body: 'Jede Funktion, jeder Button, jedes Menue.',
      href: '/de/docs/usage',
    },
  ],
  bottom: {
    title: 'Fragen offen?',
    titleAccent: 'Frag den Companion.',
    body: 'Das Handbuch ist lang. Der Companion ist im Cockpit. Er kennt jeden Abschnitt davon — und antwortet schneller als du scrollst.',
    downloadLabel: 'App herunterladen',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsHub;
