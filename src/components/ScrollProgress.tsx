import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const ScrollProgress: React.FC = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, restDelta: 0.001 });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[2px] origin-left bg-[#b07b52]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};
