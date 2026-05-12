const docsStart = {
  hero: {
    kicker: 'Schnelleinstieg · v0.9.101',
    title: 'Vom Start',
    titleAccent: 'zur ersten Session.',
    body: 'Sechs Schritte, ein Ziel: du arbeitest produktiv mit cipher-mux. Kein Vorwissen noetig.',
  },

  sections: [
    { id: 'first-launch', num: '01', title: 'Erster Start', navLabel: 'Erster Start' },
    { id: 'companion', num: '02', title: 'Companion starten', navLabel: 'Companion' },
    { id: 'own-session', num: '03', title: 'Erste eigene Session', navLabel: 'Eigene Session' },
    { id: 'workspace', num: '04', title: 'Workspace einrichten', navLabel: 'Workspace' },
    { id: 'voice', num: '05', title: 'Voice ausprobieren', navLabel: 'Voice' },
    { id: 'next', num: '06', title: 'Weiter', navLabel: 'Weiter' },
  ],

  firstLaunch: {
    lead: 'Wenn du cipher-mux zum ersten Mal oeffnest, siehst du ein leeres Grid mit leeren Zellen. Jede zeigt ein + in der Mitte. Das ist dein Startpunkt fuer alles.',
    items: [
      'Das Grid ist der Hauptbereich — hier leben spaeter deine Sessions, jede in einer eigenen Zelle.',
      'Am unteren Rand liegt die Statusleiste mit Buttons fuer Voice, Grid-Groesse, Workspaces und mehr.',
      'Falls Sessions von einem vorherigen Lauf existieren, erscheint zuerst ein <strong>Recovery-Dialog</strong>: uebernehmen oder verwerfen. Beim allerersten Start passiert das nicht.',
    ],
    screenshot: {
      placeholder: 'Screenshot: Leeres Grid mit drei leeren Zellen (2x1 Layout), Dark Theme',
      caption: 'Erster Start — leeres Grid',
    },
  },

  companion: {
    lead: 'Der Companion ist dein Einstiegspunkt. Er erklaert, beraet, fuehrt aus — und merkt sich deine Praeferenzen ueber Sessions hinweg.',
    startHow: 'So startest du ihn:',
    startSteps: [
      'Klick auf <span class="docs-mono">+</span> in einer leeren Zelle',
      'Tab <strong>Presets</strong> waehlen',
      'Preset <strong>Companion</strong> anklicken',
    ],
    modesTitle: 'Drei Modi',
    modes: [
      { label: 'Tutor', trigger: '"Erklaer mir..."', desc: 'Konzepte verstehen. Ein Thema pro Antwort, mit Beispiel oder Analogie.' },
      { label: 'Berater', trigger: '"Was waere besser..."', desc: 'Optionen mit Trade-offs. Du entscheidest, er liefert die Grundlage.' },
      { label: 'Helfer', trigger: '"Mach mir..."', desc: 'Direkt ausfuehren. Geringste Reibung, schnellstes Ergebnis.' },
    ],
    note: 'Er kennt alles was auf diesen Seiten steht. Statt hier zu suchen, kannst du ihn fragen.',
    screenshot: {
      placeholder: 'Screenshot: Launcher-Popup, Tab Presets mit Companion hervorgehoben',
      caption: 'Preset-Auswahl mit Companion',
    },
  },

  ownSession: {
    lead: 'Fuer eigene Projekte startest du eine Session mit Pfad — ohne Preset, ohne vordefiniertes Verhalten.',
    startHow: 'So gehts:',
    startSteps: [
      'Klick auf <span class="docs-mono">+</span> in einer leeren Zelle',
      'Tab <strong>Path</strong> waehlen',
      'Projektordner auswaehlen oder eingeben',
    ],
    optionsTitle: 'Optionen beim Start',
    options: [
      { label: 'Shell Only', desc: 'Reines Terminal ohne Claude. Fuer git, npm, schnelle Kommandos.' },
      { label: 'Skip Permissions', desc: 'Claude fuehrt Aktionen ohne Rueckfrage aus. Maechtig, aber das Sicherheitsnetz faellt weg. Nicht leichtfertig aktivieren.' },
      { label: 'Resume', desc: 'Eine fruehere Session an gleicher Stelle fortsetzen. Context bleibt erhalten.' },
    ],
    screenshot: {
      placeholder: 'Screenshot: Launcher-Popup, Tab Path mit Ordner-Picker',
      caption: 'Session mit eigenem Projektpfad starten',
    },
  },

  workspace: {
    lead: 'Workspaces speichern dein Grid-Layout mitsamt Preset-Zuweisungen. Ein Klick, alles steht.',
    items: [
      'Klick auf <strong>workspaces</strong> in der Statusleiste — der Workspace-Editor oeffnet sich.',
      'Grid-Groesse festlegen (Spalten x Zeilen).',
      'Pro Zelle ein Preset und optional einen Projektpfad zuweisen.',
      'Workspace speichern und benennen. Einen als Default markieren.',
      'Zurueck im Hauptfenster: Workspace anwenden — das Grid fuellt sich automatisch.',
    ],
    screenshot: {
      placeholder: 'Screenshot: Workspace-Editor mit belegtem 2x2 Grid',
      caption: 'Workspace-Editor — Grid-Layout konfigurieren',
    },
  },

  voice: {
    lead: 'Sprachsteuerung laeuft komplett lokal ueber Whisper. Kein Netzwerk, keine Cloud.',
    items: [
      'Voice-Pill in der Statusleiste anklicken — LED wechselt auf gruen (bereit).',
      'STT-Button druecken — LED wechselt auf rot (nimmt auf).',
      'Sprechen. Am Ende <strong>"abschicken"</strong> sagen — der Text wird in die fokussierte Zelle eingefuegt.',
      'Der Text wird eingefuegt, aber <strong>nicht automatisch gesendet</strong>. Du kannst ihn pruefen und bearbeiten, bevor du Enter drueckst.',
    ],
    linkNote: 'Alles weitere zur Sprachsteuerung — Voice Commands, BT-Clicker, TTS — findest du in der',
    linkLabel: 'Nutzung der App',
    linkHref: '/de/docs/usage#voice',
  },

  next: {
    lead: 'Du hast das Wichtigste gesehen. Zwei Wege weiterzulesen:',
    concepts: {
      title: 'Prozess & Konzepte',
      body: 'Wie die Entities zusammenarbeiten — und warum cipher-mux mehr ist als ein Terminal-Grid.',
      href: '/de/docs/concepts',
    },
    usage: {
      title: 'Nutzung der App',
      body: 'Jede Funktion, jeder Button, jedes Menue. Die vollstaendige Referenz.',
      href: '/de/docs/usage',
    },
  },

  bottom: {
    title: 'Bereit?',
    titleAccent: 'Der Companion wartet.',
    body: 'Starte cipher-mux, oeffne den Companion, und sag ihm was du vorhast. Den Rest klaert ihr zusammen.',
    downloadLabel: 'App herunterladen',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsStart;
