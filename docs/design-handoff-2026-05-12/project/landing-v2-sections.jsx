// CIPHER-MUX Landing v2 — neue Sections nach Review-Update.
// Nutzt features-shared.jsx (cmPalette, cmSpacing, CMBox, CMDot, CMTag).

// ─── PillarToggle — Kachel-Größe bleibt, Inhalt togglet ────────────────
const PillarToggle = ({ idx, total, title, description, detail, color, palette, sp }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      style={{
        all: 'unset', cursor: 'pointer', display: 'block',
        background: palette.bgElevated, border: `1px solid ${palette.border}`,
        clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        padding: '28px 30px', position: 'relative', minHeight: 280,
        transition: 'border-color .15s', width: '100%', boxSizing: 'border-box',
      }}
    >
      {/* Accent bar */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: color }} />

      <div style={{ paddingLeft: 14, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header row: number + toggle indicator */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 16,
        }}>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: palette.textDim, letterSpacing: 1.4,
          }}>0{idx + 1} / 0{total}</span>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10,
            color: open ? palette.accent : palette.textDim, letterSpacing: 1.4,
          }}>{open ? '— Claim' : '+ Detail'}</span>
        </div>

        {/* Title — always visible */}
        <h3 style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 22,
          margin: '0 0 14px', color: palette.text, letterSpacing: -0.2, lineHeight: 1.15,
        }}>{title}</h3>

        {/* Body — togglet between description and detail */}
        <p style={{
          margin: 0, fontFamily: "'Rajdhani', sans-serif", fontWeight: 400,
          fontSize: 14, lineHeight: 1.55, color: palette.textSecondary,
          textWrap: 'pretty', flex: 1,
        }}>{open ? detail : description}</p>
      </div>
    </button>
  );
};

const PILLARS_V2 = [
  { title: 'Coding mit KI, aber richtig', color: '#5E81AC',
    description: 'Du hast eine Idee? Dann bau sie. cipher-mux strukturiert den Weg von der Idee zum Code — mit spezialisierten Agenten, die Qualität und Sicherheit einbauen, die man mit einer einzelnen Chat-Session nicht erreicht.',
    detail: 'Eine einzelne Claude-Session, die gleichzeitig plant, codet und testet, verliert Fokus. Der Kontext füllt sich, frühere Anweisungen werden komprimiert, die Qualität sinkt. cipher-mux trennt diese Phasen in eigene Sessions — Ideation, Refinement, Cyber Factory, Testing, Debugger, Audit — jede mit eigenem Kontext und eigenen Anweisungen. Saubere Übergaben zwischen den Phasen statt Kontextvermischung.' },
  { title: 'Gebaut für alle', color: '#EBCB8B',
    description: 'Kein Informatikstudium nötig. Der Companion zeigt dir alles — per Chat, per Voice, per UI-Highlighting. Wer eine Idee beschreiben kann, kann hier bauen.',
    detail: 'Der Companion ist dein Einstiegspunkt: er erklärt Konzepte, hilft bei Entscheidungen und führt auf Wunsch Aktionen aus. Er merkt sich dein Skill-Level und passt Erklärungen an. Per Voice-Modus sprichst du direkt mit ihm — ohne zu tippen. Und wenn du doch tippen willst, kennt er jedes Kapitel der Dokumentation und beantwortet Fragen schneller als du scrollst.' },
  { title: 'Transparent statt magisch', color: '#A3BE8C',
    description: 'Du siehst, was die Agenten tun. Prompts, Kontext, Entscheidungen — alles liegt offen. So lernst du nebenbei, wie KI-gestütztes Entwickeln funktioniert.',
    detail: 'Jede Entity-Session läuft sichtbar in einer Grid-Zelle. Du siehst den Output in Echtzeit, kannst in jede Session eingreifen, und die CLAUDE.md-Schichten (Global Rules → Preset → Persona → Workspace → Cell) liegen alle offen im Dateisystem. Keine Black Box. Wenn du verstehen willst, warum eine Session so antwortet wie sie antwortet, liest du ihre Anweisungen — das sind Textdateien.' },
  { title: 'Zugänglich gestaltet', color: '#88C0D0',
    description: 'WCAG-AAA-Themes, lokale Spracherkennung, Bluetooth-Fernbedienung. Technik passt sich an — nicht umgekehrt.',
    detail: '13 Themes, davon vier speziell für Farbenblindheit (Deuteranopie, Tritanopie, Achromatopsie) und ein High-Contrast-Theme nach WCAG AAA. Sprachsteuerung komplett lokal über Whisper — kein Netzwerk, keine Cloud. Bluetooth-Fernbedienung für freihändiges Arbeiten. Und ein Theme-Editor, mit dem du jede Farbe anpassen kannst.' },
];

const SecPillarsV2 = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    borderTop: `1px solid ${palette.border}`,
  }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 32,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 01</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Vier Pfeiler</span>
      <span style={{ flex: 1 }} />
      <span style={{ color: palette.textDim, fontSize: 10 }}>Klick = Detail · Klick = Claim</span>
    </div>
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16,
    }}>
      {PILLARS_V2.map((p, i) => (
        <PillarToggle key={p.title} idx={i} total={PILLARS_V2.length}
          title={p.title} description={p.description} detail={p.detail}
          color={p.color} palette={palette} sp={sp} />
      ))}
    </div>
  </section>
);

// ─── Built with Itself — neue Section ─────────────────────────────────
const WAVES = [
  { label: 'Welle 0',   tests: 400,  note: 'Baseline' },
  { label: 'Welle 1–2', tests: 520,  note: 'Hub, MCP, Grid' },
  { label: 'Welle 3–4', tests: 700,  note: 'Debugger, Factory' },
  { label: 'Welle 5',   tests: 841,  note: 'Entity-Pipeline aktiv' },
  { label: 'Welle 6',   tests: 1050, note: 'Handoff, Voice' },
  { label: 'Welle 7',   tests: 1207, note: 'Audit, Pre-Release' },
  { label: 'Welle 8',   tests: 1509, note: 'Audit-Fixes, Detach, Tags' },
];

const SecBuiltWithItself = ({ palette, sp }) => {
  const maxTests = Math.max(...WAVES.map(w => w.tests));
  return (
    <section style={{
      padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
      borderTop: `1px solid ${palette.border}`, background: palette.bgSunken,
    }}>
      <div style={{
        fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
        color: palette.textDim, textTransform: 'uppercase', marginBottom: 18,
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <span style={{ color: palette.accent }}>// 02</span>
        <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
        <span>Selbstreferenz</span>
      </div>
      <h2 style={{
        fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 44,
        margin: '0 0 14px', color: palette.text, letterSpacing: -0.5, lineHeight: 1.05,
      }}>Built with Itself<span style={{ color: palette.accent }}>.</span></h2>
      <p style={{
        margin: '0 0 32px', maxWidth: 760, fontFamily: "'Fira Code', monospace",
        fontSize: 14, color: palette.textSecondary, lineHeight: 1.7,
      }}>
        cipher-mux wurde mit cipher-mux gebaut. Kein Testcase wurde von Hand geschrieben —
        jeder einzelne stammt von Claude Code. Erst in Einzel-Sessions, ab Welle 5 durch die
        verdrahtete Testing-Entity als Teil der Pipeline.
      </p>

      {/* Stats — 4 large numbers */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 36,
      }}>
        {[
          { v: '1.509', l: 'Testcases' },
          { v: '100 %', l: 'Pass Rate' },
          { v: '~32',   l: 'LOC pro Test' },
          { v: '~90s',  l: 'Runtime' },
        ].map(s => (
          <CMBox key={s.l} palette={palette} padding={20} elevated>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
              fontSize: 44, lineHeight: 1, color: palette.accent, letterSpacing: -0.5 }}>{s.v}</div>
            <div style={{ marginTop: 8, fontSize: 12, color: palette.text,
              fontWeight: 500, letterSpacing: 0.3 }}>{s.l}</div>
          </CMBox>
        ))}
      </div>

      {/* Waves — horizontal bar chart in Fira Code */}
      <div style={{
        background: palette.bg, border: `1px solid ${palette.border}`,
        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
        padding: '24px 28px',
      }}>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10,
          color: palette.textDim, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>
          // wachstum der test-suite über 8 wellen
        </div>
        {WAVES.map((w, i) => {
          const pct = (w.tests / maxTests) * 100;
          const isActive = i >= 4; // ab Welle 5 verdrahtete Entity
          return (
            <div key={w.label} style={{
              display: 'grid', gridTemplateColumns: '90px 1fr 90px',
              gap: 14, alignItems: 'center', padding: '6px 0',
              borderTop: i > 0 ? `1px dotted ${palette.border}` : 'none',
              fontFamily: "'Fira Code', monospace", fontSize: 12,
            }}>
              <span style={{ color: palette.text }}>{w.label}</span>
              <div style={{ position: 'relative', height: 16,
                background: palette.bgSunken, border: `1px solid ${palette.border}` }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, height: '100%',
                  width: `${pct}%`,
                  background: isActive ? palette.accent : palette.textDim,
                  opacity: isActive ? 1 : 0.4,
                }} />
                <span style={{
                  position: 'absolute', top: 0, left: 8, height: 16, lineHeight: '16px',
                  fontSize: 10, color: pct > 30 ? palette.bg : palette.text,
                  fontWeight: 500,
                }}>{w.tests}</span>
              </div>
              <span style={{ color: palette.textDim, fontSize: 10.5 }}>{w.note}</span>
            </div>
          );
        })}
      </div>

      <p style={{
        marginTop: 28, fontFamily: "'Fira Code', monospace", fontSize: 13,
        color: palette.textSecondary, lineHeight: 1.7, maxWidth: 760,
      }}>
        Ab Welle 5 war die Testing-Entity im Prozess verdrahtet: sie schreibt Tests, reicht
        Findings an den Debugger weiter, und der Zyklus läuft ohne manuellen Anstoß.{' '}
        <strong style={{ color: palette.text }}>668 der 1.509 Tests entstanden in den letzten drei Wellen</strong> —
        durch den Prozess selbst. <strong style={{ color: palette.accent }}>0 High-Severity Findings</strong>{' '}
        im finalen Audit.
      </p>
      <p style={{
        marginTop: 12, fontFamily: "'Rajdhani', sans-serif", fontStyle: 'italic',
        fontSize: 15, color: palette.text, fontWeight: 500,
      }}>
        Die Aufgabe des Entwicklers war, den Prozess zu entwerfen — und ihm dann nicht im Weg zu stehen.
      </p>
    </section>
  );
};

// ─── Systemabgrenzung (ersetzt "Was es NICHT ist") ─────────────────────
const SecSystemabgrenzung = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    borderTop: `1px solid ${palette.border}`,
  }}>
    <div style={{
      fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: 2,
      color: palette.textDim, textTransform: 'uppercase', marginBottom: 18,
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <span style={{ color: palette.accent }}>// 03</span>
      <span style={{ flex: '0 0 14px', height: 1, background: palette.border }} />
      <span>Systemabgrenzung</span>
    </div>
    <h2 style={{
      fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: 40,
      margin: '0 0 14px', color: palette.text, letterSpacing: -0.5, lineHeight: 1.05,
    }}>Was CIPHER-MUX <em style={{ color: palette.textDim }}>nicht</em> ist.</h2>
    <p style={{
      margin: '0 0 24px', maxWidth: 720, fontFamily: "'Fira Code', monospace",
      fontSize: 14, color: palette.textSecondary, lineHeight: 1.7,
    }}>Zur transparenten Einordnung:</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: 820 }}>
      {[
        'Kein kommerzielles Produkt, sondern ein generiertes Open-Source-Projekt, das aus dem eigenen Bedarf heraus entstanden ist.',
        'Kein Ersatz für die Claude Code CLI, sondern eine grafische Orchestrierungsschicht, die darauf aufsetzt.',
        'Kein Werkzeug, das vage Ideen magisch umsetzt. Die Fähigkeit, technische Spezifikationen präzise zu formulieren, bleibt wichtig.',
        'Aktuell auf macOS beschränkt, da die Architektur stark mit dem Terminal-Multiplexer tmux verzahnt ist.',
        'Setzt Claude Code voraus — welches Abo das einschließt, kann sich ändern. Aktuelle Infos: anthropic.com',
      ].map((item, i) => (
        <li key={i} style={{
          display: 'flex', gap: 16, padding: '12px 0',
          borderBottom: `1px dotted ${palette.border}`,
          fontFamily: "'Rajdhani', sans-serif", fontSize: 16, lineHeight: 1.55,
          color: palette.textSecondary, textWrap: 'pretty',
        }}>
          <span style={{
            flex: '0 0 28px', fontFamily: "'Fira Code', monospace", fontSize: 11,
            color: palette.accent, letterSpacing: 1, paddingTop: 4,
          }}>0{i + 1}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

Object.assign(window, {
  PillarToggle, SecPillarsV2, SecBuiltWithItself, SecSystemabgrenzung,
  PILLARS_V2, WAVES,
});
