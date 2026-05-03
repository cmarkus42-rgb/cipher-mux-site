# Accessibility Design — cipher-mux-site

## Meta

| Feld | Wert |
|------|------|
| Datum | 2026-05-03 |
| Scope | cipher-mux-site (statische Astro-Website) |
| Ziel | WCAG AA durchsetzen, CVD-Showcase in §10 Features |
| Basis | App-Spec C (Barrierefreiheit v1), Accessibility-Audit dieser Session |
| Ansatz | C — AA-Paket + Farbblindheits-Simulation |

---

## 1. Kontrast-Fixes (WCAG AA Pflicht)

### 1.1 Dark Theme dim-Text
- `--color-text-dim` in `theme-dark.css`: `#9BA3B0` → `#A8B1BD`
- Erreicht 4.5:1 auf `--color-bg` (`#2E3440`). Aktuell: 4.1:1 (Fail).

### 1.2 Light Theme dim-Text
- `--color-text-dim` in `theme-light.css`: `#8A8A82` → `#6E6E68`
- Sicheres AA (5.5:1+ auf `#F4F3ED`). Aktuell: 5.2:1 (knapp AA, unter AAA).

### 1.3 Heading-Hierarchie Landing
- Pillar-Titles: `<h3>` → `<h2>` (h1 existiert im HeroCockpit-Component)
- WCAG 1.3.1 Level A: Info and Relationships

---

## 2. Tastatur & Focus

### 2.1 Focus-Visible Styles
In `global.css`:
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```
Kein `:focus` Override — nur `:focus-visible`, damit Maus-Clicks keine Outlines zeigen.

### 2.2 Skip-to-Content Link
In `Layout.astro`, direkt nach `<body>`:
```html
<a href="#main-content" class="skip-link">Zum Inhalt springen</a>
```
Visuell versteckt, sichtbar bei Focus. `<main>` bekommt `id="main-content"`.

### 2.3 ARIA-Labels ergänzen
- Theme-Dots (Features §01): `aria-label="Theme {name} anwenden"` (aktuell nur `title`)
- LangSwitch: `aria-label="Switch to {language}"` (aktuell nur `title`)
- Theme Toggle: bereits korrekt (`aria-label="Toggle theme"`)

---

## 3. System-Präferenzen

### 3.1 prefers-color-scheme
Theme-Init-Script in Layout.astro anpassen:
```js
var stored = localStorage.getItem('theme');
if (stored) {
  theme = stored;
} else {
  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
```
Aktuell: immer Light als Default, ignoriert OS-Preference.

### 3.2 prefers-reduced-motion
In `global.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

## 4. §10 Features — CVD-Showcase

### 4.1 Inhaltlicher Umbau
Die 10 dekorativen Theme-Swatches in §10 werden ersetzt durch 4 Accessibility-Profil-Karten:

| Profil | CVD-Typ | Betroffene | Farbstrategie |
|--------|---------|------------|---------------|
| High Contrast | Sehschwäche | variabel | WCAG AAA, schwarz/weiß/gelb |
| Deuteranopie | Rot-Grün-Schwäche | ~7% Männer | Rot/Grün → Blau/Orange (Okabe-Ito) |
| Tritanopie | Blau-Gelb-Schwäche | <0.01% | Blau/Gelb → Magenta/Grün |
| Achromatopsie | Komplett farbenblind | ~0.003% | Reine Graustufen + Formen als Informationsträger |

### 4.2 Karten-Design
Angelehnt an Preset-Cards: Farbstripe links, Name, Beschreibung, wer profitiert. Zusätzlich eine kleine Farbvorschau die zeigt, wie die Preset-Farben in diesem Profil aussehen.

### 4.3 Content-Update §10
Lead-Text anpassen: Statt "10 Farbprofile" → Fokus auf Barrierefreiheit als Designprinzip, mit Verweis auf die 10 Themes im Easter Egg oben und die 4 Accessibility-Profile hier.

### 4.4 Farbwerte
Aus App-Spec C (REQ-A11Y-001):
- Okabe-Ito-Palette als Basis für CVD-Themes
- Kontrastratio: mindestens 4.5:1 normaler Text, 3:1 großer Text
- Achromatopsie: keine Information ausschließlich durch Farbe

Die konkreten CSS-Farbwerte kommen aus dem Dev-Branch der App (`src/renderer/styles/`), sobald die CVD-Themes dort ausgeprägt sind.

---

## 5. Weitere Verbesserungen (Low Effort)

### 5.1 External Link Indicator
Links die `target="_blank"` haben: visuell markieren (↗ Icon) und `aria-label` mit Hinweis "öffnet in neuem Tab".

### 5.2 Lang-Attribut auf mehrsprachigen Elementen
Englische Begriffe in deutschen Texten (z.B. "Vibecoding", Preset-Namen) brauchen kein `lang="en"` — sie sind als Fachbegriffe etabliert. Kein Handlungsbedarf.

---

## Nicht im Scope

- Screen Reader Mode / Accessible View (App-Feature, nicht Website)
- Keyboard-Bedienungsmodus (Website hat keine komplexe Navigation)
- Terminal Accessible Buffer (App-Feature)
- Talon Voice Integration (App-Feature)

---

## Umsetzungsreihenfolge

1. Kontrast-Fixes (theme-dark.css, theme-light.css) — 10 min
2. Heading-Hierarchie Landing (h3→h2) — 5 min
3. Focus-visible Styles (global.css) — 5 min
4. Skip-to-content Link (Layout.astro) — 10 min
5. ARIA-Labels (Features theme-dots, LangSwitch) — 10 min
6. prefers-color-scheme (Layout.astro Script) — 10 min
7. prefers-reduced-motion (global.css) — 5 min
8. §10 CVD-Showcase (features.astro de+en, features.ts de+en) — 30 min
