# Portfolio Design Spec

---

## Grid

| Breakpoint | Margins | Gutters | Columns |
|------------|---------|---------|---------|
| Desktop    | 100px   | 24px    | 12      |
| Tablet     | 24px    | 24px    | 8       |
| Mobile     | 24px    | 24px    | 4       |

---

## Typography

### Fonts
- **Helvetica Neue** — headings, body, UI text
- **JetBrains Mono** — nav links, tag chips

### Scale

| Element | Font | Weight | Size | Line Height | Case |
|---------|------|--------|------|-------------|------|
| Main title | Helvetica Neue | Bold | 48px | 100% | — |
| Subtitle (Senior Product Designer...) | Helvetica Neue | Regular | 20px | — | — |
| Tag chips | JetBrains Mono | Light | 12px | — | Uppercase |
| Navbar links | JetBrains Mono | — | 15px | — | Uppercase |
| Button label | Helvetica Neue | — | 14px | — | — |

---

## Colors

| Role | Hex |
|------|-----|
| Main body text | `#1A1A1A` |
| Secondary text | `#4D4D4D` |
| Borders | `#E6E6E6` |

---

## Navbar

- Links: JetBrains Mono, 15px, uppercase
- Hover state: 2px border-bottom, 2px padding-bottom between text and border

---

## Buttons

### Default
- Fill: `#D7E3EE`
- Border: 1px solid `#4D4D4D`
- Border radius: 4px
- Text color: `#1A1A1A`
- Font: Helvetica Neue, 14px

### Hover
- Fill: linear-gradient(to right, `#BCC4E1`, `#FFFFFF`)
- Border: 1px solid `#BCC4E1`

---

## Drop Shadow (Case Study Cards)

```
box-shadow: 0px 4px 12px 4px rgba(55, 71, 131, 0.05);
```

| Property | Value |
|----------|-------|
| X offset | 0 |
| Y offset | 4px |
| Blur | 12px |
| Spread | 4px |
| Color | `#374783` at 5% opacity |

---

## Case Study Cards

### Border Radius
- Desktop & Tablet: 24px
- Mobile: 8px

### Layout
- Featured card: spans full column width
- All other cards: 24px padding on all sides
- Image padding: 24px on all sides (all breakpoints)
- Image height (desktop): 450px, scaled
- Image height (tablet/mobile): fluid, sized to content

### Tags
- Gap between tags: 8px

### Backgrounds
- Card background: `noisy-gradients` asset
- Image files: `*-image.png` files placed inside cards

### Strings Section
- `strings.png` fills the section immediately above the Experience section

---

## Assets

| Asset | Usage |
|-------|-------|
| `noisy-gradients` | Case study card backgrounds |
| `strings.png` | Full-bleed background, section above Experience |
| `*-image.png` | Images inside case study cards |
