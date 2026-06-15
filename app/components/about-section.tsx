'use client';

import { motion } from 'motion/react';

const STATS = [
  { value: '6', label: 'let praxe' },
  { value: '200+', label: 'projektů' },
  { value: 'FPV\n+\nMavic', label: 'záběry', multiline: true },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '140px 0 140px',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-[10px] items-stretch">
          {/* Left — image block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-6 lg:col-span-5 flex flex-col gap-[10px]"
          >
            {/* Main portrait */}
            <div
              className="rounded-[18px] overflow-hidden relative flex-1"
              style={{
                minHeight: '420px',
                background: 'linear-gradient(145deg, #111 0%, #1c1c1c 50%, #0a0a0a 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <img
                src="/images/about-filip.jpg"
                alt="Filip Doubrava — drone pilot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                  filter: 'grayscale(100%) contrast(1.08)',
                  position: 'absolute',
                  inset: 0,
                }}
              />
              {/* Bottom vignette */}
              <div
                className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)' }}
              />
              {/* Location badge */}
              <div
                className="absolute bottom-5 left-5 flex items-center gap-2"
                style={{
                  padding: '6px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span style={{ display: 'block', width: '5px', height: '5px', borderRadius: '50%', background: '#CBFF00' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Praha, Česko
                </span>
              </div>
            </div>

            {/* Stats strip */}
            <div
              className="relative rounded-[18px] grid grid-cols-3 divide-x divide-white/[0.06]"
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {STATS.map(({ value, label, multiline }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-7 px-4"
                  style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', Impact, sans-serif",
                      fontWeight: 900,
                      fontSize: multiline ? '20px' : '32px',
                      color: '#fff',
                      lineHeight: multiline ? 1.15 : 1,
                      textAlign: 'center',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {value}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '9px',
                      color: 'rgba(255,255,255,0.35)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginTop: '4px',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — editorial text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col justify-between py-2 md:pl-8 lg:pl-14"
          >
            {/* Top: label + heading */}
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', Impact, sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(52px, 7vw, 104px)',
                  lineHeight: 0.86,
                  letterSpacing: '-0.025em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  margin: 0,
                }}
              >
                PROFESIONÁLNÍ
                <br />
                <span style={{ color: 'rgba(255,255,255,0.18)' }}>PILOT DRONU</span>
              </h2>
            </div>

            {/* Middle: copy */}
            <div className="mt-12 md:mt-0">
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: 'rgba(255,255,255,0.15)',
                  marginBottom: '24px',
                }}
              />
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(14px, 1.4vw, 17px)',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                  letterSpacing: '0.01em',
                  maxWidth: '440px',
                  margin: 0,
                }}
              >
                S drony létám profesionálně 6 let. Měl jsem možnost natáčet
                velké reklamy, festivaly, koncerty, sportovce i živá vysílání.
                Na téhle práci mě nejvíc baví, že mě dostane na místa, o kterých se mi nikdy nezdálo.
              </p>
            </div>

            {/* Bottom: inline credentials */}
            <div className="mt-12 flex flex-wrap gap-3">
              {['Licence A2', 'Pojištění proti odpovědnosti', 'FPV'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9.5px',
                    color: 'rgba(255,255,255,0.38)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '999px',
                    padding: '5px 12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
