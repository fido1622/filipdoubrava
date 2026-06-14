'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const YELLOW = '#CBFF00';

interface Category {
  id: string;
  label: string;
  href: string;
  imageSrc: string;
  imagePosition?: string;
  gradient: string;
  /** CSS class that sets grid-column / grid-row for this card */
  gridClass: string;
}

const CATEGORIES: Category[] = [
  {
    id: 'skoda',
    label: 'ŠKODA',
    href: 'https://youtu.be/55zmMbL4v68?si=vSfG_hSsqG9-biAh',
    imageSrc: '/images/category-skoda.jpg',
    gradient: 'linear-gradient(148deg, #0f0f0f 0%, #1c1c1c 55%, #080808 100%)',
    gridClass: 'cat-card-commercials',
  },
  {
    id: 'rock-for-people',
    label: 'ROCK FOR PEOPLE',
    href: 'https://www.youtube.com/watch?si=z-WAOQTtlOIXtcIj&v=kT0gNFYKqxU&feature=youtu.be',
    imageSrc: '/images/category-rfp.jpg',
    gradient: 'linear-gradient(155deg, #0c0c0c 0%, #171717 60%, #070707 100%)',
    gridClass: 'cat-card-sport',
  },
  {
    id: 'dji',
    label: 'DJI',
    href: 'https://www.youtube.com/watch?si=goaaSe1DUJ4EqMBS&v=QlWHwiuOrKA&feature=youtu.be',
    imageSrc: '/images/category-dji.jpg',
    imagePosition: '30% center',
    gradient: 'linear-gradient(138deg, #0d0d0d 0%, #191919 50%, #090909 100%)',
    gridClass: 'cat-card-realestate',
  },
  {
    id: 'fortuna',
    label: 'FORTUNA',
    href: 'https://www.youtube.com/watch?v=hCDZCdqkRbs',
    imageSrc: '/images/category-fortuna.jpg',
    gradient: 'linear-gradient(143deg, #0b0b0b 0%, #151515 52%, #060606 100%)',
    gridClass: 'cat-card-events',
  },
  {
    id: 'remax',
    label: 'RE/MAX',
    href: 'https://www.youtube.com/watch?v=UNhzcrcD_ck',
    imageSrc: '/images/category-remax.jpg',
    gradient: 'linear-gradient(152deg, #0a0a0a 0%, #1a1a1a 65%, #060606 100%)',
    gridClass: 'cat-card-industrials',
  },
];

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <motion.div
      className={cat.gridClass}
      initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <a
        href={cat.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-full rounded-[14px] overflow-hidden group cursor-pointer block"
        style={{
          background: cat.gradient,
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <img
          src={cat.imageSrc}
          alt={cat.label}
          className="cat-card-img absolute inset-0 w-full h-full object-cover transition-[transform,filter] duration-500 group-hover:scale-[1.04]"
          style={{
            objectPosition: cat.imagePosition,
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />

        {/* Bottom gradient for label legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 50%, transparent 72%)',
          }}
        />

        {/* Label + arrow */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-[14px]">
          <span
            className="cat-card-label"
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: YELLOW,
              lineHeight: 1,
            }}
          >
            {cat.label}
          </span>
          <span
            className="arrow-circle cat-card-arrow"
            aria-label={`View ${cat.label}`}
          >
            <ArrowRight className="cat-card-arrow-icon" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}

export default function CategoriesSection() {
  return (
    <section id="selected-projects" className="cat-section">
      <style>{`
        /* ── BASE (mobile-first) ─────────────────────────────── */

        .cat-section { background: #000; overflow: hidden; }

        /* Outer wrapper: column on mobile, row on desktop */
        .cat-wrap { display: flex; flex-direction: column; width: 100%; }

        /* Info panel: full-width compact header on mobile */
        .cat-panel {
          width: 100%;
          padding: 32px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        /* Headline: slightly smaller on mobile */
        .cat-headline {
          font-family: 'Bebas Neue', Anton, Impact, sans-serif;
          font-size: clamp(42px, 12vw, 80px);
          line-height: 0.88;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: ${YELLOW};
          margin: 16px 0 0;
        }

        /* Category card image: grayscale by default, full color on hover */
        .cat-card-img {
          filter: grayscale(100%) brightness(0.80) contrast(1.06);
        }
        .group:hover .cat-card-img {
          filter: grayscale(0%) brightness(0.95) contrast(1.06);
        }

        /* Reference link glow on hover */
        .cat-reference-link {
          transition: text-shadow 0.3s ease, filter 0.3s ease;
        }
        .cat-reference-link:hover {
          text-shadow: 0 0 16px rgba(203,255,0,0.8), 0 0 32px rgba(203,255,0,0.4);
          filter: drop-shadow(0 0 6px rgba(203,255,0,0.6));
        }

        /* Card grid: 2 columns on mobile */
        .cat-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          padding: 0 6px 6px;
        }

        /* ── Mobile card placement ───────────────────────────── */
        /*   COMMERCIALS → full-width top row                    */
        /*   SPORT + REAL ESTATE → side-by-side row              */
        /*   EVENTS + INDUSTRIALS → side-by-side row             */

        .cat-card-commercials { grid-column: 1 / span 2; height: 52vw; }
        .cat-card-sport       { grid-column: 1;           height: 46vw; }
        .cat-card-realestate  { grid-column: 2;           height: 46vw; }
        .cat-card-events      { grid-column: 1;           height: 46vw; }
        .cat-card-industrials { grid-column: 2;           height: 46vw; }

        /* Card label + arrow — mobile */
        .cat-card-label { font-size: clamp(24px, 6.5vw, 32px); }
        .cat-card-arrow { width: 38px; height: 38px; }
        .cat-card-arrow-icon { width: 16px; height: 16px; }

        /* ── DESKTOP (md = 768px+) ───────────────────────────── */
        @media (min-width: 768px) {

          .cat-wrap { flex-direction: row-reverse; min-height: 490px; }

          .cat-panel {
            width: 340px;
            flex-shrink: 0;
            padding: 36px 32px;
          }

          .cat-headline {
            font-size: clamp(48px, 4vw, 66px);
            line-height: 0.88;
            margin-top: 18px;
          }

          /* Card grid: 4 explicit columns, 2 equal rows */
          .cat-cards {
            flex: 1;
            grid-template-columns: 220px 220px 1fr 1fr;
            grid-template-rows: repeat(2, 1fr);
            padding: 6px;
            padding-right: 0;
          }

          /* Desktop card placement */
          .cat-card-commercials { grid-column: 1; grid-row: 1 / span 2; height: auto; }
          .cat-card-sport       { grid-column: 2; grid-row: 1;          height: auto; }
          .cat-card-realestate  { grid-column: 2; grid-row: 2;          height: auto; }
          .cat-card-events      { grid-column: 3; grid-row: 1 / span 2; height: auto; }
          .cat-card-industrials { grid-column: 4; grid-row: 1 / span 2; height: auto; }

          /* Revert label + arrow to original desktop size */
          .cat-card-label { font-size: 13px; }
          .cat-card-arrow { width: 30px; height: 30px; }
          .cat-card-arrow-icon { width: 13px; height: 13px; }
        }
      `}</style>

      <div className="cat-wrap">

        {/* ─── INFO PANEL ─── */}
        <motion.div
          className="cat-panel"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
        >
          <div>
            {/* Badge */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid rgba(203,255,0,0.45)',
                borderRadius: '9999px',
                padding: '4px 12px',
                color: YELLOW,
                fontSize: '9px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                background: 'rgba(203,255,0,0.04)',
                whiteSpace: 'nowrap',
              }}
            >
              Vybrané práce
            </span>

            <h2 className="cat-headline">
              <span className="md:hidden">KDE JSTE MOHLI<br />VIDĚT MOJE ZÁBĚRY</span>
              <span className="hidden md:inline">KDE JSTE MOHLI<br />VIDĚT MOJE<br />ZÁBĚRY</span>
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.48)',
                lineHeight: 1.65,
                marginTop: '16px',
              }}
            >
              Výběr prací napříč žánry —<br />
              reklama, sport, eventy i průmysl.
            </p>

            <a
              href="/reference"
              className="cat-reference-link"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '16px',
                color: YELLOW,
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontSize: '32px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Reference
              <svg width="26" height="26" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7h10M7 2l5 5-5 5" stroke={YELLOW} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* ─── CARD GRID ─── */}
        {/* All 5 cards are flat direct children — CSS grid handles placement */}
        <div className="cat-cards">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
