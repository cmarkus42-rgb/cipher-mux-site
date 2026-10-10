const docsConcepts = {
  hero: {
    kicker: 'Process & Concepts · v0.12.3',
    title: 'Why specialized',
    titleAccent: 'Sessions?',
    body: 'cipher-mux splits the phases of software development into separate AI sessions — each with its own context, its own instructions, its own limits. This page explains why that sometimes works, and when it does not.',
  },

  sections: [
    { id: 'idea',       num: '01', title: 'The Idea',                 navLabel: 'The Idea' },
    { id: 'lifecycle',  num: '02', title: 'The Lifecycle',            navLabel: 'Lifecycle' },
    { id: 'entities',   num: '03', title: 'The Entities in Detail',   navLabel: 'Entities' },
    { id: 'presets',    num: '04', title: 'Understanding Presets',    navLabel: 'Presets' },
    { id: 'personas',   num: '05', title: 'Personas (Characters)',    navLabel: 'Personas' },
    { id: 'memory',     num: '06', title: 'Memory, Tags & Scoping',   navLabel: 'Memory & Tags' },
    { id: 'honesty',    num: '07', title: 'Honesty',                  navLabel: 'Honesty' },
  ],

  /* ═══════════════════════════════════════════
     §01 · The Idea
     ═══════════════════════════════════════════ */
  idea: {
    lead: 'Ask a single Claude session to plan a feature, code it, test it and review it, and here is what happens: the context fills up, earlier instructions get compressed, quality drops. Anyone who has used Claude Code for larger jobs knows this.',
    paragraphs: [
      'The hypothesis behind cipher-mux: what if every phase of development got its own session? Its own context, its own instructions, its own focus. With clean handoffs between the phases.',
      'This is not a proven method. cipher-mux is one person’s attempt to test that hypothesis. For some tasks it works surprisingly well. For others it falls flat.',
      'Token costs are real: every session consumes API tokens. Parallel sessions multiply that. The context window is finite. Once it is full, Claude forgets — and there is no undo.',
    ],
    callout: 'Whether that is worth the effort depends on the project. For a single-file change, a bare Claude session is better. For a feature spanning ten files, tests and a spec, the structure pays off.',
  },

  /* ═══════════════════════════════════════════
     §02 · The Lifecycle
     ═══════════════════════════════════════════ */
  lifecycle: {
    lead: 'Six phases, each with its own preset. The pipeline runs sequentially — every phase hands a defined artifact to the next. Workshop and Companion cut across it.',
    crossCutting: 'Workshop is the switchboard after testing: it receives findings and distributes them to the matching entity — Debugger for bugs, Cyber Factory for larger rebuilds, Ideation for feature ideas. The Companion accompanies the entire cycle as advisor and explainer.',
    phases: [
      {
        label: 'Ideation Partner',
        input: 'Raw idea, list of keywords, vague notion',
        process: 'Researches autonomously with sub-agents, synthesizes the results, checks for robustness (pre-mortem). Asks counter-questions before it structures anything.',
        output: 'Requirements package — a structured document with goals, scope, open questions',
      },
      {
        label: 'Refinement',
        input: 'Requirements package from Ideation',
        process: 'Mandatory-field check, systematic gap audit, validation against the existing architecture. Writes a detailed spec with REQ IDs and acceptance criteria.',
        output: 'Detailed spec — precise requirements with IDs, ready for implementation',
      },
      {
        label: 'Cyber Factory',
        input: 'Detailed spec from Refinement',
        process: 'Architecture phase (subsystem decomposition, ADRs, scaffolding), then a wave plan with up to 5 parallel worker sessions in their own git worktrees. Monitoring in 5–7 minute cycles.',
        output: 'Tested implementation — code, tests, documentation per wave',
      },
      {
        label: 'Testing Assistant',
        input: 'Implementation from Cyber Factory',
        process: 'Systematic tests, adversarial probing, security audit (OWASP Top 10). Fixes nothing — documents only.',
        output: 'Findings report — to the Debugger when there are problems, to Audit on "all green"',
      },
      {
        label: 'Debugger',
        input: 'Findings from the Testing Assistant, or direct bug reports',
        process: 'Root-cause analysis, fix plan, a dedicated worker session for the fix, verification (the test must have been red before and green after the fix). At most 2 retries, then escalation to the user.',
        output: 'Cleaned-up implementation — back to Testing or on to Audit',
      },
      {
        label: 'Audit',
        input: 'Implementation after testing/debugging',
        process: 'Code review, security audit, ADR consistency check, cognitive-debt assessment. Implements nothing, fixes nothing.',
        output: 'Release recommendation: Release · Release after fix · Blocked',
      },
    ],
  },

  /* ═══════════════════════════════════════════
     §03 · The Entities in Detail
     ═══════════════════════════════════════════ */
  entities: {
    lead: 'Nine predefined entities, each with its own purpose. None of them is a jack-of-all-trades — that is deliberate.',
    items: [
      {
        label: 'Companion',
        desc: 'Your entry point. Explains concepts, helps with decisions, remembers your preferences across sessions. Writes no code. Three modes: tutor (explain), advisor (weigh up), helper (execute).',
      },
      {
        label: 'Voice Relay',
        desc: 'The Companion for voice interaction. Not a proxy session — a full session, optimized for spoken conversation. Short answers, clear sentences, TTS-friendly.',
      },
      {
        label: 'Ideation Partner',
        desc: 'Takes a vague idea and makes something concrete out of it. Researches autonomously, structures, questions (pre-mortem). The result is a requirements package, not code.',
      },
      {
        label: 'Refinement',
        desc: 'Makes requirements precise. Gap audit, REQ IDs, acceptance criteria. No code — spec only. The most boring and the most valuable phase.',
      },
      {
        label: 'Cyber Factory',
        desc: 'The builder. Architecture phase, wave plan, parallel workers, monitoring. For large structured work. Complex, resource-hungry, not for small stuff.',
      },
      {
        label: 'Workshop',
        desc: 'The orchestrator for everything that does not fit the pipeline. Receives findings from the Testing Assistant, bug reports, feature requests — and routes them sensibly: trivial things it handles itself, bugs go to the Debugger, larger topics to the Cyber Factory, feature ideas to Ideation. The switchboard after testing.',
      },
      {
        label: 'Testing Assistant',
        desc: 'Systematic testing, adversarial probing, security audit. Fixes nothing — documents findings and hands them to the Workshop for triage. The split between finding and distributing is deliberate.',
      },
      {
        label: 'Debugger',
        desc: 'Gets individual bugs assigned by the Workshop, analyzes root causes, fixes, verifies. Escalates when no solution stands after 2 attempts — back to the Workshop, which decides between Cyber Factory and escalation to the user.',
      },
      {
        label: 'Audit',
        desc: 'Reviews code, security, ADR consistency. Gives a release recommendation: Release, Release after fix, or Blocked. Implements nothing.',
      },
    ],
    decisionTitle: 'Which entity when?',
    decisionRows: [
      { situation: 'Distribute and triage test findings',    entity: 'Workshop' },
      { situation: 'Think a new idea through',               entity: 'Ideation Partner' },
      { situation: 'Implement a feature across >3 files',    entity: 'Cyber Factory' },
      { situation: '"What does the Cyber Factory do?"',      entity: 'Companion' },
      { situation: 'Spec has gaps',                          entity: 'Refinement' },
      { situation: 'Review code before release',             entity: 'Audit' },
      { situation: 'Run the tests',                          entity: 'Testing Assistant' },
      { situation: 'Fix a single bug (via Workshop)',        entity: 'Debugger' },
    ],
  },

  /* ═══════════════════════════════════════════
     §04 · Understanding Presets
     ═══════════════════════════════════════════ */
  presets: {
    lead: 'A preset is a preconfigured role with its own CLAUDE.md instructions. The layering of those instructions is the core concept — it determines how a session behaves.',
    layersIntro: 'Every session gets its instructions from five layers that build on each other:',
    layers: [
      {
        num: '1.',
        label: 'Global Rules',
        prio: 'base',
        desc: 'Injected into EVERY session. Security rules, basic tool rules, TTS guardrails. Not editable per session.',
      },
      {
        num: '2.',
        label: 'Entity Preset',
        prio: 'role',
        desc: 'The preset.md of the respective entity — role-specific instructions, phases, handoff rules. Defines WHAT the session does.',
      },
      {
        num: '3.',
        label: 'Persona (Character)',
        prio: 'style',
        desc: 'Tonality and communication style. Every preset has an assigned character — Relay for the Companion, Cipher for the Factory, and so on. Defines HOW the session communicates.',
      },
      {
        num: '4.',
        label: 'Workspace Prompt',
        prio: 'context',
        desc: 'Injected into all sessions of this workspace. Project-specific context, conventions, directories.',
      },
      {
        num: '5.',
        label: 'Cell Prompt',
        prio: 'individual',
        desc: 'For this specific cell only. One-off instructions, overrides, special rules.',
      },
    ],
    variability: 'Same preset + different workspace + different persona = different behavior. A Refinement preset in the workspace "cipher-mux" works differently than in the workspace "client website" — because the workspace prompt supplies different context and the persona sets a different tone.',
    folderTitle: 'Folder Structure',
    folderDesc: 'Every entity has its own directory under <span class="docs-mono">~/.config/cipher-mux/entities/</span>:',
    folderItems: [
      '<span class="docs-mono">preset.md</span> — the main instructions of the role',
      '<span class="docs-mono">guides/</span> — supplementary guides and references',
      '<span class="docs-mono">ref/</span> — reference material, examples, templates',
    ],
    builtinTitle: 'Builtin vs. Custom',
    builtinDesc: 'Built-in presets are fixed — you can use them, but not change them. You create your own presets in the workspace editor: name, prompt text, done. If you want to go deeper, you can build a complete preset folder with the help of Claude Code — with guides, reference material and specialized slash commands. Because it is not the prompt alone that makes a preset special.',
    screenshot: {
      placeholder: 'Screenshot: preset editor in the workspace window, Global Rules visible',
      caption: 'Preset editor — layering visible',
    },
  },

  /* ═══════════════════════════════════════════
     §05 · Personas (Characters)
     ═══════════════════════════════════════════ */
  personas: {
    lead: 'Personas define HOW cipher-mux communicates — tonality and style, not function. Six are built in. You create your own in the workspace editor.',
    items: [
      {
        label: 'Relay',
        desc: 'Calm, precise, science-journalistic. No praise without checking. Starting character for the Companion and for general sessions.',
      },
      {
        label: 'Cipher',
        desc: 'Positive cyberpunk, pragmatically loyal. Dry, direct, sentinel mentality.',
      },
      {
        label: 'Wayne',
        desc: 'Pragmatic enthusiast. "We’ll figure it out" attitude. Nerd humor allowed.',
      },
      {
        label: 'Der Kyniker',
        desc: 'Facts and code only. Yes/no where possible. Maximally compressed, telegraphic.',
      },
      {
        label: 'Theaitetos',
        desc: 'Leads through questions, not answers. Exposes gaps in your thinking, prompts reflection.',
      },
      {
        label: 'The Glitch',
        desc: 'Breaks thought patterns. Unconventional metaphors, creative friction. Not for every day.',
      },
    ],
    globalTitle: 'Global Override',
    globalDesc: 'In the workspace editor you can activate a persona globally — it then applies to all sessions, regardless of preset. Useful when you currently prefer one particular tonality.',
    customTitle: 'Custom Personas',
    customDesc: 'Name, color and prompt text — a persona needs no more than that. The built-in personas are editable, and you can create as many of your own as you like.',
    screenshot: {
      placeholder: 'Screenshot: Companion tab in the workspace editor with the character list',
      caption: 'Persona editor — six built-in characters',
    },
  },

  /* ═══════════════════════════════════════════
     §06 · Memory, Tags & Workspace Scoping
     ═══════════════════════════════════════════ */
  memory: {
    lead: 'cipher-mux has two systems for knowledge that outlives a single session: Notes (visible, shareable) and Companion Memory (internal, automatic).',
    memoryTitle: 'Companion Memory',
    memoryDesc: 'What the AI remembers across sessions. Three scopes:',
    memoryScopes: [
      { label: 'user', desc: 'Applies always, everywhere. Your preferences, conventions, quirks.' },
      { label: 'workspace', desc: 'Applies in this workspace only. Project decisions, stack choices, open questions.' },
      { label: 'session', desc: 'Applies in this session only. Temporary notes, work in progress.' },
    ],
    notesTitle: 'Notes',
    notesDesc: 'Visible, shareable pieces of knowledge. Markdown files with tags. You see them in the sidebar, you can read them in Obsidian, and sessions can use them as a handoff medium.',
    tagsTitle: 'Tags',
    tagsDesc: 'Tags follow the format <span class="docs-mono">class:value</span> — for example <span class="docs-mono">workspace:CIPHER-MUX</span>, <span class="docs-mono">kind:bugreport</span>, <span class="docs-mono">status:open</span>. Auto-tagging by a local AI model on Cmd+S.',
    scopingTitle: 'Workspace Scoping',
    scopingDesc: 'When you activate a workspace, this happens automatically: notes are filtered to <span class="docs-mono">workspace:Name</span>. Prompts are scoped. Context directories are set. Switching workspace = different context, different notes, different tags.',
    comparisonTitle: 'Note vs. Memory — which one when?',
    comparisonRows: [
      {
        aspect: 'Visibility',
        note: 'Visible in the sidebar, editable',
        mem: 'Not visible in the UI, only inspectable in the sidebar’s Memory tab',
      },
      {
        aspect: 'Shareability',
        note: 'Shareable between sessions, readable in Obsidian',
        mem: 'Internal, for the AI only',
      },
      {
        aspect: 'Typical content',
        note: 'Specs, findings, handoffs, feature descriptions',
        mem: 'Preferences, conventions, project context',
      },
      {
        aspect: 'Example',
        note: '"Here is the findings report from testing run 3"',
        mem: '"User prefers the Relay persona for code work"',
      },
    ],
  },

  /* ═══════════════════════════════════════════
     §07 · Honesty
     ═══════════════════════════════════════════ */
  honesty: {
    lead: 'This is not a sales brochure. cipher-mux is a tool that works well for some tasks and not for others.',
    items: [
      {
        label: 'Token costs',
        text: 'Every session consumes API tokens. Parallel sessions multiply the cost. A Cyber Factory run with 5 workers burns tokens fast. This is not free.',
      },
      {
        label: 'Context limits',
        text: 'The context window is finite. Once it is full, Claude compresses older messages. Information is lost. There is no magic fix — start a new session.',
      },
      {
        label: 'Handoffs can fail',
        text: 'Sometimes the Testing Assistant does not find the right files. Sometimes the Debugger’s fix breaks something else. The system is only as good as the prompts and the LLM.',
      },
      {
        label: 'Solo maintainer',
        text: 'cipher-mux is built by one person in their spare time. "I respond when I have time." This is not a startup with a support team.',
      },
      {
        label: 'Not for everything',
        text: 'For a quick one-file change, a bare Claude Code session is better. The overhead of entities, presets and lifecycle only pays off for structured work across several files.',
      },
    ],
    closing: 'The most honest recommendation: try it. If it helps you, use it. If not, nothing lost.',
  },

  /* ═══════════════════════════════════════════
     Bottom CTA
     ═══════════════════════════════════════════ */
  bottom: {
    title: 'Next?',
    titleAccent: 'For looking things up.',
    body: 'The complete reference for every function, every button and every menu is in Using the App.',
    usageLabel: 'Using the App',
    usageHref: '/en/docs/usage',
    downloadLabel: 'Download the app',
    githubLabel: 'github / cipher-mux',
  },
} as const;

export default docsConcepts;
