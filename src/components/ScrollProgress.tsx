import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * A 2px cyan progress bar fixed at the very top of the viewport.
 * Reflects scroll position of the page.
 * Respects prefers-reduced-motion (renders nothing when reduced motion).
 */
export const ScrollProgress: React.FC = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Spring-smooth the raw scroll value so the bar feels physical, not janky
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(to right, #3B0A6B, #00E5FF)',
        boxShadow: '0 0 8px rgba(0,229,255,0.6)',
      }}
      aria-hidden="true"
    />
  );
};
