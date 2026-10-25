import React, { useRef, ReactNode, useState, useEffect } from 'react';
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
 * On reduced motion or touch devices: passes children through untouched.
 */
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
}) => {
  const reduced = useReducedMotion();
  const [isTouch, setIsTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(hover: none)').matches ||
      navigator.maxTouchPoints > 0 ||
      'ontouchstart' in window
    );
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(hover: none)');
    const onChange = () => {
      setIsTouch(
        mq.matches ||
        navigator.maxTouchPoints > 0 ||
        'ontouchstart' in window
      );
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    } else if ((mq as any).addListener) {
      (mq as any).addListener(onChange);
      return () => (mq as any).removeListener(onChange);
    }
  }, []);

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

  // Shimmer background gradient — hook called unconditionally at top level
  const shimmerBackground = useTransform(
    [shimmerX, shimmerY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(0,229,255,0.08) 0%, transparent 60%)`
  );

  const isInteractive = !reduced && !isTouch;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    if (!isInteractive) return;
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={
        isInteractive
          ? {
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
              perspective: 800,
            }
          : undefined
      }
      onMouseMove={isInteractive ? onMouseMove : undefined}
      onMouseLeave={isInteractive ? onMouseLeave : undefined}
      whileHover={
        isInteractive
          ? {
              scale: 1.02,
              boxShadow: '0 16px 40px -8px rgba(0,229,255,0.2)',
              transition: { type: 'spring', stiffness: 300, damping: 22 },
            }
          : undefined
      }
    >
      {children}

      {/* Specular shimmer overlay — pointer-events none so it doesn't block clicks */}
      {isInteractive && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: shimmerBackground }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
};
