// Shared theme tokens, type primitives, layout chrome.
// Used by both Light and Dark Features artboards.

const cmThemes = {
  light: {
    bg: '#F4F3ED',
    bgElevated: '#FEFEFB',
    bgSunken: '#ECEAE2',
    border: '#C8C5B8',
    borderStrong: '#3A3F47',
    text: '#1A1A1D',
    textSecondary: '#4A4A52',
    textDim: '#8A8A82',
    neonGreen: '#2d8a4e',
  },
  dark: {
    bg: '#2E3440',
    bgElevated: '#3B4252',
    bgSunken: '#272C36',
    border: '#5A6378',
    borderStrong: '#6A7488',
    text: '#F4F6FA',
    textSecondary: '#D8DEE9',
    textDim: '#B8C0CC',
    neonGreen: '#B5D496',
  },
};

// Preset colors (8 functional presets) — drawn from the cipher-mux app's palette.
// Same in both themes (they read against any background).
const cmPresets = {
  ideation:     '#C792EA',  // light purple — Ideation Partner
  refinement:   '#BF616A',  // red — Refinement
  cyberFactory: '#5E81AC',  // blue — Cyber Factory (Architekt + Multi-Session-Orchestrator)
  testing:      '#A3BE8C',  // green — Testing Assistant
  debugger:     '#D08770',  // orange — Debugger
  audit:        '#B48EAD',  // purple — Audit
  companion:    '#EBCB8B',  // amber — Companion
  voice:        '#88C0D0',  // teal — Voice Companion
  // legacy aliases (still used by older mocks)
  orchestrator: '#5E81AC', mpo: '#B48EAD', launcher: '#D08770', watchdog: '#7B8394',
};

// Persona colors (6 characters — the *Wie* of communication).
const cmPersonas = {
  cipher:    '#5BC8AF',  // mint — The Sentinel (positive cyberpunk)
  relay:     '#7B8394',  // slate — The Dry (default, science-journalism)
  wayne:     '#E5A442',  // warm gold — The Pragmatic Enthusiast
  kyniker:   '#9C9C9C',  // pure gray — Radically Reduced
  sokrates:  '#7C9BD9',  // soft blue — The Socratic Tutor
  glitch:    '#D070C8',  // magenta-pink — Weird / Quirky
};

// Build a complete palette object for a theme + accent override.
function cmPalette(theme, accent) {
  const base = cmThemes[theme] || cmThemes.light;
  const isDark = theme === 'dark';
  return {
    ...base,
    accent: accent || (isDark ? '#88C0D0' : '#006B7A'),
    accentHover: isDark ? '#8FBCBB' : '#0088A0',
    presets: cmPresets,
    personas: cmPersonas,
    // Aliases used by install-sections (and other future pages):
    line: base.border,
    surface: base.bgElevated,
    surfaceAlt: base.bgSunken,
    // Terminal palette (consistent across pages):
    terminalBg:     isDark ? '#1E222A' : '#1A1A1D',
    terminalChrome: isDark ? '#272C36' : '#0F0F11',
    terminalText:   isDark ? '#D8DEE9' : '#E8E5DC',
    warn: '#D08770',
  };
}

// Density spacing scales (luftig = airy default, dicht = compact)
function cmSpacing(density) {
  const base = density === 'dicht'
    ? { sectionPadY: 56, sectionPadX: 48, gap: 18, h2Size: 36, leadSize: 14, bodySize: 13.5 }
    : { sectionPadY: 88, sectionPadX: 64, gap: 26, h2Size: 48, leadSize: 16, bodySize: 14.5 };
  // Aliases for install-page authors (shorter names):
  return { ...base, h2: base.h2Size, lead: base.leadSize, body: base.bodySize };
}

// ─── Atoms ──────────────────────────────────────────────────────────────
const CMTag = ({ children, color, palette }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: 1.5,
    textTransform: 'uppercase', color: color || palette.textDim,
    padding: '2px 0',
  }}>
    {children}
  </span>
);

const CMSectionHeader = ({ num, kicker, title, lead, palette, sp }) => (
  <header style={{ marginBottom: sp.gap * 1.4, position: 'relative' }}>
    <div style={{
      display: 'flex', alignItems: 'baseline', gap: 14,
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 14,
    }}>
      <span style={{ color: palette.accent }}>{num}</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border, alignSelf: 'center' }} />
      <span>{kicker}</span>
    </div>
    <h2 style={{
      fontFamily: "'Rajdhani', Impact, sans-serif", fontWeight: 700,
      fontSize: sp.h2Size, lineHeight: 1.05, margin: 0,
      color: palette.text, letterSpacing: -0.5,
    }}>{title}</h2>
    {lead && (
      <p style={{
        marginTop: 14, marginBottom: 0, maxWidth: 720,
        fontFamily: "'Fira Code', monospace", fontSize: sp.leadSize,
        lineHeight: 1.7, color: palette.textSecondary,
      }}>{lead}</p>
    )}
  </header>
);

// Cut-corner box
const CMBox = ({ children, palette, padding = 20, elevated, accent, style = {} }) => (
  <div style={{
    background: elevated ? palette.bgElevated : palette.bg,
    border: `1px solid ${accent ? palette.accent : palette.border}`,
    clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
    padding,
    fontFamily: "'Fira Code', monospace",
    fontSize: 13, lineHeight: 1.6, color: palette.text,
    ...style,
  }}>
    {children}
  </div>
);

const CMBodyText = ({ children, palette, sp, style = {} }) => (
  <p style={{
    margin: 0, fontFamily: "'Fira Code', monospace",
    fontSize: sp.bodySize, lineHeight: 1.75, color: palette.textSecondary,
    ...style,
  }}>{children}</p>
);

// Mini horizontal rule with cut-corner
const CMRule = ({ palette, style = {} }) => (
  <div style={{ width: 24, height: 2, background: palette.accent, ...style }} />
);

// Dot legend
const CMDot = ({ color, size = 8 }) => (
  <span style={{ display: 'inline-block', width: size, height: size, background: color, flexShrink: 0 }} />
);

// ─── Page chrome (header + footer + anchor nav) ─────────────────────────
const CMPageHeader = ({ palette, active = 'features' }) => {
  const navItem = (key, label) => (
    <span key={key} style={{
      color: active === key ? palette.text : palette.textSecondary,
      borderBottom: active === key ? `1.5px solid ${palette.accent}` : 'none',
      paddingBottom: 2,
    }}>{label}</span>
  );
  return (
  <header style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 48px', borderBottom: `1px solid ${palette.border}`,
    background: palette.bg, position: 'sticky', top: 0, zIndex: 5,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <CMDot color={palette.accent} size={10} />
      <span style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 18,
        letterSpacing: 4, color: palette.text,
      }}>CIPHER-MUX</span>
    </div>
    <nav style={{
      display: 'flex', gap: 28, fontFamily: "'Fira Code', monospace",
      fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
      color: palette.textSecondary,
    }}>
      {navItem('landing', 'Landing')}
      {navItem('features', 'Features')}
      {navItem('install', 'Download')}
      <span>GitHub ↗</span>
    </nav>
  </header>
  );
};

const CMPageFooter = ({ palette }) => (
  <footer style={{
    borderTop: `1px solid ${palette.border}`, marginTop: 64,
    padding: '32px 48px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    fontFamily: "'Fira Code', monospace", fontSize: 11, color: palette.textDim,
    letterSpacing: 1.2,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <CMDot color={palette.accent} size={8} />
      <span style={{ color: palette.text, letterSpacing: 3 }}>CIPHER-MUX</span>
      <span>v0.9.9 · MIT · macOS</span>
      <span style={{ color: palette.textDim, marginLeft: 8 }}>·</span>
      <span style={{ color: palette.accent }}>cipher-mux.dev</span>
    </div>
    <div style={{ display: 'flex', gap: 24 }}>
      <span>GitHub</span>
      <span>Issues</span>
      <span>Datenschutz</span>
      <span>Impressum</span>
    </div>
  </footer>
);

// Sticky right anchor nav (subtle, vertical)
const CMAnchorNav = ({ items, active, palette }) => (
  <aside style={{
    position: 'absolute', top: 200, right: 32, width: 180,
    fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: 1.4,
    textTransform: 'uppercase',
    display: 'flex', flexDirection: 'column', gap: 10,
  }}>
    <div style={{
      paddingBottom: 10, borderBottom: `1px solid ${palette.border}`,
      color: palette.textDim, fontSize: 9,
    }}>// auf dieser seite</div>
    {items.map((it, i) => {
      const isActive = i === active;
      return (
        <div key={it.id} style={{
          display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 4,
          color: isActive ? palette.accent : palette.textDim,
          borderLeft: isActive ? `2px solid ${palette.accent}` : `2px solid transparent`,
          paddingTop: 2, paddingBottom: 2,
        }}>
          <span style={{ fontFamily: "'Fira Code', monospace", opacity: 0.7 }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span style={{ color: isActive ? palette.text : palette.textDim }}>{it.label}</span>
        </div>
      );
    })}
  </aside>
);

// Statusbar — re-used from landing
const CMStatusbar = ({ palette }) => (
  <div style={{
    display: 'flex', alignItems: 'center', height: 28, fontSize: 9,
    fontFamily: "'Fira Code', monospace", color: palette.textDim,
    borderTop: `1px solid ${palette.border}`, borderBottom: `1px solid ${palette.border}`,
    letterSpacing: 0.8, whiteSpace: 'nowrap', background: palette.bgSunken,
  }}>
    <span style={{ padding: '0 14px', borderRight: `1px solid ${palette.border}`, display: 'flex', gap: 8 }}>
      <span style={{ color: palette.accent }}>● OFF</span><span>STT</span><span>COM</span>
    </span>
    <span style={{ padding: '0 14px', borderRight: `1px solid ${palette.border}`, color: palette.text }}>features</span>
    <span style={{ padding: '0 14px', borderRight: `1px solid ${palette.border}` }}>section 03 / 12</span>
    <span style={{ padding: '0 14px', borderRight: `1px solid ${palette.border}` }}>nord</span>
    <span style={{ marginLeft: 'auto', padding: '3px 9px', marginRight: 12,
      border: `1px solid ${palette.border}`, color: palette.text }}>v0.9.9-dev</span>
  </div>
);

// Hero block for the Features page (smaller than landing)
const CMFeaturesHero = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 0.9}px ${sp.sectionPadX}px ${sp.sectionPadY * 0.7}px`,
    borderBottom: `1px solid ${palette.border}`,
    position: 'relative',
  }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2.5,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 18,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 02</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Deep-Dive</span>
    </div>
    <h1 style={{
      fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
      fontSize: 76, lineHeight: 0.98, margin: 0, color: palette.text,
      letterSpacing: -1, maxWidth: 880,
    }}>
      Was im Cockpit<br/>
      <span style={{ color: palette.textDim }}>tatsächlich</span> drin steckt<span style={{ color: palette.accent }}>.</span>
    </h1>
    <p style={{
      marginTop: 24, marginBottom: 0, maxWidth: 700,
      fontFamily: "'Fira Code', monospace", fontSize: 15, lineHeight: 1.7,
      color: palette.textSecondary,
    }}>
      Grid, Sessions, Personas, Workspaces, Voice, Notes, Memory, MCP-Server. Eine
      lange Seite — alles auf einen Blick, ohne Tabs, ohne Tricks. Du scrollst, du
      verstehst.
    </p>
  </section>
);

Object.assign(window, {
  cmThemes, cmPresets, cmPersonas, cmPalette, cmSpacing,
  CMTag, CMSectionHeader, CMBox, CMBodyText, CMRule, CMDot,
  CMPageHeader, CMPageFooter, CMAnchorNav, CMStatusbar, CMFeaturesHero,
});
