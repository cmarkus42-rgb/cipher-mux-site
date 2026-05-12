const docsNutzung = {
  hero: {
    kicker: 'Nutzung der App · v0.9.101',
    title: 'Jede Funktion.',
    titleAccent: 'Nachschlagen.',
    body: 'Die vollstaendige Referenz zu jedem Bereich der App — Grid, Sessions, Sidebar, Voice, Notes, Einstellungen. Zum Nachlesen, nicht zum Durchlesen.',
  },

  sections: [
    { id: 'grid',       num: '01', title: 'Das Grid',                navLabel: 'Grid' },
    { id: 'header',     num: '02', title: 'Session-Zell-Header',     navLabel: 'Zell-Header' },
    { id: 'focus',      num: '03', title: 'Focus Mode & Pop-Out',    navLabel: 'Focus & Pop-Out' },
    { id: 'sidebar',    num: '04', title: 'Die Sidebar',             navLabel: 'Sidebar' },
    { id: 'voice',      num: '05', title: 'Sprachsteuerung',         navLabel: 'Voice' },
    { id: 'notes',      num: '06', title: 'Notes',                   navLabel: 'Notes' },
    { id: 'projects',   num: '07', title: 'Projekte und Hub',        navLabel: 'Projekte' },
    { id: 'settings',   num: '08', title: 'Einstellungen',           navLabel: 'Einstellungen' },
    { id: 'bugreport',  num: '09', title: 'Bugreport-Dialog',        navLabel: 'Bugreport' },
    { id: 'shortcuts',  num: '10', title: 'Tastenkuerzel',           navLabel: 'Shortcuts' },
  ],

  /* ═══════════════════════════════════════════
     §01 · Das Grid
     ═══════════════════════════════════════════ */
  grid: {
    lead: 'Der zentrale Bereich der App. Sessions leben in Zellen. Leere Zellen zeigen ein + und oeffnen per Klick das Launcher-Popup.',

    mainParagraphs: [
      'Das Grid ist der grosse Bereich in der Mitte des Fensters. Jede Zelle enthaelt entweder eine laufende Session, einen Notes-Editor, oder sie ist leer. Leere Zellen zeigen ein <span class="docs-mono">+</span> — Klick darauf oeffnet das Launcher-Popup.',
    ],

    dragTitle: 'Drag & Drop',
    dragItems: [
      '<strong>Header ziehen:</strong> Session-Header auf einen anderen Header ziehen tauscht die Positionen der beiden Sessions.',
      '<strong>Sidebar-Session aufs Grid:</strong> Eine Background-Session aus der Sidebar auf eine Zelle ziehen holt sie ins Grid.',
      '<strong>Notes aufs Grid:</strong> Eine Note aus der Sidebar auf eine <em>leere</em> Zelle ziehen oeffnet sie im Editor. Auf eine <em>belegte</em> Zelle ziehen sendet den Note-Inhalt als Text in die Session.',
      '<strong>Dateien aus dem Finder:</strong> Eine Datei auf eine Zelle ziehen fuegt den Pfad als shell-escaped String ein — ohne Enter. Du kannst den Pfad pruefen, bevor du ihn absendest.',
    ],

    sizeTitle: 'Grid-Groesse',
    sizeItems: [
      '<span class="docs-mono">spalten +/-</span> und <span class="docs-mono">zeilen +/-</span> in der Statusleiste',
      'Minimum 1×1 (eine Zelle), Maximum 7×3 (21 Zellen)',
      'Tastatur: <span class="docs-mono">Cmd+→/←</span> fuer Spalten, <span class="docs-mono">Cmd+↓/↑</span> fuer Zeilen',
      'Das Fenster passt seine Groesse automatisch an',
    ],

    layoutsTitle: 'Typische Layouts',
    layouts: [
      { label: '2×1', desc: 'Zwei Sessions nebeneinander — Standard fuer den Alltag.' },
      { label: '3×1', desc: 'Drei Spalten — z.B. Frontend / Backend / Tests.' },
      { label: '2×2', desc: 'Vier Zellen — Cyber Factory + drei Worker.' },
    ],

    screenshot: {
      placeholder: 'Screenshot: Grid mit drei belegten Sessions und einer leeren Zelle',
      caption: 'Grid — belegte und leere Zellen',
    },
  },

  /* ═══════════════════════════════════════════
     §02 · Session-Zell-Header
     ═══════════════════════════════════════════ */
  header: {
    lead: 'Jede belegte Zelle hat einen Header mit Statusinformationen links und Aktions-Buttons rechts. Die Farbe des Headers signalisiert die Entity und den Context-Verbrauch.',

    leftTitle: 'Linke Seite',
    leftItems: [
      '<strong>Neon-Punkt:</strong> Zeigt die Entity-Farbe. Ab bestimmten Context-Schwellen wechselt er: gruen (<26%), gelb (26–40%), orange (41–55%), rot (>56%).',
      '<strong>Status-Icon:</strong> Haekchen = aktiv, Spinner = wird gestoppt, X = Fehler, Pause = pausiert.',
      '<strong>Session-Name:</strong> Klickbar fuer Fokus. Tooltip zeigt das Topic der Session.',
      '<strong>Voice-Punkt:</strong> Nur sichtbar wenn diese Session das aktive Voice-Ziel ist.',
      '<strong>Voice-Pin-Button:</strong> Pinnt die Spracheingabe dauerhaft an diese Session.',
    ],

    contextTitle: 'Context-Leiste',
    contextDesc: 'Direkt unter dem Header liegt ein farbiger Balken, der den Context-Verbrauch visualisiert. Der Balken skaliert so, dass 65% Context-Verbrauch die volle Breite ausfuellt. Gleiche Farbschwellen wie der Neon-Punkt: gruen, gelb, orange, rot.',

    buttonsTitle: 'Rechte Seite — Buttons',
    buttons: [
      { icon: 'Scan',            shortcut: 'Cmd+Shift+F',  label: 'Focus Mode',      desc: 'Session auf 2×2 expandieren (siehe §03).' },
      { icon: 'ChevronDown/Up',  shortcut: '',              label: 'Expand/Collapse', desc: 'Zelle auf volle Grid-Hoehe strecken bzw. zurueck.' },
      { icon: 'GitBranch',       shortcut: '',              label: 'Fork Session',    desc: 'Session forken — neue Session mit gleichem Kontext.' },
      { icon: 'Camera',          shortcut: '',              label: 'Screenshot',      desc: 'Snapshot der Zelle als Bild speichern.' },
      { icon: 'ArrowLeftRight',  shortcut: '',              label: 'Switch Project',  desc: 'Projekt wechseln ohne Session zu schliessen.' },
      { icon: 'ArrowUpFromLine', shortcut: '',              label: 'Background',      desc: 'Session in den Hintergrund senden (Sidebar).' },
      { icon: 'Terminal',        shortcut: '',              label: 'Shell',           desc: 'Shell oeffnen im Projektverzeichnis.' },
      { icon: 'ExternalLink',    shortcut: '',              label: 'Pop-Out',         desc: 'Session als eigenes Fenster loesen (siehe §03).' },
      { icon: '×',               shortcut: '',              label: 'Close',           desc: 'Session beenden (Graceful Shutdown).' },
    ],

    entityTitle: 'Entity-Farben',
    entities: [
      { label: 'Workshop',           color: 'Blau' },
      { label: 'Cyber Factory',      color: 'Violett' },
      { label: 'Companion',          color: 'Orange' },
      { label: 'Refinement',         color: 'Rot' },
      { label: 'Voice Relay',        color: 'Violet' },
      { label: 'Audit',              color: 'Dunkelrot' },
      { label: 'Ideation Partner',   color: 'Tuerkis' },
      { label: 'Debugger',           color: 'Koralle' },
      { label: 'Testing Assistant',  color: 'Hellgruen' },
      { label: 'Bugreport',          color: 'Grau' },
    ],

    screenshot: {
      placeholder: 'Screenshot: Annotierter Session-Header mit Beschriftung aller Elemente',
      caption: 'Session-Header — alle Elemente beschriftet',
    },
  },

  /* ═══════════════════════════════════════════
     §03 · Focus Mode und Pop-Out
     ═══════════════════════════════════════════ */
  focus: {
    lead: 'Zwei Wege, einer Session mehr Platz zu geben: Focus Mode blaest sie innerhalb des Grids auf, Pop-Out loest sie als eigenes Fenster.',

    focusTitle: 'Focus Mode',
    focusItems: [
      'Aktivieren: Scan-Icon im Header oder <span class="docs-mono">Cmd+Shift+F</span>.',
      'Die Session expandiert auf 2×2 Zellen innerhalb des Grids.',
      'Oben erscheint die <strong>Focus-Bar</strong> mit: Session-Name, Context-Prozent (<span class="docs-mono">CTX XX%</span>), Schriftgroesse-Regler (8–36px), ESC-Button.',
      'Beenden: <span class="docs-mono">ESC</span>-Taste, ESC-Button in der Bar, oder erneut Scan-Icon.',
    ],

    popoutTitle: 'Pop-Out',
    popoutItems: [
      'Aktivieren: ExternalLink-Icon im Header.',
      'Die Session oeffnet sich als eigenstaendiges Fenster.',
      'Oben: 28px Drag-Region zum Verschieben + Dock-Button zum Zurueckholen ins Grid.',
    ],

    sidebarTitle: 'Sidebar als Fenster',
    sidebarDesc: 'Die Sidebar laesst sich ebenfalls als eigenes Fenster loesen — ueber den Detach-Button im Sidebar-Header. Dock-Button bringt sie zurueck.',

    screenshot: {
      placeholder: 'Screenshot: Focus Mode mit Focus-Bar und expandierter Session',
      caption: 'Focus Mode — Focus-Bar und 2×2 Expansion',
    },
  },

  /* ═══════════════════════════════════════════
     §04 · Die Sidebar
     ═══════════════════════════════════════════ */
  sidebar: {
    lead: 'Die Seitenleiste oeffnet sich ueber den Button "sidebar" in der Statusleiste. Fuenf Sektionen, alle auf- und zuklappbar. Der Zustand wird gespeichert.',

    sectionsTitle: 'Sektionen',
    sections: [
      {
        label: 'Notes',
        desc: 'Notiz-Browser mit Suchfeld, Tag-Chips zum Filtern und Workspace-Scoping (filtert automatisch auf workspace:<Name>). Doppelklick oeffnet eine Note im Grid. Drag auf eine Zelle. Bulk-Operationen: Loeschen mit 15 Sekunden Undo, Tag-Bearbeitung fuer mehrere Notes gleichzeitig.',
      },
      {
        label: 'Background Sessions',
        desc: 'Sessions, die per Up-Arrow-Button in den Hintergrund geschickt wurden. Jede Karte zeigt Name und Context-Verbrauch. Klick klappt eine Live-Vorschau auf (Refresh alle 5 Sekunden). Doppelklick holt die Session ins Grid. Drag auf eine Zelle ebenfalls.',
      },
      {
        label: 'Orphaned Sessions',
        desc: 'Nur sichtbar wenn unbekannte tmux-Sessions existieren. Pro Session: Adopt (uebernehmen) oder End (beenden). Erscheint z.B. nach einem Absturz.',
      },
      {
        label: 'Companion Memory',
        desc: 'Gespeicherte Erinnerungen, durchsuchbar. Standardmaessig zugeklappt. Zeigt Scope, Zeitpunkt und Inhalt jedes Eintrags.',
      },
      {
        label: 'Messages',
        desc: 'Nachrichten aus dem Message Bus — sichtbar bei Multi-Session-Arbeit (Cyber Factory etc.). Zeigt Absender, Zeitpunkt und Text.',
      },
    ],

    detachTip: 'Der Detach-Button im Sidebar-Header loest die Sidebar als eigenes Fenster — ideal fuer Multi-Monitor-Setups. Dock-Button bringt sie zurueck.',

    screenshot: {
      placeholder: 'Screenshot: Sidebar geoeffnet mit Notes-Sektion und Tag-Filter',
      caption: 'Sidebar — Notes mit Tag-Filter',
    },
  },

  /* ═══════════════════════════════════════════
     §05 · Sprachsteuerung
     ═══════════════════════════════════════════ */
  voice: {
    lead: 'Lokale Spracherkennung — kein Netzwerk, keine Cloud. Voice-Pill in der Statusleiste oder Ctrl+Shift+Space.',

    modesTitle: 'Drei Modi',
    modes: [
      { label: 'OFF', desc: 'Sprachsteuerung deaktiviert.' },
      { label: 'STT', desc: 'Mikrofon → Text. Transkribierter Text wird in der fokussierten Session eingefuegt, aber NICHT automatisch gesendet. Du kannst lesen, korrigieren, dann per "abschicken" oder Enter senden.' },
      { label: 'COM', desc: 'Konversationsmodus ueber den Voice Relay. Bidirektionale Sprach-Konversation mit TTS-Ausgabe (siehe unten).' },
    ],

    ledTitle: 'LED-Status',
    leds: [
      { css: 'off',    label: 'aus',  desc: 'Voice ist deaktiviert' },
      { css: 'green',  label: 'gruen', desc: 'bereit, hoert nicht zu' },
      { css: 'red',    label: 'rot',   desc: 'nimmt gerade auf' },
      { css: 'yellow', label: 'gelb',  desc: 'verarbeitet — bitte warten' },
    ],

    textTitle: 'Sprachbefehle · Text',
    textCommands: [
      { cmd: '"abschicken" / "absenden" / "senden"', desc: 'Enter druecken (Text abschicken).' },
      { cmd: '"neue zeile"',                          desc: 'Zeilenumbruch einfuegen.' },
      { cmd: 'alles andere',                           desc: 'Wird als Text transkribiert und eingefuegt.' },
    ],

    scrollTitle: 'Sprachbefehle · Scrollen',
    scrollCommands: [
      { cmd: '"hoch" / "rauf"',            desc: 'Eine Seite hoch scrollen.' },
      { cmd: '"runter" / "weiter"',        desc: 'Eine Seite runter scrollen.' },
      { cmd: '"ganz hoch" / "anfang"',     desc: 'Ganz nach oben.' },
      { cmd: '"ganz runter" / "ende"',     desc: 'Ganz nach unten.' },
      { cmd: '"zum marker" / "lesestart"', desc: 'Zum Anfang der letzten Antwort springen.' },
    ],

    gridNavTitle: 'Sprachbefehle · Grid-Navigation',
    gridNavCommands: [
      { cmd: '"grid hoch"',   desc: 'Fokus auf die Zelle darueber.' },
      { cmd: '"grid runter"', desc: 'Fokus auf die Zelle darunter.' },
      { cmd: '"grid links"',  desc: 'Fokus auf die Zelle links.' },
      { cmd: '"grid rechts"', desc: 'Fokus auf die Zelle rechts.' },
    ],
    gridNavNote: 'Varianten wie <span class="docs-mono">grit</span>, <span class="docs-mono">zelle</span>, <span class="docs-mono">focus</span> werden ebenfalls erkannt.',

    comTitle: 'COM-Modus · Voice Relay',
    comParagraphs: [
      'Der Voice Relay ist keine Proxy-Session — er ist eine vollstaendige Session mit eigener Persona, optimiert fuer gesprochene Konversation. Er antwortet in kurzen, fliessenden Saetzen ohne Markdown-Formatierung. TTS ist sein primaerer Ausgabekanal.',
      'Im COM-Modus wird deine Sprache transkribiert, an den Voice Relay gesendet, und seine Antwort per TTS vorgelesen. Barge-In: Du kannst die TTS-Ausgabe unterbrechen, indem du einfach anfaengst zu sprechen.',
    ],

    pinTitle: 'Voice Pin',
    pinDesc: 'Im STT-Modus: Der Pin-Button (◉) im Session-Header pinnt die Spracheingabe dauerhaft an eine Session. Deine Stimme geht dann immer dorthin, egal welche Zelle gerade fokussiert ist. Nochmal klicken loest den Pin — danach folgt die Stimme wieder dem Grid-Fokus.',

    ttsTitle: 'TTS-Konfiguration',
    ttsItems: [
      '<strong>Engine:</strong> Piper (lokal, schnell, offline) oder macOS System TTS.',
      '<strong>Verbosity:</strong> Minimal (nur Kernaussagen) oder alles Relevante.',
      '<strong>Stimmen:</strong> Installierte Stimmen im Settings-Dialog sichtbar. Voice Catalog zum Nachladen weiterer Stimmen.',
    ],

    btTitle: 'Bluetooth-Fernbedienung',
    btItems: [
      '<strong>Auto-Modus:</strong> Knopfdruck = Sprache wird sofort transkribiert und eingefuegt.',
      '<strong>Manual-Modus:</strong> Knopfdruck = Aufnahme starten/stoppen, explizit senden.',
    ],

    screenshot: {
      placeholder: 'Screenshot: Statusleiste mit Voice-Bereich (STT aktiv, LED gruen)',
      caption: 'Statusleiste — Voice-Bereich',
    },
  },

  /* ═══════════════════════════════════════════
     §06 · Notes
     ═══════════════════════════════════════════ */
  notes: {
    lead: 'Markdown-Editor (CodeMirror 6) in Grid-Zellen. Erstellen, bearbeiten, taggen, teilen — Notes sind das sichtbare Gedaechtnis von cipher-mux.',

    createTitle: 'Erstellen',
    createItems: [
      'Ueber Launcher-Popup → Tab "Notes" → "Neue Notiz"',
      'Ueber den <span class="docs-mono">+</span>-Button in der Sidebar-Notes-Sektion',
      'Programmatisch per MCP-Tools (<span class="docs-mono">mux_notes_create</span>)',
    ],

    editorTitle: 'Editor',
    editorItems: [
      'CodeMirror 6 mit Markdown-Syntaxhervorhebung (H1–H4 in Akzentfarbe).',
      'Zeilenumbruch automatisch.',
      '<span class="docs-mono">Cmd+F</span> fuer Suche im Editor.',
    ],

    saveTitle: 'Speichern und Tags',
    saveItems: [
      '<strong>Cmd+S:</strong> Speichert und schlaegt automatisch Tags vor (lokales KI-Modell, max 5 Tags pro Note).',
      '<strong>Auto-Save:</strong> Nach 2 Sekunden Inaktivitaet — ohne Tag-Vorschlag.',
      '<strong>Tag-Format:</strong> <span class="docs-mono">klasse:wert</span> — z.B. <span class="docs-mono">workspace:CIPHER-MUX</span>, <span class="docs-mono">kind:bugreport</span>, <span class="docs-mono">status:open</span>.',
      '<strong>Exklusive Klassen:</strong> <span class="docs-mono">status</span> und <span class="docs-mono">kind</span> erlauben nur einen Wert pro Note.',
      '<strong>Tag-Autocomplete:</strong> Vorhandene Tags werden beim Tippen vorgeschlagen.',
    ],

    voiceTitle: 'Voice-Eingabe',
    voiceDesc: 'Wenn der Notes-Editor fokussiert ist und STT aktiv, wird transkribierter Text an der Cursor-Position eingefuegt.',

    scopingTitle: 'Workspace-Scoping',
    scopingDesc: 'Im aktiven Workspace filtert die Notes-Ansicht automatisch auf Notes mit dem Tag <span class="docs-mono">workspace:<Name></span>.',

    handoffTitle: 'Handoff-Notes',
    handoffDesc: 'Spezielle Notes fuer Wissenstransfer zwischen Sessions. Werden automatisch von den Entity-Sessions erstellt — z.B. wenn Testing seine Findings an den Workshop uebergibt. Im Frontmatter stehen drei Felder: <span class="docs-mono">from_session</span> (wer hat geschrieben), <span class="docs-mono">to_entity</span> (fuer welche Entity), <span class="docs-mono">handoff_status</span> (pending oder consumed). Du musst diese Notes nicht manuell anlegen — die Entities machen das ueber ihre Handoff-Tools.',

    testcaseTitle: 'Testcase-Notes',
    testcaseDesc: 'Notes mit <span class="docs-mono">noteType: testcase</span> werden im TestcaseView gerendert. Format: Checkbox + Bold-ID (<span class="docs-mono">- [ ] <strong>T-PREFIX.N</strong> Beschreibung</span>).',

    comparisonTitle: 'Note vs. Memory — wann was?',
    comparisonRows: [
      { aspect: 'Sichtbarkeit',     note: 'Sichtbar in Sidebar und Editor, editierbar',         mem: 'Nur im Memory-Tab der Sidebar einsehbar' },
      { aspect: 'Teilbarkeit',      note: 'Zwischen Sessions teilbar, in Obsidian lesbar',      mem: 'Intern, nur fuer die KI' },
      { aspect: 'Typischer Inhalt', note: 'Specs, Findings, Handoffs, Feature-Beschreibungen',  mem: 'Praeferenzen, Konventionen, Projekt-Kontext' },
      { aspect: 'Erstellt durch',   note: 'User oder Session (manuell oder MCP-Tool)',           mem: 'Session automatisch (companion_memory_write)' },
    ],

    screenshot: {
      placeholder: 'Screenshot: Notes-Editor mit Markdown-Formatierung und Tag-Leiste',
      caption: 'Notes-Editor — Markdown und Tags',
    },
  },

  /* ═══════════════════════════════════════════
     §07 · Projekte und Hub
     ═══════════════════════════════════════════ */
  projects: {
    lead: 'Ein Projekt = ein Workspace = Heimat fuer alle Assets. Workspace anlegen, Projektordner hinterlegen — alle Sessions im Workspace wissen ab jetzt, woran gearbeitet wird.',

    structureTitle: 'Standard-Ordnerstruktur',

    adoptionTitle: 'Bestehende Projekte einbinden — drei Modi',
    adoptionModes: [
      { label: 'Voll-Adoption',     desc: 'Komplette Konventionen werden angewandt — alle Ordner, ADRs, Specs, .project-meta.json. Das Projekt bekommt die volle cipher-mux-Struktur.' },
      { label: 'Pack-Light',        desc: 'Nur einzelne Komponenten uebernehmen — z.B. nur docs/specs oder nur .claude/. Das Projekt bleibt sonst wie es ist.' },
      { label: 'Bestandsaufnahme',  desc: 'Nur Inventur — nichts wird veraendert, nur dokumentiert was vorhanden ist.' },
    ],
  },

  /* ═══════════════════════════════════════════
     §08 · Einstellungen
     ═══════════════════════════════════════════ */
  settings: {
    lead: 'Erreichbar ueber "info" in der Statusleiste. Sechs Tabs: General, Sprache, Themes, Shortcuts, A11y, About.',

    tabs: ['General', 'Sprache', 'Themes', 'Shortcuts', 'A11y', 'About'],

    generalTitle: 'Tab: General',
    generalRows: [
      { label: 'Skip Permissions',  desc: 'Claude darf Aktionen ohne Rueckfrage ausfuehren. Achtung: deaktiviert die Sicherheits-Bestaetigung.' },
      { label: 'Keep Working',      desc: 'Beim Beenden alle Sessions speichern. Beim naechsten Start mit Resume fortsetzen.' },
      { label: 'Bugreport',         desc: 'Button zum direkten Oeffnen des Bugreport-Dialogs.' },
    ],

    languageTitle: 'Tab: Sprache',
    languageRows: [
      { label: 'Sprache',          desc: 'Deutsch / English — aendert die gesamte App-Oberflaeche.' },
      { label: 'Voice/TTS',        desc: 'TTS ein/aus, TTS-Engine (Piper lokal / macOS System), Verbosity, Voice Submit Mode (Auto / Manuell).' },
      { label: 'Installierte Stimmen', desc: 'Liste der heruntergeladenen Piper-Stimmen.' },
      { label: 'Voice Catalog',    desc: 'Weitere Stimmen herunterladen und installieren.' },
    ],

    themesTitle: 'Tab: Themes',
    themesIntro: '13 eingebaute Themes in vier Kategorien:',
    themeCategories: [
      {
        category: 'Cipher Defaults',
        themes: [
          { label: 'Cipher Ivory',  desc: 'Sauber, hell — Standard Light Mode.' },
          { label: 'Cipher Dark',   desc: 'Warm, dunkel — Standard Dark Mode.' },
        ],
      },
      {
        category: 'Coder Classics',
        themes: [
          { label: 'Blueprint',     desc: 'Ingenieur-Entwurf, Cyan + Indigo.' },
          { label: 'Warm Paper',    desc: 'Minimal, Sepia-Toene.' },
          { label: 'Gruvbox Dark',  desc: 'Retro-Coder-Klassiker.' },
          { label: 'Nord',          desc: 'Kuehles skandinavisches Design.' },
          { label: 'Synthwave',     desc: '80er-Jahre Magenta + Violet.' },
          { label: 'Matrix',        desc: 'Phosphor-Gruen auf Schwarz.' },
        ],
      },
      {
        category: 'Style',
        themes: [
          { label: 'Brutalist',     desc: 'Schwarz/Weiss + Signalrot.' },
        ],
      },
      {
        category: 'Accessibility',
        themes: [
          { label: 'High Contrast',      desc: 'Barrierefreies WCAG-AAA-Design.' },
          { label: 'CVD Deuteranopia',    desc: 'Optimiert fuer Rot-Gruen-Schwaeche.' },
          { label: 'CVD Tritanopia',      desc: 'Optimiert fuer Blau-Gelb-Schwaeche.' },
          { label: 'CVD Achromatopsia',   desc: 'Optimiert fuer vollstaendige Farbenblindheit.' },
        ],
      },
    ],

    editorTitle: 'Theme-Editor',
    editorRows: [
      { label: 'Edit',    desc: 'Farbwerte pro Token-Gruppe: Hintergruende, Text, Borders, Akzente, Context-Farben, Highlights.' },
      { label: 'Terminal', desc: 'Terminal-Font, -Groesse und -Zeilenhoehe anpassen. 9 vorinstallierte Font-Presets.' },
      { label: 'Preview',  desc: 'Live-Vorschau ohne Speichern.' },
      { label: 'Revert',  desc: 'Vorschau rueckgaengig machen.' },
      { label: 'Save',    desc: 'In aktives Custom Theme speichern.' },
      { label: 'Save As', desc: 'Als neues Custom Theme mit eigenem Namen speichern.' },
      { label: 'Export',  desc: 'Custom Tokens als JSON in die Zwischenablage kopieren.' },
    ],

    shortcutsTitle: 'Tab: Shortcuts',
    shortcutsDesc: 'Alle Tastenkuerzel gruppiert nach Kategorie. Vollstaendige Tabelle siehe §10.',

    a11yTitle: 'Tab: A11y (Barrierefreiheit)',
    a11yDesc: 'CVD-Themes auswaehlen, Barrierefreiheits-Einstellungen anpassen.',

    aboutTitle: 'Tab: About',
    aboutDesc: 'Version, Links, Credits. Feature-Uebersicht mit Erklaerungen zu Grid-System, Orchestrierung, Message Bus, MCP-Server, Context-Monitoring.',

    screenshot: {
      placeholder: 'Screenshot: Einstellungen-Dialog, Tab Themes mit Theme-Liste',
      caption: 'Einstellungen — Theme-Auswahl',
    },
  },

  /* ═══════════════════════════════════════════
     §09 · Bugreport-Dialog
     ═══════════════════════════════════════════ */
  bugreport: {
    lead: 'Der Bugreport-Dialog ist von ueberall erreichbar — per Cmd+B oder ueber Settings → General.',

    workflowTitle: 'Ablauf',
    workflowSteps: [
      { step: '1. Typ waehlen',    desc: 'Bug oder Feature Request.' },
      { step: '2. Beschreiben',    desc: 'Text eingeben oder per Voice diktieren (STT funktioniert im Dialog).' },
      { step: '3. Screenshot',     desc: 'Optional — Screenshot der relevanten Stelle anhaengen.' },
      { step: '4. Absenden',       desc: 'Erstellt einen Issue-Entwurf als Note (mit passenden Tags).' },
    ],

    githubTitle: 'GitHub Delivery',
    githubItems: [
      'Optional: Report als GitHub Issue zustellen.',
      'Browser oeffnet ein vorausgefuelltes GitHub Issue.',
      'Falls <span class="docs-mono">gh</span> CLI installiert und authentifiziert: Issue wird direkt erstellt, ohne Browser.',
      'Issue-URL wird in die lokale Note zurueckgeschrieben.',
    ],

    screenshot: {
      placeholder: 'Screenshot: Bugreport-Dialog',
      caption: 'Bugreport-Dialog',
    },
  },

  /* ═══════════════════════════════════════════
     §10 · Tastenkuerzel
     ═══════════════════════════════════════════ */
  shortcuts: {
    lead: 'Vollstaendige Referenz aller Shortcuts. Gruppiert nach Kategorie.',

    navigation: {
      title: 'Navigation',
      items: [
        { key: 'Cmd+Shift+W',   action: 'Zelle oben fokussieren.' },
        { key: 'Cmd+Shift+A',   action: 'Zelle links fokussieren.' },
        { key: 'Cmd+Shift+S',   action: 'Zelle unten fokussieren.' },
        { key: 'Cmd+Shift+D',   action: 'Zelle rechts fokussieren.' },
        { key: 'Escape',        action: 'Aktiven Dialog schliessen.' },
      ],
    },

    layout: {
      title: 'Layout',
      items: [
        { key: 'Cmd+Shift+F',   action: 'Focus Mode ein/aus.' },
      ],
    },

    actions: {
      title: 'Actions',
      items: [
        { key: 'Cmd+N',              action: 'Neue Session — Launcher-Popup in der naechsten leeren Zelle.' },
        { key: 'Cmd+B',              action: 'Bugreport-Dialog oeffnen.' },
        { key: 'Cmd+S',              action: 'Notiz speichern + Auto-Tagging.' },
        { key: 'Cmd+Enter',          action: 'Senden in Dialogen (z.B. Input Requests in der Sidebar).' },
        { key: 'Ctrl+Shift+Space',   action: 'Sprachsteuerung ein/aus.' },
        { key: 'Cmd+Shift+?',        action: 'Shortcuts-Dialog oeffnen.' },
      ],
    },

    terminal: {
      title: 'Terminal',
      items: [
        { key: 'Cmd+C',   action: 'Kopieren / laufenden Prozess abbrechen.' },
        { key: 'Cmd+V',   action: 'Einfuegen.' },
      ],
    },
  },

  /* ═══════════════════════════════════════════
     Bottom CTA
     ═══════════════════════════════════════════ */
  bottom: {
    title: 'Verstanden?',
    titleAccent: 'Dann los.',
    body: 'Du kennst jetzt jede Funktion. Fehlt nur noch die App selbst.',
    downloadLabel: 'App herunterladen',
    githubLabel: 'github / cipher-mux',
    conceptsLabel: 'Prozess & Konzepte',
    conceptsHref: '/de/docs/concepts',
  },
} as const;

export default docsNutzung;
