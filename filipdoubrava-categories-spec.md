Build two adjacent mid-page sections — **WHAT I SHOOT** (categories showcase) and **BUILT FOR ANY SHOT** (equipment/capabilities) — for a drone aerial videographer portfolio, matching the provided screenshot with maximum fidelity. Use **Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS + Framer Motion**.

The design is **dark brutalist-cinematic with neon electric lime accent**. The page uses a near-black background, extreme-contrast neon yellow-green (`#C9F52A`) for all labels, titles, accents, and icon buttons, and rich grayscale aerial photography inside rounded dark cards. The visual language is **raw power, technical precision, cinematic monochrome, and bold condensed agency typography**.

The page should feel like:
- a premium drone production agency portfolio
- a cinematic aerial photography showreel
- a high-end action sports brand website (Red Bull, Nike visual territory)
- a brutalist editorial landing page with dark-room energy
- a flagship portfolio for a serious aerial videographer

The visual soul is the electric contrast between silence and signal — pure black canvases punctuated by a single vivid neon-lime color, each category card a dark window into a different world captured from the air.

---

# TECH STACK

```json
{
  "next": "^16.2.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "tailwindcss": "^3.4.13",
  "shadcn/ui": "latest",
  "motion": "^12.35.0",
  "lucide-react": "latest"
}
```

Recommended libraries:
- Next.js 16 App Router
- Tailwind CSS
- motion/react (Framer Motion) for entrance animations
- lucide-react for icons
- CSS pseudo-elements for card borders and overlays

Icons from lucide-react:
- `ArrowRight`
- `Crosshair`
- `Target`

---

# GLOBAL PAGE DIRECTION

These are two mid-page sections from a longer drone/aerial videographer portfolio site. The screenshot does **not** show the navbar, hero, or footer — only the **WHAT I SHOOT** category grid and the **BUILT FOR ANY SHOT** equipment showcase. Build only what is visible; do not invent sections above or below.

Both sections share an identical structural template:
- A fixed-width left info panel (~280–320px wide)
- A flexible right card region filling the remaining width

This split-panel pattern is the core layout idiom. It must be consistent across both sections.

Visual ingredients:
- Near-pure-black page background (`#080808`)
- Single neon electric lime-yellow accent (`#C9F52A`) used for ALL labels, headlines, borders, numbers, and icon buttons — no secondary accent
- All photography fully desaturated to grayscale with slightly reduced brightness
- Extremely large condensed ALL-CAPS display type for section headings (Bebas Neue)
- Very small uppercase tracking body copy for descriptions
- Rounded pill badges with neon lime border and lime text
- Circle icon buttons (neon lime border) at bottom of each left panel
- Arrow circle buttons (neon lime border) on every card, bottom-right
- Tight 6px gap between all cards
- No gradient backgrounds, no glass blur on cards, no decorative noise or particles

The design should NOT feel like a generic SaaS portfolio. It should feel industrial, raw, and visually overpowering — like a production brief typeset in neon on matte black paper.

---

# GLOBAL DESIGN TOKENS

Place in `app/globals.css`.

```css
:root {
  --background: 0 0% 3%;
  --foreground: 0 0% 95%;

  --card: 0 0% 5%;
  --card-foreground: 0 0% 95%;

  --primary: 74 92% 56%;
  --primary-foreground: 0 0% 5%;

  --secondary: 0 0% 9%;
  --secondary-foreground: 0 0% 78%;

  --muted: 0 0% 11%;
  --muted-foreground: 0 0% 52%;

  --accent: 74 92% 56%;
  --accent-foreground: 0 0% 5%;

  --border: 0 0% 100% / 0.07;
  --input: 0 0% 100% / 0.07;
  --ring: 74 92% 56%;

  --radius: 0.875rem;

  /* Brand-specific */
  --lime: #C9F52A;
  --lime-dark: #9BBC1E;
  --lime-soft: rgba(201, 245, 42, 0.12);
  --lime-glow: rgba(201, 245, 42, 0.30);
  --lime-border: rgba(201, 245, 42, 0.45);

  --black: #080808;
  --black-soft: #101010;
  --card-bg: rgba(10, 10, 10, 0.96);

  --glass-border: rgba(255, 255, 255, 0.07);
  --glass-highlight: rgba(255, 255, 255, 0.04);
}
```

---

# TAILWIND CONFIG

Extend the theme in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    fontFamily: {
      display: ["Bebas Neue", "Impact", "sans-serif"],
      heading: ["Barlow Condensed", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    colors: {
      drone: {
        DEFAULT: "#C9F52A",
        dark: "#9BBC1E",
        muted: "rgba(201, 245, 42, 0.55)",
        soft: "rgba(201, 245, 42, 0.12)",
        glow: "rgba(201, 245, 42, 0.30)",
      },
    },
    borderRadius: {
      "4xl": "2rem",
      "5xl": "2.5rem",
    },
    boxShadow: {
      "lime-glow": "0 0 20px rgba(201, 245, 42, 0.22), 0 0 60px rgba(201, 245, 42, 0.08)",
      "card-dark": "inset 0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.65)",
    },
  },
}
```

---

# FONTS

Import in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap');
```

Tailwind `fontFamily` extension (repeating from config for clarity):

```ts
fontFamily: {
  display: ["Bebas Neue", "Impact", "sans-serif"],   // mega-headlines
  heading: ["Barlow Condensed", "sans-serif"],       // card titles
  body: ["Inter", "sans-serif"],                     // descriptions, badges
}
```

Font usage table:

| Class | Font | Use case |
|---|---|---|
| `font-display` | Bebas Neue | Section mega-headlines ("WHAT I SHOOT", "BUILT FOR ANY SHOT") |
| `font-heading` | Barlow Condensed Bold | Card category/equipment titles |
| `font-body` | Inter | Badge labels, body text, descriptions, numbers |

Typography feel: compressed, industrial, mechanical, powerful. Zero serif influence — this is all-caps geometric type throughout.

**No italic serif accents visible in this screenshot.** The design is exclusively all-caps geometric — calling this out explicitly as a deliberate stylistic choice.

Section mega-headline:

```txt
font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase
```

Card category/equipment title:

```txt
font-heading text-[13px] font-bold leading-tight tracking-[0.04em] text-[#C9F52A] uppercase
```

Body/description text:

```txt
font-body text-[10px] font-medium leading-[1.3] tracking-[0.07em] text-white/55 uppercase
```

Badge label:

```txt
font-body text-[9px] font-medium tracking-[0.12em] uppercase text-[#C9F52A]
```

Equipment card number:

```txt
font-body text-[11px] font-medium tracking-[0.02em] text-[#C9F52A]
```

---

# GLOBAL CSS UTILITIES

In `app/globals.css` under `@layer components`:

```css
@layer components {

  /* Base card — solid near-black, tight dark border */
  .card-dark {
    background: rgba(10, 10, 10, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.07);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.04),
      0 8px 32px rgba(0, 0, 0, 0.65);
  }

  /* Neon lime pill badge — used for section labels */
  .badge-lime {
    display: inline-flex;
    align-items: center;
    border: 1px solid rgba(201, 245, 42, 0.45);
    border-radius: 999px;
    padding: 4px 12px;
    color: #C9F52A;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    background: rgba(201, 245, 42, 0.04);
    white-space: nowrap;
  }

  /* Circle icon button — bottom of each info panel */
  .circle-icon-btn {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(201, 245, 42, 0.40);
    color: #C9F52A;
    background: rgba(201, 245, 42, 0.04);
    transition: background 0.2s ease;
    flex-shrink: 0;
  }
  .circle-icon-btn:hover {
    background: rgba(201, 245, 42, 0.10);
  }

  /* Arrow circle button — bottom-right of every card */
  .arrow-circle-btn {
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(201, 245, 42, 0.55);
    color: #C9F52A;
    background: transparent;
    flex-shrink: 0;
    transition: background 0.2s ease, border-color 0.2s ease;
  }
  .arrow-circle-btn:hover {
    background: rgba(201, 245, 42, 0.12);
    border-color: rgba(201, 245, 42, 0.9);
  }

  /* Bottom photo gradient — dark fade for label legibility */
  .photo-overlay-bottom {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.20) 50%,
      transparent 72%
    );
  }

  /* Grayscale photo treatment */
  .photo-gray {
    filter: grayscale(100%) brightness(0.80) contrast(1.06);
  }

}
```

---

# ASSETS REQUIRED

## Category card photos (WHAT I SHOOT section)

1. **COMMERCIALS photo**
   - Aerial shot of modern skyscrapers rising through dense fog or low cloud layer
   - Dramatic, atmospheric, cinematic mood
   - City skyline partially obscured — buildings pierce through mist
   - Blue-gray tones rendered in-app as grayscale
   - Portrait orientation (tall card)
   - Suggested file: `/public/images/category-commercials.jpg`
   - Minimum dimensions: 500 × 900px

2. **SPORT photo**
   - Snowboarder mid-air above snowy mountainside, big air jump
   - Wide-angle aerial-adjacent perspective, snow spray visible
   - High contrast bright snow against sky
   - Landscape orientation (half-height card, upper column 2)
   - Suggested file: `/public/images/category-sport.jpg`
   - Minimum dimensions: 520 × 340px

3. **REAL ESTATE photo**
   - Aerial top-down or near-vertical view of a modern minimalist cubic white house
   - Clean flat-roof architecture, surrounded by sparse landscape
   - Precision geometry, architectural beauty
   - Landscape orientation (half-height card, lower column 2)
   - Suggested file: `/public/images/category-realestate.jpg`
   - Minimum dimensions: 520 × 340px

4. **EVENTS photo**
   - Aerial view of a large dense crowd at an outdoor concert or event
   - Thousands of people visible from above, compressed into a mass
   - Atmospheric, slightly abstract
   - Portrait orientation (full-height card)
   - Suggested file: `/public/images/category-events.jpg`
   - Minimum dimensions: 460 × 900px

5. **INDUSTRIALS photo**
   - Aerial top-down view of large circular industrial storage tanks or oil facility
   - Geometric circular shapes, industrial scale
   - Stark and graphic from above
   - Portrait orientation (full-height card)
   - Suggested file: `/public/images/category-industrials.jpg`
   - Minimum dimensions: 460 × 900px

## Equipment card photos (BUILT FOR ANY SHOT section)

6. **BASIC DRONE SHOTS photo**
   - DJI Mavic 3 or similar consumer-grade foldable drone, three-quarter front view
   - Dark background, near-product-shot quality
   - Compact, folded, camera visible at front
   - Suggested file: `/public/images/equip-basic-drone.jpg`
   - Minimum dimensions: 420 × 300px

7. **FPV PACKAGE photo**
   - FPV freestyle/racing drone with mounted action camera
   - Open-frame construction visible, propellers prominent
   - Dark dramatic shot
   - Suggested file: `/public/images/equip-fpv.jpg`
   - Minimum dimensions: 420 × 300px

8. **CINEMA DRONES & CAMERA photo**
   - Large professional cinema drone (Freefly Alta, DJI Matrice, or heavy-lift equivalent) with cinema camera payload on gimbal
   - Side or low-angle view, industrial scale
   - Suggested file: `/public/images/equip-cinema-drone.jpg`
   - Minimum dimensions: 420 × 300px

9. **LIVE BROADCAST OPTION photo**
   - Large commercial broadcast drone or heavy-lift multirotor platform
   - Industrial/broadcast appearance, possibly with antenna or transmission hardware
   - Suggested file: `/public/images/equip-broadcast.jpg`
   - Minimum dimensions: 420 × 300px

10. **FULL VIDEO PRODUCTION photo**
    - Videographer / cinematographer holding cinema camera on shoulder-mounted gimbal
    - Black clothing, moody dramatic lighting
    - Person visible from approximately waist or chest upward
    - Looking toward or slightly off camera
    - This card is taller than the others — ensure the photo shows person prominently
    - Suggested file: `/public/images/equip-videographer.jpg`
    - Minimum dimensions: 420 × 560px

---

# RESPONSIVE RULES

Desktop is primary. The screenshot shows only desktop layout (~1440px wide). Implement tablet and mobile as sensible defaults.

**Desktop (1024px+)**:
- Two-column layout per section: fixed 280–320px left info panel + flexible right card region
- Categories: 4-column card grid (1 tall left + 2 stacked middle + 1 tall + 1 tall)
- Equipment: 5-column equal card grid
- Mega-headline: `text-[96px]`

**Tablet (768–1024px)**:
- Left info panel becomes a full-width header block stacked above the card grid
- Circle icon button moves inline or is hidden
- Mega-headline reduces to `text-[72px]`
- Categories: 3-column grid (SPORT/REAL ESTATE remain stacked in one column)
- Equipment: 3-column grid, cards 4 and 5 wrap to second row

**Mobile (<768px)**:
- Left info panel full width, headline reduces to `text-[56px]`
- Badge remains visible above headline
- Categories: 2-column grid, COMMERCIALS and EVENTS side by side, SPORT/REAL ESTATE side by side, INDUSTRIALS full width
- Equipment: 2-column grid (cards 1–4), card 5 full width
- Arrow buttons remain but `arrow-circle-btn` reduces to 26×26px
- All photography remains grayscale

Breakpoints:

```
mobile: below 768px
tablet: 768–1024px
desktop: 1024px+
```

Desktop is primary — the screenshot does not reveal mobile behavior. Implement mobile/tablet as sensible defaults using the patterns above.

---

# PAGE STRUCTURE

App Router file tree (these two sections only):

```
app/
├── layout.tsx                          // fonts, <html lang="en" className="dark">
├── page.tsx                            // composes all page sections
├── globals.css                         // tokens + @layer components
└── components/
    ├── categories-section.tsx          // 'use client' (Framer Motion)
    ├── equipment-section.tsx           // 'use client' (Framer Motion)
    └── section-info-panel.tsx          // Server Component (static, shared)
```

`page.tsx` JSX skeleton (mid-page excerpt):

```tsx
// app/page.tsx
import { CategoriesSection } from '@/components/categories-section'
import { EquipmentSection } from '@/components/equipment-section'

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-foreground font-body">
      <main>
        {/* ... sections above ... */}
        <CategoriesSection />
        <EquipmentSection />
        {/* ... sections below ... */}
      </main>
    </div>
  )
}
```

Both section components require `'use client'` because they use Framer Motion for card entrance animations.

`SectionInfoPanel` is a shared Server Component (no motion, no hooks) accepting `badge`, `headlineLines` (string[]), and `bodyLines` (string[]) as props.

---

# SECTION 1 — WHAT I SHOOT (CATEGORIES)

`'use client'`

## 1a. Section outer layout

Outer wrapper:

```txt
relative w-full bg-[#080808] overflow-hidden
```

Inner flex container:

```txt
flex flex-row w-full max-w-[1440px] mx-auto min-h-[520px]
```

Left info column:

```txt
flex-shrink-0 w-[280px] xl:w-[320px] flex flex-col justify-between p-8 xl:p-10
```

Right card region:

```txt
flex-1 flex flex-row gap-[6px] p-[6px] pl-0
```

## 1b. Left info panel

Three stacked vertical zones: top content (badge + headline + body), then spacer, then circle button at bottom.

Badge:

```txt
badge-lime self-start
```

Content: `CATEGORIES`

Headline:

```txt
mt-5 font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase
```

Exact two-line content:

```
WHAT
I SHOOT
```

Implement as:

```tsx
<h2 className="mt-5 font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase">
  WHAT<br />I SHOOT
</h2>
```

Body text:

```txt
mt-5 font-body text-[10px] font-medium tracking-[0.08em] text-white/52 uppercase leading-[1.55]
```

Content:

```
AERIAL PERSPECTIVES FOR
EVERY STORY AND ENVIRONMENT
```

Spacer:

```txt
flex-1
```

Circle icon button:

```txt
circle-icon-btn
```

Icon: `<Crosshair size={18} />` from lucide-react. The icon in the screenshot appears to be a thin-line circle with an inner dot or crosshair — `Crosshair` is the closest match.

Full left panel implementation:

```tsx
<div className="flex-shrink-0 w-[280px] xl:w-[320px] flex flex-col justify-between p-8 xl:p-10">
  <div>
    <span className="badge-lime">CATEGORIES</span>
    <h2 className="mt-5 font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase">
      WHAT<br />I SHOOT
    </h2>
    <p className="mt-5 font-body text-[10px] font-medium tracking-[0.08em] text-white/52 uppercase leading-[1.55]">
      AERIAL PERSPECTIVES FOR<br />
      EVERY STORY AND ENVIRONMENT
    </p>
  </div>
  <button className="circle-icon-btn" aria-label="Navigate categories">
    <Crosshair size={18} />
  </button>
</div>
```

## 1c. Right card grid structure

The right side has four visible columns. Column 2 contains two vertically stacked half-height cards.

Grid layout (inner flex row):

```txt
flex flex-row gap-[6px] flex-1
```

Column 1 (COMMERCIALS — full height):

```txt
w-[220px] xl:w-[240px] flex-shrink-0 flex flex-col
```

Column 2 (SPORT + REAL ESTATE — stacked):

```txt
w-[220px] xl:w-[240px] flex-shrink-0 flex flex-col gap-[6px]
```

Column 3 (EVENTS — full height):

```txt
w-[200px] xl:w-[220px] flex-shrink-0 flex flex-col
```

Column 4 (INDUSTRIALS — full height, may clip at viewport right edge):

```txt
w-[200px] xl:w-[220px] flex-shrink-0 flex flex-col
```

## 1d. Category card pattern

All category cards (COMMERCIALS, EVENTS, INDUSTRIALS) use this full-height pattern:

Card wrapper:

```txt
card-dark relative flex-1 rounded-[14px] overflow-hidden group cursor-pointer
```

Photo:

```txt
absolute inset-0 w-full h-full object-cover photo-gray transition-transform duration-500 group-hover:scale-[1.04]
```

Photo gradient overlay:

```txt
absolute inset-0 photo-overlay-bottom
```

Bottom label row:

```txt
absolute bottom-0 left-0 right-0 flex items-end justify-between p-[14px]
```

Label:

```txt
font-heading text-[13px] font-bold tracking-[0.04em] uppercase text-[#C9F52A]
```

Arrow button:

```txt
arrow-circle-btn
```

Icon: `<ArrowRight size={13} />`

Full card implementation:

```tsx
<div className="card-dark relative flex-1 rounded-[14px] overflow-hidden group cursor-pointer">
  <img
    src="/images/category-commercials.jpg"
    alt="Commercials"
    className="absolute inset-0 w-full h-full object-cover photo-gray transition-transform duration-500 group-hover:scale-[1.04]"
  />
  <div className="absolute inset-0 photo-overlay-bottom" />
  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-[14px]">
    <span className="font-heading text-[13px] font-bold tracking-[0.04em] uppercase text-[#C9F52A]">
      COMMERCIALS
    </span>
    <button className="arrow-circle-btn" aria-label="View Commercials">
      <ArrowRight size={13} />
    </button>
  </div>
</div>
```

## 1e. COMMERCIALS card

Apply full-height card pattern. Occupies full height of section.

Photo: `/public/images/category-commercials.jpg`

Label: `COMMERCIALS`

Position: column 1.

## 1f. SPORT card

Half-height card, top of column 2.

Wrapper:

```txt
card-dark relative flex-1 rounded-[14px] overflow-hidden group cursor-pointer
```

(Same pattern as full-height card — `flex-1` in a `flex-col gap-[6px]` container gives it 50% height minus the gap.)

Photo: `/public/images/category-sport.jpg`

Label: `SPORT`

In the screenshot the SPORT card arrow appears slightly brighter — may be in a hover state in the design mock. Implement the same `arrow-circle-btn` class. No special treatment needed.

## 1g. REAL ESTATE card

Half-height card, bottom of column 2.

Same structure as SPORT. Photo: `/public/images/category-realestate.jpg`

Label: `REAL ESTATE`

## 1h. EVENTS card

Full-height card, column 3. Same pattern as COMMERCIALS.

Photo: `/public/images/category-events.jpg`

Label: `EVENTS`

## 1i. INDUSTRIALS card

Full-height card, column 4. Same pattern as COMMERCIALS.

Photo: `/public/images/category-industrials.jpg`

Label: `INDUSTRIALS`

Note: This card appears partially clipped at the right viewport edge in the screenshot. Build as a full card — the clip is a viewport artifact, not a design intent.

---

# SECTION 2 — BUILT FOR ANY SHOT (EQUIPMENT)

`'use client'`

## 2a. Section outer layout

Outer wrapper:

```txt
relative w-full bg-[#080808] overflow-hidden border-t border-white/[0.06]
```

A very subtle `1px border-t border-white/[0.06]` visually separates the two sections without breaking the monolithic dark feel.

Inner flex container:

```txt
flex flex-row w-full max-w-[1440px] mx-auto min-h-[540px]
```

Left info column:

```txt
flex-shrink-0 w-[280px] xl:w-[320px] flex flex-col justify-between p-8 xl:p-10
```

Right card region:

```txt
flex-1 flex flex-row gap-[6px] p-[6px] pl-0
```

## 2b. Left info panel

Identical structure to Section 1 left panel. Different content only.

Badge:

```txt
badge-lime self-start
```

Content: `PRODUCTION CAPABILITIES / EQUIPMENT`

Note: This badge text is significantly longer than "CATEGORIES". The `white-space: nowrap` on `.badge-lime` will allow it to remain on one line. If the panel is narrow, allow it to wrap gracefully.

Headline:

```txt
mt-5 font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase
```

Exact two-line content:

```
BUILT FOR
ANY SHOT
```

Implement as:

```tsx
<h2 className="mt-5 font-display text-[96px] leading-[0.88] tracking-[0.01em] text-[#C9F52A] uppercase">
  BUILT FOR<br />ANY SHOT
</h2>
```

Body text:

```txt
mt-5 font-body text-[10px] font-medium tracking-[0.08em] text-white/52 uppercase leading-[1.55]
```

Content:

```
PROFESSIONAL SETUPS FOR
DEMANDING PRODUCTIONS
```

Circle icon button: same `circle-icon-btn` with `<Crosshair size={18} />`.

## 2c. Equipment card grid

5 cards in a horizontal equal-width row.

Grid wrapper:

```txt
flex flex-row gap-[6px] flex-1
```

Each card column:

```txt
flex-1 min-w-0 flex flex-col
```

## 2d. Equipment card template

Each of the 5 equipment cards follows this structure. The title is at the **top** of the card (unlike category cards where the label is at the bottom). The photo fills the middle. The number and description are at the **bottom**.

Card wrapper:

```txt
card-dark relative flex flex-col rounded-[14px] overflow-hidden h-full group cursor-pointer
```

Title area (top):

```txt
px-4 pt-4 pb-2 flex-shrink-0
```

Title text:

```txt
font-heading text-[12px] font-bold tracking-[0.04em] uppercase text-[#C9F52A] leading-tight
```

Photo area (middle, grows to fill remaining space):

```txt
flex-1 relative overflow-hidden mx-[6px] rounded-[10px]
```

Photo:

```txt
absolute inset-0 w-full h-full object-cover photo-gray transition-transform duration-500 group-hover:scale-[1.04]
```

Bottom info row:

```txt
px-4 pt-3 pb-4 flex-shrink-0 flex flex-row items-end justify-between
```

Left cluster (number + description):

```txt
flex flex-col gap-[4px] flex-1 min-w-0 pr-2
```

Number:

```txt
font-body text-[11px] font-medium text-[#C9F52A] tracking-[0.02em]
```

Description:

```txt
font-body text-[9px] font-medium uppercase tracking-[0.05em] text-white/55 leading-[1.35]
```

Arrow button (bottom right):

```txt
arrow-circle-btn flex-shrink-0
```

Icon: `<ArrowRight size={12} />`

Full equipment card implementation:

```tsx
interface EquipmentCardProps {
  number: string
  title: string | string[]  // string[] for two-line titles
  description: string
  imageSrc: string
  imageAlt: string
}

export function EquipmentCard({ number, title, description, imageSrc, imageAlt }: EquipmentCardProps) {
  const titleLines = Array.isArray(title) ? title : [title]
  return (
    <div className="card-dark relative flex flex-col rounded-[14px] overflow-hidden h-full group cursor-pointer">
      <div className="px-4 pt-4 pb-2 flex-shrink-0">
        <span className="font-heading text-[12px] font-bold tracking-[0.04em] uppercase text-[#C9F52A] leading-tight">
          {titleLines.map((line, i) => (
            <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
          ))}
        </span>
      </div>
      <div className="flex-1 relative overflow-hidden mx-[6px] rounded-[10px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover photo-gray transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="px-4 pt-3 pb-4 flex-shrink-0 flex flex-row items-end justify-between">
        <div className="flex flex-col gap-[4px] flex-1 min-w-0 pr-2">
          <span className="font-body text-[11px] font-medium text-[#C9F52A]">{number}</span>
          <p className="font-body text-[9px] font-medium uppercase tracking-[0.05em] text-white/55 leading-[1.35]">
            {description}
          </p>
        </div>
        <button className="arrow-circle-btn flex-shrink-0" aria-label={`View ${Array.isArray(title) ? title.join(' ') : title}`}>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}
```

## 2e. The 5 equipment cards data

```ts
const equipmentCards = [
  {
    number: "01",
    title: "BASIC DRONE SHOTS",
    description: "CLEAN, STABLE, AND CINEMATIC AERIALS FOR EVERY PROJECT.",
    imageSrc: "/images/equip-basic-drone.jpg",
    imageAlt: "Basic drone shots",
  },
  {
    number: "02",
    title: "FPV PACKAGE",
    description: "DYNAMIC FPV SHOTS FOR IMMERSIVE AND HIGH-ENERGY VISUALS.",
    imageSrc: "/images/equip-fpv.jpg",
    imageAlt: "FPV package",
  },
  {
    number: "03",
    title: ["CINEMA DRONES", "& CAMERA"],
    description: "HIGH-END DRONES PAIRED WITH CINEMA CAMERAS.",
    imageSrc: "/images/equip-cinema-drone.jpg",
    imageAlt: "Cinema drones and camera",
  },
  {
    number: "04",
    title: ["LIVE BROADCAST", "OPTION"],
    description: "REAL-TIME TRANSMISSION FOR LIVE EVENTS AND BROADCASTS.",
    imageSrc: "/images/equip-broadcast.jpg",
    imageAlt: "Live broadcast option",
  },
  {
    number: "05",
    title: "FULL VIDEO PRODUCTION",
    description: "END-TO-END PRODUCTION FROM CONCEPT TO FINAL DELIVERY.",
    imageSrc: "/images/equip-videographer.jpg",
    imageAlt: "Full video production",
  },
]
```

Titles for cards 03 and 04 wrap to two lines:
- Card 03: `CINEMA DRONES` / `& CAMERA`
- Card 04: `LIVE BROADCAST` / `OPTION`

Card 05 ("FULL VIDEO PRODUCTION") shows a person prominently — the photo is taller/more portrait-oriented relative to the others. No layout change needed; `flex-1` on the photo region will naturally fill more space.

---

# ANIMATION SYSTEM

Both section components use `'use client'`.

## Global entrance animation

For all cards in both sections, use a fade-up with blur dissolve:

```tsx
initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.5, ease: "easeOut" }}
```

## Left panel entrance

Left info panel (badge + headline + body) animates in as one unit, sliding from left:

```tsx
initial={{ opacity: 0, x: -18 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true, margin: "-50px" }}
transition={{ duration: 0.55, ease: "easeOut" }}
```

## Stagger pattern for card grids

Category cards stagger `i * 0.07s`:

```tsx
{categoryCards.map((card, i) => (
  <motion.div
    key={card.id}
    initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
  >
    <CategoryCard {...card} />
  </motion.div>
))}
```

Equipment cards stagger `i * 0.06s` (5 cards, slightly faster):

```tsx
{equipmentCards.map((card, i) => (
  <motion.div
    key={card.number}
    className="flex-1 min-w-0 flex flex-col"
    initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
  >
    <EquipmentCard {...card} />
  </motion.div>
))}
```

## Card hover

Photo zoom on hover (already defined in card pattern):

```txt
transition-transform duration-500 group-hover:scale-[1.04]
```

Arrow button on hover:

```txt
hover:bg-[rgba(201,245,42,0.12)] hover:border-[#C9F52A] transition-colors duration-200
```

Subtle card lift on hover (optional, adds dimensionality):

```txt
transition-shadow duration-300 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.75)]
```

## No infinite motion visible

No floating, no looping, no scroll-linked reveals visible in this screenshot. Entrance animations only. Implement as static after entrance.

---

# EXACT VISUAL HIERARCHY

The eye reads these two sections in this order:

1. `WHAT I SHOOT` mega-headline — neon lime, massive, immediate, dominates the left panel
2. COMMERCIALS card — tallest card, most visual mass in the categories grid
3. `BUILT FOR ANY SHOT` mega-headline — second typographic anchor, anchors the lower half
4. SPORT card — bright snow contrast pulls attention in the upper-right quadrant of the categories grid
5. Equipment row — five cards form a unified horizontal band of equipment photography
6. Category labels (COMMERCIALS, SPORT, REAL ESTATE, EVENTS, INDUSTRIALS) — neon lime on dark cards, all visible simultaneously
7. Equipment card titles (BASIC DRONE SHOTS through FULL VIDEO PRODUCTION) — neon top labels across the equipment row
8. Arrow buttons — small neon lime circles punctuate bottom-right of every card
9. `CATEGORIES` and `PRODUCTION CAPABILITIES / EQUIPMENT` badges — small, first text read in each panel
10. Body text under each headline — very dim, supporting role only
11. Equipment numbers (01–05) — lime accent, small, bottom-left of each equipment card
12. Equipment descriptions — smallest, dimmest text, final read layer
13. Circle icon buttons — bottom-left of each info panel, terminal visual element

Make sure the mega-headlines remain the strongest typographic element. The cards should read as a silent dark gallery — photography speaks through monochrome, text reads only in neon.

---

# SPACING AND LAYOUT DETAILS

```json
{
  "page_max_width": "1440px",
  "section_min_height": "520px",
  "equipment_section_min_height": "540px",
  "left_panel_width": "280px",
  "left_panel_width_xl": "320px",
  "left_panel_padding": "32px",
  "left_panel_padding_xl": "40px",
  "badge_padding": "4px 12px",
  "badge_font_size": "9px",
  "headline_font_size": "96px",
  "headline_line_height": "0.88",
  "body_font_size": "10px",
  "body_tracking": "0.08em",
  "circle_btn_size": "48px",
  "arrow_btn_size": "30px",
  "card_gap": "6px",
  "card_border_radius": "14px",
  "card_inner_photo_radius": "10px",
  "card_outer_padding": "6px",
  "categories_section": {
    "commercials_width": "220px",
    "commercials_width_xl": "240px",
    "sport_realestate_column_width": "220px",
    "sport_realestate_column_width_xl": "240px",
    "sport_card_height": "calc(50% - 3px)",
    "realestate_card_height": "calc(50% - 3px)",
    "events_width": "200px",
    "events_width_xl": "220px",
    "industrials_width": "200px",
    "industrials_width_xl": "220px"
  },
  "equipment_section": {
    "card_count": 5,
    "card_layout": "flex-1 equal distribution",
    "card_title_padding_top": "16px",
    "card_title_padding_x": "16px",
    "card_title_padding_bottom": "8px",
    "photo_area_margin_x": "6px",
    "photo_area_radius": "10px",
    "card_bottom_padding": "16px",
    "number_font_size": "11px",
    "description_font_size": "9px"
  },
  "section_separator": "1px solid rgba(255,255,255,0.06)"
}
```

---

# COMPONENT TREE

```
Page
├── CategoriesSection                           // 'use client'
│   ├── motion.div (left panel entrance)
│   │   └── SectionInfoPanel
│   │       ├── Badge ("CATEGORIES")
│   │       ├── Headline ("WHAT / I SHOOT")
│   │       ├── BodyText ("AERIAL PERSPECTIVES...")
│   │       └── CircleIconButton (Crosshair icon)
│   └── CategoriesCardGrid
│       ├── motion.div → CategoryCard (COMMERCIALS)     // col 1, full height
│       ├── div (column 2 flex-col)
│       │   ├── motion.div → CategoryCard (SPORT)
│       │   └── motion.div → CategoryCard (REAL ESTATE)
│       ├── motion.div → CategoryCard (EVENTS)          // col 3, full height
│       └── motion.div → CategoryCard (INDUSTRIALS)    // col 4, full height
│
└── EquipmentSection                            // 'use client'
    ├── motion.div (left panel entrance)
    │   └── SectionInfoPanel
    │       ├── Badge ("PRODUCTION CAPABILITIES / EQUIPMENT")
    │       ├── Headline ("BUILT FOR / ANY SHOT")
    │       ├── BodyText ("PROFESSIONAL SETUPS...")
    │       └── CircleIconButton (Crosshair icon)
    └── EquipmentCardGrid
        ├── motion.div → EquipmentCard (01 — BASIC DRONE SHOTS)
        ├── motion.div → EquipmentCard (02 — FPV PACKAGE)
        ├── motion.div → EquipmentCard (03 — CINEMA DRONES & CAMERA)
        ├── motion.div → EquipmentCard (04 — LIVE BROADCAST OPTION)
        └── motion.div → EquipmentCard (05 — FULL VIDEO PRODUCTION)
```

`SectionInfoPanel` is a shared Server Component (no motion, no hooks) — accepts `badge: string`, `headlineLines: string[]`, `bodyLines: string[]` props.

`CategoryCard` and `EquipmentCard` are Client Components only if they need motion (hover scale can be done with CSS `group-hover` instead of Framer Motion, keeping them as Server Components).

---

# COPYWRITING CONTENT

## WHAT I SHOOT section

Badge:
```
CATEGORIES
```

Headline:
```
WHAT
I SHOOT
```

Body text:
```
AERIAL PERSPECTIVES FOR
EVERY STORY AND ENVIRONMENT
```

Category labels (left to right in the card grid):
```
COMMERCIALS
SPORT
REAL ESTATE
EVENTS
INDUSTRIALS
```

## BUILT FOR ANY SHOT section

Badge:
```
PRODUCTION CAPABILITIES / EQUIPMENT
```

Headline:
```
BUILT FOR
ANY SHOT
```

Body text:
```
PROFESSIONAL SETUPS FOR
DEMANDING PRODUCTIONS
```

Equipment cards (number / title / description):
```
01
BASIC DRONE SHOTS
CLEAN, STABLE, AND CINEMATIC AERIALS FOR EVERY PROJECT.

02
FPV PACKAGE
DYNAMIC FPV SHOTS FOR IMMERSIVE AND HIGH-ENERGY VISUALS.

03
CINEMA DRONES
& CAMERA
HIGH-END DRONES PAIRED WITH CINEMA CAMERAS.

04
LIVE BROADCAST
OPTION
REAL-TIME TRANSMISSION FOR LIVE EVENTS AND BROADCASTS.

05
FULL VIDEO PRODUCTION
END-TO-END PRODUCTION FROM CONCEPT TO FINAL DELIVERY.
```

All visible text is in ALL CAPS. Preserve exactly — no title-casing, no sentence-casing.

---

# VISUAL DETAILS TO MATCH

## Important details from the screenshot

- The page background is near-pure black — `#080808`. Not dark gray, not navy, not charcoal. True void black.
- The neon accent is electric lime-yellow — approximately `#C9F52A`. It reads as the "sports brand neon" used by Red Bull, Gymshark, and energy drink packaging: between yellow and green, vivid and saturated.
- Every single piece of text, every label, every number, every badge border, every icon button uses this single lime color. There is zero secondary accent color.
- The mega-headlines ("WHAT I SHOOT", "BUILT FOR ANY SHOT") are in Bebas Neue (or equivalent ultra-condensed all-caps display font). The letterforms are extremely tall and narrow. The headlines appear to be around 96px on desktop.
- Both section headlines are identical in scale, weight, and color. The only difference is the content.
- Both sections have identical left-panel structure: badge → headline → body text → (space) → circle button.
- All photography is fully desaturated to grayscale — `filter: grayscale(100%) brightness(0.80) contrast(1.06)`. Not partial desaturation, not a tint, not a color overlay.
- Category cards have their label at the bottom-left, overlaid on a dark-to-transparent gradient rising from the bottom.
- Equipment cards have their title at the top-left, above the photo area. The number and description are below the photo.
- The gap between all cards (both grids) is approximately 6px — very tight, dense, grid-like.
- The SPORT and REAL ESTATE cards share a column (stacked), each taking approximately half the section height.
- Arrow buttons (→) appear on every single card in both sections, consistently at bottom-right.
- The circle icon buttons in the left panels are noticeably larger (48px) than the arrow buttons (30px).
- The badge for the equipment section ("PRODUCTION CAPABILITIES / EQUIPMENT") is much wider than the categories badge ("CATEGORIES") but uses the same pill style.
- Card corners are rounded at approximately 14px (`rounded-[14px]`). The inner photo container in equipment cards has a slightly smaller radius of 10px.
- The overall section heights appear equal or near-equal between the two sections.
- There is a very subtle dividing line between the two sections (approximately 1px, very low opacity).
- No gradients in the background — the black is flat and uniform.
- The left panel body text is extremely small and dim — it almost disappears at normal viewing distance. It is purely supporting copy.

## Anti-patterns / things to avoid

- Do not use any other accent color besides the neon lime. No red, no blue, no purple, no orange, no white for highlights.
- Do not use green (hsl 120°) or pure yellow (hsl 60°) — the accent sits at approximately hsl 74° (yellow-green zone).
- Do not apply glassmorphism or `backdrop-filter: blur()` to the cards — they are solid dark panels, not glass.
- Do not add gradient backgrounds to either section — backgrounds are uniformly `#080808`.
- Do not add noise, grain, or particle effects — the design is clean and silent.
- Do not partially desaturate the photos — apply `grayscale(100%)` fully.
- Do not add any decorative elements between sections (no dividers, no ornamental lines beyond the single thin separator border).
- Do not color-tint the grayscale photos (no red overlay, no sepia) — pure gray only.
- Do not reduce the headline size proportionally — even on tablet the headlines should dominate. Do not let the body text compete with the headline in visual weight.
- Do not round the category label text or equipment titles to title-case — ALL CAPS throughout.

---

# FINAL IMPLEMENTATION GOAL

The final result should recreate these two sections as pixel-accurate Next.js components that feel extracted from a premium drone aerial videographer's flagship portfolio. When viewed side by side, the sections should read as a deliberate visual system: the same neon lime, the same black, the same structural rhythm of info panel plus card grid, differentiated only by the content they frame. The mega-headlines should command instant visual authority, the dark cards should recede like cinema frames waiting to be entered, and the lone neon accent should feel like a production signature — precise, intentional, and unmistakable. The result should communicate: this is the portfolio of a serious aerial professional, and every shot category and equipment specification has been curated with the same exactness as the design itself.
