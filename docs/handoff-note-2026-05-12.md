# Uebergabenote: Website-Session 2026-05-12

## Was diese Session gemacht hat

### Docs-Redesign (Hauptarbeit)
Die monolithische Docs-Seite (15 Sektionen auf einer Scrollseite) wurde in **drei Unterseiten** aufgeteilt:

- `/de/docs/` — Hub mit drei Karten + Companion-Hinweis
- `/de/docs/start` — **Schnelleinstieg** (Workspace-first Flow: Orientierung → Workspace anlegen → Sessions → App-Ueberblick → Voice)
- `/de/docs/concepts` — **Prozess & Konzepte** (Die Idee, Lifecycle, Entities, 5-Schichten-Presets, Personas, Memory/Tags/Scoping, Ehrlichkeit)
- `/de/docs/usage` — **Nutzung der App** (vollstaendige UI-Referenz, 10 Sektionen)

EN: Hub fertig, drei Subpages als Stubs mit "Translation in Progress"-Hinweis.

Navigation: `DocsNav.astro` Komponente (horizontale Tabs), URL-Slugs in beiden Sprachen gleich (`start`, `concepts`, `usage`).

### Content-Korrekturen aus Walkthrough-Review
- Workshop-Rolle korrigiert (Orchestrator/Triage-Hub, nicht "Quick Fixes")
- Debugger bekommt Bugs via Workshop, nicht direkt von Testing
- Relay: kein "(Default)" mehr, Startcharakter fuer Companion
- Presets: Copy-as-Custom → eigene Presets anlegen (mit Claude-Code-Hilfe fuer Ordnerstruktur)
- Persona als 5. Schicht im CLAUDE.md-Modell ergaenzt
- Workshop im Lifecycle-Diagramm sichtbar (hervorgehoben als Hub)
- Bugreport-Dialog vereinfacht (kein Enrichment-Step mehr)
- Shortcuts §10 korrigiert (Cmd+Shift+WASD, nicht Cmd+1-5)

### Download-Seite
- /startup-Befehl eingefuegt
- Companion-Mock neutral (kein Relay, keine Multiple-Choice)
- MPO → Cyber Factory
- Ollama-Integration komplett entfernt (beide Sprachen)

### Landing-Seite
- Pillar-Kacheln haben jetzt `detail`-Property im Content (expandierbarer Text, bereit fuer Click-to-Expand)

### Features-Seite
- Section 12 "Neueste Ergaenzungen" auf Focus Mode reduziert (6 Eintraege → 1 Absatz)

### Changelog
- Gespiegelter Content entfernt, durch GitHub-Redirect ersetzt (DE+EN)

### Stats-Update v0.9.101
- Version: v0.9.99 → v0.9.101 ueberall
- Tests: 1.207 → 1.509
- MCP-Tools: 62 in 11 Kategorien
- Themes: 13
- Welle 8 im Chart (mit dynamischem max statt hardcoded 1207)
- Workshop Entity-ID: orchestrator → workshop

---

## Was die naechste Session machen muss

### 1. Claude Design Handoff integrieren (PRIORITAET)

Design-Dateien liegen unter `docs/design-handoff-2026-05-12/`. Das sind **v2-Entwuerfe** fuer Landing und Docs.

**Kerndateien:**
- `project/CIPHER-MUX Docs v2.html` — **Primaer-Design**, war beim Handoff offen
- `project/docs-v2-page.jsx` — Docs v2 Page-Shell
- `project/docs-v2-start.jsx` — Schnelleinstieg v2
- `project/docs-v2-konzepte.jsx` — Konzepte v2
- `project/docs-v2-nutzung.jsx` — Nutzung v2
- `project/landing-v2-page.jsx` — Landing v2
- `project/landing-v2-heroes.jsx` — Hero-Varianten
- `project/landing-v2-sections.jsx` — Landing Sections v2
- `project/landing-v2-pillar-alts.jsx` — Pillar-Karten Alternativen (Click-to-Expand?)

**Wichtig:** Die JSX-Dateien sind React-Prototypen (Babel-Standalone), KEIN Produktionscode. Sie zeigen das gewuenschte Ergebnis — pixelgenau nachbauen in Astro/CSS. Nicht die Struktur kopieren.

Das README unter `project/design_handoff_cipher_mux_website/README.md` ist die ausfuehrliche Design-Spec mit allen Tokens, Spacing, Typographie.

### 2. Offene Walkthrough-Punkte

Aus `docs/review-walkthrough-2026-05-11.md`:

- [ ] **Landing: Feature-Kacheln klickbar machen** — Content ist bereit (`detail`-Property in landing.ts), braucht Click-to-Expand-Logik. Evtl. hat das Claude-Design-Handoff dafuer eine Loesung (landing-v2-pillar-alts.jsx).
- [ ] **Docs-Hub visuell aufwerten** — CSS-Art oder Pixel-Art fuer die drei Karten. Evtl. in den v2-Designs geloest.
- [ ] **Features-Seite Aktualitaet pruefen** — MCP-Section Text, Session-Beschreibungen etc. gegen aktuellen Code abgleichen.
- [ ] **Download-Seite: Erster Start weiter neutral halten** — EN-Seite hat noch den alten Companion-Mock (mit Options-Buttons statt Freitext)

### 3. Screenshots

Alle Docs-Seiten haben Screenshot-Platzhalter (graue gestrichelte Kaesten mit Beschreibung was das Bild zeigen soll). Screenshots in Light und Dark liefern fuer:
- Leeres Grid mit Companion
- Launcher-Popup (Presets + Path Tab)
- Workspace-Editor
- Session-Header (annotiert)
- Focus Mode
- Sidebar
- Notes-Editor
- Einstellungen
- Bugreport-Dialog
- Statusleiste Voice-Bereich

### 4. EN-Uebersetzung der drei Docs-Subpages

Aktuell Stubs mit "Translation in Progress". Content-Dateien brauchen volle englische Uebersetzung:
- `src/i18n/en/docs-start.ts`
- `src/i18n/en/docs-concepts.ts`
- `src/i18n/en/docs-usage.ts`

---

## Dateien-Ueberblick

### Neue Dateien (diese Session)
```
src/components/DocsNav.astro
src/pages/{de,en}/docs/index.astro    (Hub)
src/pages/{de,en}/docs/start.astro    (Schnelleinstieg)
src/pages/{de,en}/docs/concepts.astro (Konzepte)
src/pages/{de,en}/docs/usage.astro    (Nutzung)
src/i18n/de/docs-hub.ts
src/i18n/de/docs-start.ts
src/i18n/de/docs-konzepte.ts
src/i18n/de/docs-nutzung.ts
src/i18n/en/docs-hub.ts
src/i18n/en/docs-start.ts   (stub)
src/i18n/en/docs-concepts.ts (stub)
src/i18n/en/docs-usage.ts   (stub)
docs/design-handoff-2026-05-12/       (Claude Design Export)
```

### Geloeschte Dateien
```
src/pages/de/docs.astro     (alte Einzelseite)
src/pages/en/docs.astro     (alte Einzelseite)
src/i18n/de/docs.ts         (alter Mega-Content)
src/i18n/en/docs.ts         (alter Mega-Content)
```

### Modifizierte Dateien
```
src/i18n/ui.ts              (docs-nav Keys, Version)
src/i18n/de/landing.ts      (Pillar-Details, Stats, Version)
src/i18n/en/landing.ts      (Pillar-Details, Stats, Version)
src/i18n/de/features.ts     (Stats, Workshop-ID, Focus Mode)
src/i18n/en/features.ts     (Stats, Workshop-ID, Focus Mode)
src/pages/de/start.astro    (Companion neutral, /startup, Ollama raus)
src/pages/en/start.astro    (MPO→CF, Ollama raus)
src/pages/de/index.astro    (Wave-Chart max dynamisch)
src/pages/en/index.astro    (Wave-Chart max dynamisch)
src/pages/de/changelog.astro (GitHub-Redirect)
src/pages/en/changelog.astro (GitHub-Redirect)
```

---

## Git-Log (kompakt)

```
07e950a feat(site): walkthrough backlog — all remaining items
8ff99bf chore(stats): update to v0.9.101 — tests, MCP tools, themes, wave chart
11a17a1 fix(docs+start): walkthrough review — 7 content corrections
2414922 fix(docs): simplify bugreport dialog description
41780f4 fix(docs): correct shortcuts in usage §10
d30913b fix(docs): address review findings across all docs pages
360aa62 fix(docs): correct Workshop and Debugger role descriptions
6aa458a chore(docs): remove old monolithic docs pages, migration complete
e4ca7f8 feat(docs): add EN subpage stubs with translation notice
d37dd7a content(docs): add Nutzung der App page (DE)
083dd4c content(docs): add Prozess & Konzepte page (DE)
169c68b content(docs): add Schnelleinstieg page (DE)
f0aeab1 feat(docs): add EN hub page at /en/docs/
2b452ea feat(docs): add DE hub page at /de/docs/
ac1c78a feat(docs): add DocsNav component and docs-nav i18n keys
3c7ef35 docs: add implementation plan for docs page redesign
49eef15 docs: add design spec for docs page restructuring into three subpages
```
