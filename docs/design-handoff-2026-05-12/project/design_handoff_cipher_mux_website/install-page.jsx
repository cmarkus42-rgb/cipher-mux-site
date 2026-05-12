// CIPHER-MUX — Install / Get Started page
// Single full-width artboard. Anchor nav on the right rail (reused).

const INSTALL_NAV = [
  { id: 'phase1', label: '01 · Installation' },
  { id: 'phase2', label: '02 · Erster Start' },
  { id: 'phase3', label: '03 · Erstes Ergebnis' },
  { id: 'phase4', label: '04 · Weiter' },
];

const InstallPage = ({ theme = 'light', density = 'luftig', accent, showAnchorNav = true }) => {
  const palette = cmPalette(theme, accent);
  const sp = cmSpacing(density);

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: palette.bg, color: palette.text,
      fontFamily: "'Fira Code', monospace", position: 'relative',
    }}>
      <CMPageHeader palette={palette} active="install" />

      {showAnchorNav && (
        <CMAnchorNav items={INSTALL_NAV} active={0} palette={palette} />
      )}

      <InstallHero palette={palette} sp={sp} />
      <SecPhase1 palette={palette} sp={sp} />
      <SecPhase2 palette={palette} sp={sp} />
      <SecPhase3 palette={palette} sp={sp} />
      <SecPhase4 palette={palette} sp={sp} />
      <SecInstallBottom palette={palette} sp={sp} />
      <CMPageFooter palette={palette} />
    </div>
  );
};

window.InstallPage = InstallPage;
