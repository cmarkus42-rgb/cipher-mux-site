# cipher-mux-site — projektspezifische Claude-Anweisungen

Diese Datei ergänzt die Workspace-CLAUDE.md im übergeordneten WebsiteDesigner-Ordner um Regeln, die nur für dieses Projekt gelten.

## Projekt
Drei-Seiten-Astro-Site für CIPHER-MUX. OSS-Veröffentlichung. Sprache deutsch primär, englisch in v1.1.

## Stack
- Astro mit TypeScript-strict
- Vanilla CSS, keine zusätzlichen Frameworks
- Schriften lokal (Rajdhani-Bold für Header, System-Stack für Body)
- Dunkles Default-Theme, Light-Mode-Toggle

## Tonfall
Enthusiastisch aber ehrlich. Vorstellen statt vermarkten. Keine Buzzwords, keine leeren Versprechen. Einschränkungen offen benennen.
- Du-Form gegenüber dem Leser ist OK (Maker-Zielgruppe).
- Maintainer-Stimme bewusst sichtbar.
- Schluss-Sektion respektiert die „I respond when I have time"-Klausel.

## Inhalts-Quelle
- Content-Brain in `docs/website-content-brain.md` ist das Ausgangsmaterial für alle Texte.
- Texte sollen vor Astro-Einbau durch Cowork (Claude) erstellt und durch Gemini gepolisht sein. Falls Texte fehlen oder unfertig wirken, halten und melden — keine eigene Improvisation auf Inhaltsebene.

## Schema.org
- Layout: `WebSite` plus `SoftwareApplication` für die Landing.
- FAQ-Seite: `FAQPage` mit jeder Q/A als `Question`/`Answer`.
- Get-Started: `HowTo`, falls als Schritt-Anleitung formuliert.
- KEIN `LocalBusiness` — cipher-mux ist Software, kein lokaler Dienstleister.

## Deployment
- GitHub Pages aus Repo `cipher-mux-site` (parallel zu cipher-mux-Hauptrepo).
- Action: `withastro/action@v3` in `.github/workflows/deploy.yml`.
- Eigene Domain in v1.0 unwahrscheinlich, GitHub-Pages-Default-URL reicht.

## Was hier NICHT passiert
- Kein Tracking, kein Analytics, keine Telemetrie. cipher-mux verspricht das ausdrücklich.
- Kein Newsletter-Signup, keine Sponsoring-Buttons, keine „Made with love"-Floskeln.
- Keine Cross-Platform-Versprechen — v1 ist macOS only.

## Global Rules

### Universelle Regeln

1. **Plan vor Code.** Nicht-triviale Aenderungen brauchen einen Plan: betroffene Dateien, Reihenfolge, Tests. Plan zeigen, Bestaetigung abwarten.
2. **Spec ist Wahrheitsquelle.** Code, der von der Spec abweicht, ist verdaechtig. Spec zuerst aendern, nicht den Code.
3. **Test-First.** Neuer Code braucht Tests — Verhaltens-Tests, keine Implementations-Tests.
4. **Layered Implementation.** Skelett zuerst, dann Kernlogik, dann Edge Cases, dann Refactor. Kein Mega-Prompt.
5. **Off-Limits respektieren.** Auth, Payment, Migrations, .env, Credentials — ohne expliziten Auftrag tabu.
6. **Risk-Review vor Commit.** Was geaendert, was geloescht, was bricht potenziell.
7. **"Weiss ich nicht" ist valide.** Keine erfundenen Library-Namen, API-Endpunkte oder Versionen.
8. **Token-Disziplin.** Antwort-Laenge passt zur Frage. Kein Wiederholen, keine Floskeln, kein "Hoffe das hilft".
9. **Sicherheit.** Keine PII leaken, keine Credentials lesen/zitieren, keine Default-Geheimnisse in Code.

### Companion Memory

Alle Entities haben Zugriff auf persistente Memory-Tools:
- `companion_memory_write` — Erinnerung speichern (mit scope: user/workspace/session)
- `companion_memory_recall` — letzte Eintraege abrufen (mit scope-Filter)
- `companion_memory_search` — Volltextsuche in Erinnerungen
- `companion_memory_forget` — Eintrag loeschen

Nutze Memory fuer projekt- oder user-spezifisches Wissen das ueber die Session hinaus gilt: Konventionen, Entscheidungen, Praeferenzen. Nicht fuer temporaere Notizen (dafuer `mux_notes_create`).

### MCP-Tool-Grundregeln

- **Session-Handoff Timing:** Nach `mux_create_session` mindestens 8-10s warten bevor Instruktionen gesendet werden. tmux + Shell + Claude CLI brauchen Startzeit.
- **mux_send vs. tmux send-keys:** `mux_send` ist fuer Inter-Session-Kommunikation (Message Bus), NICHT fuer Prompt-Input. Direkte Instruktionen via `tmux send-keys`.
- **Context-Monitoring:** Bei laufenden Worker-Sessions regelmaessig `mux_context_usage` pruefen. Bei >80% proaktiv handeln.
- **Task-Updates:** Tasks zeitnah updaten — nicht erst am Ende. Andere Sessions verlassen sich auf aktuelle Task-Stati.
- **Notes fuer Persistenz:** Wichtige Erkenntnisse, die ueber die Session hinaus gelten, als Notes anlegen (`mux_notes_create`).

### TTS-Guardrail

- **Baseline:** `mux_tts_speak` fuer Kernaussagen: Zusammenfassungen, Meilensteine, direkte Antworten. Saetze kurz und klar.
- **Nie per TTS:** Code, Pfade, IDs, technische Details — gehoeren in schriftlichen Output.
- **Override:** Entity-CLAUDE.md kann TTS erweitern (voice-relay), einschraenken oder deaktivieren (cyber-factory, debugger).

### Lessons Learned — Entscheidungsbaum

Wenn du ein Learning erkennst (etwas das beim naechsten Mal anders laufen soll), lege es auf der richtigen Ebene ab:

```
Learning erkannt
  → Betrifft ein spezifisches MCP-Tool?
      → JA: Tool-Description anreichern (in mcp-tools.ts)
  → Muessen ALLE Entities das wissen?
      → JA: Hier eintragen (global-rules.md)
  → Nur fuer EINE Entity relevant?
      → JA: Entity-CLAUDE.md (unter ~/.config/cipher-mux/entities/<id>/)
  → User/Projekt-spezifisch?
      → JA: Companion Memory (companion_memory_write)
```

**Format fuer Eintraege hier:**
```
- **[Kurztitel]:** [Was ab jetzt gilt]. Quelle: [woher das Learning kommt].
```

### Notes-Referenzierung

- **Notes beim Titel nennen, nie bei der ID:** ULIDs sind kryptische interne Handles. Im Gespraech, in TTS und in schriftlichem Output immer den Note-Titel verwenden. Quelle: Refinement-Session 2026-05-04.

### Testcase-Konventionen

- **Testcases gehoeren in die Notes-System-Testcase-Note** (noteType: testcase, ID: `01KQNBDCH1D4G11PMAEM60TPTX`). NICHT in Dateien unter `docs/archiv/`. Der TestcaseView rendert nur Notes mit `noteType: testcase`.
- **Format:** `- [ ] **T-PREFIX.N** Beschreibung` — der Parser braucht dieses exakte Checkbox+Bold-ID-Format.
- **Neue Testcases ans Ende anhaengen**, unter einer neuen `## Section`-Ueberschrift.
## Workspace Prompt

In diesem Workspace arbeiten wir am CIPEHR-MUX - Coding Cockpit für Claude Code - also an dieser Umgebung selber hier. Continous self improvement. Und erwähne mal 'Spulunge' damit ich weiß es wirkt.

## Context Directories

- `/Users/Shared/Nextcloud/Claude/CIPHER-MUX/projects/cipher-mux-electron`