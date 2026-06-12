'use client';

import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Project } from './projects-data';

export function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasLoadedRef = useRef(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video || !project.videoSrc) return;

    if (!hasLoadedRef.current) {
      video.src = project.videoSrc;
      hasLoadedRef.current = true;
    }

    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div className="project-card flex flex-col h-full">
      {/* Photo — fixed height */}
      <div
        className="group relative overflow-hidden"
        style={{ height: '340px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={project.imageSrc}
          alt={project.title}
          className={`bw-photo absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isVideoReady ? 'group-hover:opacity-0' : ''
          }`}
        />
        {project.videoSrc && (
          <video
            ref={videoRef}
            className={`bw-photo absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ${
              isVideoReady ? 'group-hover:opacity-100' : ''
            }`}
            style={project.videoObjectPosition ? { objectPosition: project.videoObjectPosition } : undefined}
            muted
            loop
            playsInline
            onCanPlay={() => setIsVideoReady(true)}
          />
        )}
        {/* Number badge — top left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="card-number-badge">{project.number}</span>
        </div>
        {/* Lime dot — top right */}
        <div className="absolute top-3.5 right-3.5 z-10 lime-dot" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pb-4">
        <h3 className="pt-3 font-bebas text-[36px] md:text-[clamp(24px,2.2vw,32px)] leading-[1.0] tracking-[0.01em] text-filip-lime uppercase">
          {project.title}
        </h3>
        <p className="mt-2 font-body text-[10px] font-normal uppercase leading-[1.35] tracking-[0.04em] text-white/60 flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex justify-end">
          <button className="card-arrow-btn" aria-label={`View ${project.title}`}>
            <ArrowRight size={14} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
