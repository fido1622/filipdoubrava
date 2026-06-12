'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const ASSETS = {
  videos: ['/images/dustydays_hero1.mp4'],
  images: [
    '/images/panel-two-people.jpg',
    '/images/panel-woman-closeup.jpg',
    '/images/bottom-slides/01.jpg',
    '/images/bottom-slides/02.jpg',
    '/images/bottom-slides/04.jpg',
    '/images/bottom-slides/05.jpg',
  ],
};

const TOTAL_ASSETS = ASSETS.videos.length + ASSETS.images.length;
const MAX_WAIT_MS = 6000;

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let loaded = 0;
    let cancelled = false;

    const tick = () => {
      loaded += 1;
      if (!cancelled) {
        setProgress(Math.min(100, Math.round((loaded / TOTAL_ASSETS) * 100)));
      }
    };

    ASSETS.images.forEach(src => {
      const img = new Image();
      img.onload = tick;
      img.onerror = tick;
      img.src = src;
    });

    ASSETS.videos.forEach(src => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.muted = true;
      video.oncanplaythrough = tick;
      video.onloadeddata = tick;
      video.onerror = tick;
      video.src = src;
    });

    const finish = setTimeout(() => {
      if (!cancelled) {
        setProgress(100);
        setDone(true);
      }
    }, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      clearTimeout(finish);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => setDone(true), 300);
      return () => clearTimeout(t);
    }
  }, [progress]);

  useEffect(() => {
    document.body.style.overflow = done ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: '#000000' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col items-center gap-6"
          >
            {/* Pulsing logo mark */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-full flex items-center justify-center"
              style={{
                width: '64px',
                height: '64px',
                border: '1.5px solid #CBFF00',
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif",
                  fontWeight: 900,
                  fontSize: '22px',
                  color: '#CBFF00',
                  letterSpacing: '-0.01em',
                }}
              >
                FD
              </span>
            </motion.div>

            {/* Progress bar */}
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: '160px',
                height: '2px',
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: '#CBFF00' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>

            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              Načítání
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
