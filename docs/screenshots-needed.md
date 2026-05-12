# Benoetigte Screenshots — cipher-mux-site

Alle Screenshots in **Light und Dark** liefern. Format: `.webp`, 2x Retina (also z.B. 1200px breit fuer 600px Display-Breite). Ablage: `public/images/screenshots/`.

Benennung: `<name>-light.webp` / `<name>-dark.webp`

---

## Docs: Schnelleinstieg (`/docs/start`)

| # | Dateiname | Was das Bild zeigen soll |
|---|-----------|--------------------------|
| 1 | `grid-empty-companion` | Leeres Grid mit Companion in der ersten Zelle. Frischer Start, keine anderen Sessions. Companion-Begruessung sichtbar. |
| 2 | `workspace-editor` | Workspace-Editor mit Workspace-Prompt und mindestens einem Context Directory. Zeigt, wie ein Projekt eingerichtet wird. |
| 3 | `launcher-popup` | Launcher-Popup mit Preset-Tab. Liste der verfuegbaren Presets sichtbar (Ideation, Refinement, Cyber Factory etc.). Zweiter Tab "Path" angedeutet. |

## Docs: Nutzung der App (`/docs/usage`)

| # | Dateiname | Was das Bild zeigen soll |
|---|-----------|--------------------------|
| 4 | `grid-sessions` | Grid mit drei belegten Sessions und mindestens einer leeren Zelle. Verschiedene Entity-Typen erkennbar (unterschiedliche Farben/Header). Realistischer Arbeits-Zustand. |
| 5 | `session-header-annotated` | Annotierter Session-Header mit Beschriftung aller Elemente: Status-Punkt (Farbe), Context-Balken, Entity-Name, Buttons (Focus, Fork, Screenshot, Pop-Out, Shell, Background, Close). Pfeile/Labels als Overlay. |
| 6 | `focus-mode` | Focus Mode aktiv: eine Session expandiert, Focus-Bar sichtbar (mit Prev/Next-Navigation und Exit-Button). Restliche Zellen ausgeblendet oder minimiert. |
| 7 | `sidebar-notes` | Sidebar geoeffnet, Notes-Sektion aktiv mit Tag-Filter. Mehrere Notes sichtbar, mindestens ein Tag ausgewaehlt. Zeigt die fuenf Sektionen (Notes, Background, Orphaned, Memory, Messages). |
| 8 | `voice-statusbar` | Statusleiste mit Voice-Bereich. STT aktiv (LED gruen). Zeigt: STT-Button, COM-Button, LED-Indikator, ggf. Transkriptions-Vorschau. |
| 9 | `notes-editor` | Notes-Editor mit Markdown-Formatierung und Tag-Leiste. Zeigt eine Note mit formatiertem Text (Headings, Liste, Code-Block) und zugewiesenen Tags. |
| 10 | `settings-themes` | Einstellungen-Dialog, Tab "Themes" aktiv. Theme-Liste mit mehreren Themes sichtbar (inkl. A11y-Themes). Aktuelles Theme hervorgehoben. |
| 11 | `bugreport-dialog` | Bugreport-Dialog. Typ-Auswahl (Bug/Feature), Beschreibungsfeld, Screenshot-Option. Kompakter Dialog, nicht der volle Flow. |

## Docs: Prozess & Konzepte (`/docs/concepts`)

| # | Dateiname | Was das Bild zeigen soll |
|---|-----------|--------------------------|
| 12 | `preset-editor` | Preset-Editor im Workspace-Fenster. Global Rules sichtbar, Layer-Schichtung erkennbar (Global → Preset → Persona → Workspace → Cell). |
| 13 | `persona-editor` | Companion-Tab im Workspace-Editor mit Character-Liste. Sechs eingebaute Personas sichtbar (Cipher, Relay, Wayne, Kyniker, Sokrates, Glitch) mit ihren Farben. |

## Features-Seite (`/features`)

| # | Dateiname | Was das Bild zeigen soll |
|---|-----------|--------------------------|
| 14 | `high-contrast-2x2` | High-Contrast-Theme, 2x2 Grid mit Sessions. Schwarz/Weiss/Gelb/Cyan. WCAG AAA. |
| 15 | `cvd-deuteranopia-2x2` | Deuteranopie-Theme, 2x2 Grid. Blau/Orange-Palette (Okabe-Ito). |
| 16 | `cvd-tritanopia-2x2` | Tritanopie-Theme, 2x2 Grid. Magenta/Gruen-Palette. |
| 17 | `cvd-achromatopsia-2x2` | Achromatopsie-Theme, 2x2 Grid. Reine Graustufen. |

---

## Hinweise zur Aufnahme

- **App-Zustand vorbereiten:** Mindestens 3-4 Sessions mit verschiedenen Entities starten, ein Workspace mit sinnvollem Namen und Prompt anlegen, ein paar Notes mit Tags erstellen.
- **Annotierter Header (#5):** Muss nachbearbeitet werden — Pfeile/Labels als Overlay in einem Bildbearbeitungstool oder per CSS auf der Seite.
- **A11y-Screenshots (#14-17):** Jeweiliges Theme aktivieren, 2x2 Grid mit laufenden Sessions.
- **Keine personenbezogenen Daten** in den Screenshots (Pfade, Projekt-Namen pruefen).
- **Crop:** Moeglichst eng am relevanten UI-Element. Kein ganzer Desktop-Screenshot wo nur ein Dialog gezeigt wird.
