# CIPHER-MUX — Texte zum Korrekturlesen

Alle deutschen Texte aus den vier Seiten (Landing, Features, Install, Docs) gesammelt nach Quelldatei und Sektion. Nicht-Text-Code (CSS, Layout) ist weggelassen. Inline-Dekoration in `Mono`/Code/`<B>` ist als roher Text eingebunden.

---

## A · LANDING — `components.jsx`

### Header
- Wordmark: **CIPHER-MUX**
- Nav: `Features` · `Download` · `Community`
- Theme-Toggle Tooltip: `Theme wechseln`

### Hero — Pixel-Variante
- Label-Tag: `Open Source · macOS · MIT`
- Tagline: **Dein Coding-Cockpit.**
- Subtext: **CIPHER-MUX** macht KI-gestuetztes Bauen zugaenglich, transparent und lehrbar. Fuer alle die Ideen haben — und endlich selbst anfangen wollen.
- Buttons: `Loslegen` · `Features` · `GitHub`

### Hero — Terminal-Variante (ASCII-Block-Hintergrund)
- Im ASCII-Block: `> orchestrator`, `delegating to worker-3`, `▶ build dark-toggle`, `✓ task-1  read structure`, `▶ task-2  scaffold ui`, `□ task-3  wire state`, `> companion`, `onboarding tutorial`, `memory: 14 entries`, `"Du sagst was du willst. Nicht wie."`, `> refinement`, `reviewing diff`, `+  3 hunks    ~ 2 files`, `> voice-relay`, `listening …`, `"grid rechts"`
- Label-Tag: `v0.9.9 · macOS · MIT`
- Tagline: **Dein Coding-Cockpit.**
- Subtext: **CIPHER-MUX** macht KI-gestuetztes Bauen zugaenglich, transparent und lehrbar. Fuer alle die Ideen haben — und endlich selbst anfangen wollen.
- Buttons: `Loslegen` · `Features` · `GitHub`

### Hero — Schematic (Cockpit-Mock)
- Label-Tag: `v0.9.9 · macOS · MIT`
- Tagline: **Dein** **Coding-Cockpit.**
- Subtext: **CIPHER-MUX** orchestriert mehrere Claude-Code-Sessions parallel — sichtbar, steuerbar, lehrbar.
- Buttons: `Loslegen` · `Features` · `GitHub`
- macOS-Chrome-Label: `● cipher-mux`
- Linke Pane (`coding-companion`):
  - Du hilfst mir, neue Features zu strukturieren.
  - Wir starten mit einem leichten Audit:
  - bestehende Patterns erkennen
  - Lücken benennen
  - nächste Schritte vorschlagen
  - ● Reading project structure… (12s · 2.1k tokens)
  - ✓ docs/ ·  konzept v0.1, umsetzung v0.1
  - ✓ src/ ·  pages, components, styles
  - ▶ writing analysis to brain/companion/
  - □ propose 3 next-step options
  - Memory: 14 entries · last seen 2m ago
- Rechte Pane (`cyber-factory`):
  - ● Multi-Project Orchestration
  - 10-phase lifecycle · 3 active
  - ✓ ideate     — concept v0.1
  - ✓ scope      — req-IDs locked
  - ▶ scaffold   — project skeleton
  - □ implement  · review · ship
  - Active workers:
  - worker-1 · launcher    · scaffolding
  - worker-2 · refinement  · reviewing PRs
  - worker-3 · audit       · idle
  - next: phase-3 → handoff
- Permissions-Footer (in jeder Pane): `▸▸ bypass permissions on (shift+tab to cycle)`
- Statusbar: `● OFF` · `STT` · `COM` · `coding-companion` · `spalten 2 + · zeilen 2 +` · `nord` · `v0.9.9-dev`

### Pillars — Pixel & Minimal (PILLAR_DATA)
1. **Beschreiben statt coden** — Du sagst was du willst. Nicht wie. Spezialisierte KI-Agenten setzen um — parallel, sichtbar, steuerbar.
2. **Von der Idee zum Projekt** — Fuenf Phasen, fuenf Denkweisen — ein Cockpit das dich durch den gesamten Prozess fuehrt. Nicht Prompt rein, Code raus.
3. **Lernen durch Machen** — Alles liegt offen. Jeder Prompt sichtbar, jede Entscheidung nachvollziehbar. Kein Black-Box-Gefuehl.
4. **Fuer alle** — Voice Input, High-Contrast, eingebauter Lehr-Assistent. Die Huerde ist so niedrig wie wir sie kriegen koennen.
- Pillar-Link: `Mehr erfahren`

### Pillars — Preset-Variante (PRESET_PILLARS)
1. **Beschreiben statt coden** — Du sagst was du willst. Nicht wie. Spezialisierte KI-Agenten setzen um — parallel, sichtbar, steuerbar. (Tag: `> orchestrator`)
2. **Von der Idee zum Projekt** — Fuenf Phasen, fuenf Denkweisen — ein Cockpit das dich durch den gesamten Prozess fuehrt. (Tag: `> project-launcher`)
3. **Lernen durch Machen** — Alles liegt offen. Jeder Prompt sichtbar, jede Entscheidung nachvollziehbar. Kein Black-Box-Gefuehl. (Tag: `> companion`)
4. **Fuer alle** — Voice Input, High-Contrast, eingebauter Lehr-Assistent. Die Huerde ist so niedrig wie moeglich. (Tag: `> voice-relay`)

### Not-Section — „Was CIPHER-MUX nicht ist"
- Kein fertiges Produkt eines Startups. Ein Seitenprojekt, 100% KI-generiert.
- Kein Ersatz fuer Claude Code. Ein Cockpit das draufsitzt.
- Kein „klick und fertig". Du musst beschreiben koennen was du willst.
- macOS only. Vorerst.

### Footer — Plain
- Mark: **CIPHER-MUX** · `v0.9.9 · macOS · MIT`
- Links: `GitHub` · `Issues` · `Datenschutz` · `Impressum`

### Footer — Statusbar
- `● OFF | STT | COM` · `cipher-mux-website` · `spalten — 4 + zeilen — 4 +` · `workspaces · sidebar · nord · einstellungen` · `v0.9.9-dev`

### Bottom-CTA (FullLanding-Section, in `artboards.jsx`)
- Label: `// Bereit?`
- Buttons: `Loslegen` · `Den Prozess verstehen` · `Auf GitHub ansehen`

### Footer-Only-Artboard (Erläuterung)
- Plain → klassischer Website-Footer.
- Statusbar → wie die echte App-Statusleiste, mit Toggles und Versionspill.

---

## B · FEATURES-PAGE

### Hero — `features-shared.jsx` · CMFeaturesHero
- Kicker: `// 02` · `Deep-Dive`
- H1: **Was im Cockpit tatsächlich drin steckt.**
- Subtext: Grid, Sessions, Personas, Workspaces, Voice, Notes, Memory, MCP-Server. Eine lange Seite — alles auf einen Blick, ohne Tabs, ohne Tricks. Du scrollst, du verstehst.

### Page-Header / Footer (CMPageHeader / CMPageFooter)
- Wordmark: `CIPHER-MUX`
- Nav: `Landing` · `Features` · `Download` · `GitHub ↗`
- Footer: `CIPHER-MUX` · `v0.9.9 · MIT · macOS` · `cipher-mux.dev` · `GitHub` · `Issues` · `Datenschutz` · `Impressum`

### Anchor-Nav-Header
- `// auf dieser seite`

### Statusbar (CMStatusbar)
- `● OFF` · `STT` · `COM` · `features` · `section 03 / 12` · `nord` · `v0.9.9-dev`

### 01 · Cockpit (SecCockpit)
- Kicker: `Überblick` · Title: **Das Cockpit**
- Lead: Eine Electron-App. Ein Grid bis zu 21 Zellen. Jede Zelle hält eine Claude-Code-Session, einen Notes-Editor, oder bleibt leer. tmux im Backend — Sessions überleben Crashes, App-Neustarts, alles. Eine Sidebar mit fünf Tabs. Eine Statusbar mit allem Wichtigen.
- Stat-Boxen: `21` Zellen max — 7×3 Grid · `7` Entity-Typen — Personas mit Rollen · `37` MCP-Tools — 9 Kategorien · `10` Themes — inkl. WCAG AAA

### 02 · Grid (SecGrid)
- Kicker: `Arbeitsoberfläche` · Title: **Das Grid**
- Lead: Bis zu 21 Zellen — 7 Spalten, 3 Reihen. Drag & Drop zum Umordnen. Sessions können in der Höhe wachsen (Row-Span) für mehr Output-Raum — aber nie in der Breite. Pro Zelle: Header-Controls für Expand, Projekt-Wechsel, Shell-Modus, Schließen. Spalten dynamisch über die Statusbar. Eine Zelle muss kein Terminal sein — der integrierte Notes-Editor lebt im selben Grid.
- SVG-Annotation: `7 × 3 max`
- Annotations:
  - `// row-span (vertikal!)` — Sessions wachsen in der Höhe für mehr Output. Niemals in der Breite — eine Session ist immer eine Spalte.
  - `// notes-zelle` — Statt Terminal: integrierter Markdown-Editor. Handoff-Notes, Specs, Memos — direkt im Grid.
  - `// preset-marker` — Farbcode = Preset (Funktion). Persona ist orthogonal und kann jederzeit gewechselt werden.
- Layout-Gallery-Tag: `// typische workspaces (mockups — keine vorgaben)`
- Layout-Namen: `Triage`, `Dual + Plan`, `Solo Focus`, `Maker`
- Cell-Header-Suffix: `/notes` · `$_`
- Notes-Cell-Inhalt: `# session-handoff` / `## Was zu klären ist…`
- Plan-Modus-Cell: `▸ Plan-Modus aktiv` / `▸ Wave 2 / 5` / `▸ 3 worker spawned`

### 03 · Sessions (SecSessions)
- Kicker: `tmux backend` · Title: **Sessions**
- Lead: Jede Session ist ein eigenständiges Gespräch mit Claude. Eigener Kontext, eigene Aufgabe. tmux hält sie am Leben — App-Neustarts, Crashes, Schließen-und-Öffnen. Alles übersteht. Recovery-Dialog zeigt dir bestehende Sessions: übernehmen oder beenden.
- Anatomy-Tag: `// session anatomy`
- Anatomy-Liste:
  - Eigener Claude-Code-Prozess pro Zelle
  - Eigener Kontext, eigene CLAUDE.md, eigene History
  - Header-Controls: Expand, Projekt wechseln, Shell, Close
  - Klick auf Header = Fokus, visuelle Hervorhebung
  - **$-Button:** direkt ins tmux-Terminal der Session
  - **Eject:** Session aus dem Grid in eigenes Fenster
- Recovery-Tag: `// recovery` · `// nach app-restart`
- Recovery-Liste: ● 3 sessions found in tmux · ✓ orchestrator · running 2h 14m · ✓ companion · running 2h 14m · ✓ cyber-factory · running 0h 47m · `RESUME` · `CLOSE ALL`

### 04 · Personas (SecPersonas)
- Kicker: `Charakter · Wie` · Title: **Personas — 6 Stimmen für Claude**
- Lead: Personas definieren ausschließlich das Wie der Kommunikation — Tonalität, Stilistik, Interaktionsmuster. Sie sind orthogonal zu Presets: jede Persona × jedes Preset ist möglich. Editiert werden sie an genau einer Stelle: dem Companion-Tab des Workspaces-Fensters. Ausgeliefert werden sechs, eigene unbegrenzt erstellbar.

#### Persona-Karten
1. **Cipher** — *The Sentinel · Positiver Cyberpunk* — Wachsam, pragmatisch loyal. Maker-Team-Vibe — du und der Nutzer figure shit out together. — Tags: staubtrocken, keine service-floskeln, radikal ehrlich, dunkler humor
2. **Relay** — *The Dry · Default-Fallback* — Wissenschaftsjournalistischer Duktus. Sachlich, optionen-orientiert, auf Augenhöhe. — Tags: fakten belastbar, keine lobhudelei, unsicherheit deklarieren, „weiss ich nicht" ist ok
3. **Wayne Szalinski** — *The Pragmatic Enthusiast* — „Das kriegen wir hin"-Attitude. Hält Motivation in zähen Debugging-Sessions hoch. — Tags: leichter nerd-humor, option a vs b, fehler = puzzle, nicht versagen
4. **Der Kyniker** — *Radikal Reduziert* — Maximal komprimiert, telegrafisch. Keine Einleitung, kein Abschied. Nur Fakten und Code. — Tags: stichpunkte statt fliesstext, binäre antworten wo möglich, fehler = ursache + fix
5. **Sokratischer Tutor** — *Diskursiv* — Stellt Gegenfragen, deckt logische Lücken auf, zwingt zur Reflexion über Architektur. — Tags: keine fertigen antworten, edge-cases aufdecken, paradigmen diskutieren
6. **Der Glitch** — *Weird · Quirky* — Bricht KI-Antwortmuster, ungewöhnliche Metaphern. Für festgefahrene Situationen + Refactoring. — Tags: biologie-/chaostheorie-analogien, prämisse hinterfragen, esoterische alternativen

#### Persona-Footer-Strip
- Companion-Tab = Single Source of Truth — kein Inline-Edit irgendwo sonst
- Globale Aktiv-Persona überschreibt alle Preset-Zuweisungen
- Custom-Personas erscheinen automatisch im Preset-Dropdown

### 05 · Presets (SecPresets)
- Kicker: `Funktion · Was` · Title: **Presets — 8 Rollen für Sessions**
- Lead: Presets definieren das Was — Rolle, Phasen, MCP-Tools, Grenzen. Acht im Lieferumfang, vom Ideation Partner bis zum Audit. Jede Session bekommt ein Preset und damit eine klare Aufgabe; das System-Prompt wird zur Laufzeit aus drei Quellen zusammengebaut (siehe nächste Sektion). Worker-Sub-Sessions in der Cyber Factory laufen als spezielle eingebettete Variante.

#### Preset-Karten (Name · Rolle · DU TUST · NICHT)
1. **Ideation Partner** — Phase 0 — Seed → Anforderungspaket — 5 Phasen — Default: sokrates
   - DU TUST: Recherche, Synthese, Brain-Notes, Skill-Vorschläge, Anforderungs-Paket bauen.
   - NICHT: Code schreiben. Detail-Specs. Implementierung bewerten.
2. **Refinement** — L0 — Anforderungs-Lücken-Audit, REQ-IDs — 7 Phasen — Default: sokrates
   - DU TUST: Anforderungen schärfen, RE-Audit, Verwendungszweck-Prüfung, Detail-Spec mit REQ-IDs.
   - NICHT: Subsystem-Zerlegung. ADRs. Scaffolding. Implementierung. Tests.
3. **Cyber Factory** — Architekt + Multi-Session-Orchestrator — 11 Phasen — Default: cipher
   - DU TUST: Subsystem-Zerlegung, Schnittstellen-Verträge, ADRs, Scaffolding, Welle-Plan, Worker-Sessions koordinieren, Risk-Reviews.
   - NICHT: Anforderungen schärfen. Selbst Code schreiben. Bug-Fixes.
4. **Testing Assistant** — Adversarial Probing nach Build — 7 Phasen — Default: cipher
   - DU TUST: Tests laufen lassen, Test-Qualität beurteilen, Edge-Cases, OWASP-Spotcheck, Findings dokumentieren.
   - NICHT: Bugs fixen. Tests umschreiben. Code ändern.
5. **Debugger** — Bugfixing-Spezialist mit Worker-Sub-Sessions — 8 Phasen — Default: cipher
   - DU TUST: Findings lesen, Fix-Plan, Worker steuern, Risk-Review, Verifikation, Walkthroughs.
   - NICHT: Neue Features (das ist Cyber Factory). Adversarial Testing.
6. **Audit** — Final-Quality vor Release · Schleife — 7 Phasen — Default: relay
   - DU TUST: Code-Review, OWASP, ADR-Konsistenz, Cognitive-Debt-Bewertung, Release-Empfehlung.
   - NICHT: Selbst fixen. Direktes User-Feedback einholen.
7. **Companion** — Tutor / Berater / Helfer · rotiert je nach Cue — 5 Phasen — Default: cipher
   - DU TUST: Erklären, beraten, helfen, einrichten, optional steuern, Memory pflegen, Bugreport-Skill.
   - NICHT: Eigene Software-Entwicklung. Audit-Findings. Specs schreiben.
8. **Voice Companion** — Überbau · macht aktives Preset sprach-tauglich — 2 Phasen — Default: relay
   - DU TUST: STT, Voice-Commands filtern, TTS-tauglich rendern, Markdown verständlich vorlesen.
   - NICHT: Credentials oder IP-Adressen vorlesen. Code-Blöcke vollständig vorlesen.

### 06 · Persona × Preset / Resolution (SecMatrix)
- Kicker: `Architektur` · Title: **Persona × Preset & System-Prompt**
- Lead: Zwei Achsen, drei Ebenen. Persona und Preset sind orthogonal — jede Kombination ist möglich. Die Default-Matrix ist nur Empfehlung beim Frischeinrichten, kein Zwang. Das System-Prompt jeder Session entsteht aus drei Schichten: Preset-Funktion, Persona-Stimme, Workspace-Kontext.
- Matrix-Tag: `// default-matrix · empfehlung, kein zwang`
- Matrix-Zeilen:
  - Ideation Partner → sokrates · `creative blocks: glitch`
  - Refinement → sokrates · `detail-spec: relay`
  - Cyber Factory → cipher · `worker-subs: kyniker`
  - Testing Assistant → cipher · `probe-runs: kyniker`
  - Debugger → cipher
  - Audit → relay
  - Companion → rotiert · `rotiert: tutor / berater / helfer`
  - Voice Companion → relay · `klarheit > kürze`
- Resolution-Tag: `// persona-resolution beim session-start`
  1. **Globale Aktiv-Persona** — wenn gesetzt: gilt für alle Sessions
  2. **Preset-Override** — Auswahl im Preset-Editor
  3. **Default-Matrix** — Empfehlung aus dem Pack
  - ↓ Hardcoded Fallback: Relay
- System-Prompt-Tag: `// system-prompt · 3 ebenen pro session`
  - **Preset** — Rolle, Phasen, Tools, Grenzen
  - **Persona** — Tonalität, Stilistik (Hut)
  - **Workspace** — Projekt-Pfade, Memory, Custom-Prompt-Teile
- Erläuterung: Workspace gibt projektspezifischen Kontext mit ins System-Prompt — Pfade, aktive Projekte, Workspace-Memory-Highlights. Damit weiß die Session, *wo* sie arbeitet, nicht nur *was* sie tun und *wie* sie sprechen soll.

### 07 · Voice & TTS (SecVoice)
- Kicker: `Hands-Free` · Title: **Voice & TTS**
- Lead: Sprechen statt tippen. Lokale Whisper-Erkennung — keine Cloud, keine Internetpflicht. VAD erkennt Sprechpausen. Voice-Commands für Submit, Scroll, Grid-Navigation. STT-Pin fixiert auf eine Session. BT-Shutter als physischer Submit-Button.
- Karten:
  - **whisper.cpp** — `lokal · keine cloud` — VAD: erkennt pausen · review-then-submit · transkript zuerst sichtbar
  - **voice cmds** — `sprache → aktion` — „abschicken" / „senden" · „hoch" / „runter" · „zum marker"
  - **grid nav** — `fokus per stimme` — „grid links/rechts" · „grid hoch/runter" · fuzzy: „grit", „zelle"
  - **BT shutter** — `physischer submit` — STT-Pin auf session · BT-klick → send · komplett händefrei
- TTS-Strip:
  - Title: **TTS**
  - Body: Jede Entity-Session kann Text vorlesen lassen. Piper im Voice-Modus, macOS `say` als Fallback. Companion nutzt TTS für Erklärungen, Analogien, Zusammenfassungen — kein Code, nur natürliche Sprache.
  - Buttons: `NORMAL` · `INTERRUPT`

### 08 · Notes & Memory (SecNotes)
- Kicker: `Wissen` · Title: **Notes & Companion-Memory**
- Lead: Ein integrierter Markdown-Editor mit YAML-Frontmatter und Auto-Tagging. Persistentes Memory mit SQLite/FTS5 für Entities die sich Fakten merken sollen. Handoff-Notes für Session-zu-Session-Wissenstransfer. Alles durchsuchbar, alles MCP-zugreifbar.
- Notes-Box:
  - Tag: `// notes editor`
  - Title: **CodeMirror 6 · Markdown live**
  - YAML-Frontmatter (Titel, Tags)
  - Auto-Save nach 2s · Cmd+S triggert Auto-Tagging
  - Ollama gemma3:4b (lokal) für Tag-Vorschläge
  - Global oder Workspace-scoped
  - Tag-Tree in der Sidebar (NotesTreeView)
  - TestcaseView mit Checkboxen + Screenshots
  - Voller MCP-Zugriff: lesen, schreiben, suchen, handoff
- Memory-Box:
  - Tag: `// companion memory`
  - Title: **SQLite · FTS5 · persistent**
  - Body: Companion, Refinement, Voice-Relay merken sich Fakten, Präferenzen, Interaktionen, Ereignisse — über Sessions hinweg.
  - Kategorien: `Fakten` · `Präferenzen` · `Interaktionen` · `Ereignisse`
  - Salienz-Bewertung 0–1 · transparent · vom User löschbar
  - MCP-Tools: `write · recall · search · forget`

### 09 · MCP (SecMCP)
- Kicker: `Verbindungsschicht` · Title: **MCP-Server — 37 Tools, 9 Kategorien**
- Lead: Eingebauter HTTP-Server (Streamable HTTP). Bearer-Token-Auth pro Entity. Externe MCP-Clients können sich verbinden. Kategorien-Übersicht — die volle Liste lebt in der GitHub-Doku.
- Kategorien:
  - Session Mgmt · 06 — `create · kill · focus · eject`
  - Message Bus · 02 — `send · read`
  - Context Monitor · 01 — `context_status`
  - Task Queue · 04 — `create · update · list · get`
  - Bug Reports · 01 — `resolve`
  - Input Requests · 01 — `create`
  - Notes · 08 — `CRUD · search · handoff_*`
  - Companion Memory · 04 — `write · recall · search · forget`
  - App Control · 10 — `grid · sidebar · theme · choreography`
- Footer-Strip:
  - Bearer-Token wird pro Entity automatisch injiziert
  - Streamable HTTP — Standard MCP-Spec
  - `github.com/.../mcp ↗`

### 10 · Themes (SecThemes)
- Kicker: `Visuelle Stile` · Title: **10 Themes — inkl. WCAG AAA**
- Lead: Theme-Wechsel per Klick auf den Theme-Namen in der Statusbar. Cycled durch. Auch per MCP steuerbar (mux_theme_set). High-Contrast ist nicht Spielerei — Barrierefreiheit ist Kernprinzip.
- Themes (mit Tag): `cipher-ivory` (Light Default) · `cipher-dark` (Dark Default) · `blueprint` · `warm-paper` · `gruvbox-dark` · `nord` (Nord) · `synthwave` · `matrix` · `brutalist` · `high-contrast` (WCAG AAA)

### 11 · Barrierefreiheit (SecAccess)
- Kicker: `Kernprinzip` · Title: **Barrierefreiheit**
- Lead: Kein Feature-Checkbox, sondern bewusste Designentscheidung. Sensorisch, kognitiv, technisch — Hürden runter, wo immer möglich.
- **Sensorisch**: WCAG AAA High-Contrast Theme · Voice Input als Tastatur-Alternative · Voice Scroll & Grid-Navigation · BT-Remote als physischer Button · TTS für Kernaussagen
- **Kognitiv**: Companion erklärt mit Analogien · Ein Konzept pro Erklärung · Worked → Guided → Independent · Guides von Einsteiger bis Power-User · Tutorials/How-To/Reference getrennt
- **Technisch**: Grid abstrahiert tmux komplett · Projekt-Scanner statt Pfad-Tippen · Statusbar als klickbare Buttons · Auto-Recovery nach Crash · Kein Terminal-Wissen nötig

### 12 · Effizienz (SecEfficiency)
- Kicker: `Eingebaute Intelligenz` · Title: **Effizienz**
- Lead: Best Practices als Mechanik, nicht als Ratgeber. Kontext-Monitoring, Multi-Model-Routing, Handover-Pattern, Doom-Loop-Prevention — direkt in die App eingebaut.
- **StatusLine Monitor** — Echtzeit-Kontextverbrauch pro Zelle. Grün → orange (80%) → rot (90%).
- **Orchestrator-Watch** — Prüft Workers alle 2 Minuten. Bei 90%: finish, summarize, frischer Worker.
- **Message Bus** — Async Messaging zwischen Sessions. Wenige Dutzend Tokens statt Tausende für shared Conversation.
- **Multi-Model-Routing** — Orchestrator (Opus), Workers (Sonnet), einfache Tasks (Haiku). Richtiges Modell für richtige Aufgabe.
- **Handover-Pattern** — Zusammenfassung → neue Session → weitermachen. Kein Qualitätsverlust durch volle Kontexte.
- **Doom-Loop-Prevention** — Nach 2 gescheiterten Fixes: neue Session. Confirmation-Trap-Vermeidung in CLAUDE.md.

### Bottom-CTA (SecBottomCTA)
- Kicker: `// genug gelesen?`
- H2: **Probier's einfach aus.**
- Body: Open Source, MIT, kein Tracking. Du installierst, du behältst die Kontrolle.
- Buttons: `Loslegen` · `Auf GitHub ansehen`

---

## C · INSTALL-PAGE — `install-sections.jsx`

### Hero (InstallHero)
- Kicker: `Get started`
- H1: **Vom Mac zum Cockpit. ~20 Minuten. Einmalig.**
- Body: Du brauchst einen Mac, einen Anthropic-Account und Geduld für ein bisschen Terminal. Den Rest macht die App. Danach öffnest du nur noch das Cockpit und tippst.
- Phasen-Strip: `01 · Installation · ~10 min` · `02 · Erster Start · ~5 min` · `03 · Erstes Ergebnis · ~5–10 min` · `04 · Weiter · wann du willst`
- DMG-CTA: `↓ cipher-mux-0.9.0.dmg` · macOS · Apple Silicon · 142 MB · SHA-256 verifiziert
- Disclosure-Box:
  - Label: `Ehrlich gesagt`
  - Text: Phase 1 verlangt Terminal-Befehle. Nicht weil wir's hipster finden, sondern weil Claude Code CLI Voraussetzung ist und sich nicht per Klick installiert. Wir führen dich Schritt für Schritt durch — copy/paste reicht.

### Phase 1 · Installation (SecPhase1)
- Kicker: `Installation` · Title: **Claude Code CLI + die App** · Time: `~10 min · einmalig`
- Lead: Zwei Schritte. Erst die CLI, dann die App. Wenn du Node bereits hast, brauchst du nur die ersten zwei Befehle.

#### Step A — Claude Code CLI installieren
- Beschreibung: Voraussetzung — ohne Claude Code läuft nichts. Wenn npm bereits da ist, ist's ein Einzeiler. Sonst kommt erst Homebrew + Node.
- Terminal-Title: `Terminal · Spotlight → Terminal`
- Kommentare/Output:
  - `# Falls du bereits npm hast — direkt los:`
  - `npm install -g @anthropic-ai/claude-code`
  - `# Sonst zuerst Homebrew installieren:`
  - `==> Installation successful!`
  - `# Dann Node — bringt npm mit:`
  - `brew install node`
  - `# Und jetzt Claude Code:`
  - `+ @anthropic-ai/claude-code@1.x.x`
  - `# Prüfen + erstmalig starten (Login im Browser):`
  - `claude --version` / `claude-code 1.x.x`
  - `claude` / `→ Browser öffnet sich, einloggen, Tab schließt sich.` / `→ CLI ist autorisiert. Strg+C zum Beenden.`
- Stolperstellen:
  - Du brauchst einen Anthropic-Account (Free/Pro/Max). Anlegen unter claude.ai bevor du startest.
  - Beim ersten brew-Aufruf installiert macOS die Xcode Command Line Tools — das dauert ca. 5 Minuten. Geduld.
  - Wenn npm install -g eine Permission-Warnung wirft, mit sudo nachschießen: sudo npm install -g @anthropic-ai/claude-code

#### Step B — CIPHER-MUX installieren
- Beschreibung: Standard-DMG-Flow. tmux ist mitgeliefert — du musst nichts mehr im Terminal anfassen.
- DMG-Schritte:
  1. **DMG öffnen** — Doppelklick auf cipher-mux-0.9.0.dmg
  2. **In Applications ziehen** — Standard-macOS-Drag-and-Drop
  3. **Erster Start: Rechtsklick → Öffnen** — Wegen Gatekeeper bei unsignierter App. Einmalig.
  4. **Berechtigungen erteilen** — Accessibility (für globale Shortcuts) · evtl. Mikrofon (für Voice)
- DMG-Mock-Texte: `cipher-mux-0.9.0` · `CM` · `cipher-mux.app` · `A` · `Applications`
- Stolperstellen:
  - Beim ersten Start blockiert Gatekeeper — Rechtsklick → Öffnen → Bestätigen. Danach normaler Doppelklick.
  - Accessibility-Berechtigung muss in Systemeinstellungen → Datenschutz aktiv geschaltet werden, sonst funktionieren globale Shortcuts nicht.
  - tmux wird intern mitgeliefert — du musst nichts manuell installieren. Sessions überleben App-Neustarts trotzdem.

### Phase 2 · Erster Start (SecPhase2)
- Kicker: `Erster Start` · Title: **Die Companion meldet sich** · Time: `~5 min`
- Lead: Beim ersten Öffnen siehst du ein leeres Grid. Eine Cell ist vorbelegt mit der Companion — sie stellt drei Fragen, lernt dich kennen, und zeigt dir wie du dein erstes Projekt öffnest.

#### Companion-Mock (linke Spalte)
- Cell-Header: `● companion · cell 1/1` · `wayne`
- Wayne-Greeting: `wayne ▸` / Hey! Ich bin dein Guide. Kurz drei Fragen, dann legen wir los.
- Frage 1: **Coding-Hintergrund?** — Optionen: `Keiner` · `Etwas ✓` · `Viel`
- Frage 2: **KI-Erfahrung?** — Optionen: `Nie` · `ChatGPT etc.` · `Claude Code ✓`
- Frage 3: **Was willst du bauen?** — Eingabe-Mock: `Erstmal gucken — vielleicht ein paar Notizen-Tools_`
- Footer-Confirm: `✓ user-profile.json erstellt`

#### Narrative (rechte Spalte) — „So läuft's ab"
1. **App öffnet → leeres Grid** — Ein 1×1 Layout zur Begrüßung. Keine Reizüberflutung.
2. **Companion-Cell vorbelegt** — Wayne — die Begleiter-Persona — übernimmt die erste Cell.
3. **Drei kurze Fragen** — Coding-Erfahrung, KI-Vorwissen, Vorhaben. Speichert ein Profil.
4. **Sprache passt sich an** — Companion redet jetzt auf deinem Level. Kein Tech-Jargon ohne Grund.
5. **Erstes Projekt öffnen** — Pfad eingeben oder Demo-Projekt nehmen. Claude Code startet in der Cell.

### Phase 3 · Erstes Ergebnis (SecPhase3)
- Kicker: `Erstes Ergebnis` · Title: **Drei Aktionen, dann hast du's drauf** · Time: `~5–10 min`
- Lead: Wayne führt dich durch drei Mikro-Schritte. Kein Tutorial-Theater — echte Aktionen, mit echtem Output. Danach kennst du Grid, Cells, Focus und Sidebar.

#### Aktion 01 — Etwas tippen
- Body: Gib Claude einen einfachen Auftrag in der ersten Cell. Du siehst: er arbeitet, Output erscheint im Terminal.
- Mini-Grid-Label: `Grid · 1×1` · Cell: `CC ▸`
- Prompt-Beispiel: `› Erklär mir was in diesem Projekt passiert`

#### Aktion 02 — Zweite Session
- Body: Spalte hinzufügen, neue Session öffnen. Zwei parallele Claude-Cells. Das Kernfeature.
- Mini-Grid-Label: `Grid · 1×2`
- Shortcut-Hinweis: `# Shortcut` / `⌘ + → fügt Spalte rechts hinzu`

#### Aktion 03 — Sidebar entdecken
- Body: Sidebar öffnen, Notes-Tab öffnen, erste Notiz schreiben. Memory ist hier zuhause.
- Sidebar-Mock: `NOTES` · `CC ▸`
- Shortcut-Hinweis: `# Shortcut` / `⌘ + B schaltet Sidebar um`

#### Outcome-Strip — „Nach diesen drei Aktionen hast du"
- Claude Code läuft
- Zwei parallele Sessions
- Grid · Cells · Focus verstanden
- Sidebar + Notes gefunden

### Phase 4 · Wohin als nächstes (SecPhase4)
- Kicker: `Weiter` · Title: **Wayne schlägt vor — du wählst** · Time: `wann du willst`
- Lead: Je nach Skill-Level hat die Companion verschiedene nächste Schritte. Kein Druck — du kannst auch einfach machen.
- Karten:
  - **Einsteiger** — Voice + Notes — Guide 02 — Morgen zeig ich dir Voice Input und wie du Notes als zweites Gedächtnis nutzt.
  - **Fortgeschritten** — Orchestrator — Guide 03 — Wenn du magst, zeig ich dir den Orchestrator — wie mehrere Sessions zusammenarbeiten.
  - **Power-User** — MPO + Prompting — Guide 03 + 05 — Du weißt was du tust. Orchestrierung und Prompt-Design wenn du tiefer rein willst.

### Bottom-CTA (SecInstallBottom)
- H2: **Bereit? Lad's runter.**
- Body: Apple Silicon empfohlen. Intel-Macs funktionieren — ohne Ollama-Integration. Linux & Windows: kommt.
- Buttons: `↓ DMG · Apple Silicon` · `↓ DMG · Intel (no Ollama)` · `github / cipher-mux ↗` · `docs ↗`

---

## D · DOCS-PAGE

### Hero (DocsHero)
- Kicker: `Handbuch · v0.9.9`
- H1: **Das Handbuch. Vollständig. Zum Nachschlagen.**
- Body: Fünfzehn Kapitel — vom Fenster über Sessions, Voice, Workspaces bis zu allen Einstellungen. Geschrieben für Einsteiger oben, dichter als Referenz nach unten. Der Companion kennt jedes davon — falls du nicht blättern willst.

### Companion-Intro (DocsCompanionIntro) — „Bevor du blätterst"
- H2: **Du musst das hier nicht lesen.**
- Body 1: Beim ersten Start hat sich **Wayne** bei dir gemeldet — drei Fragen, ein Profil, dann ging's los. Wayne ist nicht weg. Wayne ist der **Companion**, und er ist immer einen Klick entfernt.
- Body 2: Statt hier zu suchen, frag ihn. *„Wie richte ich einen Workspace ein?"* *„Was bedeutet die orange Anzeige?"* *„Zeig mir wie Voice funktioniert."* Er kennt jedes Kapitel dieses Handbuchs — und antwortet auf deinem Level, weil er dein Profil kennt.
- Subhead: **Companion starten**
  - **Über das + in einer leeren Zelle** → Tab „Presets" → Companion auswählen. Resume holt deine bestehende Wayne-Session zurück mit allem was er über dich weiß.
  - **Sprechen statt tippen:** Voice-Pill in der Statusleiste, dann frag ihn laut. Antworten kommen vorgelesen — Code-Blöcke werden zusammengefasst, sensible Daten nie laut gesprochen.
- Subhead: **Drei Modi — er erkennt sie am Verb**
  - **Tutor** — „Erklär mir…" → Konzept mit Beispiel oder Analogie. Ein Konzept pro Antwort.
  - **Berater** — „Was wäre besser…" → Optionen mit Trade-offs und Empfehlung. Du entscheidest.
  - **Helfer** — „Mach mir…" → Aktion direkt ausführen. Z.B. Workspace anlegen, Persona ändern.
- Faustregel-Callout: „Wann das Handbuch und wann der Companion" — **Companion:** wenn du eine Frage hast, schnell etwas suchst, oder unsicher bist welche Option du willst. **Handbuch:** wenn du systematisch durchblättern willst, einen Überblick brauchst, oder etwas nachschlagen willst das du beim nächsten Mal wieder findest.

### § 01 · Das Fenster verstehen (DocsSec1)
- Lead: Wenn cipher-mux startet, siehst du zwei Bereiche: das Grid in der Mitte, die Statusleiste am unteren Rand. Mehr ist's erstmal nicht.
- **Das Grid (Hauptbereich)** — Der große zentrale Bereich. Hier leben deine Sessions — jede in einer eigenen Zelle. Stell dir einen Schreibtisch mit mehreren Bildschirmen vor: Jeder Bildschirm zeigt eine eigene Claude-Unterhaltung. — Eine leere Zelle zeigt ein `+` in der Mitte. Klick darauf öffnet das **Launcher-Popup** — dein Einstiegspunkt für alles.
- **Launcher-Popup · drei Tabs**
  - Presets: Spezialisierte Rollen direkt starten — alle verfügbaren Presets als Karten (Companion, Refinement, Cyber Factory, …). Laufende Single-Instance-Presets sind mit einem Punkt markiert. Resume-Button für bestehende Sessions.
  - Path: Session mit eigenem Projekt-Pfad starten. Ordner-Picker, zuletzt genutzte Pfade, plus Optionen: Shell Only · Skip Permissions · Resume · Fork.
  - Notes: Bestehende Notiz in dieser Zelle öffnen oder neue Notiz anlegen.
- Tipp: Per Tastatur: `Cmd+N` öffnet das Launcher-Popup in der nächsten leeren Zelle.
- **Die Statusleiste (unterer Rand)** — Deine Kommandozentrale. Von links nach rechts:
  - Voice-Pill: Sprachsteuerung ein/aus. LED zeigt Status: aus / grün (bereit) / rot (nimmt auf) / gelb (verarbeitet).
  - spalten +/-: Grid-Spalten hinzufügen oder entfernen. Maximum 7.
  - zeilen +/-: Grid-Zeilen hinzufügen oder entfernen. Maximum 3.
  - workspaces: Workspace- und Persona-Editor öffnen.
  - cyber factory: Cyber Factory starten/stoppen. Punkt-Indikator wenn aktiv.
  - bugreport: Bugreport-Dialog öffnen.
  - sidebar: Seitenleiste ein/ausblenden. LED leuchtet wenn Inhalt wartet.
  - Theme-Name: Klick wechselt zum nächsten visuellen Theme.
  - info: Einstellungen, Shortcuts, Feature-Liste.
  - Version: App-Version (rechts, nicht klickbar).

### § 02 · Sessions (DocsSec2)
- Title: **Sessions — deine KI-Arbeitsplätze**
- Lead: Eine Session ist ein separater Telefonanruf mit Claude. Eigenes Gedächtnis (Context Window), eigene Dateien, eigene Aufgabe. Sessions sind voneinander unabhängig.
- **Session öffnen — drei Wege**
  - Über Preset: Klick auf + → Tab „Presets" → Preset wählen. Session startet mit vordefiniertem Verhalten, Persona und Projekt-Kontext.
  - Über Pfad: Klick auf + → Tab „Path" → Ordner wählen oder eingeben → Start. Nackte Claude-Session im gewählten Verzeichnis.
  - Über Workspace: Workspace anwenden — das Grid wird automatisch befüllt. Ein Klick, alles steht.
- **Zellen-Steuerung** (Buttons)
  - ↥ Expand — Zelle auf volle Grid-Höhe expandieren (nur bei 2+ Zeilen).
  - ↧ Collapse — Zurück zur normalen Höhe.
  - ⇄ Switch — Projekt wechseln ohne Session zu schließen.
  - $ Shell — Shell öffnen im Projektverzeichnis. Kein Claude, normales Terminal.
  - ✕ Close — Session beenden und Zelle freigeben.
- **Fokus, Context, Crash-Sicherheit**
  - **Fokus:** Klick auf die Kopfleiste setzt Fokus. Tastatureingaben gehen an die fokussierte Zelle. Drag and Drop tauscht Positionen.
  - **Context-Anzeige:** Grün = viel Platz. Orange ab 80% = wird eng. Rot ab 90% = fast voll, Session muss bald vergessen.
  - **Crash-Sicherheit:** Sessions überleben Abstürze dank tmux. Beim Neustart erscheint ein Recovery-Dialog — übernehmen oder beenden.

### § 03 · Grid (DocsSec3)
- Title: **Das Grid anpassen**
- Lead: Ein bis 21 Zellen. So viel oder so wenig wie du brauchst.
- Liste:
  - `spalten +/-` und `zeilen +/-` in der Statusleiste
  - Minimum 1×1 (eine Zelle), Maximum 7×3 (21 Zellen)
  - Das Fenster passt seine Größe automatisch an
  - Bei 2+ Zeilen: `↥` streckt eine Zelle über die volle Höhe — gut zum Lesen langer Ausgaben
- **Typische Layouts**
  - 2×1: Zwei Sessions nebeneinander — Standard für den Alltag.
  - 3×1: Drei Spalten — z.B. Frontend / Backend / Tests.
  - 2×2: Vier Zellen — Cyber Factory + drei Worker.

### § 04 · Voice (DocsSec4)
- Title: **Sprachsteuerung**
- Lead: Lokale Spracherkennung — kein Netzwerk, keine Cloud. Voice-Pill in der Statusleiste oder Ctrl+Shift+Space.
- **LED-Status**
  - aus — Voice ist deaktiviert
  - grün — bereit, hört nicht zu
  - rot — nimmt gerade auf
  - gelb — verarbeitet — bitte warten
- Wichtig (Faustregel): Gesprochener Text wird eingefügt aber *nicht automatisch gesendet*. Du kannst lesen, korrigieren, dann per `"abschicken"` oder Enter senden.
- **Sprachbefehle · Text**
  - „abschicken" / „absenden" / „senden" — Enter drücken (Text abschicken).
  - „neue zeile" — Zeilenumbruch einfügen.
  - alles andere — Wird als Text transkribiert und eingefügt.
- **Sprachbefehle · Scrollen**
  - „hoch" / „rauf" — Eine Seite hoch scrollen.
  - „runter" / „weiter" — Eine Seite runter scrollen.
  - „ganz hoch" / „anfang" — Ganz nach oben.
  - „ganz runter" / „ende" — Ganz nach unten.
  - „zum marker" / „lesestart" — Zum Anfang der letzten Antwort springen.
- **Sprachbefehle · Grid-Navigation**
  - „grid hoch" — Fokus auf die Zelle darüber.
  - „grid runter" — Fokus auf die Zelle darunter.
  - „grid links" — Fokus auf die Zelle links.
  - „grid rechts" — Fokus auf die Zelle rechts.
  - Varianten wie `grit`, `zelle`, `focus` werden ebenfalls erkannt.
- **Voice Pin · Bluetooth-Fernbedienung**
  - **Voice Pin:** Spracheingabe an eine bestimmte Session pinnen — die Stimme geht immer dorthin, egal welche Zelle gerade fokussiert ist.
  - **Bluetooth-Clicker** (z.B. AB Shutter). Auto-Modus: Knopfdruck = sofort senden. Manual-Modus: Knopfdruck = Aufnahme starten/stoppen, explizit senden.

### § 05 · Sidebar (DocsSec5)
- Title: **Die Seitenleiste**
- Lead: Klick auf „sidebar" in der Statusleiste. Mehrere Tabs, verschiedene Funktionen.
- Tabs:
  - Messages — Nachrichten zwischen Sessions — sichtbar bei Multi-Session-Arbeit (Cyber Factory etc.).
  - Background — Sessions die laufen aber nicht im Grid sichtbar sind. Karten mit Live-Vorschau (5s-Refresh). Klick holt die Session ins Grid.
  - Notes — Notiz-Browser. Suchfeld, Tag-Chips zum Filtern, Doppelklick öffnet eine Notiz im Grid als Editor-Zelle.
  - Companion Memory — Gespeicherte Erinnerungen der Companion-Session. Durchsuchbar und einsehbar.
- Tipp: Der `⧉`-Button oben löst die Sidebar als eigenes Fenster — ideal für Multi-Monitor-Setups.

### § 06 · Notizen (DocsSec6)
- Title: **Notizen**
- Lead: Markdown-Editor (CodeMirror) in Grid-Zellen. Überschriften, fett, kursiv, Links, Code-Blöcke, Zitate.
- **Erstellen, Speichern, Auto-Tags**
  - **Neue Notiz:** Über Launcher-Popup → Tab „Notes" → „Neue Notiz", oder `+` in der Tab-Leiste eines offenen Editors
  - **Speichern + Auto-Tagging:** `Cmd+S` — speichert und schlägt automatisch Tags vor (lokales KI-Modell, max 5 Tags pro Notiz)
  - **Auto-Save:** Nach 2 Sekunden Inaktivität (ohne Tagging)
  - **Löschen:** Mülleimer-Icon in der Tab-Leiste, mit Bestätigung
  - **Handoff-Notizen:** spezielle Notizen für Wissenstransfer zwischen Sessions — wenn eine Session ihre Arbeit beendet, übergibt sie den Kontext an die nächste
- Faustregel „Memory vs. Notes": Was der User sehen, teilen oder in Obsidian lesen können soll, ist eine **Note** (Markdown-Datei). Was zur internen Run-Verwaltung gehört (Worker-Status, Risk-Reviews etc.), ist **Memory** (nicht sichtbar).

### § 07 · Projekte und Projekt-Struktur (DocsSec7)
- Title: **Projekte und Projekt-Struktur**
- Lead: Zentrales Verzeichnis als Quelle der Wahrheit für alle Projekte. Standardisierte Ordner-Struktur, drei Adoptions-Modi für bestehende Projekte.
- **CIPHER-MUX-Hub · Standard-Struktur** (Tree mit Kommentaren):
  - `.claude/` — Claude Code Config
  - `.cyber-factory/` — Run-Konfiguration
  - `docs/specs/` — Detail-Specs mit REQ-IDs
  - `docs/decisions/` — ADRs (Architektur-Entscheidungen)
  - `docs/research/` — Recherche aus Ideation Partner
  - `docs/audit/` — Audit-Berichte
  - `src/` — Quellcode
  - `tests/` — Tests
  - `.project-meta.json` — Phase, Workspace, Tags, Verwendungszweck
- **Bestehende Projekte einbinden · drei Modi**
  - Voll-Adoption: Komplette Pack-Konventionen werden angewandt — alle Ordner, ADRs, Specs, .project-meta.json.
  - Pack-Light: Nur einzelne Komponenten übernehmen — z.B. nur docs/specs oder nur .claude/.
  - Bestandsaufnahme: Nur Inventur — Pack rührt nichts an, dokumentiert nur was vorhanden ist.
- **Neues Projekt starten** — Pipeline: Ideation Partner → Refinement → Cyber Factory
- Erläuterung: Lebenszyklus-Einstieg: Ideation Partner sammelt die Idee, Refinement schärft die Anforderungen, die Cyber Factory übernimmt das Scaffolding als Teil der Architekt-Phase.

### § 08 · Software-Lebenszyklus — Presets (DocsSec8)
- Title: **Der Software-Lebenszyklus — Presets**
- Lead: Sechs spezialisierte Presets entlang des Lebenszyklus. Jedes Preset deckt eine Phase ab und übergibt sauber an das nächste.
- Pipeline: Ideation Partner → Refinement → Cyber Factory → Testing → Debugger → Audit

#### Ideation Partner
- Nimmt rohe Ideen, recherchiert (autonom, mit Sub-Agents), synthetisiert und produziert ein strukturiertes Anforderungs-Paket.
- **Phasen:** Seed → Recherche → Fokussierung → Robustheits-Gate (Pre-Mortem) → Anforderungs-Paket.

#### Refinement
- Prüft Anforderungen systematisch auf Lücken, schreibt Detail-Specs mit REQ-IDs und Akzeptanz-Kriterien.
- **Phasen:** Pflichtfeld-Check → Lücken-Audit → Validierung → Anforderungen schärfen → Detail-Spec mit REQ-IDs → Übergabe an Cyber Factory.

#### Cyber Factory
- Architekt und Multi-Session-Orchestrator in einem. Bekommt die Detail-Spec und koordiniert den Build mit eigenständigen Worker-Sessions.
- **Phasen:** Spec lesen → Architekt-Phase (Subsystem-Zerlegung, ADRs, Scaffolding) → Welle-Plan → Worker-Sessions starten (max 5 parallel, eigene Git-Worktrees) → Monitoring (5–7 min Zyklen) → Eskalation (5 Level) → Risk-Review → Welle-Cutover.

#### Testing Assistant
- Prüft implementierungs-fertige Wellen systematisch und adversarial. Fixt nichts — dokumentiert Findings.
- **Phasen:** Test-Run → Test-Qualitäts-Audit → Adversarial Probing → Sicherheits-Audit (OWASP-Top-10) → Findings-Report. Übergabe: bei Findings an Debugger, bei „alles grün" an Audit.

#### Debugger
- Bugfixing-Spezialist. Bekommt Findings vom Testing Assistant oder direkte Bug-Reports.
- **Phasen:** Findings lesen → Rückfragen → Fix-Plan → Worker-Session für Fix → Risk-Review → Verifikation (Test muss rot gewesen sein, nach Fix grün).
- Achtung: Maximal **2 Retries** pro Fix. Danach User-Eskalation.

#### Audit
- Beurteilt ob eine Welle Release-Niveau hat. Fixt nichts, implementiert nichts.
- **Phasen:** Welle-Diff lesen → Code Review → Sicherheits-Audit → ADR-Konsistenz → Cognitive-Debt-Bewertung → Release-Empfehlung: `Release` · `Release nach Fix` · `Blockiert`.

### § 09 · Companion (DocsSec9)
- Title: **Companion — Wayne im Detail**
- Lead: Wayne ist die Default-Persona für den Companion. Hier nochmal alles im Detail — was er kann, wie er antwortet, was er sich merkt.
- Modi-Tabelle:
  - Tutor — „Erklär mir…" — Konzept-Erklärung mit Worked Example oder Analogie. Ein Konzept pro Antwort.
  - Berater — „Was wäre besser…" — Optionen mit Trade-offs und Empfehlung. Du entscheidest.
  - Helfer — „Mach mir…" — Aktion direkt ausführen. Geringste Reibung.
- **Was der Companion kann**
  - **Einrichtungs-Guide:** Führt durch User-Profil, ersten Workspace, Personas
  - **Konzept-Erklärer:** „Was ist die Cyber Factory?" → Erklärung mit Analogie
  - **Live-Steuerung:** „Starte mir eine Cyber-Factory-Session für Projekt X" → nutzt MCP-Tools
  - **Bug-Reports + Feature-Requests:** Erkennt implizite Trigger („da ist ein Bug"), führt durch Mini-Interview
  - **Gedächtnis:** Merkt sich Präferenzen, Projekt-Kontext, Lernhindernisse über Sessions hinweg

### § 10 · Personas (DocsSec10)
- Title: **Personas — Kommunikationsstil**
- Lead: Personas definieren wie cipher-mux kommuniziert — Tonalität und Stil, nicht Funktion. Sechs sind eingebaut. Eigene legst du im Workspace-Editor an.
- Tabelle:
  - Cipher — Positiver Cyberpunk, pragmatisch loyal, staubtrocken, Wächter-Mentalität.
  - Relay — Sachlich, präzise, wissenschaftsjournalistisch — der Default.
  - Wayne Szalinski — Pragmatischer Enthusiast, „Das kriegen wir hin", Nerd-Humor.
  - Der Kyniker — Maximal komprimiert, telegrafisch, keine Floskeln.
  - Sokratischer Tutor — Gegenfragen statt Antworten, diskursiv, zur Reflexion anleitend.
  - Der Glitch — Unkonventionelle Metaphern, bricht Denkmuster, kreative Reibung.
- **Persona-Hierarchie**
  1. Globale Persona (höchste prio) — Wenn gesetzt — überschreibt alles. Wird im Workspace-Editor → Personas-Tab als „Global" markiert.
  2. Preset-spezifisch (mittel) — Pro Preset im Workspace-Editor wählbar. Jedes Preset hat eine empfohlene Default-Persona.
  3. Fallback: Relay (niedrigste) — Wenn nichts anderes gesetzt ist — sachlicher Default-Stil.

### § 11 · Workspace-Editor (DocsSec11)
- Title: **Der Workspace-Editor**
- Lead: Eigenes Fenster, erreichbar über „workspaces" in der Statusleiste. Zwei Haupt-Tabs: Workspaces und Personas.
- Tabs (Mock): `Workspaces` (aktiv) · `Personas (Companion-Tab)`
- **Tab: Workspaces** — Der visuelle Grid-Editor. Du siehst eine Miniatur des Grids und kannst pro Zelle konfigurieren:
  - Preset-Zuweisung — Welches Preset in dieser Zelle (Dropdown).
  - Projekt-Pfad — Welches Projekt aus dem Hub.
  - Persona-Auswahl — Dropdown mit allen verfügbaren Personas (erstellt im Companion-Tab).
  - Custom Prompt — Optionaler Prompt der den Preset-Default ergänzt oder überschreibt.
- Liste:
  - **Merge-Handles:** Vertikale Zell-Zusammenlegung per Drag — eine Zelle über mehrere Zeilen strecken.
  - **Grid-Dimensionen:** Spalten und Zeilen direkt im Editor anpassen.
  - **Workspace anwenden:** Ein Klick baut das Grid um, startet Sessions, weist Presets und Personas zu.
  - **Mehrere Workspaces:** verschiedene Layouts speichern und schnell wechseln (z.B. „Solo-Arbeit 2×1", „Factory-Run 3×2", „Review 2×1").
- Faustregel „Prompt-Hierarchie": Wenn ein Prompt aufgelöst wird, gilt: Zell-Prompt > Workspace-Preset-Override > Preset-Default-Prompt.
- **Tab: Personas (Companion-Tab)** — Hier werden Personas erstellt und verwaltet. Das ist der einzige Ort zum Anlegen und Bearbeiten — kein Inline-Edit in anderen Dialogen.
  - Persona erstellen — Name, Farbe, Prompt-Text.
  - Persona editieren — Name, Farbe und Prompt-Text ändern.
  - Persona löschen — Mit Warnung wenn in Presets verwendet.
  - Global aktivieren — Toggle pro Persona — wenn an, gilt diese Persona für alle Presets.
- Hinweis: Die sechs eingebauten Personas (Cipher, Relay, Wayne, Kyniker, Sokrates, Glitch) sind vorinstalliert und editierbar.

### § 12 · Einstellungen (DocsSec12)
- Title: **Einstellungen (Info-Dialog)**
- Lead: Erreichbar über „info" in der Statusleiste. Fünf Tabs: General · Themes · Models · Shortcuts · About.
- **Tab: General (Allgemein)**
  - Sprache — Deutsch / English — ändert die gesamte App-Oberfläche.
  - Agent — Skip Permissions — Claude darf Aktionen ohne Rückfrage ausführen. Achtung: deaktiviert die Sicherheits-Bestätigung.
  - Bugreport — Button zum direkten Öffnen des Bugreport-Dialogs.
  - Sprachsteuerung — TTS ein/aus · TTS-Stimme (Piper lokal oder macOS System) · Voice Commands · Voice Submit Mode (Auto / Manuell für BT-Clicker) · BT Shutter Remote.
  - Keep Working — Beim Beenden alle Sessions speichern. Beim nächsten Start mit Resume fortsetzen.
- **Tab: Themes** — **Theme-Auswahl:** Alle 10 eingebauten Themes als Liste mit Farb-Vorschau-Streifen. Klick wählt aus. Custom Themes erscheinen ebenfalls in der Liste, löschbar per X-Button.
  - Cipher Ivory — Sauber, hell — Standard Light Mode.
  - Cipher Dark — Warm, dunkel — Standard Dark Mode.
  - Blueprint — Ingenieur-Entwurf, Cyan + Indigo.
  - Warm Paper — Minimal, Sepia-Töne.
  - Gruvbox Dark — Retro-Coder-Klassiker.
  - Nord — Kühles skandinavisches Design.
  - Synthwave — 80er-Jahre Magenta + Violet.
  - Matrix — Phosphor-Grün auf Schwarz.
  - Brutalist — Schwarz/Weiß + Signalrot.
  - High Contrast — Barrierefreies WCAG-AAA-Design.
- **Theme-Editor (aufklappbar)**
  - Edit — Farbwerte pro Token-Gruppe: Hintergründe, Text, Borders, Akzente, Context-Farben, Highlights.
  - Preview — Live-Vorschau ohne Speichern.
  - Revert — Vorschau rückgängig machen.
  - Save — In aktives Custom Theme speichern.
  - Save As — Als neues Custom Theme mit eigenem Namen speichern.
  - Reset — Alle Anpassungen zurück auf Theme-Defaults.
  - Export — Custom Tokens als JSON in die Zwischenablage kopieren.
- **Tab: Models (LLM-Anbieter)** — Konfiguration des lokalen KI-Modells (für Auto-Tagging, Bugreport-Anreicherung etc.).
  - Ollama Host — 127.0.0.1 — IP-Adresse des Ollama-Servers.
  - Ollama Port — 11434 — Standard-Port.
  - Ollama Model — gemma4:26b — Modellname. Nach erfolgreicher Verbindung als Dropdown mit allen verfügbaren Modellen.
  - Test Connection — Verbindung prüfen. Bei Erfolg werden verfügbare Modelle geladen.
  - Save — Konfiguration speichern.
- **Tab: Shortcuts** — Alle Tastenkürzel gruppiert nach Kategorie (Navigation, Layout, Actions, Terminal). Vollständige Tabelle siehe nächstes Kapitel.
- **Tab: About** — Feature-Übersicht mit Erklärungen zu: Was ist cipher-mux, Grid-System, Orchestrierung, Message Bus, MCP-Server, Context-Monitoring, Bugreports, Themes.

### § 13 · Tastenkürzel (DocsSec13)
- Title: **Tastenkürzel**
- Lead: Vollständige Referenz aller Shortcuts. Gruppiert nach Kategorie.
- **Navigation**
  - Cmd+1 … Cmd+5 — Session in Zelle 1–5 fokussieren.
  - Escape — Aktiven Dialog schließen.
- **Layout**
  - Cmd+→ / Cmd+← — Grid-Spalten hinzufügen / entfernen.
  - Cmd+↓ / Cmd+↑ — Grid-Zeilen hinzufügen / entfernen.
- **Actions**
  - Cmd+N — Neue Session — öffnet Launcher-Popup in der nächsten leeren Zelle.
  - Cmd+B — Bugreport-Dialog öffnen.
  - Cmd+S — Notiz speichern + Auto-Tagging.
  - Cmd+Enter — Senden in Dialogen (z.B. Input Requests in der Sidebar).
  - Ctrl+Shift+Space — Sprachsteuerung ein/aus.
- **Terminal**
  - Cmd+C — Kopieren / laufenden Prozess abbrechen.
  - Cmd+V — Einfügen.

### § 14 · Bugreports und Feature-Requests (DocsSec14)
- Title: **Bugreports und Feature-Requests**
- Lead: Der /bugreport-Skill ist überall verfügbar — aus jeder Session heraus.
- Nimmt auf:
  - **Bug-Reports** — Was ist kaputt, wo, wie reproduzierbar?
  - **Feature-Requests** — Was wäre nützlich?
  - **Lessons Learned** — Was haben wir gelernt?
  - **Handover-Notizen** — Wissenstransfer zwischen Sessions.
- **Drei Modi im Bugreport-Dialog**
  1. Manuell — Als Text beschreiben.
  2. Voice-Interview — Mündlich beschreiben, KI reichert an.
  3. Screenshot — Screenshot aufnehmen und annotieren.
- Hinweis: Output landet als Markdown-Note mit passenden Tags. Öffnen über die Statusleiste oder `Cmd+B`.

### § 15 · Dialoge im Überblick (DocsSec15)
- Title: **Dialoge im Überblick**
- Lead: Alle Dialoge auf einen Blick — wo sie öffnen, was sie tun.
- Tabelle:
  - Launcher-Popup — `+ in leerer Zelle / Cmd+N` — Preset starten, Pfad öffnen, Notiz öffnen.
  - Bugreport-Dialog — `Statusleiste / Cmd+B` — Bug melden — manuell, per Voice oder Screenshot.
  - Recovery-Dialog — `Automatisch bei Start` — Verwaiste Sessions übernehmen oder beenden.
  - Workspace-Popup — `Quick-Select über Workspace-Button` — Workspace schnell anwenden.
  - Workspace-Editor — `"workspaces" in Statusleiste` — Grid-Layouts und Personas verwalten (2 Tabs).
  - Info-Dialog — `"info" in Statusleiste` — Einstellungen, Shortcuts, Features (5 Tabs).

### Bottom (DocsBottom)
- H2: **Fragen offen? Frag Wayne.**
- Body: Das Handbuch ist lang. Wayne ist im Cockpit. Er kennt jeden Abschnitt davon — und antwortet schneller als du scrollst.
- Buttons: `↓ App herunterladen` · `github / cipher-mux ↗`
