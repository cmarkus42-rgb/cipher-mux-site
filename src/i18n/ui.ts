export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui: Record<Lang, Record<string, string>> = {
  de: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.docs': 'Dokumentation',
    'nav.changelog': 'Changelog',
    'nav.github': 'GitHub',
    'theme.tooltip': 'Theme wechseln',
    'footer.mark': 'CIPHER-MUX',
    'footer.version': 'v0.9.101 · macOS · MIT',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// auf dieser seite',
    'docs.nav.label': '// dokumentation',
    'docs.nav.start': 'Schnelleinstieg',
    'docs.nav.concepts': 'Prozess & Konzepte',
    'docs.nav.usage': 'Nutzung der App',
    'docs-nav.start.sub': '01 · Vom Start zum Projekt',
    'docs-nav.concepts.sub': '02 · Warum spezialisierte Sessions',
    'docs-nav.usage.sub': '03 · Volle Referenz',
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.docs': 'Documentation',
    'nav.changelog': 'Changelog',
    'nav.github': 'GitHub',
    'theme.tooltip': 'Change theme',
    'footer.mark': 'CIPHER-MUX',
    'footer.version': 'v0.9.101 · macOS · MIT',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// on this page',
    'docs.nav.label': '// documentation',
    'docs.nav.start': 'Quick Start',
    'docs.nav.concepts': 'Process & Concepts',
    'docs.nav.usage': 'Using the App',
    'docs-nav.start.sub': '01 · From start to project',
    'docs-nav.concepts.sub': '02 · Why specialized sessions',
    'docs-nav.usage.sub': '03 · Full reference',
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang][key] || ui[defaultLang][key] || key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
