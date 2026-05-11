const docsKonzepte = {
  hero: {
    kicker: 'Prozess & Konzepte · v0.9.99',
    title: 'Warum spezialisierte',
    titleAccent: 'Sessions?',
    body: 'cipher-mux trennt Phasen der Softwareentwicklung in eigene KI-Sessions — mit eigenem Kontext, eigenen Anweisungen, eigenen Grenzen. Hier steht, warum das manchmal funktioniert und wann nicht.',
  },

  sections: [
    { id: 'idea',      num: '01', title: 'Die Idee',                    navLabel: 'Die Idee' },
    { id: 'lifecycle',  num: '02', title: 'Der Lebenszyklus',            navLabel: 'Lebenszyklus' },
    { id: 'entities',   num: '03', title: 'Die Entities im Detail',      navLabel: 'Entities' },
    { id: 'presets',    num: '04', title: 'Presets verstehen',            navLabel: 'Presets' },
    { id: 'personas',   num: '05', title: 'Personas (Characters)',        navLabel: 'Personas' },
    { id: 'memory',     num: '06', title: 'Memory, Tags & Scoping',      navLabel: 'Memory & Tags' },
    { id: 'honesty',    num: '07', title: 'Ehrlichkeit',                  navLabel: 'Ehrlichkeit' },
  ],

  /* ═══════════════════════════════════════════
     §01 · Die Idee
     ═══════════════════════════════════════════ */
  idea: {
    lead: 'Wenn du eine einzige Claude-Session bittest, ein Feature zu planen, zu coden, zu testen und zu reviewen, passiert Folgendes: der Kontext fuellt sich, fruehere Anweisungen werden komprimiert, die Qualitaet sinkt. Jeder, der Claude Code fuer groessere Aufgaben benutzt hat, kennt das.',
    paragraphs: [
      'Die Hypothese hinter cipher-mux: Was waere, wenn jede Phase der Entwicklung ihre eigene Session bekaeme? Eigener Kontext, eigene Anweisungen, eigener Fokus. Mit sauberen Uebergaben zwischen den Phasen.',
      'Das ist kein bewiesenes Verfahren. cipher-mux ist der Versuch einer einzelnen Person, diese Hypothese zu testen. Fuer manche Aufgaben funktioniert es ueberraschend gut. Fuer andere faellt es flach.',
      'Token-Kosten sind real: Jede Session verbraucht API-Tokens. Parallele Sessions multiplizieren das. Das Context Window ist endlich. Wenn es voll ist, vergisst Claude — und es gibt kein Undo.',
    ],
    callout: 'Ob das den Aufwand wert ist, haengt vom Projekt ab. Fuer eine einzelne Datei-Aenderung ist eine nackte Claude-Session besser. Fuer ein Feature mit zehn Dateien, Tests und Spec lohnt sich die Struktur.',
  },

  /* ═══════════════════════════════════════════
     §02 · Der Lebenszyklus
     ═══════════════════════════════════════════ */
  lifecycle: {
    lead: 'Sechs Phasen, jede mit eigenem Preset. Die Pipeline laeuft sequentiell — jede Phase uebergibt ein definiertes Artefakt an die naechste. Workshop und Companion laufen quer dazu.',
    crossCutting: 'Workshop uebernimmt Kleinaufgaben, Bug-Triage und Koordination — er steht ausserhalb der Pipeline. Der Companion begleitet den gesamten Zyklus als Berater und Erklaerer.',
    phases: [
      {
        label: 'Ideation Partner',
        input: 'Rohe Idee, Stichwortliste, vage Vorstellung',
        process: 'Recherchiert autonom mit Sub-Agents, synthetisiert Ergebnisse, prueft auf Robustheit (Pre-Mortem). Stellt Gegenfragen, bevor er strukturiert.',
        output: 'Anforderungspaket — strukturiertes Dokument mit Zielen, Scope, offenen Fragen',
      },
      {
        label: 'Refinement',
        input: 'Anforderungspaket aus Ideation',
        process: 'Pflichtfeld-Check, systematisches Luecken-Audit, Validierung gegen bestehende Architektur. Schreibt Detail-Spec mit REQ-IDs und Akzeptanzkriterien.',
        output: 'Detail-Spec — praezise Anforderungen mit IDs, bereit fuer Implementation',
      },
      {
        label: 'Cyber Factory',
        input: 'Detail-Spec aus Refinement',
        process: 'Architekturphase (Subsystem-Zerlegung, ADRs, Scaffolding), dann Wellenplan mit bis zu 5 parallelen Worker-Sessions in eigenen Git-Worktrees. Monitoring in 5-7 Minuten-Zyklen.',
        output: 'Getestete Implementation — Code, Tests, Dokumentation pro Welle',
      },
      {
        label: 'Testing Assistant',
        input: 'Implementation aus Cyber Factory',
        process: 'Systematische Tests, adversariales Probing, Sicherheits-Audit (OWASP-Top-10). Fixt nichts — dokumentiert nur.',
        output: 'Findings Report — bei Problemen an Debugger, bei "alles gruen" an Audit',
      },
      {
        label: 'Debugger',
        input: 'Findings vom Testing Assistant oder direkte Bug-Reports',
        process: 'Root-Cause-Analyse, Fix-Plan, eigene Worker-Session fuer den Fix, Verifikation (Test muss vorher rot gewesen sein, nach Fix gruen). Maximal 2 Retries, danach Eskalation an den User.',
        output: 'Bereinigte Implementation — zurueck an Testing oder weiter an Audit',
      },
      {
        label: 'Audit',
        input: 'Implementation nach Testing/Debugging',
        process: 'Code Review, Sicherheits-Audit, ADR-Konsistenz-Check, Cognitive-Debt-Bewertung. Implementiert nichts, fixt nichts.',
        output: 'Release-Empfehlung: Release · Release nach Fix · Blockiert',
      },
    ],
  },

  /* ═══════════════════════════════════════════
     §03 · Die Entities im Detail
     ═══════════════════════════════════════════ */
  entities: {
    lead: 'Zehn vordefinierte Entities, jede mit eigenem Zweck. Keine davon ist ein Alleskoenner — das ist Absicht.',
    items: [
      {
        label: 'Companion',
        desc: 'Dein Einstiegspunkt. Erklaert Konzepte, hilft bei Entscheidungen, merkt sich deine Praeferenzen ueber Sessions hinweg. Schreibt keinen Code. Drei Modi: Tutor (erklaeren), Berater (abwaegen), Helfer (ausfuehren).',
      },
      {
        label: 'Voice Relay',
        desc: 'Der Companion fuer Sprachinteraktion. Keine Proxy-Session — eine vollstaendige Session, optimiert fuer gesprochene Konversation. Kurze Antworten, klare Saetze, TTS-freundlich.',
      },
      {
        label: 'Ideation Partner',
        desc: 'Nimmt eine vage Idee und macht etwas Konkretes daraus. Recherchiert autonom, strukturiert, hinterfragt (Pre-Mortem). Das Ergebnis ist ein Anforderungspaket, kein Code.',
      },
      {
        label: 'Refinement',
        desc: 'Macht Anforderungen praezise. Luecken-Audit, REQ-IDs, Akzeptanzkriterien. Kein Code — nur Spec. Die langweiligste und wertvollste Phase.',
      },
      {
        label: 'Cyber Factory',
        desc: 'Der Builder. Architekturphase, Wellenplan, parallele Worker, Monitoring. Fuer grosse strukturierte Arbeit. Komplex, ressourcenintensiv, nicht fuer Kleinkram.',
      },
      {
        label: 'Workshop',
        desc: 'Quick Fixes, kleine Aufgaben, Bug-Triage-Koordination. Die "einfach machen"-Entity. Kein Lifecycle, kein Overhead — direkte Ausfuehrung.',
      },
      {
        label: 'Testing Assistant',
        desc: 'Systematisches Testen, adversariales Probing, Sicherheits-Audit. Fixt nichts — dokumentiert Findings. Die Trennung zwischen Finden und Fixen ist bewusst.',
      },
      {
        label: 'Debugger',
        desc: 'Bekommt Findings, analysiert Root Causes, fixt, verifiziert. Eskaliert wenn nach 2 Versuchen keine Loesung steht. Kein "ewig weiter probieren".',
      },
      {
        label: 'Audit',
        desc: 'Reviewed Code, Sicherheit, ADR-Konsistenz. Gibt eine Release-Empfehlung: Release, Release nach Fix, oder Blockiert. Implementiert nichts.',
      },
      {
        label: 'Launcher',
        desc: 'Kickoff-Workflow. Scannt Projekte, startet die Orchestrierung. Kein eigenes Arbeitsergebnis — nur der Startschuss.',
      },
    ],
    decisionTitle: 'Welche Entity wann?',
    decisionRows: [
      { situation: 'Schneller Bugfix, eine Datei',           entity: 'Workshop' },
      { situation: 'Neue Idee durchdenken',                  entity: 'Ideation Partner' },
      { situation: 'Feature mit >3 Dateien implementieren',  entity: 'Cyber Factory' },
      { situation: '"Was macht die Cyber Factory?"',          entity: 'Companion' },
      { situation: 'Spec hat Luecken',                       entity: 'Refinement' },
      { situation: 'Code reviewen vor Release',              entity: 'Audit' },
      { situation: 'Tests laufen lassen',                    entity: 'Testing Assistant' },
      { situation: 'Test-Findings fixen',                    entity: 'Debugger' },
    ],
  },

  /* ═══════════════════════════════════════════
     §04 · Presets verstehen
     ═══════════════════════════════════════════ */
  presets: {
    lead: 'Ein Preset ist eine vorkonfigurierte Rolle mit eigenen CLAUDE.md-Anweisungen. Die Schichtung dieser Anweisungen ist das Kernkonzept — sie bestimmt, wie sich eine Session verhaelt.',
    layersIntro: 'Jede Session erhaelt ihre Anweisungen aus vier Schichten, die aufeinander aufbauen:',
    layers: [
      {
        num: '1.',
        label: 'Global Rules',
        prio: 'basis',
        desc: 'Werden in JEDE Session injiziert. Sicherheitsregeln, Tool-Grundregeln, TTS-Guardrails. Nicht editierbar pro Session.',
      },
      {
        num: '2.',
        label: 'Entity Preset',
        prio: 'rolle',
        desc: 'Die preset.md der jeweiligen Entity — rollenspezifische Anweisungen, Phasen, Handoff-Regeln. Definiert WAS die Session tut.',
      },
      {
        num: '3.',
        label: 'Workspace Prompt',
        prio: 'kontext',
        desc: 'Wird in alle Sessions dieses Workspaces injiziert. Projektspezifischer Kontext, Konventionen, Verzeichnisse.',
      },
      {
        num: '4.',
        label: 'Cell Prompt',
        prio: 'individuell',
        desc: 'Nur fuer diese spezifische Zelle. Einmalige Anweisungen, Overrides, Sonderregeln.',
      },
    ],
    variability: 'Gleiches Preset + anderer Workspace + andere Persona = anderes Verhalten. Ein Refinement-Preset im Workspace "cipher-mux" arbeitet anders als im Workspace "Kunden-Website" — weil der Workspace-Prompt anderen Kontext liefert.',
    folderTitle: 'Ordnerstruktur',
    folderDesc: 'Jede Entity hat ihr eigenes Verzeichnis unter <span class="docs-mono">~/.config/cipher-mux/entities/</span>:',
    folderItems: [
      '<span class="docs-mono">preset.md</span> — die Haupt-Anweisungen der Rolle',
      '<span class="docs-mono">guides/</span> — ergaenzende Leitfaeden und Referenzen',
      '<span class="docs-mono">ref/</span> — Referenzmaterial, Beispiele, Templates',
    ],
    builtinTitle: 'Builtin vs. Custom',
    builtinDesc: 'Eingebaute Presets sind schreibgeschuetzt — du kannst sie nutzen, aber nicht veraendern. "Copy as Custom" erstellt eine editierbare Kopie, die du frei anpassen kannst. Deine Aenderungen ueberleben Updates.',
    screenshot: {
      placeholder: 'Screenshot: Preset-Editor im Workspace-Fenster, Global Rules sichtbar',
      caption: 'Preset-Editor — Layer-Schichtung sichtbar',
    },
  },

  /* ═══════════════════════════════════════════
     §05 · Personas (Characters)
     ═══════════════════════════════════════════ */
  personas: {
    lead: 'Personas definieren WIE cipher-mux kommuniziert — Tonalitaet und Stil, nicht Funktion. Sechs sind eingebaut. Eigene legst du im Workspace-Editor an.',
    items: [
      {
        label: 'Relay (Default)',
        desc: 'Ruhig, praezise, wissenschaftsjournalistisch. Kein Lob ohne Pruefung. Der sachliche Standard.',
      },
      {
        label: 'Cipher',
        desc: 'Positiver Cyberpunk, pragmatisch loyal. Trocken, direkt, Waechter-Mentalitaet.',
      },
      {
        label: 'Wayne',
        desc: 'Pragmatischer Enthusiast. "Das kriegen wir hin"-Attitude. Nerd-Humor erlaubt.',
      },
      {
        label: 'Der Kyniker',
        desc: 'Nur Fakten und Code. Ja/Nein wenn moeglich. Maximal komprimiert, telegrafisch.',
      },
      {
        label: 'Theaitetos',
        desc: 'Fuehrt durch Fragen, nicht Antworten. Deckt Luecken im Denken auf, leitet zur Reflexion an.',
      },
      {
        label: 'Der Glitch',
        desc: 'Bricht Denkmuster. Unkonventionelle Metaphern, kreative Reibung. Nicht fuer jeden Tag.',
      },
    ],
    globalTitle: 'Global Override',
    globalDesc: 'Im Workspace-Editor kannst du eine Persona global aktivieren — dann gilt sie fuer alle Sessions, unabhaengig vom Preset. Nuetzlich wenn du gerade eine bestimmte Tonalitaet bevorzugst.',
    customTitle: 'Eigene Personas',
    customDesc: 'Name, Farbe und Prompt-Text — mehr braucht eine Persona nicht. Die eingebauten Personas sind editierbar, eigene kannst du beliebig viele anlegen.',
    screenshot: {
      placeholder: 'Screenshot: Companion-Tab im Workspace-Editor mit Character-Liste',
      caption: 'Persona-Editor — sechs eingebaute Characters',
    },
  },

  /* ═══════════════════════════════════════════
     §06 · Memory, Tags & Workspace-Scoping
     ═══════════════════════════════════════════ */
  memory: {
    lead: 'cipher-mux hat zwei Systeme fuer Wissen, das ueber eine einzelne Session hinausgeht: Notes (sichtbar, teilbar) und Companion Memory (intern, automatisch).',
    memoryTitle: 'Companion Memory',
    memoryDesc: 'Was sich die KI ueber Sessions hinweg merkt. Drei Scopes:',
    memoryScopes: [
      { label: 'user', desc: 'Gilt immer, ueberall. Deine Praeferenzen, Konventionen, Eigenheiten.' },
      { label: 'workspace', desc: 'Gilt nur in diesem Workspace. Projekt-Entscheidungen, Stack-Wahl, offene Fragen.' },
      { label: 'session', desc: 'Gilt nur in dieser Session. Temporaere Notizen, laufende Aufgaben.' },
    ],
    notesTitle: 'Notes',
    notesDesc: 'Sichtbare, teilbare Wissensstuecke. Markdown-Dateien mit Tags. Du siehst sie in der Sidebar, kannst sie in Obsidian lesen, und Sessions koennen sie als Handoff-Medium nutzen.',
    tagsTitle: 'Tags',
    tagsDesc: 'Tags folgen dem Format <span class="docs-mono">klasse:wert</span> — zum Beispiel <span class="docs-mono">workspace:CIPHER-MUX</span>, <span class="docs-mono">kind:bugreport</span>, <span class="docs-mono">status:open</span>. Auto-Tagging per lokalem KI-Modell bei Cmd+S.',
    scopingTitle: 'Workspace-Scoping',
    scopingDesc: 'Wenn du einen Workspace aktivierst, passiert automatisch: Notes werden auf <span class="docs-mono">workspace:Name</span> gefiltert. Prompts werden gescoopt. Kontext-Verzeichnisse werden gesetzt. Workspace wechseln = anderer Kontext, andere Notes, andere Tags.',
    comparisonTitle: 'Note vs. Memory — wann was?',
    comparisonRows: [
      {
        aspect: 'Sichtbarkeit',
        note: 'Sichtbar in der Sidebar, editierbar',
        mem: 'Nicht sichtbar in der UI, nur im Memory-Tab der Sidebar einsehbar',
      },
      {
        aspect: 'Teilbarkeit',
        note: 'Zwischen Sessions teilbar, in Obsidian lesbar',
        mem: 'Intern, nur fuer die KI',
      },
      {
        aspect: 'Typischer Inhalt',
        note: 'Specs, Findings, Handoffs, Feature-Beschreibungen',
        mem: 'Praeferenzen, Konventionen, Projekt-Kontext',
      },
      {
        aspect: 'Beispiel',
        note: '"Hier ist der Findings-Report von Testing Run 3"',
        mem: '"User bevorzugt Relay-Persona fuer Code-Arbeit"',
      },
    ],
  },

  /* ═══════════════════════════════════════════
     §07 · Ehrlichkeit
     ═══════════════════════════════════════════ */
  honesty: {
    lead: 'Das hier ist kein Verkaufsprospekt. cipher-mux ist ein Werkzeug, das fuer manche Aufgaben gut funktioniert und fuer andere nicht.',
    items: [
      {
        label: 'Token-Kosten',
        text: 'Jede Session verbraucht API-Tokens. Parallele Sessions multiplizieren die Kosten. Ein Cyber-Factory-Run mit 5 Workern verbrennt Tokens schnell. Das ist nicht kostenlos.',
      },
      {
        label: 'Context-Grenzen',
        text: 'Das Context Window ist endlich. Wenn es voll ist, komprimiert Claude aeltere Nachrichten. Information geht verloren. Es gibt keine magische Loesung — starte eine neue Session.',
      },
      {
        label: 'Handoffs koennen scheitern',
        text: 'Manchmal findet der Testing Assistant die richtigen Dateien nicht. Manchmal bricht der Fix des Debuggers etwas anderes. Das System ist nur so gut wie die Prompts und das LLM.',
      },
      {
        label: 'Solo-Maintainer',
        text: 'cipher-mux wird von einer Person in der Freizeit gebaut. "I respond when I have time." Das ist kein Startup mit Support-Team.',
      },
      {
        label: 'Nicht fuer alles',
        text: 'Fuer eine schnelle Ein-Datei-Aenderung ist eine nackte Claude-Code-Session besser. Der Overhead von Entities, Presets und Lifecycle lohnt sich nur fuer strukturierte Arbeit mit mehreren Dateien.',
      },
    ],
    closing: 'Die ehrlichste Empfehlung: probier es aus. Wenn es dir hilft, nutze es. Wenn nicht, kein Verlust.',
  },

  /* ═══════════════════════════════════════════
     Bottom CTA
     ═══════════════════════════════════════════ */
  bottom: {
    title: 'Weiter?',
    titleAccent: 'Zum Nachschlagen.',
    body: 'Die vollstaendige Referenz zu jeder Funktion, jedem Button und jedem Menue findest du in der Nutzung der App.',
    usageLabel: 'Nutzung der App',
    usageHref: '/de/docs/usage',
    downloadLabel: 'App herunterladen',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsKonzepte;
