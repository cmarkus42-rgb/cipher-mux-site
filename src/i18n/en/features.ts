const features = {
  hero: {
    kicker: '// 02 · Architecture',
    title: 'A look under the hood.',
    subtext:
      'Here is an overview of the core building blocks: from the grid system and personas to the built-in MCP server. Everything on one page, so you can calmly understand how the components interact.',
  },
  sections: [
    {
      num: '01',
      kicker: 'Overview',
      title: 'The Application',
      lead: 'CIPHER-MUX is an Electron environment. Its core is a grid with up to 21 cells for Claude Code sessions and Markdown editors. In the background, tmux ensures that your sessions are safely preserved, even during a system restart or crash.',
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
      title: 'Using the Grid System flexibly',
      lead: 'The grid is your adaptable workspace (up to 7 columns and 3 rows). We recommend organizing your sessions via drag & drop to best suit your workflow. For longer text outputs, cells can be expanded vertically. The header controls provide quick access to project switching or the underlying shell.',
    },
    {
      num: '03',
      kicker: 'Process Management',
      title: 'Sessions and the tmux Backend',
      lead: 'Each cell hosts an isolated Claude Code process with its own context window. Because the tmux backend keeps these processes active, you can close the app at any time. Upon your next launch, a recovery dialog will help you seamlessly resume existing sessions.',
    },
    {
      num: '04',
      kicker: 'Configuration',
      title: 'Personas — Finding the right tone',
      lead: 'Personas control how the model communicates with you. Since everyone works differently, you can choose from six standard profiles (e.g., scientific-factual, extremely reduced, or Socratic). You can also create custom profiles whenever needed.',
    },
    {
      num: '05',
      kicker: 'Roles',
      title: 'Presets — Functional System Prompts',
      lead: 'While personas define the "how," presets define the "what." They give agents clear tasks, tools, and boundaries. There are eight specialized roles to structure the development process:',
      roles: [
        { name: 'Ideation Partner', description: 'For research and idea synthesis.' },
        { name: 'Refinement', description: 'For clean requirements analysis.' },
        { name: 'Cyber Factory', description: 'Handles subsystem decomposition and coordinates multiple sessions.' },
        { name: 'Testing Assistant', description: 'Critically evaluates the generated code.' },
        { name: 'Debugger', description: 'Assists with error analysis.' },
        { name: 'Audit', description: 'Conducts final code reviews.' },
      ],
    },
    {
      num: '06',
      kicker: 'Prompt Architecture',
      title: 'How Prompts are assembled',
      lead: 'The system prompt for a session is generated dynamically. It combines the function (preset), the tone (persona), and the specific project context (workspace). This ensures the agent always knows exactly what environment it is operating in.',
    },
    {
      num: '07',
      kicker: 'Audio I/O',
      title: 'Speech Recognition and Audio Output',
      lead: 'If you prefer speaking over typing, the local Whisper.cpp integration offers a great alternative – entirely without cloud dependencies. The system automatically detects pauses in speech. For the text-to-speech function, the system utilizes Piper or the familiar macOS system voice.',
    },
    {
      num: '08',
      kicker: 'Knowledge Management',
      title: 'Securing knowledge locally',
      lead: 'An integrated editor (CodeMirror 6) with Markdown support is available for notes and specifications. To keep project knowledge accessible long-term, Companion sessions use a local SQLite database. The auto-tagging process is privacy-friendly, running locally via the gemma3:4b model using Ollama.',
    },
    {
      num: '09',
      kicker: 'Interfaces',
      title: 'Model Context Protocol (MCP)',
      lead: 'A local HTTP server provides 37 tools. These enable agents to handle session management or communicate directly with one another via a message bus.',
    },
    {
      num: '10',
      kicker: 'Visual Representation',
      title: 'Display and Accessibility',
      lead: 'The cockpit is designed to be usable for everyone. Therefore, 10 color profiles are available, including a strictly WCAG AAA compliant High-Contrast theme. To ease the learning curve, the app abstracts many complex command-line processes and can even be physically controlled via Bluetooth remotes if desired.',
    },
    {
      num: '11',
      kicker: 'Resource Management',
      title: 'Efficient Token Usage',
      lead: 'Long sessions eventually hit context limits. A real-time indicator helps you monitor usage. At 90% capacity, the Orchestrator recommends or independently initiates summarization routines so no information is lost. Additionally, the system automatically selects the most appropriate LLM (Opus, Sonnet, or Haiku) based on the task\'s complexity.',
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
