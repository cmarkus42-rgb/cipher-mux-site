---
date: 2026-04-26
status: v0.1 — Website-Block ausgearbeitet, andere Blöcke folgen in v0.2
role: Phase-5-Umsetzungsplan, Übergabe an Claude Code im Launcher-Flow
---

# Umsetzungsplan — cipher-mux OSS-Veröffentlichung

Dieses Dokument konkretisiert die Phase-5-Übergabe nach abgeschlossenem [[konzeptpapier_v0.1]] (Frontmatter-Status v0.3). Es legt fest, *wie* die vier Deliverables gebaut werden — welcher KI-Workflow welche Aufgabe übernimmt, welche Prompts wo greifen, welche Bilder woher kommen. Stand v0.1: Website-Block vollständig. Andere Blöcke (Media-Kit, GitHub-Release-Set, Pipeline-Spec) folgen.

## 1. Festlegungen aus Phase 4

Der Maintainer hat am Ende von Phase 4 entschieden:

- **Reduzierter Scope.** Drei-Seiten-Website (Landing, Get-Started, FAQ), GitHub-Release-Set vollständig, Media-Kit Mittelweg, Pipeline-Spec abgespeckt. Use-Case-Tiefe und vollständige FAQ folgen in v1.1, falls Issue-Eingang Interesse zeigt. Erst-Aufwand-Korridor 18–25 Stunden.
- **External Review ausgesetzt.** Direkter Sprung in Phase 5 ohne External-Review-Skill. Begründung: Konzeptpapier in v0.3 ist nach vier Korrektur-Runden konsensfähig stabil, Maintainer hält den Außen-Blick für nicht erforderlich. External Review bleibt als Option vor v1.0 dieses Umsetzungsplans offen.
- **Autonome Einarbeitung.** Der Umsetzungsplan ist so geschnitten, dass Claude Code im Launcher-Flow die Website-Sektion direkt umsetzen kann — Tool-Workflow, Prompts und Bilder-Inventar liegen vor.

## 2. Tool-Workflow-Setup

Vier KI-/Tool-Rollen greifen ineinander, jede mit klar abgegrenzter Aufgabe:

### 2.1 Texte allgemein — Claude in Cowork, Polish durch Gemini 3.1

Alle Texte (Site-Inhalte, README, Pitch, FAQ-Antworten) werden in einer **Cowork-Session mit Claude** aus den vorhandenen Quellen (Konzeptpapier, Brain-Notes) erstellt. Der erste Wurf landet als Markdown-Dateien im richtigen Format.

Der zweite Schritt ist **Polish durch Gemini 3.1.** Gemini übernimmt stilistischen Schliff — Satzfluss, Wortökonomie, Inkonsistenz-Bereinigung — ohne Inhalt zu verschieben oder Tonalität zu kippen. Das ist eine Cross-Modell-Verifikation: Claude schreibt aus dem Material, Gemini liest mit fremdem Auge und glättet, wo Cowork-typische Manierismen drin sind.

Wichtig für beide Schritte: die Tonalitäts-Setzung aus dem [[brief]] gilt durchgängig — *nicht großspurig, hilfreich, informativ, sachlich*. Konkrete Regeln in den Prompts unten.

### 2.2 Website-Technik — Claude Code im website-builder-Workflow

Der technische Bau der Astro-Site läuft in einer **Claude-Code-Session, die den `WebsiteDesigner`-Workflow nutzt** (`/Users/Shared/Nextcloud/Claude/WebsiteDesigner/` mit dem `frontend-designer`-Skill als Vorbild). Konkret heißt das: ein Launcher-Flow startet eine Claude-Code-Session im neuen Repo `cipher-mux-site`, übergibt diesen Umsetzungsplan plus die fertigen (gepolishten) Texte, und Claude Code baut das Astro-Projekt.

Was Claude Code in dieser Rolle übernimmt: Astro-Setup, Theme-Konfiguration, Routing, GitHub-Action für Deploy auf GitHub Pages, lokale Build-Tests. Was *nicht* Claude Codes Aufgabe ist: Texte schreiben (kommen fertig rein), Design-Entscheidungen treffen (kommen aus dem Design-Block).

### 2.3 Design — Claude Design

Wordmark, Architektur-Skizze und etwaige andere visuelle Elemente werden in **Claude Design** erstellt. Claude Design liefert SVG-Source-Files plus PNG-Renderings in den benötigten Größen. Der Maintainer übergibt einen Design-Brief (siehe Prompts unten), Claude Design liefert iterativ — zwei oder drei Iterationen sind realistisch.

### 2.4 Bilder — Screenshots vs. KI-generiert

Klare Trennung: alles was den Tool-Betrieb zeigt, wird **screengeshootet**. Alles was abstrakt-grafisch ist (Wordmark, Architektur-Diagramm), wird **generiert oder selbst gezeichnet**. Konkretes Inventar im Website-Block, Punkt 1.5.

### 2.5 Wie die Tools ineinandergreifen

Die Reihenfolge ist:

1. **Design-Block zuerst.** Wordmark muss vorliegen, weil sie auf der Site und in der Media-Kit-README erscheint.
2. **Texte schreiben.** Cowork erstellt Erstwurf aus dem Material, Gemini polisht.
3. **Bilder vorbereiten.** Screenshots werden im Tool selbst aufgenommen, generierte Visuals kommen aus Claude Design.
4. **Astro-Site bauen.** Claude Code nimmt fertige Texte + Bilder + Design-Tokens und baut die Site zusammen.
5. **Build und Deploy.** Lokaler Test, dann GitHub-Action.

Parallelisierung möglich: Design-Block und Text-Erstellung können gleichzeitig laufen, weil sie sich nicht blockieren. Die Astro-Phase muss warten, bis beide Vorlauf-Schritte fertig sind.

## 3. Block 1: Website (Drei Seiten)

### 3.1 Sitemap (final, reduziert)

```
/                      — Landing-Page
/get-started           — Voraussetzungen + Installation
/faq                   — Häufige Fragen
```

Drei Seiten plus globale Komponenten (Header mit Wordmark, Footer mit GitHub-Link und MIT-Hinweis). Kein Sprach-Switcher in v1.0 — englische Fassung primär, deutsche Fassung folgt in v1.1, falls Bedarf sichtbar wird.

Externe Verlinkungen: GitHub-Repo, CHANGELOG (im Repo), ADR-Reihe (im Repo), `the how-to-session/` (im Repo, als „learn more"). Diese Verweise ersetzen einen separaten Doku-Bereich.

### 3.2 Design-Definition (Kickoff für Claude Design)

Vor Astro-Aufbau: zwei Design-Artefakte werden gebraucht.

**Artefakt 1: Wordmark.** Pure Wortmarke, kein Symbol-plus-Wort-Konstrukt.

**Prompt für Claude Design (Wordmark):**

```
Aufgabe: Wordmark für cipher-mux entwerfen.

Anforderungen:
- Pure Wortmarke (Schriftzug "cipher-mux"), kein Logo mit grafischem
  Symbol-Element davor oder daneben.
- Schrift-Vorschlag: Rajdhani-Bold. Diese Schrift wird im Tool selbst
  für Header-Elemente verwendet, also Konsistenz zwischen Tool und Marke.
- Drei Farb-Varianten:
  - light (dunkler Text auf hellem Hintergrund),
  - dark (heller Text auf dunklem Hintergrund),
  - transparent (für freie Platzierung).
- Größen pro Variante: 1200×630 (OG-Card-Format), 600×315, 240×120.
- Format: SVG als Source-of-Truth, PNG-Renderings in den drei Größen.

Tonalität: sachlich. Keine Effekte (Verläufe, Schatten, Glow). Keine
Animation. Bewusst nicht "professional Logo design"-Wirkung — eine
Wortmarke, wie sie ein technischer Maintainer für sein erstes
veröffentlichtes OSS-Projekt anlegt. Ehrlich, nicht großspurig.

Iteration: zwei Vorschläge initial, ich wähle eine Richtung,
du finalisierst.
```

**Artefakt 2: Architektur-Skizze (für FAQ-Frage „Why tmux?").**

Eine kleine SVG-Box-und-Pfeil-Skizze, die zeigt: Grid-Cells → tmux-Sessions → Message Bus → MCP-Server. Selbst gezeichnet im Browser-Tool wie Excalidraw oder draw.io ist hier oft schneller als KI-Generierung. Aufwand: 30–60 Minuten manuell.

**Falls Claude Design für die Architektur-Skizze verwendet wird, Prompt:**

```
Aufgabe: Einfache Architektur-Skizze für cipher-mux.

Inhalt:
- Drei horizontal angeordnete Box-Gruppen, mit Pfeilen verbunden:
  Links: "Grid Cells" (3-4 kleine Boxen übereinander, beschriftet
  "Session A", "Session B", "Notes")
  Mitte: zwei Boxen vertikal: oben "Message Bus (SQLite)",
  unten "MCP Server (HTTP localhost)"
  Rechts: ein Block "External MCP Clients" (gestrichelter Rahmen)
- Pfeile: von Grid Cells zu Message Bus (bidirektional), von Message
  Bus zu MCP Server, von MCP Server zu External MCP Clients.

Stil: minimalistisch, monochrom (passt zum dunklen Theme der Site),
keine 3D-Effekte, keine Schatten. Einfache Linien, klare Beschriftung.
Schrift: Sans-Serif, lesbar in 800px Breite.

Format: SVG, max 800×400px.
```

### 3.3 Astro-Grundgerüst (Kickoff für Claude Code im website-builder)

Sobald Wordmark vorliegt, startet die Claude-Code-Session im neuen Repo.

**Prompt für Claude Code (Astro-Setup):**

```
Aufgabe: Astro-basierte Three-Page-Site für cipher-mux aufsetzen.

Repo-Initialisierung:
- Neues Repo `cipher-mux-site` (parallel zum cipher-mux-Repo, nicht darin).
- Astro mit Starter-Template "minimal" oder "blog" als Basis.
- TypeScript-Modus aktiv.

Theme-Setup:
- Dunkles Theme als Default, Light-Mode-Toggle als Komponente in der
  Top-Nav. Inspiration: cipher-mux's eigene cipher-dark- und
  cipher-ivory-Themes (Tokens siehe `/Users/Shared/Nextcloud/Claude/
  ClaudeCode01/cipher-mux-electron/src/renderer/styles/theme.css`).
- Sans-Serif für Body: System-Stack (system-ui, -apple-system, ...).
- Sans-Bold für Header: Rajdhani-Bold (selbe Schrift wie Wordmark).
  Web-Fonts via Google Fonts oder lokal aus dem cipher-mux-fonts-Ordner
  (Lizenz-Hinweis prüfen).
- Mono für Code-Blöcke: Fira Code (auch im cipher-mux-Tool verwendet).

Routing:
- `/` (index.astro) — Landing-Page
- `/get-started` (get-started.astro)
- `/faq` (faq.astro)

Globale Komponenten:
- Header mit Wordmark links, Top-Nav-Links zu Get-Started, FAQ, GitHub.
- Footer mit MIT-Hinweis, Maintainer-Bio-Schnipsel, GitHub-Link.

Inhalte:
- Texte werden als gepolishte MDX-Dateien geliefert (im Pfad
  `_content/landing.mdx`, `_content/get-started.mdx`, `_content/faq.mdx`).
- Wordmark-SVG kommt aus dem Design-Block (`_assets/wordmark/`).
- Screenshots kommen aus dem Tool selbst (siehe Bilder-Inventar unten).

Build und Deploy:
- GitHub-Action `.github/workflows/deploy.yml`, die bei Push auf main
  baut und nach `gh-pages` deployt.
- Site URL: `[handle].github.io/cipher-mux-site` (Default ohne
  Custom-Domain).

Was bewusst NICHT in v1:
- Sprach-Switcher / DE-Synchron-Versionen (folgt v1.1).
- Use-Case-Detail-Seiten (folgen v1.1).
- Blog, Doku-Sektion, Newsletter-Subscribe.
- Custom-Domain.
- Analytics, Tracking, A/B-Test-Setup.

Liefer-Erwartung: lauffähiges Astro-Projekt, lokaler Build clean
(`npm run build` ohne Errors), GitHub-Action grün auf erstem Push.
```

### 3.4 Texte-Block

Drei Markdown-Dateien werden geschrieben: Landing, Get-Started, FAQ. Alle drei laufen durch denselben Zwei-Schritt-Workflow — Cowork-Erstwurf, Gemini-Polish.

**Prompt für Cowork (Erstwurf der drei Site-Texte):**

```
Du schreibst die Site-Texte für cipher-mux. Quellen:
- Konzeptpapier (`/Users/Shared/Nextcloud/Claude/cipher-mux-release-
  mediakit/deliverables/konzeptpapier_v0.1.md`) — Frontmatter v0.3.
- Brief (`brain/brief.md`) — Frontmatter v0.4.

Aufgabe: drei Markdown-Dateien erstellen.

DATEI 1: `landing.md` — Landing-Page

Struktur (Reihenfolge fest):

1. Hero-Block (max 100 Wörter):
   - H1: cipher-mux
   - Tagline: "A cockpit for working with multiple Claude Code sessions
     in parallel." (exakt diese Formulierung übernehmen)
   - Sub-Sub-Text: zwei bis drei Sätze, was es ist, warum es da ist.
     Inspiration siehe Konzeptpapier Abschnitt 2 ("Landing-Page —
     ausgearbeitet").
   - Drei CTA-Buttons (Reihenfolge): "Get started", "View on GitHub",
     "FAQ"

2. "What it isn't"-Block (max 80 Wörter):
   - Vier kurze Punkte, je 1-2 Zeilen.
   - Inhalt: kein Replacement für Claude Code; nicht für absolute
     Beginners; macOS-only in v1; nicht-kommerziell, MIT.

3. "How it works in 30 seconds"-Block (max 100 Wörter):
   - Drei nummerierte Schritte, je 20-30 Wörter.
   - Schritt 1: Install (Homebrew, npm, Claude Code muss da sein).
   - Schritt 2: Spawn sessions in einem Grid.
   - Schritt 3: Optional Orchestrator für Delegation.

4. Footer (max 60 Wörter):
   - GitHub-Link, MIT-Hinweis, Maintainer-Bio-Einzeiler ("cipher-mux
     is my first published OSS project. Issues welcome.").

DATEI 2: `get-started.md`

Struktur:

1. Voraussetzungs-Tabelle:
   - macOS 12+ (was prüfen)
   - Homebrew installiert
   - Claude Code CLI installiert und authentifiziert (mit Verlinkung
     zur Anthropic-Dokumentation)
   - tmux installiert (kann via Homebrew nachinstalliert werden)

2. Installation:
   - Drei Befehle aus dem README-Draft im Konzeptpapier (`brew install
     tmux`, `git clone ...`, `npm install && npm run build`, `npm start`).
   - Hinweis-Box für Apple-Silicon-Whisper-Fragen (eine Zeile, ehrlich
     markiert: "Voice features need a Whisper model — see Setup notes
     in the README if pull fails on Apple Silicon").

3. First Run:
   - Was beim ersten App-Start passiert (tmux-Init, MCP-Server-Boot).
   - Wann Relay sich einklinkt.
   - Verweis auf `the how-to-session/guides/01-first-steps.md` im Repo
     für die ausführliche Variante.

4. Troubleshooting (kurz):
   - "Claude Code not found" → CLI-Authentifizierung prüfen.
   - "tmux not found" → `brew install tmux`.
   - "Voice doesn't work" → optional, kann ignoriert werden.

DATEI 3: `faq.md`

Sieben Fragen-Antwort-Paare. Reihenfolge fest:

1. "Why macOS only?" (50 Wörter)
2. "Do I need an Anthropic account?" (40 Wörter)
3. "How is this different from Claude Squad / Aider / Cline?" (80 Wörter)
4. "Where does my data go?" (50 Wörter — lokal in ~/.config/cipher-mux/,
   kein Telemetry, Claude-Code's eigenes Datenverhalten gilt)
5. "What if Claude Code changes its CLI?" (60 Wörter — verweist auf
   Compatibility-Statement im README)
6. "Why tmux?" (60 Wörter — Sessions überleben App-Neustarts und
   Crashes; ADR-001 verlinken)
7. "Will there be a Linux/Windows version?" (50 Wörter — Linux v2-Thema,
   Windows nicht im Plan, tmux-strukturell nicht passend)

Tonalität für alle drei Dateien:
- nicht großspurig
- sachlich, hilfreich, informativ
- keine Adjektive wie "amazing", "revolutionary", "blazing fast",
  "industry-leading"
- Einschränkungen direkt mitnennen, nicht versteckt am Ende
- Maintainer-Stimme ist sichtbar ("first published OSS project" ist
  OK an passender Stelle, nicht überall einstreuen)
- Englisch (en-US oder en-GB einheitlich, eines wählen und durchziehen)

Lieferformat: drei Markdown-Dateien, jeweils mit minimalem Frontmatter
(title, description, layout-Hint).
```

**Prompt für Gemini 3.1 (Polish-Pass für jede der drei Dateien):**

```
Aufgabe: stilistischer Polish für eine Site-Page (Markdown).

Hier ist der Text: [Markdown-Inhalt einfügen]

Was du machst:
- Satzfluss verbessern (Übergänge, Rhythmus)
- Überflüssige Wörter streichen
- Grammatik und Tippfehler korrigieren
- Inkonsistente Begriffe vereinheitlichen (z.B. "Claude Code"-Schreibweise,
  "MCP server" vs "MCP-Server")
- Doppelte Aussagen erkennen und kürzen

Was du NICHT machst:
- Inhalt ändern oder neu hinzufügen
- Tonalität verschieben (sachlich, nicht großspurig, hilfreich,
  informativ bleibt — auch wenn es "trockener" wirkt)
- Adjektive einführen, die nicht da waren ("amazing", "powerful",
  "revolutionary", "blazing fast", "industry-leading" sind
  ausdrücklich verboten)
- Marketing-Phrasen einfügen ("Take your X to the next level",
  "Unlock the power of Y", "Join thousands of developers")
- Einschränkungen abschwächen ("macOS only in v1" bleibt unverändert
  in der Direktheit)

Zielgruppe: Claude-Nutzer mit Anspruch an strukturierte, qualitäts-
getriebene Arbeit. Maker, Berater, Entwickler aller Skill-Levels —
verbunden über den Anspruch, nicht das Skill-Level. Erste-Projekt-
Authentizität ist gewollt.

Lieferformat: gepolishter Markdown-Text in derselben Struktur.
Optional am Ende ein zweiter Block mit Liste der Änderungen
("Changes made: ...") für Review.
```

### 3.5 Bilder-Inventar

Vier Bilder werden gebraucht für die Drei-Seiten-Site. Hier die Tabelle:

| ID | Seite | Inhalt | Quelle | Tool / Prompt |
|---|---|---|---|---|
| `B1` | Landing Hero | 2×2-Grid mit drei aktiven Sessions plus Notes-Cell | Screenshot aus cipher-mux | siehe unten — Aufnahme-Anweisung |
| `B2` | Landing „How it works" | Drei Mini-Visuals: Empty-Grid, Project-Popup, Aktive Session | Screenshots aus cipher-mux | siehe unten — Drei-Schritt-Sequenz |
| `B3` | Landing + Header | Wordmark | Generiert via Claude Design | siehe Prompt in Punkt 3.2 |
| `B4` | FAQ („Why tmux?") | Architektur-Skizze: Grid → Message Bus → MCP Server | Selbst gezeichnet (Excalidraw) oder Claude Design | Prompt in Punkt 3.2 |

**Aufnahme-Anweisung B1 (Landing Hero):**

```
Was zu zeigen ist: cipher-mux im Vollbild-Modus mit einem 2×2-Grid,
in dem drei Sessions aktiv sind und eine Cell den Notes-Editor zeigt.

Setup:
- Theme: cipher-dark (dunkler Hintergrund — bessere Lesbarkeit für
  Multi-Pane-Screenshots).
- Window-Größe: 1920×1200 oder 1440×900 (16:10), Retina-Auflösung 2×.
- Grid-Layout: 2 Spalten × 2 Zeilen, alle Cells gleich groß.
- Status-Bar sichtbar am unteren Rand.

Zell-Inhalte:
- Cell 1 (oben links): Eine Claude-Code-Session mit einem aktiven Prompt
  und Claude in der Mitte einer Antwort. Cell-Header zeigt einen
  sprechenden Session-Namen (z.B. "Frontend Worker").
- Cell 2 (oben rechts): Eine zweite Session, ebenfalls aktiv, anderer
  Inhalt (z.B. "Backend Worker").
- Cell 3 (unten links): Eine Orchestrator-Session, Cell-Header markiert
  als "Orchestrator", Inhalt zeigt Delegation-Schritte.
- Cell 4 (unten rechts): Notes-Editor offen mit einer Markdown-Notiz
  (Frontmatter sichtbar mit ein paar Tags, plus Body-Text).

Was zu vermeiden:
- Keine Mock-/Lorem-Ipsum-Inhalte. Echte oder repräsentative Inhalte,
  damit das Bild authentisch wirkt.
- Keine sichtbaren persönlichen Daten (Pfade, Account-Namen).
- Keine modaler Dialoge offen.

Format: PNG, 2× Retina (3840×2400 oder 2880×1800 je nach Window-Größe).
Dateiname: B1-grid-overview.png.
```

**Aufnahme-Anweisung B2 (Drei-Schritt-Sequenz):**

```
Drei Screenshots in kleiner Auflösung (je ca. 800×500), die zusammen
"How it works in 30 seconds" zeigen.

Setup wie B1 (cipher-dark, 2× Retina), aber kleiner Crop pro Bild.

Bild B2-1 — Empty Grid: Frisch gestartetes cipher-mux mit einem
2×2-Grid, alle Cells leer mit den drei Action-Buttons ("projekt",
"session", "notes"). Status-Bar sichtbar.

Bild B2-2 — Project Popup: Same Grid, aber im Vordergrund das
Project-Popup (geöffnet nach Klick auf "projekt"). Mehrere Project-
Karten in der Liste sichtbar.

Bild B2-3 — Active Session: Grid mit zwei aktiven Sessions plus
zwei leeren Cells. Eine Session zeigt eine laufende Claude-Antwort.

Format: PNG, 2× Retina (1600×1000).
Dateinamen: B2-1-empty-grid.png, B2-2-project-popup.png,
B2-3-active-session.png.
```

### 3.6 Build und Deploy

Der letzte Schritt im Website-Block. Wenn Texte gepolisht und Bilder vorhanden sind, übernimmt Claude Code im website-builder-Workflow:

1. Texte (drei MDX-Dateien) in `src/content/` einbinden.
2. Bilder in `src/assets/` ablegen mit den Dateinamen aus dem Inventar.
3. Wordmark-SVG in `src/assets/wordmark/` ablegen, alle drei Farb-Varianten.
4. `npm run build` lokal ausführen, prüfen dass kein Error.
5. Lokal `npm run preview` starten, alle drei Seiten klicken, alle Bilder laden, alle externen Links prüfen.
6. Auf `main` pushen, GitHub-Action läuft.
7. `[handle].github.io/cipher-mux-site` öffnen, prüfen dass live.

Aufwand-Schätzung für den Build-und-Deploy-Schritt: 1–2 Stunden, abhängig von kleinen Astro-Eigenheiten.

### 3.7 Aufwand-Bilanz für den Website-Block

Konsolidiert:

- Design-Block (Wordmark via Claude Design, Architektur-Skizze): 1–2 Stunden Maintainer-Zeit (Briefing + zwei Iterationen + Auswahl)
- Texte (Cowork-Erstwurf für drei Seiten): 2–3 Stunden Cowork-Session-Zeit, ca. 20–30 Minuten Maintainer-Aufmerksamkeit für Eingriffe und Korrekturen
- Polish (Gemini, drei Polish-Passes): 30–60 Minuten Maintainer-Zeit (Übergabe, Review der Änderungen, Annahme)
- Bilder (Screenshots aufnehmen, einrichten): 1 Stunde
- Astro-Setup und -Integration via Claude Code (website-builder): 4–6 Stunden inkl. Theme, Routing, Komponenten
- Build und Deploy: 1–2 Stunden

**Total Website-Block: ca. 9–14 Stunden Maintainer-Zeit.** Konsistent zum reduzierten 18–25-Stunden-Korridor aus dem Konzeptpapier (in dem die Website ca. 9–13 Stunden vom Gesamt-Aufwand ausmacht).

## 4. Block 2: Media-Kit

*Folgt in v0.2.* Wird konkretisieren: Wordmark übernehmen aus Block 1, drei Screenshots im selben Setup wie B1 aufnehmen, Demo-Clip mit Kap aufnehmen (Prompt mit konkretem Storyboard), Pitch-Texte aus dem Konzeptpapier extrahieren und nochmal durch den Polish-Pass geben, Wegweiser-README schreiben.

## 5. Block 3: GitHub-Release-Set

*Folgt in v0.2.* Wird konkretisieren: README-Draft aus dem Konzeptpapier durch den Polish-Pass, CONTRIBUTING.md-Erstellung via Cowork, CODE_OF_CONDUCT (Contributor Covenant 2.1, ein Befehl), CHANGELOG-Initial-Datei, Issue-/PR-Templates (Vorlagen aus etablierten OSS-Projekten als Basis), Build-Test-Workflow für GitHub-Action.

## 6. Block 4: Pipeline-Spec abgespeckt

*Folgt in v0.2.* Wird konkretisieren: Erst-Launch-Sequenz reduziert auf Drei-Seiten-Site und Mittelweg-Media-Kit, Show-HN-Vorbereitungs-Checkliste mit ausformuliertem Post-Body (kann aus dem Konzeptpapier 1:1 übernommen werden), Pro-Release-Routine als Checkliste, Maintainer-Drive-Test alle drei Monate als Kalender-Eintrag.

## 7. Methodik-Hinweis

External-Review steht als Option offen, falls vor v1.0 dieses Umsetzungsplans Außen-Blick gewünscht wird. Der Maintainer hat den Pre-Mortem-Skill in Phase 3 als Skill-Check anerkannt; eine zusätzliche External-Review-Schleife ist nicht angefragt.

Wenn die anderen drei Blöcke in v0.2 vorliegen, ist der Umsetzungsplan v1.0-fertig — das ist der Übergabe-Punkt an Claude Code im Launcher-Flow.
