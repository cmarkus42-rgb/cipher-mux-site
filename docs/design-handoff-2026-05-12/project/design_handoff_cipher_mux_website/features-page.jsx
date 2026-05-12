// Composes the Features page — single full-width artboard.
// Anchor nav floats on the right rail; sections are stacked top-to-bottom.

const NAV_ITEMS = [
  { id: 'cockpit',       label: 'Cockpit' },
  { id: 'grid',          label: 'Das Grid' },
  { id: 'sessions',      label: 'Sessions' },
  { id: 'personas',      label: 'Personas' },
  { id: 'presets',       label: 'Presets' },
  { id: 'matrix',        label: 'Matrix' },
  { id: 'voice',         label: 'Voice & TTS' },
  { id: 'notes',         label: 'Notes & Memory' },
  { id: 'mcp',           label: 'MCP-Server' },
  { id: 'themes',        label: 'Themes' },
  { id: 'access',        label: 'Barrierefrei' },
  { id: 'efficiency',    label: 'Effizienz' },
];

const FeaturesPage = ({ theme = 'light', density = 'luftig', accent, showAnchorNav = true }) => {
  const palette = cmPalette(theme, accent);
  const sp = cmSpacing(density);

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: palette.bg, color: palette.text,
      fontFamily: "'Fira Code', monospace", position: 'relative',
    }}>
      <CMPageHeader palette={palette} />

      {/* anchor nav — sits in the reserved right rail */}
      {showAnchorNav && (
        <CMAnchorNav items={NAV_ITEMS} active={4 /* presets highlighted as a default */} palette={palette} />
      )}

      <CMFeaturesHero palette={palette} sp={sp} />
      <SecCockpit       palette={palette} sp={sp} />
      <SecGrid          palette={palette} sp={sp} />
      <SecSessions      palette={palette} sp={sp} />
      <SecPersonas      palette={palette} sp={sp} />
      <SecPresets       palette={palette} sp={sp} />
      <SecMatrix        palette={palette} sp={sp} />
      <SecVoice         palette={palette} sp={sp} />
      <SecNotes         palette={palette} sp={sp} />
      <SecMCP           palette={palette} sp={sp} />
      <SecThemes        palette={palette} sp={sp} />
      <SecAccess        palette={palette} sp={sp} />
      <SecEfficiency    palette={palette} sp={sp} />
      <SecBottomCTA     palette={palette} sp={sp} />
      <CMPageFooter     palette={palette} />
    </div>
  );
};

window.FeaturesPage = FeaturesPage;
