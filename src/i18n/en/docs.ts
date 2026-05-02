const docs = {
  hero: {
    kicker: 'Reference · v0.9.9',
    title: 'The Manual. Everything in one place.',
    body: 'Here you will find detailed explanations of the architecture, configuration, and all keyboard shortcuts. A quick tip: You don\'t necessarily have to read this entire manual. Your local Companion session knows this documentation too. If you prefer quick answers, you can ask Wayne directly in the cockpit at any time.',
  },
  sections: [
    {
      id: 'interface',
      title: '§ 01 · Interface',
      lead: 'The interface is deliberately split into two areas: The grid in the middle is for your sessions and editors, while the status bar at the bottom is for metrics and global settings. The Launcher popup (Cmd+N) is a convenient way to start new sessions or create notes.',
    },
    {
      id: 'grid-sessions',
      title: '§ 02–03 · Grid and Sessions',
      lead: 'Think of sessions as isolated workspaces that you can organize in up to 21 cells. The controls in the header of each cell help you shift the project focus or quickly access the raw terminal shell when needed.',
    },
    {
      id: 'input-storage',
      title: '§ 04–06 · Input and Storage',
      lead: 'This section explains how to manage local voice input (including the LED indicators in the status bar). You will also find information on the sidebar\'s structure and how best to utilize the Markdown editors, including auto-save and tagging, for your knowledge management.',
    },
    {
      id: 'project-lifecycle',
      title: '§ 07–08 · Project Structure and Lifecycle',
      lead: 'To work smoothly with the agents, a specific folder hierarchy is recommended (such as .claude/ or docs/specs/). This section explains how this structure is built and how the different agent presets collaborate methodically from the initial idea to the final audit.',
    },
    {
      id: 'personas-workspaces',
      title: '§ 09–12 · Personas, Workspaces, and Settings',
      lead: 'Learn how to adapt the system\'s behavior to your preferences. It explains how to define custom personas, save predefined grid layouts (Workspaces), and adjust themes or local models (Ollama) in the Settings menu.',
    },
    {
      id: 'shortcuts-bugreports',
      title: '§ 13–15 · Shortcuts and Bug Reports',
      lead: 'A compact reference for your daily workflow. All keyboard shortcuts for quick navigation are listed here. Additionally, you will learn how the system-wide bug report tool functions, which helps you cleanly format error diagnostics for the agents.',
    },
  ],
} as const;

export default docs;
