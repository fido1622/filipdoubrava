'use client';

import { useState } from 'react';
import PortfolioGrid from './portfolio-grid';

const FILTERS = ['Vše', 'Reklamy', 'Sport', 'Reality', 'Eventy', 'Průmysl', 'Videoklipy', 'Livestream'];

export default function ReferenceContent() {
  const [activeFilter, setActiveFilter] = useState('Vše');

  return (
    <>
      {/* Filter bar */}
      <div
        className="flex items-center justify-between px-8 md:px-12 pb-5 gap-4"
        style={{ flexWrap: 'wrap' }}
      >
        <div className="flex items-center gap-2" style={{ flexWrap: 'wrap' }}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? 'ref-filter-pill-active'
                  : 'ref-filter-pill'
              }
              style={{
                borderRadius: '999px',
                padding: '7px 16px',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* YouTube link */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.48)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'color 0.2s ease',
            flexShrink: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.48)')}
        >
          {/* YouTube icon */}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Otevřte se na YouTube
        </a>
      </div>

      {/* Portfolio grid */}
      <PortfolioGrid activeFilter={activeFilter} />
    </>
  );
}
