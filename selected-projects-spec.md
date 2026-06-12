Build a dark, brutalist-cinematic **Selected Projects** section for a videographer/filmmaker portfolio (Filip Doubrava), matching the provided screenshot as closely as possible. The section uses a near-pure-black background, **neon lime-yellow (#cbff00) as the sole accent**, an ultra-heavy condensed all-caps display font, five B&W project cards in a horizontal row, and a stripped editorial visual language that is **dark, brutalist, cinematic, high-contrast, and deliberate**.

The section should feel like a mix between:
- a high-end filmmaker's portfolio website
- a brutalist motion-graphics title card
- a dark editorial magazine photo spread
- a cinematic film festival programme grid

The visual soul of this section is five upright film panels arranged in a dark gallery — each B&W still framed with clinical precision, the neon-lime numbered badges acting as electric exhibit labels. The enormous "SELECTED PROJECTS" heading anchors the section with typographic authority: it is the loudest element on the page.

No italic serif accents are present — all headings are uppercase, monochrome or neon-lime, and use a single condensed display typeface. This is a deliberate stylistic choice, not an omission.

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

- Next.js 16.2 App Router + Turbopack
- React 19 with TypeScript
- Tailwind CSS with custom theme extensions
- `motion/react` for staggered card entrance and hover lift
- `lucide-react` for arrow icons inside card CTA buttons
- No `shadcn/ui` components needed for this section — use raw HTML/CSS/Tailwind throughout

Icons from `lucide-react` used in this section:

- `ArrowRight` — 14px, `strokeWidth={2}`, inside the circular CTA button on each card
- `Target` — optional 16px for the top-right decorative header icon (or replace with a custom inline SVG ring + dot)

---

# GLOBAL PAGE DIRECTION

This is a single isolated section component within a larger portfolio page. The spec covers only the "SELECTED PROJECTS" section. Implement it as a self-contained `<section>` tag that can be dropped into any page layout.

The screenshot shows a full-width dark section with two primary vertical zones:

1. **Section header** — top area with the massive stacked title on the left, a small description block in the center-right, and a decorative circular target icon on the far right. All in one horizontal row.
2. **Project cards row** — a single horizontal row of five equal-width cards, each containing a B&W photograph and structured content below.

Visual ingredients:
- Near-pure black section background (`#0d0d0d`)
- Neon lime-yellow (`#cbff00`) as the sole accent — used for the section heading, card titles, number badges, category pills, dots, and CTA arrows
- Strictly grayscale photography — all five project images are black and white, no color
- Ultra-heavy condensed all-caps display type (Bebas Neue) for headings and card titles
- Small uppercase sans-serif (Inter) for body copy, labels, and pills
- Dark card surfaces with barely-visible white borders
- No gradients, no glass morphism, no glow effects — this is flat brutalist design
- Category pills use outlined styling (neon lime border + transparent fill)
- Number badges are small outlined pills (neon lime border, neon lime text, transparent bg)
- Arrow CTA buttons are circular outlines — not filled, not shadowed

What this section is NOT:
- Not a glassmorphism design — no backdrop-blur, no translucency layers
- Not colorful — one accent only. No secondary colors, no gradients between hues
- Not soft or ambient — the aesthetic is hard-edged, high contrast, and deliberate
- Not a SaaS feature grid — editorial and portfolio-driven, not product-marketing

---

# GLOBAL DESIGN TOKENS

Place in `app/globals.css`:

```css
:root {
  --background: 0 0% 5%;           /* #0d0d0d — very dark, not pure black */
  --foreground: 0 0% 96%;          /* #f5f5f5 — near white */

  --card: 0 0% 8%;                  /* #141414 — card background */
  --card-foreground: 0 0% 96%;

  --primary: 72 100% 50%;           /* #cbff00 — neon lime accent */
  --primary-foreground: 0 0% 0%;    /* black text on lime backgrounds */

  --secondary: 0 0% 10%;
  --secondary-foreground: 0 0% 80%;

  --muted: 0 0% 12%;
  --muted-foreground: 0 0% 45%;

  --accent: 72 100% 50%;
  --accent-foreground: 0 0% 0%;

  --border: 0 0% 100% / 0.07;       /* very subtle white border */
  --input: 0 0% 100% / 0.07;
  --ring: 72 100% 50%;

  --radius: 1.25rem;                 /* 20px default card radius */

  /* Brand-specific extras */
  --lime:         #cbff00;
  --lime-soft:    rgba(203, 255, 0, 0.12);
  --lime-glow:    rgba(203, 255, 0, 0.28);
  --black-page:   #0d0d0d;
  --card-bg:      #141414;
  --card-border:  rgba(255, 255, 255, 0.07);
  --card-border-hover: rgba(203, 255, 0, 0.18);
  --text-muted:   rgba(255, 255, 255, 0.45);
  --text-faint:   rgba(255, 255, 255, 0.28);
  --text-card-desc: rgba(255, 255, 255, 0.62);
}
```

---

# TAILWIND CONFIG

Extend `tailwind.config.ts`:

```ts
theme: {
  extend: {
    fontFamily: {
      display: ["'Bebas Neue'", "Anton", "Impact", "sans-serif"],
      body:    ["Inter", "sans-serif"],
    },
    colors: {
      filip: {
        lime:         "#cbff00",
        "lime-soft":  "rgba(203, 255, 0, 0.12)",
        "lime-glow":  "rgba(203, 255, 0, 0.28)",
        "lime-hover": "rgba(203, 255, 0, 0.18)",
        black:        "#0d0d0d",
        card:         "#141414",
        border:       "rgba(255, 255, 255, 0.07)",
      },
    },
    borderRadius: {
      "3xl": "1.5rem",
      "4xl": "2rem",
    },
    boxShadow: {
      "lime-glow":    "0 0 20px rgba(203, 255, 0, 0.25), 0 0 60px rgba(203, 255, 0, 0.1)",
      "card-hover":   "0 12px 48px rgba(0, 0, 0, 0.65)",
      "card-static":  "0 2px 12px rgba(0, 0, 0, 0.4)",
    },
    letterSpacing: {
      display: "-0.01em",
    },
  },
}
```

---

# FONTS

Primary display font (section heading + card titles):

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');
```

Tailwind font family mapping:

```ts
fontFamily: {
  display: ["'Bebas Neue'", "Anton", "Impact", "sans-serif"],
  body:    ["Inter", "sans-serif"],
}
```

Font usage table:

| Use case | Class | Notes |
|---|---|---|
| Section mega-heading ("SELECTED PROJECTS") | `font-display` | Very large, neon lime, all caps |
| Card project titles ("OUTDOOR ADVENTURES") | `font-display` | Medium-large, neon lime, all caps |
| Description paragraph in section header | `font-body text-[10px] uppercase tracking-[0.04em]` | Small, gray, ALL CAPS |
| Card category pill label | `font-body text-[9px] uppercase tracking-[0.04em]` | Small, lime, ALL CAPS |
| Card description body | `font-body text-[10px] uppercase tracking-[0.04em]` | Small, white/gray, ALL CAPS |
| Number badges | `font-body text-[10px] font-semibold` | Small, lime, ALL CAPS |

Typography feel:

```
loud       — the mega-heading is the dominant typographic gesture in the section
clinical   — all body copy is uppercase and precisely spaced
industrial — single typeface, no decoration, no italic accents
cinematic  — scale contrast between the huge heading and the small card labels is extreme
```

Mega-heading:

```txt
font-display text-[clamp(80px,11vw,160px)] leading-[0.88] tracking-[0.01em] text-filip-lime uppercase select-none
```

Card title:

```txt
font-display text-[clamp(17px,1.5vw,24px)] leading-[1.0] tracking-[0.01em] text-filip-lime uppercase
```

Section header description:

```txt
font-body text-[10px] font-normal uppercase leading-[1.5] tracking-[0.04em] text-white/45
```

Card description:

```txt
font-body text-[10px] font-normal uppercase leading-[1.35] tracking-[0.04em] text-white/62
```

**Critical note on Bebas Neue:** Bebas Neue is a display-only typeface with a single weight — it always renders as heavy/bold regardless of `font-weight`. Do not add `font-bold` or `font-black` to elements using `font-display` — it will have no visual effect and will generate console warnings. The typeface's built-in weight is what creates the brutalist headline impact.

---

# GLOBAL CSS UTILITIES

Place in `app/globals.css` under `@layer components`:

```css
@layer components {

  /* ─── PROJECT CARD ─── */
  .project-card {
    background: #141414;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 1.25rem;
    overflow: hidden;
    transition:
      border-color 0.25s ease,
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .project-card:hover {
    border-color: rgba(203, 255, 0, 0.18);
    transform: translateY(-4px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.65);
  }

  /* ─── NUMBER BADGE ─── */
  .card-number-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cbff00;
    border-radius: 999px;
    padding: 2px 8px;
    font-family: "Inter", sans-serif;
    font-size: 10px;
    font-weight: 600;
    color: #cbff00;
    line-height: 1;
    letter-spacing: 0.02em;
    background: transparent;
    white-space: nowrap;
  }

  /* ─── CATEGORY PILL ─── */
  .card-category-pill {
    display: inline-flex;
    align-items: center;
    border: 1px solid #cbff00;
    border-radius: 999px;
    padding: 3px 10px;
    font-family: "Inter", sans-serif;
    font-size: 9px;
    font-weight: 500;
    color: #cbff00;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    background: transparent;
    white-space: nowrap;
  }

  /* ─── CIRCULAR ARROW CTA ─── */
  .card-arrow-btn {
    width: 36px;
    height: 36px;
    border: 1px solid #cbff00;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: #cbff00;
    background: transparent;
    flex-shrink: 0;
    cursor: pointer;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .card-arrow-btn:hover {
    background: #cbff00;
    color: #0d0d0d;
  }

  /* ─── LIME DOT INDICATOR ─── */
  .lime-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #cbff00;
    flex-shrink: 0;
  }

  /* ─── HEADER DECORATIVE ICON ─── */
  .header-target-icon {
    width: 36px;
    height: 36px;
    border: 1.5px solid #cbff00;
    border-radius: 50%;
    display: grid;
    place-items: center;
    flex-shrink: 0;
  }

  /* ─── GRAYSCALE PHOTO ─── */
  .bw-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    display: block;
    transition: filter 0.3s ease;
  }

  .project-card:hover .bw-photo {
    filter: grayscale(100%) brightness(1.05);
  }
}
```

---

# ASSETS REQUIRED

## 1. Project card photographs (5 images)

All five images must render as **strictly black and white**. Apply `filter: grayscale(100%)` in CSS, or source B&W photographs. Do NOT add any color overlay or tint.

**Card 01 — Outdoor Adventures:**

Description:

```
Young person seated outdoors, green hillside or meadow in background
Holding a small drone or camera/gimbal equipment in both hands
Relaxed, smiling, natural body language — feels candid not posed
Overcast daylight, rolling green hills visible behind
Subject wears casual dark clothing
```

Suggested file:

```
/public/images/project-01-outdoor.jpg
```

Recommended dimensions:

```
600 × 700px minimum, portrait orientation (3:4 ratio or similar)
```

**Card 02 — Tech Conference:**

Description:

```
Person standing in a dimly lit interior space (dark environment)
Wearing FPV goggles (head-mounted display) pushed up on head
Dark hoodie or jacket, professional look
Moody, atmospheric, low-key lighting
Slightly dramatic — person appears ready for action
```

Suggested file:

```
/public/images/project-02-conference.jpg
```

**Card 03 — Behind the Scenes:**

Description:

```
Person operating a large cinema camera (Blackmagic / ARRI / RED form factor)
Camera on a shoulder rig or handheld setup
Operator faces slightly away from the viewer, focused on work
Dark professional clothing
Studio or controlled-light environment implied
```

Suggested file:

```
/public/images/project-03-bts.jpg
```

**Card 04 — Brand Story:**

Description:

```
Person wearing FPV/AR goggles and equipment harness
Outdoors in a misty or foggy environment — mountains or dramatic landscape
Atmospheric, moody — feels like a drone operator in the field
Face partially obscured by equipment, brooding energy
```

Suggested file:

```
/public/images/project-04-brand.jpg
```

**Card 05 — Cinematic Travel:**

Description:

```
Aerial or elevated landscape view — no people visible
Winding road or river through mountainous terrain
Dramatic topography, moody or overcast skies
Cinematic framing — wide, vast, awe-inspiring
```

Suggested file:

```
/public/images/project-05-travel.jpg
```

## 2. Icon assets

No external image icons needed. Use:

- `ArrowRight` from `lucide-react` at 14px inside card CTA buttons
- Custom inline SVG or `Target` from lucide-react at 16px for the header decorative icon

---

# RESPONSIVE RULES

Desktop is primary (screenshot shows ~1400–1500px viewport width).

**Desktop (1024px+):**
- Five cards in a single horizontal row: `grid-cols-5`
- Section mega-heading at full `clamp(80px, 11vw, 160px)` size
- Section header: title left, description center-right, icon far right — single row
- Section padding: `px-8 md:px-12 py-16 md:py-20`

**Tablet (768–1023px):**
- Cards: `grid-cols-3` — cards 01, 02, 03 in row one; cards 04 and 05 in row two (left-aligned)
- Heading size reduces: `text-[clamp(64px,10vw,120px)]`
- Section header: description wraps below heading; icon may be hidden (`hidden md:block`)
- Padding: `px-6 py-14`

**Mobile (below 768px):**
- Cards: `grid-cols-1` — single column, full width
- Heading: `text-[72px]`, still stacked two lines
- Section header description: moves below heading block
- Decorative target icon: hide on mobile (`hidden sm:block`)
- Arrow buttons: maintain 44px minimum touch target (`min-w-[44px] min-h-[44px]`)
- Padding: `px-4 py-12`

Breakpoints:

```
mobile:  < 768px
tablet:  768px – 1023px
desktop: 1024px+
```

The screenshot does not show mobile behavior — implement mobile as a sensible single-column default using the patterns above.

---

# PAGE STRUCTURE

App Router file tree for the Selected Projects section:

```
app/
├── layout.tsx                        // fonts, metadata, dark class
├── page.tsx                          // composes page sections
├── globals.css                       // tokens + @layer components
└── components/
    └── selected-projects/
        ├── index.tsx                 // 'use client' — section wrapper w/ motion
        ├── section-header.tsx        // static Server Component (no motion)
        ├── project-card.tsx          // 'use client' — card w/ hover motion
        └── projects-data.ts          // static data — 5 project entries
```

`page.tsx` skeleton:

```tsx
// app/page.tsx
import { SelectedProjectsSection } from "@/components/selected-projects";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white font-body overflow-x-hidden">
      {/* ... other page sections above ... */}
      <SelectedProjectsSection />
      {/* ... other page sections below ... */}
    </main>
  );
}
```

`app/layout.tsx` font setup:

```tsx
// app/layout.tsx
import { Bebas_Neue, Inter } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-[#0d0d0d] text-white antialiased">{children}</body>
    </html>
  );
}
```

Components that require `'use client'`:
- `selected-projects/index.tsx` — uses `motion/react` for card stagger entrance
- `selected-projects/project-card.tsx` — uses `motion/react` for hover lift

Components that can remain Server Components:
- `selected-projects/section-header.tsx` — purely static markup

---

# SECTION 1 — SECTION HEADER

The top area of the Selected Projects section, above the cards row.

## 1a. Header layout

Outer wrapper:

```txt
relative flex items-start justify-between gap-8 px-8 md:px-12 pt-16 md:pt-20 pb-10 md:pb-12
```

Three horizontal zones:
- **Left (≈35% width):** mega heading "SELECTED / PROJECTS"
- **Center-right (≈25% width):** small description paragraph
- **Far right (36px):** decorative circular target icon

The description text and icon are vertically aligned near the top of the header, roughly flush with the top edge of the heading text.

## 1b. Mega heading

Content (verbatim, all caps, stacked two lines):

```
SELECTED
PROJECTS
```

Style:

```txt
font-display text-[clamp(80px,11vw,160px)] leading-[0.88] tracking-[0.01em] text-filip-lime uppercase select-none
```

Implementation:

```tsx
<motion.h2
  initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  viewport={{ once: true, margin: "-60px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="font-display text-[clamp(80px,11vw,160px)] leading-[0.88] tracking-[0.01em] text-filip-lime uppercase select-none"
>
  SELECTED
  <br />
  PROJECTS
</motion.h2>
```

The heading fills the left third of the header. It is the largest typographic element in the section and should feel dominant and immovable.

## 1c. Description text block

Content (verbatim, all caps, three lines):

```
A SELECTION OF WORK THAT SHOWCASES
CREATIVITY, TECHNICAL SKILLS AND
ATTENTION TO DETAIL.
```

Position within header (flex child, self-aligned to top right):

```txt
self-start mt-1 max-w-[260px]
```

Style:

```txt
font-body text-[10px] font-normal uppercase leading-[1.5] tracking-[0.04em] text-white/45
```

Implementation:

```tsx
<p className="self-start mt-1 max-w-[260px] font-body text-[10px] font-normal uppercase leading-[1.5] tracking-[0.04em] text-white/45">
  A SELECTION OF WORK THAT SHOWCASES
  CREATIVITY, TECHNICAL SKILLS AND
  ATTENTION TO DETAIL.
</p>
```

## 1d. Decorative target icon

A small circular icon (lime ring + center dot), far right of the header. Purely decorative — no interactivity.

Style:

```txt
self-start mt-1 header-target-icon
```

Implementation:

```tsx
<div className="self-start mt-1 header-target-icon">
  <div className="w-1.5 h-1.5 rounded-full bg-filip-lime" />
</div>
```

The outer ring: `36 × 36px`, 1.5px neon lime border, transparent fill.
The inner dot: `6px` solid lime, centered via `grid place-items-center`.

---

# SECTION 2 — PROJECT CARDS GRID

## 2a. Grid container

Outer section padding wrapper:

```txt
px-8 md:px-12 pb-16 md:pb-20
```

Cards grid:

```txt
grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4
```

Full grid implementation with staggered motion:

```tsx
'use client';
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";
import { projects } from "./projects-data";
import { ProjectCard } from "./project-card";

export function ProjectCardsGrid() {
  return (
    <div className="px-8 md:px-12 pb-16 md:pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {projects.map((project, i) => (
          <motion.div key={project.id} {...fadeUp(i * 0.08)}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

## 2b. Individual card wrapper

The card is a flex column. Photo area is fixed height; content area expands to fill the remaining height.

Card outer wrapper:

```txt
project-card flex flex-col h-full
```

Full card structure:

```tsx
<div className="project-card flex flex-col h-full">
  {/* Photo area — fixed height */}
  <div className="relative overflow-hidden" style={{ height: "340px" }}>
    {/* image + overlays */}
  </div>
  {/* Content area — flex fill */}
  <div className="flex flex-col flex-1 px-4 pb-4">
    {/* category pill, title, description, arrow */}
  </div>
</div>
```

## 2c. Card photo area

Wrapper:

```txt
relative overflow-hidden
style={{ height: "340px" }}
```

The photo uses `position: absolute; inset: 0` to fill the fixed-height container.

Photo element:

```txt
bw-photo absolute inset-0 w-full h-full object-cover
```

Implementation:

```tsx
<div className="relative overflow-hidden" style={{ height: "340px" }}>
  <img
    src={project.imageSrc}
    alt={project.title}
    className="bw-photo absolute inset-0 w-full h-full object-cover"
  />
  {/* Number badge — top left */}
  <div className="absolute top-3 left-3 z-10">
    <span className="card-number-badge">{project.number}</span>
  </div>
  {/* Lime dot — top right */}
  <div className="absolute top-3.5 right-3.5 z-10 lime-dot" />
</div>
```

## 2d. Number badge (top-left photo overlay)

Position:

```txt
absolute top-3 left-3 z-10
```

Style:

```txt
card-number-badge
```

Content examples: `01`, `02`, `03`, `04`, `05`

The badge is a small outlined pill: neon lime border + neon lime text + transparent background.

## 2e. Lime dot indicator (top-right photo overlay)

Position:

```txt
absolute top-3.5 right-3.5 z-10
```

Style:

```txt
lime-dot
```

The dot is a **solid filled circle**, not a ring. This contrasts with the outlined number badges on the same card — the solid dot reads as a status indicator; the outlined badge reads as a label.

## 2f. Category pill

Placed at the top of the card content area (just below the photo).

Wrapper:

```txt
pt-3
```

Style:

```txt
card-category-pill self-start
```

Implementation:

```tsx
<div className="pt-3">
  <span className="card-category-pill">{project.category}</span>
</div>
```

## 2g. Card project title

Large display-font heading in neon lime, immediately below the category pill.

Style:

```txt
mt-2 font-display text-[22px] leading-[1.0] tracking-[0.01em] text-filip-lime uppercase
```

Implementation:

```tsx
<h3 className="mt-2 font-display text-[22px] leading-[1.0] tracking-[0.01em] text-filip-lime uppercase">
  {project.title}
</h3>
```

At larger viewport widths the title can scale slightly: `text-[clamp(17px,1.5vw,24px)]`.

## 2h. Card description body

Small uppercase white-gray text, below the title, fills remaining vertical space.

Style:

```txt
mt-2 font-body text-[10px] font-normal uppercase leading-[1.35] tracking-[0.04em] text-white/62 flex-1
```

Implementation:

```tsx
<p className="mt-2 font-body text-[10px] font-normal uppercase leading-[1.35] tracking-[0.04em] text-white/62 flex-1">
  {project.description}
</p>
```

## 2i. Arrow CTA button

A small circular outlined button with an `ArrowRight` icon. Positioned at bottom-right of the card content area.

Wrapper:

```txt
mt-4 flex justify-end
```

Button:

```txt
card-arrow-btn
```

Implementation:

```tsx
import { ArrowRight } from "lucide-react";

<div className="mt-4 flex justify-end">
  <button
    className="card-arrow-btn"
    aria-label={`View ${project.title}`}
  >
    <ArrowRight size={14} strokeWidth={2} />
  </button>
</div>
```

On hover the button fills solid lime with black icon.

## 2j. Complete card content area

Full implementation of the content zone below the photo:

```tsx
<div className="flex flex-col flex-1 px-4 pb-4">
  {/* Category pill */}
  <div className="pt-3">
    <span className="card-category-pill">{project.category}</span>
  </div>
  {/* Title */}
  <h3 className="mt-2 font-display text-[22px] leading-[1.0] tracking-[0.01em] text-filip-lime uppercase">
    {project.title}
  </h3>
  {/* Description */}
  <p className="mt-2 font-body text-[10px] font-normal uppercase leading-[1.35] tracking-[0.04em] text-white/62 flex-1">
    {project.description}
  </p>
  {/* Arrow CTA */}
  <div className="mt-4 flex justify-end">
    <button className="card-arrow-btn" aria-label={`View ${project.title}`}>
      <ArrowRight size={14} strokeWidth={2} />
    </button>
  </div>
</div>
```

## 2k. Projects data file

`components/selected-projects/projects-data.ts`:

```ts
export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const projects: Project[] = [
  {
    id: "01",
    number: "01",
    category: "PROMO",
    title: "OUTDOOR ADVENTURES",
    description: "PROMOTIONAL VIDEO FOR AN OUTDOOR BRAND CAPTURING THE ENERGY AND FREEDOM OF EXPLORATION.",
    imageSrc: /Users/fido/Desktop/filipdoubrava.cz/mmg/public/images/visa.jpg,
  },
  {
    id: "02",
    number: "02",
    category: "EVENT",
    title: "TECH CONFERENCE",
    description: "EVENT RECAP VIDEO HIGHLIGHTING INNOVATION, SPEAKERS AND THE UNIQUE ATMOSPHERE OF THE CONFERENCE.",
    imageSrc: "/images/project-02-conference.jpg",
  },
  {
    id: "03",
    number: "03",
    category: "DOCUMENTARY",
    title: "BEHIND THE SCENES",
    description: "A LOOK BEHIND THE SCENES OF A CREATIVE PROJECT AND THE PEOPLE WHO MADE IT HAPPEN.",
    imageSrc: "/images/project-03-bts.jpg",
  },
  {
    id: "04",
    number: "04",
    category: "CORPORATE",
    title: "BRAND STORY",
    description: "STORY-DRIVEN VIDEO THAT SHOWCASES THE VALUES, PEOPLE AND VISION BEHIND THE BRAND.",
    imageSrc: "/images/project-04-brand.jpg",
  },
  {
    id: "05",
    number: "05",
    category: "TRAVEL",
    title: "CINEMATIC TRAVEL",
    description: "CINEMATIC TRAVEL FILM CAPTURING BREATHTAKING LOCATIONS AND UNFORGETTABLE MOMENTS.",
    imageSrc: "/images/project-05-travel.jpg",
  },
];
```

## 2l. Complete section index

`components/selected-projects/index.tsx`:

```tsx
'use client';
import { SectionHeader } from "./section-header";
import { ProjectCardsGrid } from "./project-cards-grid";

export function SelectedProjectsSection() {
  return (
    <section className="bg-[#0d0d0d] w-full">
      <SectionHeader />
      <ProjectCardsGrid />
    </section>
  );
}
```

---

# ANIMATION SYSTEM

All animated components declare `'use client'` at the top of the file.

## 1. Global `fadeUp` helper

```ts
// lib/motion.ts
'use client';
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});
```

## 2. Section entrance sequence

Elements enter in this order:

```
1. Mega heading "SELECTED PROJECTS"    — blur-fade entrance, delay: 0
2. Description text + icon             — standard fadeUp, delay: 0.1
3. Card 01 (OUTDOOR ADVENTURES)        — fadeUp, delay: 0.05
4. Card 02 (TECH CONFERENCE)           — fadeUp, delay: 0.10
5. Card 03 (BEHIND THE SCENES)         — fadeUp, delay: 0.15
6. Card 04 (BRAND STORY)               — fadeUp, delay: 0.20
7. Card 05 (CINEMATIC TRAVEL)          — fadeUp, delay: 0.25
```

## 3. Mega heading entrance (blur-in variant)

```tsx
initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
viewport={{ once: true, margin: "-60px" }}
transition={{ duration: 0.8, ease: "easeOut" }}
```

The blur-in dissolve adds cinematic weight to the dominant heading.

## 4. Card stagger implementation

```tsx
{projects.map((project, i) => (
  <motion.div key={project.id} {...fadeUp(i * 0.08)}>
    <ProjectCard project={project} />
  </motion.div>
))}
```

## 5. Card hover lift (Framer Motion)

```tsx
<motion.div
  className="project-card flex flex-col h-full"
  whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
>
```

Or use pure CSS via the `.project-card:hover` rule in globals (both approaches work; the CSS version is lighter).

## 6. Arrow button hover

```css
.card-arrow-btn:hover {
  background: #cbff00;
  color: #0d0d0d;
  transition: background 0.2s ease, color 0.2s ease;
}
```

No scale on the arrow button — fill transition only. The solid lime fill on hover creates a clear affordance without animation noise.

## 7. Card border hover

```css
.project-card:hover {
  border-color: rgba(203, 255, 0, 0.18);
}
```

The lime border tint on hover connects the card's hover state to the accent color system.

---

# EXACT VISUAL HIERARCHY

The eye reads this section in this order:

```
1.  "SELECTED PROJECTS" mega-heading — overwhelming typographic dominance, upper-left
2.  Card photo row — five B&W images create a strong horizontal visual band
3.  Card titles (neon lime, all caps, display font) — read as group, left to right
4.  "OUTDOOR ADVENTURES" (card 01) — leftmost, eye enters the row here
5.  "BEHIND THE SCENES" (card 03) — center card, strongest visual anchor in the row
6.  "CINEMATIC TRAVEL" (card 05) — rightmost, pure landscape contrasts person-focused cards
7.  "TECH CONFERENCE" + "BRAND STORY" (cards 02 + 04) — complete the row
8.  Section description text ("A SELECTION OF WORK...") — read after heading hierarchy
9.  Decorative target icon (top right) — peripheral, noticed last
10. Number badges + lime dots — noticed as the eye examines individual cards
11. Category pills — contextual labels, read per-card
12. Card descriptions + arrow CTAs — final reading layer, fine detail
```

The mega-heading must remain the strongest typographic gesture in the section. If any card element feels heavier than the heading, reduce card title size or increase heading scale.

---

# SPACING AND LAYOUT DETAILS

```json
{
  "section_background": "#0d0d0d",
  "section_padding_x": "32px (px-8) desktop, 48px (px-12) large desktop",
  "section_padding_top": "64px–80px (pt-16 to pt-20)",
  "section_padding_bottom": "64px–80px (pb-16 to pb-20)",
  "section_max_width": "full viewport width (no max-w cap on this section)",

  "header_layout": "flex row, items-start, justify-between",
  "header_gap": "32px (gap-8)",
  "header_bottom_margin": "40px–48px (pb-10 to pb-12)",

  "heading_font_size": "clamp(80px, 11vw, 160px)",
  "heading_line_height": "0.88",
  "heading_letter_spacing": "0.01em",
  "heading_color": "#cbff00",

  "description_max_width": "260px",
  "description_font_size": "10px",
  "description_line_height": "1.5",
  "description_letter_spacing": "0.04em",
  "description_color": "rgba(255,255,255,0.45)",

  "header_icon_size": "36px",
  "header_icon_border": "1.5px solid #cbff00",

  "cards_grid": "5 equal columns (grid-cols-5)",
  "cards_gap": "12px–16px (gap-3 to gap-4)",

  "card_photo_height": "340px (fixed)",
  "card_border_radius": "20px (rounded-[1.25rem])",
  "card_border": "1px rgba(255,255,255,0.07)",
  "card_border_hover": "1px rgba(203,255,0,0.18)",
  "card_background": "#141414",
  "card_hover_lift": "4px (translateY(-4px))",
  "card_content_padding_x": "16px (px-4)",
  "card_content_padding_bottom": "16px (pb-4)",

  "number_badge_height": "20px",
  "number_badge_padding": "2px 8px",
  "number_badge_font_size": "10px",
  "number_badge_position": "top-3 left-3",

  "lime_dot_size": "10px diameter",
  "lime_dot_position": "top-3.5 right-3.5",

  "category_pill_height": "22px",
  "category_pill_padding": "3px 10px",
  "category_pill_font_size": "9px",
  "category_pill_margin_top": "12px (pt-3)",

  "card_title_font_size": "22px",
  "card_title_margin_top": "8px (mt-2)",

  "card_description_font_size": "10px",
  "card_description_margin_top": "8px (mt-2)",

  "arrow_button_size": "36px diameter",
  "arrow_button_icon_size": "14px",
  "arrow_button_margin_top": "16px (mt-4)",

  "viewport_at_screenshot": "approx 1400–1500px"
}
```

---

# COMPONENT TREE

```
SelectedProjectsSection           ('use client')
├── SectionHeader                  (Server Component — static)
│   ├── MegaHeading               "SELECTED / PROJECTS"
│   ├── DescriptionText           "A SELECTION OF WORK..."
│   └── TargetIcon                decorative lime ring + dot
└── ProjectCardsGrid               ('use client')
    ├── motion.div[0]              fadeUp wrapper for Card 01
    │   └── ProjectCard[01]        ('use client')
    │       ├── CardPhotoArea
    │       │   ├── CardImage      B&W photo, grayscale filter
    │       │   ├── NumberBadge    "01" — outlined lime pill
    │       │   └── LimeDot        solid lime circle, top-right
    │       └── CardContent
    │           ├── CategoryPill   "PROMO" — outlined lime
    │           ├── CardTitle      "OUTDOOR ADVENTURES"
    │           ├── CardDescription "PROMOTIONAL VIDEO..."
    │           └── ArrowCTAButton  circular lime outline + ArrowRight icon
    ├── motion.div[1]
    │   └── ProjectCard[02]        (same structure, card 02)
    ├── motion.div[2]
    │   └── ProjectCard[03]        (same structure, card 03)
    ├── motion.div[3]
    │   └── ProjectCard[04]        (same structure, card 04)
    └── motion.div[4]
        └── ProjectCard[05]        (same structure, card 05)
```

---

# COPYWRITING CONTENT

All copy exactly as visible in the screenshot, all caps, verbatim.

**Section header:**

```
SELECTED
PROJECTS

A SELECTION OF WORK THAT SHOWCASES
CREATIVITY, TECHNICAL SKILLS AND
ATTENTION TO DETAIL.
```

**Card 01:**

```
Number badge:  01
Category:      PROMO
Title:         OUTDOOR ADVENTURES
Description:   PROMOTIONAL VIDEO FOR AN OUTDOOR BRAND CAPTURING THE ENERGY AND
               FREEDOM OF EXPLORATION.
CTA:           → (ArrowRight icon, no text label)
```

**Card 02:**

```
Number badge:  02
Category:      EVENT
Title:         TECH CONFERENCE
Description:   EVENT RECAP VIDEO HIGHLIGHTING INNOVATION, SPEAKERS AND THE UNIQUE
               ATMOSPHERE OF THE CONFERENCE.
CTA:           → (ArrowRight icon)
```

**Card 03:**

```
Number badge:  03
Category:      DOCUMENTARY
Title:         BEHIND THE SCENES
Description:   A LOOK BEHIND THE SCENES OF A CREATIVE PROJECT AND THE PEOPLE
               WHO MADE IT HAPPEN.
CTA:           → (ArrowRight icon)
```

**Card 04:**

```
Number badge:  04
Category:      CORPORATE
Title:         BRAND STORY
Description:   STORY-DRIVEN VIDEO THAT SHOWCASES THE VALUES, PEOPLE AND VISION
               BEHIND THE BRAND.
CTA:           → (ArrowRight icon)
```

**Card 05:**

```
Number badge:  05
Category:      TRAVEL
Title:         CINEMATIC TRAVEL
Description:   CINEMATIC TRAVEL FILM CAPTURING BREATHTAKING LOCATIONS AND
               UNFORGETTABLE MOMENTS.
CTA:           → (ArrowRight icon)
```

---

# VISUAL DETAILS TO MATCH

**Important details from the screenshot:**

- The page background is very near pure black — `#0d0d0d` or `#0a0a0a`. The darkness is essential to the brutalist cinematic feel. Do not use a dark gray.
- "SELECTED PROJECTS" is the typographically dominant element in the entire section. The heading should feel massive and authoritative — not merely decorative.
- The accent is a very specific neon lime-yellow — bright, electric, slightly green-biased yellow. Not lemon yellow, not pure chartreuse, not olive. Closest hex: `#cbff00`. It reads as a screen-lit color, not a print color.
- The number badges ("01"–"05") are outlined pills — neon lime border, neon lime text, fully transparent fill. They are small and precise, not large or prominent.
- The lime dots in the top-right of each photo are solid filled circles. They are NOT rings. The contrast between outlined badges and filled dots is intentional.
- All five photographs are strictly black and white. No color whatsoever. No warm tones, no cool tones, no split toning. Pure grayscale.
- Card backgrounds are dark but not black — `#141414` reads as a subtle step up from the page background, differentiating card from page without using a border as the primary separator.
- Card borders are barely visible — `rgba(255,255,255,0.07)` or similar. They should not look like a frame. If you need to squint to see them, they are correct.
- On hover, the card border shifts to a faint lime tint — confirming the accent color system without being aggressive or glow-like.
- The category pills (PROMO, EVENT, DOCUMENTARY, CORPORATE, TRAVEL) use the same outlined lime style as the number badges. Both pill types share identical visual language.
- The arrow CTA buttons are circular outlines. They are NOT filled buttons. They should feel minimal and architectural, not call-to-action loud.
- All body text on cards (category labels, descriptions) is ALL CAPS. Not sentence case. Not title case. The all-caps styling is a deliberate brutalist choice — maintain it even if it seems over-stylized.
- The section header description is also ALL CAPS and very small. Maintain this even if the font-size feels too small for readability — it is intentional.
- The section header description block is positioned to the upper-right, roughly aligned with the top of the heading. It is NOT centered below the heading. It shares the same horizontal row as the heading.
- The decorative target icon (top-right) is a small lime ring with a center dot. It is purely visual ornament — implement it but do not make it interactive or visually heavy.
- Cards are equal width. Do not give any card a wider column than the others.
- The five photos have a consistent fixed height (~340px). This is not percentage-based — the fixed height ensures the photo band reads as a uniform horizontal strip regardless of card content length below.
- Card titles feel like the section heading at smaller scale — same Bebas Neue font, same neon lime color, same all-caps treatment. They are mini-echoes of the mega-heading.

**Anti-patterns — things to avoid:**

- Do NOT use any color other than neon lime (#cbff00) as an accent. No blues, no purples, no reds, no oranges, no secondary accents.
- Do NOT apply glassmorphism, backdrop-blur, or translucency to the cards. This is a flat brutalist design — no glass effects.
- Do NOT add color overlays or tints to the photographs. B&W is clean grayscale; no color grading.
- Do NOT use sentence case or title case for any card text. Everything visible in the screenshot that is text on cards is ALL CAPS — keep it that way.
- Do NOT add a soft glow or shadow behind the number badges or lime dots. They are flat graphic elements — no luminance effects.
- Do NOT make card borders thick or visible at rest. The default border state is nearly invisible.
- Do NOT animate the section heading after it enters. It should be static and immovable once rendered.
- Do NOT add background gradients, radial glows, or noise textures to the section background. The background is flat, dark, and featureless.
- Do NOT fill the arrow CTA buttons at rest — they are outlined circles. Only fill on hover.
- Do NOT use a serif or italic font anywhere in this section. The typography system is a single condensed grotesque (Bebas Neue) for display and Inter for body — nothing else.
- Do NOT center-align the card content text. All card text is left-aligned.
- Do NOT crop the B&W photos with circular masks or overlapping rounded corners. The photo fills the full width of the card with a flat top-left/top-right rounded corner matching the card's own border radius.

---

# FINAL IMPLEMENTATION GOAL

The final result should faithfully recreate the Selected Projects section as a polished Next.js component that slots cleanly into a filmmaker portfolio page. It should feel like a page from a high-end creative director's portfolio — dark, confident, and typographically uncompromising. The massive "SELECTED PROJECTS" heading establishes authority immediately; the five B&W project cards confirm it with visual evidence. The single neon lime accent (#cbff00) creates electric tension in an otherwise monochromatic palette — it should feel intentional and singular, never decorative. Every detail — the outlined number badges, the category pills, the circular arrow buttons, the ALL CAPS micro-copy — reinforces a brutalist editorial aesthetic where every decision was made once and never second-guessed. When fully rendered, the section should make a viewer stop scrolling.
