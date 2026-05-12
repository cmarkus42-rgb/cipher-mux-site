// CIPHER-MUX Docs — Sections 8-14 (Lifecycle, Companion, Personas, Workspace-Editor, Settings, Bugreports, Dialoge).
// Themes-Kapitel ist in Settings/Themes-Tab integriert (entfernt als eigenes Kapitel).

// ─── 08 · Software-Lebenszyklus ────────────────────────────────────────
const DocsSec8 = ({ palette, sp }) => (
  <DocsSection id="lifecycle" num="08" title="Der Software-Lebenszyklus — Presets" palette={palette} sp={sp}
    lead="Sechs spezialisierte Presets entlang des Lebenszyklus. Jedes Preset deckt eine Phase ab und übergibt sauber an das nächste."
  >
    <PipelineRow palette={palette} steps={[
      { label: 'Ideation Partner' },
      { label: 'Refinement' },
      { label: 'Cyber Factory' },
      { label: 'Testing' },
      { label: 'Debugger' },
      { label: 'Audit' },
    ]} />

    <DocsSubhead palette={palette}>Ideation Partner</DocsSubhead>
    <DocsP palette={palette}>
      Nimmt rohe Ideen, recherchiert (autonom, mit Sub-Agents), synthetisiert und produziert
      ein strukturiertes Anforderungs-Paket.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Seed → Recherche → Fokussierung → Robustheits-Gate (Pre-Mortem) → Anforderungs-Paket.
    </DocsP>

    <DocsSubhead palette={palette}>Refinement</DocsSubhead>
    <DocsP palette={palette}>
      Prüft Anforderungen systematisch auf Lücken, schreibt Detail-Specs mit REQ-IDs und
      Akzeptanz-Kriterien.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Pflichtfeld-Check → Lücken-Audit → Validierung → Anforderungen schärfen → Detail-Spec mit REQ-IDs → Übergabe an Cyber Factory.
    </DocsP>

    <DocsSubhead palette={palette}>Cyber Factory</DocsSubhead>
    <DocsP palette={palette}>
      Architekt und Multi-Session-Orchestrator in einem. Bekommt die Detail-Spec und
      koordiniert den Build mit eigenständigen Worker-Sessions.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Spec lesen → Architekt-Phase (Subsystem-Zerlegung, ADRs, Scaffolding) → Welle-Plan → Worker-Sessions starten (max 5 parallel, eigene Git-Worktrees) → Monitoring (5–7 min Zyklen) → Eskalation (5 Level) → Risk-Review → Welle-Cutover.
    </DocsP>

    <DocsSubhead palette={palette}>Testing Assistant</DocsSubhead>
    <DocsP palette={palette}>
      Prüft implementierungs-fertige Wellen systematisch und adversarial. Fixt nichts —
      dokumentiert Findings.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Test-Run → Test-Qualitäts-Audit → Adversarial Probing → Sicherheits-Audit (OWASP-Top-10) → Findings-Report. Übergabe: bei Findings an Debugger, bei "alles grün" an Audit.
    </DocsP>

    <DocsSubhead palette={palette}>Debugger</DocsSubhead>
    <DocsP palette={palette}>
      Bugfixing-Spezialist. Bekommt Findings vom Testing Assistant oder direkte Bug-Reports.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Findings lesen → Rückfragen → Fix-Plan → Worker-Session für Fix → Risk-Review → Verifikation (Test muss rot gewesen sein, nach Fix grün).
    </DocsP>
    <Callout kind="warn" palette={palette}>
      Maximal <B palette={palette}>2 Retries</B> pro Fix. Danach User-Eskalation.
    </Callout>

    <DocsSubhead palette={palette}>Audit</DocsSubhead>
    <DocsP palette={palette}>
      Beurteilt ob eine Welle Release-Niveau hat. Fixt nichts, implementiert nichts.
    </DocsP>
    <DocsP palette={palette}>
      <B palette={palette}>Phasen:</B> Welle-Diff lesen → Code Review → Sicherheits-Audit → ADR-Konsistenz → Cognitive-Debt-Bewertung → Release-Empfehlung: <Mono palette={palette}>Release</Mono> · <Mono palette={palette}>Release nach Fix</Mono> · <Mono palette={palette}>Blockiert</Mono>.
    </DocsP>
  </DocsSection>
);

// ─── 09 · Companion ────────────────────────────────────────────────────
const DocsSec9 = ({ palette, sp }) => (
  <DocsSection id="companion" num="09" title="Companion — Wayne im Detail" palette={palette} sp={sp}
    lead="Wayne ist die Default-Persona für den Companion. Hier nochmal alles im Detail — was er kann, wie er antwortet, was er sich merkt."
  >
    <DocsTable palette={palette} headers={['Modus', 'Erkennt an', 'Liefert']}
      columns={3} rows={[
      { key: 'Tutor',   label: '"Erklär mir…"',     desc: 'Konzept-Erklärung mit Worked Example oder Analogie. Ein Konzept pro Antwort.' },
      { key: 'Berater', label: '"Was wäre besser…"', desc: 'Optionen mit Trade-offs und Empfehlung. Du entscheidest.' },
      { key: 'Helfer',  label: '"Mach mir…"',        desc: 'Aktion direkt ausführen. Geringste Reibung.' },
    ]} />

    <DocsSubhead palette={palette}>Was der Companion kann</DocsSubhead>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Einrichtungs-Guide:</B> Führt durch User-Profil, ersten Workspace, Personas</>,
      <><B palette={palette}>Konzept-Erklärer:</B> "Was ist die Cyber Factory?" → Erklärung mit Analogie</>,
      <><B palette={palette}>Live-Steuerung:</B> "Starte mir eine Cyber-Factory-Session für Projekt X" → nutzt MCP-Tools</>,
      <><B palette={palette}>Bug-Reports + Feature-Requests:</B> Erkennt implizite Trigger ("da ist ein Bug"), führt durch Mini-Interview</>,
      <><B palette={palette}>Gedächtnis:</B> Merkt sich Präferenzen, Projekt-Kontext, Lernhindernisse über Sessions hinweg</>,
    ]} />
  </DocsSection>
);

// ─── 10 · Personas ────────────────────────────────────────────────────
const DocsSec10 = ({ palette, sp }) => (
  <DocsSection id="personas" num="10" title="Personas — Kommunikationsstil" palette={palette} sp={sp}
    lead="Personas definieren wie cipher-mux kommuniziert — Tonalität und Stil, nicht Funktion. Sechs sind eingebaut. Eigene legst du im Workspace-Editor an."
  >
    <DocsTable palette={palette} headers={['Persona', 'Charakter']} rows={[
      { label: 'Cipher',            desc: 'Positiver Cyberpunk, pragmatisch loyal, staubtrocken, Wächter-Mentalität.' },
      { label: 'Relay',             desc: 'Sachlich, präzise, wissenschaftsjournalistisch — der Default.' },
      { label: 'Wayne Szalinski',   desc: 'Pragmatischer Enthusiast, "Das kriegen wir hin", Nerd-Humor.' },
      { label: 'Der Kyniker',       desc: 'Maximal komprimiert, telegrafisch, keine Floskeln.' },
      { label: 'Sokratischer Tutor', desc: 'Gegenfragen statt Antworten, diskursiv, zur Reflexion anleitend.' },
      { label: 'Der Glitch',        desc: 'Unkonventionelle Metaphern, bricht Denkmuster, kreative Reibung.' },
    ]} />

    <DocsSubhead palette={palette}>Persona-Hierarchie</DocsSubhead>
    <Ladder palette={palette} rungs={[
      { label: 'Globale Persona',         priority: 'höchste prio', desc: 'Wenn gesetzt — überschreibt alles. Wird im Workspace-Editor → Personas-Tab als "Global" markiert.' },
      { label: 'Preset-spezifisch',        priority: 'mittel',       desc: 'Pro Preset im Workspace-Editor wählbar. Jedes Preset hat eine empfohlene Default-Persona.' },
      { label: 'Fallback: Relay',          priority: 'niedrigste',   desc: 'Wenn nichts anderes gesetzt ist — sachlicher Default-Stil.' },
    ]} />
  </DocsSection>
);

// ─── 11 · Der Workspace-Editor ────────────────────────────────────────
const DocsSec11 = ({ palette, sp }) => (
  <DocsSection id="workspaces" num="11" title="Der Workspace-Editor" palette={palette} sp={sp}
    lead="Eigenes Fenster, erreichbar über 'workspaces' in der Statusleiste. Zwei Haupt-Tabs: Workspaces und Personas."
  >
    {/* Tab-style mock */}
    <div style={{
      display: 'flex', gap: 0,
      borderBottom: `1px solid ${palette.line}`,
      margin: '8px 0 18px',
    }}>
      {[
        { label: 'Workspaces', active: true },
        { label: 'Personas (Companion-Tab)', active: false },
      ].map(tab => (
        <div key={tab.label} style={{
          padding: '10px 18px',
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: 14,
          color: tab.active ? palette.text : palette.textDim,
          borderBottom: tab.active ? `2px solid ${palette.accent}` : '2px solid transparent',
          marginBottom: -1,
          letterSpacing: '0.04em',
        }}>{tab.label}</div>
      ))}
    </div>

    <DocsSubhead palette={palette} mt={8}>Tab: Workspaces</DocsSubhead>
    <DocsP palette={palette}>
      Der visuelle Grid-Editor. Du siehst eine Miniatur des Grids und kannst pro Zelle
      konfigurieren:
    </DocsP>
    <DocsTable palette={palette} headers={['Konfig pro Zelle', 'Was du setzt']} rows={[
      { label: 'Preset-Zuweisung', desc: 'Welches Preset in dieser Zelle (Dropdown).' },
      { label: 'Projekt-Pfad',     desc: 'Welches Projekt aus dem Hub.' },
      { label: 'Persona-Auswahl',  desc: 'Dropdown mit allen verfügbaren Personas (erstellt im Companion-Tab).' },
      { label: 'Custom Prompt',    desc: 'Optionaler Prompt der den Preset-Default ergänzt oder überschreibt.' },
    ]} />
    <DocsList palette={palette} items={[
      <><B palette={palette}>Merge-Handles:</B> Vertikale Zell-Zusammenlegung per Drag — eine Zelle über mehrere Zeilen strecken.</>,
      <><B palette={palette}>Grid-Dimensionen:</B> Spalten und Zeilen direkt im Editor anpassen.</>,
      <><B palette={palette}>Workspace anwenden:</B> Ein Klick baut das Grid um, startet Sessions, weist Presets und Personas zu.</>,
      <><B palette={palette}>Mehrere Workspaces:</B> verschiedene Layouts speichern und schnell wechseln (z.B. "Solo-Arbeit 2×1", "Factory-Run 3×2", "Review 2×1").</>,
    ]} />

    <Callout kind="rule" title="Prompt-Hierarchie" palette={palette}>
      Wenn ein Prompt aufgelöst wird, gilt:
      Zell-Prompt &gt; Workspace-Preset-Override &gt; Preset-Default-Prompt.
    </Callout>

    <DocsSubhead palette={palette}>Tab: Personas (Companion-Tab)</DocsSubhead>
    <DocsP palette={palette}>
      Hier werden Personas erstellt und verwaltet. Das ist der einzige Ort zum Anlegen und
      Bearbeiten — kein Inline-Edit in anderen Dialogen.
    </DocsP>
    <DocsTable palette={palette} headers={['Aktion', 'Was passiert']} rows={[
      { label: 'Persona erstellen', desc: 'Name, Farbe, Prompt-Text.' },
      { label: 'Persona editieren', desc: 'Name, Farbe und Prompt-Text ändern.' },
      { label: 'Persona löschen',   desc: 'Mit Warnung wenn in Presets verwendet.' },
      { label: 'Global aktivieren', desc: 'Toggle pro Persona — wenn an, gilt diese Persona für alle Presets.' },
    ]} />
    <DocsP palette={palette}>
      Die sechs eingebauten Personas (Cipher, Relay, Wayne, Kyniker, Sokrates, Glitch) sind
      vorinstalliert und editierbar.
    </DocsP>
  </DocsSection>
);

// ─── 12 · Einstellungen (Info-Dialog) — 5 Tabs ──────────────────────────
const DocsSec12 = ({ palette, sp }) => (
  <DocsSection id="settings" num="12" title="Einstellungen (Info-Dialog)" palette={palette} sp={sp}
    lead="Erreichbar über 'info' in der Statusleiste. Fünf Tabs: General · Themes · Models · Shortcuts · About."
  >
    {/* Tab-strip mock */}
    <div style={{
      display: 'flex', gap: 0,
      borderBottom: `1px solid ${palette.line}`,
      margin: '8px 0 18px', flexWrap: 'wrap',
    }}>
      {['General', 'Themes', 'Models', 'Shortcuts', 'About'].map((tab, i) => (
        <div key={tab} style={{
          padding: '10px 18px',
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: 14,
          color: i === 0 ? palette.text : palette.textDim,
          borderBottom: i === 0 ? `2px solid ${palette.accent}` : '2px solid transparent',
          marginBottom: -1,
          letterSpacing: '0.04em',
        }}>{tab}</div>
      ))}
    </div>

    <DocsSubhead palette={palette} mt={8}>Tab: General (Allgemein)</DocsSubhead>
    <DocsTable palette={palette} headers={['Bereich', 'Optionen']} rows={[
      { label: 'Sprache',         desc: 'Deutsch / English — ändert die gesamte App-Oberfläche.' },
      { label: 'Agent',           desc: 'Skip Permissions — Claude darf Aktionen ohne Rückfrage ausführen. Achtung: deaktiviert die Sicherheits-Bestätigung.' },
      { label: 'Bugreport',       desc: 'Button zum direkten Öffnen des Bugreport-Dialogs.' },
      { label: 'Sprachsteuerung', desc: 'TTS ein/aus · TTS-Stimme (Piper lokal oder macOS System) · Voice Commands · Voice Submit Mode (Auto / Manuell für BT-Clicker) · BT Shutter Remote.' },
      { label: 'Keep Working',    desc: 'Beim Beenden alle Sessions speichern. Beim nächsten Start mit Resume fortsetzen.' },
    ]} />

    <DocsSubhead palette={palette}>Tab: Themes</DocsSubhead>
    <DocsP palette={palette}>
      <B palette={palette}>Theme-Auswahl:</B> Alle 10 eingebauten Themes als Liste mit
      Farb-Vorschau-Streifen. Klick wählt aus. Custom Themes erscheinen ebenfalls in der Liste,
      löschbar per X-Button.
    </DocsP>
    <DocsTable palette={palette} headers={['Theme', 'Charakter']} rows={[
      { label: 'Cipher Ivory',   desc: 'Sauber, hell — Standard Light Mode.' },
      { label: 'Cipher Dark',    desc: 'Warm, dunkel — Standard Dark Mode.' },
      { label: 'Blueprint',      desc: 'Ingenieur-Entwurf, Cyan + Indigo.' },
      { label: 'Warm Paper',     desc: 'Minimal, Sepia-Töne.' },
      { label: 'Gruvbox Dark',   desc: 'Retro-Coder-Klassiker.' },
      { label: 'Nord',           desc: 'Kühles skandinavisches Design.' },
      { label: 'Synthwave',      desc: '80er-Jahre Magenta + Violet.' },
      { label: 'Matrix',         desc: 'Phosphor-Grün auf Schwarz.' },
      { label: 'Brutalist',      desc: 'Schwarz/Weiß + Signalrot.' },
      { label: 'High Contrast',  desc: 'Barrierefreies WCAG-AAA-Design.' },
    ]} />
    <DocsSubhead palette={palette} mt={20}>Theme-Editor (aufklappbar)</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Aktion', 'Was passiert']} rows={[
      { label: 'Edit',     desc: 'Farbwerte pro Token-Gruppe: Hintergründe, Text, Borders, Akzente, Context-Farben, Highlights.' },
      { label: 'Preview',  desc: 'Live-Vorschau ohne Speichern.' },
      { label: 'Revert',   desc: 'Vorschau rückgängig machen.' },
      { label: 'Save',     desc: 'In aktives Custom Theme speichern.' },
      { label: 'Save As',  desc: 'Als neues Custom Theme mit eigenem Namen speichern.' },
      { label: 'Reset',    desc: 'Alle Anpassungen zurück auf Theme-Defaults.' },
      { label: 'Export',   desc: 'Custom Tokens als JSON in die Zwischenablage kopieren.' },
    ]} />

    <DocsSubhead palette={palette}>Tab: Models (LLM-Anbieter)</DocsSubhead>
    <DocsP palette={palette}>
      Konfiguration des lokalen KI-Modells (für Auto-Tagging, Bugreport-Anreicherung etc.).
    </DocsP>
    <DocsTable palette={palette} headers={['Feld', 'Default · Zweck']} rows={[
      { label: 'Ollama Host',        desc: '127.0.0.1 — IP-Adresse des Ollama-Servers.' },
      { label: 'Ollama Port',        desc: '11434 — Standard-Port.' },
      { label: 'Ollama Model',       desc: 'gemma4:26b — Modellname. Nach erfolgreicher Verbindung als Dropdown mit allen verfügbaren Modellen.' },
      { label: 'Test Connection',    desc: 'Verbindung prüfen. Bei Erfolg werden verfügbare Modelle geladen.' },
      { label: 'Save',               desc: 'Konfiguration speichern.' },
    ]} />

    <DocsSubhead palette={palette}>Tab: Shortcuts</DocsSubhead>
    <DocsP palette={palette}>
      Alle Tastenkürzel gruppiert nach Kategorie (Navigation, Layout, Actions, Terminal).
      Vollständige Tabelle siehe nächstes Kapitel.
    </DocsP>

    <DocsSubhead palette={palette}>Tab: About</DocsSubhead>
    <DocsP palette={palette}>
      Feature-Übersicht mit Erklärungen zu: Was ist cipher-mux, Grid-System, Orchestrierung,
      Message Bus, MCP-Server, Context-Monitoring, Bugreports, Themes.
    </DocsP>
  </DocsSection>
);

// ─── 13 · Shortcuts (Reference) ────────────────────────────────────────
const DocsSec13 = ({ palette, sp }) => (
  <DocsSection id="shortcuts" num="13" title="Tastenkürzel" palette={palette} sp={sp}
    lead="Vollständige Referenz aller Shortcuts. Gruppiert nach Kategorie."
  >
    <DocsSubhead palette={palette}>Navigation</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Kürzel', 'Aktion']} rows={[
      { label: 'Cmd+1 … Cmd+5',     desc: 'Session in Zelle 1–5 fokussieren.' },
      { label: 'Escape',             desc: 'Aktiven Dialog schließen.' },
    ]} />

    <DocsSubhead palette={palette}>Layout</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Kürzel', 'Aktion']} rows={[
      { label: 'Cmd+→ / Cmd+←',     desc: 'Grid-Spalten hinzufügen / entfernen.' },
      { label: 'Cmd+↓ / Cmd+↑',     desc: 'Grid-Zeilen hinzufügen / entfernen.' },
    ]} />

    <DocsSubhead palette={palette}>Actions</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Kürzel', 'Aktion']} rows={[
      { label: 'Cmd+N',              desc: 'Neue Session — öffnet Launcher-Popup in der nächsten leeren Zelle.' },
      { label: 'Cmd+B',              desc: 'Bugreport-Dialog öffnen.' },
      { label: 'Cmd+S',              desc: 'Notiz speichern + Auto-Tagging.' },
      { label: 'Cmd+Enter',          desc: 'Senden in Dialogen (z.B. Input Requests in der Sidebar).' },
      { label: 'Ctrl+Shift+Space',   desc: 'Sprachsteuerung ein/aus.' },
    ]} />

    <DocsSubhead palette={palette}>Terminal</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Kürzel', 'Aktion']} rows={[
      { label: 'Cmd+C',              desc: 'Kopieren / laufenden Prozess abbrechen.' },
      { label: 'Cmd+V',              desc: 'Einfügen.' },
    ]} />
  </DocsSection>
);

// ─── 14 · Bugreports und Feature-Requests ──────────────────────────────
const DocsSec14 = ({ palette, sp }) => (
  <DocsSection id="bugreports" num="14" title="Bugreports und Feature-Requests" palette={palette} sp={sp}
    lead="Der /bugreport-Skill ist überall verfügbar — aus jeder Session heraus."
  >
    <DocsP palette={palette}>Nimmt auf:</DocsP>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Bug-Reports</B> — Was ist kaputt, wo, wie reproduzierbar?</>,
      <><B palette={palette}>Feature-Requests</B> — Was wäre nützlich?</>,
      <><B palette={palette}>Lessons Learned</B> — Was haben wir gelernt?</>,
      <><B palette={palette}>Handover-Notizen</B> — Wissenstransfer zwischen Sessions.</>,
    ]} />

    <DocsSubhead palette={palette}>Drei Modi im Bugreport-Dialog</DocsSubhead>
    <DocsTable palette={palette} columns={3} headers={['#', 'Modus', 'Wie es funktioniert']} rows={[
      { key: '1', label: 'Manuell',         desc: 'Als Text beschreiben.' },
      { key: '2', label: 'Voice-Interview', desc: 'Mündlich beschreiben, KI reichert an.' },
      { key: '3', label: 'Screenshot',       desc: 'Screenshot aufnehmen und annotieren.' },
    ]} />
    <DocsP palette={palette}>
      Output landet als Markdown-Note mit passenden Tags. Öffnen über die Statusleiste oder
      <Mono palette={palette}>Cmd+B</Mono>.
    </DocsP>
  </DocsSection>
);

// ─── 15 · Dialoge im Überblick ─────────────────────────────────────────
const DocsSec15 = ({ palette, sp }) => (
  <DocsSection id="dialogs" num="15" title="Dialoge im Überblick" palette={palette} sp={sp}
    lead="Alle Dialoge auf einen Blick — wo sie öffnen, was sie tun."
  >
    <DocsTable palette={palette} columns={3} headers={['Dialog', 'Öffnen', 'Zweck']} rows={[
      { key: 'Launcher-Popup',    label: '+ in leerer Zelle / Cmd+N', desc: 'Preset starten, Pfad öffnen, Notiz öffnen.' },
      { key: 'Bugreport-Dialog',  label: 'Statusleiste / Cmd+B',       desc: 'Bug melden — manuell, per Voice oder Screenshot.' },
      { key: 'Recovery-Dialog',   label: 'Automatisch bei Start',      desc: 'Verwaiste Sessions übernehmen oder beenden.' },
      { key: 'Workspace-Popup',   label: 'Quick-Select über Workspace-Button', desc: 'Workspace schnell anwenden.' },
      { key: 'Workspace-Editor',  label: '"workspaces" in Statusleiste', desc: 'Grid-Layouts und Personas verwalten (2 Tabs).' },
      { key: 'Info-Dialog',       label: '"info" in Statusleiste',     desc: 'Einstellungen, Shortcuts, Features (5 Tabs).' },
    ]} />
  </DocsSection>
);

// ─── Bottom strip ────────────────────────────────────────────────────────
const DocsBottom = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 0.7}px ${sp.sectionPadX}px`,
    background: palette.surfaceAlt,
    borderBottom: `1px solid ${palette.line}`,
  }}>
    <div style={{ maxWidth: 920 }}>
      <h2 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 36,
        margin: '0 0 14px', color: palette.text, letterSpacing: '-0.01em',
        lineHeight: 1.05,
      }}>
        Fragen offen? <span style={{ color: palette.accent }}>Frag Wayne.</span>
      </h2>
      <p style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: 17,
        color: palette.textSecondary, margin: '0 0 22px', maxWidth: 640,
        lineHeight: 1.5,
      }}>
        Das Handbuch ist lang. Wayne ist im Cockpit. Er kennt jeden Abschnitt davon —
        und antwortet schneller als du scrollst.
      </p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            background: palette.accent, color: palette.bg,
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 14,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '12px 20px', display: 'inline-block',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          }}>↓ App herunterladen</span>
        </a>
        <a href="#" style={{
          fontFamily: "'Fira Code', monospace", fontSize: 13,
          color: palette.textSecondary, textDecoration: 'none',
          alignSelf: 'center',
          borderBottom: `1px dotted ${palette.textDim}`, paddingBottom: 2,
        }}>github / cipher-mux ↗</a>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  DocsSec8, DocsSec9, DocsSec10, DocsSec11, DocsSec12,
  DocsSec13, DocsSec14, DocsSec15, DocsBottom,
});
