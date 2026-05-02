const install = {
  hero: {
    kicker: 'Setup',
    title: 'Systemvoraussetzungen und Installation.',
    body: 'Der Betrieb erfordert macOS, einen Anthropic-Account zur Nutzung der API und grundlegende Terminal-Eingaben für die Installation von Abhängigkeiten.',
  },
  phases: [
    {
      num: '01' as const,
      kicker: 'Prozess',
      title: 'Abhängigkeiten und App-Installation',
      lead: 'Installation von Node.js und der Claude Code CLI (npm install -g @anthropic-ai/claude-code). Anschließend wird das .dmg-Image regulär in den Programme-Ordner kopiert. macOS-Sicherheitsrichtlinien erfordern beim ersten Start einen Rechtsklick → Öffnen. Für systemweite Tastenkürzel müssen Accessibility-Rechte erteilt werden.',
    },
    {
      num: '02' as const,
      kicker: 'Erster Start',
      title: 'Profil-Setup',
      lead: 'Beim ersten Start initiiert das System eine Konfigurations-Session, in der technische Vorkenntnisse abgefragt werden, um den Detailgrad künftiger Systemmeldungen und Erklärungen anzupassen.',
    },
    {
      num: '03' as const,
      kicker: 'Überblick',
      title: 'Grundlegende Navigation',
      lead: 'Empfohlen wird das schrittweise Öffnen eines Projekts, das Hinzufügen einer weiteren Spalte für parallele Sessions (Cmd + →) sowie das Einblenden der Sidebar (Cmd + B), um sich mit der Fensteraufteilung vertraut zu machen.',
    },
  ],
} as const;

export default install;
