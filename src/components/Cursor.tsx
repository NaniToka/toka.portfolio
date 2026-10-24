import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Custom cursor — desktop only, hidden on touch devices.
 * - Small cyan dot that follows the pointer precisely.
 * - Trailing ring that spring-follows the dot (lag = physicality).
 * - Ring expands on interactive elements (a, button, [role=button], select, textarea, input).
 * Respects prefers-reduced-motion: renders nothing when reduced motion.
 */
export const Cursor: React.FC = () => {
  const reduced = useReducedMotion();
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Ring lags behind with spring physics for a physical feel
  const ringX = useSpring(rawX, { stiffness: 150, damping: 18, mass: 0.5 });
  const ringY = useSpring(rawY, { stiffness: 150, damping: 18, mass: 0.5 });

  useEffect(() => {
    // Detect touch — hide on touch devices
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    };
    checkTouch();

    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = () => setIsVisible(true);
    const onLeave = () => setIsVisible(false);

    // Interactive element detection
    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      if (['a', 'button', 'input', 'select', 'textarea'].includes(tag)) return true;
      if (el.getAttribute('role') === 'button' || el.getAttribute('role') === 'tab') return true;
      if ((el as HTMLElement).style?.cursor === 'pointer') return true;
      return false;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setIsHoveringInteractive(
        isInteractive(target) || !!target.closest('a, button, [role=button], [role=tab], input, select, textarea')
      );
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOver);
    };
  }, [rawX, rawY, isVisible]);

  if (reduced || isTouchDevice) return null;

  return (
    <>
      {/* Dot — tight follow, no lag */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          x: rawX,
          y: rawY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          background: '#00E5FF',
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 6px rgba(0,229,255,0.9)',
          transition: 'opacity 0.2s',
        }}
        aria-hidden="true"
      />

      {/* Ring — spring lag, expands on interactive */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'rgba(0,229,255,0.6)',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHoveringInteractive ? 40 : 24,
          height: isHoveringInteractive ? 40 : 24,
          borderWidth: isHoveringInteractive ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        aria-hidden="true"
      />
    </>
  );
};
