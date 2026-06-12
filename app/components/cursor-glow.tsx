"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_SIZE = 3000;
const HOVER_SIZE = 3400;
const DEFAULT_OPACITY = 0.22;
const HOVER_OPACITY = 0.32;
const SPRING_STIFFNESS = 0.0075;
const SPRING_DAMPING = 0.85;

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea';

const DEFAULT_BACKGROUND =
  "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 35%, rgba(255,255,255,0) 70%)";
const HOVER_BACKGROUND =
  "radial-gradient(circle, rgba(203,255,0,0.5) 0%, rgba(203,255,0,0.15) 35%, rgba(203,255,0,0) 70%)";

export default function CursorGlow() {
  const pathname = usePathname();
  const isDisabled = pathname?.startsWith("/reference") ?? false;

  const glowRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDisabled) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    mouse.current.x = window.innerWidth / 2;
    mouse.current.y = window.innerHeight / 2;
    pos.current.x = mouse.current.x;
    pos.current.y = mouse.current.y;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const target = e.target as Element | null;
      const isInteractive = !!target?.closest(INTERACTIVE_SELECTOR);

      glow.style.width = `${isInteractive ? HOVER_SIZE : DEFAULT_SIZE}px`;
      glow.style.height = `${isInteractive ? HOVER_SIZE : DEFAULT_SIZE}px`;
      glow.style.opacity = `${isInteractive ? HOVER_OPACITY : DEFAULT_OPACITY}`;
      glow.style.background = isInteractive ? HOVER_BACKGROUND : DEFAULT_BACKGROUND;
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      glow.style.opacity = `${DEFAULT_OPACITY}`;
    };

    const animate = () => {
      const ax = (mouse.current.x - pos.current.x) * SPRING_STIFFNESS;
      const ay = (mouse.current.y - pos.current.y) * SPRING_STIFFNESS;

      velocity.current.x = (velocity.current.x + ax) * SPRING_DAMPING;
      velocity.current.y = (velocity.current.y + ay) * SPRING_DAMPING;

      pos.current.x += velocity.current.x;
      pos.current.y += velocity.current.y;

      glow.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [isDisabled]);

  if (isDisabled) return null;

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${DEFAULT_SIZE}px`,
        height: `${DEFAULT_SIZE}px`,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: DEFAULT_OPACITY,
        background: DEFAULT_BACKGROUND,
        transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
