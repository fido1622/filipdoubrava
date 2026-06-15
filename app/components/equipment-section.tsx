'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const CAPABILITIES = [
  {
    id: '01',
    title: 'DJI\nMavic',
    titleEn: 'Mavic',
    output: 'Stabilizované a precizní záběry z dronu, panoramata, odjezdy a nálety. Spolehlivý základ pro většinu projektů.',
    detail: 'DJI Mavic 4 Pro · 4K/60fps · 3-osý gimbal',
    tags: ['Mavic 4 Pro', '4K ALL-I', 'Stabilizace'],
    available: true,
  },
  {
    id: '02',
    title: 'FPV\npackage',
    titleEn: 'FPV Package',
    output: 'Dynamické průlety, akční sekvence a unikátní záběry. Ideální pro sport, eventy a reklamu.',
    detail: 'Custom FPV rig · GoPro / DJI O4 Pro · 120fps slow-motion',
    tags: ['FPV', 'Cinematic FPV', '120fps'],
    available: true,
  },
  {
    id: '03',
    title: 'Cinema dron:\nBlackmagic & Inspire 3',
    titleEn: 'Cinema Setup',
    output: 'Těžší drony s filmovými kamerami pro produkce náročné na obraz.',
    detail: 'DJI Inspire 3 · Blackmagic Cinema Camera · ProRes / RAW',
    tags: ['Inspire 3', 'Blackmagic', 'ProRes RAW'],
    available: false,
    note: 'Na poptávku',
  },
  {
    id: '04',
    title: 'Live\nbroadcast',
    titleEn: 'Live Broadcast',
    output: 'Živý přenos obrazu přímo z dronu pro sport, eventy a televizní produkce.',
    detail: 'SDI/HDMI live output · Low-latency feed · Koordinace s tech týmem',
    tags: ['Live SDI', 'Eventy', 'Broadcast'],
    available: true,
  },
  {
    id: '05',
    title: 'Full video\nprodukce',
    titleEn: 'Full Production',
    output: 'Kompletní video produkce od předprodukce po výsledný střih a color grading.',
    detail: 'Scénář · Natáčení · Střih · Color grading · Zvuk · Delivery',
    tags: ['Střih', 'Color', 'Delivery'],
    available: true,
  },
];

export default function EquipmentSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="equipment"
      style={{ padding: '0 0 140px', background: '#000' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
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
              PRODUKČNÍ
              <br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>MOŽNOSTI</span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              maxWidth: '280px',
              paddingBottom: '6px',
            }}
          >
            Od jednoduchého leteckého záběru po komplexnější produkci —
            technika, zkušenosti a workflow podle potřeb konkrétního projektu.
          </p>
        </motion.div>

        {/* Capability modules */}
        <div className="flex flex-col gap-[2px]">
          {CAPABILITIES.map((cap, i) => {
            const isOpen = openId === cap.id;

            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              >
                <button
                  className="w-full text-left"
                  onClick={() => setOpenId(isOpen ? null : cap.id)}
                  style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                  aria-expanded={isOpen}
                >
                  <div
                    className="rounded-[14px] transition-all duration-300"
                    style={{
                      background: isOpen ? '#0d0d0d' : '#0a0a0a',
                      border: `1px solid ${isOpen ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.055)'}`,
                      padding: '28px 32px',
                    }}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-8 flex-1">
                        {/* Number */}
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '11px',
                            color: isOpen ? '#CBFF00' : 'rgba(255,255,255,0.22)',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            flexShrink: 0,
                            paddingTop: '4px',
                            transition: 'color 0.25s',
                          }}
                        >
                          {cap.id}
                        </span>

                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "'Barlow Condensed', Impact, sans-serif",
                            fontWeight: 900,
                            fontSize: 'clamp(26px, 3vw, 40px)',
                            color: '#fff',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                            lineHeight: 0.92,
                            whiteSpace: 'pre-line',
                            margin: 0,
                            flex: 1,
                          }}
                        >
                          {cap.title}
                        </h3>
                      </div>

                      {/* Right side */}
                      <div className="flex items-center gap-4 flex-shrink-0">
                        {/* Availability */}
                        <span
                          className="hidden sm:block"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '9px',
                            color: cap.available ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.25)',
                            border: `1px solid ${cap.available ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.07)'}`,
                            borderRadius: '999px',
                            padding: '4px 10px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {cap.note || 'K dispozici'}
                        </span>

                        {/* Toggle */}
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            border: `1px solid ${isOpen ? 'rgba(203,255,0,0.4)' : 'rgba(255,255,255,0.12)'}`,
                            background: isOpen ? 'rgba(203,255,0,0.08)' : 'transparent',
                          }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            style={{
                              transition: 'transform 0.25s ease, color 0.25s',
                              transform: isOpen ? 'rotate(45deg)' : 'none',
                              color: isOpen ? '#CBFF00' : 'rgba(255,255,255,0.4)',
                            }}
                          >
                            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div
                      style={{
                        overflow: 'hidden',
                        maxHeight: isOpen ? '200px' : '0',
                        opacity: isOpen ? 1 : 0,
                        transition: 'max-height 0.4s ease, opacity 0.3s ease',
                        marginTop: isOpen ? '20px' : 0,
                      }}
                    >
                      <div
                        style={{
                          width: '100%',
                          height: '1px',
                          background: 'rgba(255,255,255,0.07)',
                          marginBottom: '20px',
                        }}
                      />
                      <div className="flex flex-col md:flex-row gap-6 pl-0 md:pl-[calc(11px+32px)]">
                        <div className="flex-1">
                          <p
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '13px',
                              color: 'rgba(255,255,255,0.5)',
                              lineHeight: 1.7,
                              margin: 0,
                            }}
                          >
                            {cap.output}
                          </p>
                          <p
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '11px',
                              color: 'rgba(255,255,255,0.28)',
                              lineHeight: 1.6,
                              marginTop: '8px',
                            }}
                          >
                            {cap.detail}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end md:items-start">
                          {cap.tags.map(tag => (
                            <span
                              key={tag}
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '9px',
                                color: 'rgba(255,255,255,0.35)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '999px',
                                padding: '4px 10px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
