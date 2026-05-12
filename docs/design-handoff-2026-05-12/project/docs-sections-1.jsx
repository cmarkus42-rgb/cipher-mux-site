// CIPHER-MUX Docs — Sections 1-7 + Hero + Companion intro.
// "Du bist nicht allein"-Intro vor Sektion 1 (Companion-First-Approach).

const DocsHero = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 1.2}px ${sp.sectionPadX}px ${sp.sectionPadY * 0.8}px`,
    borderBottom: `1px solid ${palette.line}`,
    position: 'relative',
  }}>
    <div style={{ maxWidth: 920 }}>
      <div style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 13,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: palette.accent, marginBottom: 16,
      }}>Handbuch · v0.9.9</div>
      <h1 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: 'clamp(48px, 6vw, 76px)',
        margin: '0 0 24px', color: palette.text,
        letterSpacing: '-0.02em', lineHeight: 0.98,
      }}>
        Das Handbuch.<br />
        <span style={{ color: palette.accent }}>Vollständig.</span> Zum Nachschlagen.
      </h1>
      <p style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: 19,
        color: palette.textSecondary, margin: '0 0 24px', maxWidth: 720,
        lineHeight: 1.5, textWrap: 'pretty',
      }}>
        Fünfzehn Kapitel — vom Fenster über Sessions, Voice, Workspaces bis zu allen
        Einstellungen. Geschrieben für Einsteiger oben, dichter als Referenz nach unten.
        Der Companion kennt jedes davon — falls du nicht blättern willst.
      </p>
    </div>
  </section>
);

// ─── Pre-section: Wayne-Anknüpfung — kommt direkt aus dem Install-Flow ──
const DocsCompanionIntro = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 0.6}px ${sp.sectionPadX}px`,
    background: palette.surfaceAlt,
    borderBottom: `1px solid ${palette.line}`,
  }}>
    <div style={{ maxWidth: 920 }}>
      <div style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 12,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: palette.accent, marginBottom: 10,
      }}>Bevor du blätterst</div>
      <h2 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 38,
        margin: '0 0 16px', color: palette.text, letterSpacing: '-0.01em',
        lineHeight: 1.05,
      }}>Du musst das hier nicht lesen.</h2>
      <DocsP palette={palette}>
        Beim ersten Start hat sich <B palette={palette}>Wayne</B> bei dir gemeldet —
        drei Fragen, ein Profil, dann ging's los. Wayne ist nicht weg. Wayne ist der
        <B palette={palette}> Companion</B>, und er ist immer einen Klick entfernt.
      </DocsP>
      <DocsP palette={palette}>
        Statt hier zu suchen, frag ihn. <em>„Wie richte ich einen Workspace ein?"</em>{' '}
        <em>„Was bedeutet die orange Anzeige?"</em>{' '}
        <em>„Zeig mir wie Voice funktioniert."</em>{' '}
        Er kennt jedes Kapitel dieses Handbuchs — und antwortet auf deinem Level, weil
        er dein Profil kennt.
      </DocsP>

      <DocsSubhead palette={palette}>Companion starten</DocsSubhead>
      <DocsList palette={palette} items={[
        <><B palette={palette}>Über das + in einer leeren Zelle</B> → Tab "Presets" → Companion auswählen. Resume holt deine bestehende Wayne-Session zurück mit allem was er über dich weiß.</>,
        <><B palette={palette}>Sprechen statt tippen:</B> Voice-Pill in der Statusleiste, dann frag ihn laut. Antworten kommen vorgelesen — Code-Blöcke werden zusammengefasst, sensible Daten nie laut gesprochen.</>,
      ]} />

      <DocsSubhead palette={palette}>Drei Modi — er erkennt sie am Verb</DocsSubhead>
      <DocsTable palette={palette} rows={[
        { label: 'Tutor',   desc: '„Erklär mir…" → Konzept mit Beispiel oder Analogie. Ein Konzept pro Antwort.' },
        { label: 'Berater', desc: '„Was wäre besser…" → Optionen mit Trade-offs und Empfehlung. Du entscheidest.' },
        { label: 'Helfer',  desc: '„Mach mir…" → Aktion direkt ausführen. Z.B. Workspace anlegen, Persona ändern.' },
      ]} />

      <Callout kind="rule" title="Wann das Handbuch und wann der Companion" palette={palette}>
        <B palette={palette}>Companion:</B> wenn du eine Frage hast, schnell etwas suchst,
        oder unsicher bist welche Option du willst.{' '}
        <B palette={palette}>Handbuch:</B> wenn du systematisch durchblättern willst,
        einen Überblick brauchst, oder etwas nachschlagen willst das du beim nächsten Mal
        wieder findest.
      </Callout>
    </div>
  </section>
);

// ─── 01 · Das Fenster verstehen ──────────────────────────────────────────
const DocsSec1 = ({ palette, sp }) => (
  <DocsSection id="window" num="01" title="Das Fenster verstehen" palette={palette} sp={sp}
    lead="Wenn cipher-mux startet, siehst du zwei Bereiche: das Grid in der Mitte, die Statusleiste am unteren Rand. Mehr ist's erstmal nicht."
  >
    <DocsSubhead palette={palette}>Das Grid (Hauptbereich)</DocsSubhead>
    <DocsP palette={palette}>
      Der große zentrale Bereich. Hier leben deine Sessions — jede in einer eigenen Zelle.
      Stell dir einen Schreibtisch mit mehreren Bildschirmen vor: Jeder Bildschirm zeigt
      eine eigene Claude-Unterhaltung.
    </DocsP>
    <DocsP palette={palette}>
      Eine leere Zelle zeigt ein <Mono palette={palette}>+</Mono> in der Mitte. Klick darauf
      öffnet das <B palette={palette}>Launcher-Popup</B> — dein Einstiegspunkt für alles.
    </DocsP>

    <DocsSubhead palette={palette}>Launcher-Popup · drei Tabs</DocsSubhead>
    <DocsTable palette={palette} headers={['Tab', 'Zweck']} rows={[
      { label: 'Presets', desc: 'Spezialisierte Rollen direkt starten — alle verfügbaren Presets als Karten (Companion, Refinement, Cyber Factory, …). Laufende Single-Instance-Presets sind mit einem Punkt markiert. Resume-Button für bestehende Sessions.' },
      { label: 'Path',    desc: 'Session mit eigenem Projekt-Pfad starten. Ordner-Picker, zuletzt genutzte Pfade, plus Optionen: Shell Only · Skip Permissions · Resume · Fork.' },
      { label: 'Notes',   desc: 'Bestehende Notiz in dieser Zelle öffnen oder neue Notiz anlegen.' },
    ]} />

    <Callout kind="tip" palette={palette}>
      Per Tastatur: <Mono palette={palette}>Cmd+N</Mono> öffnet das Launcher-Popup in der
      nächsten leeren Zelle.
    </Callout>

    <DocsSubhead palette={palette}>Die Statusleiste (unterer Rand)</DocsSubhead>
    <DocsP palette={palette}>Deine Kommandozentrale. Von links nach rechts:</DocsP>
    <DocsTable palette={palette} headers={['Element', 'Was es tut']} rows={[
      { label: 'Voice-Pill',    desc: 'Sprachsteuerung ein/aus. LED zeigt Status: aus / grün (bereit) / rot (nimmt auf) / gelb (verarbeitet).' },
      { label: 'spalten +/-',   desc: 'Grid-Spalten hinzufügen oder entfernen. Maximum 7.' },
      { label: 'zeilen +/-',    desc: 'Grid-Zeilen hinzufügen oder entfernen. Maximum 3.' },
      { label: 'workspaces',    desc: 'Workspace- und Persona-Editor öffnen.' },
      { label: 'cyber factory', desc: 'Cyber Factory starten/stoppen. Punkt-Indikator wenn aktiv.' },
      { label: 'bugreport',     desc: 'Bugreport-Dialog öffnen.' },
      { label: 'sidebar',       desc: 'Seitenleiste ein/ausblenden. LED leuchtet wenn Inhalt wartet.' },
      { label: 'Theme-Name',    desc: 'Klick wechselt zum nächsten visuellen Theme.' },
      { label: 'info',          desc: 'Einstellungen, Shortcuts, Feature-Liste.' },
      { label: 'Version',       desc: 'App-Version (rechts, nicht klickbar).' },
    ]} />
  </DocsSection>
);

// ─── 02 · Sessions ─────────────────────────────────────────────────────
const DocsSec2 = ({ palette, sp }) => (
  <DocsSection id="sessions" num="02" title="Sessions — deine KI-Arbeitsplätze" palette={palette} sp={sp}
    lead="Eine Session ist ein separater Telefonanruf mit Claude. Eigenes Gedächtnis (Context Window), eigene Dateien, eigene Aufgabe. Sessions sind voneinander unabhängig."
  >
    <DocsSubhead palette={palette}>Session öffnen — drei Wege</DocsSubhead>
    <DocsTable palette={palette} headers={['Weg', 'So gehts']} rows={[
      { label: 'Über Preset',    desc: 'Klick auf + → Tab "Presets" → Preset wählen. Session startet mit vordefiniertem Verhalten, Persona und Projekt-Kontext.' },
      { label: 'Über Pfad',      desc: 'Klick auf + → Tab "Path" → Ordner wählen oder eingeben → Start. Nackte Claude-Session im gewählten Verzeichnis.' },
      { label: 'Über Workspace', desc: 'Workspace anwenden — das Grid wird automatisch befüllt. Ein Klick, alles steht.' },
    ]} />

    <DocsSubhead palette={palette}>Zellen-Steuerung</DocsSubhead>
    <DocsTable palette={palette} columns={3} headers={['Button', 'Aktion', 'Beschreibung']} rows={[
      { key: '↥', label: 'Expand',   desc: 'Zelle auf volle Grid-Höhe expandieren (nur bei 2+ Zeilen).' },
      { key: '↧', label: 'Collapse', desc: 'Zurück zur normalen Höhe.' },
      { key: '⇄', label: 'Switch',   desc: 'Projekt wechseln ohne Session zu schließen.' },
      { key: '$', label: 'Shell',    desc: 'Shell öffnen im Projektverzeichnis. Kein Claude, normales Terminal.' },
      { key: '✕', label: 'Close',    desc: 'Session beenden und Zelle freigeben.' },
    ]} />

    <DocsSubhead palette={palette}>Fokus, Context, Crash-Sicherheit</DocsSubhead>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Fokus:</B> Klick auf die Kopfleiste setzt Fokus. Tastatureingaben gehen an die fokussierte Zelle. Drag and Drop tauscht Positionen.</>,
      <><B palette={palette}>Context-Anzeige:</B> Grün = viel Platz. Orange ab 80% = wird eng. Rot ab 90% = fast voll, Session muss bald vergessen.</>,
      <><B palette={palette}>Crash-Sicherheit:</B> Sessions überleben Abstürze dank tmux. Beim Neustart erscheint ein Recovery-Dialog — übernehmen oder beenden.</>,
    ]} />
  </DocsSection>
);

// ─── 03 · Grid ─────────────────────────────────────────────────────────
const DocsSec3 = ({ palette, sp }) => (
  <DocsSection id="grid" num="03" title="Das Grid anpassen" palette={palette} sp={sp}
    lead="Ein bis 21 Zellen. So viel oder so wenig wie du brauchst."
  >
    <DocsList palette={palette} items={[
      <><Mono palette={palette}>spalten +/-</Mono> und <Mono palette={palette}>zeilen +/-</Mono> in der Statusleiste</>,
      <>Minimum 1×1 (eine Zelle), Maximum 7×3 (21 Zellen)</>,
      <>Das Fenster passt seine Größe automatisch an</>,
      <>Bei 2+ Zeilen: <Mono palette={palette}>↥</Mono> streckt eine Zelle über die volle Höhe — gut zum Lesen langer Ausgaben</>,
    ]} />

    <DocsSubhead palette={palette}>Typische Layouts</DocsSubhead>
    <DocsTable palette={palette} headers={['Layout', 'Wofür']} rows={[
      { label: '2×1', desc: 'Zwei Sessions nebeneinander — Standard für den Alltag.' },
      { label: '3×1', desc: 'Drei Spalten — z.B. Frontend / Backend / Tests.' },
      { label: '2×2', desc: 'Vier Zellen — Cyber Factory + drei Worker.' },
    ]} />
  </DocsSection>
);

// ─── 04 · Voice ────────────────────────────────────────────────────────
const DocsSec4 = ({ palette, sp }) => (
  <DocsSection id="voice" num="04" title="Sprachsteuerung" palette={palette} sp={sp}
    lead="Lokale Spracherkennung — kein Netzwerk, keine Cloud. Voice-Pill in der Statusleiste oder Ctrl+Shift+Space."
  >
    <DocsSubhead palette={palette}>LED-Status</DocsSubhead>
    <LedRow palette={palette} states={[
      { color: palette.textDim, label: 'aus',         desc: 'Voice ist deaktiviert' },
      { color: '#A3BE8C',       label: 'grün',        desc: 'bereit, hört nicht zu' },
      { color: '#BF616A',       label: 'rot',         desc: 'nimmt gerade auf' },
      { color: '#EBCB8B',       label: 'gelb',        desc: 'verarbeitet — bitte warten' },
    ]} />

    <Callout kind="rule" title="Wichtig" palette={palette}>
      Gesprochener Text wird eingefügt aber <em>nicht automatisch gesendet</em>. Du kannst
      lesen, korrigieren, dann per <Mono palette={palette}>"abschicken"</Mono> oder Enter senden.
    </Callout>

    <DocsSubhead palette={palette}>Sprachbefehle · Text</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Sage', 'Bewirkt']} rows={[
      { label: '"abschicken" / "absenden" / "senden"', desc: 'Enter drücken (Text abschicken).' },
      { label: '"neue zeile"',                          desc: 'Zeilenumbruch einfügen.' },
      { label: 'alles andere',                          desc: 'Wird als Text transkribiert und eingefügt.' },
    ]} />

    <DocsSubhead palette={palette}>Sprachbefehle · Scrollen</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Sage', 'Bewirkt']} rows={[
      { label: '"hoch" / "rauf"',          desc: 'Eine Seite hoch scrollen.' },
      { label: '"runter" / "weiter"',      desc: 'Eine Seite runter scrollen.' },
      { label: '"ganz hoch" / "anfang"',   desc: 'Ganz nach oben.' },
      { label: '"ganz runter" / "ende"',   desc: 'Ganz nach unten.' },
      { label: '"zum marker" / "lesestart"', desc: 'Zum Anfang der letzten Antwort springen.' },
    ]} />

    <DocsSubhead palette={palette}>Sprachbefehle · Grid-Navigation</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Sage', 'Bewirkt']} rows={[
      { label: '"grid hoch"',   desc: 'Fokus auf die Zelle darüber.' },
      { label: '"grid runter"', desc: 'Fokus auf die Zelle darunter.' },
      { label: '"grid links"',  desc: 'Fokus auf die Zelle links.' },
      { label: '"grid rechts"', desc: 'Fokus auf die Zelle rechts.' },
    ]} />
    <DocsP palette={palette}>
      Varianten wie <Mono palette={palette}>grit</Mono>, <Mono palette={palette}>zelle</Mono>,
      <Mono palette={palette}>focus</Mono> werden ebenfalls erkannt.
    </DocsP>

    <DocsSubhead palette={palette}>Voice Pin · Bluetooth-Fernbedienung</DocsSubhead>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Voice Pin:</B> Spracheingabe an eine bestimmte Session pinnen — die Stimme geht immer dorthin, egal welche Zelle gerade fokussiert ist.</>,
      <><B palette={palette}>Bluetooth-Clicker</B> (z.B. AB Shutter). Auto-Modus: Knopfdruck = sofort senden. Manual-Modus: Knopfdruck = Aufnahme starten/stoppen, explizit senden.</>,
    ]} />
  </DocsSection>
);

// ─── 05 · Sidebar ──────────────────────────────────────────────────────
const DocsSec5 = ({ palette, sp }) => (
  <DocsSection id="sidebar" num="05" title="Die Seitenleiste" palette={palette} sp={sp}
    lead="Klick auf 'sidebar' in der Statusleiste. Mehrere Tabs, verschiedene Funktionen."
  >
    <DocsTable palette={palette} headers={['Tab', 'Inhalt']} rows={[
      { label: 'Messages',          desc: 'Nachrichten zwischen Sessions — sichtbar bei Multi-Session-Arbeit (Cyber Factory etc.).' },
      { label: 'Background',        desc: 'Sessions die laufen aber nicht im Grid sichtbar sind. Karten mit Live-Vorschau (5s-Refresh). Klick holt die Session ins Grid.' },
      { label: 'Notes',             desc: 'Notiz-Browser. Suchfeld, Tag-Chips zum Filtern, Doppelklick öffnet eine Notiz im Grid als Editor-Zelle.' },
      { label: 'Companion Memory',  desc: 'Gespeicherte Erinnerungen der Companion-Session. Durchsuchbar und einsehbar.' },
    ]} />
    <Callout kind="tip" palette={palette}>
      Der <Mono palette={palette}>⧉</Mono>-Button oben löst die Sidebar als eigenes Fenster —
      ideal für Multi-Monitor-Setups.
    </Callout>
  </DocsSection>
);

// ─── 06 · Notizen ──────────────────────────────────────────────────────
const DocsSec6 = ({ palette, sp }) => (
  <DocsSection id="notes" num="06" title="Notizen" palette={palette} sp={sp}
    lead="Markdown-Editor (CodeMirror) in Grid-Zellen. Überschriften, fett, kursiv, Links, Code-Blöcke, Zitate."
  >
    <DocsSubhead palette={palette}>Erstellen, Speichern, Auto-Tags</DocsSubhead>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Neue Notiz:</B> Über Launcher-Popup → Tab "Notes" → "Neue Notiz", oder <Mono palette={palette}>+</Mono> in der Tab-Leiste eines offenen Editors</>,
      <><B palette={palette}>Speichern + Auto-Tagging:</B> <Mono palette={palette}>Cmd+S</Mono> — speichert und schlägt automatisch Tags vor (lokales KI-Modell, max 5 Tags pro Notiz)</>,
      <><B palette={palette}>Auto-Save:</B> Nach 2 Sekunden Inaktivität (ohne Tagging)</>,
      <><B palette={palette}>Löschen:</B> Mülleimer-Icon in der Tab-Leiste, mit Bestätigung</>,
      <><B palette={palette}>Handoff-Notizen:</B> spezielle Notizen für Wissenstransfer zwischen Sessions — wenn eine Session ihre Arbeit beendet, übergibt sie den Kontext an die nächste</>,
    ]} />
    <Callout kind="rule" title="Memory vs. Notes" palette={palette}>
      Was der User sehen, teilen oder in Obsidian lesen können soll, ist eine
      <B palette={palette}> Note</B> (Markdown-Datei). Was zur internen Run-Verwaltung gehört
      (Worker-Status, Risk-Reviews etc.), ist <B palette={palette}>Memory</B> (nicht sichtbar).
    </Callout>
  </DocsSection>
);

// ─── 07 · Projekte und Projekt-Struktur ────────────────────────────────
const DocsSec7 = ({ palette, sp }) => (
  <DocsSection id="projects" num="07" title="Projekte und Projekt-Struktur" palette={palette} sp={sp}
    lead="Zentrales Verzeichnis als Quelle der Wahrheit für alle Projekte. Standardisierte Ordner-Struktur, drei Adoptions-Modi für bestehende Projekte."
  >
    <DocsSubhead palette={palette}>CIPHER-MUX-Hub · Standard-Struktur</DocsSubhead>
    <div style={{
      background: palette.terminalBg, color: palette.terminalText,
      fontFamily: "'Fira Code', monospace", fontSize: 13, lineHeight: 1.7,
      padding: '18px 22px', margin: '8px 0 18px',
      border: `1px solid ${palette.line}`,
      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      whiteSpace: 'pre',
    }}>
{`projekt-name/
  .claude/              `}<span style={{color: palette.textDim}}>{'Claude Code Config'}</span>{`
  .cyber-factory/       `}<span style={{color: palette.textDim}}>{'Run-Konfiguration'}</span>{`
  docs/specs/           `}<span style={{color: palette.textDim}}>{'Detail-Specs mit REQ-IDs'}</span>{`
  docs/decisions/       `}<span style={{color: palette.textDim}}>{'ADRs (Architektur-Entscheidungen)'}</span>{`
  docs/research/        `}<span style={{color: palette.textDim}}>{'Recherche aus Ideation Partner'}</span>{`
  docs/audit/           `}<span style={{color: palette.textDim}}>{'Audit-Berichte'}</span>{`
  src/                  `}<span style={{color: palette.textDim}}>{'Quellcode'}</span>{`
  tests/                `}<span style={{color: palette.textDim}}>{'Tests'}</span>{`
  .project-meta.json    `}<span style={{color: palette.textDim}}>{'Phase, Workspace, Tags, Verwendungszweck'}</span>
    </div>

    <DocsSubhead palette={palette}>Bestehende Projekte einbinden · drei Modi</DocsSubhead>
    <DocsTable palette={palette} headers={['Modus', 'Was passiert']} rows={[
      { label: 'Voll-Adoption',   desc: 'Komplette Pack-Konventionen werden angewandt — alle Ordner, ADRs, Specs, .project-meta.json.' },
      { label: 'Pack-Light',      desc: 'Nur einzelne Komponenten übernehmen — z.B. nur docs/specs oder nur .claude/.' },
      { label: 'Bestandsaufnahme', desc: 'Nur Inventur — Pack rührt nichts an, dokumentiert nur was vorhanden ist.' },
    ]} />

    <DocsSubhead palette={palette}>Neues Projekt starten</DocsSubhead>
    <PipelineRow palette={palette} steps={[
      { label: 'Ideation Partner' },
      { label: 'Refinement' },
      { label: 'Cyber Factory' },
    ]} />
    <DocsP palette={palette}>
      Lebenszyklus-Einstieg: Ideation Partner sammelt die Idee, Refinement schärft die
      Anforderungen, die Cyber Factory übernimmt das Scaffolding als Teil der Architekt-Phase.
    </DocsP>
  </DocsSection>
);

Object.assign(window, {
  DocsHero, DocsCompanionIntro,
  DocsSec1, DocsSec2, DocsSec3, DocsSec4, DocsSec5, DocsSec6, DocsSec7,
});
