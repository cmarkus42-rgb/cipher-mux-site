const docs = {
  hero: {
    kicker: 'Referenz · v0.9.9',
    title: 'Technische Dokumentation.',
    body: 'Detaillierte Referenz zu Parametern, Architektur, Tastenkürzeln und Konfiguration. Alternativ zur Textlektüre kann die lokale Companion-Session zur kontextbezogenen Beantwortung von Systemfragen genutzt werden.',
  },
  sections: [
    {
      id: 'interface',
      title: '§ 01 · Interface',
      lead: 'Die Oberfläche gliedert sich in das Grid für Sessions und Editoren sowie die Statusleiste für Metriken und globale Toggles. Das Launcher-Popup (Cmd+N) dient dem Starten neuer Sessions oder dem Öffnen von Notizen.',
    },
    {
      id: 'grid-sessions',
      title: '§ 02–03 · Grid und Sessions',
      lead: 'Sessions repräsentieren isolierte Kontextfenster. Sie lassen sich in bis zu 21 Zellen anordnen. Header-Elemente steuern den Projektfokus oder gewähren direkten Zugriff auf die zugrundeliegende Shell.',
    },
    {
      id: 'input-storage',
      title: '§ 04–06 · Input und Speicherung',
      lead: 'Erläutert die Steuerung der Spracheingabe (Voice-Pill, LED-Status-Indikatoren), den Aufbau der Sidebar (Message Bus, Background Tasks) und die Struktur der Markdown-Editoren inklusive Auto-Save und Tagging-Mechanismen.',
    },
    {
      id: 'project-lifecycle',
      title: '§ 07–08 · Projektstruktur und Lebenszyklus',
      lead: 'Definiert die erwartete Ordnerhierarchie (z.B. .claude/, docs/specs/, src/) und erklärt den sequenziellen Durchlauf der Agenten-Presets von der Spezifikation (Ideation) bis zur Abnahme (Audit).',
    },
    {
      id: 'personas-workspaces',
      title: '§ 09–12 · Personas, Workspaces und Settings',
      lead: 'Dokumentiert die Anpassung der Systemantworten (Personas) und die Erstellung vorgefertigter Grid-Layouts (Workspaces). Der Settings-Dialog konfiguriert Themes, lokale LLM-Endpunkte (Ollama-Host) und Hardware-Integrationen.',
    },
    {
      id: 'shortcuts-bugreports',
      title: '§ 13–15 · Shortcuts und Bugreports',
      lead: 'Listet alle Tastenkürzel für Navigation, Layout-Änderungen und App-Aktionen. Erklärt die Funktionalität des systemweiten Bugreport-Werkzeugs, das Diagnosedaten für die Weiterverarbeitung formatiert.',
    },
  ],
} as const;

export default docs;
