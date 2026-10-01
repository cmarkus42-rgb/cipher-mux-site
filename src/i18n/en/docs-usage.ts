const docsUsage = {
  hero: {
    kicker: 'Using the App · v0.11.2',
    title: 'Every function.',
    titleAccent: 'Look it up.',
    body: 'The complete reference to every area of the app — grid, sessions, sidebar, voice, notes, settings. Made to look things up in, not to read front to back.',
  },

  sections: [
    { id: 'grid',       num: '01', title: 'The Grid',             navLabel: 'Grid' },
    { id: 'header',     num: '02', title: 'Session Cell Header',  navLabel: 'Cell Header' },
    { id: 'focus',      num: '03', title: 'Focus Mode & Pop-Out', navLabel: 'Focus & Pop-Out' },
    { id: 'sidebar',    num: '04', title: 'The Sidebar',          navLabel: 'Sidebar' },
    { id: 'voice',      num: '05', title: 'Voice Control',        navLabel: 'Voice' },
    { id: 'notes',      num: '06', title: 'Notes',                navLabel: 'Notes' },
    { id: 'projects',   num: '07', title: 'Projects and Hub',     navLabel: 'Projects' },
    { id: 'settings',   num: '08', title: 'Settings',             navLabel: 'Settings' },
    { id: 'bugreport',  num: '09', title: 'Bugreport Dialog',     navLabel: 'Bugreport' },
    { id: 'shortcuts',  num: '10', title: 'Keyboard Shortcuts',   navLabel: 'Shortcuts' },
  ],

  /* ═══════════════════════════════════════════
     §01 · The Grid
     ═══════════════════════════════════════════ */
  grid: {
    lead: 'The central area of the app. Sessions live in cells. Empty cells show a + and open the launcher popup when clicked.',

    mainParagraphs: [
      'The grid is the large area in the middle of the window. Each cell holds either a running session, a notes editor, or nothing at all. Empty cells show a <span class="docs-mono">+</span> — clicking it opens the launcher popup.',
    ],

    dragTitle: 'Drag & Drop',
    dragItems: [
      '<strong>Drag a header:</strong> Dragging a session header onto another header swaps the positions of the two sessions.',
      '<strong>Sidebar session onto the grid:</strong> Dragging a background session from the sidebar onto a cell pulls it into the grid.',
      '<strong>Notes onto the grid:</strong> Dragging a note from the sidebar onto an <em>empty</em> cell opens it in the editor. Dragging it onto an <em>occupied</em> cell sends the note content into the session as text.',
      '<strong>Files from Finder:</strong> Dragging a file onto a cell inserts the path as a shell-escaped string — without Enter. You can check the path before you submit it.',
    ],

    sizeTitle: 'Grid Size',
    sizeItems: [
      '<span class="docs-mono">columns +/-</span> and <span class="docs-mono">rows +/-</span> in the status bar',
      'Minimum 1×1 (one cell), maximum 7×3 (21 cells)',
      'Keyboard: <span class="docs-mono">Cmd+→/←</span> for columns, <span class="docs-mono">Cmd+↓/↑</span> for rows',
      'The window resizes itself automatically',
    ],

    layoutsTitle: 'Typical Layouts',
    layouts: [
      { label: '2×1', desc: 'Two sessions side by side — the default for everyday work.' },
      { label: '3×1', desc: 'Three columns — e.g. frontend / backend / tests.' },
      { label: '2×2', desc: 'Four cells — Cyber Factory plus three workers.' },
    ],

    screenshot: {
      placeholder: 'Screenshot: grid with three occupied sessions and one empty cell',
      caption: 'Grid — occupied and empty cells',
    },
  },

  /* ═══════════════════════════════════════════
     §02 · Session Cell Header
     ═══════════════════════════════════════════ */
  header: {
    lead: 'Every occupied cell has a header with status information on the left and action buttons on the right. The header color signals the entity and the context usage.',

    leftTitle: 'Left Side',
    leftItems: [
      '<strong>Neon dot:</strong> Shows the entity color. It switches at certain context thresholds: green (<26%), yellow (26–40%), orange (41–55%), red (>56%).',
      '<strong>Status icon:</strong> Check mark = active, spinner = stopping, X = error, pause = paused.',
      '<strong>Session name:</strong> Clickable to focus. The tooltip shows the topic of the session.',
      '<strong>Voice dot:</strong> Only visible when this session is the active voice target.',
      '<strong>Voice pin button:</strong> Pins voice input permanently to this session.',
    ],

    contextTitle: 'Context Bar',
    contextDesc: 'Directly below the header sits a colored bar that visualizes context usage. The bar scales so that 65% context usage fills the full width. Same color thresholds as the neon dot: green, yellow, orange, red.',

    buttonsTitle: 'Right Side — Buttons',
    buttons: [
      { icon: 'Scan',            shortcut: 'Cmd+Shift+F',  label: 'Focus Mode',      desc: 'Expand the session to 2×2 (see §03).' },
      { icon: 'ChevronDown/Up',  shortcut: '',              label: 'Expand/Collapse', desc: 'Stretch the cell to full grid height, or back again.' },
      { icon: 'GitBranch',       shortcut: '',              label: 'Fork Session',    desc: 'Fork the session — a new session with the same context.' },
      { icon: 'Camera',          shortcut: '',              label: 'Screenshot',      desc: 'Save a snapshot of the cell as an image.' },
      { icon: 'ArrowLeftRight',  shortcut: '',              label: 'Switch Project',  desc: 'Switch the project without closing the session.' },
      { icon: 'ArrowUpFromLine', shortcut: '',              label: 'Background',      desc: 'Send the session to the background (sidebar).' },
      { icon: 'Terminal',        shortcut: '',              label: 'Shell',           desc: 'Open a shell in the project directory.' },
      { icon: 'ExternalLink',    shortcut: '',              label: 'Pop-Out',         desc: 'Detach the session into its own window (see §03).' },
      { icon: '×',               shortcut: '',              label: 'Close',           desc: 'End the session (graceful shutdown).' },
    ],

    entityTitle: 'Entity Colors',
    entities: [
      { label: 'Workshop',           color: 'Blue' },
      { label: 'Cyber Factory',      color: 'Violet' },
      { label: 'Companion',          color: 'Orange' },
      { label: 'Refinement',         color: 'Red' },
      { label: 'Voice Relay',        color: 'Violet' },
      { label: 'Audit',              color: 'Dark red' },
      { label: 'Ideation Partner',   color: 'Turquoise' },
      { label: 'Debugger',           color: 'Coral' },
      { label: 'Testing Assistant',  color: 'Light green' },
      { label: 'Bugreport',          color: 'Gray' },
    ],

    screenshot: {
      placeholder: 'Screenshot: annotated session header with every element labeled',
      caption: 'Session header — every element labeled',
    },
  },

  /* ═══════════════════════════════════════════
     §03 · Focus Mode and Pop-Out
     ═══════════════════════════════════════════ */
  focus: {
    lead: 'Two ways to give a session more room: Focus Mode blows it up inside the grid, Pop-Out detaches it into its own window.',

    focusTitle: 'Focus Mode',
    focusItems: [
      'Activate: the Scan icon in the header or <span class="docs-mono">Cmd+Shift+F</span>.',
      'The session expands to 2×2 cells inside the grid.',
      'The <strong>Focus Bar</strong> appears at the top, carrying: session name, context percentage (<span class="docs-mono">CTX XX%</span>), font size slider (8–36px), ESC button.',
      'Exit: the <span class="docs-mono">ESC</span> key, the ESC button in the bar, or the Scan icon again.',
    ],

    popoutTitle: 'Pop-Out',
    popoutItems: [
      'Activate: the ExternalLink icon in the header.',
      'The session opens as a standalone window.',
      'At the top: a 28px drag region for moving it plus a Dock button to bring it back into the grid.',
    ],

    sidebarTitle: 'Sidebar as a Window',
    sidebarDesc: 'The sidebar can be detached into its own window as well — via the Detach button in the sidebar header. The Dock button brings it back.',

    screenshot: {
      placeholder: 'Screenshot: Focus Mode with Focus Bar and expanded session',
      caption: 'Focus Mode — Focus Bar and 2×2 expansion',
    },
  },

  /* ═══════════════════════════════════════════
     §04 · The Sidebar
     ═══════════════════════════════════════════ */
  sidebar: {
    lead: 'The sidebar opens via the "sidebar" button in the status bar. Five sections, all collapsible. The state is remembered.',

    sectionsTitle: 'Sections',
    sections: [
      {
        label: 'Notes',
        desc: 'Note browser with a search field, tag chips for filtering, and workspace scoping (filters automatically on workspace:<name>). Double-click opens a note in the grid. Drag it onto a cell. Bulk operations: delete with 15 seconds of undo, tag editing for several notes at once.',
      },
      {
        label: 'Background Sessions',
        desc: 'Sessions that were sent to the background with the up-arrow button. Each card shows name and context usage. A click unfolds a live preview (refreshed every 5 seconds). Double-click pulls the session into the grid. Dragging it onto a cell does the same.',
      },
      {
        label: 'Orphaned Sessions',
        desc: 'Only visible when unknown tmux sessions exist. Per session: Adopt or Terminate. Shows up after a crash, for instance.',
      },
      {
        label: 'Companion Memory',
        desc: 'Stored memories, searchable. Collapsed by default. Shows scope, timestamp and content of every entry.',
      },
      {
        label: 'Messages',
        desc: 'Messages from the Message Bus — visible during multi-session work (Cyber Factory and the like). Shows sender, timestamp and text.',
      },
    ],

    detachTip: 'The Detach button in the sidebar header detaches the sidebar into its own window — ideal for multi-monitor setups. The Dock button brings it back.',

    screenshot: {
      placeholder: 'Screenshot: sidebar open with the Notes section and tag filter',
      caption: 'Sidebar — Notes with tag filter',
    },
  },

  /* ═══════════════════════════════════════════
     §05 · Voice Control
     ═══════════════════════════════════════════ */
  voice: {
    lead: 'Local speech recognition — no network, no cloud. The voice pill in the status bar or Ctrl+Shift+Space. The fixed commands below are German, and transcription defaults to German — dictation itself follows whatever Whisper hears. An English command vocabulary does not exist yet.',

    modesTitle: 'Three Modes',
    modes: [
      { label: 'OFF', desc: 'Voice control disabled.' },
      { label: 'STT', desc: 'Microphone → text. Transcribed text is inserted into the focused session but NOT sent automatically. You can read it, correct it, then send it with "abschicken" or Enter.' },
      { label: 'COM', desc: 'Conversation mode through the Voice Relay. Bidirectional spoken conversation with TTS output (see below).' },
    ],

    ledTitle: 'LED Status',
    leds: [
      { css: 'off',    label: 'off',    desc: 'Voice is disabled' },
      { css: 'green',  label: 'green',  desc: 'ready, not listening' },
      { css: 'red',    label: 'red',    desc: 'recording right now' },
      { css: 'yellow', label: 'yellow', desc: 'processing — please wait' },
    ],

    textTitle: 'Voice Commands · Text',
    textCommands: [
      { cmd: '"abschicken" / "absenden" / "senden"', desc: 'Press Enter (submit the text).' },
      { cmd: '"neue zeile"',                          desc: 'Insert a line break.' },
      { cmd: 'anything else',                         desc: 'Is transcribed and inserted as text.' },
    ],

    scrollTitle: 'Voice Commands · Scrolling',
    scrollCommands: [
      { cmd: '"hoch" / "rauf"',            desc: 'Scroll up one page.' },
      { cmd: '"runter" / "weiter"',        desc: 'Scroll down one page.' },
      { cmd: '"ganz hoch" / "anfang"',     desc: 'All the way to the top.' },
      { cmd: '"ganz runter" / "ende"',     desc: 'All the way to the bottom.' },
      { cmd: '"zum marker" / "lesestart"', desc: 'Jump to the start of the last response.' },
    ],

    gridNavTitle: 'Voice Commands · Grid Navigation',
    gridNavCommands: [
      { cmd: '"grid hoch"',   desc: 'Focus the cell above.' },
      { cmd: '"grid runter"', desc: 'Focus the cell below.' },
      { cmd: '"grid links"',  desc: 'Focus the cell to the left.' },
      { cmd: '"grid rechts"', desc: 'Focus the cell to the right.' },
    ],
    gridNavNote: 'Variants such as <span class="docs-mono">grit</span>, <span class="docs-mono">zelle</span>, <span class="docs-mono">focus</span> are recognized as well.',

    comTitle: 'COM Mode · Voice Relay',
    comParagraphs: [
      'The Voice Relay is not a proxy session — it is a full session with its own persona, tuned for spoken conversation. It answers in short, flowing sentences without Markdown formatting. TTS is its primary output channel.',
      'In COM mode your speech is transcribed, sent to the Voice Relay, and its answer is read out via TTS. Barge-in: you can interrupt the TTS output by simply starting to speak.',
    ],

    pinTitle: 'Voice Pin',
    pinDesc: 'In STT mode: the pin button (◉) in the session header pins voice input permanently to one session. Your voice then always goes there, no matter which cell currently has focus. Click again to release the pin — after that the voice follows the grid focus again.',

    ttsTitle: 'TTS Configuration',
    ttsItems: [
      '<strong>Engine:</strong> Piper (local, fast, offline) or macOS System TTS.',
      '<strong>Verbosity:</strong> Minimal (key statements only) or everything relevant.',
      '<strong>Voices:</strong> Installed voices are visible in the settings dialog. Voice Catalog for downloading further voices.',
    ],

    btTitle: 'Bluetooth Remote',
    btItems: [
      '<strong>Auto mode:</strong> Button press = speech is transcribed and inserted immediately.',
      '<strong>Manual mode:</strong> Button press = start/stop recording, submit explicitly.',
    ],

    screenshot: {
      placeholder: 'Screenshot: status bar with the voice area (STT active, LED green)',
      caption: 'Status bar — voice area',
    },
  },

  /* ═══════════════════════════════════════════
     §06 · Notes
     ═══════════════════════════════════════════ */
  notes: {
    lead: 'Markdown editor (CodeMirror 6) in grid cells. Create, edit, tag, share — notes are the visible memory of cipher-mux.',

    createTitle: 'Creating',
    createItems: [
      'Via the launcher popup → "notes" tab → "New Note"',
      'Via the <span class="docs-mono">+</span> button in the sidebar Notes section',
      'Programmatically via MCP tools (<span class="docs-mono">mux_notes_create</span>)',
    ],

    editorTitle: 'Editor',
    editorItems: [
      'CodeMirror 6 with Markdown syntax highlighting (H1–H4 in the accent color).',
      'Automatic line wrapping.',
      '<span class="docs-mono">Cmd+F</span> to search inside the editor.',
    ],

    saveTitle: 'Saving and Tags',
    saveItems: [
      '<strong>Cmd+S:</strong> Saves and suggests tags automatically (local AI model, max. 5 tags per note).',
      '<strong>Auto-save:</strong> After 2 seconds of inactivity — without tag suggestions.',
      '<strong>Tag format:</strong> <span class="docs-mono">class:value</span> — e.g. <span class="docs-mono">workspace:CIPHER-MUX</span>, <span class="docs-mono">kind:bugreport</span>, <span class="docs-mono">status:open</span>.',
      '<strong>Exclusive classes:</strong> <span class="docs-mono">status</span> and <span class="docs-mono">kind</span> allow only one value per note.',
      '<strong>Tag autocomplete:</strong> Existing tags are suggested as you type.',
    ],

    voiceTitle: 'Voice Input',
    voiceDesc: 'When the notes editor has focus and STT is active, transcribed text is inserted at the cursor position.',

    scopingTitle: 'Workspace Scoping',
    scopingDesc: 'Inside the active workspace, the notes view filters automatically to notes carrying the tag <span class="docs-mono">workspace:&lt;name&gt;</span>.',

    handoffTitle: 'Handoff Notes',
    handoffDesc: 'Special notes for knowledge transfer between sessions. They are created automatically by the entity sessions — for example when Testing hands its findings over to the Workshop. The frontmatter holds three fields: <span class="docs-mono">from_session</span> (who wrote it), <span class="docs-mono">to_entity</span> (which entity it is for), <span class="docs-mono">handoff_status</span> (pending or consumed). You do not have to create these notes by hand — the entities do it through their handoff tools.',

    testcaseTitle: 'Testcase Notes',
    testcaseDesc: 'Notes with <span class="docs-mono">noteType: testcase</span> are rendered in the Testcase View. Format: checkbox + bold ID (<span class="docs-mono">- [ ] <strong>T-PREFIX.N</strong> description</span>).',

    comparisonTitle: 'Note vs. Memory — which one when?',
    comparisonRows: [
      { aspect: 'Visibility',      note: 'Visible in sidebar and editor, editable',           mem: 'Only viewable in the sidebar Memory tab' },
      { aspect: 'Shareability',    note: 'Shareable between sessions, readable in Obsidian',  mem: 'Internal, for the AI only' },
      { aspect: 'Typical content', note: 'Specs, findings, handoffs, feature descriptions',   mem: 'Preferences, conventions, project context' },
      { aspect: 'Created by',      note: 'User or session (manually or via MCP tool)',        mem: 'Session automatically (companion_memory_write)' },
    ],

    screenshot: {
      placeholder: 'Screenshot: notes editor with Markdown formatting and tag bar',
      caption: 'Notes editor — Markdown and tags',
    },
  },

  /* ═══════════════════════════════════════════
     §07 · Projects and Hub
     ═══════════════════════════════════════════ */
  projects: {
    lead: 'One project = one workspace = home for all assets. Create a workspace, point it at a project folder — from then on every session in the workspace knows what is being worked on.',

    structureTitle: 'Standard Folder Structure',

    adoptionTitle: 'Bringing existing projects in — three modes',
    adoptionModes: [
      { label: 'Full adoption', desc: 'The complete set of conventions is applied — all folders, ADRs, specs, .project-meta.json. The project gets the full cipher-mux structure.' },
      { label: 'Pack-Light',    desc: 'Adopt individual components only — e.g. just docs/specs or just .claude/. Otherwise the project stays as it is.' },
      { label: 'Inventory',     desc: 'Stocktaking only — nothing is changed, only what exists gets documented.' },
    ],
  },

  /* ═══════════════════════════════════════════
     §08 · Settings
     ═══════════════════════════════════════════ */
  settings: {
    lead: 'Reachable via "info" in the status bar. Seven tabs: General, Language, Themes, Shortcuts, Remote, A11y, About.',

    tabs: ['General', 'Language', 'Themes', 'Shortcuts', 'Remote', 'A11y', 'About'],

    generalTitle: 'Tab: General',
    generalRows: [
      { label: 'Skip Permissions', desc: 'The CLI may carry out actions without asking first. Careful: this disables the safety confirmation.' },
      { label: 'Default CLI',      desc: 'Which CLI new sessions start with when the role names none: Claude Code, Codex CLI or opencode. Takes effect immediately. Configurable per role in the Presets tab under "CLI".' },
      { label: 'Keep Working',     desc: 'Save all sessions on quit. Resume them on the next start.' },
      { label: 'Bugreport',        desc: 'Button that opens the bugreport dialog directly.' },
    ],

    languageTitle: 'Tab: Language',
    languageRows: [
      { label: 'Language',         desc: 'Deutsch / English — changes the entire app interface.' },
      { label: 'Voice/TTS',        desc: 'TTS on/off, TTS engine (Piper local / macOS System), verbosity, Voice Submit Mode (Auto / Manual).' },
      { label: 'Installed Voices', desc: 'List of the downloaded Piper voices.' },
      { label: 'Voice Catalog',    desc: 'Download and install further voices.' },
    ],

    themesTitle: 'Tab: Themes',
    themesIntro: '13 built-in themes in four categories:',
    themeCategories: [
      {
        category: 'Cipher Defaults',
        themes: [
          { label: 'Cipher Ivory',  desc: 'Clean, light — the default light mode.' },
          { label: 'Cipher Dark',   desc: 'Warm, dark — the default dark mode.' },
        ],
      },
      {
        category: 'Coder Classics',
        themes: [
          { label: 'Blueprint',     desc: 'Engineering draft, cyan + indigo.' },
          { label: 'Warm Paper',    desc: 'Minimal, sepia tones.' },
          { label: 'Gruvbox Dark',  desc: 'Retro coder classic.' },
          { label: 'Nord',          desc: 'Cool Scandinavian design.' },
          { label: 'Synthwave',     desc: '80s magenta + violet.' },
          { label: 'Matrix',        desc: 'Phosphor green on black.' },
        ],
      },
      {
        category: 'Style',
        themes: [
          { label: 'Brutalist',     desc: 'Black/white + signal red.' },
        ],
      },
      {
        category: 'Accessibility',
        themes: [
          { label: 'High Contrast',      desc: 'Accessible WCAG AAA design.' },
          { label: 'CVD Deuteranopia',   desc: 'Tuned for red-green deficiency.' },
          { label: 'CVD Tritanopia',     desc: 'Tuned for blue-yellow deficiency.' },
          { label: 'CVD Achromatopsia',  desc: 'Tuned for complete color blindness.' },
        ],
      },
    ],

    editorTitle: 'Theme Editor',
    editorRows: [
      { label: 'Edit',     desc: 'Color values per token group: backgrounds, text, borders, accents, context colors, highlights.' },
      { label: 'Terminal', desc: 'Adjust terminal font, size and line height. 9 preinstalled font presets.' },
      { label: 'Preview',  desc: 'Live preview without saving.' },
      { label: 'Revert',   desc: 'Undo the preview.' },
      { label: 'Save',     desc: 'Save into the active custom theme.' },
      { label: 'Save As',  desc: 'Save as a new custom theme under its own name.' },
      { label: 'Export',   desc: 'Copy the custom tokens as JSON to the clipboard.' },
    ],

    shortcutsTitle: 'Tab: Shortcuts',
    shortcutsDesc: 'All keyboard shortcuts grouped by category. Full table in §10.',

    remoteTitle: 'Tab: Remote',
    remoteDesc: 'Bluetooth remotes: detected profiles, connection state per device, and one action per button — a registered shortcut, passthrough, or disabled. A device without a profile passes its keystrokes through unchanged. The tab has been permanently visible since v0.9.104; before that a stale config gate kept it hidden.',

    a11yTitle: 'Tab: A11y (Accessibility)',
    a11yDesc: 'Select CVD themes, adjust accessibility settings.',

    aboutTitle: 'Tab: About',
    aboutDesc: 'Version, links, credits. Feature overview with explanations of the grid system, orchestration, Message Bus, MCP server, context monitoring.',

    screenshot: {
      placeholder: 'Screenshot: settings dialog, Themes tab with the theme list',
      caption: 'Settings — theme selection',
    },
  },

  /* ═══════════════════════════════════════════
     §09 · Bugreport Dialog
     ═══════════════════════════════════════════ */
  bugreport: {
    lead: 'The bugreport dialog is reachable from anywhere — via Cmd+B or through Settings → General.',

    workflowTitle: 'Flow',
    workflowSteps: [
      { step: '1. Pick a type', desc: 'Bug or feature request.' },
      { step: '2. Describe',    desc: 'Type the text or dictate it by voice (STT works inside the dialog).' },
      { step: '3. Screenshot',  desc: 'Optional — attach a screenshot of the relevant spot.' },
      { step: '4. Submit',      desc: 'Creates an issue draft as a note (with matching tags).' },
    ],

    githubTitle: 'GitHub Delivery',
    githubItems: [
      'Optional: deliver the report as a GitHub issue.',
      'The browser opens a prefilled GitHub issue.',
      'If the <span class="docs-mono">gh</span> CLI is installed and authenticated: the issue is created directly, without a browser.',
      'The issue URL is written back into the local note.',
    ],

    screenshot: {
      placeholder: 'Screenshot: bugreport dialog',
      caption: 'Bugreport dialog',
    },
  },

  /* ═══════════════════════════════════════════
     §10 · Keyboard Shortcuts
     ═══════════════════════════════════════════ */
  shortcuts: {
    lead: 'Complete reference for all shortcuts. Grouped by category.',

    navigation: {
      title: 'Navigation',
      items: [
        { key: 'Cmd+Shift+W',   action: 'Focus the cell above.' },
        { key: 'Cmd+Shift+A',   action: 'Focus the cell to the left.' },
        { key: 'Cmd+Shift+S',   action: 'Focus the cell below.' },
        { key: 'Cmd+Shift+D',   action: 'Focus the cell to the right.' },
        { key: 'Escape',        action: 'Close the active dialog.' },
      ],
    },

    layout: {
      title: 'Layout',
      items: [
        { key: 'Cmd+Shift+F',   action: 'Focus Mode on/off.' },
      ],
    },

    actions: {
      title: 'Actions',
      items: [
        { key: 'Cmd+N',              action: 'New session — launcher popup in the next empty cell.' },
        { key: 'Cmd+B',              action: 'Open the bugreport dialog.' },
        { key: 'Cmd+S',              action: 'Save note + auto-tagging.' },
        { key: 'Cmd+Enter',          action: 'Submit in dialogs (e.g. input requests in the sidebar).' },
        { key: 'Ctrl+Shift+Space',   action: 'Voice control on/off.' },
        { key: 'Cmd+Shift+?',        action: 'Open the shortcuts dialog.' },
      ],
    },

    terminal: {
      title: 'Terminal',
      items: [
        { key: 'Cmd+C',   action: 'Copy / abort the running process.' },
        { key: 'Cmd+V',   action: 'Paste.' },
      ],
    },
  },

  /* ═══════════════════════════════════════════
     Bottom CTA
     ═══════════════════════════════════════════ */
  bottom: {
    title: 'Got it?',
    titleAccent: 'Then go.',
    body: 'You know every function now. All that is missing is the app itself.',
    downloadLabel: 'Download the app',
    githubLabel: 'github / cipher-mux',
    conceptsLabel: 'Process & Concepts',
    conceptsHref: '/en/docs/concepts',
  },
} as const;

export default docsUsage;
