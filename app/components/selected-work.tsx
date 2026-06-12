'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const PROJECTS = [
  {
    id: '01',
    title: 'Škoda Auto',
    category: 'Automotive',
    year: '2024',
    tags: ['FPV', 'Mavic'],
    gradient: 'linear-gradient(145deg, #111 0%, #1d1d1d 55%, #090909 100%)',
  },
  {
    id: '02',
    title: 'Red Bull Racing',
    category: 'Sport',
    year: '2024',
    tags: ['FPV'],
    gradient: 'linear-gradient(160deg, #0d0d0d 0%, #1b1b1b 60%, #080808 100%)',
  },
  {
    id: '03',
    title: 'Praha – Skyline',
    category: 'Nemovitosti',
    year: '2023',
    tags: ['Mavic'],
    gradient: 'linear-gradient(120deg, #101010 0%, #1a1a1a 55%, #0b0b0b 100%)',
  },
  {
    id: '04',
    title: 'Letní Festival',
    category: 'Events',
    year: '2023',
    tags: ['FPV', 'Mavic'],
    gradient: 'linear-gradient(148deg, #0e0e0e 0%, #161616 52%, #0a0a0a 100%)',
  },
  {
    id: '05',
    title: 'Průmyslový Areál',
    category: 'Industrials',
    year: '2024',
    tags: ['Mavic'],
    gradient: 'linear-gradient(158deg, #0c0c0c 0%, #1e1e1e 65%, #080808 100%)',
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <path d="M0 5h13M8 1.5l4.5 3.5L8 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
  className = '',
  aspectClass = 'aspect-video',
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  className?: string;
  aspectClass?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className={`relative rounded-[18px] overflow-hidden cursor-pointer ${aspectClass} ${className}`}
      style={{
        background: project.gradient,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Film-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.018,
        }}
      />

      {/* Project number */}
      <span
        className="absolute top-5 left-5 z-10"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '9px',
          color: 'rgba(255,255,255,0.28)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
        }}
      >
        {project.id}
      </span>

      {/* Tags */}
      <div className="absolute top-4 right-4 z-10 flex gap-1.5">
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '8.5px',
              color: 'rgba(255,255,255,0.35)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px',
              padding: '3px 8px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Info overlay */}
      <div
        className="absolute inset-0 z-10 flex flex-col justify-end"
        style={{
          background: `linear-gradient(to top, rgba(0,0,0,${hovered ? 0.92 : 0.72}) 0%, rgba(0,0,0,${hovered ? 0.5 : 0.2}) 50%, transparent 100%)`,
          transition: 'background 0.35s ease',
        }}
      >
        <div
          className="p-5"
          style={{
            transform: hovered ? 'none' : 'translateY(6px)',
            transition: 'transform 0.35s ease',
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '9px',
              color: 'rgba(255,255,255,0.42)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '4px',
            }}
          >
            {project.category} · {project.year}
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(18px, 2.2vw, 28px)',
              color: '#fff',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              lineHeight: 1,
            }}
          >
            {project.title}
          </div>

          <div
            className="flex items-center gap-2 mt-3"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'none' : 'translateX(-4px)',
              transition: 'opacity 0.25s ease 0.05s, transform 0.25s ease 0.05s',
              color: '#CBFF00',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Zobrazit projekt
            </span>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  return (
    <section id="selected-work" style={{ padding: '120px 0 140px', background: '#000' }}>
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
            <div
              className="inline-flex items-center gap-2 rounded-full mb-6 px-3 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  color: '#CBFF00',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                }}
              >
                01 / Vybrané práce
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(56px, 7.5vw, 108px)',
                lineHeight: 0.87,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                color: '#fff',
                margin: 0,
              }}
            >
              SELECTED
              <br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>WORK</span>
            </h2>
          </div>

          <p
            className="max-w-[280px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.7,
              letterSpacing: '0.01em',
              paddingBottom: '6px',
            }}
          >
            Vybrané práce pro značky, produkce a projekty,
            kde obraz musí fungovat okamžitě.
          </p>
        </motion.div>

        {/* Grid — asymmetric 12-col on desktop */}
        <div className="grid grid-cols-12 gap-[10px]">
          {/* Large featured — 7 cols desktop, full on mobile */}
          <div className="col-span-12 md:col-span-7">
            <ProjectCard project={PROJECTS[0]} index={0} aspectClass="aspect-[16/10]" className="w-full" />
          </div>

          {/* Medium right — 5 cols desktop */}
          <div className="col-span-12 md:col-span-5">
            <ProjectCard project={PROJECTS[1]} index={1} aspectClass="aspect-[16/10]" className="w-full" />
          </div>

          {/* Bottom row — 4 / 5 / 3 */}
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <ProjectCard project={PROJECTS[2]} index={2} aspectClass="aspect-[4/3]" className="w-full" />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-5">
            <ProjectCard project={PROJECTS[3]} index={3} aspectClass="aspect-[4/3]" className="w-full" />
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-3">
            <ProjectCard project={PROJECTS[4]} index={4} aspectClass="aspect-[4/3]" className="w-full" />
          </div>
        </div>

        {/* All projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <button
            className="flex items-center gap-3 rounded-full transition-all duration-250"
            style={{
              padding: '13px 32px',
              border: '1px solid rgba(255,255,255,0.13)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '10.5px',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              background: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(203,255,0,0.35)';
              e.currentTarget.style.color = '#CBFF00';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
            }}
          >
            Všechny projekty
            <ArrowIcon />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
