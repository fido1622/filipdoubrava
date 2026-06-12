'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface PortfolioCardProps {
  title: string;
  imageSrc: string;
  href: string;
  tags?: string[];
  year?: string;
}

export default function PortfolioCard({
  title,
  imageSrc,
  href,
  tags = [],
  year,
}: PortfolioCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="ref-portfolio-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        style={{ filter: 'none' }}
      />

      {/* Bottom gradient */}
      <div className="ref-card-overlay absolute inset-0 pointer-events-none" />

      {/* Year badge */}
      {year && (
        <span
          className="ref-glass-pill absolute z-10"
          style={{
            top: '10px',
            right: '10px',
            borderRadius: '999px',
            padding: '4px 10px',
            fontSize: '10px',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            color: '#ffffff',
            whiteSpace: 'nowrap',
          }}
        >
          {year}
        </span>
      )}

      {/* Hover tag pills */}
      <AnimatePresence>
        {hovered && tags.length > 0 && (
          <motion.div
            className="absolute flex flex-wrap gap-[5px] z-10"
            style={{ top: '10px', left: '10px' }}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="ref-glass-pill"
                style={{
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '10px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer: name + link icon */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-between z-10"
        style={{ padding: '10px 12px' }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            lineHeight: 1.3,
            whiteSpace: 'pre-line',
          }}
        >
          {title}
        </span>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '3px',
            border: '1px solid rgba(255,255,255,0.18)',
            background: 'rgba(0,0,0,0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background 0.2s ease',
          }}
        >
          <ExternalLink size={12} color="#ffffff" />
        </div>
      </div>
    </a>
  );
}
