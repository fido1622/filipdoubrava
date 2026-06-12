'use client';

import { motion } from "motion/react";
import HeroPanel from "./hero-panel";
import RightPanel from "./right-panel";
import BottomLeftPanel from "./bottom-left-panel";
import BottomCenterPanel from "./bottom-center-panel";
import YellowCard from "./yellow-card";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 16, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.55, delay },
  };
}

export default function BentoGrid() {
  return (
    <>
      {/*
        Responsive grid layout:
        Mobile  → 2-col, rows auto-size to explicit heights on each item
        Desktop → 12-col × 2-row, aspect-ratio 16/9 controls overall height
      */}
      <style>{`
        .bento-wrap  { width: 100%; max-width: 1600px; margin: 0 auto; padding: 12px; }
        .bento-grid  { width: 100%; height: 100%; display: grid; gap: 10px;
                       grid-template-columns: repeat(2, 1fr); }
        .bento-hero  { grid-column: span 2; height: 260px; }
        .bento-right { grid-column: span 2; height: 160px; }
        .bento-bl    { grid-column: span 1; height: 160px; }
        .bento-bc    { grid-column: span 1; height: 160px; }
        .bento-yc    { grid-column: span 2; height: auto; }

        @media (min-width: 768px) {
          .bento-wrap  { padding: 16px; aspect-ratio: 16 / 9; }
          .bento-grid  { grid-template-columns: repeat(12, 1fr);
                         grid-template-rows: repeat(2, 1fr); }
          .bento-hero  { grid-column: span 7;  height: auto; }
          .bento-right { grid-column: span 5;  height: auto; }
          .bento-bl    { grid-column: span 2;  height: auto; }
          .bento-bc    { grid-column: span 4;  height: auto; }
          .bento-yc    { grid-column: span 6;  height: auto; }
        }
      `}</style>

      <div className="bento-wrap">
        <div className="bento-grid">

          <motion.div {...fadeUp(0)} className="bento-hero min-h-0">
            <HeroPanel />
          </motion.div>

          <motion.div {...fadeUp(0.07)} className="bento-right min-h-0">
            <RightPanel />
          </motion.div>

          <motion.div {...fadeUp(0.14)} className="bento-bl min-h-0">
            <BottomLeftPanel />
          </motion.div>

          <motion.div {...fadeUp(0.21)} className="bento-bc min-h-0">
            <BottomCenterPanel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="bento-yc min-h-0"
          >
            <YellowCard />
          </motion.div>

        </div>
      </div>
    </>
  );
}
