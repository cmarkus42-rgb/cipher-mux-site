# CIPHER-MUX Website — Content Brain

Dieses Dokument ist der vollstaendige Informations-Input fuer die Website-Erstellung.
Drei Seiten: Landing Page, Deep-Dive, Download & Install.
Fokus auf Fakten und Substanz — die Formulierung macht Gemini.

---

## Meta-Informationen

- **Produktname:** CIPHER-MUX (immer Grossbuchstaben)
- **Version:** v0.9.9 (Stand: 2026-05-02, Pre-Cyberfactory-Plateau)
- **Was es technisch ist:** Electron-App (macOS), die Claude Code CLI-Sessions in einem visuellen Grid steuert, mit tmux als Backend. 37 MCP-Tools, 7 Entity-Typen, persistentes Companion Memory, Voice Scroll/Grid-Navigation, TTS.
- **Lizenz:** MIT, Open Source, kein Paid Tier, kein Telemetry, keine Datensammlung
- **Repo:** github.com/cmarkus42/cipher-mux-electron
- **Sprache der Website:** Deutsch (primaer), Englisch-Version spaeter
- **Claim/Tagline-Richtung:** "Coding-Cockpit fuer Maker" / "Agentic Engineering for Creatives" / "Barrierefreies Coding-Cockpit"
- **Tonalitaet:** Enthusiastisch aber ehrlich. Vorstellen statt vermarkten. Keine Buzzwords, keine leeren Versprechen. Einschraenkungen offen benennen.

---

## SEITE 1: Landing Page

Schnelle Vorstellung. Wer hier landet soll in 60 Sekunden verstehen: Was ist das? Fuer wen? Warum besonders?

### Was ist CIPHER-MUX?

Ein visuelles Coding-Cockpit das auf Claude Code (CLI) aufbaut. Mehrere KI-Agenten laufen parallel in einem Grid, jeder mit eigener Aufgabe. Du steuerst, orchestrierst, beobachtest — alles in einem Fenster.

Nicht ein Chat-Fenster. Eine Kommandozentrale.

### Kernbotschaft: Coding-Cockpit fuer Maker

CIPHER-MUX richtet sich an Menschen die Ideen haben und Software bauen wollen — unabhaengig vom technischen Hintergrund. Die Einstiegsfrage ist nicht "Kannst du programmieren?" sondern "Kannst du beschreiben was du willst?"

Maker, Kreative, Quereinsteiger, Solo-Entwickler, Berater — alle die mit KI-Unterstuetzung produktiv bauen wollen.

### Die drei Saeulen (Hero-Bereich)

**1. Bauen ohne Code-Angst**
Du sagst was du willst, nicht wie. "Bau mir einen Dark-Mode-Toggle" ist ein vollstaendiger Auftrag. Der Agent liest den Code, versteht die Struktur, implementiert. Du reviewst. Mehrere Agenten arbeiten parallel — einer recherchiert, einer baut, einer testet. Du orchestrierst wie ein Regisseur.

**2. Lernen durch Transparenz**
Alles liegt offen. Jeder Prompt sichtbar, jede Konfiguration einsehbar, jedes Konzept erklaerbar. CIPHER-MUX ist eine offene Werkstatt — du siehst wie die Maschine arbeitet und lernst sie dabei besser zu steuern. Kein Black-Box-Produkt sondern ein Lernraum.

**3. Barrierefreies Cockpit**
CIPHER-MUX senkt Einstiegshuerden bewusst:
- Voice Input: Sprechen statt tippen. Lokale Whisper-Spracherkennung, kein Cloud-Dienst, keine Internetpflicht. VAD erkennt Sprechpausen automatisch.
- Voice Scroll & Grid-Navigation: Per Sprachbefehl durch Sessions scrollen ("hoch", "runter", "zum Marker") und zwischen Zellen navigieren ("grid links", "grid rechts"). Komplett haendefrei arbeiten.
- TTS (Sprachausgabe): Entities koennen dir vorlesen — Erklaerungen, Zusammenfassungen, Kernaussagen. Kein Screen-Lesen noetig.
- High-Contrast Theme: WCAG AAA konform. Maximale Lesbarkeit fuer alle.
- Companion-Entity: Eingebauter Lehr-Assistent mit persistentem Memory. Merkt sich deinen Lernstand, erklaert Konzepte mit Analogien statt Jargon, fuehrt interaktiv durch die App. Einsteiger werden nicht allein gelassen.
- Keine Terminal-Angst noetig: Das Grid abstrahiert tmux komplett weg. Du siehst Zellen mit Aufgaben, nicht Terminal-Fenster mit kryptischen Befehlen.
- Bluetooth-Remote-Steuerung: BT Shutter Bridge erlaubt Freisprechbetrieb. STT Pin fixiert die Spracheingabe auf eine Session, BT-Klick sendet ab. Physischer Button statt Tastatur.

### "Was es NICHT ist" (Erwartungssteuerung)

- Kein Ersatz fuer Claude Code — CIPHER-MUX steuert Claude Code Sessions, ersetzt die CLI nicht
- Kein kommerzielles Produkt — MIT-Lizenz, keine Bezahlschranke, kein Tracking
- Nicht Cross-Platform in v1 — macOS only (Linux geplant fuer v2)
- Kein "klick und fertig"-Tool — du musst beschreiben koennen was du willst, das Cockpit macht den Rest moeglich

### Call-to-Action

- "Jetzt starten" → Download & Install Seite
- "Features entdecken" → Deep-Dive Seite
- "Auf GitHub ansehen" → Repo

---

## SEITE 2: Deep-Dive

Ausfuehrliche Vorstellung aller Features, Konzepte und Besonderheiten. Wer hier liest will verstehen was drin steckt.

### Das Grid — Deine Arbeitsoberflaeche

- Bis zu 21 Zellen (7 Spalten x 3 Reihen)
- Jede Zelle kann halten: eine Claude Code Session, den Notes-Editor, oder leer als Launcher bleiben
- Drag & Drop zum Umordnen von Sessions
- Row-Span: Zellen koennen in der Hoehe erweitert werden fuer mehr Platz
- Jede Zelle hat Header-Controls: Expand/Collapse, Projekt wechseln, Shell oeffnen, Session schliessen
- Spalten dynamisch hinzufuegen/entfernen ueber Status-Bar

### Sessions — Unabhaengige KI-Gespraeche

- Jede Session ist ein eigenstaendiges Gespraech mit Claude — eigener Kontext, eigene Aufgabe
- tmux-Backend: Sessions ueberleben App-Neustarts und Crashes
- Recovery-Dialog bei Neustart: bestehende Sessions uebernehmen oder beenden
- Fokus durch Klick auf Header, visuelle Hervorhebung der aktiven Session
- Shell-Modus ($-Button): direkt ins Terminal der Session wechseln

### Entities — 7 spezialisierte Session-Typen

Entities sind vorkonfigurierte Session-Rollen mit eigenem Verhalten, Icon, Farbe und CLAUDE.md:

| Entity | Icon | Funktion |
|---|---|---|
| **Orchestrator** | 🎯 | Aufgaben-Delegation, Worker-Koordination, Bug-Processing |
| **MPO** | 🔀 | Multi-Projekt-Orchestrierung, 10-Phasen-Lifecycle |
| **Launcher** | 🚀 | Projekt-Scaffolding, Requirements-Interview |
| **Companion** | 🧭 | How-To-Advisor, Onboarding, interaktive Demos (mit Memory) |
| **Refinement** | 🔬 | Code-Review, iterative Verbesserung (mit Memory) |
| **Voice-Relay** | 🎙 | Sprachgesteuerte Konversation (mit Memory) |
| **Audit** | 🛡 | Security- und Compliance-Checks |

- Entities mit Memory merken sich Fakten, Praeferenzen und Interaktionen ueber Sessions hinweg
- Orchestrator, MPO und Launcher sind Singletons (max. 1 gleichzeitig)
- Companion, Refinement, Voice-Relay, Audit koennen mehrfach parallel laufen
- Weitere Entities per Dateisystem erweiterbar (eigene CLAUDE.md im entities/-Ordner)

### Orchestrator — Der Fluglotse

- Eine dedizierte Claude-Session mit MCP-Tools zur Steuerung anderer Sessions
- Kann Sessions erstellen, Aufgaben delegieren, Status lesen, Ergebnisse sammeln
- Worker-Startup-Protokoll: Create → Wait → Verify → Send → Monitor (verhindert verlorene Instruktionen)
- Bugreport-Flow: Bug melden → Orchestrator erkennt → erstellt Fix-Worker → diagnostiziert → fixt → resolved
- Monitoring: Sidebar zeigt Statusupdates, Context-Warnungen, Eskalationen
- Wann nutzen: Komplexe Multi-Step-Aufgaben, Aenderungen ueber mehrere Dateien/Module, parallele Arbeit

### MPO — Multi-Project Orchestrator

- Der "Filmregisseur" fuer Mehr-Projekt-Aufgaben
- Zerlegt ein grosses Anforderungspaket in parallele Teilprojekte
- 10-Phasen-Lifecycle:
  - Phase 1-2: Anforderungen verstehen, Vollstaendigkeit pruefen, Luecken identifizieren
  - Phase 3-4: Zerlegungsstrategie waehlen, Abhaengigkeitsgraph bauen, Detail-Specs schreiben
  - Phase 5: Wellenweiser Launch — unabhaengige Projekte zuerst, dann abhaengige
  - Phase 6-8: Monitoring alle 7 Minuten, Stuck-Erkennung, Eskalationsentscheidungen
  - Phase 9-10: Completion-Tracking, Zusammenfassungs-Kompilation
- 5 Eskalationsstufen:
  1. Explizit in Requirements → MPO antwortet selbst
  2. Ableitbar aus Constraints → MPO antwortet selbst
  3. Entscheidung einer anderen Session → MPO wendet Konsistenz an
  4. Braucht Web-Recherche → MPO recherchiert
  5. Geschmack/Strategie/Irreversibel → MPO fragt DICH
- Input Requests: Sidebar-Bubble mit Frage, 2-4 Optionen (eine empfohlen), Custom-Feld. Du entscheidest, Workers sind pausiert.

### Project Launcher — Der Bauleiter

- Scaffolding von Dev-Infrastruktur: CLAUDE.md, SPEC.md, .claude/, .gitignore
- Kickoff-Flow: Projekt-Verzeichnis + Anforderungsdatei + Extra-Kontext → Start
- Zwei Stufen:
  - Stage 1 (Scaffold): 2-10 Minuten, generiert Projekt-Skelett
  - Stage 2 (Interview): Oeffnet Zielverzeichnis, startet Interview-Skill fuer Detail-Klaerung
- Quality Baseline: Referenz-Verzeichnis als Beispiel fuer gewuenschte Tiefe/Qualitaet

### Workspaces & Personas — Vorkonfigurierte Arbeitsumgebungen

**Personas:**
- "Huete" fuer Claude: Name, Farbe, Default-Prompt
- Built-in: Orchestrator, MPO, Worker, empty (gesperrt)
- Unbegrenzt Custom-Personas erstellbar
- Persona-Skill-Sync: Gespeicherte Persona generiert automatisch Skill-File

**Workspaces:**
- Vorbereitete "Konferenzraeume": Grid-Layout + Persona/Projekt-Zuweisung pro Zelle
- Ein Klick → komplettes Setup steht (5 Sessions mit Rollen, Projekten, Prompts)
- Grid-Editor: Zellen per Drag mergen, Personas/Projekte/Custom-Prompts zuweisen
- Prompt-Resolution: Cell-Prompt (hoechste Prio) → Workspace-Persona-Override → Persona-Default (niedrigste)

### Voice Input — Sprechen statt Tippen

- Whisper.cpp lokal — keine Cloud, kein Internet noetig, keine Daten die das Geraet verlassen
- VAD (Voice Activity Detection): erkennt Sprechbeginn und -pausen automatisch
- Voice Commands: "abschicken"/"absenden"/"senden" zum Absenden, "neue Zeile" fuer Zeilenumbruch
- **Scroll Commands:** "hoch"/"runter" (Seite), "ganz hoch"/"ganz runter" (Extremes), "zum Marker" (letzte Antwort)
- **Grid Navigation:** "grid hoch/runter/links/rechts" — Fokus per Stimme zwischen Zellen wechseln (fuzzy, akzeptiert auch "grit", "zelle", "focus")
- **STT Pin:** Spracheingabe auf eine bestimmte Session fixieren, unabhaengig vom Mausfokus
- **BT Shutter Remote:** Bluetooth-Fernbedienung als physischer Submit-Button. Pin + BT = komplett haendefreies Arbeiten.
- Review-then-Submit: Transkription erscheint, du pruefst, dann absenden (oder BT-Klick)
- Gut fuer: Instruktionen geben, Bugs beschreiben, laut denken, durch Output navigieren
- Nicht gut fuer: Code diktieren, Schnellfeuer-Befehle

### TTS — Sprachausgabe

- **mux_tts_speak:** Jede Entity-Session kann Text vorlesen lassen
- Nutzt Piper (wenn Voice-Modus aktiv) oder macOS `say` als Fallback
- Prioritaet: normal (Warteschlange) oder interrupt (sofort)
- Companion nutzt TTS fuer Erklaerungen, Analogien, Zusammenfassungen
- Kein Code vorlesen — nur Kernaussagen und natuerliche Sprache

### Notes Editor — Integriertes Wissenssystem

- CodeMirror 6 basiert, Markdown mit Live-Rendering
- YAML Frontmatter: Titel, Tags
- Auto-Save nach 2 Sekunden Inaktivitaet
- Manuelles Speichern triggert Ollama Auto-Tagging (gemma3:4b lokal)
- Global oder Workspace-scoped Speicherung (Workspace defaultTags werden automatisch angewandt)
- **Voller MCP-Zugriff:** Notes erstellen, lesen, aktualisieren, suchen, loeschen — auch durch Entities
- **Handoff Notes:** Session-zu-Session Wissenstransfer. Eine Session schreibt ihren Stand auf, die naechste liest ihn ein. Kein Wissen geht verloren.
- **TestcaseView:** Strukturierte Testfaelle mit Checkboxen und Screenshot-Integration
- **NotesTreeView:** Tag-basierte Baumansicht in der Sidebar fuer schnelle Navigation
- Durchsuchbar, filterbar, als Wissens-Sammlung pro Projekt nutzbar

### Companion Memory — Persistentes Gedaechtnis

- **SQLite mit FTS5** (Full-Text-Search) — bleibt ueber Sessions hinweg erhalten
- Entities mit Memory (Companion, Refinement, Voice-Relay) merken sich:
  - Fakten: Projektdetails, Tech-Stack, Entscheidungen
  - Praeferenzen: Wie der User arbeiten will, was nervt, was funktioniert
  - Interaktionen: Lernhindernisse, Durchbrueche, offene Fragen
  - Ereignisse: Abgeschlossene Projekte, wichtige Meilensteine
- Salienz-Bewertung (0-1): Wichtige Erinnerungen werden priorisiert
- Transparent und loeschbar: User sieht alles, kann alles entfernen
- MCP-Tools: write, recall, search, forget

### MCP Server — Die Verbindungsschicht

- Eingebauter HTTP-Server (Streamable HTTP) mit **37 Tools in 9 Kategorien**
- **Session Management:** create, kill, list, status, focus, eject
- **Message Bus:** send (mit optionalem tmux push-delivery), read
- **Context Monitoring:** Echtzeit-Kontextverbrauch pro Session
- **Task Queue:** create, update, list, get (mit Policy: Stall-Timeout, Max-Retries, Hooks)
- **Bug Reports:** resolve (fixed/failed)
- **Input Requests:** create (fuer MPO-Entscheidungen)
- **Notes:** create, read, update, delete, search, list, handoff_create, handoff_search
- **Companion Memory:** write, recall, search, forget
- **App Control:** grid_resize, grid_place, session_focus, session_eject, sidebar_toggle, ui_highlight, ui_open, theme_set, ui_choreography, tts_speak, cell_scroll
- Externe MCP-Clients koennen sich verbinden
- Bearer-Token Auth (auto-injected pro Entity)

### Sidebar — Dein Ueberblick

5 Tabs:
- **Messages:** Nachrichten zwischen Sessions (sichtbar wenn Orchestrator laeuft)
- **Background:** Versteckte Sessions die im Hintergrund weiterlaufen
- **Input Requests:** MPO-Entscheidungsblasen (sichtbar wenn MPO laeuft)
- **Notes:** Immer sichtbar, Tag-Baumansicht, Zugang zu allen Notizen
- **Companion Memory:** Gespeicherte Erinnerungen der lernenden Entities einsehen
- Abkoppelbar (Detach) als eigenes Fenster
- Steuerbar per MCP (mux_sidebar_toggle)

### Themes — 10 visuelle Stile

1. cipher-ivory (Light Default)
2. cipher-dark (Dark Default)
3. blueprint
4. warm-paper
5. gruvbox-dark
6. nord
7. synthwave
8. matrix
9. brutalist
10. **high-contrast — WCAG AAA konform, maximale Lesbarkeit** (Barrierefreiheit!)

Theme-Wechsel: Klick auf Theme-Name in der Status-Bar cycled durch. Auch per MCP steuerbar (mux_theme_set).

### UI Choreography — Die App erklaert sich selbst

- **mux_ui_highlight:** UI-Elemente per Glow/Outline hervorheben (Statusbar, Grid-Zellen, Sidebar-Tabs)
- **mux_ui_choreography:** Timeline-basierte UI-Sequenzen (max 100 Schritte, 30s) — Theme wechseln, Highlights setzen, Popups oeffnen, Grid resizen, alles zeitgesteuert
- **mux_ui_open:** Popups programmatisch oeffnen/schliessen
- Einsatz: Onboarding-Flows, Demo-Videos, Showreels — der Companion kann die App live vorfuehren
- Keine Netzwerk-Roundtrips zwischen Schritten (client-side Execution, sub-ms Timing)

### Barrierefreiheit — Bewusst niedrige Huerde

Das verdient einen eigenen Abschnitt, weil es ein Kernprinzip ist, kein Feature-Checkbox:

**Sensorisch:**
- WCAG AAA High-Contrast Theme
- Voice Input als Alternative zu Tastatur-Eingabe (STT Pin fuer haendefreies Arbeiten)
- Voice Scroll & Grid-Navigation: durch Output scrollen und zwischen Zellen wechseln per Stimme
- Bluetooth-Remote-Steuerung (BT Shutter) fuer physische Buttons statt Tastatur
- TTS (Text-to-Speech): Entities lesen Kernaussagen, Erklaerungen und Zusammenfassungen vor

**Kognitiv:**
- Companion-Persona erklaert Konzepte mit Analogien statt Fachbegriffe (Context = RAM, Orchestrator = Fluglotse, Session = separater Telefonanruf)
- Ein Konzept pro Erklaerung, nie drei auf einmal
- Worked Example → Guided → Independent Lernpfad fuer Einsteiger
- Guides von Einsteiger (01-First Steps) bis Power-User (06-Token Craft)
- Dokumenttypen getrennt: Tutorials lehren, How-Tos loesen, Erklaerungen vertiefen, Referenzen listen

**Technisch:**
- Grid abstrahiert tmux komplett — kein Terminal-Wissen noetig
- Projekt-Scanner findet Projekte automatisch, kein Pfad-Tippen noetig
- Status-Bar zeigt alle Aktionen als klickbare Buttons
- Recovery nach Crash automatisch — nichts geht verloren

### Das glaeserne Cockpit — Lernen durch Offenheit

Dieser Aspekt ist ein Alleinstellungsmerkmal und verdient prominente Platzierung:

**Was offen liegt:**
- Alle Prompts sind sichtbar und lesbar — du siehst was der Agent bekommt
- Alle Personas/Presets sind konfigurierbar — du verstehst warum der Agent sich so verhaelt
- CLAUDE.md Dateien sind editierbares Projekt-Wissen — du lernst wie man KI instruiert
- Arbeitsregeln, Routing, Eskalationslogik — alles einsehbar, nichts versteckt
- Session-Inhalte live beobachtbar — du siehst dem Agent beim Arbeiten zu

**Was das bewirkt:**
- Du lernst Prompting durch taegliche Anwendung, nicht durch Tutorials
- Du entwickelst ein Gefuehl fuer Kontext-Management, Token-Effizienz, Session-Hygiene
- Du verstehst wie Agenten-Orchestrierung funktioniert — weil du es beobachtest
- Du kannst alles anpassen: Personas, Prompts, Regeln, Workflows
- Implizites Wissen durch Beobachtung: wie ein Agent Code strukturiert, debuggt, an Probleme rangeht

**Die Message:** Es geht nicht nur darum ein Tool zu teilen, sondern Wissen zu teilen. Jede Session ist eine Live-Lektion. Die Lernkurve ist keine Treppe sondern eine Rampe.

### Effizienz — Eingebaute Intelligenz

- **StatusLine Monitor:** Echtzeit-Kontextverbrauch pro Zelle (gruen/orange 80%+/rot 90%+)
- **Orchestrator-Monitoring:** Prueft Workers alle 2 Minuten, handelt bei 90% (finish, summarize, frischer Worker)
- **Message Bus:** Asynchrones Messaging zwischen Sessions (wenige Dutzend Tokens statt Tausende fuer shared Conversation)
- **Session Survival:** tmux ueberlebt Crashes, Recovery uebernimmt ohne Context-Verlust
- **Workspace Apply:** Fuenf Sessions mit einem Klick, kein Per-Session-Setup
- **Multi-Model-Routing:** Orchestrator (Opus), Workers (Sonnet), einfache Tasks (Haiku) — richtiges Modell fuer richtige Aufgabe
- **/clear zwischen Tasks:** Hoechster Single-Impact fuer Token-Effizienz
- **Subagenten fuer Exploration:** Schuetzt den Hauptkontext
- **Handover-Pattern:** Session-Zusammenfassung → neue Session → weitermachen ohne Qualitaetsverlust

### Prompting-Expertise eingebaut

CIPHER-MUX lehrt nicht nur Prompting, es hat Best Practices eingebaut:

- 5-Baustein-Prompt: Rolle, Kontext, Aufgabe, Constraints, Format
- Anti-Halluzinations-Strategien in den CLAUDE.md Templates
- Confirmation-Trap-Vermeidung: Agents sind instruiert Gegenpositionen zu benennen
- Doom-Loop-Praevention: Nach 2 gescheiterten Fixes → neue Session
- Two-Pass-Pattern: Generieren → Reviewen → Fixen (drei Agents statt einer)
- 150-Instruktions-Budget: System nutzt ~50, User hat ~100 effektive Slots
- Context-Rot-Awareness: 2-Stunden-Heuristik, Handover-Pattern, /compact vs. Fresh

### Keyboard Shortcuts

- Cmd+B: Bugreport Dialog
- Escape: Dialog schliessen
- Cmd+C/V: Copy/Paste
- Ctrl+Shift+Space: Voice Input toggle
- Cmd+S: Note speichern (triggert Auto-Tagging)
- Cmd+Enter: Prompt absenden
- Enter: Neue Zeile im Prompt

### Slash Commands (Claude Code)

- /help, /status, /compact, /clear, /resume
- /config, /model, /permissions, /fast
- /commit, /pr, /review, /init
- /memory, /cost, /context
- ! vor Befehl: Shell-Ausfuehrung
- Custom Slash Commands in .claude/commands/ moeglich

---

## SEITE 3: Download & Install + First Steps

### Voraussetzungen

| Was | Wie pruefen | Wie installieren |
|---|---|---|
| macOS 12+ | `sw_vers` | — |
| Homebrew | `brew --version` | /bin/bash -c "$(curl ...)" von brew.sh |
| tmux | `tmux -V` | `brew install tmux` |
| Node.js 20+ | `node --version` | `brew install node` oder nvm |
| Claude Code CLI | `claude --version` | `npm install -g @anthropic-ai/claude-code` dann `claude auth` |
| Anthropic Account | — | Noetig fuer Claude Code. Max-Abo (20$/Monat) empfohlen fuer Opus-Zugang |

### Installation

```bash
git clone https://github.com/cmarkus42/cipher-mux-electron.git
cd cipher-mux-electron
npm install
npm run build
npm start
```

**Voice-Hinweis:** Voice Features erfordern einen Whisper-Model-Download beim ersten Start. Falls der Build auf Apple Silicon mit Native-Module-Fehlern scheitert: `npm run rebuild:voice` separat ausfuehren. Voice ist optional — CIPHER-MUX funktioniert ohne.

### Erster Start — Was passiert

1. **tmux initialisiert sich.** CIPHER-MUX startet einen tmux-Server im Control Mode. Du siehst das Grid mit leeren Zellen und drei Action-Buttons pro Zelle: Projekt, Session, Notes.

2. **Projekt oeffnen.** Klick auf "projekt" in einer Zelle → Project-Popup oeffnet sich. Es scannt deine konfigurierten Projekt-Verzeichnisse. Projekt auswaehlen → Claude Code Session startet in dieser Zelle.

3. **Zweite Session hinzufuegen.** "session" Button fuer eine Raw-Session, oder nochmal "projekt" in einer anderen Zelle. Spalten hinzufuegen mit dem Spalten-Button in der Status-Bar.

4. **Sidebar entdecken.** Sidebar-Button in der Status-Bar. Fuenf Tabs: Messages, Background, Input Requests, Notes, Companion Memory.

5. **Orchestrator starten** (optional). Orchestrator-Button in der Status-Bar. Spawnt eine dedizierte Koordinations-Session die andere Sessions steuern kann.

### Companion — Dein Einsteiger-Guide

Der Companion ist eine Entity mit persistentem Memory — dein eingebauter Lehrer:
- Kennt deinen Skill-Level und passt Erklaerungen an
- **Merkt sich** deine Praeferenzen, Lernhindernisse und Projekte ueber Sessions hinweg
- Fuehrt durch Features mit konkreten Beispielen
- Nutzt Analogien statt Jargon
- Kann die App **live vorfuehren** (UI Highlights, Theme-Wechsel, Popups oeffnen per Choreography)
- Bietet nach jeder Erklaerung eine Aktion an ("Willst du das ausprobieren?")
- Kennt alle Guides und kann den naechsten Schritt vorschlagen
- **Spricht** Kernaussagen per TTS vor (optional)

### Lernpfade

**Einsteiger:** First Steps → Daily Workflow → Prompting Fundamentals (produktiver Alltag + Prompting-Basics)

**Fortgeschritten:** Power Moves → Prompting in MUX → Token Craft (Orchestrierung, Advanced Prompting, Token-Effizienz)

**Power-User:** Direkt in die Referenz-Docs, Guides on demand

### Typischer Erster Workflow (Anleitung)

1. Oeffne ein Projekt (z.B. ein bestehendes Webprojekt)
2. Schreib in den Prompt: "Lies die Projektstruktur und erklaer mir was hier passiert"
3. Claude analysiert dein Projekt und gibt dir einen Ueberblick
4. Folge-Prompt: "Aender die Hintergrundfarbe der Startseite auf Dunkelblau"
5. Claude liest den Code, findet die richtige Datei, macht die Aenderung
6. Du siehst den Diff und kannst annehmen oder ablehnen

### Troubleshooting

| Problem | Loesung |
|---|---|
| "Claude Code not found" | CLI nicht im PATH oder nicht authentisiert. `claude auth` im Terminal ausfuehren |
| "tmux not found" | `brew install tmux`, danach CIPHER-MUX neu starten |
| Voice funktioniert nicht | Voice ist optional. Falls Whisper nicht laedt, laeuft CIPHER-MUX ohne weiter |
| Session reagiert nicht | Zelle schliessen (X), neue Session oeffnen. tmux-Sessions ueberleben das |
| Kontext voll (rote Anzeige) | /clear im Prompt oder neue Session starten. Handover-Pattern nutzen |

### Settings

- **Scan Paths:** Konfiguriere wo CIPHER-MUX nach Projekten sucht
- **Agent Settings:** Skip Permissions Toggle (fuer erfahrene User)
- **Theme:** Waehle aus 10 Themes (empfohlen: cipher-dark oder high-contrast)

---

## Roadmap / Zukunftsperspektive

### v0.9.9 (aktuell) — macOS, Claude Code, Feature-Complete vor Cyberfactory

- Voller Funktionsumfang wie oben beschrieben (37 MCP-Tools, 7 Entities, Memory, Voice+Scroll+Grid-Nav, TTS, Choreography)
- macOS exklusiv (tmux + osascript Abhaengigkeiten)
- Claude Code CLI als einzige unterstuetzte Engine
- MIT-Lizenz, Open Source, Single Maintainer
- Naechster Schritt: Cyberfactory Pack (Entity-Persona-System Rebuild via Cloud Code Instance)

### v1.0 (geplant) — Cyberfactory Update + Veroeffentlichung

- **Cyberfactory Pack:** 20 Spec-Dokumente fuer Persona-System-Rebuild (Tugenden-Mapping, Presets, Workspaces)
- Umsetzung via Anthropic Cloud Code Instance (Remote Agents), nicht lokal
- Ziel: Vorbildliche Entity-Presets mit durchdachten Personas, Arbeitsregeln, Scopes

### v2 (Perspektive) — Cross-Platform

- **node-pty statt tmux:** Echte Cross-Platform-Faehigkeit (macOS, Linux, Windows nativ — ohne WSL)
- **Linux-Support** ohne tmux-Pflicht
- **Windows-Support** nativ moeglich
- **AgentAdapter-Schicht:** Andere CLI-Tools neben Claude Code integrierbar
- Scope und Timeline abhaengig von Community-Feedback auf v1

---

## Differenzierung / Wettbewerb

Fuer den Fall dass die Website darauf eingehen will:

- **vs. Claude Squad:** Aehnliches tmux-Multi-Session-Konzept, aber CIPHER-MUX hat eingebauten MCP-Server, Personas/Workspaces, Voice, Notes, Orchestrator mit Delegations-Logik, visuelles Grid statt Terminal-UI
- **vs. Aider:** Aider ist ein eigener Coding-Agent. CIPHER-MUX ist kein Agent sondern ein Cockpit das Claude Code steuert. Andere Schicht.
- **vs. Cline/Continue:** IDE-Plugins (VS Code). CIPHER-MUX ist eine eigenstaendige App, nicht an eine IDE gebunden.
- **vs. Cursor:** Closed-Source IDE mit eingebautem KI. CIPHER-MUX ist Open Source, CLI-basiert, und das Cockpit-Konzept ist fundamental anders (Multi-Session-Orchestrierung statt Single-Session-IDE-Integration).

---

## Besonderheiten die prominent platziert werden sollten

1. **Glaesernes Cockpit / Lernraum** — DAS Alleinstellungsmerkmal. Nicht nur Tool sondern Wissenstransfer.
2. **Barrierefreiheit als Prinzip** — Voice, WCAG AAA, Companion, Abstraktion von Terminal-Komplexitaet, BT-Remote
3. **Agentic Engineering fuer Nicht-Programmierer** — Die Rampe statt Treppe. Beschreiben statt Coden.
4. **Alles lokal** — Voice (Whisper lokal), Notes (SQLite lokal), Auto-Tagging (Ollama lokal), keine Daten verlassen das Geraet (ausser Claude Code API-Calls)
5. **Orchestrierung ist eingebaut** — Nicht "du kannst auch mehrere Sessions haben" sondern ein durchdachtes System mit Delegierung, Monitoring, Eskalation, Input Requests
6. **Session Persistence** — tmux-backed, ueberlebt Crashes. Nichts geht verloren.
7. **Community-Profil / Single Maintainer** — Ehrlichkeit: Ein Mensch, ein Seitenprojekt, kein Startup. Maintainer antwortet wenn er Zeit hat. Das Tool existiert weil er es selbst nutzt.

---

## Tone of Voice fuer Gemini

- Deutsch, Du-Form
- Enthusiastisch aber nicht aufdringlich
- Direkte Ansagen statt vorsichtige Formulierungen
- Einschraenkungen offen benennen (macOS only, Single Maintainer, kein Support-SLA)
- Nerd-Referenzen erlaubt wenn sie passen
- Keine Marketing-Floskeln: kein "revolutionaer", kein "blazing fast", kein "game-changer"
- Lieber "Das kriegen wir hin" als "Entdecken Sie die Moeglichkeiten"
- Die Sprache soll sich anfuehlen wie ein begeisterter Freund der dir sein Lieblingsprojekt zeigt

---

## Technische Fakten (Quick Reference)

- Electron 34, Preact, TypeScript, Vite
- tmux Backend (Control Mode)
- xterm.js Terminal-Emulator (WebGL + Canvas Fallback)
- Claude Code CLI als Engine
- SQLite (better-sqlite3) fuer Message Bus, Tasks, Notes, Companion Memory (FTS5)
- CodeMirror 6 fuer Notes Editor
- Whisper.cpp fuer STT (lokal, optional)
- Piper fuer TTS (lokal, optional, macOS `say` als Fallback)
- Silero VAD fuer Voice Activity Detection
- Ollama (gemma3:4b) fuer Auto-Tagging (lokal, optional)
- i18next fuer Internationalisierung
- MCP Server (Streamable HTTP) auf localhost:3100 mit Bearer-Token Auth
- **37 MCP Tools in 9 Kategorien**
- **7 Entity-Typen** (Orchestrator, MPO, Launcher, Companion, Refinement, Voice-Relay, Audit)
- Max 21 Grid-Zellen (7x3)
- 10 Themes (+ mux_theme_set per MCP)
- Unbegrenzte Custom Personas + dynamische Entities per Dateisystem
- Voice: STT, TTS, VAD, Scroll-Commands, Grid-Navigation, STT Pin, BT Shutter
- UI Choreography: Timeline-basierte UI-Automation (max 100 Steps, 30s)
- MIT Lizenz
- Keine Telemetrie
- Keine Datensammlung
- Kein Backend/Cloud-Service
- ~97 typed IPC-Channels, 591 Tests
