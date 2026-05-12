// CIPHER-MUX Docs v2 — Schnelleinstieg-Content (Workspace-first Flow).
// Nutzt features-shared.jsx Atoms (CMPageHeader, etc.) + docs-shared.jsx (DocsSection, Callout, etc.).

const STARTSecOrientation = ({ palette, sp }) => (
  <DocsSection id="orientation" num="01" title="Orientierung" palette={palette} sp={sp}
    lead="Wenn du cipher-mux öffnest, siehst du das Grid — der zentrale Arbeitsbereich. Leere Zellen zeigen ein +, die Statusleiste liegt am unteren Rand. Das ist alles."
  >
    <DocsList palette={palette} items={[
      <>Installation und Ersteinrichtung beschreibt die <a href="#" style={{color: palette.accent, borderBottom: `1px dotted ${palette.accent}`}}>Download-Seite</a> im Detail.</>,
      <>Beim allerersten Start belegt der <B palette={palette}>Companion</B> die erste Zelle. Gib <Mono palette={palette}>/startup</Mono> ein — er fragt nach deinem Hintergrund und erstellt ein Profil. Danach passen alle Entities ihren Detailgrad an dein Level an.</>,
      <>Der Companion kann dir auch alles erklären was auf diesen Seiten steht. Statt hier zu suchen, frag ihn.</>,
    ]} />
    <ScreenshotSlot palette={palette}
      caption="Erster Start — Companion bereit"
      placeholder="Screenshot: Leeres Grid mit Companion in der ersten Zelle" />
  </DocsSection>
);

const STARTSecWorkspace = ({ palette, sp }) => (
  <DocsSection id="workspace" num="02" title="Workspace anlegen" palette={palette} sp={sp}
    lead="Ein Workspace bündelt alles für ein Projekt: Grid-Layout, Preset-Zuweisungen, Projektverzeichnis, Workspace-Prompt. Wenn du einen Workspace lädst, wissen alle Sessions sofort, woran gearbeitet wird."
  >
    <DocsSubhead palette={palette}>Schritt für Schritt</DocsSubhead>
    <DocsList palette={palette} marker="▸" items={[
      <>Klick auf <B palette={palette}>workspaces</B> in der Statusleiste — der Workspace-Editor öffnet sich.</>,
      <>Neuen Workspace anlegen und benennen (z.B. „Mein Projekt").</>,
      <>Einen <B palette={palette}>Workspace-Prompt</B> einfügen — ein paar Sätze über dein Projekt reichen: was es ist, welche Sprache/Framework, was gerade ansteht.</>,
      <>Falls du schon einen Projektordner hast: als <B palette={palette}>Context Directory</B> hinzufügen. Falls nicht, später nachtragen sobald er existiert.</>,
      <>Grid-Größe festlegen (z.B. 2×1 für den Anfang) und optional Presets zuweisen.</>,
      <>Speichern. Als Default markieren wenn du willst.</>,
    ]} />
    <Callout kind="rule" title="Workspace = Kontext" palette={palette}>
      Workspace wechseln = anderer Kontext. Alle Sessions, Notes und Tags werden automatisch auf den
      aktiven Workspace gefiltert. Das ist der zentrale Organisationsmechanismus in cipher-mux.
    </Callout>
    <ScreenshotSlot palette={palette}
      caption="Workspace-Editor — Projekt einrichten"
      placeholder="Screenshot: Workspace-Editor mit Workspace-Prompt und Context Directory" />
  </DocsSection>
);

const STARTSecSessions = ({ palette, sp }) => (
  <DocsSection id="sessions" num="03" title="Sessions starten" palette={palette} sp={sp}
    lead="Mit einem eingerichteten Workspace kannst du Sessions starten. Zwei Wege:"
  >
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
      <CMBox palette={palette} padding={22} elevated>
        <CMTag palette={palette} color={palette.accent}>// via preset</CMTag>
        <DocsList palette={palette} items={[
          <>Klick auf <Mono palette={palette}>+</Mono> in einer leeren Zelle → Tab <B palette={palette}>Presets</B></>,
          <>Preset wählen (Companion, Refinement, Cyber Factory, …)</>,
          <>Die Session startet mit dem Workspace-Kontext + den Preset-Anweisungen</>,
        ]} />
      </CMBox>
      <CMBox palette={palette} padding={22} elevated>
        <CMTag palette={palette} color={palette.accent}>// via pfad</CMTag>
        <DocsList palette={palette} items={[
          <>Klick auf <Mono palette={palette}>+</Mono> → Tab <B palette={palette}>Path</B></>,
          <>Projektordner wählen — nackte Claude-Session ohne Preset</>,
        ]} />
      </CMBox>
    </div>
    <DocsSubhead palette={palette}>Optionen</DocsSubhead>
    <DocsTable palette={palette} headers={['Option', 'Beschreibung']} rows={[
      { label: 'Shell Only', desc: 'Reines Terminal ohne Claude. Für git, npm, schnelle Kommandos.' },
      { label: 'Skip Permissions', desc: 'Claude führt Aktionen ohne Rückfrage aus. Auch global aktivierbar unter Einstellungen → General.' },
      { label: 'Resume', desc: 'Frühere Session fortsetzen. Context bleibt erhalten.' },
    ]} />
    <ScreenshotSlot palette={palette}
      caption="Session starten — Preset oder Pfad"
      placeholder="Screenshot: Launcher-Popup mit Preset-Tab" />
  </DocsSection>
);

const STARTSecOverview = ({ palette, sp }) => (
  <DocsSection id="overview" num="04" title="Die App im Überblick" palette={palette} sp={sp}
    lead="Bevor du tiefer einsteigst — wo findest du was? Ein schneller Rundgang durch die Oberfläche."
  >
    <DocsTable palette={palette} columns={3} headers={['Bereich', 'Was', 'Detail']} rows={[
      { key: 'Grid', label: 'Der zentrale Bereich', desc: 'Sessions in eigenen Zellen. Drag & Drop tauscht Positionen. Spalten/Zeilen über die Statusleiste anpassen (1–7 × 1–3).' },
      { key: 'Session-Header', label: 'Kopfleiste pro Zelle', desc: 'Status-Punkt, Context-Balken und Buttons: Focus Mode, Fork, Screenshot, Pop-Out, Shell, Background, Close.' },
      { key: 'Statusleiste', label: 'Unten — Kommandozentrale', desc: 'Voice-Steuerung, Grid-Größe, Workspaces, Sidebar-Toggle, Theme, Einstellungen.' },
      { key: 'Sidebar', label: 'Rechte Seitenleiste', desc: 'Fünf Sektionen: Notes, Background Sessions, Orphaned Sessions, Companion Memory, Messages.' },
      { key: 'Workspace-Editor', label: 'Eigenes Fenster', desc: 'Grid-Layouts, Personas, Preset-Konfiguration, Tags.' },
      { key: 'Einstellungen', label: 'Sechs Tabs', desc: 'General (Skip Permissions, Keep Working), Sprache, Themes (13 + eigene), Shortcuts, A11y, About.' },
    ]} />
    <Callout kind="tip" palette={palette}>
      Alle Details zu jedem Bereich findest du in <a href="#" style={{color: palette.accent, borderBottom: `1px dotted ${palette.accent}`}}>Nutzung der App</a>.
    </Callout>
  </DocsSection>
);

const STARTSecVoice = ({ palette, sp }) => (
  <DocsSection id="voice" num="05" title="Voice ausprobieren" palette={palette} sp={sp}
    lead="Sprachsteuerung läuft komplett lokal über Whisper. Kein Netzwerk, keine Cloud."
  >
    <DocsList palette={palette} marker="▸" items={[
      <>Voice-Pill in der Statusleiste anklicken — LED wechselt auf grün (bereit).</>,
      <>STT-Button drücken — LED wechselt auf rot (nimmt auf).</>,
      <>Sprechen. Am Ende <B palette={palette}>„abschicken"</B> sagen — der Text wird in die fokussierte Zelle eingefügt.</>,
      <>Der Text wird eingefügt, aber <B palette={palette}>nicht automatisch gesendet</B>. Du kannst ihn prüfen und bearbeiten, bevor du Enter drückst.</>,
    ]} />
    <Callout kind="tip" palette={palette}>
      Alles weitere zur Sprachsteuerung — Voice Commands, COM-Modus, BT-Clicker, TTS — findest du in der
      {' '}<a href="#" style={{color: palette.accent, borderBottom: `1px dotted ${palette.accent}`}}>Nutzung der App</a>.
    </Callout>
  </DocsSection>
);

const STARTSecNext = ({ palette, sp }) => (
  <DocsSection id="next" num="06" title="Weiter" palette={palette} sp={sp}
    lead="Du hast das Wichtigste gesehen. Zwei Wege weiterzulesen:"
  >
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
      {[
        { title: 'Prozess & Konzepte', body: 'Wie die Entities zusammenarbeiten — und warum cipher-mux mehr ist als ein Terminal-Grid.', href: 'konzepte' },
        { title: 'Nutzung der App',    body: 'Jede Funktion, jeder Button, jedes Menü. Die vollständige Referenz.', href: 'nutzung' },
      ].map(c => (
        <CMBox key={c.title} palette={palette} padding={26} elevated accent>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
            margin: '0 0 10px', color: palette.text, letterSpacing: -0.2 }}>{c.title}</h3>
          <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontSize: 15,
            lineHeight: 1.55, color: palette.textSecondary }}>{c.body}</p>
          <div style={{ marginTop: 16, fontFamily: "'Fira Code', monospace", fontSize: 11,
            color: palette.accent, letterSpacing: 1.4, textTransform: 'uppercase' }}>→ Tab wechseln</div>
        </CMBox>
      ))}
    </div>
  </DocsSection>
);

// Helper used across docs pages
const ScreenshotSlot = ({ palette, caption, placeholder }) => (
  <div style={{
    margin: '20px 0 14px', padding: '40px 28px',
    border: `1px dashed ${palette.border}`, background: palette.bgSunken,
    fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textDim,
    textAlign: 'center', letterSpacing: 0.5,
  }}>
    <div style={{ marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1.5 }}>📷 {caption}</div>
    <div style={{ fontStyle: 'italic', opacity: 0.7 }}>{placeholder}</div>
  </div>
);

const DocsStartPage = ({ palette, sp }) => (
  <>
    <DocsHero palette={palette} sp={sp}
      kicker="Schnelleinstieg · v0.9.101"
      title="Vom Start"
      titleAccent="zum ersten Projekt."
      body="Installation steht? Dann los. Hier richtest du deinen ersten Workspace ein und lernst die wichtigsten Bereiche der App kennen."
    />
    <STARTSecOrientation palette={palette} sp={sp} />
    <STARTSecWorkspace palette={palette} sp={sp} />
    <STARTSecSessions palette={palette} sp={sp} />
    <STARTSecOverview palette={palette} sp={sp} />
    <STARTSecVoice palette={palette} sp={sp} />
    <STARTSecNext palette={palette} sp={sp} />
  </>
);

// Reusable Hero variant for all docs pages
const DocsHero = ({ palette, sp, kicker, title, titleAccent, body }) => (
  <section style={{
    padding: `${sp.sectionPadY * 1.0}px ${sp.sectionPadX}px ${sp.sectionPadY * 0.6}px`,
    borderBottom: `1px solid ${palette.border}`,
  }}>
    <div style={{ maxWidth: 920 }}>
      <div style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 12,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: palette.accent, marginBottom: 14,
      }}>{kicker}</div>
      <h1 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: 'clamp(40px, 5.4vw, 64px)',
        margin: '0 0 18px', color: palette.text,
        letterSpacing: '-0.02em', lineHeight: 1.0,
      }}>
        {title} <span style={{ color: palette.accent }}>{titleAccent}</span>
      </h1>
      <p style={{
        fontFamily: "'Fira Code', monospace", fontSize: 14,
        color: palette.textSecondary, margin: 0, maxWidth: 680,
        lineHeight: 1.7,
      }}>{body}</p>
    </div>
  </section>
);

Object.assign(window, {
  DocsStartPage, DocsHero, ScreenshotSlot,
  STARTSecOrientation, STARTSecWorkspace, STARTSecSessions,
  STARTSecOverview, STARTSecVoice, STARTSecNext,
});
