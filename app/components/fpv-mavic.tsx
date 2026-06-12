'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <div
      className="relative w-full aspect-video rounded-[14px] overflow-hidden"
      style={{
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="FPV Reel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

function StillFrame({ index, src }: { index: number; src: string }) {
  return (
    <div
      className="aspect-[4/3] rounded-[10px] overflow-hidden relative"
      style={{
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 768px) 33vw, 16vw"
        className="object-cover"
      />
      <span
        className="absolute bottom-2 left-2.5"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '7.5px',
          color: 'rgba(255,255,255,0.6)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textShadow: '0 1px 4px rgba(0,0,0,0.8)',
        }}
      >
        {String(index).padStart(2, '0')}
      </span>
    </div>
  );
}

const FPV_STILLS = [
  '/images/fpv-mavic/austria_fpv.jpg',
  '/images/fpv-mavic/claas_fpv.jpg',
  '/images/fpv-mavic/f1_fpv.jpg',
];

const MAVIC_STILLS = [
  '/images/fpv-mavic/austria_mavic.jpg',
  '/images/fpv-mavic/claas_mavic.jpg',
  '/images/fpv-mavic/f1_mavic.jpg',
];

export default function FpvMavic() {
  return (
    <section
      id="fpv-mavic"
      style={{ padding: '0 0 140px', background: '#000' }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
          style={{ textAlign: 'center' }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(40px, 5.5vw, 96px)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
              whiteSpace: 'nowrap',
            }}
          >
            RŮZNÉ TYPY ZÁBĚRŮ,{' '}
            <span style={{ color: '#CBFF00' }}>JEDEN PILOT</span>
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              marginTop: '14px',
            }}
          >
            Dva přístupy, jeden cíl: dostat ze záběru maximum.
          </p>
        </motion.div>

        {/* Split panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {/* FPV side */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[18px] overflow-hidden"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '36px',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(52px, 6vw, 86px)',
                    lineHeight: 0.85,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  FPV
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'rgba(255,255,255,0.35)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '2px',
                  }}
                >
                  Pohyb a průlety
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  color: '#CBFF00',
                  border: '1px solid rgba(203,255,0,0.3)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Dynamika
              </span>
            </div>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Ostré změny směru a záběry v těsné blízkosti. FPV je ideální tam,
              kde má kamera vtáhnout diváka přímo do prostoru a pohybu.
              Díky malým dronům prolétáme i velmi malými prostory.
            </p>

            {/* Use cases */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Sport', 'Eventy', 'Reklama', 'Akční záběry'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.32)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Video */}
            <YouTubeEmbed videoId="F-mBCbS9A3M" />

            {/* Stills */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {FPV_STILLS.map((g, i) => (
                <StillFrame key={i} index={i + 1} src={g} />
              ))}
            </div>
          </motion.div>

          {/* Mavic side */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative rounded-[18px] overflow-hidden"
            style={{
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.06)',
              padding: '36px',
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(52px, 6vw, 86px)',
                    lineHeight: 0.85,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  MAVIC
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', Impact, sans-serif",
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'rgba(255,255,255,0.35)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '2px',
                  }}
                >
                  Stabilita a přesnost
                </p>
              </div>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  color: 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Cinematic
              </span>
            </div>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.45)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}
            >
              Stabilní cinematic záběry, panoramata, čisté odjezdy a kontrolovaný
              pohyb. Mavic je ideální pro produkce, které potřebují eleganci,
              přesnost a vizuální jistotu.
            </p>

            {/* Use cases */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Nemovitosti', 'Dokument', 'Produkce', 'Hyperlapse'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.32)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Video */}
            <YouTubeEmbed videoId="mJp_u1dBkxQ" />

            {/* Stills */}
            <div className="grid grid-cols-3 gap-2 mt-3">
              {MAVIC_STILLS.map((g, i) => (
                <StillFrame key={i} index={i + 1} src={g} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
