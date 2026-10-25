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

    // Slow, purposeful auto-rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12;
      meshRef.current.rotation.y = t * 0.18;
    }
    if (wireRef.current && meshRef.current) {
      wireRef.current.rotation.x = meshRef.current.rotation.x;
      wireRef.current.rotation.y = meshRef.current.rotation.y;
    }

    // Gentle vertical float & mouse parallax (capped within ±0.25 range)
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.14;
      groupRef.current.rotation.y +=
        (mouse.x * 0.35 - groupRef.current.rotation.y) * 0.04;
      groupRef.current.rotation.x +=
        (-mouse.y * 0.25 - groupRef.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Royal amethyst core with subtle emissive depth */}
      <Icosahedron ref={meshRef} args={[1, 0]}>
        <meshStandardMaterial
          color={PURPLE}
          emissive="#1F043A"
          emissiveIntensity={0.3}
          roughness={0.25}
          metalness={0.45}
          transparent
          opacity={0.82}
        />
      </Icosahedron>

      {/* Thin electric cyan wireframe overlay */}
      <Icosahedron ref={wireRef} args={[1.025, 0]}>
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.65}
        />
      </Icosahedron>
    </group>
  );
};

// ─── Scene setup ─────────────────────────────────────────────
const Scene: React.FC = () => {
  const { size } = useThree();

  const isDesktop = size.width >= 1024;
  const isTablet = size.width >= 640 && size.width < 1024;

  // Scale and position: on desktop, gracefully float in the right-column ambient space
  const scale = isDesktop ? 1.05 : isTablet ? 0.8 : Math.min(0.65, size.width / 520);
  const position: [number, number, number] = isDesktop
    ? [1.35, 0.05, -0.4]
    : [0, -0.2, -0.5];

  return (
    <>
      {/* Ambient amethyst light + electric cyan key point light */}
      <ambientLight intensity={0.45} color={PURPLE} />
      <pointLight position={[3.5, 3, 2.5]} intensity={1.3} color={CYAN} />
      <pointLight position={[-3, -2, -1.5]} intensity={0.6} color={PURPLE} />

      {/* Particle field — Drei Sparkles, minimal footprint */}
      <DreiSparkles
        count={48}
        scale={[9, 9, 7]}
        size={0.65}
        speed={0.2}
        opacity={0.5}
        color={CYAN}
      />

      {/* Main icosahedron */}
      <group position={position} scale={scale}>
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
  const [isVisible, setIsVisible] = React.useState(true);

  // Pause rendering when outside viewport to preserve CPU/GPU
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
        // Pause render loop when offscreen
        frameloop={isVisible ? 'always' : 'never'}
        onCreated={({ gl }) => {
          const canvas = gl.domElement;
          canvas.addEventListener(
            'webglcontextlost',
            (event: Event) => {
              event.preventDefault();
              if (import.meta.env.DEV) {
                console.warn('[HeroSceneCanvas] WebGL context lost.');
              }
            },
            false
          );
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroSceneCanvas;
