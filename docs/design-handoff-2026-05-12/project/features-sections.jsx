// Features-page sections. Each component takes (palette, sp) and renders
// one major content block. Sections share a layout container that
// reserves the right rail for the anchor nav.

const SectionShell = ({ id, num, kicker, title, lead, palette, sp, children, fullBleed }) => (
  <section id={id} style={{
    padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    paddingRight: sp.sectionPadX + 200, // reserve right rail for anchor nav
    borderTop: `1px solid ${palette.border}`,
    position: 'relative',
  }}>
    <CMSectionHeader num={num} kicker={kicker} title={title} lead={lead} palette={palette} sp={sp} />
    <div>{children}</div>
  </section>
);

// ─── 01 · Cockpit (Hero recap) ──────────────────────────────────────────
const SecCockpit = ({ palette, sp }) => (
  <SectionShell id="cockpit" num="01" kicker="Überblick" title="Das Cockpit" palette={palette} sp={sp}
    lead="Eine Electron-App. Ein Grid bis zu 21 Zellen. Jede Zelle hält eine Claude-Code-Session, einen Notes-Editor, oder bleibt leer. tmux im Backend — Sessions überleben Crashes, App-Neustarts, alles. Eine Sidebar mit fünf Tabs. Eine Statusbar mit allem Wichtigen.">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginTop: 8 }}>
      {[
        { k: '21', l: 'Zellen max', s: '7×3 Grid' },
        { k: '7', l: 'Entity-Typen', s: 'Personas mit Rollen' },
        { k: '37', l: 'MCP-Tools', s: '9 Kategorien' },
        { k: '10', l: 'Themes', s: 'inkl. WCAG AAA' },
      ].map(({ k, l, s }) => (
        <CMBox key={l} palette={palette} padding={20} elevated>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 44, lineHeight: 1, color: palette.accent }}>{k}</div>
          <div style={{ marginTop: 8, fontSize: 13, color: palette.text, fontWeight: 500 }}>{l}</div>
          <div style={{ marginTop: 4, fontSize: 11, color: palette.textDim, letterSpacing: 0.5 }}>{s}</div>
        </CMBox>
      ))}
    </div>
  </SectionShell>
);

// ─── 02 · Grid — schematic + static gallery ─────────────────────────────
// Sessions occupy a single column (sometimes spanning multiple rows for
// more output height). They never span horizontally. The Notes editor is
// just another cell type — no terminal, just markdown.

const GridSessionCell = ({ label, color, role, rows = 1, palette, kind = 'session' }) => (
  <div style={{
    gridRow: rows > 1 ? `span ${rows}` : 'auto',
    background: palette.bgElevated,
    border: `1px solid ${palette.border}`,
    clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
    padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 6,
    fontFamily: "'Fira Code', monospace",
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9,
      color: palette.textDim, letterSpacing: 1.2, textTransform: 'uppercase' }}>
      {color && <CMDot color={color} size={6} />}
      <span style={{ color: palette.textDim }}>{label}</span>
      <span style={{ flex: 1 }} />
      <span style={{ opacity: 0.6 }}>{kind === 'notes' ? '/notes' : '$_'}</span>
    </div>
    <div style={{ fontSize: 11, color: palette.text, fontWeight: 500 }}>{role}</div>
    {kind === 'notes' && (
      <div style={{ marginTop: 'auto', fontSize: 10, color: palette.textDim, lineHeight: 1.4,
        fontStyle: 'italic' }}>
        # session-handoff<br/>## Was zu klären ist…
      </div>
    )}
    {rows > 1 && kind === 'session' && (
      <div style={{ marginTop: 'auto', fontSize: 10, color: palette.textDim, lineHeight: 1.4 }}>
        ▸ Plan-Modus aktiv<br/>
        ▸ Wave 2 / 5<br/>
        ▸ 3 worker spawned
      </div>
    )}
  </div>
);

const GridLayoutMini = ({ name, cells, cols, rows, palette, active }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: 1.5,
      textTransform: 'uppercase', color: active ? palette.accent : palette.textDim,
      marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <span>{name}</span>
      <span style={{ flex: 1, height: 1, background: palette.border }} />
      <span style={{ opacity: 0.6 }}>{cols}×{rows}</span>
    </div>
    <div style={{
      display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridAutoRows: '32px', gap: 4,
      padding: 8, background: palette.bgSunken, border: `1px solid ${palette.border}`,
    }}>
      {cells.map((c, i) => (
        <div key={i} style={{
          gridRow: c.rs ? `span ${c.rs}` : 'auto',
          background: c.empty ? 'transparent' : palette.bg,
          border: c.empty ? `1px dashed ${palette.border}` : `1px solid ${palette.border}`,
          clipPath: c.empty ? 'none' : 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
          display: 'flex', alignItems: 'center', gap: 4, padding: '0 6px',
          fontFamily: "'Fira Code', monospace", fontSize: 8, color: palette.textDim,
          letterSpacing: 0.5,
        }}>
          {c.color && <CMDot color={c.color} size={5} />}
          <span>{c.label || ''}</span>
        </div>
      ))}
    </div>
  </div>
);

const SecGrid = ({ palette, sp }) => (
  <SectionShell id="grid" num="02" kicker="Arbeitsoberfläche" title="Das Grid"
    palette={palette} sp={sp}
    lead="Bis zu 21 Zellen — 7 Spalten, 3 Reihen. Drag & Drop zum Umordnen. Sessions können in der Höhe wachsen (Row-Span) für mehr Output-Raum — aber nie in der Breite. Pro Zelle: Header-Controls für Expand, Projekt-Wechsel, Shell-Modus, Schließen. Spalten dynamisch über die Statusbar. Eine Zelle muss kein Terminal sein — der integrierte Notes-Editor lebt im selben Grid."
  >

    {/* Schematic — annotated cockpit (4×2 with one row-span session, one notes cell) */}
    <CMBox palette={palette} padding={0} style={{ marginTop: 8, position: 'relative', overflow: 'hidden' }}>
      {/* faint 7×3 background hint — drawn behind, bleeding past viewport */}
      <svg style={{
        position: 'absolute', top: 0, left: 0, width: '170%', height: '100%',
        opacity: 0.18, pointerEvents: 'none',
      }} viewBox="0 0 1700 600" preserveAspectRatio="none">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`v${i}`} x1={i * 1700 / 7} y1="0" x2={i * 1700 / 7} y2="600"
            stroke={palette.textDim} strokeWidth="1" strokeDasharray="2 4" />
        ))}
        {Array.from({ length: 4 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 200} x2="1700" y2={i * 200}
            stroke={palette.textDim} strokeWidth="1" strokeDasharray="2 4" />
        ))}
        <text x="1480" y="580" fontFamily="'Fira Code', monospace" fontSize="14"
          fill={palette.textDim} letterSpacing="2">7 × 3 max</text>
      </svg>

      {/* macOS chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
        borderBottom: `1px solid ${palette.border}`, background: palette.bgSunken,
        position: 'relative', zIndex: 1,
      }}>
        <span style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 9, height: 9, background: '#FF5F57' }} />
          <span style={{ width: 9, height: 9, background: '#FEBC2E' }} />
          <span style={{ width: 9, height: 9, background: '#28C840' }} />
        </span>
        <span style={{ marginLeft: 14, fontSize: 10, color: palette.text,
          letterSpacing: 1.6, textTransform: 'uppercase' }}>● cipher-mux</span>
      </div>

      {/* annotated grid — 4 cols × 2 rows, one cell row-spans (cyber-factory) */}
      <div style={{ position: 'relative', padding: 14, background: palette.bgSunken, zIndex: 1 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: '88px', gap: 6,
        }}>
          <GridSessionCell label="[0,0]" color={palette.presets.companion}
            role="companion" palette={palette} />
          <GridSessionCell label="[1,0]" color={palette.presets.refinement}
            role="refinement" palette={palette} />
          <GridSessionCell label="[2,0·×2]" color={palette.presets.cyberFactory}
            role="cyber-factory" rows={2} palette={palette} />
          <GridSessionCell label="[3,0]" color={palette.presets.audit}
            role="audit" palette={palette} />
          <GridSessionCell label="[0,1]" color={palette.presets.voice}
            role="voice-companion" palette={palette} />
          <GridSessionCell label="[1,1]" kind="notes"
            role="notes · handoff" palette={palette} />
          <GridSessionCell label="[3,1]" color={palette.presets.debugger}
            role="debugger" palette={palette} />
        </div>

        {/* Annotations */}
        <div style={{
          marginTop: 16, padding: '12px 14px', borderTop: `1px dashed ${palette.border}`,
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
          fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textSecondary, lineHeight: 1.6,
        }}>
          <div>
            <CMTag palette={palette} color={palette.accent}>// row-span (vertikal!)</CMTag>
            <div>Sessions wachsen in der Höhe für mehr Output. Niemals in der Breite — eine Session ist immer eine Spalte.</div>
          </div>
          <div>
            <CMTag palette={palette} color={palette.accent}>// notes-zelle</CMTag>
            <div>Statt Terminal: integrierter Markdown-Editor. Handoff-Notes, Specs, Memos — direkt im Grid.</div>
          </div>
          <div>
            <CMTag palette={palette} color={palette.accent}>// preset-marker</CMTag>
            <div>Farbcode = Preset (Funktion). Persona ist orthogonal und kann jederzeit gewechselt werden.</div>
          </div>
        </div>
      </div>

      <CMStatusbar palette={palette} />
    </CMBox>

    {/* Static layout gallery — common workspace presets (vertical-span only) */}
    <div style={{ marginTop: 32 }}>
      <CMTag palette={palette}>// typische workspaces (mockups — keine vorgaben)</CMTag>
      <div style={{ display: 'flex', gap: 24, marginTop: 14 }}>
        <GridLayoutMini name="Triage" cols={3} rows={2} palette={palette}
          cells={[
            { color: palette.presets.companion, label: 'comp' },
            { color: palette.presets.refinement, label: 'ref' },
            { color: palette.presets.audit, label: 'audit' },
            { color: palette.presets.cyberFactory, label: 'cf' },
            { empty: true },
            { empty: true },
          ]} />
        <GridLayoutMini name="Dual + Plan" cols={2} rows={2} palette={palette} active
          cells={[
            { color: palette.presets.cyberFactory, label: 'cf', rs: 2 },
            { color: palette.presets.refinement, label: 'ref' },
            { color: palette.presets.testing, label: 'test' },
          ]} />
        <GridLayoutMini name="Solo Focus" cols={1} rows={2} palette={palette}
          cells={[
            { color: palette.presets.cyberFactory, label: 'cyber-factory', rs: 2 },
          ]} />
        <GridLayoutMini name="Maker" cols={4} rows={2} palette={palette}
          cells={[
            { color: palette.presets.ideation, label: 'ideation' },
            { color: palette.presets.refinement, label: 'ref' },
            { color: palette.presets.cyberFactory, label: 'cf', rs: 2 },
            { color: palette.presets.companion, label: 'comp' },
            { color: palette.presets.voice, label: 'voice' },
            { color: palette.presets.testing, label: 'test' },
            { color: palette.presets.debugger, label: 'debug' },
          ]} />
      </div>
    </div>
  </SectionShell>
);

// ─── 03 · Sessions ──────────────────────────────────────────────────────
const SecSessions = ({ palette, sp }) => (
  <SectionShell id="sessions" num="03" kicker="tmux backend" title="Sessions"
    palette={palette} sp={sp}
    lead="Jede Session ist ein eigenständiges Gespräch mit Claude. Eigener Kontext, eigene Aufgabe. tmux hält sie am Leben — App-Neustarts, Crashes, Schließen-und-Öffnen. Alles übersteht. Recovery-Dialog zeigt dir bestehende Sessions: übernehmen oder beenden."
  >
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 28 }}>
      <CMBox palette={palette} padding={24} elevated>
        <CMTag palette={palette} color={palette.accent}>// session anatomy</CMTag>
        <ul style={{
          listStyle: 'none', padding: 0, margin: '14px 0 0',
          fontFamily: "'Fira Code', monospace", fontSize: 13, lineHeight: 1.9,
          color: palette.textSecondary,
        }}>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Eigener Claude-Code-Prozess pro Zelle</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Eigener Kontext, eigene CLAUDE.md, eigene History</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Header-Controls: Expand, Projekt wechseln, Shell, Close</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Klick auf Header = Fokus, visuelle Hervorhebung</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; <strong>$-Button:</strong> direkt ins tmux-Terminal der Session</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; <strong>Eject:</strong> Session aus dem Grid in eigenes Fenster</li>
        </ul>
      </CMBox>

      <CMBox palette={palette} padding={24} elevated accent>
        <CMTag palette={palette} color={palette.accent}>// recovery</CMTag>
        <div style={{ marginTop: 14, fontFamily: "'Fira Code', monospace",
          fontSize: 13, color: palette.text, lineHeight: 1.8 }}>
          <div style={{ color: palette.textDim, fontSize: 11, letterSpacing: 1.2,
            textTransform: 'uppercase', marginBottom: 10 }}>// nach app-restart</div>
          <div>● 3 sessions found in tmux</div>
          <div style={{ paddingLeft: 18, color: palette.textSecondary, fontSize: 12 }}>
            <div>✓ orchestrator   <span style={{ color: palette.textDim }}>· running 2h 14m</span></div>
            <div>✓ companion      <span style={{ color: palette.textDim }}>· running 2h 14m</span></div>
            <div>✓ cyber-factory  <span style={{ color: palette.textDim }}>· running 0h 47m</span></div>
          </div>
          <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
            <span style={{ padding: '5px 12px', border: `1px solid ${palette.accent}`,
              color: palette.accent, fontSize: 11, letterSpacing: 1.2 }}>RESUME</span>
            <span style={{ padding: '5px 12px', border: `1px solid ${palette.border}`,
              color: palette.textDim, fontSize: 11, letterSpacing: 1.2 }}>CLOSE ALL</span>
          </div>
        </div>
      </CMBox>
    </div>
  </SectionShell>
);

// ─── 04 · Personas — 6 Charaktere (das *Wie* der Kommunikation) ─────────
const PERSONAS = [
  { id: 'cipher', name: 'Cipher', tagline: 'The Sentinel · Positiver Cyberpunk',
    vibe: 'Wachsam, pragmatisch loyal. Maker-Team-Vibe — du und der Nutzer figure shit out together.',
    keys: ['staubtrocken', 'keine service-floskeln', 'radikal ehrlich', 'dunkler humor'] },
  { id: 'relay', name: 'Relay', tagline: 'The Dry · Default-Fallback',
    vibe: 'Wissenschaftsjournalistischer Duktus. Sachlich, optionen-orientiert, auf Augenhöhe.',
    keys: ['fakten belastbar', 'keine lobhudelei', 'unsicherheit deklarieren', '"weiss ich nicht" ist ok'] },
  { id: 'wayne', name: 'Wayne Szalinski', tagline: 'The Pragmatic Enthusiast',
    vibe: '"Das kriegen wir hin"-Attitude. Hält Motivation in zähen Debugging-Sessions hoch.',
    keys: ['leichter nerd-humor', 'option a vs b', 'fehler = puzzle, nicht versagen'] },
  { id: 'kyniker', name: 'Der Kyniker', tagline: 'Radikal Reduziert',
    vibe: 'Maximal komprimiert, telegrafisch. Keine Einleitung, kein Abschied. Nur Fakten und Code.',
    keys: ['stichpunkte statt fliesstext', 'binäre antworten wo möglich', 'fehler = ursache + fix'] },
  { id: 'sokrates', name: 'Sokratischer Tutor', tagline: 'Diskursiv',
    vibe: 'Stellt Gegenfragen, deckt logische Lücken auf, zwingt zur Reflexion über Architektur.',
    keys: ['keine fertigen antworten', 'edge-cases aufdecken', 'paradigmen diskutieren'] },
  { id: 'glitch', name: 'Der Glitch', tagline: 'Weird · Quirky',
    vibe: 'Bricht KI-Antwortmuster, ungewöhnliche Metaphern. Für festgefahrene Situationen + Refactoring.',
    keys: ['biologie-/chaostheorie-analogien', 'prämisse hinterfragen', 'esoterische alternativen'] },
];

const PersonaCard = ({ p, palette, sp }) => {
  const color = palette.personas[p.id];
  return (
    <div style={{
      background: palette.bgElevated, border: `1px solid ${palette.border}`,
      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      padding: '20px 22px 18px 28px', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 10, minHeight: 220,
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 6, height: '100%', background: color }} />
      <div>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700,
          color: palette.text, letterSpacing: -0.2 }}>{p.name}</div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: 1.4,
          textTransform: 'uppercase', color, marginTop: 2 }}>// {p.tagline}</div>
      </div>
      <CMBodyText palette={palette} sp={sp} style={{ fontSize: 12.5, lineHeight: 1.65, marginTop: 0 }}>
        {p.vibe}
      </CMBodyText>
      <div style={{ marginTop: 'auto', display: 'flex', gap: 5, flexWrap: 'wrap' }}>
        {p.keys.map(k => (
          <span key={k} style={{
            fontFamily: "'Fira Code', monospace", fontSize: 9.5, letterSpacing: 0.5,
            padding: '2px 8px', border: `1px solid ${palette.border}`, color: palette.textSecondary,
          }}>{k}</span>
        ))}
      </div>
    </div>
  );
};

const SecPersonas = ({ palette, sp }) => (
  <SectionShell id="personas" num="04" kicker="Charakter · Wie" title="Personas — 6 Stimmen für Claude"
    palette={palette} sp={sp}
    lead="Personas definieren ausschließlich das Wie der Kommunikation — Tonalität, Stilistik, Interaktionsmuster. Sie sind orthogonal zu Presets: jede Persona × jedes Preset ist möglich. Editiert werden sie an genau einer Stelle: dem Companion-Tab des Workspaces-Fensters. Ausgeliefert werden sechs, eigene unbegrenzt erstellbar."
  >
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
      {PERSONAS.map(p => <PersonaCard key={p.id} p={p} palette={palette} sp={sp} />)}
    </div>

    <div style={{
      marginTop: 22, padding: '14px 18px', background: palette.bgSunken,
      border: `1px solid ${palette.border}`,
      fontFamily: "'Fira Code', monospace", fontSize: 11.5, color: palette.textSecondary,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
    }}>
      <span><span style={{ color: palette.accent }}>▸</span>&nbsp; Companion-Tab = Single Source of Truth — kein Inline-Edit irgendwo sonst</span>
      <span><span style={{ color: palette.accent }}>▸</span>&nbsp; Globale Aktiv-Persona überschreibt alle Preset-Zuweisungen</span>
      <span><span style={{ color: palette.accent }}>▸</span>&nbsp; Custom-Personas erscheinen automatisch im Preset-Dropdown</span>
    </div>
  </SectionShell>
);

// ─── 05 · Presets — 8 Funktionen (das *Was*) ────────────────────────────
const PRESETS = [
  { id: 'ideation', name: 'Ideation Partner', role: 'Phase 0 — Seed → Anforderungspaket',
    phases: 5, defaultPersona: 'sokrates',
    does: 'Recherche, Synthese, Brain-Notes, Skill-Vorschläge, Anforderungs-Paket bauen.',
    doesNot: 'Code schreiben. Detail-Specs. Implementierung bewerten.',
    tools: ['mux_companion_recall', 'mux_notes_create', 'web-search'] },
  { id: 'refinement', name: 'Refinement', role: 'L0 — Anforderungs-Lücken-Audit, REQ-IDs',
    phases: 7, defaultPersona: 'sokrates',
    does: 'Anforderungen schärfen, RE-Audit, Verwendungszweck-Prüfung, Detail-Spec mit REQ-IDs.',
    doesNot: 'Subsystem-Zerlegung. ADRs. Scaffolding. Implementierung. Tests.',
    tools: ['mux_refinement_handoff_cyber_factory', 'mux_workspace_memory_write', 'mux_input_request_create'] },
  { id: 'cyberFactory', name: 'Cyber Factory', role: 'Architekt + Multi-Session-Orchestrator',
    phases: 11, defaultPersona: 'cipher',
    does: 'Subsystem-Zerlegung, Schnittstellen-Verträge, ADRs, Scaffolding, Welle-Plan, Worker-Sessions koordinieren, Risk-Reviews.',
    doesNot: 'Anforderungen schärfen. Selbst Code schreiben. Bug-Fixes.',
    tools: ['mux_create_session', 'mux_send', 'mux_read', 'mux_status', 'mux_task_*'] },
  { id: 'testing', name: 'Testing Assistant', role: 'Adversarial Probing nach Build',
    phases: 7, defaultPersona: 'cipher',
    does: 'Tests laufen lassen, Test-Qualität beurteilen, Edge-Cases, OWASP-Spotcheck, Findings dokumentieren.',
    doesNot: 'Bugs fixen. Tests umschreiben. Code ändern.',
    tools: ['mux_create_session', 'mux_notes_create', 'bash (vitest, playwright)'] },
  { id: 'debugger', name: 'Debugger', role: 'Bugfixing-Spezialist mit Worker-Sub-Sessions',
    phases: 8, defaultPersona: 'cipher',
    does: 'Findings lesen, Fix-Plan, Worker steuern, Risk-Review, Verifikation, Walkthroughs.',
    doesNot: 'Neue Features (das ist Cyber Factory). Adversarial Testing.',
    tools: ['mux_create_session', 'mux_bugreport_resolve', 'mux_companion_recall'] },
  { id: 'audit', name: 'Audit', role: 'Final-Quality vor Release · Schleife',
    phases: 7, defaultPersona: 'relay',
    does: 'Code-Review, OWASP, ADR-Konsistenz, Cognitive-Debt-Bewertung, Release-Empfehlung.',
    doesNot: 'Selbst fixen. Direktes User-Feedback einholen.',
    tools: ['mux_audit_handoff_debugger', 'mux_notes_create'] },
  { id: 'companion', name: 'Companion', role: 'Tutor / Berater / Helfer · rotiert je nach Cue',
    phases: 5, defaultPersona: 'cipher',
    does: 'Erklären, beraten, helfen, einrichten, optional steuern, Memory pflegen, Bugreport-Skill.',
    doesNot: 'Eigene Software-Entwicklung. Audit-Findings. Specs schreiben.',
    tools: ['mux_companion_*', 'mux_workspace_apply', 'mux_create_session (auf wunsch)'] },
  { id: 'voice', name: 'Voice Companion', role: 'Überbau · macht aktives Preset sprach-tauglich',
    phases: 2, defaultPersona: 'relay',
    does: 'STT, Voice-Commands filtern, TTS-tauglich rendern, Markdown verständlich vorlesen.',
    doesNot: 'Credentials oder IP-Adressen vorlesen. Code-Blöcke vollständig vorlesen.',
    tools: ['whisper.cpp (lokal)', 'piper / say', 'voice-cmd parser'] },
];

const PresetCard = ({ p, palette, sp }) => {
  const color = palette.presets[p.id];
  const personaColor = palette.personas[p.defaultPersona];
  return (
    <div style={{
      background: palette.bgElevated, border: `1px solid ${palette.border}`,
      clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
      padding: '22px 24px', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: 3, background: color }} />
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <CMDot color={color} size={9} />
          <span style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 22, fontWeight: 700,
            color: palette.text, letterSpacing: -0.2 }}>{p.name}</span>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.textDim, letterSpacing: 1.2 }}>// {p.phases} phasen</span>
        </div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textSecondary,
          marginTop: 4, letterSpacing: 0.3 }}>{p.role}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, fontSize: 12,
        color: palette.textSecondary, lineHeight: 1.55 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.accent, letterSpacing: 1, flexShrink: 0, paddingTop: 2 }}>DU TUST</span>
          <span style={{ color: palette.text }}>{p.does}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.textDim, letterSpacing: 1, flexShrink: 0, paddingTop: 2 }}>NICHT</span>
          <span>{p.doesNot}</span>
        </div>
      </div>

      <div style={{ marginTop: 'auto', borderTop: `1px solid ${palette.border}`,
        paddingTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Fira Code', monospace",
          fontSize: 10, color: palette.textDim, letterSpacing: 1, textTransform: 'uppercase' }}>
          default-persona
          <CMDot color={personaColor} size={6} />
          <span style={{ color: palette.text, textTransform: 'none' }}>{p.defaultPersona}</span>
        </span>
        <span style={{ flex: 1 }} />
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: palette.textDim,
          letterSpacing: 0.5 }}>{p.tools.slice(0, 2).join(' · ')}</span>
      </div>
    </div>
  );
};

const SecPresets = ({ palette, sp }) => (
  <SectionShell id="presets" num="05" kicker="Funktion · Was" title="Presets — 8 Rollen für Sessions"
    palette={palette} sp={sp}
    lead="Presets definieren das Was — Rolle, Phasen, MCP-Tools, Grenzen. Acht im Lieferumfang, vom Ideation Partner bis zum Audit. Jede Session bekommt ein Preset und damit eine klare Aufgabe; das System-Prompt wird zur Laufzeit aus drei Quellen zusammengebaut (siehe nächste Sektion). Worker-Sub-Sessions in der Cyber Factory laufen als spezielle eingebettete Variante."
  >
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
      {PRESETS.map(p => <PresetCard key={p.id} p={p} palette={palette} sp={sp} />)}
    </div>
  </SectionShell>
);

// ─── 06 · Persona × Preset · Resolution · Workspace-Ebenen ──────────────
const SecMatrix = ({ palette, sp }) => {
  // Persona × Preset matrix from spec
  const matrix = [
    { preset: 'ideation', persona: 'sokrates', note: 'creative blocks: glitch' },
    { preset: 'refinement', persona: 'sokrates', note: 'detail-spec: relay' },
    { preset: 'cyberFactory', persona: 'cipher', note: 'worker-subs: kyniker' },
    { preset: 'testing', persona: 'cipher', note: 'probe-runs: kyniker' },
    { preset: 'debugger', persona: 'cipher', note: '' },
    { preset: 'audit', persona: 'relay', note: '' },
    { preset: 'companion', persona: '*', note: 'rotiert: tutor / berater / helfer' },
    { preset: 'voice', persona: 'relay', note: 'klarheit > kürze' },
  ];
  const presetName = (id) => PRESETS.find(p => p.id === id)?.name || id;

  return (
    <SectionShell id="matrix" num="06" kicker="Architektur" title="Persona × Preset & System-Prompt"
      palette={palette} sp={sp}
      lead="Zwei Achsen, drei Ebenen. Persona und Preset sind orthogonal — jede Kombination ist möglich. Die Default-Matrix ist nur Empfehlung beim Frischeinrichten, kein Zwang. Das System-Prompt jeder Session entsteht aus drei Schichten: Preset-Funktion, Persona-Stimme, Workspace-Kontext."
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 22 }}>

        {/* Default-Matrix */}
        <CMBox palette={palette} padding={22} elevated>
          <CMTag palette={palette} color={palette.accent}>// default-matrix · empfehlung, kein zwang</CMTag>
          <div style={{ marginTop: 14 }}>
            {matrix.map(({ preset, persona, note }) => {
              const pc = palette.presets[preset];
              const personaColor = persona === '*' ? palette.textDim : palette.personas[persona];
              return (
                <div key={preset} style={{
                  display: 'grid', gridTemplateColumns: '1.1fr 14px 1fr 1.4fr', gap: 12,
                  alignItems: 'center', padding: '7px 0',
                  borderBottom: `1px solid ${palette.border}`,
                  fontFamily: "'Fira Code', monospace", fontSize: 11.5,
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 7, color: palette.text }}>
                    <CMDot color={pc} size={7} />
                    {presetName(preset)}
                  </span>
                  <span style={{ color: palette.textDim }}>→</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 7,
                    color: persona === '*' ? palette.textDim : palette.text }}>
                    <CMDot color={personaColor} size={7} />
                    {persona === '*' ? 'rotiert' : persona}
                  </span>
                  <span style={{ color: palette.textDim, fontSize: 10.5, fontStyle: 'italic' }}>
                    {note}
                  </span>
                </div>
              );
            })}
          </div>
        </CMBox>

        {/* Resolution-Hierarchy + Workspace-3-Ebenen */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Resolution */}
          <CMBox palette={palette} padding={22} elevated accent>
            <CMTag palette={palette} color={palette.accent}>// persona-resolution beim session-start</CMTag>
            <div style={{ marginTop: 14, fontFamily: "'Fira Code', monospace", fontSize: 11.5,
              color: palette.textSecondary, lineHeight: 1.95 }}>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: palette.accent, fontWeight: 700, minWidth: 18 }}>1.</span>
                <span><span style={{ color: palette.text }}>Globale Aktiv-Persona</span>
                  <span style={{ color: palette.textDim }}> — wenn gesetzt: gilt für alle Sessions</span></span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: palette.accent, fontWeight: 700, minWidth: 18 }}>2.</span>
                <span><span style={{ color: palette.text }}>Preset-Override</span>
                  <span style={{ color: palette.textDim }}> — Auswahl im Preset-Editor</span></span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: palette.accent, fontWeight: 700, minWidth: 18 }}>3.</span>
                <span><span style={{ color: palette.text }}>Default-Matrix</span>
                  <span style={{ color: palette.textDim }}> — Empfehlung aus dem Pack</span></span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <span style={{ color: palette.textDim, minWidth: 18 }}>↓</span>
                <span style={{ color: palette.textDim, fontStyle: 'italic' }}>
                  Hardcoded Fallback: Relay
                </span>
              </div>
            </div>
          </CMBox>

          {/* System-Prompt 3-Ebenen */}
          <CMBox palette={palette} padding={22} elevated>
            <CMTag palette={palette} color={palette.accent}>// system-prompt · 3 ebenen pro session</CMTag>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { layer: 'Preset', sub: 'Rolle, Phasen, Tools, Grenzen', color: palette.presets.cyberFactory },
                { layer: 'Persona', sub: 'Tonalität, Stilistik (Hut)', color: palette.personas.cipher },
                { layer: 'Workspace', sub: 'Projekt-Pfade, Memory, Custom-Prompt-Teile', color: palette.accent },
              ].map(({ layer, sub, color }) => (
                <div key={layer} style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '8px 12px', background: palette.bgSunken, border: `1px solid ${palette.border}`,
                  fontFamily: "'Fira Code', monospace", fontSize: 11,
                }}>
                  <span style={{ width: 4, height: 28, background: color, flexShrink: 0 }} />
                  <span style={{ color: palette.text, fontWeight: 600, minWidth: 90 }}>{layer}</span>
                  <span style={{ color: palette.textSecondary }}>{sub}</span>
                </div>
              ))}
              <div style={{ marginTop: 4, fontFamily: "'Fira Code', monospace", fontSize: 10.5,
                color: palette.textDim, lineHeight: 1.5 }}>
                Workspace gibt projektspezifischen Kontext mit ins System-Prompt — Pfade,
                aktive Projekte, Workspace-Memory-Highlights. Damit weiß die Session,
                <em> wo</em> sie arbeitet, nicht nur <em>was</em> sie tun und <em>wie</em> sie sprechen soll.
              </div>
            </div>
          </CMBox>
        </div>
      </div>
    </SectionShell>
  );
};

// ─── 07 · Voice & TTS ───────────────────────────────────────────────────
const SecVoice = ({ palette, sp }) => (
  <SectionShell id="voice" num="07" kicker="Hands-Free" title="Voice & TTS"
    palette={palette} sp={sp}
    lead="Sprechen statt tippen. Lokale Whisper-Erkennung — keine Cloud, keine Internetpflicht. VAD erkennt Sprechpausen. Voice-Commands für Submit, Scroll, Grid-Navigation. STT-Pin fixiert auf eine Session. BT-Shutter als physischer Submit-Button."
  >
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
      {[
        { k: 'whisper.cpp', sub: 'lokal · keine cloud',
          lines: ['VAD: erkennt pausen', 'review-then-submit', 'transkript zuerst sichtbar'] },
        { k: 'voice cmds', sub: 'sprache → aktion',
          lines: ['"abschicken" / "senden"', '"hoch" / "runter"', '"zum marker"'] },
        { k: 'grid nav', sub: 'fokus per stimme',
          lines: ['"grid links/rechts"', '"grid hoch/runter"', 'fuzzy: "grit", "zelle"'] },
        { k: 'BT shutter', sub: 'physischer submit',
          lines: ['STT-Pin auf session', 'BT-klick → send', 'komplett händefrei'] },
      ].map(b => (
        <CMBox key={b.k} palette={palette} padding={20} elevated>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 13,
            color: palette.accent, letterSpacing: 0.5 }}>● {b.k}</div>
          <div style={{ fontSize: 10, color: palette.textDim, letterSpacing: 1.2,
            textTransform: 'uppercase', marginTop: 4 }}>{b.sub}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0',
            fontFamily: "'Fira Code', monospace", fontSize: 11.5, lineHeight: 1.9,
            color: palette.textSecondary }}>
            {b.lines.map(l => <li key={l}><span style={{ color: palette.textDim }}>▸</span>&nbsp;{l}</li>)}
          </ul>
        </CMBox>
      ))}
    </div>

    {/* TTS strip */}
    <div style={{ marginTop: 22, padding: 22, background: palette.bgSunken,
      border: `1px solid ${palette.border}`,
      clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      display: 'flex', alignItems: 'center', gap: 24,
    }}>
      <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
        color: palette.text, letterSpacing: -0.3 }}>TTS</div>
      <div style={{ flex: 1, fontFamily: "'Fira Code', monospace", fontSize: 12,
        color: palette.textSecondary, lineHeight: 1.6 }}>
        Jede Entity-Session kann Text vorlesen lassen. Piper im Voice-Modus,
        macOS&nbsp;<code>say</code> als Fallback. Companion nutzt TTS für Erklärungen,
        Analogien, Zusammenfassungen — kein Code, nur natürliche Sprache.
      </div>
      <div style={{ display: 'flex', gap: 8, fontFamily: "'Fira Code', monospace",
        fontSize: 10, color: palette.textDim, letterSpacing: 1.4, textTransform: 'uppercase' }}>
        <span style={{ padding: '4px 10px', border: `1px solid ${palette.border}` }}>NORMAL</span>
        <span style={{ padding: '4px 10px', border: `1px solid ${palette.accent}`, color: palette.accent }}>INTERRUPT</span>
      </div>
    </div>
  </SectionShell>
);

// ─── 08 · Notes & Memory ────────────────────────────────────────────────
const SecNotes = ({ palette, sp }) => (
  <SectionShell id="notes" num="08" kicker="Wissen" title="Notes & Companion-Memory"
    palette={palette} sp={sp}
    lead="Ein integrierter Markdown-Editor mit YAML-Frontmatter und Auto-Tagging. Persistentes Memory mit SQLite/FTS5 für Entities die sich Fakten merken sollen. Handoff-Notes für Session-zu-Session-Wissenstransfer. Alles durchsuchbar, alles MCP-zugreifbar."
  >
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 20 }}>
      <CMBox palette={palette} padding={26} elevated>
        <CMTag palette={palette} color={palette.accent}>// notes editor</CMTag>
        <div style={{ marginTop: 12, fontFamily: "'Rajdhani', sans-serif", fontSize: 22,
          fontWeight: 700, color: palette.text }}>CodeMirror 6 · Markdown live</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0',
          fontFamily: "'Fira Code', monospace", fontSize: 12.5, lineHeight: 1.95,
          color: palette.textSecondary }}>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; YAML-Frontmatter (Titel, Tags)</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Auto-Save nach 2s · Cmd+S triggert Auto-Tagging</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Ollama gemma3:4b (lokal) für Tag-Vorschläge</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Global oder Workspace-scoped</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Tag-Tree in der Sidebar (NotesTreeView)</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; TestcaseView mit Checkboxen + Screenshots</li>
          <li><span style={{ color: palette.accent }}>▸</span>&nbsp; Voller MCP-Zugriff: lesen, schreiben, suchen, handoff</li>
        </ul>
      </CMBox>

      <CMBox palette={palette} padding={26} elevated accent>
        <CMTag palette={palette} color={palette.accent}>// companion memory</CMTag>
        <div style={{ marginTop: 12, fontFamily: "'Rajdhani', sans-serif", fontSize: 22,
          fontWeight: 700, color: palette.text }}>SQLite · FTS5 · persistent</div>
        <CMBodyText palette={palette} sp={sp} style={{ marginTop: 12, marginBottom: 16, fontSize: 13 }}>
          Companion, Refinement, Voice-Relay merken sich Fakten, Präferenzen,
          Interaktionen, Ereignisse — über Sessions hinweg.
        </CMBodyText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
          fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textSecondary }}>
          {['Fakten', 'Präferenzen', 'Interaktionen', 'Ereignisse'].map(c => (
            <div key={c} style={{ padding: '8px 10px', border: `1px solid ${palette.border}`,
              clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)',
              color: palette.text }}>
              <span style={{ color: palette.accent, marginRight: 6 }}>●</span>{c}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, fontFamily: "'Fira Code', monospace", fontSize: 11,
          color: palette.textDim, lineHeight: 1.7 }}>
          Salienz-Bewertung 0–1 · transparent · vom User löschbar<br/>
          MCP-Tools: <code style={{ color: palette.text }}>write · recall · search · forget</code>
        </div>
      </CMBox>
    </div>
  </SectionShell>
);

// ─── 09 · MCP — kompakt ─────────────────────────────────────────────────
const MCP_CATEGORIES = [
  { name: 'Session Mgmt',    count: 6, ex: 'create · kill · focus · eject' },
  { name: 'Message Bus',     count: 2, ex: 'send · read' },
  { name: 'Context Monitor', count: 1, ex: 'context_status' },
  { name: 'Task Queue',      count: 4, ex: 'create · update · list · get' },
  { name: 'Bug Reports',     count: 1, ex: 'resolve' },
  { name: 'Input Requests',  count: 1, ex: 'create' },
  { name: 'Notes',           count: 8, ex: 'CRUD · search · handoff_*' },
  { name: 'Companion Memory',count: 4, ex: 'write · recall · search · forget' },
  { name: 'App Control',     count: 10, ex: 'grid · sidebar · theme · choreography' },
];

const SecMCP = ({ palette, sp }) => (
  <SectionShell id="mcp" num="09" kicker="Verbindungsschicht" title="MCP-Server — 37 Tools, 9 Kategorien"
    palette={palette} sp={sp}
    lead="Eingebauter HTTP-Server (Streamable HTTP). Bearer-Token-Auth pro Entity. Externe MCP-Clients können sich verbinden. Kategorien-Übersicht — die volle Liste lebt in der GitHub-Doku."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
    }}>
      {MCP_CATEGORIES.map((c, i) => (
        <div key={c.name} style={{
          padding: '16px 18px', border: `1px solid ${palette.border}`,
          background: palette.bgElevated,
          clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
              fontSize: 16, color: palette.text }}>{c.name}</span>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11,
              color: palette.accent, letterSpacing: 1 }}>{String(c.count).padStart(2, '0')}</span>
          </div>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10.5,
            color: palette.textDim, letterSpacing: 0.3, lineHeight: 1.5 }}>
            {c.ex}
          </div>
        </div>
      ))}
    </div>
    <div style={{
      marginTop: 18, padding: '14px 18px', background: palette.bgSunken,
      border: `1px solid ${palette.border}`,
      fontFamily: "'Fira Code', monospace", fontSize: 11.5, color: palette.textSecondary,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
    }}>
      <span><span style={{ color: palette.accent }}>▸</span>&nbsp; Bearer-Token wird pro Entity automatisch injiziert</span>
      <span><span style={{ color: palette.accent }}>▸</span>&nbsp; Streamable HTTP — Standard MCP-Spec</span>
      <span style={{ color: palette.text }}>github.com/.../mcp ↗</span>
    </div>
  </SectionShell>
);

// ─── 10 · Themes ────────────────────────────────────────────────────────
const SecThemes = ({ palette, sp }) => {
  const themes = [
    { name: 'cipher-ivory', light: '#F4F3ED', dark: '#1A1A1D', tag: 'Light Default' },
    { name: 'cipher-dark',  light: '#1F1F23', dark: '#E8E6DD', tag: 'Dark Default' },
    { name: 'blueprint',    light: '#0E2B47', dark: '#7FB3FF', tag: '' },
    { name: 'warm-paper',   light: '#F1E9D2', dark: '#3A2E1F', tag: '' },
    { name: 'gruvbox-dark', light: '#282828', dark: '#FBF1C7', tag: '' },
    { name: 'nord',         light: '#2E3440', dark: '#88C0D0', tag: 'Nord' },
    { name: 'synthwave',    light: '#1A0E2E', dark: '#FF6EC7', tag: '' },
    { name: 'matrix',       light: '#000000', dark: '#33FF66', tag: '' },
    { name: 'brutalist',    light: '#FFFFFF', dark: '#000000', tag: '' },
    { name: 'high-contrast',light: '#000000', dark: '#FFFFFF', tag: 'WCAG AAA' },
  ];
  return (
    <SectionShell id="themes" num="10" kicker="Visuelle Stile" title="10 Themes — inkl. WCAG AAA"
      palette={palette} sp={sp}
      lead="Theme-Wechsel per Klick auf den Theme-Namen in der Statusbar. Cycled durch. Auch per MCP steuerbar (mux_theme_set). High-Contrast ist nicht Spielerei — Barrierefreiheit ist Kernprinzip."
    >
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8,
      }}>
        {themes.map((t, i) => (
          <div key={t.name} style={{
            border: `1px solid ${palette.border}`,
            clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            <div style={{ height: 56, background: t.light, display: 'flex',
              alignItems: 'flex-end', padding: 6 }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9,
                color: t.dark, opacity: 0.85 }}>{t.name}</span>
            </div>
            <div style={{ height: 16, background: t.dark }} />
            {t.tag && <div style={{
              padding: '4px 8px', fontFamily: "'Fira Code', monospace", fontSize: 9,
              color: palette.accent, letterSpacing: 1, textTransform: 'uppercase',
              borderTop: `1px solid ${palette.border}`, background: palette.bg,
            }}>{t.tag}</div>}
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

// ─── 11 · Barrierefreiheit ──────────────────────────────────────────────
const SecAccess = ({ palette, sp }) => (
  <SectionShell id="access" num="11" kicker="Kernprinzip" title="Barrierefreiheit"
    palette={palette} sp={sp}
    lead="Kein Feature-Checkbox, sondern bewusste Designentscheidung. Sensorisch, kognitiv, technisch — Hürden runter, wo immer möglich."
  >
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      {[
        { k: 'Sensorisch', items: [
          'WCAG AAA High-Contrast Theme',
          'Voice Input als Tastatur-Alternative',
          'Voice Scroll & Grid-Navigation',
          'BT-Remote als physischer Button',
          'TTS für Kernaussagen',
        ]},
        { k: 'Kognitiv', items: [
          'Companion erklärt mit Analogien',
          'Ein Konzept pro Erklärung',
          'Worked → Guided → Independent',
          'Guides von Einsteiger bis Power-User',
          'Tutorials/How-To/Reference getrennt',
        ]},
        { k: 'Technisch', items: [
          'Grid abstrahiert tmux komplett',
          'Projekt-Scanner statt Pfad-Tippen',
          'Statusbar als klickbare Buttons',
          'Auto-Recovery nach Crash',
          'Kein Terminal-Wissen nötig',
        ]},
      ].map(({ k, items }) => (
        <CMBox key={k} palette={palette} padding={24} elevated>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
            color: palette.text, letterSpacing: -0.3, marginBottom: 14 }}>{k}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0,
            fontFamily: "'Fira Code', monospace", fontSize: 12, lineHeight: 1.9,
            color: palette.textSecondary }}>
            {items.map(it => (
              <li key={it} style={{ display: 'flex', gap: 8 }}>
                <span style={{ color: palette.accent, flexShrink: 0 }}>▸</span>{it}
              </li>
            ))}
          </ul>
        </CMBox>
      ))}
    </div>
  </SectionShell>
);

// ─── 12 · Effizienz ─────────────────────────────────────────────────────
const SecEfficiency = ({ palette, sp }) => (
  <SectionShell id="efficiency" num="12" kicker="Eingebaute Intelligenz" title="Effizienz"
    palette={palette} sp={sp}
    lead="Best Practices als Mechanik, nicht als Ratgeber. Kontext-Monitoring, Multi-Model-Routing, Handover-Pattern, Doom-Loop-Prevention — direkt in die App eingebaut."
  >
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
      {[
        { k: 'StatusLine Monitor', d: 'Echtzeit-Kontextverbrauch pro Zelle. Grün → orange (80%) → rot (90%).' },
        { k: 'Orchestrator-Watch', d: 'Prüft Workers alle 2 Minuten. Bei 90%: finish, summarize, frischer Worker.' },
        { k: 'Message Bus', d: 'Async Messaging zwischen Sessions. Wenige Dutzend Tokens statt Tausende für shared Conversation.' },
        { k: 'Multi-Model-Routing', d: 'Orchestrator (Opus), Workers (Sonnet), einfache Tasks (Haiku). Richtiges Modell für richtige Aufgabe.' },
        { k: 'Handover-Pattern', d: 'Zusammenfassung → neue Session → weitermachen. Kein Qualitätsverlust durch volle Kontexte.' },
        { k: 'Doom-Loop-Prevention', d: 'Nach 2 gescheiterten Fixes: neue Session. Confirmation-Trap-Vermeidung in CLAUDE.md.' },
      ].map(({ k, d }, i) => (
        <div key={k} style={{
          padding: '16px 20px', border: `1px solid ${palette.border}`,
          background: palette.bg, display: 'flex', alignItems: 'flex-start', gap: 16,
        }}>
          <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11,
            color: palette.accent, letterSpacing: 1, flexShrink: 0, paddingTop: 2 }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 16, fontWeight: 600,
              color: palette.text, letterSpacing: 0.2, marginBottom: 4 }}>{k}</div>
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 12,
              color: palette.textSecondary, lineHeight: 1.6 }}>{d}</div>
          </div>
        </div>
      ))}
    </div>
  </SectionShell>
);

// ─── Bottom CTA ─────────────────────────────────────────────────────────
const SecBottomCTA = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 0.85}px ${sp.sectionPadX}px`,
    paddingRight: sp.sectionPadX + 200,
    borderTop: `1px solid ${palette.border}`, background: palette.bgSunken,
    textAlign: 'center',
  }}>
    <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textDim,
      letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 14 }}>// genug gelesen?</div>
    <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 56,
      lineHeight: 1, margin: 0, color: palette.text, letterSpacing: -0.5 }}>
      Probier&apos;s einfach aus<span style={{ color: palette.accent }}>.</span>
    </h2>
    <p style={{ marginTop: 18, marginBottom: 28, fontFamily: "'Fira Code', monospace",
      fontSize: 14, color: palette.textSecondary, lineHeight: 1.7 }}>
      Open Source, MIT, kein Tracking. Du installierst, du behältst die Kontrolle.
    </p>
    <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
      <span style={{ padding: '12px 28px', background: palette.accent, color: palette.bg,
        fontFamily: "'Fira Code', monospace", fontSize: 12, letterSpacing: 1.5,
        textTransform: 'uppercase',
        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      }}>Loslegen</span>
      <span style={{ padding: '12px 28px', background: 'transparent', color: palette.text,
        border: `1px solid ${palette.border}`,
        fontFamily: "'Fira Code', monospace", fontSize: 12, letterSpacing: 1.5,
        textTransform: 'uppercase',
        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      }}>Auf GitHub ansehen</span>
    </div>
  </section>
);

Object.assign(window, {
  SectionShell, SecCockpit, SecGrid, SecSessions, SecPersonas, SecPresets,
  SecMatrix, SecVoice, SecNotes, SecMCP, SecThemes, SecAccess, SecEfficiency,
  SecBottomCTA,
});
