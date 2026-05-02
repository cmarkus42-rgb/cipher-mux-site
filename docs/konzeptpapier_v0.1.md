---
date: 2026-04-26
status: v0.3 — Phase-4-Entwurf, alle Hauptabschnitte ausgearbeitet
role: Konzeptpapier, Eingabe für Phase 5 (Übergabe an Claude Code im Launcher-Flow)
---

# Konzeptpapier — cipher-mux OSS-Veröffentlichung

Dieses Konzeptpapier konkretisiert den [[brief]] zu einem umsetzbaren Plan. Die Struktur folgt den drei Pflicht-Deliverables aus dem Brief plus einer Pipeline-Spec. **Stand v0.3:** Alle vier Hauptabschnitte sind ausgearbeitet, Übergabe-Hinweise enthalten den Methodik-Stand und die offene Reflexions-Frage zu den Deliverables.

## 1. GitHub-Release-Set

### Zweck und Abgrenzung

Das GitHub-Release-Set sind die Markdown- und YAML-Dateien, die im cipher-mux-Repo zum Launch vorhanden sein müssen, damit das Repo professionell wirkt und Mit-Beitragende einen klaren Andock-Pfad finden. Es ist nicht der Code selbst — der existiert bereits — sondern die Hülle: Dokumentation, Templates, ehrliche Erwartungs-Steuerung. Der Aufwand bleibt überschaubar, weil viele Bestandteile aus etablierten OSS-Standards übernommen werden, statt sie selbst zu erfinden.

### Struktur

Was am Repo-Root liegt:

```
README.md                            — Haupteinstieg, ausgearbeitet siehe unten
CONTRIBUTING.md                      — Wie beitragen, Spec siehe unten
CODE_OF_CONDUCT.md                   — Contributor Covenant 2.1, unverändert übernommen
LICENSE                              — MIT, vorhanden, bleibt
CHANGELOG.md                         — Keep-a-Changelog, Template siehe unten
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.md                — Spec siehe unten
│   ├── feature_request.md           — Spec siehe unten
│   └── question.md                  — Spec siehe unten
├── PULL_REQUEST_TEMPLATE.md         — Spec siehe unten
└── workflows/
    └── build-test.yml               — Minimal CI für Build + Test, Spec siehe unten
```

Bewusst *nicht* enthalten: SECURITY.md (für ein erstes OSS-Projekt mit niedrigem Sicherheits-Profil ist das Overkill — die Issue-Tracker-Adresse reicht), FUNDING.yml (kein Sponsoring in v1), GitHub-Discussions-Konfiguration (lassen wir auf Default — falls sich das Repo an einer Stelle aktiviert, gut, sonst nicht).

### README — ausgearbeitet

Der README ist der Text, der wirkt. Die anderen Files sind Pflicht-Hülle. Hier daher die ausgearbeitete Version (englisch, primärsprachlich gemäß Brief; deutsche Fassung läuft synchron als `README.de.md` mit identischer Struktur).

```markdown
# cipher-mux

A cockpit for working with multiple Claude Code sessions in parallel.

![cipher-mux grid overview](media-kit/02_screenshots/01-grid-overview.png)

## What it is

cipher-mux is an Electron app for running multiple Claude Code sessions
side by side. Sessions live in a grid layout, backed by tmux, so they
survive crashes and stay alive between app restarts. A built-in MCP
server connects sessions to each other and to external tools, and an
Orchestrator session can coordinate work across the grid. Voice input,
an integrated notes editor, and a teaching persona named Relay round
out the cockpit.

This was built originally for my own multi-session work with Claude Code.
It's published here because it might be useful to others in similar
situations.

## What it isn't

- A replacement for Claude Code — cipher-mux runs Claude Code sessions,
  it doesn't replace the CLI.
- A tool for absolute beginners to AI-assisted coding — the in-app Relay
  persona helps with onboarding once you're inside, but you'll want
  Claude Code installed and working before you start.
- Cross-platform — macOS only in v1. Linux is on the v2 horizon. Windows
  is structurally not on the path (tmux dependency).
- A commercial product — MIT-licensed, no paid tier, no telemetry.

## Quick start

Prerequisites: macOS, Homebrew, Claude Code CLI installed and authenticated.

```bash
brew install tmux
git clone https://github.com/[handle]/cipher-mux.git
cd cipher-mux
npm install && npm run build
npm start
```

Detailed walkthrough including the integrated tutorial in [docs/getting-started.md].

## Core concepts

A short tour of what's in the cockpit:

- **Grid** — your work area. Each cell can hold a Claude Code session,
  a notes editor, or stay empty as a launcher.
- **Sessions** — independent Claude Code conversations, each running
  in its own tmux instance. Survives app restarts.
- **Orchestrator** — a dedicated session that can delegate tasks to
  other sessions through the message bus.
- **MPO (Multi-Project Orchestrator)** — accepts a requirement package
  and breaks it into parallel project tasks across multiple launchers.
- **Workspaces** — saved grid layouts with assigned personas and
  projects. Apply a workspace, get a configured cockpit.
- **Personas** — role definitions (Orchestrator, MPO, Worker, custom)
  that shape how a session behaves.
- **MCP server** — built-in HTTP server exposing 16 tools for sessions
  and external clients.
- **Voice** — Whisper-based transcription as input to the focused session.

A longer walkthrough lives in `the how-to-session/` inside the repo —
that's the home of Relay, an in-app teaching persona.

## Compatibility and stability

cipher-mux depends on Claude Code CLI's current contract — specifically
on `claude mcp add-json`, the statusLine hook format, and CLI flags. If
Anthropic changes that contract, cipher-mux may break temporarily until
I have time to adapt. Usually a few days, occasionally longer. Open an
issue and I'll mark affected versions clearly in the release notes.

The MCP server is bound to localhost on port 3100 with bearer-token
authentication. Native dependencies (better-sqlite3, optionally Whisper)
get rebuilt on install.

## Maintenance mode

This project is actively developed as long as I use it myself. If I
ever stop using it, I'll mark this README clearly with a maintenance-
mode notice rather than letting the project quietly fade. Forks and PRs
remain welcome regardless.

## Architecture

For the curious: there are eight Architecture Decision Records under
`docs/decisions/` documenting the technical choices — tmux control mode,
MCP transport, statusLine integration, and others. The full SPEC lives
in `docs/SPEC.md`.

## License

MIT. See LICENSE.

## Built by

[Name]. cipher-mux is my first published OSS project. Issues, PRs, and
forks welcome via GitHub. I respond when I have time, not on a schedule.
```

Was an diesem README absichtlich gewählt ist:

- **Hero ohne Adjektive.** „A cockpit for working with multiple Claude Code sessions in parallel." Eine Tatsache, kein Versprechen. Das Screenshot trägt mehr als jeder Buzzword-Satz.
- **„What it isn't"-Sektion gleich oben.** Vier Abgrenzungen, ehrlich. Das ist die effizienteste Form von Erwartungs-Steuerung — wer weiterliest, weiß, dass er nicht im falschen Tool gelandet ist.
- **„This was built originally for my own work."** Die Maintainer-Stimme ist sofort sichtbar, ohne Founder-Etikett. Konsistent zur Brief-Tonalität.
- **Compatibility-Statement und Maintenance-Mode-Klausel** sind eigene Sektionen, nicht im Footer versteckt. Das ist die direkte Umsetzung der beiden kritischen Pre-Mortem-Risiken (G1, G2).
- **„I respond when I have time, not on a schedule"** als Schluss. Setzt die Erwartung, die in CONTRIBUTING.md noch detaillierter wiederholt wird.

Was im README *nicht* drin ist: Star-Counter-Badges, „Used by"-Logos (haben wir nicht), Discord-Link (kein Discord), Newsletter-Subscribe (kein Newsletter), Sponsoring-Buttons (kein Sponsoring), „Powered by" oder „Made with love"-Phrasen.

Aufwand für Erstellung des deutschen Synchron-Files (`README.de.md`): ca. 20–30 min, wenn das englische steht.

### CONTRIBUTING.md — Spec, kein Voll-Draft

Eine Seite, klar strukturiert. Was rein muss:

- **„Before you contribute"-Abschnitt:** der Maintainer ist Solo-Hobbyist, antwortet nicht garantiert in einer bestimmten Zeit. Wer auf eine schnelle Antwort angewiesen ist, sollte das vorher wissen. Das ist wichtiger als bei Profi-OSS-Projekten und gehört nicht versteckt in den Footer.
- **Issue-Disziplin:** vor einem neuen Issue im Tracker suchen. Konkrete Repro-Schritte erwartet. Bug vs. Feature vs. Question per Template trennen.
- **PR-Disziplin:** Branch von main, ein Thema pro PR, Tests müssen weiter laufen, Linter-Output muss clean sein. Größere Änderungen vorher als Issue diskutieren.
- **Code-Stil:** verweist auf bestehende Konventionen im Code (TypeScript strict, Prettier-Konfiguration, ESLint-Regeln). Kein eigenes Styleguide-Dokument hier — der Code ist die Quelle.
- **Lizenz-Hinweis:** Beiträge fließen unter MIT in den Codebestand.

Aufwand: ca. 60–90 min für eine ehrliche Erstfassung.

### CODE_OF_CONDUCT.md — übernommen, nicht erfunden

**Contributor Covenant 2.1** wird unverändert übernommen — der Standard für 95 % der OSS-Projekte, keine Selbst-Erfindung. Konkret: die offizielle Markdown-Datei aus contributor-covenant.org herunterladen, in den Repo legen, Kontakt-Mail des Maintainers an der vorgesehenen Stelle einsetzen.

Aufwand: 10 min.

### CHANGELOG.md — Keep-a-Changelog-Template

Initial-Datei mit der Standard-Header-Erklärung plus einem Eintrag für die Veröffentlichungs-Version:

```markdown
# Changelog

All notable changes to cipher-mux will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project loosely follows semantic versioning.

## [1.0.0] — YYYY-MM-DD

### Initial public release

- Multi-session grid with tmux backend
- Built-in MCP server with 16 tools
- Orchestrator and MPO sessions
- Workspaces with personas
- Voice input via Whisper
- Notes editor with auto-tagging
- Relay teaching persona

[1.0.0]: https://github.com/[handle]/cipher-mux/releases/tag/v1.0.0
```

Spätere Releases werden im hybrid-manuellen Modell aus dem Brief gepflegt — Maintainer schreibt einen Changelog-Eintrag pro Release manuell. Die initiale v1.0.0-Liste ist eine Zusammenfassung des bestehenden Tool-Stands, kein chronologischer Audit der Vor-Veröffentlichungs-Entwicklung.

Aufwand: 30 min.

### Issue- und PR-Templates — Spezifikation

Drei Issue-Templates, je eine Datei in `.github/ISSUE_TEMPLATE/`:

- **`bug_report.md`** — Felder: was passiert, was sollte passieren, Repro-Schritte, macOS-Version, Claude-Code-Version, cipher-mux-Version, Logs falls vorhanden. Standard-Format, GitHub rendert es als Form.
- **`feature_request.md`** — Felder: was fehlt, was wäre der Nutzen, gibt's einen Workaround. Plus Hinweis: nicht alle Features werden umgesetzt, der Maintainer entscheidet nach Eigen-Use-Case.
- **`question.md`** — Felder: deine Frage, was du schon probiert hast. Plus Hinweis, dass GitHub Discussions oder die Relay-In-App-Hilfe oft schneller weiterhelfen.

PR-Template (`PULL_REQUEST_TEMPLATE.md`): kurzes Format — was ändert sich, warum, welche Tests laufen, gibt's einen vorausgegangenen Issue.

Aufwand: 30 min für alle vier Templates zusammen.

### Build-Test-Workflow — Spezifikation

Eine GitHub-Action-YAML-Datei in `.github/workflows/build-test.yml` die bei jedem Push und PR auf main läuft:

- macOS-Runner (weil Tool macOS-only)
- Node.js 22 (oder die im `package.json` engine-feld erwartete Version)
- `npm install`
- `npm run build`
- `npm run test`
- `npm run lint`

Kein Release-Workflow in v1 — Releases werden manuell getriggert (passt zum hybrid-manuellen Modell aus dem Brief). Falls später automatisierter Release-Wunsch kommt, wäre `release-please` der Erst-Kandidat (Strang C), aber das ist v1.x-Frage, nicht v1.0.

Aufwand: 30–60 min, abhängig davon ob bestehende npm-Skripte direkt durchlaufen oder erst kalibriert werden müssen.

### Aufwand-Bilanz für das Release-Set

Konsolidiert aus den Einzel-Schätzungen:

- README.md (EN) ausarbeiten: 60–90 min (vorgezeichnet, hier hauptsächlich Anpassung an Repo-Realität)
- README.de.md synchron: 20–30 min
- CONTRIBUTING.md: 60–90 min
- CODE_OF_CONDUCT.md übernehmen: 10 min
- CHANGELOG.md initial: 30 min
- Issue- + PR-Templates: 30 min
- build-test-workflow: 30–60 min

**Total: ca. 4–6 Stunden Erst-Aufwand**, ähnliche Größenordnung wie das Media-Kit. Konsistent zum 9–14-Stunden-Korridor aus Strang C für die ganze Erst-Veröffentlichung.

### Pflege

Was sich pro Release ändert:

- CHANGELOG.md: ein neuer Eintrag (5–15 min, abhängig von Release-Umfang)
- README.md: nur bei Substanz-Änderungen (neue Core-Concepts, geänderte Voraussetzungen) — also selten
- Issue-/PR-Templates: praktisch nie

Pro Release liegt der GitHub-Release-Set-Pflege-Aufwand bei 5–15 Minuten — passt in den 25–40-min-Korridor aus dem Brief.

## 2. Website

### Zweck und Abgrenzung

Die Website ist eine eigenständige Static-Site, die das Tool für Erst-Besucher einordnet, ohne dass sie das Repo lesen müssen. Sie hat Tiefe (sechs Seiten), weil das Tool selbst Tiefe hat — die Personas, der MCP-Server, die Workspaces brauchen Erklärungs-Raum, sonst werden sie zu Schmuck-Listen. Der Aufwand bleibt überschaubar, weil die Erstellung KI-gestützt läuft und die Inhalte aus dem bestehenden Material (Relay-Guides, ADRs, Brain-Notes) destilliert werden, statt neu erfunden.

Sie ist *keine* Marketing-Seite mit Conversion-Funnel. Sie ist eine ehrliche Vorstellung mit klaren Anlauf-Stellen für Leute, die das Tool verstehen oder ausprobieren wollen.

### Technische Grundsetzung

- **Engine:** Astro mit Content-Collections (per Brief-Entscheidung).
- **Hosting:** GitHub Pages, kostenlos, GitHub-Action baut bei Push auf `main`.
- **Repo:** eigenes Repo `cipher-mux-site` neben dem Tool-Repo. Begründung: das Tool-Repo bleibt clean (Code), die Site hat eigenen Build-Pfad und Issue-Tracker. Erfordert minimalen Sync-Aufwand (Repo-Verlinkung, Versions-Hinweise) — der README bleibt Single-Source-of-Truth für Quick-Start, die Site fasst zusammen und verlinkt.
- **Domain:** kostenlose `[handle].github.io/cipher-mux` als v1-Default. Custom-Domain optional in v1.x, gehört in die Pipeline-Spec.
- **Styling:** ein eigenes Astro-Theme passend zum Tool — die Tool-Themes (cipher-ivory, cipher-dark) als Inspirations-Quelle, nicht 1:1 übernommen. Ruhig, viel Whitespace, Mono-Schrift für Code-Blöcke (Fira Code aus dem Tool), Sans-Schrift für Lese-Inhalte (Rajdhani-Bold für Header, System-Sans für Body).
- **Sprache:** EN-first, jede Seite hat eine `index.de.astro`-Variante. Sprach-Switcher in der Top-Nav.

### Sitemap

Sechs Seiten, eine Footer-Navigation, ein Sprach-Switcher.

```
/                      — Landing Page
/how-it-works          — Konzepte und Architektur-Skizze
/get-started           — Voraussetzungen plus Installation
/features              — Funktions-Übersicht mit konkreten Anwendungs-Hinweisen
/use-cases             — Drei Profile, jedes mit Setup, Workflow, Mehrwert
/faq                   — Häufige Fragen
```

Die Site verlinkt nach außen zu: GitHub-Repo, CHANGELOG (im Repo), ADR-Reihe (im Repo), in-app Relay-Material (im Repo unter `the how-to-session/`). Diese externen Verlinkungen ersetzen einen separaten Doku-Bereich auf der Site selbst.

### Landing-Page — ausgearbeitet

Hero-Block (`/`):

```
A cockpit for working with multiple Claude Code sessions in parallel.

[Screenshot: 2x2 grid mit aktiven Sessions plus Notes-Cell]

cipher-mux is an Electron app that lets you run multiple Claude Code
sessions side by side in a grid layout. Sessions are tmux-backed, so
they survive crashes and stay alive between app restarts. A built-in
MCP server connects sessions to each other, and an Orchestrator session
can coordinate work across the grid.

I built this for my own multi-session work with Claude Code. Sharing
it because it might be useful to others in similar situations.

[ Get started → ]    [ View on GitHub → ]    [ See features → ]
```

Direkt unter dem Hero: ein kurzer „What it isn't"-Block, identisch zur README-Struktur. Die selben vier Abgrenzungen — Replacement, Beginners, Cross-Platform, Commercial. Erwartungs-Steuerung gleich auf der Landing-Page.

Drittens: ein „Who finds this useful?"-Block mit den drei Use-Case-Karten (jeweils 60 Wörter, mit Link auf das ausgearbeitete Profil unter `/use-cases`). Das ist die Selbst-Selektions-Mechanik aus dem Brief — Tiefe ohne UI-Filter.

Viertens: eine kurze „How it works in 30 seconds"-Sektion mit drei Schritten (Install → Spawn sessions → Orchestrate), als Brücke zu den Detail-Seiten.

Footer der Landing-Page: GitHub-Link, MIT-Hinweis, Maintainer-Bio-Schnipsel („cipher-mux is my first published OSS project."). Kein Star-Counter, keine „Used by"-Logos, kein Newsletter-Subscribe.

### How-it-works (Konzepte) — Spec

Eine Seite, die die Kern-Konzepte erklärt. Die Reihenfolge folgt der mentalen Treppe:

1. **Sessions** — was das ist, warum tmux-Backend, was es bedeutet (überleben Crashes).
2. **Grid** — Layout, Cell-Typen (Session, Notes, Empty Launcher), max-Größe.
3. **Message Bus** — wie Sessions kommunizieren, warum SQLite, was Topics sind.
4. **Orchestrator** — was er macht, dass er eine eigene Session ist, wie er via MCP delegiert.
5. **MPO** — der Multi-Project-Orchestrator als Erweiterung, für Mehr-Projekt-Aufgaben.
6. **Workspaces + Personas** — gespeicherte Layouts, Rollen-Konzept, Apply-Mechanik.
7. **MCP Server** — der eingebaute HTTP-Server mit 16 Tools, eingebunden für externe Clients.
8. **Voice + Notes + Relay** — die kleineren Cockpit-Stücke, die das Bild abrunden.

Pro Konzept: 80–120 Wörter Erklärung plus eine sinnvolle Analogie wo möglich (die Relay-Persona verwendet Analogien — Context Window = RAM, Session = phone call, Orchestrator = air traffic controller; die übernehmen wir).

Am Ende der Seite eine **Architektur-Skizze** als SVG: Grid-Cells → tmux-Sessions → Message Bus → MCP-Server → externer Client. Selbst gemacht in ein paar Stunden, kein professionelles Diagramm-Tool nötig — ein einfaches Box-und-Pfeil-Bild reicht.

Aufwand: ca. 4–6 Stunden inklusive Skizze.

### Get-Started — Spec

Eine Seite mit drei Blöcken:

1. **Voraussetzungen** — als Tabelle mit Status-Markierung. macOS-Version, Homebrew, Claude-Code-CLI installiert und authentisiert. Jede Zeile mit kurzer Erklärung („not sure if you have it? run `brew --version`"). Keine Mini-Videos, kein YouTube-Embed — die Erklärungen sind kurz genug.
2. **Installation** — die drei Befehle aus dem README, plus eine Hinweis-Box für Apple-Silicon-spezifische Whisper-Fragen (das ist die Pre-Mortem-G3-Doku-Disziplin).
3. **First run** — was beim ersten App-Start passiert (tmux-Initialisierung, MCP-Server-Boot), und wann Relay sich einklinkt. Mit Verweis auf `the how-to-session/guides/01-first-steps.md` für die ausführliche Variante.

Aufwand: 2–3 Stunden.

### Features — Spec

Funktions-Übersicht in acht Karten. Jede Karte: Titel, ein Satz Funktion, ein Satz konkreter Nutzen, ein kleiner Screenshot oder ein Code-/Befehls-Beispiel.

1. **Multi-Session Grid** — Mehrere Claude-Sessions parallel, bis 7×3.
2. **Persistent Sessions** — tmux-backed, überleben App-Neustarts.
3. **Orchestrator Session** — Delegiert Aufgaben an Worker-Sessions via Message Bus.
4. **Multi-Project Orchestrator (MPO)** — Zerlegt Anforderungspakete in parallele Teilprojekte.
5. **Built-in MCP Server** — 16 Tools für Sessions und externe MCP-Clients.
6. **Workspaces + Personas** — Vorkonfigurierte Layouts mit Rollen-Definitionen.
7. **Voice Input** — Whisper-basierte Spracheingabe in fokussierte Session.
8. **Notes Editor** — CodeMirror-basiert, Markdown mit Frontmatter, Auto-Tagging via Ollama.

Pro Karte 80–100 Wörter. Bewusst keine Bullet-Listen mit „Features" wie auf gehypten Marketing-Seiten — eher Kurz-Erklärungen, die einen Leser einordnen lassen, was das Stück ist und wann es greift.

Aufwand: 3–4 Stunden.

### Use-Cases — drei Profile, ausgearbeitet

Diese Seite trägt die Audience-Tiefe aus dem Brief. Drei Profile, jedes mit konkretem Setup, typischem Workflow, Mehrwert gegenüber „Claude alleine", und einer ehrlichen „wofür nicht geeignet"-Notiz.

#### Profil 1 — Maker / Side-Project-Bauer

> *Du baust Sachen am Wochenende. Side-Projects, Tools für dich selbst, Experimente. Du nutzt Claude Code, weil du nicht jede Funktion selbst tippen willst, aber du willst auch nicht in Marketing-Tool-Wahnsinn abdriften — du willst, dass das Ergebnis funktioniert und du es verstehst.*
>
> **Typisches Setup:** Ein 2×2-Grid. Oben links eine Frontend-Session, oben rechts eine Backend-Session, unten links ein Notes-Editor für Ideen und Architektur-Skizzen, unten rechts eine Orchestrator-Session, die du als Sparringspartner nutzt — kein voller Workspace mit MPO, das wäre Overkill.
>
> **Workflow:** Du startest mit einer kurzen Notiz im Notes-Editor („was will ich heute bauen?"). Du formulierst die Aufgabe an die Orchestrator-Session, die delegiert an Frontend oder Backend, je nachdem. Du arbeitest iterativ — Code review zwischen den Sessions, kleine Experimente parallel. Wenn du auf eine Idee kommst, die du später aufgreifen willst, landet sie als Note mit Tag.
>
> **Mehrwert:** Statt einer Claude-Session, die Frontend, Backend, Tests und Notizen alles in einem Kontext mischt, hast du ein strukturiertes Cockpit. Dein Kontext bleibt sauber pro Session, und der Orchestrator hilft beim Delegieren ohne dass du zwischen Tabs wechseln musst.
>
> **Wofür nicht geeignet:** Wenn du nur eine kurze Frage an Claude stellst und sofort wieder zurück zu Linear/Notion/Slack willst — dafür reicht das Claude-Web-Interface. cipher-mux ist für Sessions, die länger leben.

#### Profil 2 — Berater / Solo-Dienstleister

> *Du arbeitest an mehreren Kundenprojekten gleichzeitig. Du nutzt Claude Code, um Konzepte zu entwerfen, Briefings zu refinen, Drafts zu schreiben, Analysen vorzubereiten. Vermischung zwischen Kunden ist tabu, sowohl im Kontext als auch in den Outputs.*
>
> **Typisches Setup:** Workspaces. Pro Kundenprojekt ein Workspace mit eigenem Grid-Layout und benannten Personas — z.B. „Refinement-Sparring" für Anforderungs-Schärfung, „Critique" für Feedback-Runden, „Doc-Writer" für Lesefassungs-Erstellung. Apply-Klick lädt das ganze Set, inklusive verbundener Notes.
>
> **Workflow:** Du wechselst Workspaces je nach Kundentermin. Innerhalb eines Workspaces durchläufst du eine typische Refinement-Schleife: Anforderungs-Skizze in den Notes, Brief an Refinement-Sparring, Critique-Pass durch eine zweite Session, finaler Draft in Doc-Writer. Persona-Prompts halten die Qualitäts-Bar konsistent über alle Kunden.
>
> **Mehrwert:** Saubere Trennung zwischen Kundenkontexten ohne Tab-Akrobatik. Personas garantieren, dass die Refinement-Tiefe nicht von Kunde zu Kunde driftet. Der Notes-Editor wird zur Wissens-Sammlung pro Projekt, mit Auto-Tagging das später Suche erlaubt.
>
> **Wofür nicht geeignet:** Wenn du primär Slides oder Excel-Modelle baust und Claude nur als Schreib-Assistent nutzt — dafür ist das Cockpit zu schwergewichtig. cipher-mux glänzt, wenn die Arbeit textuell-strukturiert ist und mehrere parallele Streams hat.

#### Profil 3 — Entwickler aller Skill-Levels

> *Du codest regelmäßig. Claude Code ist Teil deines Workflows — du nutzt es für Code-Generierung, Reviews, Refactorings. Eine Single-Session reicht dir nicht mehr, weil du oft an Frontend, Backend und Tests parallel arbeitest und das Kontext-Springen ermüdet.*
>
> **Typisches Setup:** Ein 3×2-Grid. Oben drei Worker-Sessions (Frontend, Backend, Tests), unten links eine Orchestrator-Session, unten Mitte ein Notes-Editor für Design-Entscheidungen, unten rechts ein Empty-Launcher für ad-hoc-Sessions (z.B. Debugging-Spike).
>
> **Workflow:** Du startest mit einer Aufgabe an die Orchestrator-Session — „Add OAuth flow with Google and GitHub providers". Der Orchestrator zerlegt das in Frontend-Komponenten, Backend-Endpoints, Test-Cases, und delegiert via Message Bus an die jeweiligen Worker. Du beobachtest die Streams, korrigierst wo nötig, eingreifst per Voice oder Text. Notes halten Architektur-Entscheidungen fest, der MCP-Server kann externe Tools (z.B. Datenbank-Inspektor) anbinden.
>
> **Mehrwert:** Parallele Code-Arbeit statt seriellem Tab-Springen. Die Orchestrator-Session hält den Überblick, ohne dass du selbst zum Workflow-Manager wirst. Voice-Input für die kurzen „mach mal X"-Anweisungen, Notes für die Stellen, an denen du später nochmal hinmusst.
>
> **Wofür nicht geeignet:** Wenn du ohnehin nur in einer einzigen Codebase mit einem schmalen Fokus arbeitest und Claude Code in einer einzelnen Session völlig ausreicht — dann ist das Grid Overhead. cipher-mux greift, wenn parallele Streams real existieren, nicht wenn sie konstruiert werden.

Aufwand für die Use-Case-Seite: 4–5 Stunden inklusive Schreiben, Iterieren, Mini-User-Test (siehe Pipeline-Spec).

### FAQ — Spec

Eine Seite mit etwa zehn Fragen. Vorgeschlagene Liste:

1. *Why macOS only?* — tmux dependency plus osascript-Integration; Linux-Portierung in v2 vorgesehen, Windows nicht im Plan.
2. *Do I need an Anthropic account?* — Ja, weil Claude Code CLI dahinter steckt. cipher-mux verwaltet keine eigenen API-Keys.
3. *How is this different from Claude Squad / Aider / Cline?* — kurze Antwort: tmux-Multi-Session wie Claude Squad, plus eingebauter MCP-Server, plus Personas/Workspaces, plus Voice. Anders gewichtet als Aider (kein eigener Coding-Agent) oder Cline (kein VS-Code-Plugin).
4. *Can I use this without Claude Code, e.g. with Aider?* — In v1 nein, das ist Claude-Code-spezifisch. Die parallele technische Ideation plant einen AgentAdapter — siehe Compatibility-Statement im README.
5. *How do I create my own Persona?* — Verweis auf Workspaces+Personas-Editor in der App, plus die Builtin-Personas als Vorlagen.
6. *Where does my data go?* — Lokal in `~/.config/cipher-mux/`. Kein Telemetry, kein Backend. Claude-Code-eigenes Datenverhalten gilt für die Sessions selbst.
7. *What if Claude Code changes its CLI?* — Verweis auf Compatibility-Statement im README.
8. *Why tmux?* — kurze Antwort: Sessions überleben App-Neustarts und Crashes. ADR-001 verlinkt für die ausführliche Begründung.
9. *Will there be a Linux version?* — v2-Thema, kein verbindlicher Termin.
10. *How do I support the project?* — Issues melden, PRs einreichen, weitersagen. Kein Sponsoring-Setup in v1.

Pro Frage 30–80 Wörter Antwort. Aufwand: 2–3 Stunden für die ganze Liste.

### Aufwand-Bilanz für die Website

Konsolidiert aus den Einzel-Schätzungen:

- Astro-Setup, Theme, Sprach-Switcher, GitHub-Pages-Workflow: 4–6 Stunden
- Landing-Page (Hero, „What it isn't", Use-Case-Karten, „How it works in 30s"): 3–4 Stunden
- How-it-works inklusive Architektur-Skizze: 4–6 Stunden
- Get-Started: 2–3 Stunden
- Features (acht Karten): 3–4 Stunden
- Use-Cases (drei Profile): 4–5 Stunden inklusive Iteration
- FAQ: 2–3 Stunden
- Synchron-DE-Versionen: 4–6 Stunden für alle sechs Seiten zusammen
- Mini-User-Test plus Korrektur-Schleife der Use-Cases: 3–4 Stunden (siehe Pipeline-Spec)

**Total: ca. 29–41 Stunden Erst-Aufwand.**

Das ist substanziell — deutlich mehr als die GitHub- und Media-Kit-Sektionen zusammen. Begründet, weil die Site inhaltlich die meiste Arbeit trägt und mit Tiefe arbeiten soll. Wenn der Aufwand zu groß wird, gibt es zwei legitime Reduzierungs-Pfade: deutsche Synchron-Versionen erst in v1.1 nachziehen (spart 4–6 h, English bleibt v1.0-fertig), oder die FAQ in v1.0 mit nur fünf Fragen starten und auf Issue-Eingang reagieren (spart 1–2 h).

### Pflege

Pro normaler Release: keine Site-Änderung nötig. Nur die `/changelog`-Verlinkung verweist automatisch auf das Repo-CHANGELOG.

Bei Major-Releases (v1.x mit neuen Features): Features-Karte ergänzen, ggf. Use-Case-Profil schärfen wenn ein neuer typischer Anwendungsfall sichtbar wird. Aufwand: 30–60 min pro Major-Release.

Bei Strategie-Änderungen (Linux-Portierung, AgentAdapter-Implementierung): FAQ und „What it isn't"-Sektion aktualisieren. Selten — aber wichtig, dass es nicht vergessen wird.

## 3. Media-Kit

### Zweck und Abgrenzung

Das Media-Kit ist ein **Companion-Ordner unter `media-kit/`** im Repo, der Multiplikatoren (Newsletter-Kuratoren, Tech-Blog-Schreiber, Repost-Quellen) vor allem dann hilft, wenn sie zufällig vorbeikommen. Es ist *keine Press-Kit-Plüschvariante* mit Hochglanz-Materialien für aktive Distribution. Es ist eine Mappe an Bausteinen, die ohne Reibung verwendet werden können — Logo in zwei Farb-Varianten, drei Screenshots in einheitlicher Inszenierung, ein kurzer Demo-Clip, Pitch-Texte in zwei Längen je Sprache.

Das ist die Mittelweg-Variante aus dem Brief — nicht so groß wie Aiders Vollset mit rotierenden Testimonial-Grafiken, nicht so klein wie Claude Squads reines README mit GIF.

### Ordner-Struktur

Der Companion-Ordner folgt der nummerierten Konvention aus `_formate/companion-als-ordner.md`:

```
media-kit/
├── README.md                       — Wegweiser, eine halbe Seite
├── 01_wordmark/                    — Logo / Wortmarke
│   ├── wordmark.svg                — Source of truth
│   ├── wordmark-light.png          — Auf hellem Hintergrund
│   ├── wordmark-dark.png           — Auf dunklem Hintergrund
│   └── wordmark-transparent.png    — Für freie Platzierung
├── 02_screenshots/                 — Tool-Screenshots
│   ├── 01-grid-overview.png        — Grid mit 2–3 aktiven Sessions
│   ├── 02-workspace-editor.png     — Workspace-Editor mit konfiguriertem Layout
│   └── 03-voice-and-notes.png      — Voice-Pille aktiv plus Notes-Editor
├── 03_demo/                        — Demo-Clip
│   ├── cipher-mux-demo.webm        — Primär-Format (klein, modern)
│   └── cipher-mux-demo.gif         — Fallback für statische Reposts
├── 04_pitch/                       — Pitch-Texte
│   ├── pitch-en.md                 — Tagline + ein Absatz, EN
│   ├── pitch-de.md                 — Tagline + ein Absatz, DE
│   └── maintainer-bio.md           — Kurze Bio, EN+DE
└── README.md                       — Wegweiser auf Ordner-Ebene
```

Englisch-first: Wenn ein Multiplikator nur eine Datei zieht, sollte sie auf Englisch sein. Deutsche Versionen liegen synchron mit, ohne dass der Multiplikator danach suchen muss.

### Wordmark-Spezifikation

Eine Wortmarke, kein Symbol-plus-Wort-Logo. Begründung: cipher-mux ist ein Tool, kein Brand mit Symbolik. Eine ehrliche Wortmarke in einer charakteristischen Schrift (z.B. Rajdhani aus dem Tool selbst, oder Fira Code für Mono-Charakter) reicht — und vermeidet das „Founder hat Logo entwerfen lassen"-Signal.

- **Format:** SVG als Source-of-Truth, PNG-Renderings in 1200×630 (OG-Card-passend), 600×315, 240×120.
- **Farb-Varianten:** light (dunkler Text auf hellem Hintergrund), dark (heller Text auf dunklem Hintergrund), transparent.
- **Schrift:** Eine der im Tool verwendeten Schriften, aus dem `src/renderer/fonts/`-Ordner — Rajdhani-Bold ist der Default-Vorschlag, weil sie im Tool für Header-Elemente steht.
- **Kein Icon-File / App-Icon hier** — das App-Icon (für DMG, Dock) liegt im Repo unter `assets/`, gehört nicht ins Media-Kit.

### Screenshot-Spezifikation

Drei Screenshots, einheitlich inszeniert. Das ist der wichtigste Part — Multiplikatoren ziehen meistens *einen* Screenshot, der muss für sich selbst sprechen.

- **Auflösung:** 2× Retina (Standard ist 2880×1800 für 1440×900-Logical), als PNG.
- **Theme im Tool:** ein dunkles Theme (cipher-dark oder vergleichbar), weil dunkle Code-UI-Screenshots in Multi-Pane-Kontexten besser lesbar sind als helle.
- **Fenster-Dimensionen:** Standard-Cell-Größe, 2×2 oder 3×1 Grid sichtbar.
- **Inhalt der Sessions:** echte Inhalte, kein „Lorem Ipsum". Eine Session zeigt einen aktiven Claude-Prompt, eine andere zeigt eine laufende Antwort, eine dritte zeigt das Notes-Modal oder Workspace-Editor.

Die drei konkreten Shots:

1. **`01-grid-overview.png`** — Hauptansicht. 2×2-Grid mit drei aktiven Sessions plus einer Notes-Cell. Status-Bar sichtbar, Theme-Pille sichtbar, Voice-Pille im Idle-Zustand. Was ein Erst-Besucher in zwei Sekunden erfassen können soll: „mehrere Claude-Sessions in einem Fenster, plus Notes".
2. **`02-workspace-editor.png`** — Workspace-Editor offen mit einem konfigurierten Layout. Personas auf den Cells sichtbar (Orchestrator, Worker, MPO), Cell-Inspector geöffnet mit einem Persona-Detail. Was ein Erst-Besucher erfassen soll: „die Sessions kann ich vorab strukturieren, mit Rollen".
3. **`03-voice-and-notes.png`** — Voice-Pille aktiv (rec-Zustand), eine Session im Vordergrund mit eingehendem transkribiertem Text, plus Notes-Modal mit einer Markdown-Note. Was ein Erst-Besucher erfassen soll: „diktieren statt tippen, und das Notiz-System ist auch eingebaut".

### Demo-Clip-Spezifikation

Ein Clip, 12–18 Sekunden, in Kap aufgenommen.

- **Format:** WebM (Primär) und GIF (Fallback). MP4 optional, falls ein Multiplikator es explizit braucht.
- **Auflösung:** 1280×720 oder 1440×810. Nicht 4K — Datei-Größe würde zu schwer für Repost-Workflows.
- **Inhalt:** Ein zusammenhängender Mini-Workflow, kein Sammelsurium. Vorgeschlagener Ablauf:
  1. Drei Sekunden: Empty-Grid-State, User klickt „projekt" auf einer Cell.
  2. Drei Sekunden: Project-Popup öffnet sich, User wählt ein Projekt.
  3. Vier Sekunden: Session startet, Claude-Code-Prompt erscheint, User tippt einen kurzen Prompt.
  4. Drei Sekunden: zweite Cell, User klickt „session", spawnt schnell eine zweite Session.
  5. Zwei Sekunden: Cut auf die fertige Zwei-Pane-Ansicht mit beiden Sessions am Arbeiten.

Ohne Begleit-Audio. Untertitel optional, EN-only — wer aktiv-tont schaut, kann lesen, was passiert.

### Pitch-Texte

Zwei Längen je Sprache, plus Maintainer-Bio.

#### Tagline (EN, in `pitch-en.md`)

> A cockpit for working with multiple Claude Code sessions in parallel.

#### Tagline (DE, in `pitch-de.md`)

> Ein Cockpit für mehrere Claude-Code-Sessions parallel.

#### Ein-Absatz-Pitch (EN, in `pitch-en.md`)

> cipher-mux is an Electron app for running multiple Claude Code sessions side by side. Sessions live in a grid layout, backed by tmux, so they survive crashes and stay alive between app restarts. A built-in MCP server connects sessions to each other and to external tools, and an Orchestrator session can coordinate work across the grid. Voice input, an integrated notes editor, and a teaching persona named Relay round out the cockpit. macOS only in v1, MIT-licensed.

#### Ein-Absatz-Pitch (DE, in `pitch-de.md`)

> cipher-mux ist eine Electron-App für parallele Claude-Code-Sessions. Sessions liegen in einem Grid — tmux-basiert, überleben Crashes und App-Neustarts. Ein eingebauter MCP-Server verbindet sie untereinander und mit externen Tools, eine Orchestrator-Session kann Aufgaben über das Grid hinweg delegieren. Voice-Eingabe, ein integrierter Notes-Editor und eine Lehr-Persona namens Relay vervollständigen das Cockpit. Nur macOS in v1, MIT-Lizenz.

Beide Texte sind kalibriert auf die Tonalitäts-Achse aus dem Brief: nicht großspurig, hilfreich, informativ, sachlich. Keine „revolutionary" oder „blazing fast"-Adjektive. Einschränkungen (macOS-only) werden direkt mitgenannt, nicht versteckt.

#### Maintainer-Bio (EN, in `maintainer-bio.md`)

> Built and maintained by [Name]. cipher-mux is my first published OSS project — built originally for my own multi-session work with Claude Code, now made available because it might be useful to others. Background: SAP PLM consulting, independent entrepreneur. Reach me on GitHub: [@handle].

#### Maintainer-Bio (DE)

> Gebaut und gepflegt von [Name]. cipher-mux ist mein erstes öffentlich veröffentlichtes OSS-Projekt — ursprünglich für meine eigene Multi-Session-Arbeit mit Claude Code entstanden, jetzt verfügbar, weil es vielleicht auch anderen hilft. Hintergrund: SAP-PLM-Consulting, freier Entrepreneur. Erreichbar via GitHub: [@handle].

### Wegweiser-README im Media-Kit-Ordner

Die `media-kit/README.md` ist kurz — eine halbe Seite, kein Inhaltsverzeichnis, sondern Nutzungs-Logik:

```markdown
# Media Kit — cipher-mux

This folder contains the materials needed to write about, share, or repost
cipher-mux without having to ask the maintainer for assets.

If you only have time for one thing: read `04_pitch/pitch-en.md` and grab
`02_screenshots/01-grid-overview.png`. That's enough.

If you want more: the full screenshot set, the demo clip, and the wordmark
files are organized below.

— `01_wordmark/` — wordmark in three color variants, SVG + PNG
— `02_screenshots/` — three screenshots with the same composition
— `03_demo/` — a 15-second demo clip in webm and gif
— `04_pitch/` — pitch texts in EN and DE, plus maintainer bio

License: All material in this folder is released under the same MIT license
as the project itself. No attribution required, but a link back to
github.com/[handle]/cipher-mux is appreciated.
```

### Aufwand-Schätzung für die Erst-Erstellung

Aus der Strang-C-Schätzung plus der Mittelweg-Setzung im Brief:

- Wordmark in Figma erstellen, drei Farb-Varianten, exportieren: ca. 60–90 min
- Drei Screenshots inszenieren und aufnehmen: ca. 60 min (inkl. Tool-Setup mit dem richtigen Theme, sinnvollen Inhalten in den Sessions)
- Demo-Clip mit Kap aufnehmen, schneiden, exportieren: ca. 60–90 min (Kap macht keinen aufwendigen Schnitt, aber ein paar Versuche brauchen die Choreografie)
- Pitch-Texte verfassen, EN+DE, plus Bio: ca. 60 min (ist hier schon weitgehend vorgezeichnet)
- Wegweiser-README schreiben: 15 min
- Ordner-Struktur anlegen, Files einsortieren, Git-Commit: 15 min

**Total: ca. 4–5 Stunden Erst-Aufwand**, konsistent zur Brief-Schätzung („~4 Stunden, Mittelweg").

### Pflege

Das Media-Kit muss nicht pro Release aktualisiert werden — Wordmark, Bio und der Ein-Absatz-Pitch bleiben über mehrere Versionen stabil. Was sich ändern kann:

- Screenshots sollten bei substanziellen UI-Änderungen neu aufgenommen werden (alle 6–12 Monate, oder bei einer v1.x-Major-Release).
- Demo-Clip: bei bedeutenden neuen Features (z.B. wenn die AgentAdapter-Schicht implementiert wird und ein Aider-Tab im Grid sichtbar wäre).
- Tagline/Pitch-Texte: nur bei strategischen Veränderungen — zum Beispiel wenn macOS-only auf macOS+Linux erweitert wird.

Pro normaler Release ist das Media-Kit *kein* Update-Punkt. Das hält den Pro-Release-Aufwand-Korridor (25–40 min) ein.

## 4. Pipeline-Spec

### Zweck und Abgrenzung

Die Pipeline-Spec beschreibt die operativen Schritte, die nötig sind, um cipher-mux einmal zu launchen und danach in normaler Pflege zu halten. Sie macht den hybrid-manuellen Modus aus dem Brief konkret: was automatisch passiert (GitHub-Actions, Astro-Build, Pages-Deploy), was manuell bleibt (Changelog, Social-Post, Media-Kit-Update bei Major-Release). Plus die zwei Vorkehrungen aus dem Pre-Mortem — Show-HN-Vorbereitung (G4-Entschärfung) und Mini-User-Test der Use-Cases (G3-Entschärfung).

Sie ist keine Rolling-Marketing-Strategie und keine Kampagnen-Mechanik. Sie ist eine Schritt-Liste, die der Maintainer einmalig durchgeht und danach nur noch die Pflege-Routine ausführt.

### Erst-Launch-Sequenz

Die zeitliche Abfolge vom Stand „v0.9.6-beta-Code im privaten Profil" bis zum Stand „v1.0 öffentlich gelauncht". Geschätzter Gesamt-Aufwand 25–35 Stunden, verteilbar über zwei bis vier Wochen je nach Maintainer-Verfügbarkeit.

#### Phase 5.1 — Repo-Vorbereitung (ca. 6–8 Stunden)

1. **Profile-Wechsel:** im Code mit `BUILD_PROFILE=community` testen, dass die Pfade in `brand.ts` und die Default-Konfiguration für ein leeres User-Profil funktionieren. Bestehende Cipher-Defaults dürfen nicht durchgreifen.
2. **CHANGELOG.md erstellen** mit dem v1.0.0-Eintrag aus dem GitHub-Release-Set.
3. **README.md ersetzen** durch die Veröffentlichungs-Variante (siehe Abschnitt 1).
4. **CONTRIBUTING.md, CODE_OF_CONDUCT.md, Issue-/PR-Templates anlegen** — siehe Spezifikationen in Abschnitt 1.
5. **`.github/workflows/build-test.yml`** anlegen, einmalig durchlaufen lassen, sicherstellen dass Build und Tests grün sind.
6. **Smoke-Test mit dem `community`-Profil** auf einem zweiten Mac (oder einem frischen User-Account), wenn verfügbar. Optional, aber im Pre-Mortem als G3-Entschärfung wertvoll: Doku-Versprechen-Lücken werden dabei sichtbar.

#### Phase 5.2 — Media-Kit erstellen (ca. 4–5 Stunden)

7. **Wordmark in Figma** entwerfen, drei Farb-Varianten exportieren, in `media-kit/01_wordmark/` ablegen.
8. **Drei Screenshots** in cipher-mux selbst aufnehmen (cipher-dark Theme, sinnvolle Inhalte in den Sessions). Speichern in `media-kit/02_screenshots/`.
9. **Demo-Clip** mit Kap aufnehmen (12–18 s, vorgezeichnet im Media-Kit-Abschnitt). Als WebM und GIF exportieren, in `media-kit/03_demo/` ablegen.
10. **Pitch-Texte** in `media-kit/04_pitch/` als `pitch-en.md` und `pitch-de.md` plus `maintainer-bio.md`. Die Drafts aus dem Konzeptpapier-Media-Kit-Abschnitt sind hier 1:1 verwendbar.
11. **Wegweiser-README** in `media-kit/README.md`.

#### Phase 5.3 — Website bauen (ca. 14–18 Stunden, plus 4–6 h DE-Synchronisation)

12. **Eigenes Repo `cipher-mux-site`** anlegen, Astro-Projekt initialisieren.
13. **Theme-Setup** mit Astro-Content-Collections, Mono- und Sans-Schrift einbinden, Sprach-Switcher als Top-Nav-Komponente.
14. **Landing-Page** ausarbeiten gemäß Abschnitt 2. Hero, „What it isn't", Use-Case-Karten, „How it works in 30s".
15. **How-it-works-Seite** mit acht Konzepten plus Architektur-Skizze (selbst gezeichnet als SVG).
16. **Get-Started-Seite** mit Voraussetzungs-Tabelle und Installation.
17. **Features-Seite** mit acht Karten.
18. **Use-Cases-Seite** mit drei Profilen — die Drafts aus diesem Konzeptpapier sind hier 1:1 verwendbar.
19. **FAQ-Seite** mit zehn Fragen.
20. **Mini-User-Test der Use-Cases** vor Launch — siehe nächster Abschnitt.
21. **DE-Synchron-Versionen** aller sechs Seiten anlegen und übersetzen.
22. **GitHub-Pages-Deployment** über GitHub-Action konfigurieren.

#### Phase 5.4 — Mini-User-Test der Use-Case-Seite (ca. 3–4 Stunden)

Die Pre-Mortem-G3-Entschärfung. Direkt vor dem öffentlichen Launch durchgeführt:

23. Drei vertraute Personen identifizieren, die zu den drei Use-Case-Profilen passen — eine Maker-Person, eine Berater-Person, eine Entwickler-Person. Müssen nicht 100%ige Match-Personas sein, aber Lebens-Wirklichkeits-Anker.
24. Use-Case-Seite zeigen (ohne weitere Erklärung), nach 5 Minuten Lese-Zeit fragen: *„Würdest du dich in einem dieser drei Profile wiedererkennen? Welches? Trifft die Beschreibung, wie du arbeitest?"*
25. Wenn 0/3 sich erkennen: Stopp-Signal. Use-Case-Profile umschreiben, Test wiederholen. Das ist *kein* Anlass, härter zu argumentieren — es ist ein Audience-Drift-Hinweis.
26. Wenn 1/3 oder 2/3 sich erkennen: Launchen, aber für v1.1 die Profile schärfen.
27. Wenn 3/3 sich erkennen: Confident go.

Das ist ein Test, der die Hypothese aus dem Brief gegen die Realität prüft, bevor sie öffentlich wird. Erfordert vertraute Personen, die ehrlich antworten — keine Bekannten, die höflich nicken.

#### Phase 5.5 — Show-HN-Vorbereitung (ca. 1–2 Stunden)

Die Pre-Mortem-G4-Entschärfung. Sorgfältige Vorbereitung des wichtigsten Auffindbarkeits-Anlauf-Punkts:

28. **Title-Format prüfen.** HN-Konvention: `Show HN: [tool name] – [one-line description]`. Konkreter Vorschlag: `Show HN: cipher-mux – a cockpit for multiple Claude Code sessions`. Kurz, präzise, kein Buzzword.
29. **Post-Body schreiben.** Drei bis vier Absätze: was ist es, warum gebaut, was ist drin, was ist es nicht. Vorgezeichneter Text:

```
cipher-mux is an Electron app for working with multiple Claude Code
sessions in parallel. Sessions live in a grid (tmux-backed, surviving
crashes), an Orchestrator session can coordinate work across them, and
a built-in MCP server lets sessions talk to each other and to external
tools. Voice input via Whisper, an integrated notes editor, and a
teaching persona called Relay round out the cockpit.

I built this for my own work — running multiple Claude Code sessions
had become a tab-switching mess. Sharing it now because it might be
useful to others in similar situations.

macOS only in v1, MIT-licensed. No tracking, no commercial backend,
just the app and Claude Code's own CLI.

Code: github.com/[handle]/cipher-mux
Site: [handle].github.io/cipher-mux
Happy to answer questions in the thread.
```

30. **HN-Account-Hygiene.** Sicherstellen, dass der Maintainer-Account auf HN nicht „first-post" ist — vorab ein oder zwei echte Comments auf anderen Threads machen, das fängt sonst Algorithmus-Verdacht.
31. **Timing planen.** Mo–Do, zwischen 7 und 10 Uhr Eastern Standard Time. Freitag und Wochenende vermeiden.
32. **4-Stunden-Anwesenheits-Block** im Kalender freihalten direkt nach dem Post — Thread-Replies zeitnah, Architektur-Fragen ehrlich beantworten, Kritik annehmen ohne defensive Reaktion.
33. **Erlaubnis für legitimen zweiten Akt.** Pre-Mortem-G4 erlaubt einen zweiten Show-HN-Post nach 6–9 Monaten zu v1.1 — als „Update" framed, nicht als zweite Launch-Kampagne. Diese Erlaubnis im Maintainer-Bewusstsein halten, ohne sie als Plan zu zementieren.

### Launch-Tag-Sequenz

Tag-X-Reihenfolge, einmalig durchgeführt. Geschätzter Gesamt-Aufwand 4–6 Stunden über den Tag verteilt.

1. **Morning, 7:00 EST:** Letzter Smoke-Test. Repo öffentlich schalten (private → public), GitHub-Pages-Site live prüfen.
2. **7:30 EST:** Show-HN-Post setzen.
3. **7:35 EST:** Twitter-Post mit GIF aus dem Media-Kit und Link zum Repo. Optional Mastodon-fosstodon parallel — gleicher Inhalt.
4. **8:00–12:00 EST:** Maintainer-Anwesenheit im HN-Thread. Ehrliche, sachliche Replies. Architektur-Fragen werden beantwortet, Kritik wird angenommen, Feature-Wünsche werden mit „interessant, ist im Issue-Tracker willkommen" gepuffert.
5. **6 Stunden nach Show-HN, falls HN-Thread läuft:** optional r/ClaudeAI-Post als Diskussions-Frame („sharing my open-source project, would appreciate feedback"). Vor dem Post die Sub-Moderatoren-Regeln gegenchecken — nicht alle Subs erlauben Self-Promotion.
6. **Abends:** Tag schließen. Keine Auto-Post-Tools, kein „Boost"-Manöver. Was passiert, passiert.

Diese Sequenz ist *einmalig* — sie wird nicht wiederholt. Die Vorstellen-statt-Vermarkten-Setzung aus dem Brief verträgt sich nicht mit Re-Launch-Spiel.

### Pro-Release-Sequenz

Die normale Pflege-Routine, ein- bis zweimal pro Quartal. Geschätzter Aufwand 25–40 Minuten pro Release.

1. **CHANGELOG.md** mit dem neuen Eintrag erweitern (Features-, Fixed-, Changed-, Removed-Sektionen). 5–15 min, abhängig von Release-Umfang.
2. **Git-Tag setzen** (`git tag -a v1.x.y -m "..."`).
3. **GitHub-Release öffnen** mit dem CHANGELOG-Inhalt als Body. 2 min.
4. **GitHub-Action** baut und deployt automatisch (kein manueller Eingriff).
5. **Twitter-Post** mit kurzem Hinweis: „cipher-mux v1.x.y is out. [Highlights]. Changelog: [link]". 5 min.
6. **Bei Major-Releases (v1.x mit substanziellen Features):** Demo-Clip im Media-Kit aktualisieren (5–10 min mit Kap), Features-Karte auf der Website ergänzen (10–20 min).

Was *nicht* in der Pro-Release-Sequenz steht: r/ClaudeAI-Updates, Newsletter-Outreach, Mastodon-Post (außer wenn parallel zum Twitter-Post lazy mit-gepostet), Discord-Ankündigungen, GitHub-Discussions-Topic, Press-Outreach.

### Maintainer-Drive-Test

Drei Monate nach Launch — der Wirksamkeits-Test aus dem Brief. Eine kurze Selbst-Reflexion durch den Maintainer:

- *Würde ich rückblickend sagen, hätte ich's nicht veröffentlicht?*
- *War der Aufwand der Veröffentlichung im Verhältnis zum Wert sinnvoll?*
- *Nutze ich cipher-mux noch selbst aktiv?* (Dogfooding-Check, Pre-Mortem G2)
- *Sind Issues unbeantwortet, die mir ein dauerhaft schlechtes Gefühl machen?* (Pre-Mortem G5)
- *Brauche ich eine Maintenance-Mode-Klausel im README?*

Wenn die Antworten alle gut ausfallen: weiter wie geplant. Wenn ein bis zwei Punkte unrund sind: Korrektur (z.B. Issue-Tracker bereinigen). Wenn drei oder mehr unrund sind: Maintenance-Mode-Klausel im README setzen. Drei Minuten Selbst-Check, kein Drama.

Diese Selbst-Reflexion wird in den Maintainer-Kalender als wiederkehrender Termin eingetragen — alle drei Monate, bis das Projekt entweder stabil pflegbar ist oder bewusst in den Maintenance-Mode gewechselt wurde.

### Aufwand-Bilanz für die Pipeline-Spec

Das ist kein Aufwand für *die Spec*, sondern für die *Ausführung der Pipeline*. Gesamt-Korridor:

- **Erst-Launch (Phase 5.1 bis 5.5 plus Launch-Tag):** ca. 33–48 Stunden, verteilt über zwei bis vier Wochen.
- **Pro normalem Release:** 25–40 min.
- **Pro Major-Release mit Demo-Update:** 60–90 min.
- **Maintainer-Drive-Test alle 3 Monate:** 5 min.

Die obere Grenze des Erst-Launch-Aufwands (48 Stunden) ist deutlich höher als die Brief-Schätzung (20–25 Stunden). Begründung: die Website-Tiefe wurde im Brief unterschätzt, weil die ursprüngliche Audience-Hypothese flacher war. Mit der breiteren Audience-Definition (Maker, Berater, Entwickler) und der bewussten Site-Tiefe ist der Mehraufwand bewusst — die Reduktions-Optionen aus dem Website-Abschnitt (DE-Versionen erst v1.1, FAQ mit fünf Fragen statt zehn) bringen den Aufwand auf ~25–35 Stunden zurück, falls das gewünscht ist.

## 5. Übergabe-Hinweise an Phase 5

### Methodik-Stand am Ende von Phase 4

Das Konzeptpapier liegt jetzt in v0.3 vor — alle vier Hauptabschnitte sind ausgearbeitet, mit konkreten Texten an den Stellen, an denen Texte wirken (README, Pitch, Use-Cases, Show-HN-Post-Body), und mit Specs an den Stellen, an denen etablierte Standards übernommen werden (CONTRIBUTING, CODE_OF_CONDUCT, Issue-Templates). Der Phase-4-Pflicht-Skill-Check ist durch das Phase-3-Pre-Mortem effektiv geleistet worden (zwei kritische Risiken identifiziert, beide in den Konzeptpapier-Output eingearbeitet — Compatibility-Statement im README, Maintenance-Mode-Klausel im README plus dreimonatige Selbst-Prüf-Routine in der Pipeline-Spec). Eine separate post-v0.1-Skill-Iteration ist nicht angefordert — wenn der Maintainer das Gefühl „passt schon" hat, ist die nächste Methodik-Option der `external-review`-Skill vor v1.0.

Über den vorgesehenen Methodik-Lernpunkt für `ideation-lessons.md` hinaus (Pre-Mortem-Skill um Failure-Definitions-Vorab-Schritt erweitern) gibt es keine offenen Methodik-Aufgaben in dieser Ideation. Die zwei kleinen Operativ-Fragen aus dem Brief (GitHub-Handle-Konkretisierung, Quality-Benchmark-Setzung) sind Detail-Entscheidungen, die in der Umsetzung getroffen werden — nicht im Konzeptpapier.

### Reflexions-Punkt für den Maintainer: Welche Deliverables tatsächlich

Der Brief setzt vier Deliverables: GitHub-Release-Set, Website, Media-Kit, Pipeline-Spec. Das Konzeptpapier hat alle vier ausgearbeitet. Die Frage, die in dieser Ideation nicht abschließend zu beantworten ist und in dieser Phase reflektiert werden soll, ist: **welche dieser vier Deliverables tatsächlich in welcher Tiefe gebaut werden, wenn die Umsetzung in Phase 5 startet**.

Drei Wahrnehmungen, die der Reflexion helfen:

Erstens: Der **Aufwand-Korridor liegt mit ca. 33–48 Stunden Erst-Launch über der ursprünglichen Brief-Schätzung** (20–25 Stunden). Die Differenz kommt fast ausschließlich aus der Website-Tiefe — sechs Seiten mit substanziellem Inhalt plus DE-Synchron-Versionen. Wenn die Vorstellen-statt-Vermarkten-Setzung aus dem Brief streng gelesen wird (bereitstellen, vielleicht gesehen werden, that's it), ist es legitim zu fragen, ob die Site in v1 alle sechs Seiten braucht oder ob ein schlankeres Set (Landing + Get-Started + FAQ, drei Seiten statt sechs) reicht. Die Website-Sektion enthält bewusst einen Reduktions-Pfad (DE später, FAQ kleiner) — eine zweite Reduktions-Stufe wäre eine bewusste Drei-Seiten-Site, die bei Bedarf in v1.1 aufwächst.

Zweitens: Der **GitHub-Release-Set und das Media-Kit zusammen** sind ca. 8–11 Stunden Aufwand. Das ist klein im Vergleich zur Site, und der Wert ist dafür hoch — der README ist *die* Stelle, an der das Tool wirkt, das Media-Kit liegt als ehrlich-funktionales Material bereit. Diese beiden sind die *robustesten* Pflicht-Teile in dem Sinne, dass sie funktionieren auch wenn die Site nicht oder noch nicht steht.

Drittens: Die **Pipeline-Spec ist eine Reflexions- und Schritt-Liste, kein eigenständiges Deliverable**. Sie wird beim ersten Launch durchlaufen und danach archiviert. Der „Maintainer-Drive-Test alle 3 Monate" als wiederkehrender Termin ist die einzige Pipeline-Komponente, die langfristig bleibt — der Rest ist Anleitung für ein einmaliges Ereignis.

Eine plausible Reduktions-Variante, falls der Maintainer den Aufwand kleiner halten will: **GitHub-Release-Set vollständig + Media-Kit Mittelweg + Drei-Seiten-Site (Landing, Get-Started, FAQ) + Pipeline-Spec abgespeckt** (ca. 18–25 Stunden Erst-Launch). Use-Case-Tiefe wird in v1.1 nachgezogen, falls Interesse aus den Issues sichtbar wird. Das ist nicht „Vermarkten in Light-Variante" — das ist *Bereitstellen in der minimal-tragfähigen Form, die der Goal-Setzung entspricht.*

Eine andere plausible Variante: **alle vier Deliverables wie ausgearbeitet** (33–48 Stunden Erst-Launch). Das ist die Maximal-Variante des Brief-Versprechens — die Site mit Tiefe, die Use-Case-Profile vollständig, FAQ ausführlich. Wenn der Maintainer den Aufwand investieren will und der KI-gestützte Erstellungs-Pfad (per Brief gesetzt) den Aufwand handhabbar macht, ist auch das stimmig.

Diese Reflexion ist in dieser Ideation nicht zu entscheiden. Sie gehört in den Phase-5-Übergabe-Moment, an dem der Maintainer entscheidet, ob er das Konzeptpapier 1:1 in den Launcher-Flow gibt oder vorher den Scope dünner schneidet.

### Übergabe-Optionen an Phase 5

Drei methodisch saubere Optionen, das Konzeptpapier in die Umsetzung zu bringen:

1. **External-Review vor Phase 5** — den `external-review`-Skill aktivieren: das Konzeptpapier wird in einer frischen Claude-Session auf Kohärenz, Lesbarkeit und Scope-Drift-Indikatoren geprüft. Eigene Note ins Brain. Sinnvoll, wenn das Gefühl „passt schon" eingetreten ist und ein Außenblick wertvoll wäre. Aufwand: eine zusätzliche Session, ca. 1 Stunde Maintainer-Zeit für das Briefing und die Rückmeldung.
2. **Direkte Übergabe** — das Konzeptpapier 1:1 in den `/Users/Shared/Nextcloud/Claude/ClaudeCode01/projectlauncher/`-Flow geben. Claude Code zerlegt das Konzeptpapier in Tasks und arbeitet sich abschnittsweise durch (zuerst Repo-Hülle, dann Media-Kit, dann Site). Maintainer steuert per Review-Schleifen und Korrektur-Eingriffen.
3. **Maintainer-eigene Umsetzung** — der Maintainer baut alles selbst, das Konzeptpapier dient als Referenz und Checkliste. Sinnvoll, wenn der Maintainer den Bauprozess als Eigen-Erfahrung schätzt und nicht delegieren will. Aufwand wie geschätzt (33–48 Stunden Maximal-Variante, 18–25 reduzierte Variante).

Keine der drei Optionen ist im Konzeptpapier vorentschieden — sie sind die plausiblen Pfade, die der Maintainer am Ende von Phase 4 wählt. Eine Misch-Variante (z.B. External-Review zuerst, dann Übergabe an Claude Code) ist methodisch ebenfalls sauber.

### Was nach Phase 5 noch offen wäre

Drei Punkte, die in der Phase 5 oder nach dem Launch zu adressieren sind, aber nicht ins Konzeptpapier gehörten:

- **GitHub-Handle-Konkretisierung** — welcher GitHub-Username konkret. Detail, kein Konzept-Punkt.
- **Custom-Domain für die Site** — falls aus `[handle].github.io/cipher-mux` mehr werden soll. v1.x-Frage.
- **Methodik-Lernpunkt zurück ins Template** — der Pre-Mortem-Skill-Vorschlag (Vorab-Schritt zur Failure-Definition) wandert nach `/Users/Shared/Nextcloud/Claude/ideation-lessons.md` oder direkt in die `SKILL.md` des Pre-Mortem-Skills im Template. Das ist Aufgabe für eine eigene kurze Session, nicht Teil dieser Ideation.
