'use client';

import { motion, type Variants } from "motion/react";

const wordVariants: Variants = {
  hidden: { filter: "blur(12px)", opacity: 0, y: 24 },
  visible: (delay: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay },
  }),
};

export default function HeroPanel() {
  return (
    <div className="panel-dark rounded-[18px] relative overflow-hidden w-full h-full">
      {/* Base panel layer */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Hero video — right-aligned */}
      <video
        src="/images/dustydays_hero1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute right-0 top-0 h-full w-[62%] object-cover object-[center_15%]"
      />

      {/* Left-to-right dark gradient for headline legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />

      {/* Bottom dark fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />

      {/* Text column: body copy stacked above headline */}
      <div className="absolute left-6 bottom-8 z-10 md:left-8 md:bottom-10 flex flex-col gap-3">
        <motion.p
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          className="max-w-[260px] font-normal uppercase leading-[1.4] tracking-[0.01em]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
        >
          Profesionální pilot dronů pro filmové a reklamní produkce.
        </motion.p>

        <h1
          className="leading-[0.82] tracking-[-0.015em]"
          style={{ fontFamily: "'Barlow Condensed', 'Bebas Neue', Impact, sans-serif", fontWeight: 900, fontSize: "clamp(60px, 7.5vw, 104px)", color: "#CBFF00", textTransform: "uppercase" }}
        >
          <motion.span custom={0.05} initial="hidden" animate="visible" variants={wordVariants} className="block">
            FILIP
          </motion.span>
          <motion.span custom={0.17} initial="hidden" animate="visible" variants={wordVariants} className="block">
            DOUBRAVA
          </motion.span>
        </h1>
      </div>

      {/* Copyright mark */}
      <div className="absolute bottom-10 right-6 z-10 w-[26px] h-[26px] rounded-full border-[1.5px] border-[#CBFF00] flex items-center justify-center md:right-8">
        <span className="leading-none select-none" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", color: "#CBFF00" }}>
          ©
        </span>
      </div>
    </div>
  );
}
