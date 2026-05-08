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
    'footer.version': 'v0.9.99 · macOS · MIT',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// auf dieser seite',
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
    'footer.version': 'v0.9.99 · macOS · MIT',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Imprint',
    'footer.domain': 'cipher-mux.dev',
    'scroll.label': '// on this page',
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
