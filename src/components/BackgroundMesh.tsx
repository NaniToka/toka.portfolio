import React from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

/**
 * Site-Wide Layered Background System
 * 1. Base Layer: Animated gradient mesh with slow breathing drift (20-26s loops)
 * 2. Color Palette: Accent indigo (#4F46E5) + deep blue/violet cool tones
 * 3. Texture Layer: Fine SVG noise grain overlay
 * 4. Accessibility: Static ambient mesh for users with prefers-reduced-motion
 */
export const BackgroundMesh: React.FC = () => {
  const isReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Texture Layer: Fine Grain SVG Noise Overlay */}
      <div className="absolute inset-0 bg-grain-texture opacity-60 z-10" />

      {/* Base Layer: Soft Drifting Gradient Mesh Blobs */}
      <div className="absolute inset-0 z-0">
        
        {/* Blob 1: Hero Area — Indigo (#4F46E5) */}
        <div
          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/12 rounded-full blur-[140px] ${
            isReducedMotion ? '' : 'animate-mesh-1'
          }`}
        />

        {/* Blob 2: About & Experience Timeline — Deep Violet (#4338CA) */}
        <div
          className={`absolute top-[26%] -right-20 w-[600px] h-[600px] bg-indigo-800/10 rounded-full blur-[150px] ${
            isReducedMotion ? '' : 'animate-mesh-2'
          }`}
        />

        {/* Blob 3: Featured Projects Stack — Cool Blue (#3B82F6) */}
        <div
          className={`absolute top-[52%] -left-20 w-[650px] h-[650px] bg-blue-600/08 rounded-full blur-[150px] ${
            isReducedMotion ? '' : 'animate-mesh-3'
          }`}
        />

        {/* Blob 4: Skills & Certifications — Deep Indigo (#4F46E5) */}
        <div
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] ${
            isReducedMotion ? '' : 'animate-mesh-1'
          }`}
        />

      </div>

    </div>
  );
};
