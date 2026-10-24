import React from 'react';
import { motion } from 'framer-motion';
import { lineReveal, VIEWPORT_ONCE } from '../lib/animation';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionHeadingProps {
  label: string;       // small monospace label above heading
  title: string;       // main heading text
  subtitle?: string;   // optional paragraph below
}

/**
 * Reusable animated section heading.
 * Mask-reveals the title line by line on scroll.
 * Falls back to instant opacity-0→1 on reduced motion.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
}) => {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={container}
    >
      {/* Section label */}
      <motion.span
        className="font-mono text-xs text-[#00E5FF] font-semibold uppercase tracking-wider block mb-1"
        variants={
          reduced
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : lineReveal(0)
        }
      >
        {label}
      </motion.span>

      {/* Masked heading — clipped container prevents "peek" below baseline */}
      <div className="overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          variants={
            reduced
              ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
              : lineReveal(0.06)
          }
        >
          {title}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          className="text-[rgba(255,255,255,0.55)] text-sm mt-2 max-w-2xl"
          variants={
            reduced
              ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
              : { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } } }
          }
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
