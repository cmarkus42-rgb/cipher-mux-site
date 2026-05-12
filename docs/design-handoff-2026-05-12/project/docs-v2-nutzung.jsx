// CIPHER-MUX Docs v2 — Nutzung der App (Referenz, 10 Sektionen, Light-Content).
// Volle Detail-Tabellen kommen on-demand; aktuell Strukturgerüst + Kernpunkte.

const NUTZSecGrid = ({ palette, sp }) => (
  <DocsSection id="grid" num="01" title="Das Grid" palette={palette} sp={sp}
    lead="Der zentrale Bereich der App. Sessions leben in Zellen. Leere Zellen zeigen ein + und öffnen per Klick das Launcher-Popup."
  >
    <DocsSubhead palette={palette}>Drag & Drop</DocsSubhead>
    <DocsList palette={palette} items={[
      <><B palette={palette}>Header ziehen:</B> Session-Header auf einen anderen Header ziehen tauscht die Positionen der beiden Sessions.</>,
      <><B palette={palette}>Sidebar-Session aufs Grid:</B> Eine Background-Session aus der Sidebar auf eine Zelle ziehen holt sie ins Grid.</>,
      <><B palette={palette}>Notes aufs Grid:</B> Eine Note aus der Sidebar auf eine <em>leere</em> Zelle ziehen öffnet sie im Editor. Auf eine <em>belegte</em> Zelle ziehen sendet den Note-Inhalt als Text in die Session.</>,
      <><B palette={palette}>Dateien aus dem Finder:</B> Eine Datei auf eine Zelle ziehen fügt den Pfad als shell-escaped String ein — ohne Enter. Du kannst den Pfad prüfen, bevor du ihn absendest.</>,
    ]} />
    <DocsSubhead palette={palette}>Grid-Größe</DocsSubhead>
    <DocsList palette={palette} items={[
      <><Mono palette={palette}>spalten +/-</Mono> und <Mono palette={palette}>zeilen +/-</Mono> in der Statusleiste</>,
      <>Minimum 1×1 (eine Zelle), Maximum 7×3 (21 Zellen)</>,
      <>Tastatur: <Mono palette={palette}>Cmd+→/←</Mono> für Spalten, <Mono palette={palette}>Cmd+↓/↑</Mono> für Zeilen</>,
    ]} />
    <ScreenshotSlot palette={palette}
      caption="Grid — belegte und leere Zellen"
      placeholder="Screenshot: Grid mit drei belegten Sessions und einer leeren Zelle" />
  </DocsSection>
);

const NUTZSecHeader = ({ palette, sp }) => (
  <DocsSection id="header" num="02" title="Session-Zell-Header" palette={palette} sp={sp}
    lead="Jede belegte Zelle hat einen Header mit Statusinformationen links und Aktions-Buttons rechts."
  >
    <Callout kind="tip" title="Context-Farben" palette={palette}>
      Neon-Punkt + Context-Leiste wechseln Farbe je nach Context-Verbrauch:{' '}
      <B palette={palette}>grün</B> (&lt;26%) · <B palette={palette}>gelb</B> (26–40%) ·{' '}
      <B palette={palette}>orange</B> (41–55%) · <B palette={palette}>rot</B> (&gt;56%).
    </Callout>
    <DocsSubhead palette={palette}>Buttons (rechts)</DocsSubhead>
    <DocsTable palette={palette} columns={3} headers={['Icon', 'Aktion', 'Beschreibung']} rows={[
      { key: 'Scan',       label: 'Focus Mode',     desc: 'Session auf 2×2 expandieren. Cmd+Shift+F.' },
      { key: '⌃⌄',         label: 'Expand/Collapse', desc: 'Zelle auf volle Grid-Höhe strecken bzw. zurück.' },
      { key: 'Fork',       label: 'Fork Session',    desc: 'Session forken — neue Session mit gleichem Kontext.' },
      { key: 'Camera',     label: 'Screenshot',      desc: 'Snapshot der Zelle als Bild speichern.' },
      { key: '⇆',          label: 'Switch Project',  desc: 'Projekt wechseln ohne Session zu schließen.' },
      { key: '↥',          label: 'Background',      desc: 'Session in den Hintergrund senden (Sidebar).' },
      { key: '$',          label: 'Shell',           desc: 'Shell öffnen im Projektverzeichnis.' },
      { key: '⤤',          label: 'Pop-Out',         desc: 'Session als eigenes Fenster lösen.' },
      { key: '×',          label: 'Close',           desc: 'Session beenden (Graceful Shutdown).' },
    ]} />
  </DocsSection>
);

const NUTZSecFocus = ({ palette, sp }) => (
  <DocsSection id="focus" num="03" title="Focus Mode & Pop-Out" palette={palette} sp={sp}
    lead="Zwei Wege, eine Session prominent darzustellen — temporär oder permanent."
  >
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
      <CMBox palette={palette} padding={22} elevated>
        <CMTag palette={palette} color={palette.accent}>// focus mode</CMTag>
        <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 18,
          margin: '10px 0 8px', color: palette.text }}>Vergrößern im Grid</h4>
        <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontSize: 14,
          lineHeight: 1.55, color: palette.textSecondary }}>
          Streckt eine Session auf 2×2-Fläche im Grid. Cmd+Shift+F. Andere Zellen
          bleiben sichtbar, aber kompakter.
        </p>
      </CMBox>
      <CMBox palette={palette} padding={22} elevated>
        <CMTag palette={palette} color={palette.accent}>// pop-out</CMTag>
        <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 18,
          margin: '10px 0 8px', color: palette.text }}>Eigenes Fenster</h4>
        <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontSize: 14,
          lineHeight: 1.55, color: palette.textSecondary }}>
          Löst die Session aus dem Grid in ein separates Fenster. Ideal für
          Multi-Monitor-Setups oder lange Output-Streams.
        </p>
      </CMBox>
    </div>
  </DocsSection>
);

const NUTZSecSidebar = ({ palette, sp }) => (
  <DocsSection id="sidebar" num="04" title="Die Sidebar" palette={palette} sp={sp}
    lead={'Klick auf „sidebar" in der Statusleiste. Fünf Sektionen mit verschiedenen Funktionen.'}
  >
    <DocsTable palette={palette} headers={['Sektion', 'Inhalt']} rows={[
      { label: 'Notes',              desc: 'Notiz-Browser. Suche, Tag-Chips zum Filtern, Doppelklick öffnet im Grid als Editor-Zelle.' },
      { label: 'Background',         desc: 'Sessions die laufen, aber nicht im Grid sichtbar sind. Karten mit Live-Vorschau.' },
      { label: 'Orphaned Sessions',  desc: 'Verwaiste tmux-Sessions die übernommen oder beendet werden können.' },
      { label: 'Companion Memory',   desc: 'Gespeicherte Erinnerungen — gefiltert nach Scope (user, workspace, session).' },
      { label: 'Messages',           desc: 'Nachrichten zwischen Sessions. Sichtbar bei Multi-Session-Arbeit (Cyber Factory etc.).' },
    ]} />
    <Callout kind="tip" palette={palette}>
      Der <Mono palette={palette}>⧉</Mono>-Button oben löst die Sidebar als eigenes Fenster —
      ideal für Multi-Monitor-Setups.
    </Callout>
  </DocsSection>
);

const NUTZSecVoice = ({ palette, sp }) => (
  <DocsSection id="voice" num="05" title="Sprachsteuerung" palette={palette} sp={sp}
    lead="Lokale Spracherkennung über Whisper. Kein Netzwerk, keine Cloud. Voice-Pill in der Statusleiste oder Ctrl+Shift+Space."
  >
    <DocsSubhead palette={palette}>LED-Status</DocsSubhead>
    <LedRow palette={palette} states={[
      { color: palette.textDim, label: 'aus',         desc: 'Voice deaktiviert' },
      { color: '#A3BE8C',       label: 'grün',        desc: 'bereit, hört nicht zu' },
      { color: '#BF616A',       label: 'rot',         desc: 'nimmt gerade auf' },
      { color: '#EBCB8B',       label: 'gelb',        desc: 'verarbeitet — bitte warten' },
    ]} />
    <Callout kind="rule" title="Nicht auto-sent" palette={palette}>
      Gesprochener Text wird eingefügt aber <em>nicht automatisch gesendet</em>. Du kannst
      lesen, korrigieren, dann per <Mono palette={palette}>„abschicken"</Mono> oder Enter senden.
    </Callout>
    <DocsSubhead palette={palette}>Voice Commands</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Sage', 'Bewirkt']} rows={[
      { label: '„abschicken" / „senden"',  desc: 'Enter drücken — Text abschicken.' },
      { label: '„neue zeile"',             desc: 'Zeilenumbruch einfügen.' },
      { label: '„grid hoch/runter/links/rechts"', desc: 'Fokus zwischen Zellen wechseln.' },
      { label: '„hoch" / „runter"',        desc: 'Scrollen in der fokussierten Session.' },
    ]} />
    <DocsSubhead palette={palette}>COM-Modus + BT-Clicker</DocsSubhead>
    <DocsP palette={palette}>
      <B palette={palette}>COM:</B> kontinuierliche Spracheingabe ohne STT-Button.{' '}
      <B palette={palette}>BT-Clicker:</B> Bluetooth-Fernbedienung — Auto-Modus sendet sofort,
      Manual-Modus startet/stoppt nur die Aufnahme.
    </DocsP>
  </DocsSection>
);

const NUTZSecNotes = ({ palette, sp }) => (
  <DocsSection id="notes" num="06" title="Notes" palette={palette} sp={sp}
    lead="Markdown-Editor (CodeMirror) in Grid-Zellen. Überschriften, fett, kursiv, Links, Code-Blöcke, Zitate."
  >
    <DocsList palette={palette} items={[
      <><B palette={palette}>Neue Notiz:</B> Launcher → Tab „Notes" → „Neue Notiz", oder <Mono palette={palette}>+</Mono> in der Tab-Leiste eines offenen Editors</>,
      <><B palette={palette}>Speichern + Auto-Tagging:</B> <Mono palette={palette}>Cmd+S</Mono> — speichert und schlägt Tags vor (lokales KI-Modell, max 5 Tags)</>,
      <><B palette={palette}>Auto-Save:</B> Nach 2 Sekunden Inaktivität (ohne Tagging)</>,
      <><B palette={palette}>Handoff-Notizen:</B> spezielle Notizen für Wissenstransfer zwischen Sessions</>,
    ]} />
  </DocsSection>
);

const NUTZSecProjects = ({ palette, sp }) => (
  <DocsSection id="projects" num="07" title="Projekte und Hub" palette={palette} sp={sp}
    lead="Ein Hub-Verzeichnis als Quelle der Wahrheit für alle Projekte. Standardisierte Ordner-Struktur, drei Adoptions-Modi für bestehende Projekte."
  >
    <DocsP palette={palette}>
      Bestehende Projekte können auf drei Wegen eingebunden werden:
    </DocsP>
    <DocsTable palette={palette} headers={['Modus', 'Was passiert']} rows={[
      { label: 'Voll-Adoption',    desc: 'Komplette Pack-Konventionen werden angewandt — alle Ordner, ADRs, Specs, .project-meta.json.' },
      { label: 'Pack-Light',       desc: 'Nur einzelne Komponenten übernehmen — z.B. nur docs/specs oder nur .claude/.' },
      { label: 'Bestandsaufnahme', desc: 'Nur Inventur — Pack rührt nichts an, dokumentiert nur was vorhanden ist.' },
    ]} />
  </DocsSection>
);

const NUTZSecSettings = ({ palette, sp }) => (
  <DocsSection id="settings" num="08" title="Einstellungen" palette={palette} sp={sp}
    lead={'Erreichbar über „info" in der Statusleiste. Sechs Tabs: General · Sprache · Themes · Shortcuts · A11y · About.'}
  >
    <DocsTable palette={palette} headers={['Tab', 'Inhalt']} rows={[
      { label: 'General',   desc: 'Skip Permissions, Keep Working, Bugreport-Button, Voice-Settings (TTS, Submit-Modus, BT-Clicker).' },
      { label: 'Sprache',   desc: 'Deutsch / English — ändert die gesamte App-Oberfläche.' },
      { label: 'Themes',    desc: '13 eingebaute Themes als Liste mit Vorschau, Custom Themes per Editor anlegbar (Edit · Preview · Save · Export).' },
      { label: 'Shortcuts', desc: 'Alle Tastenkürzel gruppiert nach Kategorie (Navigation, Layout, Actions, Terminal).' },
      { label: 'A11y',      desc: 'Reduce Motion, größere Klick-Targets, Screen-Reader-Modus, Tastatur-Navigation-Hilfen.' },
      { label: 'About',     desc: 'Feature-Übersicht und Versionsinfos.' },
    ]} />
  </DocsSection>
);

const NUTZSecBugreport = ({ palette, sp }) => (
  <DocsSection id="bugreport" num="09" title="Bugreport-Dialog" palette={palette} sp={sp}
    lead="Der /bugreport-Skill ist überall verfügbar — aus jeder Session heraus."
  >
    <DocsTable palette={palette} columns={3} headers={['#', 'Modus', 'Wie es funktioniert']} rows={[
      { key: '1', label: 'Manuell',         desc: 'Als Text beschreiben.' },
      { key: '2', label: 'Voice-Interview', desc: 'Mündlich beschreiben, KI reichert an.' },
      { key: '3', label: 'Screenshot',       desc: 'Screenshot aufnehmen und annotieren.' },
    ]} />
    <DocsP palette={palette}>
      Output landet als Markdown-Note mit passenden Tags. Öffnen über die Statusleiste oder{' '}
      <Mono palette={palette}>Cmd+B</Mono>.
    </DocsP>
  </DocsSection>
);

const NUTZSecShortcuts = ({ palette, sp }) => (
  <DocsSection id="shortcuts" num="10" title="Tastenkürzel" palette={palette} sp={sp}
    lead="Vollständige Referenz aller Shortcuts."
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
      { label: 'Cmd+Shift+F',        desc: 'Focus Mode für aktive Session.' },
    ]} />
    <DocsSubhead palette={palette}>Actions</DocsSubhead>
    <DocsTable palette={palette} compact headers={['Kürzel', 'Aktion']} rows={[
      { label: 'Cmd+N',              desc: 'Neue Session — öffnet Launcher in der nächsten leeren Zelle.' },
      { label: 'Cmd+B',              desc: 'Bugreport-Dialog öffnen.' },
      { label: 'Cmd+S',              desc: 'Notiz speichern + Auto-Tagging.' },
      { label: 'Cmd+Enter',          desc: 'Senden in Dialogen.' },
      { label: 'Ctrl+Shift+Space',   desc: 'Sprachsteuerung ein/aus.' },
    ]} />
  </DocsSection>
);

const DocsNutzungPage = ({ palette, sp }) => (
  <>
    <DocsHero palette={palette} sp={sp}
      kicker="Nutzung der App · v0.9.101"
      title="Jede Funktion."
      titleAccent="Nachschlagen."
      body="Die vollständige Referenz zu jedem Bereich der App — Grid, Sessions, Sidebar, Voice, Notes, Einstellungen. Zum Nachlesen, nicht zum Durchlesen."
    />
    <NUTZSecGrid palette={palette} sp={sp} />
    <NUTZSecHeader palette={palette} sp={sp} />
    <NUTZSecFocus palette={palette} sp={sp} />
    <NUTZSecSidebar palette={palette} sp={sp} />
    <NUTZSecVoice palette={palette} sp={sp} />
    <NUTZSecNotes palette={palette} sp={sp} />
    <NUTZSecProjects palette={palette} sp={sp} />
    <NUTZSecSettings palette={palette} sp={sp} />
    <NUTZSecBugreport palette={palette} sp={sp} />
    <NUTZSecShortcuts palette={palette} sp={sp} />
  </>
);

Object.assign(window, {
  DocsNutzungPage,
  NUTZSecGrid, NUTZSecHeader, NUTZSecFocus, NUTZSecSidebar, NUTZSecVoice,
  NUTZSecNotes, NUTZSecProjects, NUTZSecSettings, NUTZSecBugreport, NUTZSecShortcuts,
});
