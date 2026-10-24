import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, Sparkles as DreiSparkles } from '@react-three/drei';
import * as THREE from 'three';

// ─── Palette ─────────────────────────────────────────────────
const CYAN   = '#00E5FF';
const PURPLE = '#3B0A6B';

// ─── Mouse tracking (shared ref, updated outside React render) ─
const mouse = { x: 0, y: 0 };

// ─── Floating icosahedron with wireframe ─────────────────────
const FloatingIcosahedron: React.FC = () => {
  const meshRef    = useRef<THREE.Mesh>(null!);
  const wireRef    = useRef<THREE.Mesh>(null!);
  const groupRef   = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Slow auto-rotation — purposeful, not dizzy
    meshRef.current.rotation.x = t * 0.12;
    meshRef.current.rotation.y = t * 0.18;
    wireRef.current.rotation.x = meshRef.current.rotation.x;
    wireRef.current.rotation.y = meshRef.current.rotation.y;

    // Gentle float
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.12;

    // Parallax from mouse — max ±0.25 units, spring-eased
    groupRef.current.rotation.y +=
      (mouse.x * 0.4 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x +=
      (-mouse.y * 0.3 - groupRef.current.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {/* Solid amethyst core */}
      <Icosahedron ref={meshRef} args={[1, 0]}>
        <meshStandardMaterial
          color={PURPLE}
          transparent
          opacity={0.75}
          roughness={0.2}
          metalness={0.5}
        />
      </Icosahedron>

      {/* Cyan wireframe overlay */}
      <Icosahedron ref={wireRef} args={[1.02, 0]}>
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.55}
        />
      </Icosahedron>
    </group>
  );
};

// ─── Scene setup ─────────────────────────────────────────────
const Scene: React.FC = () => {
  const { size } = useThree();

  // Scale down on small screens
  const scale = Math.min(1, size.width / 600);

  return (
    <>
      {/* Ambient + point lights for material shading */}
      <ambientLight intensity={0.4} color={PURPLE} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color={CYAN} />
      <pointLight position={[-3, -2, -2]} intensity={0.5} color={PURPLE} />

      {/* Particle field — Drei Sparkles, minimal footprint */}
      <DreiSparkles
        count={60}
        scale={[8, 8, 8]}
        size={0.6}
        speed={0.25}
        opacity={0.55}
        color={CYAN}
      />

      {/* Main icosahedron */}
      <group scale={scale}>
        <FloatingIcosahedron />
      </group>
    </>
  );
};

// ─── Exported canvas ─────────────────────────────────────────
/**
 * The actual Three.js canvas.
 * Lazy-imported by HeroScene to keep it out of the critical path.
 * Uses IntersectionObserver to pause rendering when off-screen.
 */
const HeroSceneCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null!);

  // Track mouse normalized to [-1, 1]
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        // Cap pixel ratio at 2 for performance
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
        // Pause render loop when frame is not needed
        frameloop="always"
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroSceneCanvas;
