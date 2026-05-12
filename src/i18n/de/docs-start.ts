const docsStart = {
  hero: {
    kicker: 'Schnelleinstieg \u00b7 v0.9.101',
    title: 'Vom Start',
    titleAccent: 'zum ersten Projekt.',
    body: 'Installation steht? Dann los. Hier richtest du deinen ersten Workspace ein und lernst die wichtigsten Bereiche der App kennen.',
  },

  sections: [
    { id: 'orientation', num: '01', title: 'Orientierung', navLabel: 'Orientierung' },
    { id: 'workspace', num: '02', title: 'Workspace anlegen', navLabel: 'Workspace' },
    { id: 'sessions', num: '03', title: 'Sessions starten', navLabel: 'Sessions' },
    { id: 'overview', num: '04', title: 'Die App im Ueberblick', navLabel: 'Ueberblick' },
    { id: 'voice', num: '05', title: 'Voice ausprobieren', navLabel: 'Voice' },
    { id: 'next', num: '06', title: 'Weiter', navLabel: 'Weiter' },
  ],

  orientation: {
    lead: 'Wenn du cipher-mux oeffnest, siehst du das Grid — der zentrale Arbeitsbereich. Leere Zellen zeigen ein +, die Statusleiste liegt am unteren Rand. Das ist alles.',
    items: [
      'Installation und Ersteinrichtung beschreibt die <a href="/de/start" class="docs-inline-link">Download-Seite</a> im Detail.',
      'Beim allerersten Start belegt der <strong>Companion</strong> die erste Zelle. Gib <span class="docs-mono">/startup</span> ein — er fragt nach deinem Hintergrund und erstellt ein Profil. Danach passen alle Entities ihren Detailgrad an dein Level an.',
      'Der Companion kann dir auch alles erklaeren was auf diesen Seiten steht. Statt hier zu suchen, frag ihn.',
    ],
    screenshot: {
      placeholder: 'Screenshot: Leeres Grid mit Companion in der ersten Zelle',
      caption: 'Erster Start — Companion bereit',
    },
  },

  workspace: {
    lead: 'Ein Workspace buendelt alles fuer ein Projekt: Grid-Layout, Preset-Zuweisungen, Projektverzeichnis, Workspace-Prompt. Wenn du einen Workspace laeadst, wissen alle Sessions sofort, woran gearbeitet wird.',
    flow: [
      'Klick auf <strong>workspaces</strong> in der Statusleiste — der Workspace-Editor oeffnet sich.',
      'Neuen Workspace anlegen und benennen (z.B. "Mein Projekt").',
      'Einen <strong>Workspace-Prompt</strong> einfuegen — ein paar Saetze ueber dein Projekt reichen: was es ist, welche Sprache/Framework, was gerade ansteht.',
      'Falls du schon einen Projektordner hast: als <strong>Context Directory</strong> hinzufuegen. Falls nicht, spaeter nachtragen sobald er existiert.',
      'Grid-Groesse festlegen (z.B. 2x1 fuer den Anfang) und optional Presets zuweisen.',
      'Speichern. Als Default markieren wenn du willst.',
    ],
    callout: 'Workspace wechseln = anderer Kontext. Alle Sessions, Notes und Tags werden automatisch auf den aktiven Workspace gefiltert. Das ist der zentrale Organisationsmechanismus in cipher-mux.',
    screenshot: {
      placeholder: 'Screenshot: Workspace-Editor mit Workspace-Prompt und Context Directory',
      caption: 'Workspace-Editor — Projekt einrichten',
    },
  },

  sessions: {
    lead: 'Mit einem eingerichteten Workspace kannst du Sessions starten. Zwei Wege:',
    presetTitle: 'Via Preset',
    presetSteps: [
      'Klick auf <span class="docs-mono">+</span> in einer leeren Zelle → Tab <strong>Presets</strong>',
      'Preset waehlen (Companion, Refinement, Cyber Factory, ...)',
      'Die Session startet mit dem Workspace-Kontext + den Preset-Anweisungen',
    ],
    pathTitle: 'Via Pfad',
    pathSteps: [
      'Klick auf <span class="docs-mono">+</span> → Tab <strong>Path</strong>',
      'Projektordner waehlen — nackte Claude-Session ohne Preset',
    ],
    optionsTitle: 'Optionen',
    options: [
      { label: 'Shell Only', desc: 'Reines Terminal ohne Claude. Fuer git, npm, schnelle Kommandos.' },
      { label: 'Skip Permissions', desc: 'Claude fuehrt Aktionen ohne Rueckfrage aus. Auch global aktivierbar unter Einstellungen → General.' },
      { label: 'Resume', desc: 'Fruehere Session fortsetzen. Context bleibt erhalten.' },
    ],
    screenshot: {
      placeholder: 'Screenshot: Launcher-Popup mit Preset-Tab',
      caption: 'Session starten — Preset oder Pfad',
    },
  },

  overview: {
    lead: 'Bevor du tiefer einsteigst — wo findest du was? Ein schneller Rundgang durch die Oberflaeche.',
    areas: [
      { label: 'Grid', desc: 'Der zentrale Bereich. Hier laufen deine Sessions — jede in einer eigenen Zelle. Drag & Drop tauscht Positionen. Spalten/Zeilen ueber die Statusleiste anpassen (1-7 x 1-3).', link: '/de/docs/usage#grid' },
      { label: 'Session-Header', desc: 'Jede Zelle hat eine Kopfleiste mit Status-Punkt, Context-Balken und Buttons: Focus Mode, Fork, Screenshot, Pop-Out, Shell, Background, Close.', link: '/de/docs/usage#header' },
      { label: 'Statusleiste', desc: 'Am unteren Rand: Voice-Steuerung, Grid-Groesse, Workspaces, Sidebar-Toggle, Theme, Einstellungen. Deine Kommandozentrale.', link: '/de/docs/usage#grid' },
      { label: 'Sidebar', desc: 'Rechte Seitenleiste mit fuenf Sektionen: Notes, Background Sessions, Orphaned Sessions, Companion Memory, Messages. Oeffnen ueber "sidebar" in der Statusleiste.', link: '/de/docs/usage#sidebar' },
      { label: 'Workspace-Editor', desc: 'Eigenes Fenster fuer Grid-Layouts, Personas, Preset-Konfiguration und Tags. Oeffnen ueber "workspaces" in der Statusleiste.', link: '/de/docs/usage#settings' },
      { label: 'Einstellungen', desc: 'Sechs Tabs: General (Skip Permissions, Keep Working), Sprache, Themes (13 Stueck + eigene), Shortcuts, A11y, About.', link: '/de/docs/usage#settings' },
    ],
    callout: 'Alle Details zu jedem Bereich findest du in der <a href="/de/docs/usage" class="docs-inline-link">Nutzung der App</a>.',
  },

  voice: {
    lead: 'Sprachsteuerung laeuft komplett lokal ueber Whisper. Kein Netzwerk, keine Cloud.',
    items: [
      'Voice-Pill in der Statusleiste anklicken — LED wechselt auf gruen (bereit).',
      'STT-Button druecken — LED wechselt auf rot (nimmt auf).',
      'Sprechen. Am Ende <strong>"abschicken"</strong> sagen — der Text wird in die fokussierte Zelle eingefuegt.',
      'Der Text wird eingefuegt, aber <strong>nicht automatisch gesendet</strong>. Du kannst ihn pruefen und bearbeiten, bevor du Enter drueckst.',
    ],
    linkNote: 'Alles weitere zur Sprachsteuerung — Voice Commands, COM-Modus, BT-Clicker, TTS — findest du in der',
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
