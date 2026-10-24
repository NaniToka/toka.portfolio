import React, { useRef, ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;   // degrees, default 6
}

/**
 * 3D tilt card.
 * On hover: tilts up to `maxTilt` degrees toward the cursor,
 * adds a subtle specular highlight that follows the cursor, and lifts with a glow.
 * On reduced motion: passes children through untouched — no tilt, no glow.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
}) => {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Raw motion values for cursor position inside card (-0.5 to +0.5)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-smooth the tilt so it feels physical
  const springX = useSpring(rawX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 200, damping: 20 });

  // Map cursor offset to rotation degrees
  const rotateY = useTransform(springX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [maxTilt, -maxTilt]);

  // Specular highlight: a radial gradient that follows the cursor
  const shimmerX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const shimmerY = useTransform(springY, [-0.5, 0.5], [0, 100]);

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 16px 40px -8px rgba(0,229,255,0.2)',
        transition: { type: 'spring', stiffness: 300, damping: 22 },
      }}
    >
      {children}

      {/* Specular shimmer overlay — pointer-events none so it doesn't block clicks */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{
          background: useTransform(
            [shimmerX, shimmerY],
            ([x, y]) =>
              `radial-gradient(circle at ${x}% ${y}%, rgba(0,229,255,0.08) 0%, transparent 60%)`
          ),
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
};
