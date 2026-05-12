// CIPHER-MUX Docs — shared atoms.
// Tables, callouts, definition lists, mini-mocks specific to the Handbook.

// ─── Section shell — same shape as install/features but with "§ N" prefix ──
const DocsSection = ({ id, num, title, lead, palette, sp, children }) => (
  <section id={id} style={{
    padding: `${sp.sectionPadY * 0.7}px ${sp.sectionPadX}px`,
    paddingRight: `${sp.sectionPadX + 64}px`,
    borderBottom: `1px solid ${palette.line}`,
    position: 'relative',
  }}>
    <div style={{ maxWidth: 920 }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 14,
        marginBottom: 14,
        fontFamily: "'Fira Code', monospace", fontSize: 11,
        letterSpacing: '0.18em', color: palette.textDim,
        textTransform: 'uppercase',
      }}>
        <span style={{ color: palette.accent }}>§ {num}</span>
        <span style={{ flex: '0 0 14px', height: 1, background: palette.line }} />
        <span>kapitel</span>
      </div>
      <h2 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: 38, lineHeight: 1.05, margin: '0 0 16px 0',
        color: palette.text, letterSpacing: '-0.01em',
      }}>{title}</h2>
      {lead && (
        <p style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 400,
          fontSize: 18, lineHeight: 1.5, color: palette.textSecondary,
          margin: '0 0 28px 0', maxWidth: 720, textWrap: 'pretty',
        }}>{lead}</p>
      )}
      {children}
    </div>
  </section>
);

// ─── Subhead inside a section ─────────────────────────────────────────────
const DocsSubhead = ({ children, palette, mt = 28 }) => (
  <h3 style={{
    fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
    fontSize: 22, color: palette.text, lineHeight: 1.15,
    margin: `${mt}px 0 12px 0`, letterSpacing: '-0.005em',
    display: 'flex', alignItems: 'baseline', gap: 10,
  }}>
    <span style={{
      width: 10, height: 10, background: palette.accent,
      flexShrink: 0, transform: 'translateY(1px)',
      clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)',
    }} />
    <span>{children}</span>
  </h3>
);

// ─── Body paragraph ───────────────────────────────────────────────────────
const DocsP = ({ children, palette, mt = 0, mb = 12 }) => (
  <p style={{
    fontFamily: "'Rajdhani', sans-serif", fontWeight: 400,
    fontSize: 16, lineHeight: 1.55, color: palette.textSecondary,
    margin: `${mt}px 0 ${mb}px 0`, maxWidth: 760, textWrap: 'pretty',
  }}>{children}</p>
);

// ─── Bold inline ─────────────────────────────────────────────────────────
const B = ({ children, palette }) => (
  <strong style={{ color: palette.text, fontWeight: 600 }}>{children}</strong>
);

// ─── Inline mono (for keywords, button labels) ────────────────────────────
const Mono = ({ children, palette }) => (
  <span style={{
    fontFamily: "'Fira Code', monospace", fontSize: 12.5,
    background: palette.surfaceAlt, color: palette.text,
    padding: '1px 6px',
    border: `1px solid ${palette.line}`,
    clipPath: 'polygon(3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%, 0 3px)',
  }}>{children}</span>
);

// ─── Two-column reference table ───────────────────────────────────────────
// rows: [{ label, desc }] OR [{ key, label, desc }]  (3-col supported)
const DocsTable = ({ rows, palette, columns = 2, headers, compact }) => (
  <div style={{
    border: `1px solid ${palette.line}`,
    background: palette.surface,
    margin: '8px 0 18px',
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    overflow: 'hidden',
  }}>
    {headers && (
      <div style={{
        display: 'grid',
        gridTemplateColumns: columns === 3 ? '1fr 1.2fr 2fr' : '1fr 2fr',
        background: palette.surfaceAlt,
        borderBottom: `1px solid ${palette.line}`,
        padding: compact ? '7px 14px' : '10px 16px',
        fontFamily: "'Fira Code', monospace", fontSize: 10,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: palette.textDim,
      }}>
        {headers.map(h => <div key={h}>{h}</div>)}
      </div>
    )}
    {rows.map((r, i) => (
      <div key={i} style={{
        display: 'grid',
        gridTemplateColumns: columns === 3 ? '1fr 1.2fr 2fr' : '1fr 2fr',
        padding: compact ? '8px 14px' : '12px 16px',
        gap: 16,
        borderTop: i > 0 ? `1px dotted ${palette.line}` : 'none',
        alignItems: 'baseline',
      }}>
        {columns === 3 ? (
          <>
            <div style={{
              fontFamily: "'Fira Code', monospace", fontSize: 12,
              color: palette.accent, letterSpacing: '0.04em',
            }}>{r.key}</div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
              fontSize: 15, color: palette.text,
            }}>{r.label}</div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif", fontSize: 14.5,
              color: palette.textSecondary, lineHeight: 1.45,
              textWrap: 'pretty',
            }}>{r.desc}</div>
          </>
        ) : (
          <>
            <div style={{
              fontFamily: "'Fira Code', monospace", fontSize: 12,
              color: palette.accent, letterSpacing: '0.04em',
            }}>{r.label}</div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif", fontSize: 14.5,
              color: palette.textSecondary, lineHeight: 1.45,
              textWrap: 'pretty',
            }}>{r.desc}</div>
          </>
        )}
      </div>
    ))}
  </div>
);

// ─── Bullet list ─────────────────────────────────────────────────────────
const DocsList = ({ items, palette, marker = '›' }) => (
  <ul style={{ margin: '8px 0 16px', padding: 0, listStyle: 'none' }}>
    {items.map((it, i) => (
      <li key={i} style={{
        display: 'flex', gap: 12, padding: '5px 0',
        fontFamily: "'Rajdhani', sans-serif", fontSize: 16,
        color: palette.textSecondary, lineHeight: 1.5,
        textWrap: 'pretty',
      }}>
        <span style={{
          color: palette.accent, fontFamily: "'Fira Code', monospace",
          fontSize: 12, flexShrink: 0, marginTop: 2,
        }}>{marker}</span>
        <span>{it}</span>
      </li>
    ))}
  </ul>
);

// ─── Callout (3 kinds: tip, warn, rule) ───────────────────────────────────
const Callout = ({ kind = 'tip', title, children, palette }) => {
  const colors = {
    tip:  { bar: palette.accent,  label: 'Tipp' },
    warn: { bar: palette.warn,    label: 'Achtung' },
    rule: { bar: palette.text,    label: 'Faustregel' },
  };
  const c = colors[kind];
  return (
    <div style={{
      margin: '14px 0 18px',
      padding: '14px 18px 14px 16px',
      background: palette.surfaceAlt,
      border: `1px solid ${palette.line}`,
      borderLeft: `3px solid ${c.bar}`,
      maxWidth: 760,
    }}>
      <div style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
        fontSize: 12, color: c.bar, letterSpacing: '0.16em',
        textTransform: 'uppercase', marginBottom: 6,
      }}>{c.label}{title ? ' · ' + title : ''}</div>
      <div style={{
        fontFamily: "'Rajdhani', sans-serif", fontSize: 15,
        color: palette.text, lineHeight: 1.5, textWrap: 'pretty',
      }}>{children}</div>
    </div>
  );
};

// ─── LED state mock (for Voice section) ───────────────────────────────────
const LedRow = ({ states, palette }) => (
  <div style={{
    display: 'flex', gap: 8, flexWrap: 'wrap',
    margin: '8px 0 16px',
  }}>
    {states.map((s) => (
      <div key={s.label} style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 14px',
        background: palette.surface,
        border: `1px solid ${palette.line}`,
        clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
      }}>
        <span style={{
          width: 10, height: 10, borderRadius: 5,
          background: s.color,
          boxShadow: s.color !== palette.textDim ? `0 0 8px ${s.color}` : 'none',
        }} />
        <span style={{
          fontFamily: "'Fira Code', monospace", fontSize: 11,
          color: palette.text, letterSpacing: '0.06em',
        }}>{s.label}</span>
        <span style={{
          fontFamily: "'Rajdhani', sans-serif", fontSize: 13,
          color: palette.textDim,
        }}>{s.desc}</span>
      </div>
    ))}
  </div>
);

// ─── Pipeline arrow row (for lifecycle) ───────────────────────────────────
const PipelineRow = ({ steps, palette }) => (
  <div style={{
    display: 'flex', gap: 0, alignItems: 'stretch',
    margin: '12px 0 24px', flexWrap: 'wrap',
  }}>
    {steps.map((step, i) => (
      <React.Fragment key={step.label}>
        <div style={{
          padding: '10px 16px', background: palette.surface,
          border: `1px solid ${palette.line}`,
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
          fontSize: 14, color: palette.text,
          clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
          textAlign: 'center',
        }}>{step.label}</div>
        {i < steps.length - 1 && (
          <div style={{
            display: 'flex', alignItems: 'center',
            padding: '0 8px', color: palette.accent,
            fontFamily: "'Fira Code', monospace", fontSize: 14,
          }}>→</div>
        )}
      </React.Fragment>
    ))}
  </div>
);

// ─── Hierarchy ladder (for Persona/Prompt resolution) ─────────────────────
const Ladder = ({ rungs, palette }) => (
  <div style={{
    margin: '12px 0 20px',
    border: `1px solid ${palette.line}`,
    background: palette.surface,
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    overflow: 'hidden',
  }}>
    {rungs.map((rung, i) => (
      <div key={i} style={{
        display: 'flex', alignItems: 'baseline', gap: 14,
        padding: '12px 18px',
        borderTop: i > 0 ? `1px dotted ${palette.line}` : 'none',
        background: i === 0 ? palette.surfaceAlt : 'transparent',
      }}>
        <div style={{
          flex: '0 0 32px',
          fontFamily: "'Fira Code', monospace", fontSize: 11,
          color: palette.accent, letterSpacing: '0.1em',
        }}>{i + 1}.</div>
        <div style={{ flex: '0 0 200px' }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
            fontSize: 15, color: palette.text,
          }}>{rung.label}</div>
          {rung.priority && (
            <div style={{
              fontFamily: "'Fira Code', monospace", fontSize: 10,
              color: palette.textDim, letterSpacing: '0.1em',
              marginTop: 2,
            }}>{rung.priority}</div>
          )}
        </div>
        <div style={{
          flex: 1,
          fontFamily: "'Rajdhani', sans-serif", fontSize: 14.5,
          color: palette.textSecondary, lineHeight: 1.45,
          textWrap: 'pretty',
        }}>{rung.desc}</div>
      </div>
    ))}
  </div>
);

Object.assign(window, {
  DocsSection, DocsSubhead, DocsP, B, Mono,
  DocsTable, DocsList, Callout,
  LedRow, PipelineRow, Ladder,
});
