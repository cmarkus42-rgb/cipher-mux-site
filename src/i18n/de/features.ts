const features = {
  hero: {
    kicker: '// 02 · Architektur',
    title: 'Systemkomponenten und Integrationen.',
    subtext:
      'Technische Übersicht der zentralen Bausteine: Grid-System, Session-Management, Personas, Voice-Integration und MCP-Server.',
  },
  sections: [
    {
      num: '01',
      kicker: 'Überblick',
      title: 'Die Applikation',
      lead: 'Eine auf Electron basierende Umgebung. Ein Grid mit bis zu 21 Zellen integriert Claude-Code-Sessions und Markdown-Editoren. tmux dient als Backend und gewährleistet die Persistenz der Sitzungen bei Systemausfällen.',
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
      title: 'Das Grid-System',
      lead: 'Das Grid bietet maximal 7 Spalten und 3 Reihen. Sessions lassen sich per Drag & Drop verschieben und vertikal (Row-Span) für längere Textausgaben erweitern. Kopfzeilen-Bedienelemente steuern Projektwechsel und den Zugriff auf die Shell. Zellen können wahlweise Terminals oder Markdown-Editoren aufnehmen.',
    },
    {
      num: '03',
      kicker: 'Prozess-Management',
      title: 'Sitzungen und tmux-Backend',
      lead: 'Jede Zelle kapselt einen isolierten Claude-Code-Prozess mit eigenem Kontextfenster. Das tmux-Backend hält die Prozesse im Hintergrund aktiv. Nach einem Neustart ermöglicht ein Recovery-Dialog die Wiederaufnahme bestehender Sitzungen.',
    },
    {
      num: '04',
      kicker: 'Konfiguration',
      title: 'Personas — Kommunikationsprofile',
      lead: 'Personas steuern die Tonalität und Stilistik der Modellausgaben. Sie werden orthogonal zu den funktionalen Presets angewendet. Zur Verfügung stehen sechs Standard-Profile (z.B. wissenschaftlich-sachlich, extrem reduziert, sokratisch), weitere lassen sich lokal definieren.',
    },
    {
      num: '05',
      kicker: 'Rollen',
      title: 'Presets — Funktionale System-Prompts',
      lead: 'Presets definieren den Arbeitsauftrag, zugelassene MCP-Tools und Einschränkungen der jeweiligen Agenten. Es existieren acht spezialisierte Rollen, darunter:',
      roles: [
        { name: 'Ideation Partner', description: 'Recherche und Synthese.' },
        { name: 'Refinement', description: 'Anforderungsanalyse und Spezifikation.' },
        { name: 'Cyber Factory', description: 'Subsystem-Zerlegung und Multi-Session-Orchestrierung.' },
        { name: 'Testing Assistant', description: 'Adversariales Probing.' },
        { name: 'Debugger', description: 'Analyse und Fehlerbehebung.' },
        { name: 'Audit', description: 'Code-Review und ADR-Konsistenzprüfung.' },
      ],
    },
    {
      num: '06',
      kicker: 'Prompt-Architektur',
      title: 'Dynamische System-Prompts',
      lead: 'Das initiale System-Prompt einer Session wird zur Laufzeit aus drei Schichten kompiliert: der Funktion (Preset), der Tonalität (Persona) und dem Projektkontext (Workspace). Die Hierarchie der Zuweisung reicht vom zellenspezifischen Prompt bis zur globalen Fallback-Persona.',
    },
    {
      num: '07',
      kicker: 'Audio-I/O',
      title: 'Spracherkennung und Text-to-Speech',
      lead: 'Integration von Whisper.cpp für lokale Spracherkennung ohne externe Cloud-Abhängigkeiten. Die Voice Activity Detection (VAD) analysiert Sprechpausen. Unterstützt Sprachbefehle für Navigation und Steuerung. Für die Audio-Ausgabe (TTS) wird Piper oder die macOS-Systemstimme verwendet.',
    },
    {
      num: '08',
      kicker: 'Wissensmanagement',
      title: 'Editoren und Persistenz',
      lead: 'Integration von CodeMirror 6 für Markdown mit YAML-Frontmatter. Lokales Auto-Tagging wird durch das Modell gemma3:4b via Ollama unterstützt. Companion-Sessions nutzen eine SQLite/FTS5-Datenbank zur Speicherung von projektübergreifendem Faktenwissen.',
    },
    {
      num: '09',
      kicker: 'Schnittstellen',
      title: 'Model Context Protocol (MCP)',
      lead: 'Ein integrierter HTTP-Server stellt 37 Tools in 9 Kategorien bereit, darunter Session-Management, Message Bus für Inter-Agent-Kommunikation und Context-Monitoring. Die Authentifizierung erfolgt per Bearer-Token.',
    },
    {
      num: '10',
      kicker: 'Visuelle Darstellung',
      title: 'Themes und Barrierefreiheit',
      lead: '10 integrierte Farbprofile, steuerbar über die Statusleiste oder via MCP. Beinhaltet ein WCAG AAA konformes High-Contrast-Theme. Die App abstrahiert Kommandozeilen-Komplexität, bietet Begleit-Erklärungen für Konzepte und ermöglicht eine physische Steuerung über Bluetooth-Remotes.',
    },
    {
      num: '11',
      kicker: 'Ressourcenmanagement',
      title: 'Token- und Kontext-Effizienz',
      lead: 'Zur Vermeidung von Kontext-Überläufen wird die Auslastung in Echtzeit überwacht (StatusLine). Der Orchestrator prüft Worker-Sessions in Intervallen und leitet bei einer Speicherauslastung von 90% Zusammenfassungs-Routinen ein. Multi-Model-Routing weist je nach Komplexität der Aufgabe unterschiedliche LLMs (Opus, Sonnet, Haiku) zu.',
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
