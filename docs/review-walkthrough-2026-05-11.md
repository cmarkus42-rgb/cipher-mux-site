# Walkthrough Review 2026-05-11 — Alle Seiten

Zusammenfassung des Voice-Walkthroughs. Sortiert nach Seite.

---

## Landing Page

- [ ] **Feature-Kacheln zu leer:** Die vier Bereiche (01-04) haben zu viel Flaeche fuer zu wenig Inhalt. Klickbar machen → vertiefender Text klappt auf. Muss mobil funktionieren.
- [ ] **Statistiken aktualisieren:** Zahlen unten sind veraltet.

## Features Page

- [ ] **Aktualitaet pruefen:** Inhalte auf aktuellen Stand bringen.
- [ ] **"Neueste Ergaenzungen" ausmisten:** Nur Focus Mode behalten als eigene, richtige Sektion. Tag Management, Update Checker etc. raus — zu kleinteilig fuer eine USP-Seite.

## Download / Start Page

- [ ] **Erster Start neutral formulieren:** Relay ist nur eine moegliche Persona, nicht "die" Persona. Neutral beschreiben.
- [ ] **/startup erwaehnen:** "Companion startet, mach /startup und dann geht's los." Fehlt komplett.
- [ ] **MPO raus → Cyber Factory:** Section 04 erwaehnt noch MPO, das ist laengst Cyber Factory.
- [ ] **Ollama-Integration komplett entfernen:** Gibt es nicht mehr. Auch den Satz "funktioniert auch ohne Ollama-Integration" loeschen.

## Docs Hub

- [ ] **Companion-Screenshot:** Kleines Bild der Companion-Zelle die sich vorstellt.
- [ ] **Karten visuell aufwerten:** CSS-Art oder Pixel-Art passend zum Gesamtkonzept. Aktuell zu karg.
- [ ] **Alternativ: Hub ueberspringen:** Direkt in Schnelleinstieg landen, Tabs zum Wechseln reichen.

## Docs / Schnelleinstieg

- [ ] **Installation → Link auf Download:** Nicht wiederholen, nur verlinken.
- [ ] **Flow umbauen — Workspace-first:** Der echte Flow ist: Workspace anlegen → Workspace-Prompt mit Projektinfo → Projektverzeichnis zuweisen → Workspace laden → alle Sessions wissen Bescheid. Companion braucht keine eigene Sektion — nur Hinweis dass er alles erklaeren kann.
- [ ] **Skip Permissions erwaehnen:** App-weite Einstellung unter Einstellungen, nicht nur pro Session.
- [ ] **Voice-Dopplung mit Download reduzieren.**
- [ ] **Quick Overview der App ergaenzen:** Welche Menues gibt es, was machen sie, wo findet man was. Grober Ueberblick mit "Details unter Nutzung der App"-Links.

## Docs / Prozess & Konzepte

- [ ] **Workshop im Lifecycle-Diagramm:** Neben dem Debugger als Verteiler/Koordinator darstellen.
- [ ] **Persona als 5. Schicht:** Bei Presets verstehen ist die Persona unterbetont — sie wirkt wie eine zusaetzliche Schicht ueber den vier CLAUDE.md-Layern.
- [ ] **Copy-as-Custom gibt es nicht mehr:** Presets sind feststehend. Eigene anlegen ist moeglich, aber fuer einen vernuenftigen Preset-Ordner braucht man Claude-Code-Hilfe.
- [ ] **Relay: "(Default)" entfernen:** Kein globaler Default mehr. Relay ist Startcharakter fuer Companion, nicht der Default fuer alles.

## Docs / Nutzung der App

- [ ] **Detail-Review spaeter:** Grundsaetzlich OK, Screenshots und Details klaeren wir einzeln.

## Changelog

- [ ] **Auf GitHub verlinken statt spiegeln:** Kein Double-Content. Changelog-Seite soll auf den GitHub-Changelog verweisen.

---

## Priorisierung (Vorschlag)

**Sofort fixbar (Content-Korrekturen):**
- Relay Default entfernen
- Copy-as-Custom korrigieren
- MPO → Cyber Factory
- Ollama-Referenzen entfernen
- /startup erwaehnen
- Workshop im Lifecycle
- Persona als 5. Schicht

**Naechste Runde (Struktur):**
- Schnelleinstieg Flow umbauen (Workspace-first)
- Features-Seite ausmisten
- Download-Seite Erster Start neutral

**Spaeter (Design/Visual):**
- Landing-Page Kacheln klickbar
- Docs-Hub visuell aufwerten
- Screenshots
- Changelog-Redirect
