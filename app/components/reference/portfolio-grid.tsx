'use client';

import { motion } from 'motion/react';
import PortfolioCard from './portfolio-card';
import { referenceProjects } from '@/lib/reference-projects';

interface PortfolioGridProps {
  activeFilter: string;
}

export default function PortfolioGrid({ activeFilter }: PortfolioGridProps) {
  return (
    <div className="px-8 md:px-12 pb-16">
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ gap: '6px' }}
      >
        {referenceProjects.map((project) => {
          const visible =
            activeFilter === 'Vše' || project.tags.includes(activeFilter);
          return (
            <motion.div
              key={project.id}
              className="ref-grid-cell"
              style={{ willChange: 'opacity, transform' }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{
                opacity: visible ? 1 : 0.12,
                scale: visible ? 1 : 0.99,
              }}
              transition={{
                opacity: { duration: 0.3, ease: 'easeOut' },
                scale: { duration: 0.3, ease: 'easeOut' },
              }}
              viewport={{ once: true }}
            >
              <PortfolioCard
                title={project.title}
                imageSrc={project.imageSrc}
                href={project.href}
                tags={project.tags}
                year={project.year}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
