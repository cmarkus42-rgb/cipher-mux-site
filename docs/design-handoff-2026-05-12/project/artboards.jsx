// CIPHER-MUX — full landing artboards + variant artboards

const FullLanding = ({ theme = 'light', heroVariant = 'pixel', pillarVariant = 'pixel', footerVariant = 'plain' }) => {
  const Hero = heroVariant === 'terminal' ? HeroTerminal
            : heroVariant === 'schematic' ? HeroSchematic
            : HeroPixel;
  const Pillars = pillarVariant === 'preset' ? PillarsPreset
                : pillarVariant === 'minimal' ? PillarsMinimal
                : PillarsPixel;
  const Footer = footerVariant === 'statusbar' ? FooterStatusbar : FooterPlain;
  return (
    <div className={`cm-page cm-${theme}`}>
      <Header />
      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Pillars />
        <NotSection />
        <section style={{
          padding: '64px 32px 80px', display: 'flex', flexDirection: 'column', gap: 18,
          alignItems: 'center', borderTop: '1px solid var(--border)',
          background: 'var(--bg-sunken)',
        }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: 13,
            letterSpacing: 4, textTransform: 'uppercase', color: 'var(--text-dim)',
          }}>// Bereit?</div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" className="cm-btn cm-btn--primary">Loslegen</a>
            <a href="#" className="cm-btn">Den Prozess verstehen</a>
            <a href="#" className="cm-btn">Auf GitHub ansehen</a>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

// Solo hero artboard (smaller)
const HeroOnly = ({ theme, variant }) => {
  const Hero = variant === 'terminal' ? HeroTerminal
            : variant === 'schematic' ? HeroSchematic
            : HeroPixel;
  return (
    <div className={`cm-page cm-${theme}`}>
      <Header />
      <Hero />
    </div>
  );
};

// Solo pillars artboard
const PillarsOnly = ({ theme, variant }) => {
  const Pillars = variant === 'preset' ? PillarsPreset
                : variant === 'minimal' ? PillarsMinimal
                : PillarsPixel;
  return (
    <div className={`cm-page cm-${theme}`}>
      <Pillars />
    </div>
  );
};

// Footer-only artboard
const FooterOnly = ({ theme, variant }) => (
  <div className={`cm-page cm-${theme}`} style={{ justifyContent: 'flex-end' }}>
    <div style={{ flex: 1, padding: 32, color: 'var(--text-dim)', fontSize: 11 }}>
      <div style={{ marginBottom: 12, letterSpacing: 2, textTransform: 'uppercase' }}>Footer Preview</div>
      <p style={{ maxWidth: 360, lineHeight: 1.7 }}>
        Plain → klassischer Website-Footer.<br/>
        Statusbar → wie die echte App-Statusleiste, mit Toggles und Versionspill.
      </p>
    </div>
    {variant === 'statusbar' ? <FooterStatusbar /> : <FooterPlain />}
  </div>
);

Object.assign(window, { FullLanding, HeroOnly, PillarsOnly, FooterOnly });
