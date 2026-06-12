Build a dark, cinematic, premium portfolio **Reference** page for drone videographer **Filip Doubrava**, matching the provided screenshot as closely as possible.

The site uses a pure black background, monochrome (grayscale) photography throughout, white sharp typography, and a sophisticated mosaic image grid. The visual language is **dark, editorial, monochrome, cinema-grade, and portfolio-focused**.

The page should feel like a mix between:
- a premium cinematographer's showreel gallery
- a Magnum Photos-style editorial archive
- a high-end production company's client portfolio
- a cinematic film festival catalog
- a premium drone videography studio reel

The visual soul of this page is a gallery of cinematic black-and-white stills — each card is a frozen frame from a final video, the grayscale treatment unifying aerial landscapes, industrial subjects, automotive, and sport under a single monochrome vision. The entire page communicates that every project is premium, deliberate, and camera-crafted.

---

# TECH STACK

```json
{
  "next": "^16.2.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.13",
  "shadcn/ui": "latest",
  "motion": "^12.35.0",
  "lucide-react": "latest"
}
```

Recommended libraries:
- Next.js 16 App Router + Turbopack
- Tailwind CSS (config in `tailwind.config.ts`)
- shadcn/ui Button primitives for filter pills if needed
- motion/react (Framer Motion) for hover animations and stagger entrance
- lucide-react for icons
- CSS pseudo-elements for card overlays and fine borders

Icons from lucide-react:
- `ExternalLink`
- `Menu`
- `Youtube`

---

# GLOBAL PAGE DIRECTION

This is the **Reference** (Portfolio) page of Filip Doubrava's personal website — a standalone gallery page within a multi-page site.

The screenshot shows the full Reference page: a fixed top navbar, a large typographic page heading, a category filter bar, and a mosaic portfolio grid of 13 client project cards. The page is fully visible — no below-fold content is implied beyond the grid.

Visual ingredients:
- Pure black page background (`#050505`)
- White, extremely heavy display heading ("Reference")
- Grayscale (desaturated) photography for all 13 project cards
- Small white client-name labels, bottom-left of each card
- White external-link icon buttons, bottom-right of each card
- Bottom-of-card gradient overlay for text legibility
- Category filter pills — active "Vše" is white-filled with black text; inactive are transparent with white outline
- Floating category tag pills on card hover (glass-morphic dark pills; shown on Red Bull)
- YouTube channel link right-aligned in the filter row
- Very tight grid gaps (`~6px`) — the mosaic feels dense

The layout should NOT feel like a SaaS dashboard or a generic grid layout tool. It should feel like a premium film production company's client archive — tightly curated, monochromatic, and editorial in every detail.

---

# GLOBAL DESIGN TOKENS

Place in `app/globals.css`:

```css
:root {
  --background: 0 0% 2%;
  --foreground: 0 0% 100%;

  --card: 0 0% 8%;
  --card-foreground: 0 0% 100%;

  --primary: 0 0% 100%;
  --primary-foreground: 0 0% 0%;

  --secondary: 0 0% 12%;
  --secondary-foreground: 0 0% 100%;

  --muted: 0 0% 18%;
  --muted-foreground: 0 0% 55%;

  --accent: 0 0% 100%;
  --accent-foreground: 0 0% 0%;

  --border: 0 0% 100% / 0.12;
  --input: 0 0% 100% / 0.12;
  --ring: 0 0% 100%;

  --radius: 0.25rem;

  --black: #050505;
  --black-pure: #000000;
  --white: #ffffff;
  --white-soft: rgba(255, 255, 255, 0.85);
  --white-muted: rgba(255, 255, 255, 0.55);
  --white-dim: rgba(255, 255, 255, 0.38);

  --card-overlay: rgba(0, 0, 0, 0.45);
  --card-overlay-strong: rgba(0, 0, 0, 0.68);

  --glass-bg: rgba(20, 20, 20, 0.76);
  --glass-border: rgba(255, 255, 255, 0.14);
  --glass-highlight: rgba(255, 255, 255, 0.08);

  --pill-active-bg: #ffffff;
  --pill-active-text: #000000;
  --pill-inactive-bg: transparent;
  --pill-inactive-text: rgba(255, 255, 255, 0.75);
  --pill-inactive-border: rgba(255, 255, 255, 0.22);
}
```

---

# TAILWIND CONFIG

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Barlow", "Inter Tight", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        filipdoubrava: {
          black: "#050505",
          white: "#ffffff",
          "white-dim": "rgba(255,255,255,0.38)",
          "white-mid": "rgba(255,255,255,0.55)",
          "glass-bg": "rgba(20,20,20,0.76)",
        },
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "card-hover":
          "0 0 0 1px rgba(255,255,255,0.18), 0 8px 40px rgba(0,0,0,0.6)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 48px rgba(0,0,0,0.55)",
        "tag-pill": "0 4px 16px rgba(0,0,0,0.45)",
        "link-icon": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

# FONTS

Import in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
```

Font usage table:

| Tailwind class | Font | Weight | Use case |
|---|---|---|---|
| `font-heading font-black` | Barlow 900 | 900 | "Reference" display heading |
| `font-heading font-semibold` | Barlow 600 | 600 | "FILIP DOUBRAVA" nav wordmark |
| `font-body font-medium` | Inter 500 | 500 | Nav links, filter pills, card labels |
| `font-body font-normal` | Inter 400 | 400 | Subtitle text, tag pills |

Typography feel:
- sharp, compressed, industrial
- no decorative serifs — purely geometric and functional
- headings feel heavy and confident, not ornate
- no italic serif accent words detected in this page (deliberate all-sans choice)

Hero heading:

```txt
font-heading text-[96px] md:text-[112px] font-black leading-[0.88] tracking-[-0.025em] text-white
```

Subtitle:

```txt
font-body text-[13px] font-normal leading-snug text-white/52
```

Card label:

```txt
font-body text-[11px] font-medium text-white uppercase tracking-wide
```

Nav wordmark:

```txt
font-heading text-[14px] font-semibold uppercase tracking-[0.14em] text-white
```

Nav links:

```txt
font-body text-[11px] font-medium uppercase tracking-[0.08em] text-white/75
```

Filter pill:

```txt
font-body text-[12px] font-medium
```

---

# GLOBAL CSS UTILITIES

Define in `app/globals.css` under `@layer components`:

```css
@layer components {

  /* Card bottom gradient — text legibility overlay */
  .card-overlay {
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 45%,
      rgba(0, 0, 0, 0.38) 72%,
      rgba(0, 0, 0, 0.68) 100%
    );
  }

  /* Glass pill — used for hover tag chips */
  .glass-pill {
    background: rgba(20, 20, 20, 0.76);
    backdrop-filter: blur(12px) saturate(120%);
    -webkit-backdrop-filter: blur(12px) saturate(120%);
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.45);
  }

  /* Fine border — gradient border on nav and buttons */
  .fine-border {
    position: relative;
  }
  .fine-border::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.04) 50%,
      rgba(255, 255, 255, 0.06)
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  /* Filter pill — inactive */
  .filter-pill {
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: transparent;
    color: rgba(255, 255, 255, 0.75);
    transition: all 0.2s ease;
  }
  .filter-pill:hover {
    background: rgba(255, 255, 255, 0.07);
    color: white;
    border-color: rgba(255, 255, 255, 0.42);
  }

  /* Filter pill — active */
  .filter-pill-active {
    background: #ffffff;
    color: #000000;
    border: 1px solid transparent;
  }

  /* Portfolio card — base */
  .portfolio-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: block;
  }
  .portfolio-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                filter 0.55s ease;
  }
  .portfolio-card:hover img {
    transform: scale(1.04);
    filter: grayscale(85%);
  }

}
```

---

# ASSETS REQUIRED

## Page header
No image — typographic-only. Pure black background.

## Portfolio card images (13 total)

All images: use color originals and apply `filter: grayscale(100%)` via CSS. Do not pre-convert to grayscale — this allows easy de-saturation toggle if needed.

All must be: cinematic, high-contrast, dramatic lighting, shot from dramatic angles (aerial, low, wide). Minimum 1200px on longest side. JPG or WebP.

**1. Visit Czechia**
- Aerial landscape of rolling Czech hills with heavy low-lying clouds over forested ridges
- Very dark foreground silhouette, bright cloud layer mid-frame
- Tall card — portrait-leaning crop preferred
- File: `/public/images/visit-czechia.jpg` — at least 800×900px

**2. Red Bull**
- Sports/racing car (BMW or similar) drifting on wet tarmac, dynamic front-three-quarter angle
- Tags shown on hover: Reklamy, Sport, Eventy
- File: `/public/images/red-bull.jpg`

**3. DJI**
- DJI drone (Mavic or Inspire-style) in flight or product pose against neutral sky
- Clean product shot, high contrast sky
- File: `/public/images/dji.jpg`

**4. Škoda Group**
- Wide aerial view of large industrial/factory complex — chimneys, structures, industrial architecture
- Very wide landscape crop, tall card
- File: `/public/images/skoda-group.jpg` — at least 900×900px

**5. SPECIALIZED**
- Mountain biker riding through misty forest, atmospheric fog around trees
- Small square crop
- File: `/public/images/specialized.jpg`

**6. Porsche Czech**
- Porsche sports car in dark environment (forest road or night)
- Small square crop
- File: `/public/images/porsche-czech.jpg`

**7. Airbnb**
- Dark architectural subject — moody building interior or exterior at low light
- High contrast between light and shadow
- File: `/public/images/airbnb.jpg`

**8. Colours of Ostrava**
- Industrial transmission towers with festival crowd silhouettes below, dramatic sky above
- Wide landscape crop
- File: `/public/images/colours-of-ostrava.jpg`

**9. ČEZ**
- Aerial river meandering through dense forested valley, mist in valley
- File: `/public/images/cez.jpg`

**10. Bohemia Sekt**
- Aerial vineyard — geometric rows of vines on hillside, patterned composition
- File: `/public/images/bohemia-sekt.jpg`

**11. STRV**
- DJI/camera drone in flight with city or landscape visible behind
- File: `/public/images/strv.jpg`

**12. Slevomat**
- Modern residential house exterior, cinematic wide shot
- File: `/public/images/slevomat.jpg`

**13. Toyota Česká republika**
- SUV/pickup truck in action — smoke, dust, or dynamic motion, side-rear angle
- File: `/public/images/toyota-cr.jpg`

## Icons
- `ExternalLink` from lucide-react — 14×14px, white — bottom-right of each card
- `Menu` from lucide-react — 16×16px, white — nav hamburger button
- `Youtube` from lucide-react — 16×16px, muted white — filter row YouTube link

---

# RESPONSIVE RULES

Desktop is primary (screenshot shows ~1440px wide desktop).

**Desktop (1024px+):**
- Full mosaic 8-column grid with 4 defined row heights
- Navbar: full horizontal — all 4 nav links visible
- Filter bar: single row — pills left, YouTube link right
- Page heading: `text-[112px]`

**Tablet (768–1024px):**
- Grid: reduce to 4 columns, stack tall anchor cards naturally
- Navbar: hide nav links, show brand + hamburger only
- Filter pills: allow 2-row wrapping or horizontal scroll
- Page heading: `text-[72px]`
- YouTube link: move below filter pills or icon-only

**Mobile (below 768px):**
- Grid: 2 columns, all cards equal height (~200px), mosaic becomes uniform
- Navbar: FILIP DOUBRAVA + hamburger only
- Filter pills: `overflow-x-auto` single-row horizontal scroll, no wrap
- Page heading: `text-[52px]`
- YouTube link: hidden or moved to footer
- Card labels: keep, reduce to `text-[10px]`

Breakpoints:

```
mobile:  below 768px
tablet:  768–1024px
desktop: 1024px+
```

---

# PAGE STRUCTURE

App Router file tree:

```
app/
├── layout.tsx                    // font import, <html lang="cs" className="dark">, metadata
├── globals.css                   // :root tokens + @layer components
└── reference/
    └── page.tsx                  // Reference page — server component wrapper
components/
├── navbar.tsx                    // 'use client' — mobile menu toggle
└── reference/
    ├── page-header.tsx           // server — static heading + subtitle
    ├── filter-bar.tsx            // 'use client' — useState active filter
    ├── portfolio-grid.tsx        // 'use client' — motion stagger + filter logic
    └── portfolio-card.tsx        // 'use client' — hover state
lib/
└── projects.ts                   // static data array for all 13 cards
```

`app/reference/page.tsx` skeleton:

```tsx
// app/reference/page.tsx
import Navbar from "@/components/navbar";
import PageHeader from "@/components/reference/page-header";
import FilterBar from "@/components/reference/filter-bar";
import PortfolioGrid from "@/components/reference/portfolio-grid";

export const metadata = {
  title: "Reference — Filip Doubrava",
};

export default function ReferencePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] text-white font-body">
      <Navbar />
      <main className="pt-[64px]">
        <PageHeader />
        <FilterBar />
        <PortfolioGrid />
      </main>
    </div>
  );
}
```

Components requiring `'use client'`:
- `navbar.tsx` — mobile menu toggle via `useState`
- `filter-bar.tsx` — active filter state via `useState`
- `portfolio-grid.tsx` — Framer Motion stagger entrance + filter logic
- `portfolio-card.tsx` — hover state via `useState` + `AnimatePresence`

---

# SECTION 1 — NAVBAR

Fixed top navbar on near-black background.

Position:

```txt
fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm
```

Inner wrapper:

```txt
flex items-center justify-between px-8 md:px-12 h-[64px]
```

**Left — Brand wordmark**

Content:

```txt
FILIP DOUBRAVA
```

Style:

```txt
font-heading text-[14px] font-semibold uppercase tracking-[0.14em] text-white
```

Implementation:

```tsx
<a href="/" className="font-heading text-[14px] font-semibold uppercase tracking-[0.14em] text-white hover:opacity-80 transition-opacity">
  FILIP DOUBRAVA
</a>
```

**Center-right — Navigation links**

Nav links wrapper:

```txt
hidden md:flex items-center gap-8
```

Links in order:
1. PRÁCE
2. REFERENCE (active — current page, has underline)
3. O MNĚ
4. KONTAKT

Style — inactive link:

```txt
font-body text-[11px] font-medium uppercase tracking-[0.08em] text-white/75 hover:text-white transition-colors
```

Style — active link ("REFERENCE"):

```txt
font-body text-[11px] font-medium uppercase tracking-[0.08em] text-white relative
```

Active underline:

```txt
absolute -bottom-[2px] left-0 right-0 h-[1.5px] bg-white rounded-full
```

Implementation — nav links:

```tsx
{navLinks.map((link) => (
  <a
    key={link.label}
    href={link.href}
    className={`relative font-body text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
      link.active ? "text-white" : "text-white/75 hover:text-white"
    }`}
  >
    {link.label}
    {link.active && (
      <span className="absolute -bottom-[2px] left-0 right-0 h-[1.5px] bg-white rounded-full" />
    )}
  </a>
))}
```

**Far right — Menu button**

Style:

```txt
h-9 w-9 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center hover:bg-white/10 transition-colors flex-shrink-0
```

Icon:

```tsx
<Menu className="h-4 w-4 text-white" />
```

Full navbar:

```tsx
'use client';
import { Menu } from "lucide-react";

const navLinks = [
  { label: "PRÁCE", href: "/prace", active: false },
  { label: "REFERENCE", href: "/reference", active: true },
  { label: "O MNĚ", href: "/o-mne", active: false },
  { label: "KONTAKT", href: "/kontakt", active: false },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 md:px-12 h-[64px]">
        <a href="/" className="font-heading text-[14px] font-semibold uppercase tracking-[0.14em] text-white hover:opacity-80 transition-opacity">
          FILIP DOUBRAVA
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative font-body text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
                link.active ? "text-white" : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
              {link.active && (
                <span className="absolute -bottom-[2px] left-0 right-0 h-[1.5px] bg-white rounded-full" />
              )}
            </a>
          ))}
        </div>
        <button className="h-9 w-9 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center hover:bg-white/10 transition-colors">
          <Menu className="h-4 w-4 text-white" />
        </button>
      </div>
    </nav>
  );
}
```

---

# SECTION 2 — PAGE HEADER

Large typographic heading block directly below the navbar.

Wrapper:

```txt
px-8 md:px-12 pt-12 pb-5
```

**Heading**

Content:

```txt
Reference
```

Style:

```txt
font-heading text-[96px] md:text-[112px] font-black leading-[0.88] tracking-[-0.025em] text-white
```

The word is mixed case — capital "R", rest lowercase. Not all-caps. Font weight is 900 (Black). The heading occupies the full visual width of the left side.

**Subtitle**

Content:

```txt
Vybrané práce a finální výstupy. Každý projekt vede přímo na finální video.
```

Style:

```txt
mt-3 font-body text-[13px] font-normal leading-snug text-white/52 max-w-[500px]
```

Implementation:

```tsx
// components/reference/page-header.tsx
export default function PageHeader() {
  return (
    <div className="px-8 md:px-12 pt-12 pb-5">
      <h1 className="font-heading text-[96px] md:text-[112px] font-black leading-[0.88] tracking-[-0.025em] text-white">
        Reference
      </h1>
      <p className="mt-3 font-body text-[13px] font-normal leading-snug text-white/52 max-w-[500px]">
        Vybrané práce a finální výstupy. Každý projekt vede přímo na finální video.
      </p>
    </div>
  );
}
```

---

# SECTION 3 — FILTER BAR

A single horizontal row: category filter pills on the left, YouTube channel link on the right.

Wrapper:

```txt
flex items-center justify-between px-8 md:px-12 pb-5 gap-4
```

**Left — Filter pills**

Pills wrapper:

```txt
flex items-center gap-2 flex-wrap
```

Filter labels in order:
1. Vše (active on initial load)
2. Reklamy
3. Sport
4. Reality
5. Eventy
6. Průmysl

Active pill style:

```txt
filter-pill-active rounded-full px-4 py-[7px] text-[12px] font-medium font-body cursor-pointer
```

Inactive pill style:

```txt
filter-pill rounded-full px-4 py-[7px] text-[12px] font-medium font-body cursor-pointer
```

**Right — YouTube link**

Content:

```txt
Otevřte se na YouTube
```

*(Text partially readable in screenshot — "Otevřte se na YouTube" is best approximation. Confirm exact Czech phrasing with site owner.)*

Style:

```txt
flex items-center gap-2 text-[11px] font-body text-white/52 hover:text-white transition-colors flex-shrink-0
```

Icon:

```tsx
<Youtube className="h-4 w-4" />
```

Full filter bar:

```tsx
'use client';
import { useState } from "react";
import { Youtube } from "lucide-react";

const filters = ["Vše", "Reklamy", "Sport", "Reality", "Eventy", "Průmysl"];

export default function FilterBar() {
  const [active, setActive] = useState("Vše");

  return (
    <div className="flex items-center justify-between px-8 md:px-12 pb-5 gap-4">
      <div className="flex items-center gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full px-4 py-[7px] text-[12px] font-medium font-body cursor-pointer transition-all duration-200 ${
              active === filter
                ? "bg-white text-black border border-transparent"
                : "bg-transparent text-white/75 border border-white/22 hover:bg-white/[0.07] hover:text-white hover:border-white/40"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-[11px] font-body text-white/52 hover:text-white transition-colors flex-shrink-0"
      >
        <Youtube className="h-4 w-4" />
        Otevřte se na YouTube
      </a>
    </div>
  );
}
```

---

# SECTION 4 — PORTFOLIO GRID

The main content: a mosaic CSS Grid of 13 client project cards.

## 4a. Grid container and structure

Outer padding wrapper:

```txt
px-8 md:px-12 pb-16
```

Grid container uses CSS Grid with explicit column and row spans set via inline `style` props on each card wrapper (since Tailwind cannot generate arbitrary `col-[X/Y]` values from dynamic data).

Grid template:

```tsx
<div
  className="grid gap-[6px]"
  style={{
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "250px 155px 155px 155px",
  }}
>
```

8-column grid chosen to allow the SPECIALIZED + Porsche Czech half-column split (each occupies 1 of 8 cols; Visit Czechia occupies 2 of 8 cols above them).

Column/row span assignments:

| Card | gridColumn | gridRow | Resulting height |
|------|-----------|---------|-----------------|
| Visit Czechia | 1 / 3 | 1 / 3 | 250+155+6 = 411px |
| Red Bull | 3 / 5 | 1 / 2 | 250px |
| DJI | 5 / 7 | 1 / 2 | 250px |
| Škoda Group | 7 / 9 | 1 / 3 | 411px |
| SPECIALIZED | 1 / 2 | 3 / 4 | 155px |
| Porsche Czech | 2 / 3 | 3 / 4 | 155px |
| Airbnb | 3 / 5 | 2 / 3 | 155px |
| Colours of Ostrava | 5 / 7 | 2 / 4 | 155+155+6 = 316px |
| ČEZ | 7 / 9 | 3 / 4 | 155px |
| Bohemia Sekt | 1 / 3 | 4 / 5 | 155px |
| STRV | 3 / 5 | 4 / 5 | 155px |
| Slevomat | 5 / 7 | 4 / 5 | 155px |
| Toyota Česká republika | 7 / 9 | 4 / 5 | 155px |

## 4b. Card component

Each portfolio card:

Outer element (motion.div wrapper):

```txt
relative overflow-hidden cursor-pointer block w-full h-full
```

Image:

```txt
w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]
```

CSS grayscale applied via `style={{ filter: "grayscale(100%)" }}` on `<img>` (not a Tailwind utility, to ensure browser consistency).

Bottom gradient overlay:

```txt
card-overlay absolute inset-0 pointer-events-none
```

Hover tag pills (top-left, shown only on hover via AnimatePresence):

```txt
absolute top-3 left-3 flex flex-wrap gap-[5px] z-10
```

Tag pill:

```txt
glass-pill rounded-full px-2.5 py-[5px] text-[10px] font-body font-medium text-white
```

Card footer (bottom bar):

```txt
absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 z-10
```

Client name:

```txt
font-body text-[11px] font-medium text-white uppercase tracking-wide leading-none
```

External link icon button:

```txt
h-6 w-6 rounded-[3px] border border-white/18 bg-black/35 flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors
```

Icon inside link button:

```tsx
<ExternalLink className="h-3 w-3 text-white" />
```

Full card implementation:

```tsx
// components/reference/portfolio-card.tsx
'use client';
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface PortfolioCardProps {
  title: string;
  imageSrc: string;
  href: string;
  tags?: string[];
}

export default function PortfolioCard({
  title,
  imageSrc,
  href,
  tags = [],
}: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden cursor-pointer block w-full h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ filter: "grayscale(100%)" }}
      />

      {/* Bottom gradient */}
      <div className="card-overlay absolute inset-0 pointer-events-none" />

      {/* Hover tag pills */}
      <AnimatePresence>
        {hovered && tags.length > 0 && (
          <motion.div
            className="absolute top-3 left-3 flex flex-wrap gap-[5px] z-10"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="glass-pill rounded-full px-2.5 py-[5px] text-[10px] font-body font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-3 z-10">
        <span className="font-body text-[11px] font-medium text-white uppercase tracking-wide leading-none">
          {title}
        </span>
        <div className="h-6 w-6 rounded-[3px] border border-white/18 bg-black/35 flex items-center justify-center flex-shrink-0">
          <ExternalLink className="h-3 w-3 text-white" />
        </div>
      </div>
    </a>
  );
}
```

## 4c. Projects data

```ts
// lib/projects.ts
export interface Project {
  id: string;
  title: string;
  imageSrc: string;
  href: string;
  tags: string[];
  gridStyle: React.CSSProperties;
}

export const projects: Project[] = [
  {
    id: "visit-czechia",
    title: "Visit Czechia",
    imageSrc: "/images/visit-czechia.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "1 / 3", gridRow: "1 / 3" },
  },
  {
    id: "red-bull",
    title: "Red Bull",
    imageSrc: "/images/red-bull.jpg",
    href: "#",
    tags: ["Reklamy", "Sport", "Eventy"],
    gridStyle: { gridColumn: "3 / 5", gridRow: "1 / 2" },
  },
  {
    id: "dji",
    title: "DJI",
    imageSrc: "/images/dji.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "5 / 7", gridRow: "1 / 2" },
  },
  {
    id: "skoda-group",
    title: "Škoda Group",
    imageSrc: "/images/skoda-group.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "7 / 9", gridRow: "1 / 3" },
  },
  {
    id: "specialized",
    title: "SPECIALIZED",
    imageSrc: "/images/specialized.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "1 / 2", gridRow: "3 / 4" },
  },
  {
    id: "porsche-czech",
    title: "Porsche Czech",
    imageSrc: "/images/porsche-czech.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "2 / 3", gridRow: "3 / 4" },
  },
  {
    id: "airbnb",
    title: "Airbnb",
    imageSrc: "/images/airbnb.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "3 / 5", gridRow: "2 / 3" },
  },
  {
    id: "colours-of-ostrava",
    title: "Colours of Ostrava",
    imageSrc: "/images/colours-of-ostrava.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "5 / 7", gridRow: "2 / 4" },
  },
  {
    id: "cez",
    title: "ČEZ",
    imageSrc: "/images/cez.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "7 / 9", gridRow: "3 / 4" },
  },
  {
    id: "bohemia-sekt",
    title: "Bohemia Sekt",
    imageSrc: "/images/bohemia-sekt.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "1 / 3", gridRow: "4 / 5" },
  },
  {
    id: "strv",
    title: "STRV",
    imageSrc: "/images/strv.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "3 / 5", gridRow: "4 / 5" },
  },
  {
    id: "slevomat",
    title: "Slevomat",
    imageSrc: "/images/slevomat.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "5 / 7", gridRow: "4 / 5" },
  },
  {
    id: "toyota-cr",
    title: "Toyota Česká republika",
    imageSrc: "/images/toyota-cr.jpg",
    href: "#",
    tags: [],
    gridStyle: { gridColumn: "7 / 9", gridRow: "4 / 5" },
  },
];
```

Portfolio grid container:

```tsx
// components/reference/portfolio-grid.tsx
'use client';
import { motion } from "motion/react";
import PortfolioCard from "./portfolio-card";
import { projects } from "@/lib/projects";

export default function PortfolioGrid() {
  return (
    <div className="px-8 md:px-12 pb-16">
      <div
        className="grid gap-[6px]"
        style={{
          gridTemplateColumns: "repeat(8, 1fr)",
          gridTemplateRows: "250px 155px 155px 155px",
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            style={project.gridStyle}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
          >
            <PortfolioCard
              title={project.title}
              imageSrc={project.imageSrc}
              href={project.href}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
```

---

# ANIMATION SYSTEM

`'use client'` required on all animated components.

## 1. Page heading entrance

```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.55, ease: "easeOut" }}
```

## 2. Filter bar entrance

```tsx
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
```

## 3. Portfolio grid stagger

Cards stagger in on mount — short per-card delay creates a left-to-right wave:

```tsx
initial={{ opacity: 0, scale: 0.97 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
```

Total stagger: 13 × 0.04s = 0.52s maximum. Feels snappy, not laborious.

## 4. Card image hover — scale

```css
.portfolio-card img {
  transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              filter 0.55s ease;
}
.portfolio-card:hover img {
  transform: scale(1.04);
  filter: grayscale(85%);
}
```

The slight filter relaxation on hover (100% → 85% grayscale) gives a subtle warmth without abandoning the monochrome palette.

## 5. Tag pill entrance on hover

Use `AnimatePresence` for mount/unmount with exit animation:

```tsx
initial={{ opacity: 0, y: -6 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -6 }}
transition={{ duration: 0.18, ease: "easeOut" }}
```

## 6. Filter switch — dim non-matching cards

When active filter is not "Vše", dim cards whose tags array does not include the active filter. Use opacity animation rather than removing cards (removing would collapse the grid):

```tsx
<motion.div
  style={project.gridStyle}
  animate={{
    opacity: isVisible ? 1 : 0.15,
    scale: isVisible ? 1 : 0.99,
  }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
```

`isVisible` logic:

```ts
const isVisible =
  active === "Vše" || project.tags.includes(active);
```

## 7. External link icon hover

```txt
hover:bg-white/15 transition-colors duration-200
```

---

# EXACT VISUAL HIERARCHY

The eye reads the page in this order:

1. "Reference" — the enormous display heading; no other element on the page competes with its size
2. Visit Czechia — double-height left anchor card; first large image, commands the grid left side
3. Škoda Group — double-height right anchor card; mirrors Visit Czechia, anchors the right side
4. Colours of Ostrava — tall two-row wide card; dominant central-right visual
5. Active filter pill "Vše" — white-filled, reads immediately after the heading block
6. Red Bull — hover state visible with floating tag pills, draws attention mid-grid
7. DJI — clean product drone image in the top center band
8. "FILIP DOUBRAVA" nav wordmark — always present, lightweight
9. Bottom row (Bohemia Sekt, STRV, Slevomat, Toyota Česká republika) — equal visual weight, read left-to-right as a unified baseline
10. Airbnb — dark interior mid-band card
11. ČEZ — aerial forest card right-column middle band
12. SPECIALIZED + Porsche Czech — small square sub-cards filling bottom of left column, unobtrusive
13. Nav links (PRÁCE, REFERENCE, O MNĚ, KONTAKT) — subtle, functional
14. Hamburger button — top-right, functional
15. YouTube link — quietest element on the page; right-aligned small text

The "Reference" heading must remain the dominant visual. Do not let grid cards compete with the heading's typographic scale.

---

# SPACING AND LAYOUT DETAILS

```json
{
  "page_background": "#050505",
  "navbar_height": "64px",
  "page_horizontal_padding": "48px",
  "page_header_top_padding": "48px",
  "heading_size_desktop": "112px",
  "heading_size_tablet": "72px",
  "heading_size_mobile": "52px",
  "heading_line_height": "0.88",
  "heading_letter_spacing": "-0.025em",
  "subtitle_margin_top": "12px",
  "subtitle_font_size": "13px",
  "subtitle_opacity": "0.52",
  "filter_bar_padding_bottom": "20px",
  "filter_pill_padding_x": "16px",
  "filter_pill_padding_y": "7px",
  "filter_pill_gap": "8px",
  "filter_pill_font_size": "12px",
  "grid_gap": "6px",
  "grid_columns": 8,
  "grid_row_heights": {
    "row_1": "250px",
    "row_2": "155px",
    "row_3": "155px",
    "row_4": "155px"
  },
  "tall_card_height": "411px",
  "colours_card_height": "316px",
  "card_label_font_size": "11px",
  "card_footer_padding": "12px",
  "card_link_icon_size": "24px",
  "tag_pill_font_size": "10px",
  "tag_pill_padding_x": "10px",
  "tag_pill_padding_y": "5px",
  "tag_pill_gap": "5px",
  "tag_pill_top_offset": "12px",
  "tag_pill_left_offset": "12px",
  "nav_link_gap": "32px",
  "nav_link_font_size": "11px",
  "nav_active_underline_height": "1.5px"
}
```

---

# COMPONENT TREE

```
App
├── Navbar                                // 'use client'
│   ├── BrandWordmark (FILIP DOUBRAVA)
│   ├── NavLinks
│   │   ├── NavLink: PRÁCE
│   │   ├── NavLink: REFERENCE (active + white underline indicator)
│   │   ├── NavLink: O MNĚ
│   │   └── NavLink: KONTAKT
│   └── MenuButton (circle, Menu icon)
└── ReferencePage
    ├── PageHeader                        // server component
    │   ├── h1 ("Reference", Barlow 900)
    │   └── p (subtitle, Czech)
    ├── FilterBar                         // 'use client' — useState(active)
    │   ├── FilterPill: Vše (active)
    │   ├── FilterPill: Reklamy
    │   ├── FilterPill: Sport
    │   ├── FilterPill: Reality
    │   ├── FilterPill: Eventy
    │   ├── FilterPill: Průmysl
    │   └── YoutubeLink (icon + text)
    └── PortfolioGrid                     // 'use client' — motion + filter logic
        └── PortfolioCard × 13           // 'use client' — useState(hovered)
            ├── CardImage (img, grayscale filter)
            ├── CardOverlay (gradient div, .card-overlay)
            ├── TagPillsGroup (AnimatePresence — conditional on hover)
            │   └── TagPill × N (.glass-pill, rounded-full)
            └── CardFooter
                ├── ClientName (font-body uppercase text-[11px])
                └── ExternalLinkButton (h-6 w-6 dark square, ExternalLink icon)
```

---

# COPYWRITING CONTENT

All visible copy verbatim in original Czech, order: top-to-bottom, left-to-right.

**Navbar:**
```
FILIP DOUBRAVA
PRÁCE
REFERENCE
O MNĚ
KONTAKT
```

**Page header:**
```
Reference

Vybrané práce a finální výstupy. Každý projekt vede přímo na finální video.
```

**Filter bar:**
```
Vše   Reklamy   Sport   Reality   Eventy   Průmysl

[YouTube icon]  Otevřte se na YouTube
```

*(YouTube link text is small and partially readable — "Otevřte se na YouTube" is best approximation; confirm with site owner before publishing)*

**Portfolio card client names in grid order:**
```
Visit Czechia
Red Bull
DJI
Škoda Group
SPECIALIZED
Porsche Czech
Airbnb
Colours of Ostrava
ČEZ
Bohemia Sekt
STRV
Slevomat
Toyota Česká republika
```

**Red Bull hover state — tag pills:**
```
Reklamy   Sport   Eventy
```

---

# VISUAL DETAILS TO MATCH

**Important details from the screenshot:**

- The page background is pure black — no warm tint, no texture, no visible grain.
- The "Reference" heading is the single most dominant element. It is extremely heavy (Barlow 900 or equivalent), white, left-aligned. No other element competes.
- All 13 portfolio images are strictly monochrome — CSS `filter: grayscale(100%)` applied uniformly. No exceptions.
- The mosaic grid gap is tight — approximately 6px. Cards almost touch. The density is intentional.
- Cards have no visible rounded corners, or only minimal rounding (`2–4px`). They are near-rectangular.
- Card labels are small, white, and quiet — they identify the client but do not dominate.
- The external link icon sits in a small square button at the bottom-right of each card — dark background, thin white border.
- The active filter pill ("Vše") is solid white with black text — clearly distinct from the white-outlined inactive pills.
- Inactive filter pills have a white outline border on a transparent background.
- The "REFERENCE" nav link has a thin white underline — not bold, not colored, just a 1.5px white line below the text.
- The hamburger button is a small circle — not a text button, not a rectangle.
- Visit Czechia (left) and Škoda Group (right) are double-height anchor cards — they give the grid its visual bookend structure.
- Colours of Ostrava is the tallest interior card, spanning 2 rows in the middle-right area.
- The bottom row of 4 cards is uniform in height and width — a clean grid baseline.
- SPECIALIZED and Porsche Czech are half-width sub-cards filling the lower left after Visit Czechia.
- The Red Bull card shows hover tag pills at the top-left — three glass-morphic pills, horizontal flex row.
- The YouTube link in the filter row is subtle and right-aligned — smallest typographic element on the page.
- The grid is entirely static in structure — no slider, no masonry JS, no scroll-triggered reorder.
- Typography throughout is purely sans-serif — no italic serif accents anywhere on this page.

**Anti-patterns / things to avoid:**

- Do not add any color accents — the entire palette is black, white, and gray. No red, no blue, no gold.
- Do not tint, warm, or duotone the images — grayscale only, CSS-driven.
- Do not add visible rounded corners to the cards — keep them near-rectangular.
- Do not widen the grid gap beyond 8px — the 6px tight gap is deliberate.
- Do not use a carousel, slider, masonry JS library, or lightbox — the grid is a static layout.
- Do not make card labels large, bold, or prominent — they are quiet identifiers.
- Do not add box-shadow or glow decoration around cards — unnecessary on a black background.
- Do not use a heavy backdrop or band behind the navbar — it should be near-transparent.
- Do not implement filter by removing/re-inserting DOM elements — this collapses the mosaic. Use opacity dimming.
- Do not scale card hover beyond `1.04` — subtlety is the aesthetic.

---

# FINAL IMPLEMENTATION GOAL

The final result should visually recreate this Reference gallery page as a polished Next.js portfolio page. It should feel like a premium film production company's client archive — every card a frozen frame from a final video, unified under a monochromatic editorial vision. The "Reference" heading should feel massive and self-assured, anchoring the page before the grid begins. The mosaic grid should read as intentional and composed — two tall anchor cards framing the sides, varied interior heights, and a clean uniform baseline row at the bottom. The filter system should dim non-matching cards instantly while preserving the mosaic structure. The overall mood is quiet, precise, and cinematic: a portfolio that communicates craft and confidence through restraint, not spectacle.
