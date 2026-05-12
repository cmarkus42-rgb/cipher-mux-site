// CIPHER-MUX Docs v2 — Prozess & Konzepte.

const KZSecIdea = ({ palette, sp }) => (
  <DocsSection id="idea" num="01" title="Die Idee" palette={palette} sp={sp}
    lead="Wenn du eine einzige Claude-Session bittest, ein Feature zu planen, zu coden, zu testen und zu reviewen, passiert Folgendes: der Kontext füllt sich, frühere Anweisungen werden komprimiert, die Qualität sinkt. Jeder, der Claude Code für größere Aufgaben benutzt hat, kennt das."
  >
    <DocsP palette={palette}>
      Die Hypothese hinter cipher-mux: Was wäre, wenn jede Phase der Entwicklung ihre eigene Session
      bekäme? Eigener Kontext, eigene Anweisungen, eigener Fokus. Mit sauberen Übergaben zwischen
      den Phasen.
    </DocsP>
    <DocsP palette={palette}>
      Das ist kein bewiesenes Verfahren. cipher-mux ist der Versuch einer einzelnen Person, diese
      Hypothese zu testen. Für manche Aufgaben funktioniert es überraschend gut. Für andere fällt
      es flach.
    </DocsP>
    <DocsP palette={palette}>
      Token-Kosten sind real: Jede Session verbraucht API-Tokens. Parallele Sessions multiplizieren
      das. Das Context Window ist endlich. Wenn es voll ist, vergisst Claude — und es gibt kein Undo.
    </DocsP>
    <Callout kind="rule" title="Wann lohnt sich der Aufwand?" palette={palette}>
      Ob das den Aufwand wert ist, hängt vom Projekt ab. Für eine einzelne Datei-Änderung ist eine
      nackte Claude-Session besser. Für ein Feature mit zehn Dateien, Tests und Spec lohnt sich
      die Struktur.
    </Callout>
  </DocsSection>
);

const KZSecLifecycle = ({ palette, sp }) => {
  const phases = [
    { label: 'Ideation Partner', color: palette.presets.ideation,
      in: 'Rohe Idee, Stichwortliste',
      proc: 'Recherchiert autonom mit Sub-Agents, synthetisiert, Pre-Mortem',
      out: 'Anforderungspaket' },
    { label: 'Refinement', color: palette.presets.refinement,
      in: 'Anforderungspaket aus Ideation',
      proc: 'Pflichtfeld-Check, Lücken-Audit, Validierung gegen Architektur',
      out: 'Detail-Spec mit REQ-IDs' },
    { label: 'Cyber Factory', color: palette.presets.cyberFactory,
      in: 'Detail-Spec aus Refinement',
      proc: 'Architektur → Wellenplan → bis zu 5 parallele Worker (Worktrees) → Monitoring 5–7 min',
      out: 'Getestete Implementation pro Welle' },
    { label: 'Testing Assistant', color: palette.presets.testing,
      in: 'Implementation aus Cyber Factory',
      proc: 'Systematische Tests, adversariales Probing, OWASP-Top-10. Fixt nichts',
      out: 'Findings Report → Workshop' },
    { label: 'Workshop', color: '#5E81AC', hub: true,
      in: 'Findings, Bug-Reports, Feature-Requests',
      proc: 'Triage und Verteilung: Bugs → Debugger, Umbauten → Cyber Factory, Ideen → Ideation. Triviales selbst.',
      out: 'Zugewiesene Tasks an die richtige Entity' },
    { label: 'Debugger', color: palette.presets.debugger,
      in: 'Bugs vom Workshop',
      proc: 'Root-Cause, Fix-Plan, Worker-Session, Verifikation (rot → grün). Max 2 Retries',
      out: 'Bereinigte Implementation' },
    { label: 'Audit', color: palette.presets.audit,
      in: 'Implementation nach Testing/Debugging',
      proc: 'Code Review, Security, ADR-Konsistenz, Cognitive-Debt. Implementiert nichts',
      out: 'Release · Release nach Fix · Blockiert' },
  ];
  return (
    <DocsSection id="lifecycle" num="02" title="Der Lebenszyklus" palette={palette} sp={sp}
      lead="Sechs Phasen plus Workshop als Triage-Schaltstelle. Die Pipeline läuft sequentiell — jede Phase übergibt ein definiertes Artefakt an die nächste. Workshop verteilt Findings, der Companion begleitet alles quer dazu."
    >
      {/* Pipeline — colored borders per phase */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'stretch',
        gap: 4, margin: '24px 0 32px',
      }}>
        {phases.map((p, i) => (
          <React.Fragment key={p.label}>
            <div style={{
              padding: '10px 14px',
              border: `1px solid ${p.color}`,
              background: p.hub ? `${p.color}14` : 'transparent',
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 13,
              color: palette.text, letterSpacing: -0.1, whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 8, height: 8, background: p.color, flexShrink: 0 }} />
              {p.label}
            </div>
            {i < phases.length - 1 && (
              <div style={{
                display: 'flex', alignItems: 'center', color: palette.textDim,
                fontFamily: "'Fira Code', monospace", fontSize: 14, padding: '0 2px',
              }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>

      <DocsP palette={palette}>
        <B palette={palette}>Workshop</B> ist die Schaltzentrale nach dem Testing: er empfängt
        Findings und verteilt sie an die passende Entity. Der <B palette={palette}>Companion</B>{' '}
        begleitet den gesamten Zyklus als Berater und Erklärer.
      </DocsP>

      {/* Phase-Blocks — colored left-stroke along the text, no boxes */}
      {phases.map((p, i) => (
        <div key={p.label} style={{ marginTop: i === 0 ? 28 : 24 }}>
          <h3 style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
            color: palette.text, lineHeight: 1.15,
            margin: '0 0 14px', letterSpacing: -0.005,
            display: 'flex', alignItems: 'baseline', gap: 12,
          }}>
            <span style={{
              width: 10, height: 10, background: p.color,
              flexShrink: 0, transform: 'translateY(1px)',
              clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)',
            }} />
            <span>{p.label}</span>
          </h3>
          <div style={{
            paddingLeft: 18, borderLeft: `2px solid ${p.color}`,
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline',
              fontFamily: "'Fira Code', monospace", fontSize: 12.5, lineHeight: 1.6 }}>
              <span style={{ flex: '0 0 70px', color: palette.textDim,
                letterSpacing: 1.2, fontSize: 10.5, textTransform: 'uppercase' }}>Eingang</span>
              <span style={{ color: palette.textSecondary }}>{p.in}</span>
            </div>
            <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontSize: 15.5,
              lineHeight: 1.55, color: palette.text, textWrap: 'pretty' }}>{p.proc}</p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'baseline',
              fontFamily: "'Fira Code', monospace", fontSize: 12.5, lineHeight: 1.6 }}>
              <span style={{ flex: '0 0 70px', color: p.color,
                letterSpacing: 1.2, fontSize: 10.5, textTransform: 'uppercase' }}>Ausgang</span>
              <span style={{ color: palette.text, fontWeight: 500 }}>{p.out}</span>
            </div>
          </div>
        </div>
      ))}
    </DocsSection>
  );
};

// ─── Pixel-Glyph for entities & personas ────────────────────────────────
// 8×8 grid, each pattern keyed by name. Two-color: main + accent dot.
const PIXEL_GLYPHS = {
  companion:    [[0,1,1,1,1,1,1,0],[1,2,2,2,2,2,2,1],[1,2,1,0,0,1,2,1],[1,2,0,2,2,0,2,1],[1,2,0,2,2,0,2,1],[1,2,1,0,0,1,2,1],[1,2,2,2,2,2,2,1],[0,1,1,1,1,1,1,0]],
  voice:        [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0]],
  ideation:     [[0,0,0,1,1,0,0,0],[0,0,1,2,2,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,0,1,2,2,1,0,0],[0,0,1,1,1,1,0,0]],
  refinement:   [[1,1,0,0,0,0,1,1],[1,2,1,0,0,1,2,1],[0,1,2,1,1,2,1,0],[0,0,1,2,2,1,0,0],[0,0,1,2,2,1,0,0],[0,1,2,1,1,2,1,0],[1,2,1,0,0,1,2,1],[1,1,0,0,0,0,1,1]],
  cyberFactory: [[1,1,1,1,1,1,1,1],[1,2,2,1,1,2,2,1],[1,2,1,1,1,1,2,1],[1,1,1,2,2,1,1,1],[1,1,1,2,2,1,1,1],[1,2,1,1,1,1,2,1],[1,2,2,1,1,2,2,1],[1,1,1,1,1,1,1,1]],
  workshop:     [[0,1,1,0,0,1,1,0],[1,2,2,1,1,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,2,2,2,1,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,2,1,1,2,2,1],[0,1,1,0,0,1,1,0]],
  testing:      [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,1,1,1,1,2,1],[1,2,1,2,2,1,2,1],[1,2,1,1,1,1,2,1],[0,1,2,1,1,2,1,0],[0,0,1,2,2,1,0,0],[0,0,0,1,1,0,0,0]],
  debugger:     [[1,0,0,0,0,0,0,1],[0,1,1,1,1,1,1,0],[1,1,2,1,1,2,1,1],[1,2,2,1,1,2,2,1],[1,2,2,1,1,2,2,1],[1,1,2,1,1,2,1,1],[0,1,1,1,1,1,1,0],[1,0,0,0,0,0,0,1]],
  audit:        [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[0,1,2,2,2,2,1,0],[0,0,1,1,1,1,0,0]],
  // personas
  relay:        [[0,1,1,1,1,1,1,0],[1,2,2,2,2,2,2,1],[1,2,1,1,1,1,2,1],[1,2,1,2,2,1,2,1],[1,2,1,2,2,1,2,1],[1,2,1,1,1,1,2,1],[1,2,2,2,2,2,2,1],[0,1,1,1,1,1,1,0]],
  cipher:       [[0,1,1,1,1,1,1,0],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[1,2,2,2,2,2,2,1],[1,2,1,1,1,1,2,1],[1,2,1,2,2,1,2,1],[0,1,1,2,2,1,1,0],[0,0,1,1,1,1,0,0]],
  wayne:        [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,2,1,1,2,2,1],[1,2,1,1,1,1,2,1],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[0,1,2,2,2,2,1,0],[0,0,1,1,1,1,0,0]],
  kyniker:      [[0,0,1,1,1,1,0,0],[0,1,2,2,2,2,1,0],[1,2,1,2,2,1,2,1],[1,2,2,2,2,2,2,1],[1,2,2,1,1,2,2,1],[1,2,2,2,2,2,2,1],[0,1,2,1,1,2,1,0],[0,0,1,1,1,1,0,0]],
  theaitetos:   [[0,1,1,1,1,1,1,0],[1,2,2,2,2,2,2,1],[1,2,2,1,1,2,2,1],[1,2,2,2,2,2,2,1],[1,2,1,2,2,1,2,1],[1,2,2,1,1,2,2,1],[1,2,2,2,2,2,2,1],[0,1,1,1,1,1,1,0]],
  glitch:       [[1,0,1,0,1,0,1,0],[0,2,1,2,2,1,2,0],[1,1,2,1,1,2,1,1],[0,2,1,2,2,1,2,0],[1,1,2,1,1,2,1,1],[0,2,1,2,2,1,2,0],[1,1,2,1,1,2,1,1],[0,1,0,1,1,0,1,0]],
};

const PixelGlyph = ({ name, color, size = 40, palette }) => {
  const grid = PIXEL_GLYPHS[name];
  if (!grid) return null;
  const pixel = size / 8;
  return (
    <div style={{
      width: size, height: size, display: 'inline-grid',
      gridTemplateColumns: `repeat(8, ${pixel}px)`,
      gridTemplateRows: `repeat(8, ${pixel}px)`,
      flexShrink: 0,
    }}>
      {grid.flat().map((v, i) => (
        <div key={i} style={{
          background: v === 1 ? color : v === 2 ? palette.bg : 'transparent',
        }} />
      ))}
    </div>
  );
};

const KZSecEntities = ({ palette, sp }) => {
  const entities = [
    { key: 'companion',    label: 'Companion',        color: palette.presets.companion,
      desc: 'Dein Einstiegspunkt. Erklärt Konzepte, hilft bei Entscheidungen, merkt sich deine Präferenzen über Sessions hinweg. Schreibt keinen Code. Drei Modi: Tutor (erklären), Berater (abwägen), Helfer (ausführen).' },
    { key: 'voice',        label: 'Voice Relay',      color: palette.presets.voice,
      desc: 'Der Companion für Sprachinteraktion. Keine Proxy-Session — eine vollständige Session, optimiert für gesprochene Konversation. Kurze Antworten, klare Sätze, TTS-freundlich.' },
    { key: 'ideation',     label: 'Ideation Partner', color: palette.presets.ideation,
      desc: 'Nimmt eine vage Idee und macht etwas Konkretes daraus. Recherchiert autonom, strukturiert, hinterfragt (Pre-Mortem). Das Ergebnis ist ein Anforderungspaket, kein Code.' },
    { key: 'refinement',   label: 'Refinement',       color: palette.presets.refinement,
      desc: 'Macht Anforderungen präzise. Lücken-Audit, REQ-IDs, Akzeptanzkriterien. Kein Code — nur Spec. Die langweiligste und wertvollste Phase.' },
    { key: 'cyberFactory', label: 'Cyber Factory',    color: palette.presets.cyberFactory,
      desc: 'Der Builder. Architekturphase, Wellenplan, parallele Worker, Monitoring. Für große strukturierte Arbeit. Komplex, ressourcenintensiv, nicht für Kleinkram.' },
    { key: 'workshop',     label: 'Workshop',         color: '#5E81AC',
      desc: 'Der Orchestrator für alles was nicht in die Pipeline passt. Bekommt Findings vom Testing Assistant, Bug-Reports, Feature-Requests — und verteilt sie sinnig: Triviales erledigt er selbst, Bugs gehen an den Debugger, größere Themen an die Cyber Factory, Feature-Ideen an Ideation. Übernimmt auch die Kickoff-Aufgaben (früher: Launcher).' },
    { key: 'testing',      label: 'Testing Assistant', color: palette.presets.testing,
      desc: 'Systematisches Testen, adversariales Probing, Sicherheits-Audit. Fixt nichts — dokumentiert Findings und übergibt sie an den Workshop zur Triage.' },
    { key: 'debugger',     label: 'Debugger',         color: palette.presets.debugger,
      desc: 'Bekommt einzelne Bugs vom Workshop zugewiesen, analysiert Root Causes, fixt, verifiziert. Eskaliert wenn nach 2 Versuchen keine Lösung steht — zurück an den Workshop.' },
    { key: 'audit',        label: 'Audit',            color: palette.presets.audit,
      desc: 'Reviewed Code, Sicherheit, ADR-Konsistenz. Gibt eine Release-Empfehlung: Release, Release nach Fix, oder Blockiert. Implementiert nichts.' },
  ];
  return (
    <DocsSection id="entities" num="03" title="Die Entities im Detail" palette={palette} sp={sp}
      lead="Neun vordefinierte Entities, jede mit eigenem Zweck. Keine davon ist ein Alleskönner — das ist Absicht."
    >
      {entities.map((e, i) => (
        <div key={e.key} style={{ marginTop: i === 0 ? 24 : 22 }}>
          <h3 style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
            color: palette.text, lineHeight: 1.15,
            margin: '0 0 12px', letterSpacing: -0.005,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <PixelGlyph name={e.key} color={e.color} size={36} palette={palette} />
            <span>{e.label}</span>
          </h3>
          <div style={{
            paddingLeft: 22, marginLeft: 11, borderLeft: `2px solid ${e.color}`,
            fontFamily: "'Rajdhani', sans-serif", fontSize: 15.5, lineHeight: 1.6,
            color: palette.textSecondary, textWrap: 'pretty', maxWidth: 760,
          }}>
            {e.desc}
          </div>
        </div>
      ))}

      <DocsSubhead palette={palette}>Welche Entity wann?</DocsSubhead>
      <DocsTable palette={palette} headers={['Situation', 'Entity']} rows={[
        { label: 'Test-Findings verteilen und triagen',     desc: 'Workshop' },
        { label: 'Neue Idee durchdenken',                   desc: 'Ideation Partner' },
        { label: 'Feature mit >3 Dateien implementieren',   desc: 'Cyber Factory' },
        { label: '„Was macht die Cyber Factory?"',          desc: 'Companion' },
        { label: 'Spec hat Lücken',                         desc: 'Refinement' },
        { label: 'Code reviewen vor Release',               desc: 'Audit' },
        { label: 'Tests laufen lassen',                     desc: 'Testing Assistant' },
        { label: 'Einzelnen Bug fixen (via Workshop)',      desc: 'Debugger' },
      ]} />
    </DocsSection>
  );
};

Object.assign(window, { PIXEL_GLYPHS, PixelGlyph });

const KZSecPresets = ({ palette, sp }) => {
  const layers = [
    { num: '1.', label: 'Global Rules',    prio: 'basis',       desc: 'Werden in JEDE Session injiziert. Sicherheitsregeln, Tool-Grundregeln, TTS-Guardrails. Nicht editierbar pro Session.' },
    { num: '2.', label: 'Entity Preset',   prio: 'rolle',       desc: 'Die preset.md der jeweiligen Entity — rollenspezifische Anweisungen, Phasen, Handoff-Regeln. Definiert WAS die Session tut.' },
    { num: '3.', label: 'Persona (Character)', prio: 'stil',    desc: 'Tonalität und Kommunikationsstil. Jedes Preset hat einen zugewiesenen Character. Definiert WIE die Session kommuniziert.' },
    { num: '4.', label: 'Workspace Prompt', prio: 'kontext',    desc: 'Wird in alle Sessions dieses Workspaces injiziert. Projektspezifischer Kontext, Konventionen, Verzeichnisse.' },
    { num: '5.', label: 'Cell Prompt',     prio: 'individuell', desc: 'Nur für diese spezifische Zelle. Einmalige Anweisungen, Overrides, Sonderregeln.' },
  ];
  return (
    <DocsSection id="presets" num="04" title="Presets verstehen" palette={palette} sp={sp}
      lead="Ein Preset ist eine vorkonfigurierte Rolle mit eigenen CLAUDE.md-Anweisungen. Die Schichtung dieser Anweisungen ist das Kernkonzept — sie bestimmt, wie sich eine Session verhält."
    >
      <DocsP palette={palette}>Jede Session erhält ihre Anweisungen aus fünf Schichten, die aufeinander aufbauen:</DocsP>
      <Ladder palette={palette} rungs={layers.map(l => ({ label: l.label, priority: l.prio, desc: l.desc }))} />
      <Callout kind="rule" title="Variabilität" palette={palette}>
        Gleiches Preset + anderer Workspace + andere Persona = anderes Verhalten. Ein
        Refinement-Preset im Workspace „cipher-mux" arbeitet anders als im Workspace
        „Kunden-Website" — weil der Workspace-Prompt anderen Kontext liefert und die Persona
        einen anderen Ton setzt.
      </Callout>

      <DocsSubhead palette={palette}>Ordnerstruktur</DocsSubhead>
      <DocsP palette={palette}>
        Jede Entity hat ihr eigenes Verzeichnis unter <Mono palette={palette}>~/.config/cipher-mux/entities/</Mono>:
      </DocsP>
      <DocsList palette={palette} items={[
        <><Mono palette={palette}>preset.md</Mono> — die Haupt-Anweisungen der Rolle</>,
        <><Mono palette={palette}>guides/</Mono> — ergänzende Leitfäden und Referenzen</>,
        <><Mono palette={palette}>ref/</Mono> — Referenzmaterial, Beispiele, Templates</>,
      ]} />

      <DocsSubhead palette={palette}>Builtin vs. Custom</DocsSubhead>
      <DocsP palette={palette}>
        Eingebaute Presets sind feststehend — du kannst sie nutzen, aber nicht verändern. Eigene
        Presets legst du im Workspace-Editor an: Name, Prompt-Text, fertig. Wer tiefer einsteigen
        will, kann sich mit Hilfe von Claude Code einen vollständigen Preset-Ordner aufbauen —
        mit Guides, Referenzmaterial und spezialisierten Slash-Commands. Denn nicht nur der
        Prompt macht ein Preset besonders.
      </DocsP>
    </DocsSection>
  );
};

const KZSecPersonas = ({ palette, sp }) => (
  <DocsSection id="personas" num="05" title="Personas (Characters)" palette={palette} sp={sp}
    lead="Personas definieren WIE cipher-mux kommuniziert — Tonalität und Stil, nicht Funktion. Sechs sind eingebaut. Eigene legst du im Workspace-Editor an."
  >
    <DocsTable palette={palette} headers={['Character', 'Charakter']} rows={[
      { label: 'Relay',         desc: 'Ruhig, präzise, wissenschaftsjournalistisch. Kein Lob ohne Prüfung. Startcharakter für Companion und allgemeine Sessions.' },
      { label: 'Cipher',        desc: 'Positiver Cyberpunk, pragmatisch loyal. Trocken, direkt, Wächter-Mentalität.' },
      { label: 'Wayne',         desc: 'Pragmatischer Enthusiast. „Das kriegen wir hin"-Attitude. Nerd-Humor erlaubt.' },
      { label: 'Der Kyniker',   desc: 'Nur Fakten und Code. Ja/Nein wenn möglich. Maximal komprimiert, telegrafisch.' },
      { label: 'Theaitetos',    desc: 'Führt durch Fragen, nicht Antworten. Deckt Lücken im Denken auf, leitet zur Reflexion an.' },
      { label: 'Der Glitch',    desc: 'Bricht Denkmuster. Unkonventionelle Metaphern, kreative Reibung. Nicht für jeden Tag.' },
    ]} />
    <DocsSubhead palette={palette}>Global Override</DocsSubhead>
    <DocsP palette={palette}>
      Im Workspace-Editor kannst du eine Persona global aktivieren — dann gilt sie für alle
      Sessions, unabhängig vom Preset. Nützlich wenn du gerade eine bestimmte Tonalität bevorzugst.
    </DocsP>
    <DocsSubhead palette={palette}>Eigene Personas</DocsSubhead>
    <DocsP palette={palette}>
      Name, Farbe und Prompt-Text — mehr braucht eine Persona nicht. Die eingebauten Personas
      sind editierbar, eigene kannst du beliebig viele anlegen.
    </DocsP>
  </DocsSection>
);

const KZSecMemory = ({ palette, sp }) => (
  <DocsSection id="memory" num="06" title="Memory, Tags & Scoping" palette={palette} sp={sp}
    lead="cipher-mux hat zwei Systeme für Wissen, das über eine einzelne Session hinausgeht: Notes (sichtbar, teilbar) und Companion Memory (intern, automatisch)."
  >
    <DocsSubhead palette={palette}>Companion Memory — drei Scopes</DocsSubhead>
    <DocsTable palette={palette} headers={['Scope', 'Gilt']} rows={[
      { label: 'user',      desc: 'Immer, überall. Deine Präferenzen, Konventionen, Eigenheiten.' },
      { label: 'workspace', desc: 'Nur in diesem Workspace. Projekt-Entscheidungen, Stack-Wahl, offene Fragen.' },
      { label: 'session',   desc: 'Nur in dieser Session. Temporäre Notizen, laufende Aufgaben.' },
    ]} />

    <DocsSubhead palette={palette}>Notes</DocsSubhead>
    <DocsP palette={palette}>
      Sichtbare, teilbare Wissensstücke. Markdown-Dateien mit Tags. Du siehst sie in der Sidebar,
      kannst sie in Obsidian lesen, und Sessions können sie als Handoff-Medium nutzen.
    </DocsP>

    <DocsSubhead palette={palette}>Tags</DocsSubhead>
    <DocsP palette={palette}>
      Tags folgen dem Format <Mono palette={palette}>klasse:wert</Mono> — zum Beispiel{' '}
      <Mono palette={palette}>workspace:CIPHER-MUX</Mono>, <Mono palette={palette}>kind:bugreport</Mono>,{' '}
      <Mono palette={palette}>status:open</Mono>. Auto-Tagging per lokalem KI-Modell bei Cmd+S.
    </DocsP>

    <Callout kind="rule" title="Workspace-Scoping" palette={palette}>
      Wenn du einen Workspace aktivierst, passiert automatisch: Notes werden auf{' '}
      <Mono palette={palette}>workspace:Name</Mono> gefiltert. Prompts werden gescoopt.
      Kontext-Verzeichnisse werden gesetzt. Workspace wechseln = anderer Kontext, andere Notes,
      andere Tags.
    </Callout>

    <DocsSubhead palette={palette}>Note vs. Memory — wann was?</DocsSubhead>
    <DocsTable palette={palette} columns={3} headers={['Aspekt', 'Note', 'Memory']} rows={[
      { key: 'Sichtbarkeit',    label: 'Sichtbar in der Sidebar, editierbar', desc: 'Nicht sichtbar in der UI, nur im Memory-Tab einsehbar' },
      { key: 'Teilbarkeit',     label: 'Zwischen Sessions teilbar, in Obsidian lesbar', desc: 'Intern, nur für die KI' },
      { key: 'Inhalt',          label: 'Specs, Findings, Handoffs, Feature-Beschreibungen', desc: 'Präferenzen, Konventionen, Projekt-Kontext' },
      { key: 'Beispiel',        label: '„Findings-Report von Testing Run 3"', desc: '„User bevorzugt Relay-Persona für Code-Arbeit"' },
    ]} />
  </DocsSection>
);

const KZSecHonesty = ({ palette, sp }) => (
  <DocsSection id="honesty" num="07" title="Ehrlichkeit" palette={palette} sp={sp}
    lead="Das hier ist kein Verkaufsprospekt. cipher-mux ist ein Werkzeug, das für manche Aufgaben gut funktioniert und für andere nicht."
  >
    {[
      { label: 'Token-Kosten',         text: 'Jede Session verbraucht API-Tokens. Parallele Sessions multiplizieren die Kosten. Ein Cyber-Factory-Run mit 5 Workern verbrennt Tokens schnell. Das ist nicht kostenlos.' },
      { label: 'Context-Grenzen',      text: 'Das Context Window ist endlich. Wenn es voll ist, komprimiert Claude ältere Nachrichten. Information geht verloren. Es gibt keine magische Lösung — starte eine neue Session.' },
      { label: 'Handoffs scheitern',   text: 'Manchmal findet der Testing Assistant die richtigen Dateien nicht. Manchmal bricht der Fix des Debuggers etwas anderes. Das System ist nur so gut wie die Prompts und das LLM.' },
      { label: 'Solo-Maintainer',      text: 'cipher-mux wird von einer Person in der Freizeit gebaut. „I respond when I have time." Das ist kein Startup mit Support-Team.' },
      { label: 'Nicht für alles',      text: 'Für eine schnelle Ein-Datei-Änderung ist eine nackte Claude-Code-Session besser. Der Overhead von Entities, Presets und Lifecycle lohnt sich nur für strukturierte Arbeit mit mehreren Dateien.' },
    ].map((c, i) => (
      <div key={c.label} style={{
        padding: '14px 18px', margin: '10px 0',
        border: `1px solid ${palette.border}`,
        borderLeft: `3px solid ${palette.warn || '#D08770'}`,
        background: palette.bgSunken,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.warn || '#D08770', letterSpacing: 1.4 }}>0{i + 1}</span>
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 16,
            color: palette.text }}>{c.label}</span>
        </div>
        <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontSize: 14,
          lineHeight: 1.6, color: palette.textSecondary, textWrap: 'pretty' }}>{c.text}</p>
      </div>
    ))}
    <p style={{
      marginTop: 24, fontFamily: "'Rajdhani', sans-serif", fontWeight: 500,
      fontSize: 17, color: palette.text, fontStyle: 'italic',
    }}>
      Die ehrlichste Empfehlung: probier es aus. Wenn es dir hilft, nutze es. Wenn nicht, kein Verlust.
    </p>
  </DocsSection>
);

const DocsKonzeptePage = ({ palette, sp }) => (
  <>
    <DocsHero palette={palette} sp={sp}
      kicker="Prozess & Konzepte · v0.9.101"
      title="Warum spezialisierte"
      titleAccent="Sessions?"
      body="cipher-mux trennt Phasen der Softwareentwicklung in eigene KI-Sessions — mit eigenem Kontext, eigenen Anweisungen, eigenen Grenzen. Hier steht, warum das manchmal funktioniert und wann nicht."
    />
    <KZSecIdea palette={palette} sp={sp} />
    <KZSecLifecycle palette={palette} sp={sp} />
    <KZSecEntities palette={palette} sp={sp} />
    <KZSecPresets palette={palette} sp={sp} />
    <KZSecPersonas palette={palette} sp={sp} />
    <KZSecMemory palette={palette} sp={sp} />
    <KZSecHonesty palette={palette} sp={sp} />
  </>
);

Object.assign(window, {
  DocsKonzeptePage,
  KZSecIdea, KZSecLifecycle, KZSecEntities, KZSecPresets, KZSecPersonas, KZSecMemory, KZSecHonesty,
});
