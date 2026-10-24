/**
 * Shared animation configuration.
 * Single source of truth for all durations, easings, and spring presets.
 * Import from here — never define timings inline.
 */

// ─── Easings ────────────────────────────────────────────────
/** Physical ease-out: fast start, natural deceleration */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Standard Material You ease */
export const EASE_STANDARD = [0.2, 0, 0, 1] as const;

// ─── Spring presets (Framer Motion) ─────────────────────────
/** Snappy UI response — buttons, icons */
export const SPRING_SNAPPY = { type: 'spring', stiffness: 400, damping: 30 } as const;

/** Gentle card lift */
export const SPRING_GENTLE = { type: 'spring', stiffness: 200, damping: 24 } as const;

/** Slow, purposeful reveal — hero, headings */
export const SPRING_SLOW = { type: 'spring', stiffness: 80, damping: 20 } as const;

// ─── Durations ───────────────────────────────────────────────
export const DUR_FAST   = 0.18;   // icon swap, color change
export const DUR_STD    = 0.35;   // card hover, focus ring
export const DUR_REVEAL = 0.6;    // section heading reveal
export const DUR_PAGE   = 0.9;    // page intro

// ─── Stagger helpers ─────────────────────────────────────────
/** Staggered container for lists/grids */
export const staggerContainer = (stagger = 0.05, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Fade-up child */
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DUR_REVEAL, ease: EASE_OUT, delay },
  },
});

/** Masked text line slide-up */
export const lineReveal = (delay = 0) => ({
  hidden: { y: '105%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: DUR_REVEAL, ease: EASE_OUT, delay },
  },
});

// ─── Viewport defaults ───────────────────────────────────────
export const VIEWPORT_ONCE = { once: true, margin: '-60px' };
