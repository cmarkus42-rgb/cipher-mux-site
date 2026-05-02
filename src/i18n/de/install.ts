const install = {
  hero: {
    kicker: 'Setup',
    title: 'Vom Mac zum Cockpit. In wenigen Schritten.',
    body: 'Die Ersteinrichtung nimmt etwas Zeit in Anspruch. Der Hintergrund: Du benötigst macOS, einen Anthropic-Account für die API und einige Terminal-Befehle, um die grundlegenden Abhängigkeiten zu installieren. Wir begleiten dich durch diesen Prozess.',
  },
  phases: [
    {
      num: '01' as const,
      kicker: 'Prozess',
      title: 'Abhängigkeiten und App-Installation',
      lead: 'Die Installation der Claude Code CLI erfolgt über das Terminal, da es hierfür aktuell keine klassische Installationsroutine gibt. Wir empfehlen folgenden Ablauf:',
      steps: [
        'Zunächst Node.js und die CLI via npm install -g @anthropic-ai/claude-code installieren.',
        'Danach das .dmg-Image wie gewohnt in den Programme-Ordner kopieren.',
        'Aufgrund der macOS-Sicherheitsrichtlinien ist beim allerersten Start oft ein Rechtsklick -> "Öffnen" nötig.',
        'Damit die systemweiten Tastenkürzel greifen, ist es ratsam, der App in den Systemeinstellungen die Accessibility-Rechte zu erteilen.',
      ],
    },
    {
      num: '02' as const,
      kicker: 'Erster Start',
      title: 'Profil-Setup mit dem Companion',
      lead: 'Um dich künftig passgenau zu unterstützen, startet beim ersten Öffnen eine kurze Konfigurations-Session. Hier wird dein technischer Hintergrund erfasst. So kann das System den Detailgrad von Erklärungen und Systemmeldungen angenehm an dein Vorwissen anpassen.',
    },
    {
      num: '03' as const,
      kicker: 'Überblick',
      title: 'Die ersten Schritte zur Orientierung',
      lead: 'Um dich mit dem Grid vertraut zu machen, empfiehlt es sich, zunächst ein bestehendes Projekt zu öffnen. Mit Cmd + → kannst du eine zweite Spalte für eine parallele Session hinzufügen. Ein Druck auf Cmd + B öffnet die Sidebar. So hast du die grundlegende Navigation schnell verinnerlicht.',
    },
  ],
} as const;

export default install;
