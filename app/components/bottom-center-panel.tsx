'use client';

import { useState, useEffect } from "react";

// ─── Add your photos to /public/images/bottom-slides/ ─────────────────────
// Then list the filenames here:
const SLIDES = [
  "/images/bottom-slides/01.jpg",
  "/images/bottom-slides/02.jpg",
  "/images/bottom-slides/04.jpg",
  "/images/bottom-slides/05.jpg",
];
// ──────────────────────────────────────────────────────────────────────────

export default function BottomCenterPanel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="panel-dark rounded-[18px] relative overflow-hidden w-full h-full">
      {SLIDES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="photo-bw absolute inset-0 w-full h-full object-cover object-center"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}
    </div>
  );
}
