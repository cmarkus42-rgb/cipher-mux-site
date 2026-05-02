const docs = {
  hero: {
    kicker: 'Reference · v0.9.9',
    title: 'Technical Documentation.',
    body: 'Detailed reference for parameters, architecture, shortcuts, and configuration. Alternatively, the local Companion session can be used for contextual answers to system queries.',
  },
  sections: [
    {
      id: 'interface',
      title: '§ 01 · Interface',
      lead: 'The UI is divided into the grid for sessions/editors and the status bar for metrics and global toggles. The Launcher popup (Cmd+N) serves to start new sessions or open notes.',
    },
    {
      id: 'grid-sessions',
      title: '§ 02–03 · Grid and Sessions',
      lead: 'Sessions represent isolated context windows. They can be arranged in up to 21 cells. Header elements control the project focus or provide direct access to the underlying shell.',
    },
    {
      id: 'input-storage',
      title: '§ 04–06 · Input and Storage',
      lead: 'Details the control of voice input (Voice-Pill, LED status indicators), the layout of the sidebar (Message Bus, Background Tasks), and the structure of Markdown editors including auto-save and tagging mechanisms.',
    },
    {
      id: 'project-lifecycle',
      title: '§ 07–08 · Project Structure and Lifecycle',
      lead: 'Defines the expected folder hierarchy (e.g., .claude/, docs/specs/, src/) and explains the sequential execution of agent presets from specification (Ideation) to final review (Audit).',
    },
    {
      id: 'personas-workspaces',
      title: '§ 09–12 · Personas, Workspaces, and Settings',
      lead: 'Documents the adjustment of system responses (Personas) and the creation of predefined grid layouts (Workspaces). The Settings dialog configures themes, local LLM endpoints (Ollama host), and hardware integrations.',
    },
    {
      id: 'shortcuts-bugreports',
      title: '§ 13–15 · Shortcuts and Bug Reports',
      lead: 'Lists all keyboard shortcuts for navigation, layout changes, and application actions. Explains the functionality of the system-wide bug report tool, which formats diagnostic data for further processing.',
    },
  ],
} as const;

export default docs;
