'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'ÚVOD', href: '/' },
  { label: 'REFERENCE', href: '/reference' },
  { label: 'KONTAKT', href: '/#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'transparent',
        }}
      >
        <div
          className="max-w-[1600px] mx-auto flex items-center justify-between px-8 md:px-12"
          style={{ height: '64px' }}
        >
          {/* Wordmark */}
          <a
            href="/"
            className="text-[12px] md:text-[14px]"
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontWeight: 900,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            FILIP DOUBRAVA
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);

              return (
                <a
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: active ? '#ffffff' : 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = active ? '#fff' : 'rgba(255,255,255,0.55)')}
                >
                  {label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        background: '#ffffff',
                        borderRadius: '999px',
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Hamburger circle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              cursor: 'pointer',
              color: '#fff',
              flexShrink: 0,
            }}
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col pt-16"
        style={{
          background: 'rgba(0,0,0,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'none' : 'translateY(-8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <div className="flex flex-col px-8 py-8 gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontWeight: 900,
                fontSize: '40px',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
