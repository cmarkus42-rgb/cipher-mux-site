// CIPHER-MUX Landing v2 — 3 Hero-Alternativen.
// Alle teilen: Tagline + Subtext + Label + CTAs. Unterschied = visuelle Sprache.

const HeroTagline = ({ palette, big = 72 }) => (
  <h1 style={{
    fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
    fontSize: big, lineHeight: 0.96, letterSpacing: -1, margin: 0,
    color: palette.text, textWrap: 'balance',
  }}>
    Agentic Engineering<br />
    <span style={{ color: palette.accent }}>for Makers.</span><br />
    <span style={{ color: palette.textDim, fontSize: big * 0.62 }}>And everyone else.</span>
  </h1>
);

const HeroSub = ({ palette, max = 480 }) => (
  <p style={{
    margin: 0, maxWidth: max,
    fontFamily: "'Fira Code', monospace", fontSize: 14, lineHeight: 1.7,
    color: palette.textSecondary,
  }}>
    Orchestriert <strong style={{ color: palette.text }}>Claude Code</strong> zu einem echten Entwicklungsprozess —
    mit Rollen, Gedächtnis und Stimme.
  </p>
);

const HeroLabel = ({ palette }) => (
  <span style={{
    display: 'inline-block',
    fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: 2.5,
    textTransform: 'uppercase', padding: '5px 12px',
    color: palette.textDim, border: `1px solid ${palette.border}`,
    clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)',
  }}>Open Source · macOS · MIT</span>
);

const HeroCTAs = ({ palette }) => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    {[
      { label: 'Dokumentation', primary: true },
      { label: 'Features' },
      { label: 'GitHub ↗' },
    ].map((b, i) => (
      <span key={b.label} style={{
        padding: '12px 26px',
        fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 1.6,
        textTransform: 'uppercase', cursor: 'pointer',
        background: b.primary ? palette.accent : 'transparent',
        color: b.primary ? palette.bg : palette.text,
        border: `1px solid ${b.primary ? palette.accent : palette.border}`,
        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      }}>{b.label}</span>
    ))}
  </div>
);

// ─── HERO A — Refined Schematic (Cockpit-Mock rechts) ─────────────────
const HeroA = ({ palette }) => (
  <section style={{
    display: 'grid', gridTemplateColumns: '1fr 540px', gap: 56,
    alignItems: 'center', padding: '88px 56px 96px',
    background: palette.bg,
  }}>
    {/* Left — copy */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <HeroLabel palette={palette} />
      <HeroTagline palette={palette} big={64} />
      <HeroSub palette={palette} max={500} />
      <div style={{ marginTop: 10 }}><HeroCTAs palette={palette} /></div>
    </div>

    {/* Right — refined cockpit mock */}
    <div style={{
      background: palette.bgSunken, border: `1px solid ${palette.border}`,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* macOS chrome */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px',
        borderBottom: `1px solid ${palette.border}`,
      }}>
        <span style={{ display: 'flex', gap: 5 }}>
          <span style={{ width: 9, height: 9, background: '#FF5F57' }} />
          <span style={{ width: 9, height: 9, background: '#FEBC2E' }} />
          <span style={{ width: 9, height: 9, background: '#28C840' }} />
        </span>
        <span style={{ marginLeft: 14, fontFamily: "'Fira Code', monospace",
          fontSize: 9.5, color: palette.text, letterSpacing: 1.6, textTransform: 'uppercase' }}>
          ● cipher-mux v0.9.101
        </span>
      </div>

      {/* 4 sessions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6,
        padding: 6, height: 260 }}>
        {[
          { tab: 'ideation-partner', color: '#26a69a',
            lines: ['● Idee analysieren …', 'Recherche · 3 Quellen', 'Konzept v0.2 → notes/'] },
          { tab: 'refinement', color: '#9b86c4',
            lines: ['● Anforderungen schärfen', '✓ REQ-01 · REQ-02', '▸ Übergabe an Factory'] },
          { tab: 'cyber-factory', color: '#5E81AC',
            lines: ['● Welle 5 läuft', 'worker-1 · scaffolding', 'worker-2 · refinement'] },
          { tab: 'coding-companion', color: '#ffb74d',
            lines: ['● Bereit', '"Was bedeutet REQ-01?"', 'Memory: 14 entries'] },
        ].map(p => (
          <div key={p.tab} style={{
            background: palette.bg, border: `1px solid ${palette.border}`,
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 9px', borderBottom: `1px solid ${palette.border}`,
              background: palette.bgSunken,
              fontFamily: "'Fira Code', monospace", fontSize: 9,
              color: palette.text, letterSpacing: 0.5,
            }}>
              <span style={{ width: 6, height: 6, background: p.color }} />
              {p.tab}
            </div>
            <div style={{ padding: '8px 10px', fontFamily: "'Fira Code', monospace",
              fontSize: 9.5, lineHeight: 1.6, color: palette.textSecondary,
              display: 'flex', flexDirection: 'column', gap: 2 }}>
              {p.lines.map((l, i) => (
                <div key={i} style={{ color: i === 0 ? palette.accent : 'inherit' }}>{l}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* status bar */}
      <div style={{
        display: 'flex', alignItems: 'center', height: 26, fontSize: 9,
        fontFamily: "'Fira Code', monospace", color: palette.textDim,
        borderTop: `1px solid ${palette.border}`, letterSpacing: 0.8,
      }}>
        <span style={{ padding: '0 12px', borderRight: `1px solid ${palette.border}` }}>
          <span style={{ color: palette.accent }}>● STT</span>&nbsp;·&nbsp;COM
        </span>
        <span style={{ padding: '0 12px', borderRight: `1px solid ${palette.border}`, color: palette.text }}>
          workspace · 2×2
        </span>
        <span style={{ padding: '0 12px', borderRight: `1px solid ${palette.border}` }}>nord</span>
        <span style={{ marginLeft: 'auto', padding: '3px 9px', marginRight: 10,
          border: `1px solid ${palette.border}`, color: palette.text }}>v0.9.101</span>
      </div>
    </div>
  </section>
);

// ─── HERO B — Workspace-Editor Mock (Workspace-first Story) ───────────
const HeroB = ({ palette }) => (
  <section style={{
    display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 56,
    alignItems: 'center', padding: '88px 56px 96px',
    background: palette.bg,
  }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <HeroLabel palette={palette} />
      <HeroTagline palette={palette} big={62} />
      <HeroSub palette={palette} max={500} />
      <div style={{ marginTop: 10 }}><HeroCTAs palette={palette} /></div>
    </div>

    {/* Workspace Editor Mock */}
    <div style={{
      background: palette.bgElevated, border: `1px solid ${palette.border}`,
      clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
    }}>
      {/* Editor header */}
      <div style={{
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        padding: '14px 18px', borderBottom: `1px solid ${palette.border}`,
        background: palette.bgSunken,
      }}>
        <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
          fontSize: 18, color: palette.text, letterSpacing: 0.2 }}>
          Workspace · „MakerFlow"
        </span>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
          color: palette.textDim, letterSpacing: 1.5, textTransform: 'uppercase' }}>
          editor
        </span>
      </div>

      {/* Workspace-Prompt-Box */}
      <div style={{ padding: '14px 18px', borderBottom: `1px solid ${palette.border}` }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9,
          color: palette.textDim, letterSpacing: 1.4, textTransform: 'uppercase',
          marginBottom: 6 }}>
          // workspace-prompt
        </div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11.5,
          color: palette.text, lineHeight: 1.6 }}>
          Projekt: <span style={{ color: palette.accent }}>~/code/photo-app</span><br />
          Stack: Astro + TypeScript<br />
          Ziel: MVP für Bildverwaltung mit Tags
        </div>
      </div>

      {/* Grid mit Persona-Slots */}
      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9,
          color: palette.textDim, letterSpacing: 1.4, textTransform: 'uppercase',
          marginBottom: 8 }}>
          // grid · 2×2 · persona slots
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, height: 200 }}>
          {[
            { preset: 'companion', persona: 'Wayne', color: '#ffb74d' },
            { preset: 'ideation', persona: 'Sokrates', color: '#26a69a' },
            { preset: 'cyber-factory', persona: 'Cipher', color: '#5E81AC' },
            { preset: 'audit', persona: 'Relay', color: '#7B8394' },
          ].map(c => (
            <div key={c.preset} style={{
              background: palette.bg, border: `1px solid ${palette.border}`,
              clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
              padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: 4,
              fontFamily: "'Fira Code', monospace", fontSize: 9.5,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, background: c.color }} />
                <span style={{ color: palette.text, fontWeight: 500 }}>{c.preset}</span>
              </div>
              <div style={{ color: palette.textDim, marginTop: 'auto' }}>
                persona: <span style={{ color: palette.text }}>{c.persona}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply-Button */}
      <div style={{
        borderTop: `1px solid ${palette.border}`, padding: '12px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: "'Fira Code', monospace", fontSize: 10,
      }}>
        <span style={{ color: palette.textDim, letterSpacing: 1.2 }}>4 Sessions · 4 Personas · 1 Projekt</span>
        <span style={{
          padding: '6px 14px', background: palette.accent, color: palette.bg,
          letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 500,
          clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
        }}>Apply →</span>
      </div>
    </div>
  </section>
);

// ─── HERO C — Statement-only (radikal reduziert) ──────────────────────
const HeroC = ({ palette }) => (
  <section style={{
    padding: '160px 56px 140px', background: palette.bg,
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 28, position: 'relative', overflow: 'hidden',
  }}>
    {/* faint grid in background */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none',
      backgroundImage: `linear-gradient(${palette.textDim} 1px, transparent 1px), linear-gradient(90deg, ${palette.textDim} 1px, transparent 1px)`,
      backgroundSize: '48px 48px',
    }} />
    <div style={{ position: 'relative', maxWidth: 1080, display: 'flex',
      flexDirection: 'column', gap: 28 }}>
      <HeroLabel palette={palette} />
      <h1 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: 'clamp(72px, 9vw, 140px)', lineHeight: 0.92,
        letterSpacing: -2, margin: 0, color: palette.text, textWrap: 'balance',
      }}>
        Agentic Engineering<br />
        <span style={{ color: palette.accent }}>for Makers.</span>{' '}
        <span style={{ color: palette.textDim }}>And everyone else.</span>
      </h1>
      <p style={{
        margin: 0, maxWidth: 720,
        fontFamily: "'Fira Code', monospace", fontSize: 17, lineHeight: 1.6,
        color: palette.textSecondary,
      }}>
        Orchestriert <strong style={{ color: palette.text }}>Claude Code</strong> zu einem echten Entwicklungsprozess —
        mit Rollen, Gedächtnis und Stimme.
      </p>
      <div style={{ marginTop: 10 }}><HeroCTAs palette={palette} /></div>

      {/* Single-line statusbar at bottom for character */}
      <div style={{
        marginTop: 32, padding: '10px 0', borderTop: `1px solid ${palette.border}`,
        display: 'flex', gap: 28, fontFamily: "'Fira Code', monospace",
        fontSize: 10, color: palette.textDim, letterSpacing: 1.5, textTransform: 'uppercase',
      }}>
        <span><span style={{ color: palette.accent }}>● v0.9.101</span></span>
        <span>13 themes</span>
        <span>62 mcp-tools</span>
        <span>built with itself</span>
        <span style={{ marginLeft: 'auto' }}>cipher-mux.dev →</span>
      </div>
    </div>
  </section>
);

Object.assign(window, { HeroA, HeroB, HeroC, HeroTagline, HeroSub, HeroLabel, HeroCTAs });
