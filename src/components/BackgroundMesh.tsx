import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Single Fixed Full-Viewport Background System
 * Persistent across full-page scroll
 * - Blob 1: 600px circle (#4F46E5, 18s loop, top-left)
 * - Blob 2: 500px circle (#3B82F6, 22s loop, center-right)
 * - Blob 3: 550px circle (#4F46E5, 26s loop, bottom-left)
 * - Fine Noise Overlay: mix-blend-mode overlay (3% - 4% opacity)
 * - Reduced Motion: disables animations
 */
export const BackgroundMesh: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}
    >
      {/* Texture Layer: Fine SVG Noise Grain Overlay */}
      <div className="absolute inset-0 bg-grain-texture opacity-40 mix-blend-overlay z-10 pointer-events-none" />

      {/* Base Layer: 3 Blurred Radial Gradient Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Blob 1: Top-Left (600px, #4F46E5, 18s loop) */}
        <div
          className={`absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 pointer-events-none ${
            isReducedMotion ? '' : 'animate-blob-1'
          }`}
          style={{
            background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
          }}
        />

        {/* Blob 2: Center-Right (500px, #3B82F6, 22s loop) */}
        <div
          className={`absolute top-[38%] -right-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none ${
            isReducedMotion ? '' : 'animate-blob-2'
          }`}
          style={{
            background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          }}
        />

        {/* Blob 3: Bottom-Left (550px, #4F46E5, 26s loop) */}
        <div
          className={`absolute -bottom-24 -left-12 w-[550px] h-[550px] rounded-full blur-[120px] opacity-25 pointer-events-none ${
            isReducedMotion ? '' : 'animate-blob-3'
          }`}
          style={{
            background: 'radial-gradient(circle, #4F46E5 0%, transparent 70%)',
          }}
        />

      </div>
    </div>
  );
};
