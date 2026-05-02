# Deploy: Custom Domain cipher-cipher-mux.dev

## Ziel

cipher-mux-site auf GitHub Pages mit Custom Subdomain `cipher-cipher-mux.dev`.

**Hinweis:** Die Subdomain existiert bereits bei Hostinger mit eigenem Webspace. Dieser Webspace wird nicht mehr benoetigt — der DNS-CNAME auf GitHub Pages ersetzt ihn.

## Schritte

### 1. DNS bei Hostinger

CNAME-Record anlegen:
- **Host:** `@` (root domain, kein Subdomain-Prefix mehr)
- **Typ:** CNAME
- **Ziel:** `cmarkus42.github.io`
- **TTL:** 3600 (oder Auto)

Hostinger MCP Tool: `mcp__hostinger__DNS_updateDNSRecordsV1` auf Domain `softstatics.cloud`.

### 2. Astro Config anpassen

`astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://cipher-mux.dev',
  base: '/',
  integrations: [sitemap()],
});
```

Vorher: `site: 'https://cmarkus42.github.io'`, `base: '/cipher-mux-site'`

### 3. Font-Pfade korrigieren

`src/styles/global.css` — alle `@font-face` src-Pfade:
```
VORHER: url('/cipher-mux-site/fonts/...')
NACHHER: url('/fonts/...')
```

### 4. Interne Links korrigieren

Alle Stellen die `/cipher-mux-site/` als Prefix verwenden:
- `src/components/Header.astro` — Nav-Links
- `src/pages/index.astro` — CTA-Links, Pillar-Links
- `src/components/Footer.astro` — Legal-Links
- `src/layouts/Layout.astro` — Favicon-Pfad, OG-URL

NACHHER: Astro's `import.meta.env.BASE_URL` nutzen oder einfach `/` als Prefix.

Am saubersten: Grep nach `/cipher-mux-site/` in `src/` und alle durch `/` ersetzen.

### 5. CNAME-Datei fuer GitHub Pages

`public/CNAME` anlegen mit Inhalt:
```
cipher-mux.dev
```

GitHub Pages liest diese Datei automatisch.

### 6. GitHub Repo Settings

Im Repo `cipher-mux-site` unter Settings > Pages:
- Source: GitHub Actions
- Custom domain: `cipher-mux.dev`
- Enforce HTTPS: aktivieren

### 7. OG/Meta-URLs aktualisieren

`src/layouts/Layout.astro`:
```html
<meta property="og:url" content="https://cipher-mux.dev" />
<meta property="og:image" content="https://cipher-mux.dev/images/social-preview.png" />
```

Schema.org in `src/pages/index.astro`:
```json
"url": "https://cipher-mux.dev"
```

### 8. Build + Push

```bash
npm run build
git add -A
git commit -m "feat: switch to custom domain cipher-mux.dev"
git push origin main
```

GitHub Action baut und deployed automatisch.

## Pruefung

- [ ] `dig cipher-mux.dev` zeigt CNAME auf `cmarkus42.github.io`
- [ ] `https://cipher-mux.dev` laedt die Site
- [ ] HTTPS-Zertifikat aktiv (Let's Encrypt via GitHub Pages)
- [ ] Fonts laden korrekt
- [ ] Alle internen Links funktionieren
- [ ] Theme-Toggle funktioniert
- [ ] OG-Preview bei Link-Sharing korrekt

## Voraussetzung

GitHub Repo `cmarkus42/cipher-mux-site` muss existieren und GitHub Pages muss aktiviert sein (Source: GitHub Actions).
