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
