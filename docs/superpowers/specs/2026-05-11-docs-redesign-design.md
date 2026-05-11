# Design: Docs-Seite Redesign — Drei Unterseiten

**Datum:** 2026-05-11
**Status:** approved
**Scope:** Website cipher-mux-site — Docs-Bereich

---

## Ausgangslage

Die aktuelle Docs-Seite (`/de/docs`, `/en/docs`) ist eine einzelne Scrollseite mit 15 Sektionen. Der Content mischt Onboarding, Konzepte und UI-Referenz. Parallel hat der Companion in den Notes eine vollstaendige Wissensbase plus 7 detaillierte Guides geschrieben (Stand 2026-05-11), die deutlich reicher und didaktisch besser strukturiert sind.

## Entscheidung

Drei Unterseiten statt einer Scrollseite. Die bisherige `/de/docs` wird zur Hub-Seite (Verteiler). Der Link von aussen bleibt identisch.

---

## Routing

```
/de/docs/           → Hub (index.astro)
/de/docs/start/     → Schnelleinstieg (start.astro)
/de/docs/konzepte/  → Prozess und Konzepte (konzepte.astro)
/de/docs/nutzung/   → Nutzung der App (nutzung.astro)

/en/docs/           → Hub (index.astro)
/en/docs/start/     → Quick Start (start.astro)
/en/docs/concepts/  → Process and Concepts (concepts.astro)
/en/docs/usage/     → Using the App (usage.astro)
```

Haupt-Navigation zeigt weiterhin "Docs" → `/de/docs/`.

## Dateistruktur

```
src/pages/de/docs/
  index.astro
  start.astro
  konzepte.astro
  nutzung.astro

src/pages/en/docs/
  index.astro
  start.astro
  concepts.astro
  usage.astro

src/i18n/de/
  docs-hub.ts
  docs-start.ts
  docs-konzepte.ts
  docs-nutzung.ts

src/i18n/en/
  docs-hub.ts
  docs-start.ts
  docs-concepts.ts
  docs-usage.ts
```

Bisherige `docs.ts` (de/en) und `docs.astro` (de/en) werden ersetzt.

## Navigation

**Docs-Tab-Nav:** Horizontal unter dem Hero, gestylt wie die bisherige Anchor-Nav. Drei Items: Schnelleinstieg | Prozess und Konzepte | Nutzung der App. Aktive Seite hervorgehoben. Auf allen vier Docs-Seiten identisch — auf dem Hub ist keiner aktiv.

Keine Prev/Next-Links, keine Sidebar. Nur die Tabs.

## Screenshot-Platzhalter

Alle Seiten verwenden `<figure>` mit grauem Kasten + Caption. Caption beschreibt was das Bild zeigen soll. User liefert Screenshots in Light und Dark nach. Format:

```html
<figure class="docs-screenshot">
  <div class="docs-screenshot-placeholder">
    Screenshot: Launcher-Popup mit drei Tabs, Dark Theme
  </div>
  <figcaption>Das Launcher-Popup — drei Tabs fuer Presets, Pfade und Notes.</figcaption>
</figure>
```

---

## Seite 1: Hub (`/de/docs/`)

Minimalistisch. Hero ("Das Handbuch"), Companion-Hinweis ("Du musst das hier nicht lesen"), drei Karten:

| Nr | Titel | Einzeiler |
|----|-------|-----------|
| 01 | Schnelleinstieg | Vom Download zur ersten Session in fuenf Minuten. |
| 02 | Prozess und Konzepte | Wie die Entities zusammenarbeiten — und warum. |
| 03 | Nutzung der App | Jede Funktion, jeder Button, jedes Menue. |

---

## Seite 2: Schnelleinstieg (`/de/docs/start/`)

Ziel: Eine Bildschirmseite. Vom "gerade installiert" zu "erste produktive Session".

### Sektionen

1. **Erster Start**
   - Was passiert beim ersten Oeffnen: Recovery-Dialog (falls Sessions vorhanden), sonst leeres Grid mit `+`
   - Screenshot-Platzhalter: Leeres Grid

2. **Companion starten**
   - `+` → Presets → Companion
   - Die drei Modi (Tutor / Berater / Helfer) — kurze Tabelle
   - "Er kennt alles was auf diesen Seiten steht"
   - Screenshot-Platzhalter: Launcher-Popup Presets-Tab

3. **Erste eigene Session**
   - `+` → Path → Projektordner waehlen
   - Shell Only vs. Claude erklaeren
   - Was Skip Permissions bedeutet (und warum man es nicht leichtfertig aktiviert)
   - Screenshot-Platzhalter: Launcher-Popup Path-Tab

4. **Workspace einrichten**
   - Statusleiste → Workspaces
   - Grid-Groesse, Zellen mit Presets belegen, Default setzen
   - "Ein Klick, alles steht"
   - Screenshot-Platzhalter: Workspace-Editor mit belegtem Grid

5. **Voice ausprobieren**
   - Voice-Pill → STT → Sprechen → "abschicken"
   - Drei Saetze, kein Deep-Dive
   - Verweis auf Nutzungs-Seite fuer Details

6. **Weiter**
   - Links zu Prozess/Konzepte und Nutzung mit Einzeiler

---

## Seite 3: Prozess und Konzepte (`/de/docs/konzepte/`)

Die Denkschule hinter cipher-mux. Vom konkreten Problem her erklaert, nicht vom Feature. Ehrlich, bescheiden, kein Marketing.

### Sektionen

1. **Die Idee**
   - Das Problem: eine Claude-Session die gleichzeitig plant, codet und testet, verliert Fokus und Context
   - Die Hypothese: spezialisierte Sessions mit klaren Uebergaben liefern bessere Ergebnisse
   - Ehrliche Einordnung: das ist ein Experiment, nicht bewiesen. Token-Kosten sind real — jede Entity-Session verbraucht Context, Parallel-Sessions multiplizieren das
   - Ton: "Wir probieren das aus. Hier ist was wir bisher gelernt haben."

2. **Der Lebenszyklus**
   - Ideation → Refinement → Cyber Factory → Testing → Debugger → Audit
   - Darstellung als gestyltes HTML-Flussdiagramm (kein Bild)
   - Pro Phase: ein Absatz — was geht rein, was passiert, was kommt raus
   - Workshop als Querverbindung: kleine Jobs, Bug-Triage, Koordination
   - Companion als Begleiter durch den ganzen Zyklus

3. **Die Entities im Detail**
   - Companion: Berater, nicht Ausfuehrer. Drei Modi. Memory.
   - Ideation Partner: von vager Idee zum Anforderungspaket
   - Refinement: vom Anforderungspaket zur Detail-Spec mit REQ-IDs
   - Cyber Factory: Wellen-Plan, parallele Worker, Monitoring
   - Testing Assistant: Testcases, Findings, Backreport
   - Debugger: Fix-Plan, Verifikation, Eskalation
   - Audit: Code-Review, Release-Empfehlung
   - Workshop: kleine Jobs, Triage
   - Voice Relay: Companion fuer Sprachinteraktion
   - Launcher: Kickoff-Flow
   - Tabelle: "Welche Entity wann?"

4. **Presets verstehen**
   - Was ist ein Preset? Eine vorkonfigurierte Rolle mit eigenem CLAUDE.md
   - Die CLAUDE.md-Schichten visualisiert:
     ```
     Layer 1: Global Rules (fuer alle)
     Layer 2: Entity-Preset (preset.md)
     Layer 3: Workspace Prompt (fuer alle im Workspace)
     Layer 4: Cell Prompt (nur diese Zelle)
     ```
   - Wie sich Variabilitaet ergibt: selbes Preset + anderer Workspace + andere Persona = anderes Verhalten
   - Ordnerstruktur unter `~/.config/cipher-mux/entities/`
   - Builtin vs. Custom: Copy-as-Custom fuer eigene Anpassungen
   - Screenshot-Platzhalter: Preset-Editor mit sichtbaren Schichten

5. **Personas (Characters)**
   - Ton und Stil, nicht Funktion
   - Die sechs Eingebauten: Tabelle mit Name + Kurzcharakter
   - Globaler Override: ein Character fuer alles
   - Eigene Personas anlegen
   - Screenshot-Platzhalter: Companion-Tab im Workspace-Editor

6. **Memory, Tags und Workspace-Scoping**
   - Companion Memory: was die KI sich ueber Sessions hinweg merkt. Scopes (user/workspace/session)
   - Notes: sichtbare, teilbare Wissensstuecke. Tags als Organisationsprinzip
   - Workspace-Scoping: wie Tags, Prompts und Notes automatisch gefiltert werden
   - Wie das zusammenwirkt: Workspace wechseln = anderer Context, andere Notes, andere Tags
   - Tabelle: Note vs. Memory — wann was

7. **Ehrlichkeit**
   - Token-Last und Kosten: jede Session verbraucht API-Tokens. Parallel-Sessions multiplizieren. Context-Fenster ist endlich.
   - Grenzen: nicht alles funktioniert beim ersten Mal. Handoffs koennen scheitern. Sessions vergessen wenn der Context voll ist.
   - Solo-Maintainer: ein Mensch, begrenzte Zeit. "I respond when I have time."
   - Ton: kein Disclaimer, sondern Respekt vor der Investition des Users

---

## Seite 4: Nutzung der App (`/de/docs/nutzung/`)

Vollstaendige UI-Referenz. Jede Funktion, jeder Button. Hier wandert der Grossteil des bisherigen Docs-Contents hin, angereichert mit den Companion-Guides.

### Sektionen

1. **Das Grid**
   - Zellen: leer (`+`) vs. belegt (Session)
   - Drag & Drop: Header ziehen = Sessions tauschen. Sidebar-Sessions aufs Grid. Notes auf Zellen. Dateien aus Finder.
   - Grid-Groesse: Statusleiste → Spalten/Zeilen (1-7 x 1-3)
   - Screenshot-Platzhalter: Grid mit 3 belegten Sessions + 1 leerer Zelle

2. **Session-Zell-Header**
   - Linke Seite: Neon-Dot, Status-Icon, Session-Name, Voice-Dot, Voice-Pin
   - Context-Bar: Farbbalken mit Erklaerung der Schwellen (gruen/gelb/orange/rot)
   - Rechte Seite: alle Buttons einzeln (Scan, Expand, Fork, Screenshot, Projekt wechseln, Background, Shell, Pop-Out, Close) — Tabelle mit Icon + Shortcut + Funktion
   - Entity-Farbcodierung: Tabelle aller 11 Entity-Farben
   - Screenshot-Platzhalter: Annotierter Session-Header (Pfeile auf die Elemente)

3. **Focus Mode und Pop-Out**
   - Focus Mode: Aktivierung (Scan-Icon / Cmd+Shift+F), 2x2-Expansion, Focus-Bar (Name, CTX%, Font-Size, ESC)
   - Pop-Out: ExternalLink-Icon, eigenes Fenster, Dock-Button zurueck
   - Sidebar als Fenster: Detach/Dock
   - Screenshot-Platzhalter: Focus Mode mit Focus-Bar, Pop-Out-Fenster

4. **Die Sidebar**
   - Oeffnen: `sidebar` in Statusleiste
   - Fuenf Sektionen einzeln:
     - Notes: Browser, Suche, Tag-Filter, Workspace-Filterung, Doppelklick/Drag, Bulk-Operationen
     - Background Sessions: Expand/Preview, Doppelklick ins Grid, Drag
     - Orphaned Sessions: Adoptieren/Beenden (konditionell)
     - Companion Memory: durchsuchbare Erinnerungen
     - Messages: Message Bus, Sender, Uhrzeit
   - Sidebar als Fenster (Detach/Dock)
   - Screenshot-Platzhalter: Sidebar geoeffnet mit Notes-Sektion

5. **Sprachsteuerung**
   - Drei Modi: OFF / STT / COM — Erklaerung + LED-Farben
   - STT-Modus: Text wird eingefuegt, nicht gesendet. Sprachbefehle-Tabelle (abschicken, neue zeile, hoch/runter, grid-Navigation, kopieren, einfuegen)
   - COM-Modus: Voice Relay erklaert — eigene Session, nicht Proxy
   - Voice Pin: Stimme an Session binden
   - TTS-Konfiguration: Engine, Verbosity, Voices, Catalog
   - BT-Fernbedienung: Auto vs. Manual
   - Barge-In: Unterbrechen durch Sprechen
   - Screenshot-Platzhalter: Statusleiste Voice-Bereich, Voice Catalog

6. **Notes**
   - Anlegen (Launcher, Sidebar, MCP)
   - Editor: CodeMirror, Markdown, Cmd+S mit Tag-Vorschlag
   - Tags: `klasse:wert`-Format, exklusive Klassen (status, kind), Autocomplete
   - Workspace-Scoping: automatische Filterung
   - Handoff-Notes: Wissenstransfer zwischen Sessions
   - Testcase-Notes: spezielles Format
   - Note vs. Memory: Tabelle
   - Screenshot-Platzhalter: Notes-Editor mit Tags

7. **Projekte und Hub**
   - Standard-Ordnerstruktur (`.claude/`, `.cyber-factory/`, `docs/`, `src/`, `.project-meta.json`)
   - Hub-Tools im Ueberblick

8. **Einstellungen**
   - Tab General: Skip Permissions, Keep Working, Bugreport
   - Tab Sprache: Sprache, Voice/TTS-Optionen, Installed Voices, Voice Catalog
   - Tab Themes: 13 eingebaute Themes (Liste mit Kategorien), Custom Themes, Theme-Editor, Terminal-Fonts
   - Tab Shortcuts: Verweis auf Shortcut-Referenz
   - Tab A11y: CVD-Themes, Accessibility-Einstellungen
   - Tab About: Version, Links, Credits
   - Screenshot-Platzhalter: Einstellungen General-Tab, Theme-Editor

9. **Bugreport-Dialog**
   - Oeffnen: Cmd+B oder Einstellungen
   - Workflow: Typ → Beschreibung (STT-faehig) → Screenshot → Enrich → Submit
   - Screenshot-Platzhalter: Bugreport-Dialog mit Enrichment-Preview

10. **Tastenkuerzel**
    - Vollstaendige Referenz-Tabelle, gruppiert nach Kategorie
    - Bekannte Shortcuts: Cmd+N, Cmd+B, Cmd+S, Cmd+Shift+F, Ctrl+Shift+Space, Cmd+1-5, Escape

---

## Technische Details

### Layout-Komponente

Alle Docs-Seiten nutzen das bestehende `Layout.astro` mit `active="docs"`. Die Docs-Tab-Nav wird als eigene Komponente `DocsNav.astro` implementiert:

```astro
// src/components/DocsNav.astro
// Props: lang, activePage ('start' | 'konzepte' | 'nutzung' | null)
// Rendert drei Tab-Links, aktiver hervorgehoben
```

### Screenshot-Platzhalter CSS

```css
.docs-screenshot {
  margin: 1.5rem 0;
}
.docs-screenshot-placeholder {
  background: var(--color-surface-2);
  border: 2px dashed var(--color-border);
  border-radius: 8px;
  padding: 3rem 2rem;
  text-align: center;
  color: var(--color-text-dim);
  font-style: italic;
}
```

### Content-Quellen

- **Schnelleinstieg:** Companion-Intro aus bisheriger docs.ts + Guide "Das Grid" + Guide "Workspaces"
- **Prozess und Konzepte:** Guide "Die Entities" + Wissensbase Sektionen 8, 7, 16 + neu geschriebener Content (Schichten-Modell, Ehrlichkeit)
- **Nutzung der App:** Bisherige docs.ts Sektionen 01-15 + alle Companion-Guides als Anreicherung + Wissensbase als Detailquelle

### Migration

1. `src/pages/de/docs.astro` → `src/pages/de/docs/index.astro` (Hub, neuer Content)
2. `src/pages/en/docs.astro` → `src/pages/en/docs/index.astro` (Hub, neuer Content)
3. `src/i18n/de/docs.ts` → aufgeteilt in 4 Dateien
4. `src/i18n/en/docs.ts` → aufgeteilt in 4 Dateien
5. Alte Einzeldateien loeschen nach Migration

---

## Nicht in Scope

- Englische Uebersetzung der neuen Inhalte (Seite 2+3) — kommt spaeter
- Screenshots — User liefert nach, Platzhalter werden eingebaut
- Schema.org-Markup fuer die neuen Seiten — wird bei Bedarf ergaenzt
- Interaktive Elemente (Tabs, Accordions) — bleibt statisches HTML
