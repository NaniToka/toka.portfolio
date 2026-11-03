import React from 'react';
import { motion } from 'framer-motion';
import { VIEWPORT_ONCE } from '../lib/animation';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ label, title, subtitle }) => {
  const reduced = useReducedMotion();
  const initial = reduced ? { opacity: 0 } : { opacity: 0, y: 24 };

  return (
    <motion.div
      className="section-heading"
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-heading__label section-label">{label}</span>
      <div className="section-heading__content">
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </motion.div>
  );
};
