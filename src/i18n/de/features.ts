const features = {
  hero: {
    kicker: '// 02 · Architektur',
    title: 'Ein Blick unter die Haube.',
    subtext:
      'Hier findest du eine Übersicht der zentralen Bausteine: vom Grid-System über Personas bis hin zum eingebauten MCP-Server. Alles auf einer Seite, damit du in Ruhe verstehen kannst, wie die Komponenten ineinandergreifen.',
  },
  sections: [
    {
      num: '01',
      kicker: 'Überblick',
      title: 'Die Applikation',
      lead: 'CIPHER-MUX ist eine Electron-Umgebung. Das Herzstück ist ein Grid mit bis zu 21 Zellen für Claude-Code-Sessions und Markdown-Editoren. Im Hintergrund sorgt tmux dafür, dass deine Sitzungen auch bei einem Neustart oder Systemausfall sicher erhalten bleiben.',
      stats: [
        { value: '21', label: 'Zellen max (7×3)' },
        { value: '7', label: 'Entity-Typen' },
        { value: '37', label: 'MCP-Tools in 9 Kategorien' },
        { value: '10', label: 'UI-Themes (inkl. WCAG AAA)' },
      ],
    },
    {
      num: '02',
      kicker: 'Interface',
      title: 'Das Grid-System flexibel nutzen',
      lead: 'Das Grid ist deine anpassbare Arbeitsfläche (maximal 7 Spalten und 3 Reihen). Es empfiehlt sich, Sessions einfach per Drag & Drop so anzuordnen, wie es für deinen Workflow passt. Für längere Textausgaben können Zellen vertikal erweitert werden. Die Kopfzeilen bieten dir schnellen Zugriff auf Projektwechsel oder die zugrundeliegende Shell.',
    },
    {
      num: '03',
      kicker: 'Prozess-Management',
      title: 'Sitzungen und das tmux-Backend',
      lead: 'Jede Zelle beherbergt einen isolierten Claude-Code-Prozess mit eigenem Kontextfenster. Da das tmux-Backend die Prozesse im Hintergrund aktiv hält, kannst du die App jederzeit schließen. Beim nächsten Start hilft dir ein Recovery-Dialog dabei, bestehende Sitzungen nahtlos wiederaufzunehmen.',
    },
    {
      num: '04',
      kicker: 'Konfiguration',
      title: 'Personas — Die richtige Tonalität finden',
      lead: 'Personas steuern, wie das Modell mit dir kommuniziert. Da jeder Mensch anders arbeitet, stehen dir sechs Standard-Profile zur Auswahl (z.B. wissenschaftlich-sachlich, extrem reduziert oder sokratisch fragend). Bei Bedarf lassen sich jederzeit eigene Profile anlegen.',
    },
    {
      num: '05',
      kicker: 'Rollen',
      title: 'Presets — Funktionale System-Prompts',
      lead: 'Während Personas das "Wie" klären, definieren Presets das "Was". Sie geben den Agenten klare Aufgaben, Werkzeuge und Grenzen vor. Es gibt acht spezialisierte Rollen, um den Entwicklungsprozess zu gliedern:',
      roles: [
        { name: 'Ideation Partner', description: 'Für Recherche und die Synthese von Ideen.' },
        { name: 'Refinement', description: 'Zur sauberen Anforderungsanalyse.' },
        { name: 'Cyber Factory', description: 'Übernimmt die Subsystem-Zerlegung und koordiniert mehrere Sessions.' },
        { name: 'Testing Assistant', description: 'Testet den generierten Code kritisch.' },
        { name: 'Debugger', description: 'Hilft bei der Fehleranalyse.' },
        { name: 'Audit', description: 'Führt abschließende Code-Reviews durch.' },
      ],
    },
    {
      num: '06',
      kicker: 'Prompt-Architektur',
      title: 'Wie sich Prompts zusammensetzen',
      lead: 'Das System-Prompt einer Session wird dynamisch generiert. Es kombiniert die Funktion (Preset) mit der Tonalität (Persona) und dem spezifischen Projektkontext (Workspace). So ist sichergestellt, dass der Agent immer genau weiß, in welchem Umfeld er sich gerade bewegt.',
    },
    {
      num: '07',
      kicker: 'Audio-I/O',
      title: 'Spracherkennung und Audio-Ausgabe',
      lead: 'Wenn du lieber sprichst als tippst, bietet die lokale Whisper.cpp-Integration eine gute Alternative – komplett ohne externe Cloud-Abhängigkeiten. Das System erkennt Sprechpausen automatisch. Für die Vorlesefunktion (Text-to-Speech) greift das System auf Piper oder die vertraute macOS-Systemstimme zurück.',
    },
    {
      num: '08',
      kicker: 'Wissensmanagement',
      title: 'Wissen lokal sichern',
      lead: 'Für Notizen und Spezifikationen steht dir ein integrierter Editor (CodeMirror 6) mit Markdown-Unterstützung zur Verfügung. Um Projektwissen langfristig verfügbar zu machen, nutzen die Companion-Sessions eine lokale SQLite-Datenbank. Das Auto-Tagging läuft dabei datenschutzfreundlich über das lokale gemma3:4b-Modell via Ollama.',
    },
    {
      num: '09',
      kicker: 'Schnittstellen',
      title: 'Model Context Protocol (MCP)',
      lead: 'Ein lokaler HTTP-Server stellt 37 Werkzeuge bereit. Diese ermöglichen den Agenten unter anderem das Session-Management oder die direkte Kommunikation untereinander über einen Message Bus.',
    },
    {
      num: '10',
      kicker: 'Visuelle Darstellung',
      title: 'Darstellung und Barrierefreiheit',
      lead: 'Das Cockpit soll für alle gut nutzbar sein. Daher stehen 10 Farbprofile zur Verfügung, darunter ein streng WCAG AAA konformes High-Contrast-Theme. Um den Einstieg zu erleichtern, abstrahiert die App viele komplexe Kommandozeilen-Vorgänge und lässt sich auf Wunsch auch physisch über Bluetooth-Remotes steuern.',
    },
    {
      num: '11',
      kicker: 'Ressourcenmanagement',
      title: 'Effizienter Umgang mit Tokens',
      lead: 'Lange Sessions stoßen irgendwann an Kontext-Grenzen. Eine Echtzeit-Anzeige hilft dir, die Auslastung im Blick zu behalten. Der Orchestrator empfiehlt oder initiiert bei 90% Auslastung selbstständig Zusammenfassungs-Routinen, damit keine Informationen verloren gehen. Zudem wählt das System je nach Aufgabenschwere automatisch das passendste LLM (Opus, Sonnet oder Haiku).',
    },
  ],
  scrollNavItems: [
    { id: 'cockpit', label: '01 · Cockpit' },
    { id: 'grid', label: '02 · Grid' },
    { id: 'sessions', label: '03 · Sessions' },
    { id: 'personas', label: '04 · Personas' },
    { id: 'presets', label: '05 · Presets' },
    { id: 'prompts', label: '06 · Prompts' },
    { id: 'voice', label: '07 · Voice & TTS' },
    { id: 'notes', label: '08 · Notes' },
    { id: 'mcp', label: '09 · MCP' },
    { id: 'themes', label: '10 · Themes' },
    { id: 'efficiency', label: '11 · Effizienz' },
  ],
} as const;

export default features;
