const features = {
  hero: {
    kicker: '// 02 · Architecture',
    title: 'System components and integrations.',
    subtext:
      'Technical overview of the core modules: Grid system, session management, personas, voice integration, and MCP server.',
  },
  sections: [
    {
      num: '01',
      kicker: 'Overview',
      title: 'The Application',
      lead: 'An Electron-based environment. A grid with up to 21 cells integrates Claude Code sessions and Markdown editors. tmux serves as the backend, ensuring session persistence during system failures.',
      stats: [
        { value: '21', label: 'cells max (7×3)' },
        { value: '7', label: 'entity types' },
        { value: '37', label: 'MCP tools across 9 categories' },
        { value: '10', label: 'UI themes (incl. WCAG AAA)' },
      ],
    },
    {
      num: '02',
      kicker: 'Interface',
      title: 'The Grid System',
      lead: 'The grid offers a maximum of 7 columns and 3 rows. Sessions can be moved via drag & drop and expanded vertically (row-span) for longer text outputs. Header controls manage project switching and shell access. Cells can accommodate either terminals or Markdown editors.',
    },
    {
      num: '03',
      kicker: 'Process Management',
      title: 'Sessions and tmux Backend',
      lead: 'Each cell encapsulates an isolated Claude Code process with its own context window. The tmux backend keeps processes active in the background. Following an application restart, a recovery dialog enables the resumption of existing sessions.',
    },
    {
      num: '04',
      kicker: 'Configuration',
      title: 'Personas — Communication Profiles',
      lead: 'Personas dictate the tone and stylistics of the model outputs. They are applied orthogonally to the functional presets. Six standard profiles are available (e.g., scientific-factual, extremely reduced, Socratic), and custom ones can be defined locally.',
    },
    {
      num: '05',
      kicker: 'Roles',
      title: 'Presets — Functional System Prompts',
      lead: 'Presets define the task, permitted MCP tools, and constraints of the respective agents. Eight specialized roles are provided, including:',
      roles: [
        { name: 'Ideation Partner', description: 'Research and synthesis.' },
        { name: 'Refinement', description: 'Requirements analysis and specification.' },
        { name: 'Cyber Factory', description: 'Subsystem decomposition and multi-session orchestration.' },
        { name: 'Testing Assistant', description: 'Adversarial probing.' },
        { name: 'Debugger', description: 'Analysis and error correction.' },
        { name: 'Audit', description: 'Code review and ADR consistency checks.' },
      ],
    },
    {
      num: '06',
      kicker: 'Prompt Architecture',
      title: 'Dynamic System Prompts',
      lead: 'The initial system prompt of a session is compiled at runtime from three layers: the function (preset), the tone (persona), and the project context (workspace). The assignment hierarchy ranges from the cell-specific prompt to the global fallback persona.',
    },
    {
      num: '07',
      kicker: 'Audio I/O',
      title: 'Speech Recognition and Text-to-Speech',
      lead: 'Integration of Whisper.cpp for local speech recognition without external cloud dependencies. Voice Activity Detection (VAD) analyzes speech pauses. Supports voice commands for navigation and control. Audio output (TTS) utilizes Piper or the macOS system voice.',
    },
    {
      num: '08',
      kicker: 'Knowledge Management',
      title: 'Editors and Persistence',
      lead: 'Integration of CodeMirror 6 for Markdown with YAML frontmatter. Local auto-tagging is supported by the gemma3:4b model via Ollama. Companion sessions utilize a SQLite/FTS5 database to store cross-project factual knowledge.',
    },
    {
      num: '09',
      kicker: 'Interfaces',
      title: 'Model Context Protocol (MCP)',
      lead: 'An integrated HTTP server provides 37 tools across 9 categories, including session management, message bus for inter-agent communication, and context monitoring. Authentication is handled via Bearer tokens.',
    },
    {
      num: '10',
      kicker: 'Visual Representation',
      title: 'Themes and Accessibility',
      lead: '10 integrated color profiles, controllable via the status bar or MCP. Includes a WCAG AAA compliant High-Contrast theme. The application abstracts command-line complexity, provides explanatory companions for concepts, and allows physical control via Bluetooth remotes.',
    },
    {
      num: '11',
      kicker: 'Resource Management',
      title: 'Token and Context Efficiency',
      lead: 'To prevent context overflows, utilization is monitored in real-time (StatusLine). The Orchestrator checks worker sessions at intervals and initiates summarization routines when memory usage reaches 90%. Multi-model routing assigns different LLMs (Opus, Sonnet, Haiku) depending on task complexity.',
    },
  ],
  scrollNavItems: [
    { id: 'cockpit', label: '01 · Cockpit' },
    { id: 'grid', label: '02 · Grid' },
    { id: 'sessions', label: '03 · Sessions' },
    { id: 'personas', label: '04 · Personas' },
    { id: 'presets', label: '05 · Presets' },
    { id: 'prompts', label: '06 · Prompts' },
    { id: 'voice', label: '07 · Voice & TTS' },
    { id: 'notes', label: '08 · Notes' },
    { id: 'mcp', label: '09 · MCP' },
    { id: 'themes', label: '10 · Themes' },
    { id: 'efficiency', label: '11 · Efficiency' },
  ],
} as const;

export default features;
