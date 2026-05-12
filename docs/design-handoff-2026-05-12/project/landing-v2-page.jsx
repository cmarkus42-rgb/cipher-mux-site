// CIPHER-MUX Landing v2 — Page composer + Hero-variants comparison.

const LandingV2 = ({ heroVariant = 'A', theme = 'light', accent, density = 'luftig' }) => {
  const palette = cmPalette(theme, accent);
  const sp = cmSpacing(density);
  const Hero = heroVariant === 'B' ? HeroB : heroVariant === 'C' ? HeroC : HeroA;

  return (
    <div style={{
      width: '100%', minHeight: '100%', background: palette.bg, color: palette.text,
      fontFamily: "'Fira Code', monospace",
    }}>
      <CMPageHeader palette={palette} active="landing" />
      <Hero palette={palette} />
      <PillarsStory palette={palette} sp={sp} />
      <SecBuiltWithItself palette={palette} sp={sp} />
      <SecSystemabgrenzung palette={palette} sp={sp} />
      <section style={{
        padding: '64px 56px 80px', background: palette.bgSunken,
        borderTop: `1px solid ${palette.border}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
      }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11,
          color: palette.textDim, letterSpacing: 2.5, textTransform: 'uppercase' }}>// Bereit?</div>
        <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 44,
          margin: 0, color: palette.text, letterSpacing: -0.5, textAlign: 'center' }}>
          Lies das Handbuch<span style={{ color: palette.accent }}>.</span>{' '}
          <span style={{ color: palette.textDim }}>Oder lad's runter.</span>
        </h2>
        <div style={{ marginTop: 18 }}><HeroCTAs palette={palette} /></div>
      </section>
      <CMPageFooter palette={palette} />
    </div>
  );
};

window.LandingV2 = LandingV2;
