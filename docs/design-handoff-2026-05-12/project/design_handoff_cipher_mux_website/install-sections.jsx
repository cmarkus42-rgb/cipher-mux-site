// CIPHER-MUX — Install-Page sections.
// Reuses palette / spacing tokens + chrome from features-shared.jsx.
// Vocabulary: cut-corners (clipPath), mono type, terminal blocks, dotted dividers.

// ─── Generic phase shell — like SectionShell but with a phase-marker on the left ─────
const PhaseShell = ({ id, num, kicker, title, lead, time, palette, sp, children }) => (
  <section id={id} style={{
    padding: `${sp.sectionPadY}px ${sp.sectionPadX}px`,
    paddingRight: `${sp.sectionPadX + 64}px`,
    borderBottom: `1px solid ${palette.line}`,
    position: 'relative',
  }}>
    <div style={{ maxWidth: 1080 }}>
      {/* phase header line */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 10 }}>
        <div style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 14,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: palette.accent,
        }}>{num} · {kicker}</div>
        {time && (
          <div style={{
            fontFamily: "'Fira Code'", fontSize: 11, color: palette.textDim,
            letterSpacing: '0.08em',
            border: `1px solid ${palette.line}`,
            padding: '2px 8px',
            clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
          }}>{time}</div>
        )}
      </div>
      <h2 style={{
        fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: sp.h2,
        margin: '0 0 16px 0', color: palette.text, letterSpacing: '-0.01em',
        lineHeight: 1.05,
      }}>{title}</h2>
      {lead && (
        <p style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: sp.lead,
          color: palette.textSecondary, margin: '0 0 32px 0', maxWidth: 780,
          lineHeight: 1.45, textWrap: 'pretty',
        }}>{lead}</p>
      )}
      {children}
    </div>
  </section>
);

// ─── Hero ────────────────────────────────────────────────────────────────────
const InstallHero = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 1.4}px ${sp.sectionPadX}px ${sp.sectionPadY}px`,
    borderBottom: `1px solid ${palette.line}`,
    position: 'relative',
  }}>
    <div style={{ maxWidth: 1080 }}>
      <div style={{
        fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 13,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: palette.accent, marginBottom: 18,
      }}>Get started</div>

      <h1 style={{
        fontFamily: "'Rajdhani'", fontWeight: 700,
        fontSize: 'clamp(56px, 7vw, 96px)',
        margin: '0 0 28px 0', color: palette.text,
        letterSpacing: '-0.02em', lineHeight: 0.95,
      }}>
        Vom Mac zum Cockpit.<br />
        <span style={{ color: palette.accent }}>~20 Minuten.</span> Einmalig.
      </h1>

      <p style={{
        fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 22,
        color: palette.textSecondary, margin: '0 0 36px 0', maxWidth: 760,
        lineHeight: 1.4, textWrap: 'pretty',
      }}>
        Du brauchst einen Mac, einen Anthropic-Account und Geduld für ein bisschen Terminal.
        Den Rest macht die App. Danach öffnest du nur noch das Cockpit und tippst.
      </p>

      {/* Phase strip */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
        marginTop: 8, maxWidth: 920,
      }}>
        {[
          { n: '01', label: 'Installation', time: '~10 min' },
          { n: '02', label: 'Erster Start', time: '~5 min' },
          { n: '03', label: 'Erstes Ergebnis', time: '~5–10 min' },
          { n: '04', label: 'Weiter', time: 'wann du willst' },
        ].map((p, i) => (
          <div key={p.n} style={{
            background: palette.surface,
            border: `1px solid ${palette.line}`,
            padding: '14px 14px 12px',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
            position: 'relative',
          }}>
            <div style={{
              fontFamily: "'Fira Code'", fontSize: 10, color: palette.textDim,
              letterSpacing: '0.12em', marginBottom: 6,
            }}>PHASE {p.n}</div>
            <div style={{
              fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 18,
              color: palette.text, marginBottom: 4,
            }}>{p.label}</div>
            <div style={{
              fontFamily: "'Fira Code'", fontSize: 11, color: palette.accent,
              letterSpacing: '0.06em',
            }}>{p.time}</div>
          </div>
        ))}
      </div>

      {/* DMG download CTA */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 18, marginTop: 36,
        flexWrap: 'wrap',
      }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            background: palette.accent, color: palette.bg,
            fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 15,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '14px 22px', display: 'inline-block',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          }}>↓ cipher-mux-0.9.0.dmg</span>
        </a>
        <div style={{
          fontFamily: "'Fira Code'", fontSize: 12, color: palette.textDim,
          letterSpacing: '0.06em',
        }}>
          macOS · Apple Silicon · 142 MB · SHA-256 verifiziert
        </div>
      </div>

      {/* Honest disclosure */}
      <div style={{
        marginTop: 28, padding: '14px 18px',
        background: palette.surfaceAlt,
        border: `1px solid ${palette.line}`,
        borderLeft: `3px solid ${palette.accent}`,
        maxWidth: 720,
      }}>
        <div style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 13,
          color: palette.accent, letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 6,
        }}>Ehrlich gesagt</div>
        <div style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 16,
          color: palette.textSecondary, lineHeight: 1.45,
        }}>
          Phase 1 verlangt Terminal-Befehle. Nicht weil wir's hipster finden, sondern weil
          Claude Code CLI Voraussetzung ist und sich nicht per Klick installiert. Wir führen
          dich Schritt für Schritt durch — copy/paste reicht.
        </div>
      </div>
    </div>
  </section>
);

// ─── Reusable: Step block ───────────────────────────────────────────────────
const StepBlock = ({ letter, title, desc, children, palette, sp }) => (
  <div style={{ marginBottom: 36 }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 14 }}>
      <div style={{
        flex: '0 0 44px', height: 44,
        background: palette.accent, color: palette.bg,
        fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 22,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
      }}>{letter}</div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 26,
          color: palette.text, margin: '0 0 6px 0', lineHeight: 1.1,
        }}>{title}</h3>
        {desc && (
          <p style={{
            fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 16,
            color: palette.textSecondary, margin: 0, lineHeight: 1.45,
            maxWidth: 720,
          }}>{desc}</p>
        )}
      </div>
    </div>
    {children}
  </div>
);

// ─── Terminal block ─────────────────────────────────────────────────────────
const TerminalBlock = ({ lines, palette, title }) => (
  <div style={{
    background: palette.terminalBg,
    border: `1px solid ${palette.line}`,
    fontFamily: "'Fira Code'", fontSize: 13, lineHeight: 1.7,
    margin: '14px 0',
    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
  }}>
    {/* terminal title bar */}
    <div style={{
      padding: '8px 14px',
      borderBottom: `1px solid ${palette.line}`,
      display: 'flex', alignItems: 'center', gap: 10,
      background: palette.terminalChrome,
    }}>
      <div style={{ display: 'flex', gap: 5 }}>
        <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
        <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FEBC2E' }} />
        <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28C840' }} />
      </div>
      <div style={{
        fontSize: 11, color: palette.textDim, letterSpacing: '0.06em',
        marginLeft: 4,
      }}>{title || 'Terminal'}</div>
    </div>
    <div style={{ padding: '14px 18px' }}>
      {lines.map((line, i) => {
        if (typeof line === 'string') {
          return <div key={i} style={{ color: palette.terminalText }}>{line}</div>;
        }
        // {prompt, cmd, out, comment}
        if (line.comment) {
          return (
            <div key={i} style={{ color: palette.textDim, fontStyle: 'italic' }}>
              # {line.comment}
            </div>
          );
        }
        if (line.cmd) {
          return (
            <div key={i} style={{ color: palette.terminalText }}>
              <span style={{ color: palette.accent }}>{line.prompt || '$'}</span>{' '}
              <span style={{ color: palette.text }}>{line.cmd}</span>
            </div>
          );
        }
        if (line.out) {
          return (
            <div key={i} style={{ color: palette.textDim }}>{line.out}</div>
          );
        }
        if (line.spacer) {
          return <div key={i} style={{ height: 6 }} />;
        }
        return null;
      })}
    </div>
  </div>
);

// ─── Stolperstellen card ────────────────────────────────────────────────────
const PitfallCard = ({ items, palette }) => (
  <div style={{
    border: `1px solid ${palette.line}`,
    background: palette.surfaceAlt,
    padding: '16px 18px',
    margin: '14px 0 0',
    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
  }}>
    <div style={{
      fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 12,
      color: palette.warn || '#D08770',
      letterSpacing: '0.16em', textTransform: 'uppercase',
      marginBottom: 10,
    }}>⚠ Stolperstellen</div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
      {items.map((it, i) => (
        <li key={i} style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 15,
          color: palette.textSecondary, lineHeight: 1.5,
          padding: '6px 0',
          borderTop: i > 0 ? `1px dotted ${palette.line}` : 'none',
          textWrap: 'pretty',
        }}>
          <span style={{ color: palette.accent, fontFamily: "'Fira Code'", fontSize: 12 }}>›</span>{' '}
          {it}
        </li>
      ))}
    </ul>
  </div>
);

// ─── Phase 1 · Installation ─────────────────────────────────────────────────
const SecPhase1 = ({ palette, sp }) => (
  <PhaseShell id="phase1" num="01" kicker="Installation"
    title="Claude Code CLI + die App"
    time="~10 min · einmalig"
    palette={palette} sp={sp}
    lead="Zwei Schritte. Erst die CLI, dann die App. Wenn du Node bereits hast, brauchst du nur die ersten zwei Befehle."
  >
    <StepBlock letter="A" palette={palette} sp={sp}
      title="Claude Code CLI installieren"
      desc="Voraussetzung — ohne Claude Code läuft nichts. Wenn npm bereits da ist, ist's ein Einzeiler. Sonst kommt erst Homebrew + Node."
    >
      <TerminalBlock palette={palette} title="Terminal · Spotlight → Terminal"
        lines={[
          { comment: 'Falls du bereits npm hast — direkt los:' },
          { cmd: 'npm install -g @anthropic-ai/claude-code' },
          { spacer: true },
          { comment: 'Sonst zuerst Homebrew installieren:' },
          { cmd: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' },
          { out: '==> Installation successful!' },
          { spacer: true },
          { comment: 'Dann Node — bringt npm mit:' },
          { cmd: 'brew install node' },
          { spacer: true },
          { comment: 'Und jetzt Claude Code:' },
          { cmd: 'npm install -g @anthropic-ai/claude-code' },
          { out: '+ @anthropic-ai/claude-code@1.x.x' },
          { spacer: true },
          { comment: 'Prüfen + erstmalig starten (Login im Browser):' },
          { cmd: 'claude --version' },
          { out: 'claude-code 1.x.x' },
          { cmd: 'claude' },
          { out: '→ Browser öffnet sich, einloggen, Tab schließt sich.' },
          { out: '→ CLI ist autorisiert. Strg+C zum Beenden.' },
        ]}
      />

      <PitfallCard palette={palette} items={[
        'Du brauchst einen Anthropic-Account (Free/Pro/Max). Anlegen unter claude.ai bevor du startest.',
        'Beim ersten brew-Aufruf installiert macOS die Xcode Command Line Tools — das dauert ca. 5 Minuten. Geduld.',
        'Wenn npm install -g eine Permission-Warnung wirft, mit sudo nachschießen: sudo npm install -g @anthropic-ai/claude-code',
      ]} />
    </StepBlock>

    <StepBlock letter="B" palette={palette} sp={sp}
      title="CIPHER-MUX installieren"
      desc="Standard-DMG-Flow. tmux ist mitgeliefert — du musst nichts mehr im Terminal anfassen."
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 18,
        alignItems: 'start',
      }}>
        {/* DMG flow steps */}
        <div style={{
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          padding: '18px 20px',
          clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        }}>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', counterReset: 'dmg' }}>
            {[
              { t: 'DMG öffnen', d: 'Doppelklick auf cipher-mux-0.9.0.dmg' },
              { t: 'In Applications ziehen', d: 'Standard-macOS-Drag-and-Drop' },
              { t: 'Erster Start: Rechtsklick → Öffnen', d: 'Wegen Gatekeeper bei unsignierter App. Einmalig.' },
              { t: 'Berechtigungen erteilen', d: 'Accessibility (für globale Shortcuts) · evtl. Mikrofon (für Voice)' },
            ].map((step, i) => (
              <li key={i} style={{
                display: 'flex', gap: 14, padding: '10px 0',
                borderTop: i > 0 ? `1px dotted ${palette.line}` : 'none',
                counterIncrement: 'dmg',
              }}>
                <div style={{
                  flex: '0 0 28px', height: 28,
                  border: `1.5px solid ${palette.accent}`,
                  color: palette.accent,
                  fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 14,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
                }}>{i + 1}</div>
                <div>
                  <div style={{
                    fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 16,
                    color: palette.text, marginBottom: 2,
                  }}>{step.t}</div>
                  <div style={{
                    fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 14,
                    color: palette.textSecondary, lineHeight: 1.4,
                  }}>{step.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* DMG window mock */}
        <div style={{
          background: palette.terminalBg,
          border: `1px solid ${palette.line}`,
          aspectRatio: '4/3',
          clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* DMG title bar */}
          <div style={{
            padding: '8px 12px', background: palette.terminalChrome,
            borderBottom: `1px solid ${palette.line}`,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: "'Fira Code'", fontSize: 11, color: palette.textDim,
          }}>
            <div style={{ display: 'flex', gap: 5 }}>
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FF5F57' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#FEBC2E' }} />
              <span style={{ width: 10, height: 10, borderRadius: 5, background: '#28C840' }} />
            </div>
            <span>cipher-mux-0.9.0</span>
          </div>
          {/* DMG body — app icon + arrow + applications */}
          <div style={{
            padding: '36px 24px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-around',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72, background: palette.accent,
                margin: '0 auto 8px',
                clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 26,
                color: palette.bg, letterSpacing: '-0.02em',
              }}>CM</div>
              <div style={{
                fontFamily: "'Fira Code'", fontSize: 10,
                color: palette.terminalText,
              }}>cipher-mux.app</div>
            </div>
            <div style={{
              fontFamily: "'Rajdhani'", fontSize: 28, color: palette.accent,
              opacity: 0.6,
            }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72,
                border: `2px dashed ${palette.line}`,
                margin: '0 auto 8px',
                clipPath: 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Rajdhani'", fontSize: 22, color: palette.textDim,
              }}>A</div>
              <div style={{
                fontFamily: "'Fira Code'", fontSize: 10,
                color: palette.textDim,
              }}>Applications</div>
            </div>
          </div>
        </div>
      </div>

      <PitfallCard palette={palette} items={[
        'Beim ersten Start blockiert Gatekeeper — Rechtsklick → Öffnen → Bestätigen. Danach normaler Doppelklick.',
        'Accessibility-Berechtigung muss in Systemeinstellungen → Datenschutz aktiv geschaltet werden, sonst funktionieren globale Shortcuts nicht.',
        'tmux wird intern mitgeliefert — du musst nichts manuell installieren. Sessions überleben App-Neustarts trotzdem.',
      ]} />
    </StepBlock>
  </PhaseShell>
);

// ─── Phase 2 · Erster Start ─────────────────────────────────────────────────
const SecPhase2 = ({ palette, sp }) => (
  <PhaseShell id="phase2" num="02" kicker="Erster Start"
    title="Die Companion meldet sich"
    time="~5 min"
    palette={palette} sp={sp}
    lead="Beim ersten Öffnen siehst du ein leeres Grid. Eine Cell ist vorbelegt mit der Companion — sie stellt drei Fragen, lernt dich kennen, und zeigt dir wie du dein erstes Projekt öffnest."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
      alignItems: 'start', marginTop: 8,
    }}>
      {/* Left — companion conversation mock */}
      <div style={{
        background: palette.surface,
        border: `1px solid ${palette.line}`,
        padding: '0',
        clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
        overflow: 'hidden',
      }}>
        {/* Cell header */}
        <div style={{
          padding: '10px 14px',
          background: palette.surfaceAlt,
          borderBottom: `1px solid ${palette.line}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: "'Fira Code'", fontSize: 11, color: palette.textDim,
        }}>
          <span><span style={{ color: palette.accent }}>●</span> companion · cell 1/1</span>
          <span>wayne</span>
        </div>

        {/* Conversation */}
        <div style={{ padding: '20px 22px', fontFamily: "'Fira Code'", fontSize: 13, lineHeight: 1.65 }}>
          <div style={{ color: palette.accent, marginBottom: 4 }}>wayne ▸</div>
          <div style={{ color: palette.text, marginBottom: 18 }}>
            Hey! Ich bin dein Guide. Kurz drei Fragen, dann legen wir los.
          </div>

          <div style={{ color: palette.textDim, marginBottom: 4 }}># Frage 1</div>
          <div style={{ color: palette.text, marginBottom: 6 }}>Coding-Hintergrund?</div>
          <div style={{
            display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap',
          }}>
            {['Keiner', 'Etwas', 'Viel'].map((opt, i) => (
              <span key={opt} style={{
                fontSize: 11, padding: '5px 11px',
                background: i === 1 ? palette.accent : 'transparent',
                color: i === 1 ? palette.bg : palette.textSecondary,
                border: `1px solid ${i === 1 ? palette.accent : palette.line}`,
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
              }}>{opt}{i === 1 && ' ✓'}</span>
            ))}
          </div>

          <div style={{ color: palette.textDim, marginBottom: 4 }}># Frage 2</div>
          <div style={{ color: palette.text, marginBottom: 6 }}>KI-Erfahrung?</div>
          <div style={{
            display: 'flex', gap: 6, marginBottom: 16, flexWrap: 'wrap',
          }}>
            {['Nie', 'ChatGPT etc.', 'Claude Code'].map((opt, i) => (
              <span key={opt} style={{
                fontSize: 11, padding: '5px 11px',
                background: i === 2 ? palette.accent : 'transparent',
                color: i === 2 ? palette.bg : palette.textSecondary,
                border: `1px solid ${i === 2 ? palette.accent : palette.line}`,
                clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
              }}>{opt}{i === 2 && ' ✓'}</span>
            ))}
          </div>

          <div style={{ color: palette.textDim, marginBottom: 4 }}># Frage 3</div>
          <div style={{ color: palette.text, marginBottom: 8 }}>Was willst du bauen?</div>
          <div style={{
            border: `1px solid ${palette.line}`, padding: '8px 12px',
            background: palette.bg,
            color: palette.textSecondary, fontSize: 12,
            clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)',
          }}>
            Erstmal gucken — vielleicht ein paar Notizen-Tools_
          </div>

          <div style={{
            marginTop: 18, padding: '10px 0',
            borderTop: `1px dotted ${palette.line}`,
            color: palette.accent, fontSize: 11, letterSpacing: '0.06em',
          }}>
            ✓ user-profile.json erstellt
          </div>
        </div>
      </div>

      {/* Right — what happens narrative */}
      <div>
        <div style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 14,
          color: palette.accent, letterSpacing: '0.16em',
          textTransform: 'uppercase', marginBottom: 12,
        }}>So läuft's ab</div>

        <ol style={{
          margin: 0, padding: 0, listStyle: 'none',
        }}>
          {[
            { n: '1', t: 'App öffnet → leeres Grid', d: 'Ein 1×1 Layout zur Begrüßung. Keine Reizüberflutung.' },
            { n: '2', t: 'Companion-Cell vorbelegt', d: 'Wayne — die Begleiter-Persona — übernimmt die erste Cell.' },
            { n: '3', t: 'Drei kurze Fragen', d: 'Coding-Erfahrung, KI-Vorwissen, Vorhaben. Speichert ein Profil.' },
            { n: '4', t: 'Sprache passt sich an', d: 'Companion redet jetzt auf deinem Level. Kein Tech-Jargon ohne Grund.' },
            { n: '5', t: 'Erstes Projekt öffnen', d: 'Pfad eingeben oder Demo-Projekt nehmen. Claude Code startet in der Cell.' },
          ].map((step) => (
            <li key={step.n} style={{
              display: 'flex', gap: 14, padding: '12px 0',
              borderBottom: `1px dotted ${palette.line}`,
            }}>
              <div style={{
                flex: '0 0 26px',
                fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 26,
                color: palette.accent, lineHeight: 1, opacity: 0.7,
              }}>{step.n}</div>
              <div>
                <div style={{
                  fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 17,
                  color: palette.text, marginBottom: 2,
                }}>{step.t}</div>
                <div style={{
                  fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 14,
                  color: palette.textSecondary, lineHeight: 1.45,
                }}>{step.d}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </PhaseShell>
);

// ─── Mini grid mock — used in Phase 3 ───────────────────────────────────────
const MiniGrid = ({ cells, label, palette }) => (
  <div>
    <div style={{
      fontFamily: "'Fira Code'", fontSize: 10, color: palette.textDim,
      letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6,
    }}>{label}</div>
    <div style={{
      display: 'grid', gap: 4,
      gridTemplateColumns: `repeat(${cells[0].length}, 1fr)`,
      aspectRatio: `${cells[0].length} / ${cells.length}`,
      width: '100%',
      background: palette.surfaceAlt,
      border: `1px solid ${palette.line}`,
      padding: 4,
    }}>
      {cells.flat().map((c, i) => (
        <div key={i} style={{
          background: c.active ? palette.accent : palette.surface,
          border: `1px solid ${palette.line}`,
          fontFamily: "'Fira Code'", fontSize: 9,
          color: c.active ? palette.bg : palette.textDim,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          letterSpacing: '0.04em', padding: 4, textAlign: 'center',
        }}>{c.label || ''}</div>
      ))}
    </div>
  </div>
);

// ─── Phase 3 · Erstes Ergebnis ──────────────────────────────────────────────
const SecPhase3 = ({ palette, sp }) => (
  <PhaseShell id="phase3" num="03" kicker="Erstes Ergebnis"
    title="Drei Aktionen, dann hast du's drauf"
    time="~5–10 min"
    palette={palette} sp={sp}
    lead="Wayne führt dich durch drei Mikro-Schritte. Kein Tutorial-Theater — echte Aktionen, mit echtem Output. Danach kennst du Grid, Cells, Focus und Sidebar."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18,
      marginTop: 8,
    }}>
      {/* Action 1 — Type something */}
      <div style={{
        background: palette.surface,
        border: `1px solid ${palette.line}`,
        padding: '20px 22px',
        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
      }}>
        <div style={{
          fontFamily: "'Fira Code'", fontSize: 10, color: palette.accent,
          letterSpacing: '0.16em', marginBottom: 8,
        }}>AKTION 01</div>
        <h3 style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 22,
          margin: '0 0 10px', color: palette.text, lineHeight: 1.1,
        }}>Etwas tippen</h3>
        <p style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 14,
          color: palette.textSecondary, margin: '0 0 14px', lineHeight: 1.5,
        }}>
          Gib Claude einen einfachen Auftrag in der ersten Cell. Du siehst: er arbeitet,
          Output erscheint im Terminal.
        </p>
        <MiniGrid palette={palette} label="Grid · 1×1"
          cells={[[{ active: true, label: 'CC ▸' }]]} />
        <div style={{
          marginTop: 12, padding: '8px 10px',
          background: palette.terminalBg,
          fontFamily: "'Fira Code'", fontSize: 11,
          color: palette.terminalText, lineHeight: 1.5,
          border: `1px solid ${palette.line}`,
        }}>
          <span style={{ color: palette.accent }}>›</span>{' '}
          Erklär mir was in diesem Projekt passiert
        </div>
      </div>

      {/* Action 2 — Second session */}
      <div style={{
        background: palette.surface,
        border: `1px solid ${palette.line}`,
        padding: '20px 22px',
        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
      }}>
        <div style={{
          fontFamily: "'Fira Code'", fontSize: 10, color: palette.accent,
          letterSpacing: '0.16em', marginBottom: 8,
        }}>AKTION 02</div>
        <h3 style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 22,
          margin: '0 0 10px', color: palette.text, lineHeight: 1.1,
        }}>Zweite Session</h3>
        <p style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 14,
          color: palette.textSecondary, margin: '0 0 14px', lineHeight: 1.5,
        }}>
          Spalte hinzufügen, neue Session öffnen. Zwei parallele Claude-Cells.
          Das Kernfeature.
        </p>
        <MiniGrid palette={palette} label="Grid · 1×2"
          cells={[[
            { active: true, label: 'CC ▸' },
            { active: true, label: 'CC ▸' },
          ]]} />
        <div style={{
          marginTop: 12, padding: '8px 10px',
          background: palette.terminalBg,
          fontFamily: "'Fira Code'", fontSize: 11,
          color: palette.terminalText, lineHeight: 1.5,
          border: `1px solid ${palette.line}`,
        }}>
          <span style={{ color: palette.textDim }}># Shortcut</span><br />
          <span style={{ color: palette.accent }}>⌘ + →</span>{' '}
          fügt Spalte rechts hinzu
        </div>
      </div>

      {/* Action 3 — Sidebar / Notes */}
      <div style={{
        background: palette.surface,
        border: `1px solid ${palette.line}`,
        padding: '20px 22px',
        clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
      }}>
        <div style={{
          fontFamily: "'Fira Code'", fontSize: 10, color: palette.accent,
          letterSpacing: '0.16em', marginBottom: 8,
        }}>AKTION 03</div>
        <h3 style={{
          fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 22,
          margin: '0 0 10px', color: palette.text, lineHeight: 1.1,
        }}>Sidebar entdecken</h3>
        <p style={{
          fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 14,
          color: palette.textSecondary, margin: '0 0 14px', lineHeight: 1.5,
        }}>
          Sidebar öffnen, Notes-Tab öffnen, erste Notiz schreiben.
          Memory ist hier zuhause.
        </p>
        {/* Sidebar mock */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 4,
          aspectRatio: '2 / 1',
          background: palette.surfaceAlt,
          border: `1px solid ${palette.line}`,
          padding: 4,
        }}>
          <div style={{
            background: palette.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Fira Code'", fontSize: 9, color: palette.bg,
            letterSpacing: '0.06em',
          }}>NOTES</div>
          <div style={{
            background: palette.surface, border: `1px solid ${palette.line}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Fira Code'", fontSize: 9, color: palette.textDim,
          }}>CC ▸</div>
        </div>
        <div style={{
          marginTop: 12, padding: '8px 10px',
          background: palette.terminalBg,
          fontFamily: "'Fira Code'", fontSize: 11,
          color: palette.terminalText, lineHeight: 1.5,
          border: `1px solid ${palette.line}`,
        }}>
          <span style={{ color: palette.textDim }}># Shortcut</span><br />
          <span style={{ color: palette.accent }}>⌘ + B</span>{' '}
          schaltet Sidebar um
        </div>
      </div>
    </div>

    {/* Outcome strip */}
    <div style={{
      marginTop: 28, padding: '18px 22px',
      background: palette.surfaceAlt,
      border: `1px solid ${palette.line}`,
      borderLeft: `3px solid ${palette.accent}`,
    }}>
      <div style={{
        fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 13,
        color: palette.accent, letterSpacing: '0.14em',
        textTransform: 'uppercase', marginBottom: 10,
      }}>Nach diesen drei Aktionen hast du</div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14,
      }}>
        {[
          'Claude Code läuft',
          'Zwei parallele Sessions',
          'Grid · Cells · Focus verstanden',
          'Sidebar + Notes gefunden',
        ].map((item) => (
          <div key={item} style={{
            fontFamily: "'Rajdhani'", fontWeight: 500, fontSize: 15,
            color: palette.text, lineHeight: 1.4,
            display: 'flex', gap: 8, alignItems: 'baseline',
          }}>
            <span style={{ color: palette.accent }}>✓</span> {item}
          </div>
        ))}
      </div>
    </div>
  </PhaseShell>
);

// ─── Phase 4 · Wohin als nächstes ───────────────────────────────────────────
const SecPhase4 = ({ palette, sp }) => (
  <PhaseShell id="phase4" num="04" kicker="Weiter"
    title="Wayne schlägt vor — du wählst"
    time="wann du willst"
    palette={palette} sp={sp}
    lead="Je nach Skill-Level hat die Companion verschiedene nächste Schritte. Kein Druck — du kannst auch einfach machen."
  >
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
      marginTop: 8,
    }}>
      {[
        {
          tag: 'Einsteiger',
          title: 'Voice + Notes',
          guide: 'Guide 02',
          desc: 'Morgen zeig ich dir Voice Input und wie du Notes als zweites Gedächtnis nutzt.',
          color: palette.accent,
        },
        {
          tag: 'Fortgeschritten',
          title: 'Orchestrator',
          guide: 'Guide 03',
          desc: 'Wenn du magst, zeig ich dir den Orchestrator — wie mehrere Sessions zusammenarbeiten.',
          color: palette.accent,
        },
        {
          tag: 'Power-User',
          title: 'MPO + Prompting',
          guide: 'Guide 03 + 05',
          desc: 'Du weißt was du tust. Orchestrierung und Prompt-Design wenn du tiefer rein willst.',
          color: palette.accent,
        },
      ].map((card) => (
        <div key={card.tag} style={{
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          padding: '22px 24px',
          clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: 14, right: 16,
            fontFamily: "'Fira Code'", fontSize: 10, color: palette.textDim,
            letterSpacing: '0.1em',
          }}>{card.guide}</div>
          <div style={{
            fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 11,
            color: card.color, letterSpacing: '0.18em',
            textTransform: 'uppercase', marginBottom: 10,
          }}>{card.tag}</div>
          <h4 style={{
            fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 28,
            margin: '0 0 10px', color: palette.text, letterSpacing: '-0.01em',
          }}>{card.title}</h4>
          <p style={{
            fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 15,
            color: palette.textSecondary, margin: 0, lineHeight: 1.5,
            textWrap: 'pretty',
          }}>{card.desc}</p>
        </div>
      ))}
    </div>
  </PhaseShell>
);

// ─── Bottom CTA — re-download / docs / github ──────────────────────────────
const SecInstallBottom = ({ palette, sp }) => (
  <section style={{
    padding: `${sp.sectionPadY * 0.9}px ${sp.sectionPadX}px`,
    background: palette.surfaceAlt,
    borderBottom: `1px solid ${palette.line}`,
  }}>
    <div style={{ maxWidth: 1080 }}>
      <h2 style={{
        fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 48,
        margin: '0 0 14px', color: palette.text, letterSpacing: '-0.01em',
        lineHeight: 1.05, maxWidth: 720, textWrap: 'balance',
      }}>
        Bereit? <span style={{ color: palette.accent }}>Lad's runter.</span>
      </h2>
      <p style={{
        fontFamily: "'Rajdhani'", fontWeight: 400, fontSize: 18,
        color: palette.textSecondary, margin: '0 0 28px', maxWidth: 640,
        lineHeight: 1.5,
      }}>
        Apple Silicon empfohlen. Intel-Macs funktionieren — ohne Ollama-Integration.
        Linux & Windows: kommt.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            background: palette.accent, color: palette.bg,
            fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 15,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '14px 22px', display: 'inline-block',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          }}>↓ DMG · Apple Silicon</span>
        </a>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{
            background: 'transparent', color: palette.text,
            border: `1px solid ${palette.line}`,
            fontFamily: "'Rajdhani'", fontWeight: 700, fontSize: 15,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '13px 22px', display: 'inline-block',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
          }}>↓ DMG · Intel (no Ollama)</span>
        </a>
        <a href="#" style={{
          fontFamily: "'Fira Code'", fontSize: 13, color: palette.textSecondary,
          textDecoration: 'none', marginLeft: 10,
          borderBottom: `1px dotted ${palette.textDim}`, paddingBottom: 2,
        }}>github / cipher-mux ↗</a>
        <a href="#" style={{
          fontFamily: "'Fira Code'", fontSize: 13, color: palette.textSecondary,
          textDecoration: 'none',
          borderBottom: `1px dotted ${palette.textDim}`, paddingBottom: 2,
        }}>docs ↗</a>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  PhaseShell, InstallHero, StepBlock, TerminalBlock, PitfallCard, MiniGrid,
  SecPhase1, SecPhase2, SecPhase3, SecPhase4, SecInstallBottom,
});
