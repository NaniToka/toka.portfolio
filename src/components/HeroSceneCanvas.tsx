import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, Octahedron, Torus, Sparkles as DreiSparkles } from '@react-three/drei';
import * as THREE from 'three';

// ─── Brand Palette ───────────────────────────────────────────
const CYAN     = '#00E5FF';
const PURPLE   = '#3B0A6B';
const AMETHYST = '#8B5CF6';

// ─── Shared mouse state (updated outside React render loop) ──
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

/**
 * Checks whether the host device has constrained resources (CPU, GPU, memory).
 * Avoids relying purely on screen width.
 */
const checkIsConstrained = (): boolean => {
  if (typeof window === 'undefined') return false;
  const isNarrow = window.innerWidth < 640;
  const isTouch =
    window.matchMedia('(hover: none)').matches ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0);
  const isLowCores =
    typeof navigator !== 'undefined' &&
    !!navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 4;
  const isLowMem =
    typeof navigator !== 'undefined' &&
    !!(navigator as any).deviceMemory &&
    (navigator as any).deviceMemory <= 4;

  return isNarrow || (isTouch && window.innerWidth < 1024) || Boolean(isLowCores && isLowMem);
};

// ─── Central Flagship 3D Core: Crystalline Gem + Cybernetic Cage + Orbiting Astrolabe ─
interface CoreCompositionProps {
  isConstrained: boolean;
}

const CoreComposition: React.FC<CoreCompositionProps> = ({ isConstrained }) => {
  const groupRef     = useRef<THREE.Group>(null!);
  const innerGemRef  = useRef<THREE.Mesh>(null!);
  const outerWireRef = useRef<THREE.Mesh>(null!);
  const coreSeedRef  = useRef<THREE.Mesh>(null!);
  const ring1Ref     = useRef<THREE.Group>(null!);
  const ring2Ref     = useRef<THREE.Group>(null!);
  const ring3Ref     = useRef<THREE.Group>(null!);
  const sat1Ref      = useRef<THREE.Mesh>(null!);
  const sat2Ref      = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // 1. Inner faceted gem auto-rotation
    if (innerGemRef.current) {
      innerGemRef.current.rotation.x = t * 0.14;
      innerGemRef.current.rotation.y = t * 0.22;
    }

    // 2. Outer cybernetic wireframe counter-rotates for optical moiré depth
    if (outerWireRef.current) {
      outerWireRef.current.rotation.x = -t * 0.16;
      outerWireRef.current.rotation.z = t * 0.20;
    }

    // 3. Central glowing data seed pulses and spins
    if (coreSeedRef.current) {
      coreSeedRef.current.rotation.y = -t * 0.45;
      coreSeedRef.current.rotation.z = t * 0.35;
      const pulse = 1 + Math.sin(t * 2.5) * 0.08;
      coreSeedRef.current.scale.set(pulse, pulse, pulse);
    }

    // 4. Astrolabe Gyroscopic Rings decoupled multi-axis precession
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.25;
      ring1Ref.current.rotation.x = Math.PI / 4 + Math.sin(t * 0.2) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.22;
      ring2Ref.current.rotation.y = Math.PI / 3 + Math.cos(t * 0.18) * 0.12;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.12;
    }

    // 5. Orbiting satellite nodes (data tokens)
    if (sat1Ref.current) {
      const angle1 = t * 0.9;
      sat1Ref.current.position.set(
        Math.cos(angle1) * 1.44,
        Math.sin(angle1) * 1.44,
        0
      );
    }
    if (sat2Ref.current) {
      const angle2 = -t * 0.75 + 1.2;
      sat2Ref.current.position.set(
        0,
        Math.cos(angle2) * 1.82,
        Math.sin(angle2) * 1.82
      );
    }

    // 6. Smooth pointer-responsive parallax with physical damping (desktop only)
    if (groupRef.current) {
      // Gentle harmonic levitation (sin/cos breathing)
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.12 + Math.cos(t * 0.3) * 0.03;
      groupRef.current.rotation.z = Math.sin(t * 0.4) * 0.03;

      if (!isConstrained) {
        // Smooth lerp toward mouse target
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        groupRef.current.rotation.y +=
          (mouse.x * 0.42 - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x +=
          (-mouse.y * 0.32 - groupRef.current.rotation.x) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* ── Inner Core Crystalline Polyhedron ── */}
      <Icosahedron ref={innerGemRef} args={[1, isConstrained ? 0 : 1]}>
        <meshStandardMaterial
          color={PURPLE}
          emissive="#1F043A"
          emissiveIntensity={0.5}
          roughness={0.22}
          metalness={0.65}
          transparent
          opacity={0.88}
        />
      </Icosahedron>

      {/* ── Outer Electric Cyan Geodesic Wireframe ── */}
      <Icosahedron ref={outerWireRef} args={[1.05, 0]}>
        <meshBasicMaterial
          color={CYAN}
          wireframe
          transparent
          opacity={0.72}
        />
      </Icosahedron>

      {/* ── Core Glowing Data Seed (Octahedron) ── */}
      <Octahedron ref={coreSeedRef} args={[0.38, 0]}>
        <meshStandardMaterial
          color={CYAN}
          emissive={CYAN}
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </Octahedron>

      {/* ── Gyroscope Ring 1: Inner Cyan Torus + Satellite Node ── */}
      <group ref={ring1Ref}>
        <Torus args={[1.44, 0.016, 12, isConstrained ? 32 : 64]}>
          <meshStandardMaterial
            color={CYAN}
            emissive={CYAN}
            emissiveIntensity={0.35}
            roughness={0.3}
            metalness={0.8}
            transparent
            opacity={0.75}
          />
        </Torus>
        <mesh ref={sat1Ref}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={CYAN} />
        </mesh>
      </group>

      {/* ── Gyroscope Ring 2: Amethyst/Violet Torus + Satellite Node ── */}
      <group ref={ring2Ref}>
        <Torus args={[1.82, 0.018, 12, isConstrained ? 32 : 64]}>
          <meshStandardMaterial
            color={AMETHYST}
            emissive={PURPLE}
            emissiveIntensity={0.4}
            roughness={0.35}
            metalness={0.7}
            transparent
            opacity={0.65}
          />
        </Torus>
        <mesh ref={sat2Ref}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshBasicMaterial color="#E0AAFF" />
        </mesh>
      </group>

      {/* ── Gyroscope Ring 3: Outer Horizon Cyan Ring ── */}
      <group ref={ring3Ref} rotation={[Math.PI / 2.2, 0, 0]}>
        <Torus args={[2.2, 0.012, 8, isConstrained ? 28 : 56]}>
          <meshBasicMaterial
            color={CYAN}
            transparent
            opacity={0.35}
            wireframe
          />
        </Torus>
      </group>
    </group>
  );
};

// ─── Scene Lighting & Particle Setup ─────────────────────────
interface SceneProps {
  isConstrained: boolean;
}

const Scene: React.FC<SceneProps> = ({ isConstrained }) => {
  const { size } = useThree();
  const keyLightRef = useRef<THREE.PointLight>(null!);

  const isDesktop = size.width >= 1024;
  const isTablet  = size.width >= 640 && size.width < 1024;

  // Dynamically position the key light to track mouse movement for living highlights
  useFrame(() => {
    if (keyLightRef.current && !isConstrained) {
      keyLightRef.current.position.x = mouse.x * 3.5 + 2.8;
      keyLightRef.current.position.y = mouse.y * 2.5 + 2.2;
    }
  });

  // Scale and position: on desktop, comfortably frame the right-column space
  // On tablet & mobile, center gracefully with adjusted scale
  const scale = isDesktop ? 1.18 : isTablet ? 0.88 : Math.min(0.72, size.width / 480);
  const position: [number, number, number] = isDesktop
    ? [1.25, 0.0, -0.25]
    : [0, -0.12, -0.45];

  return (
    <>
      {/* Ambient amethyst base light */}
      <ambientLight intensity={0.55} color={PURPLE} />

      {/* Interactive Electric Cyan Key Light */}
      <pointLight
        ref={keyLightRef}
        position={[3.5, 3, 2.5]}
        intensity={2.0}
        color={CYAN}
        distance={14}
      />

      {/* Royal Amethyst Rim / Back Light for edge definition */}
      <pointLight
        position={[-3.5, -2.5, -2]}
        intensity={1.2}
        color={AMETHYST}
        distance={12}
      />

      {/* Subtle bottom-fill cyan glow */}
      <pointLight
        position={[0, -3.5, 1.5]}
        intensity={0.4}
        color={CYAN}
        distance={10}
      />

      {/* Layer 1: Electric Cyan floating particle field */}
      <DreiSparkles
        count={isConstrained ? 20 : 54}
        scale={[10, 8, 8]}
        size={0.7}
        speed={0.22}
        opacity={0.55}
        color={CYAN}
      />

      {/* Layer 2: Subtle Amethyst/Violet deep particle field */}
      <DreiSparkles
        count={isConstrained ? 10 : 26}
        scale={[12, 10, 10]}
        size={0.9}
        speed={0.14}
        opacity={0.35}
        color={AMETHYST}
      />

      {/* Central 3D composition */}
      <group position={position} scale={scale}>
        <CoreComposition isConstrained={isConstrained} />
      </group>
    </>
  );
};

// ─── Exported Canvas Component ───────────────────────────────
/**
 * Three.js Canvas container.
 * - Lazy-imported by HeroScene to keep Three.js out of the critical bundle.
 * - IntersectionObserver pauses R3F rendering when offscreen (frameloop="never").
 * - Mouse coordinates normalized to [-1, 1].
 * - Handles WebGL context loss gracefully.
 */
const HeroSceneCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null!);
  const [isVisible, setIsVisible] = useState(true);
  const [isConstrained, setIsConstrained] = useState(false);

  // Check hardware constraints on mount
  useEffect(() => {
    setIsConstrained(checkIsConstrained());
  }, []);

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

  // Track mouse coordinates normalized to [-1, 1]
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 48 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        // Limit DPR to 1-1.5 on constrained devices, 1-2 on high-end desktop
        dpr={isConstrained ? [1, 1.5] : [1, 2]}
        style={{ background: 'transparent' }}
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
        <Scene isConstrained={isConstrained} />
      </Canvas>
    </div>
  );
};

export default HeroSceneCanvas;
