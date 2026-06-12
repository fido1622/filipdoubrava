'use client';

// cubic-bezier equivalent of easeOut
const easeOut = [0.25, 0, 0.35, 1] as const;

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay, ease: easeOut },
});
