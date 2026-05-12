# Lektorats-Brief — CIPHER-MUX Website-Texte

Bitte lies das vor dem eigentlichen Korrekturdurchgang in `TEXTE_ZUM_KORREKTURLESEN.md`. Das hier sind die Entscheidungen, die schon getroffen sind — nicht in Frage stellen, sondern als Rahmen nutzen.

---

## 1 · Was das Produkt ist (in einem Satz)

CIPHER-MUX ist eine macOS-Cockpit-App, die mehrere Claude-Code-Sessions parallel in einem Grid orchestriert — sichtbar, steuerbar, lehrbar. Open Source, MIT, Seitenprojekt, 100 % KI-generiert. Kein Startup-Produkt, kein Marketing-Budget.

## 2 · Zielgruppe

Menschen mit Idee, ohne tiefe Coding-Erfahrung — bis hin zu Power-Usern. Die Texte müssen für Einsteiger verständlich sein, ohne den Profis weh zu tun. Wer Claude Code schon kennt, soll sich ernst genommen fühlen; wer nicht, soll trotzdem mitkommen.

## 3 · Tonalität — was JA, was NEIN

**Ja:**
- Sachlich, direkt, mit leichtem Humor an wenigen Stellen.
- Du-Form durchgängig.
- Kurze Sätze. Bei Bedarf Halbsätze. Kein Schachtelsatz-Gewichse.
- Selbstironie ist erlaubt („Seitenprojekt", „macOS only. Vorerst.").

**Nein:**
- Kein Marketing-Sprech. Worte, die wir **nicht** wollen: nahtlos, revolutionär, intuitiv, mühelos, effortless, unleash, supercharge, game-changer, next-level, einfach besser, einzigartig, leistungsstark.
- Keine Superlative ohne Beleg.
- Keine Versprechen, die das Produkt nicht hält. Wenn etwas nur „macOS, Apple Silicon empfohlen" ist, dann sagen wir das auch.
- Keine Emoji im Fließtext. Status-LEDs, ASCII-Pfeile (`→`), Funktions-Glyphen (`✓ □ ▶ ●`) sind okay — die sind Teil des Cockpit-Looks.

## 4 · Sprach-Konventionen

- **Umlaute:** echte Umlaute (`ä ö ü ß`). Im aktuellen Stand sind manche Stellen noch mit `ae/oe/ue` geschrieben — das ist ein **Bug, nicht Stil**. Bitte überall auf echte Umlaute vereinheitlichen.
- **Anglizismen:** behalten, wo Fachbegriff (Session, Grid, Cell, Preset, Persona, Workspace, Hub, Worker, Sub-Session, Handoff, Resume, Fork, Scaffolding, Audit, ADR, MCP, Bearer-Token, Statusbar, Sidebar, Companion, Voice, TTS, STT). Eindeutschen, wo unnötig (z. B. „Spalten/Zeilen" statt „Columns/Rows", „Knopf" geht aber „Button" auch okay).
- **Komposita:** Bindestrich, wo Lesbarkeit gewinnt (`Voice-Pin`, `BT-Shutter`, `Multi-Session-Orchestrator`). Durchkoppeln bei Mischformen (`Claude-Code-CLI`).
- **Anführungszeichen:** Deutsche „… " im Fließtext. Englische "..." nur in Mock-Code/Terminal-Snippets.
- **Auslassungszeichen:** echtes `…`, nicht `...`.
- **Halbgeviertstrich:** `—` (mit Leerzeichen drumherum) für Einschübe. Bindestrich `-` nur in Komposita.
- **Zahlen:** Ziffern ab 10, ausgeschrieben darunter — außer in Stat-Boxen / Tabellen, da immer Ziffern.

## 5 · Glossar — Begriffe, die NICHT übersetzt/ersetzt werden

Diese Wörter sind Produkt-Vokabular und bleiben **wörtlich so**, wie sie da stehen — auch wenn ein anderes Wort „besser" klingt:

CIPHER-MUX · Cockpit · Grid · Cell / Zelle (beides erlaubt, je nach Kontext) · Session · Preset · Persona · Workspace · Hub · Companion · Cyber Factory · Ideation Partner · Refinement · Testing Assistant · Debugger · Audit · Voice Companion · Worker · Sub-Session · Welle / Wave · Handoff · Resume · Fork · ADR · REQ-ID · Skill · Pack · MCP · Bearer-Token · Statusbar · Sidebar · Voice-Pin · BT-Shutter · TTS · STT · Doom-Loop-Prevention · Message Bus · Project Launcher · Orchestrator-Watch.

Persona-Namen bleiben **wörtlich**: Cipher · Relay · Wayne / Wayne Szalinski · Der Kyniker · Sokratischer Tutor · Der Glitch.

## 6 · Was wirklich Lektorat braucht

Bitte fokussiere auf:
1. **Rechtschreibung & Grammatik** — Tippfehler, falsche Endungen, Komma-Fehler.
2. **Umlaut-Konsistenz** — `ue/oe/ae/ss` → `ü/ö/ä/ß`.
3. **Tonalitäts-Brüche** — Stellen, wo der Text plötzlich Marketing-Sprech wird (siehe §3 Liste). Markiere die zur Umformulierung.
4. **Doppelungen** — gleiches Wort dreimal in zwei Sätzen, gleiche Phrase auf mehreren Seiten.
5. **Verständlichkeit** — Stellen, wo ein Einsteiger aussteigen würde. Lieber kürzen als erklären.

**Nicht Aufgabe:**
- Inhaltliche Korrektheit der Features (das ist mein Job).
- Reihenfolge der Sektionen.
- Layout / Typo / Farbe — das ist im Code, nicht im Text.
- Englische Mock-Inhalte in Terminal-Snippets (`> orchestrator`, `delegating to worker-3` etc.) — die sollen englisch bleiben, das ist Authentizität.

## 7 · Format der Korrekturen

Am liebsten: direkt in `TEXTE_ZUM_KORREKTURLESEN.md` als Inline-Edits mit `~~alter Text~~ → neuer Text` oder als Kommentar `[KORR: …]`. Bei größeren Umformulierungen reicht ein Stichpunkt am Sektions-Ende.

---

Danke. Wenn etwas unklar ist — lieber nachfragen als raten.
