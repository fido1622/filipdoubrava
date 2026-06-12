'use client';

import { motion } from 'motion/react';

const QUOTES = [
  {
    id: '01',
    quote:
      'Filip má cit pro moment, pohyb i kompozici. Často přesně chápe, co záběr potřebuje, ještě dřív, než to dokážeme úplně pojmenovat.',
    author: 'Markéta Horáčková',
    role: 'Creative Director',
    company: 'Publicis Prague',
  },
  {
    id: '02',
    quote:
      'S FPV dronem zvládá záběry, které by jinak zabraly mnohem víc času i pokusů. Je přesný, spolehlivý a na natáčení perfektně připravený.',
    author: 'Tomáš Vlček',
    role: 'DOP',
    company: 'Česká televize',
  },
  {
    id: '03',
    quote:
      'Spolupráce s Filipem znamená jistotu ve vzduchu i na place. Technicky silný pilot, klidná komunikace a profesionální přístup bez zbytečných komplikací.',
    author: 'Jana Procházková',
    role: 'Line Producer',
    company: 'Boogie Films',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{ padding: '0 0 140px', background: '#000' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(52px, 7vw, 102px)',
                lineHeight: 0.87,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                color: '#fff',
                margin: 0,
              }}
            >
              CO ŘÍKAJÍ
              <br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>KLIENTI</span>
            </h2>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-10 gap-y-3 pb-2">
            {['Škoda Auto', 'Red Bull', 'ČT', 'Publicis', 'Boogie Films'].map(brand => (
              <span
                key={brand}
                style={{
                  fontFamily: "'Barlow Condensed', Impact, sans-serif",
                  fontWeight: 700,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Quote grid — asymmetric */}
        <div className="grid grid-cols-12 gap-[10px]">
          {/* First quote — wide */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-8"
          >
            <div
              className="relative h-full rounded-[18px] flex flex-col justify-between"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '40px',
                minHeight: '220px',
              }}
            >
              {/* Opening quotemark */}
              <span
                style={{
                  fontFamily: "'Barlow Condensed', Impact, sans-serif",
                  fontWeight: 900,
                  fontSize: '72px',
                  color: 'rgba(203,255,0,0.15)',
                  lineHeight: 0.8,
                  display: 'block',
                  marginBottom: '16px',
                }}
              >
                &ldquo;
              </span>

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: 1.65,
                  flex: 1,
                  margin: 0,
                }}
              >
                {QUOTES[0].quote}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#1a1a1a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 500,
                    }}
                  >
                    {QUOTES[0].author}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      color: 'rgba(255,255,255,0.28)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginTop: '2px',
                    }}
                  >
                    {QUOTES[0].role} · {QUOTES[0].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Second quote — narrow, tall */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
            className="col-span-12 md:col-span-4"
          >
            <div
              className="relative h-full rounded-[18px] flex flex-col justify-between"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '32px',
                minHeight: '220px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.65,
                  margin: 0,
                  flex: 1,
                }}
              >
                &ldquo;{QUOTES[1].quote}&rdquo;
              </p>

              <div className="mt-6">
                <div
                  style={{
                    width: '24px',
                    height: '1px',
                    background: 'rgba(255,255,255,0.15)',
                    marginBottom: '12px',
                  }}
                />
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11.5px',
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 500,
                  }}
                >
                  {QUOTES[1].author}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.5px',
                    color: 'rgba(255,255,255,0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '3px',
                  }}
                >
                  {QUOTES[1].role} · {QUOTES[1].company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Third quote — centered strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.13 }}
            className="col-span-12 md:col-span-8 md:col-start-3"
          >
            <div
              className="relative rounded-[18px] flex flex-col sm:flex-row sm:items-center gap-8"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.06)',
                padding: '32px 40px',
              }}
            >
              <p
                className="flex-1"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13.5px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                &ldquo;{QUOTES[2].quote}&rdquo;
              </p>

              <div className="flex-shrink-0">
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11.5px',
                    color: 'rgba(255,255,255,0.55)',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {QUOTES[2].author}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.5px',
                    color: 'rgba(255,255,255,0.25)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '3px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {QUOTES[2].role}
                  <br />
                  {QUOTES[2].company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
