// Alternative Pfeiler-Sektionen für Landing v2.
// Jede nimmt PILLARS_V2 (aus landing-v2-sections.jsx) und zeigt sie anders.

// ─── ALT A — Story-Stack (manifest-stil, große Nummern links) ─────────
const PillarsStory = ({ palette, sp }) => (
  <section style={{ padding: `${Math.round(sp.sectionPadY * 0.72)}px ${sp.sectionPadX}px`,
    borderTop: `1px solid ${palette.border}` }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 28,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 01</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Vier Pfeiler · ein Manifest</span>
    </div>
    {PILLARS_V2.map((p, i) => (
      <div key={p.title} className="pillar-story-row" style={{
        display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: 28,
        padding: '24px 0',
        borderBottom: i < PILLARS_V2.length - 1 ? `1px solid ${palette.border}` : 'none',
        alignItems: 'baseline',
      }}>
        <div style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 64,
          lineHeight: 0.9, color: p.color, letterSpacing: -2,
        }}>
          0{i + 1}
          <div style={{ fontSize: 10, fontFamily: "'Fira Code', monospace",
            color: palette.textDim, letterSpacing: 1.5, marginTop: 6, fontWeight: 400 }}>
            // pfeiler
          </div>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 24, margin: '0 0 10px', color: palette.text, lineHeight: 1.15,
            letterSpacing: -0.2 }}>{p.title}</h3>
          <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontWeight: 500,
            fontSize: 15.5, lineHeight: 1.55, color: palette.text }}>{p.description}</p>
        </div>
        <div style={{
          fontFamily: "'Fira Code', monospace", fontSize: 12, lineHeight: 1.7,
          color: palette.textSecondary, borderLeft: `2px solid ${p.color}`, paddingLeft: 16,
        }}>{p.detail}</div>
      </div>
    ))}
    {/* mobile responsive */}
    <style>{`
      @media (max-width: 720px) {
        .pillar-story-row {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
          padding: 22px 0 !important;
        }
        .pillar-story-row > div:first-child {
          font-size: 38px !important;
          display: flex;
          align-items: baseline;
          gap: 12px;
        }
        .pillar-story-row > div:first-child > div {
          margin-top: 0 !important;
        }
        .pillar-story-row > div:last-child {
          padding-left: 12px !important;
          font-size: 12px !important;
        }
      }
    `}</style>
  </section>
);

// ─── ALT B — Tabs (eine Pfeiler-Sektion at a time, größer + reicher) ──
const PillarsTabs = ({ palette, sp }) => {
  const [idx, setIdx] = React.useState(0);
  const p = PILLARS_V2[idx];
  return (
    <section style={{ padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
      borderTop: `1px solid ${palette.border}` }}>
      <div style={{
        fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
        color: palette.textDim, textTransform: 'uppercase', marginBottom: 24,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <span style={{ color: palette.accent }}>// 01</span>
        <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
        <span>Vier Pfeiler — wähle einen</span>
      </div>

      {/* Tab-Strip */}
      <div style={{ display: 'flex', gap: 0, borderBottom: `1px solid ${palette.border}`,
        marginBottom: 36 }}>
        {PILLARS_V2.map((p2, i) => (
          <button key={i} onClick={() => setIdx(i)} style={{
            all: 'unset', cursor: 'pointer', padding: '14px 22px',
            borderBottom: idx === i ? `2px solid ${p2.color}` : '2px solid transparent',
            marginBottom: -1,
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
            fontSize: 15, letterSpacing: 0.2,
            color: idx === i ? palette.text : palette.textDim,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 8, height: 8, background: p2.color, flexShrink: 0 }} />
            <span style={{
              fontFamily: "'Fira Code', monospace", fontSize: 10,
              color: palette.textDim, letterSpacing: 1.4,
            }}>0{i + 1}</span>
            <span>{p2.title}</span>
          </button>
        ))}
      </div>

      {/* Active content */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56, alignItems: 'start',
      }}>
        <div>
          <div style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: p.color, letterSpacing: 1.5, marginBottom: 12,
          }}>// pfeiler 0{idx + 1}</div>
          <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 52, margin: '0 0 20px', color: palette.text, lineHeight: 1.05,
            letterSpacing: -0.7, textWrap: 'balance' }}>{p.title}</h2>
          <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontWeight: 500,
            fontSize: 19, lineHeight: 1.5, color: palette.textSecondary,
            maxWidth: 540, textWrap: 'pretty' }}>{p.description}</p>
        </div>
        <div style={{
          background: palette.bgElevated, border: `1px solid ${palette.border}`,
          borderLeft: `4px solid ${p.color}`,
          padding: '28px 30px',
          clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        }}>
          <div style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.textDim, letterSpacing: 1.5, textTransform: 'uppercase',
            marginBottom: 14,
          }}>// im detail</div>
          <p style={{ margin: 0, fontFamily: "'Fira Code', monospace",
            fontSize: 13, lineHeight: 1.8, color: palette.textSecondary,
            textWrap: 'pretty' }}>{p.detail}</p>
        </div>
      </div>
    </section>
  );
};

// ─── ALT C — Compare-Pairs (Vorher/Nachher pro Pfeiler) ───────────────
const COMPARE_PAIRS = [
  { ...PILLARS_V2[0],
    before: 'Eine Chat-Session für alles. Kontext füllt sich. Ältere Anweisungen verblassen. Tests werden nebenher reingebaut.',
    after:  'Sechs Phasen, sechs Sessions, sechs Kontexte. Übergaben statt Vermischung.' },
  { ...PILLARS_V2[1],
    before: 'Stundenlang Tutorials gucken. Dokumentation überfliegen. Hoffen, dass es klick macht.',
    after:  'Frag den Companion. Er kennt das Handbuch. Er kennt dein Profil. Er erklärt auf deinem Level.' },
  { ...PILLARS_V2[2],
    before: '„KI macht eine Black Box auf, irgendwas passiert, Code kommt raus."',
    after:  'CLAUDE.md-Dateien liegen offen. Prompts sichtbar. Entscheidungen lesbar. Im Dateisystem, nicht in einer Pipeline.' },
  { ...PILLARS_V2[3],
    before: 'Tools, die voraussetzen, dass du klickst, siehst, tippst. Punkt.',
    after:  '13 Themes inkl. WCAG AAA. Voice komplett lokal. Bluetooth-Remote. Theme-Editor pro Farbe.' },
];

const PillarsCompare = ({ palette, sp }) => (
  <section style={{ padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    borderTop: `1px solid ${palette.border}` }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 36,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 01</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Vier Pfeiler · Vorher / Nachher</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {COMPARE_PAIRS.map((p, i) => (
        <div key={i} style={{
          border: `1px solid ${palette.border}`,
          clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          background: palette.bgElevated,
          padding: '24px 28px',
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <span style={{ width: 14, height: 14, background: p.color, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
              color: palette.textDim, letterSpacing: 1.5 }}>0{i + 1}</span>
            <h3 style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
              fontSize: 26, color: palette.text, letterSpacing: -0.3 }}>{p.title}</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 28px 1fr', gap: 18,
            alignItems: 'stretch' }}>
            <div style={{
              padding: '14px 18px', background: palette.bgSunken,
              border: `1px solid ${palette.border}`, opacity: 0.8,
            }}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
                color: palette.textDim, letterSpacing: 1.5, marginBottom: 8 }}>
                // ohne cipher-mux
              </div>
              <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif",
                fontSize: 14.5, lineHeight: 1.55, color: palette.textDim,
                textWrap: 'pretty', textDecoration: 'line-through',
                textDecorationColor: palette.border }}>{p.before}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Fira Code', monospace", fontSize: 18, color: p.color }}>→</div>
            <div style={{
              padding: '14px 18px', background: palette.bg,
              borderLeft: `3px solid ${p.color}`,
            }}>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
                color: p.color, letterSpacing: 1.5, marginBottom: 8 }}>
                // mit cipher-mux
              </div>
              <p style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif",
                fontSize: 14.5, lineHeight: 1.55, color: palette.text,
                fontWeight: 500, textWrap: 'pretty' }}>{p.after}</p>
            </div>
          </div>
          <p style={{
            margin: '18px 0 0', fontFamily: "'Fira Code', monospace",
            fontSize: 12, lineHeight: 1.75, color: palette.textSecondary,
            borderTop: `1px dotted ${palette.border}`, paddingTop: 14,
          }}>{p.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── ALT D — Diagram (Pfeiler als Bausteine eines Systems) ────────────
const PillarsDiagram = ({ palette, sp }) => (
  <section style={{ padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    borderTop: `1px solid ${palette.border}` }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 36,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 01</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Vier Pfeiler · ein System</span>
    </div>

    {/* Diagram on top */}
    <div style={{
      position: 'relative', padding: '40px 20px 30px',
      background: palette.bgElevated, border: `1px solid ${palette.border}`,
      clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
      marginBottom: 32,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
        {PILLARS_V2.map((p, i) => (
          <div key={i} style={{
            border: `2px solid ${p.color}`, background: palette.bg,
            padding: '14px 16px', minHeight: 100,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
                color: p.color, letterSpacing: 1.4, marginBottom: 8 }}>P{i + 1}</div>
              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
                fontSize: 15, color: palette.text, lineHeight: 1.2,
                letterSpacing: -0.1 }}>{p.title}</div>
            </div>
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9,
              color: palette.textDim, letterSpacing: 1, marginTop: 12 }}>
              {['Prozess', 'Companion', 'Files', 'A11y'][i]}
            </div>
          </div>
        ))}
      </div>
      {/* connecting lines underneath */}
      <div style={{
        marginTop: 24, padding: '10px 16px',
        borderTop: `1px dashed ${palette.border}`,
        fontFamily: "'Fira Code', monospace", fontSize: 11,
        color: palette.textSecondary, lineHeight: 1.7,
        display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap',
      }}>
        <span style={{ color: palette.textDim }}>verbunden durch:</span>
        <span style={{ color: palette.text }}>tmux</span>
        <span style={{ color: palette.textDim }}>·</span>
        <span style={{ color: palette.text }}>MCP-Server</span>
        <span style={{ color: palette.textDim }}>·</span>
        <span style={{ color: palette.text }}>Grid</span>
        <span style={{ color: palette.textDim }}>·</span>
        <span style={{ color: palette.text }}>CLAUDE.md</span>
      </div>
    </div>

    {/* Detail-Grid below */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
      {PILLARS_V2.map((p, i) => (
        <div key={i} style={{
          padding: '20px 22px', border: `1px solid ${palette.border}`,
          borderLeft: `3px solid ${p.color}`, background: palette.bg,
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
              color: p.color, letterSpacing: 1.4 }}>P{i + 1}</span>
            <h4 style={{ margin: 0, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
              fontSize: 18, color: palette.text, letterSpacing: -0.2 }}>{p.title}</h4>
          </div>
          <p style={{ margin: 0, fontFamily: "'Fira Code', monospace",
            fontSize: 12.5, lineHeight: 1.75, color: palette.textSecondary,
            textWrap: 'pretty' }}>{p.description}</p>
        </div>
      ))}
    </div>
  </section>
);

Object.assign(window, { PillarsStory, PillarsTabs, PillarsCompare, PillarsDiagram });
