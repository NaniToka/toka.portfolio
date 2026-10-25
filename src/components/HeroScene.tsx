import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

import { ErrorBoundary } from './ErrorBoundary';

// Lazily import the actual 3D scene so Three.js is never in the critical bundle
const HeroSceneCanvas = lazy(() => import('./HeroSceneCanvas'));

/**
 * Shell that decides whether to render the 3D scene.
 * Falls back to a static gradient if:
 *   1. WebGL is unavailable or context fails
 *   2. prefers-reduced-motion is set
 *   3. The canvas or chunk throws during load/render
 */
export const HeroScene: React.FC = () => {
  const reduced = useReducedMotion();
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect WebGL support safely
    try {
      const canvas = document.createElement('canvas');
      const ctx =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      setWebglOk(!!ctx);
    } catch {
      setWebglOk(false);
    }
  }, []);

  // If user prefers reduced motion or WebGL is unsupported, render static fallback
  if (reduced || webglOk === false) {
    return <StaticGradientFallback />;
  }

  // While detecting (first render tick), render static gradient to prevent flash
  if (webglOk === null) {
    return <StaticGradientFallback />;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <ErrorBoundary name="HeroScene" fallback={<StaticGradientFallback />}>
        <Suspense fallback={<StaticGradientFallback />}>
          <HeroSceneCanvas />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

/** Static gradient fallback — always renders cleanly with zero JS overhead */
const StaticGradientFallback: React.FC = () => (
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.12) 0%, rgba(59,10,107,0.15) 40%, transparent 70%)',
    }}
    aria-hidden="true"
  />
);
