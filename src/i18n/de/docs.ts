const docs = {
  hero: {
    kicker: 'Referenz · v0.9.9',
    title: 'Das Handbuch. Alles an einem Ort.',
    body: 'Hier findest du detaillierte Erklärungen zur Architektur, Konfiguration und allen Tastenkürzeln. Ein kleiner Tipp: Du musst dieses Handbuch nicht zwingend lesen. Deine lokale Companion-Session kennt diese Dokumentation ebenfalls. Wenn du schnelle Antworten bevorzugst, kannst du Wayne jederzeit direkt im Cockpit fragen.',
  },
  sections: [
    {
      id: 'interface',
      title: '§ 01 · Interface',
      lead: 'Die Oberfläche ist bewusst zweigeteilt: Das Grid in der Mitte ist für deine Sessions und Editoren da, die Statusleiste unten für Metriken und globale Einstellungen. Über das Launcher-Popup (Cmd+N) lassen sich bequem neue Sessions starten oder Notizen anlegen.',
    },
    {
      id: 'grid-sessions',
      title: '§ 02–03 · Grid und Sessions',
      lead: 'Betrachte Sessions als isolierte Arbeitsbereiche, die du in bis zu 21 Zellen organisieren kannst. Die Bedienelemente in der Kopfzeile jeder Zelle helfen dir, den Fokus des Projekts zu verschieben oder bei Bedarf schnell auf die rohe Terminal-Shell zuzugreifen.',
    },
    {
      id: 'input-storage',
      title: '§ 04–06 · Input und Speicherung',
      lead: 'Dieser Abschnitt erklärt dir die Handhabung der lokalen Spracheingabe (inklusive der LED-Indikatoren in der Statusleiste). Zudem findest du hier Informationen zur Struktur der Sidebar und wie du die Markdown-Editoren samt Auto-Save und Tagging am besten für dein Wissensmanagement nutzt.',
    },
    {
      id: 'project-lifecycle',
      title: '§ 07–08 · Projektstruktur und Lebenszyklus',
      lead: 'Um reibungslos mit den Agenten zu arbeiten, empfiehlt sich eine bestimmte Ordnerhierarchie (wie .claude/ oder docs/specs/). Hier wird erklärt, wie diese Struktur aufgebaut ist und wie die verschiedenen Agenten-Presets von der ersten Ideenfindung bis zum finalen Audit methodisch zusammenarbeiten.',
    },
    {
      id: 'personas-workspaces',
      title: '§ 09–12 · Personas, Workspaces und Settings',
      lead: 'Hier erfährst du, wie du das Verhalten des Systems an deine Vorlieben anpasst. Es wird erläutert, wie du eigene Personas definierst, vorgefertigte Grid-Layouts (Workspaces) speicherst und in den Settings Anpassungen an Themes oder lokalen Modellen (Ollama) vornimmst.',
    },
    {
      id: 'shortcuts-bugreports',
      title: '§ 13–15 · Shortcuts und Bugreports',
      lead: 'Eine kompakte Referenz für deinen Alltag. Alle Tastenkürzel für die schnelle Navigation sind hier gelistet. Außerdem erfährst du, wie das systemweite Bugreport-Werkzeug funktioniert, das dir hilft, Fehlerdiagnosen für die Agenten sauber aufzubereiten.',
    },
  ],
} as const;

export default docs;
