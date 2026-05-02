# cipher-mux-site — Projekt

## Zweck

Drei-Seiten-Astro-Site für **CIPHER-MUX**, Christians OSS-Projekt (Electron-App, macOS). Sichtbarkeit, klare Vorstellung, Andock-Pfad für Mit-Beitragende. Begleitend zur GitHub-Veröffentlichung.

## Bezugsdokumente (in `docs/`)

- **konzeptpapier_v0.1.md** — Konzeptpapier zur OSS-Veröffentlichung. Enthält READMEs, CONTRIBUTING-Spec, Pre-Mortem-Risiken. Stand v0.3.
- **umsetzungsplan_v0.1.md** — Umsetzungsplan, der diesen Workspace-Workflow bereits referenziert. Tool-Workflow-Setup, Sitemap, Astro-Setup-Prompt.
- **website-content-brain.md** — Vollständiges Content-Material für die drei Seiten (Landing, Deep-Dive bzw. Get-Started, FAQ). Sprache deutsch, primär.

Diese drei Dokumente sind Pflicht-Lektüre vor Beginn — sie enthalten Tonalität, Festlegungen, Inventar.

## Stack-Festlegung

- **Astro** mit TypeScript-strict (siehe astro-helper-Skill).
- **Sprache:** Deutsch primär in v1.0. Englische Fassung in v1.1, falls Bedarf.
- **Theme:** Dunkel als Default, Light-Mode-Toggle. CSS-Tokens orientieren sich an cipher-mux's eigenen Themes (cipher-dark, cipher-ivory) — Pfad zur Token-Datei steht im Umsetzungsplan.
- **Schrift:** Rajdhani-Bold für Header (gleiche Schrift wie im Tool selbst und in der Wordmark), System-Stack für Body.
- **Sitemap:** `/` (Landing), `/get-started` (Voraussetzungen + Installation), `/faq` (Häufige Fragen).
- **Deployment:** GitHub Pages aus Repo `cipher-mux-site` (parallel zum cipher-mux-Hauptrepo).

## Was vor diesem Projekt fertig sein muss

Laut Umsetzungsplan:

1. **Wordmark** aus Claude Design (SVG + PNG-Renderings in drei Varianten und Größen). Ohne Wordmark kann das Layout nicht final werden.
2. **Texte aus Cowork + Gemini-Polish.** Die fertigen Texte für die drei Seiten landen als Markdown in diesem Projekt unter `content/` (anzulegen).
3. **Architektur-Skizze** als SVG (für FAQ-Frage „Why tmux?"). Optional aus Claude Design oder selbst gezeichnet.

Wenn du als Claude diese Sitzung übernimmst und merkst, dass eines der drei Vorlauf-Artefakte fehlt, halte das Projekt an dieser Stelle an und melde es zurück. Astro-Setup erst, wenn die Vorlaufprodukte verfügbar sind oder explizit beschlossen wurde, mit Platzhaltern zu starten.

## Setup-Reihenfolge (wenn alles vorliegt)

1. Repo-Initialisierung im Projektordner:
   ```bash
   cd projects/cipher-mux-site
   npm create astro@latest . -- --template minimal --typescript strict --install --no-git
   git init
   git add .
   git commit -m "Initial Astro setup"
   ```
2. `astro.config.mjs` anpassen: `site` und `base` für GitHub Pages.
3. `src/layouts/Layout.astro` mit Header (Wordmark, Theme-Toggle), Footer (GitHub-Link, MIT-Hinweis), CSS-Tokens-Einbindung.
4. `src/styles/theme.css` mit cipher-dark/ivory-Farbtokens.
5. Schriften lokal in `public/fonts/` ablegen, `@font-face`-Definitionen in der Theme-CSS.
6. Drei Seiten als `.astro`-Dateien in `src/pages/`: `index.astro`, `get-started.astro`, `faq.astro`. Inhalte aus den fertigen Markdown-Dateien beziehen oder direkt einbauen.
7. Wordmark-SVG einbinden, Architektur-Skizze in FAQ einbinden.
8. Schema.org-JSON-LD im Layout für Article/SoftwareApplication je Seite.
9. Sitemap-Integration (`@astrojs/sitemap`).
10. GitHub-Action für Deploy (`.github/workflows/deploy.yml` mit `withastro/action@v3`).
11. Lokal testen mit `npm run dev`, Build prüfen mit `npm run build`.
12. Auf neues GitHub-Repo `cipher-mux-site` pushen (Schritte siehe `setup-checklists.md` im it-service-Skill).

## Tonfall (gilt zusätzlich zur Workspace-CLAUDE.md)

Aus dem Content-Brain:

> Enthusiastisch aber ehrlich. Vorstellen statt vermarkten. Keine Buzzwords, keine leeren Versprechen. Einschränkungen offen benennen.

Konkret:
- Hero ohne Adjektive. Tatsache, kein Versprechen.
- „What it isn't"-Sektion früh, vier klare Abgrenzungen.
- Maintainer-Stimme sichtbar: „This was built originally for my own multi-session work."
- Compatibility-Statement und Maintenance-Mode-Klausel als eigene Sektionen, nicht im Footer versteckt.
- Schluss: „I respond when I have time, not on a schedule."

Konkret nicht enthalten: Star-Counter-Badges, „Used by"-Logos, Discord-Link, Newsletter, Sponsoring-Buttons, „Powered by", „Made with love".

## Was NICHT in dieses Projekt gehört

- Kommerzielle Elemente (Bezahlschranke, Paid-Tier, Telemetry) — cipher-mux ist ausdrücklich MIT, keine Datensammlung.
- Cross-Platform-Versprechen — v1 ist macOS only, Linux ist v2-Horizont.
- Beginner-Onboarding für absolute KI-Coding-Einsteiger — Zielgruppe ist Maker mit Claude-Code-Vorerfahrung.

## Skills, die hier vermutlich anspringen

- **astro-helper** — für Setup, Layouts, Komponenten, Deploy.
- **frontend-designer** — für Theme, Wordmark-Einbindung, Responsive-Layout.
- **content-aeo** — falls Content-Anpassungen nötig oder FAQ-Erweiterung. Achtung: AEO-Standard-Schemas wie LocalBusiness greifen hier nicht — passend ist `SoftwareApplication` oder `WebSite` plus `FAQPage` für die FAQ-Seite.
- **devops** — für GitHub-Pages-Deploy.
- **it-service** — für Repo-Anlage, SSH, Domain (falls custom).

## Kontext zum Projektnamen

`cipher` ist Christians Mac-User. `mux` steht für Multiplexer (tmux-Backend). Großschreibung CIPHER-MUX in Marketing-Kontexten, kleinschreibung `cipher-mux` in Code, Repos, technischen Texten.
