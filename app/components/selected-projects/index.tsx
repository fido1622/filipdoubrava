'use client';

import { motion } from 'motion/react';
import { projects } from './projects-data';
import { ProjectCard } from './project-card';
import { fadeUp } from '@/lib/motion';

export function SelectedProjectsSection() {
  return (
    <section style={{ background: '#0d0d0d' }} className="w-full">
      {/* Section header */}
      <div className="relative flex items-start justify-between gap-8 px-8 md:px-12 pt-16 md:pt-20 pb-10 md:pb-12">
        {/* Mega heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.25, 0, 0.35, 1] }}
          className="font-bebas text-[clamp(80px,11vw,160px)] leading-[0.88] tracking-[0.01em] text-filip-lime uppercase select-none"
        >
          CO
          <br />
          NATÁČÍM
        </motion.h2>

        {/* Description */}
        <motion.p
          {...fadeUp(0.1)}
          className="self-start mt-1 max-w-[260px] font-body text-[10px] font-normal uppercase leading-[1.5] tracking-[0.04em] text-white/45 hidden md:block"
        >
          Letecké záběry pro reklamy, sport, nemovitosti, eventy i průmysl.
          Každý projekt potřebuje jiný přístup, ale vždy stejnou jistotu v obraze i pilotáži.
        </motion.p>

        {/* Decorative target icon */}
        <motion.div
          {...fadeUp(0.1)}
          className="self-start mt-1 header-target-icon hidden md:grid"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-filip-lime" />
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="px-8 md:px-12 pb-16 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {projects.map((project, i) => (
            <motion.div key={project.id} {...fadeUp(i * 0.08)}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
