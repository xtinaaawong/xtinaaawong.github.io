# Portfolio Session Summary
_Last updated: August 3, 2026_

## Project Overview
Plain HTML/CSS/JS portfolio — no build step, double-click to open in browser.
Files live in `/Users/tina/Desktop/Portfolio 26/`.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Home page |
| `clientholdings.html` | Case study — Client Holdings (BNY) |
| `restrictions.html` | Case study — Restrictions (BNY) |
| `selfservicemetrics.html` | Case study — Self-Service Metrics (Carver Edison) |
| `design-spec.md` | Grid, typography, color, component spec |
| `hamburger.svg` | Custom hamburger icon (3 lines, lengths 12/10/8, stroke #9BA2BA) |
| `Strings.png` | Background image spanning hero + work sections |
| `noisy-gradients.png` | Background texture inside case study cards/image areas |
| `clientholdings-image.png` | Card/hero image for Client Holdings |
| `restrictions-image.png` | Card/hero image for Restrictions |
| `selfservicemetrics-image.png` | Card/hero image for Self-Service Metrics |

---

## Design System

**Fonts**
- Body: `'Helvetica Neue', Helvetica, Arial, sans-serif` → `var(--font-helvetica)`
- Mono: `'JetBrains Mono', monospace` → `var(--font-mono)` (weights 300, 400 via Google Fonts)

**Colors**
- `--color-body: #1a1a1a`
- `--color-secondary: #4d4d4d`
- `--color-border: #e6e6e6`
- `--color-mid: #c7c7c7`
- `--color-tag-bg: rgba(128,128,128,0.25)`

**Body background:** `linear-gradient(180deg, #EDF0F1 0%, #E6E9ED 50%, #F0F5F0 100%)`

**Grid**
- Desktop (1025px+): 100px side margins → `.container { padding-inline: 100px }`
- Tablet/Mobile (≤1024px): 24px side margins

**Drop shadow (cards):** `0px 4px 12px 4px rgba(55,71,131,0.05)`

---

## Nav (all 4 pages — identical CSS)

**Behavior**
- `position: fixed; top: 0; left: 0; right: 0; z-index: 1000`
- Background: `rgba(237,240,241,0.92)` + `backdrop-filter: blur(10px)`
- Scroll **down** past 80px → adds `.nav--hidden` → `transform: translateY(-100%); opacity: 0`
- Scroll **up** → removes `.nav--hidden` → slides back in
- Transition: `transform 0.35s ease, opacity 0.3s ease`
- Desktop padding: `16px 100px`; tablet: `16px 24px`; mobile: `14px 24px`

**Desktop links (hidden on mobile ≤767px)**
```html
<div class="nav-links">
  <a href="..." class="nav-link">Work</a>
  <a href="about.html" class="nav-link">About</a>
  <a href="https://www.linkedin.com/in/tina22" target="_blank" class="nav-link">LinkedIn</a>
  <a href="mailto:xtinalw@gmail.com" class="nav-link nav-link--button">Email</a>
</div>
```
- Text links: hover → `::after` underline grows left-to-right (width 0 → 100%, 0.25s)
- `.nav-link--button` (Email): `#D7E3EE` fill, `#4d4d4d` border, 4px radius; hover → gradient `#BCC4E1 → #fff`

**Mobile hamburger (visible ≤767px)**
```html
<button class="nav-hamburger" id="nav-hamburger">
  <span class="hamburger-label">Menu</span>
  <span class="hamburger-icon-wrap">
    <span class="icon-hamburger"><!-- hamburger.svg inline --></span>
    <span class="icon-xmark"><i class="fa-solid fa-xmark"></i></span>
  </span>
</button>
```
- Button styled same as Email button (`#D7E3EE`, border, 4px radius)
- Font Awesome 6.5.1 loaded via cdnjs CDN
- Icon toggle animation: hamburger rotates +90° out / xmark rotates in from -90°; opacity crossfade

**Mobile menu overlay**
```html
<div class="mobile-menu" id="mobile-menu">
  <nav class="mobile-menu-links">
    <a href="about.html" class="mobile-menu-link">About</a>
    <a href="...#work" class="mobile-menu-link">Work</a>
    <a href="linkedin..." class="mobile-menu-link">LinkedIn</a>
    <a href="mailto:..." class="mobile-menu-link mobile-menu-link--button">Email</a>
  </nav>
</div>
```
- `position: fixed; top: 52px; left:0; right:0; bottom:0; z-index: 999`
- Background: `rgba(255,255,255,0.98)`
- Links centered vertically; fade in/out via opacity transition
- Tap outside to close; tap any link to close

**JS (all pages, in `<script>` before `</body>`)**
- Scroll listener (passive) → hide/show nav
- Hamburger click → toggle `.is-open` on button + overlay
- `document` click → close if outside both elements
- Each mobile link click → close menu

---

## index.html — Home Page

**Structure**
```
<body>
  <div class="hero-work-wrapper">          ← position:relative, overflow:hidden
    <div class="hero-strings">             ← Strings.png absolute bg
    <section class="hero">
      <div class="container hero-inner">
        <nav id="main-nav">...</nav>
        <div class="mobile-menu">...</div>
        <div class="hero-content">         ← max-width: 867px (8 of 12 cols)
    <section id="work" class="work-section">
      <!-- 3 case study cards -->
  </div><!-- end hero-work-wrapper -->
  <section id="experience" class="experience-section">
  <footer>
  <button id="anim-toggle">               ← fixed bottom-right, toggles ripple/glare
  <script>...</script>
```

**Hero title**
- Font: Helvetica Neue, 500 weight, 64px, line-height 1, letter-spacing -0.03em
- Responsive: 48px (≤1024px), 36px (≤767px)

**"effortless" word animation**
- Two-layer system: outer `.gradient-word` = stroke only (`-webkit-text-stroke: 1px rgba(155,162,186,0.5)`); `::before` = gradient fill (no stroke)
- Default: **ripple** — `linear-gradient(90deg, #8f9bbf, #BCC4E1, #dde2f0, #fff, ...)` animating `background-position`
- Toggle: **glare** — single left-to-right sweep every 7s
- Toggle button: fixed, bottom-right, pill shape, glass bg

**Case study cards**
- Featured card (Client Holdings): full width, 450px image height, links → `clientholdings.html`
- Secondary cards (Restrictions + Self-Service Metrics): 50/50 flex row, link to `restrictions.html` / `selfservicemetrics.html`
- Card border-radius: 24px (desktop/tablet), 8px (mobile)

**Hero content padding-top:** 150px desktop, 88px tablet, 48px mobile
**Work section padding:** 88px desktop, 88px tablet, 48px mobile

---

## Case Study Pages (clientholdings, restrictions, selfservicemetrics)

**Shared structure**
```
<body>
  <div class="page">                       ← position:relative, overflow:hidden
    <div class="page-strings">             ← Strings.png absolute bg (top:80px, left:-13%, width:116%, height:60%)
    <div class="container page-inner">
      <nav id="main-nav">...</nav>
      <div class="mobile-menu">...</div>
      <div class="hero-grid">              ← two-column flex
        <div class="hero-left">           ← flex: 1.42 1 0
        <div class="hero-right">          ← flex: 1 1 0
      <div class="cs-image-wrap">         ← full-width image area
  <footer>
  <script>...</script>
```

**Breakpoints**
- ≤1200px: hero-grid stacks to single column
- ≤767px: mobile styles

**hero-grid padding-top:** 109px desktop, 88px (≤1200px), 48px (≤767px)

**Hero title**
- 500 weight, letter-spacing -0.03em
- 48px desktop → 36px (≤1200px) → 24px (≤767px)

**Meta labels** (Role, Timeline, Company)
- `.meta-label`: `var(--font-mono)`, 0.8rem, uppercase, `var(--color-secondary)`
- `.meta-value`: Helvetica Neue, 14px, `var(--color-secondary)` — no text-transform

**Tags** (`.tag`): JetBrains Mono light, 12px, uppercase, `rgba(128,128,128,0.25)` bg, 4px radius, 8px gap

**Solved card** (`.solved-card`)
- Background: `linear-gradient(116deg, rgba(188,196,225,0.8) 0.9%, rgba(255,255,255,0.4) 99.1%)`
- Border: 1px `--color-mid`, 8px radius
- Footer row: "Reach out for the full case study" + Email button (`mailto:xtinalw@gmail.com`)

**Case study image wrap** (`.cs-image-wrap`)
- `noisy-gradients.png` as absolute bg
- `border-radius: 24px`, padding 48px desktop → 32px tablet → 20px/8px-radius mobile

**Footer** (all pages identical)
- Background: `linear-gradient(129deg, rgba(188,196,225,0.5) 0.9%, rgba(255,255,255,0.25) 99.1%)`
- Horizontal links: About, Experience, LinkedIn, Email (button)
- Font: JetBrains Mono, 0.8rem, uppercase
- Links: `::after` underline animation (same as nav, excluding button)
- "Christina Wong 2026" below links

---

## Content per Case Study

### clientholdings.html
- Title: "Client Holdings: Surfacing client data that supports financial health, tax, and risk exposure"
- Tags: B2B, Metrics
- Role: Product Designer | Timeline: July 2026 / 3 weeks | Company: BNY (Bank of New York)
- Image: `clientholdings-image.png`

### restrictions.html
- Title: "Restrictions: new features with a new streamlined flow"
- Tags: Workflow, B2B
- Role: Product Designer | Timeline: 2024 / 2 months | Company: BNY (Bank of New York)
- Image: `restrictions-image.png`

### selfservicemetrics.html
- Title: "Providing clients with their ESPP metrics on a self-service platform"
- Tags: Data Dashboard, Fintech, B2B
- Role: Lead Product Designer | Timeline: 2023 / 3 months | Company: Carver Edison
- Image: `selfservicemetrics-image.png`

---

## Pending / Future Work
- **About page** — not yet built; user hasn't shared Figma design for it
- **Password protection** — user mentioned wanting this for the overall portfolio; not implemented
- Case study "What we Solved" bullets are placeholder content — user should review and update with real copy

---

## External Dependencies
- Google Fonts: `JetBrains Mono` (weights 300, 400) via `<link>` in `<head>`
- Font Awesome 6.5.1 via cdnjs CDN (for `fa-solid fa-xmark` in mobile hamburger)
