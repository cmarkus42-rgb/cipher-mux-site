// CIPHER-MUX — Docs / Handbook page
// Long-scroll, single-column, anchor-nav right.

const DOCS_NAV = [
  { id: 'window',     label: '01 · Fenster' },
  { id: 'sessions',   label: '02 · Sessions' },
  { id: 'grid',       label: '03 · Grid' },
  { id: 'voice',      label: '04 · Voice' },
  { id: 'sidebar',    label: '05 · Sidebar' },
  { id: 'notes',      label: '06 · Notizen' },
  { id: 'projects',   label: '07 · Projekte' },
  { id: 'lifecycle',  label: '08 · Presets' },
  { id: 'companion',  label: '09 · Companion' },
  { id: 'personas',   label: '10 · Personas' },
  { id: 'workspaces', label: '11 · Workspaces' },
  { id: 'settings',   label: '12 · Einstellungen' },
  { id: 'shortcuts',  label: '13 · Shortcuts' },
  { id: 'bugreports', label: '14 · Bugreports' },
  { id: 'dialogs',    label: '15 · Dialoge' },
];

const DocsPage = ({ theme = 'light', density = 'luftig', accent, showAnchorNav = true }) => {
  const palette = cmPalette(theme, accent);
  const sp = cmSpacing(density);

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: palette.bg, color: palette.text,
      fontFamily: "'Fira Code', monospace", position: 'relative',
    }}>
      <CMPageHeader palette={palette} active="docs" />

      {showAnchorNav && (
        <CMAnchorNav items={DOCS_NAV} active={0} palette={palette} />
      )}

      <DocsHero palette={palette} sp={sp} />
      <DocsCompanionIntro palette={palette} sp={sp} />
      <DocsSec1  palette={palette} sp={sp} />
      <DocsSec2  palette={palette} sp={sp} />
      <DocsSec3  palette={palette} sp={sp} />
      <DocsSec4  palette={palette} sp={sp} />
      <DocsSec5  palette={palette} sp={sp} />
      <DocsSec6  palette={palette} sp={sp} />
      <DocsSec7  palette={palette} sp={sp} />
      <DocsSec8  palette={palette} sp={sp} />
      <DocsSec9  palette={palette} sp={sp} />
      <DocsSec10 palette={palette} sp={sp} />
      <DocsSec11 palette={palette} sp={sp} />
      <DocsSec12 palette={palette} sp={sp} />
      <DocsSec13 palette={palette} sp={sp} />
      <DocsSec14 palette={palette} sp={sp} />
      <DocsSec15 palette={palette} sp={sp} />
      <DocsBottom palette={palette} sp={sp} />
      <CMPageFooter palette={palette} />
    </div>
  );
};

window.DocsPage = DocsPage;
