// CIPHER-MUX components — Header, Hero variants, Pillar variants, Not, Footer
// Shared across artboards. Compose with theme classes (cm-light / cm-dark).

const Header = ({ accent }) => (
  <header className="cm-header">
    <div className="cm-wordmark" style={accent ? { color: 'var(--accent)' } : null}>CIPHER-MUX</div>
    <nav className="cm-nav">
      <a href="#">Features</a>
      <a href="#">Download</a>
      <a href="#">Community</a>
      <button className="cm-theme-toggle" title="Theme wechseln" />
    </nav>
  </header>
);

// ─── HERO Variant A: Pixel grid (mockup baseline) ───────────────────────
const HeroPixel = () => (
  <section style={{
    minHeight: 460, display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    padding: '72px 32px', position: 'relative', gap: 18,
  }}>
    <div className="cm-grid-bg" />
    <div className="cm-pixel-grid" style={{ position: 'relative' }}>
      {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
    </div>
    <div className="cm-label-tag" style={{ position: 'relative' }}>Open Source · macOS · MIT</div>
    <h1 className="cm-tagline" style={{ position: 'relative' }}>Dein Coding-Cockpit.</h1>
    <p className="cm-hero-sub" style={{ position: 'relative' }}>
      <strong>CIPHER-MUX</strong> macht KI-gestuetztes Bauen zugaenglich, transparent und lehrbar.
      Fuer alle die Ideen haben — und endlich selbst anfangen wollen.
    </p>
    <div style={{ display: 'flex', gap: 12, position: 'relative', marginTop: 18 }}>
      <a href="#" className="cm-btn cm-btn--primary">Loslegen</a>
      <a href="#" className="cm-btn">Features</a>
      <a href="#" className="cm-btn">GitHub</a>
    </div>
  </section>
);

// ─── HERO Variant B: ASCII terminal mock background ─────────────────────
const ASCII_BLOCK = `
┌─[0,0]·×2─────────────────┐  ┌─[1,0]──────────────────┐
│ > orchestrator           │  │ > companion            │
│   delegating to worker-3 │  │   onboarding tutorial  │
│   ▶ build dark-toggle    │  │   memory: 14 entries   │
│ ──────────────────────── │  │                        │
│ ✓ task-1  read structure │  │ "Du sagst was du       │
│ ▶ task-2  scaffold ui    │  │  willst. Nicht wie."   │
│ □ task-3  wire state     │  │                        │
└──────────────────────────┘  └────────────────────────┘
┌─[0,1]──────────────────┐    ┌─[1,1]──────────────────┐
│ > refinement           │    │ > voice-relay          │
│   reviewing diff       │    │   listening …          │
│ ──────────────────────│    │   "grid rechts"        │
│ +  3 hunks    ~ 2 files│    │ ──────────────────────│
└────────────────────────┘    └────────────────────────┘`;

const HeroTerminal = () => (
  <section style={{
    minHeight: 520, display: 'flex', flexDirection: 'column',
    justifyContent: 'center', alignItems: 'center', textAlign: 'center',
    padding: '80px 32px', position: 'relative', gap: 20, overflow: 'hidden',
  }}>
    <pre style={{
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Fira Code', monospace", fontSize: 11, lineHeight: 1.5,
      color: 'var(--text-dim)', opacity: 0.18, margin: 0, pointerEvents: 'none',
      whiteSpace: 'pre', userSelect: 'none',
    }}>{ASCII_BLOCK}</pre>
    <div className="cm-grid-bg" />
    <div className="cm-label-tag" style={{ position: 'relative' }}>v0.9.9 · macOS · MIT</div>
    <h1 className="cm-tagline" style={{ position: 'relative' }}>
      Dein Coding-Cockpit<span style={{ color: 'var(--accent)' }}>.</span>
    </h1>
    <p className="cm-hero-sub" style={{ position: 'relative' }}>
      <strong>CIPHER-MUX</strong> macht KI-gestuetztes Bauen zugaenglich, transparent und lehrbar.
      Fuer alle die Ideen haben — und endlich selbst anfangen wollen.
    </p>
    <div style={{ display: 'flex', gap: 12, position: 'relative', marginTop: 12 }}>
      <a href="#" className="cm-btn cm-btn--primary">Loslegen</a>
      <a href="#" className="cm-btn">Features</a>
      <a href="#" className="cm-btn">GitHub</a>
    </div>
  </section>
);

// ─── HERO Variant C: Schematic — the REAL cockpit (mux view, not editor) ─
// Reference: full-height session panes side-by-side, like the screenshot
// of cipher-mux-electron + cipher-mux-site running together. Each pane
// has its own header with [tab][controls], code/output in monospace,
// and a "bypass permissions on" footer line. Statusbar across the bottom.
const SessionPane = ({ tab, color, focused, children }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', minHeight: 0,
    background: 'var(--bg)', border: '1px solid var(--border)',
    boxShadow: focused ? 'inset 0 0 0 1px var(--accent)' : 'none',
  }}>
    {/* tab bar */}
    <div style={{
      display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)',
      fontFamily: "'Fira Code', monospace", fontSize: 9, color: 'var(--text-dim)',
      background: 'var(--bg-sunken)', flexShrink: 0,
    }}>
      <span style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px',
        background: 'var(--bg)', borderRight: '1px solid var(--border)',
        color: 'var(--text)', letterSpacing: 0.6,
      }}>
        <span style={{ width: 6, height: 6, background: color, display: 'inline-block' }} />
        {tab}
      </span>
      <span style={{ marginLeft: 'auto', padding: '5px 10px', letterSpacing: 1.5, opacity: 0.6 }}>
        i  ‹ › s ×
      </span>
    </div>
    {/* body */}
    <div style={{
      flex: 1, padding: '8px 10px', fontFamily: "'Fira Code', monospace",
      fontSize: 9.5, lineHeight: 1.55, color: 'var(--text-secondary)',
      display: 'flex', flexDirection: 'column', gap: 2, overflow: 'hidden',
    }}>
      {children}
    </div>
    {/* permissions footer */}
    <div style={{
      borderTop: '1px solid var(--border)', padding: '5px 10px',
      fontFamily: "'Fira Code', monospace", fontSize: 9, color: 'var(--accent)',
      letterSpacing: 0.6, flexShrink: 0,
    }}>
      ▸▸ bypass permissions on <span style={{ opacity: 0.5 }}>(shift+tab to cycle)</span>
    </div>
  </div>
);

const codeLine = (txt, color) => <div style={{ color: color || 'var(--text-secondary)' }}>{txt}</div>;

const HeroSchematic = () => (
  <section style={{
    display: 'grid', gridTemplateColumns: '1fr 580px', gap: 56, alignItems: 'center',
    padding: '76px 48px 88px', position: 'relative',
  }}>
    <div className="cm-grid-bg" />

    {/* LEFT — copy block */}
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 22, textAlign: 'left' }}>
      <div className="cm-label-tag" style={{ alignSelf: 'flex-start' }}>v0.9.9 · macOS · MIT</div>
      <h1 className="cm-tagline" style={{ fontSize: 68, lineHeight: 0.98 }}>
        Dein<br/>Coding-Cockpit<span style={{ color: 'var(--accent)' }}>.</span>
      </h1>
      <p className="cm-hero-sub" style={{ maxWidth: 480, fontSize: 14.5 }}>
        <strong>CIPHER-MUX</strong> orchestriert mehrere Claude-Code-Sessions
        parallel — sichtbar, steuerbar, lehrbar.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <a href="#" className="cm-btn cm-btn--primary">Loslegen</a>
        <a href="#" className="cm-btn">Features</a>
        <a href="#" className="cm-btn">GitHub</a>
      </div>
    </div>

    {/* RIGHT — real mux cockpit */}
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column',
      background: 'var(--bg-sunken)', border: '1px solid var(--border)',
    }}>
      {/* macOS chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
        borderBottom: '1px solid var(--border)', flexShrink: 0,
      }}>
        <span style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 9, height: 9, background: '#FF5F57', display: 'inline-block' }} />
          <span style={{ width: 9, height: 9, background: '#FEBC2E', display: 'inline-block' }} />
          <span style={{ width: 9, height: 9, background: '#28C840', display: 'inline-block' }} />
        </span>
        <span style={{
          marginLeft: 14, fontFamily: "'Fira Code', monospace", fontSize: 9,
          color: 'var(--text)', letterSpacing: 1.6, textTransform: 'uppercase',
        }}>● cipher-mux</span>
      </div>

      {/* two session panes side-by-side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, padding: 6, height: 280 }}>
        <SessionPane tab="coding-companion" color="var(--preset-companion)" focused>
          {codeLine('Du hilfst mir, neue Features zu strukturieren.', 'var(--text)')}
          {codeLine('Wir starten mit einem leichten Audit:')}
          {codeLine('- bestehende Patterns erkennen')}
          {codeLine('- Lücken benennen')}
          {codeLine('- nächste Schritte vorschlagen')}
          {codeLine('')}
          {codeLine('● Reading project structure… (12s · 2.1k tokens)', 'var(--accent)')}
          {codeLine('  ✓ docs/ ·  konzept v0.1, umsetzung v0.1', 'var(--neon-green)')}
          {codeLine('  ✓ src/ ·  pages, components, styles', 'var(--neon-green)')}
          {codeLine('  ▶ writing analysis to brain/companion/', 'var(--text)')}
          {codeLine('  □ propose 3 next-step options', 'var(--text-dim)')}
          {codeLine('')}
          {codeLine('Memory: 14 entries · last seen 2m ago', 'var(--text-dim)')}
        </SessionPane>
        <SessionPane tab="cyber-factory" color="var(--preset-mpo)">
          {codeLine('● Multi-Project Orchestration', 'var(--accent)')}
          {codeLine('  10-phase lifecycle · 3 active')}
          {codeLine('')}
          {codeLine('  ✓ ideate     — concept v0.1', 'var(--neon-green)')}
          {codeLine('  ✓ scope      — req-IDs locked', 'var(--neon-green)')}
          {codeLine('  ▶ scaffold   — project skeleton', 'var(--text)')}
          {codeLine('  □ implement  · review · ship', 'var(--text-dim)')}
          {codeLine('')}
          {codeLine('Active workers:')}
          {codeLine('  worker-1 · launcher    · scaffolding')}
          {codeLine('  worker-2 · refinement  · reviewing PRs')}
          {codeLine('  worker-3 · audit       · idle')}
          {codeLine('')}
          {codeLine('next: phase-3 → handoff', 'var(--text)')}
        </SessionPane>
      </div>

      {/* statusbar — single elegant row, no wrap */}
      <div style={{
        display: 'flex', alignItems: 'center', height: 28, fontSize: 9,
        fontFamily: "'Fira Code', monospace", color: 'var(--text-dim)',
        borderTop: '1px solid var(--border)',
        flexShrink: 0, letterSpacing: 0.8, whiteSpace: 'nowrap',
      }}>
        <span style={{ padding: '0 12px', borderRight: '1px solid var(--border)', display: 'flex', gap: 8 }}>
          <span style={{ color: 'var(--accent)' }}>● OFF</span>
          <span>STT</span>
          <span>COM</span>
        </span>
        <span style={{ padding: '0 12px', borderRight: '1px solid var(--border)', color: 'var(--text)' }}>coding-companion</span>
        <span style={{ padding: '0 12px', borderRight: '1px solid var(--border)' }}>spalten 2 + · zeilen 2 +</span>
        <span style={{ padding: '0 12px', borderRight: '1px solid var(--border)' }}>nord</span>
        <span style={{
          marginLeft: 'auto', padding: '3px 9px', marginRight: 8,
          border: '1px solid var(--border)', color: 'var(--text)',
        }}>v0.9.9-dev</span>
      </div>
    </div>
  </section>
);

// ─── PILLARS Variant A: Pixel-art icons (mockup) ────────────────────────
const PixelIcon = ({ pattern, accent }) => {
  const cells = Array.from({ length: 25 }).map((_, i) => {
    const r = Math.floor(i / 5), c = i % 5;
    let fill = null, op = 1;
    if (pattern === 'diagonal') {
      if (r === c) { fill = accent; }
      else if (r === c - 1) { fill = 'var(--text-dim)'; op = 0.4; }
    } else if (pattern === 'flow') {
      if (r === 0) { fill = 'var(--neon-green)'; op = 0.5; }
      else if (r === 2) { fill = 'var(--neon-green)'; op = 1; }
      else if (r === 4) { fill = accent; }
    } else if (pattern === 'eye') {
      if (i === 2) fill = accent;
      if (i === 6 || i === 8) { fill = 'var(--text-dim)'; op = 0.5; }
      if (i === 10 || i === 14) { fill = 'var(--text-dim)'; op = 0.3; }
      if (i === 11 || i === 12 || i === 13) fill = accent;
      if (i === 16 || i === 18) { fill = 'var(--text-dim)'; op = 0.5; }
      if (i === 22) { fill = accent; op = 0.5; }
    } else if (pattern === 'inclusive') {
      if ([0, 4, 12, 20, 24].includes(i)) { fill = accent; }
      else { fill = 'transparent'; op = 1; }
    }
    const border = pattern === 'inclusive' && fill === 'transparent'
      ? '1px solid var(--text-dim)' : 'none';
    const opacity = pattern === 'inclusive' && fill === 'transparent' ? 0.3 : op;
    return <span key={i} style={{ background: fill || 'transparent', opacity, border }} />;
  });
  return (
    <div style={{
      display: 'inline-grid', gridTemplateColumns: 'repeat(5, 6px)', gridTemplateRows: 'repeat(5, 6px)',
      gap: 2, marginBottom: 16,
    }}>{cells}</div>
  );
};

const PILLAR_DATA = [
  { title: 'Beschreiben statt coden', body: 'Du sagst was du willst. Nicht wie. Spezialisierte KI-Agenten setzen um — parallel, sichtbar, steuerbar.', pattern: 'diagonal' },
  { title: 'Von der Idee zum Projekt', body: 'Fuenf Phasen, fuenf Denkweisen — ein Cockpit das dich durch den gesamten Prozess fuehrt. Nicht Prompt rein, Code raus.', pattern: 'flow' },
  { title: 'Lernen durch Machen', body: 'Alles liegt offen. Jeder Prompt sichtbar, jede Entscheidung nachvollziehbar. Kein Black-Box-Gefuehl.', pattern: 'eye' },
  { title: 'Fuer alle', body: 'Voice Input, High-Contrast, eingebauter Lehr-Assistent. Die Huerde ist so niedrig wie wir sie kriegen koennen.', pattern: 'inclusive' },
];

const PillarsPixel = () => (
  <section className="cm-pillars">
    {PILLAR_DATA.map((p, i) => (
      <div key={i} className="cm-pillar">
        <PixelIcon pattern={p.pattern} accent="var(--accent)" />
        <h3>{p.title}</h3>
        <p>{p.body}</p>
        <a className="cm-pillar-link" href="#">Mehr erfahren</a>
      </div>
    ))}
  </section>
);

// ─── PILLARS Variant B: Preset-color markers (lifted from the app) ──────
const PRESET_PILLARS = [
  { title: 'Beschreiben statt coden', body: 'Du sagst was du willst. Nicht wie. Spezialisierte KI-Agenten setzen um — parallel, sichtbar, steuerbar.',
    color: 'var(--preset-orchestrator)', tag: 'orchestrator' },
  { title: 'Von der Idee zum Projekt', body: 'Fuenf Phasen, fuenf Denkweisen — ein Cockpit das dich durch den gesamten Prozess fuehrt.',
    color: 'var(--preset-launcher)', tag: 'project-launcher' },
  { title: 'Lernen durch Machen', body: 'Alles liegt offen. Jeder Prompt sichtbar, jede Entscheidung nachvollziehbar. Kein Black-Box-Gefuehl.',
    color: 'var(--preset-companion)', tag: 'companion' },
  { title: 'Fuer alle', body: 'Voice Input, High-Contrast, eingebauter Lehr-Assistent. Die Huerde ist so niedrig wie moeglich.',
    color: 'var(--preset-voice)', tag: 'voice-relay' },
];

const PillarsPreset = () => (
  <section className="cm-pillars">
    {PRESET_PILLARS.map((p, i) => (
      <div key={i} className="cm-pillar" style={{ padding: '44px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
          <span style={{
            width: 22, height: 22, background: p.color, display: 'inline-block', flexShrink: 0,
            clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
          }} />
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10.5,
            color: 'var(--text-dim)', letterSpacing: 1.6, textTransform: 'lowercase',
          }}>&gt; {p.tag}</span>
          <span style={{
            marginLeft: 'auto', fontFamily: "'Fira Code', monospace",
            fontSize: 10, color: 'var(--text-dim)', opacity: 0.6, letterSpacing: 1.2,
          }}>0{i + 1}</span>
        </div>
        <h3 style={{ fontSize: 24, marginBottom: 10 }}>{p.title}</h3>
        <p style={{ maxWidth: 380 }}>{p.body}</p>
        <a className="cm-pillar-link" href="#">Mehr erfahren</a>
      </div>
    ))}
  </section>
);

// ─── PILLARS Variant C: Numbered, hairline, no icons ────────────────────
const PillarsMinimal = () => (
  <section className="cm-pillars">
    {PILLAR_DATA.map((p, i) => (
      <div key={i} className="cm-pillar">
        <div style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 36,
          color: 'var(--accent)', lineHeight: 1, marginBottom: 18,
          letterSpacing: 1,
        }}>0{i + 1}<span style={{ color: 'var(--text-dim)', fontWeight: 500 }}>/04</span></div>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
        <a className="cm-pillar-link" href="#">Mehr erfahren</a>
      </div>
    ))}
  </section>
);

// ─── NOT-SECTION ────────────────────────────────────────────────────────
const NotSection = () => (
  <section className="cm-not">
    <h3>Was CIPHER-MUX nicht ist</h3>
    <ul>
      <li>Kein fertiges Produkt eines Startups. Ein Seitenprojekt, 100% KI-generiert.</li>
      <li>Kein Ersatz fuer Claude Code. Ein Cockpit das draufsitzt.</li>
      <li>Kein "klick und fertig". Du musst beschreiben koennen was du willst.</li>
      <li>macOS only. Vorerst.</li>
    </ul>
  </section>
);

// ─── FOOTERS ────────────────────────────────────────────────────────────
const FooterPlain = () => (
  <footer className="cm-footer">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <span className="cm-footer-mark">CIPHER-MUX</span>
      <span style={{ opacity: 0.6 }}>v0.9.9 · macOS · MIT</span>
    </div>
    <div className="cm-footer-meta">
      <a href="#">GitHub</a>
      <a href="#">Issues</a>
      <a href="#">Datenschutz</a>
      <a href="#">Impressum</a>
    </div>
  </footer>
);

const FooterStatusbar = () => (
  <footer className="cm-statusbar">
    <span><span className="on">●</span>&nbsp;OFF&nbsp;|&nbsp;<span className="on">STT</span>&nbsp;|&nbsp;COM</span>
    <span>cipher-mux-website</span>
    <span>spalten — 4&nbsp;+ &nbsp; zeilen — 4&nbsp;+</span>
    <span>workspaces · sidebar · nord · einstellungen</span>
    <span><span className="pill">v0.9.9-dev</span></span>
  </footer>
);

// expose to other babel scripts
Object.assign(window, {
  Header, HeroPixel, HeroTerminal, HeroSchematic,
  PillarsPixel, PillarsPreset, PillarsMinimal,
  NotSection, FooterPlain, FooterStatusbar,
});
