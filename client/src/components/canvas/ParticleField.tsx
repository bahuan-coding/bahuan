import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1200;
const SPREAD = 12;

function Particles() {
  const mesh = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * SPREAD;
      pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = 0;
    }
    return [pos, vel];
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) s[i] = Math.random() * 2 + 0.5;
    return s;
  }, []);

  const handlePointerMove = useCallback(
    (e: { clientX: number; clientY: number }) => {
      mouse.current.x = ((e.clientX / window.innerWidth) * 2 - 1) * (viewport.width / 2);
      mouse.current.y = (-(e.clientY / window.innerHeight) * 2 + 1) * (viewport.height / 2);
    },
    [viewport]
  );

  useFrame(() => {
    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      arr[ix] += velocities[ix];
      arr[ix + 1] += velocities[ix + 1];

      // Mouse attraction
      const dx = mouse.current.x - arr[ix];
      const dy = mouse.current.y - arr[ix + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 3) {
        arr[ix] += dx * 0.002;
        arr[ix + 1] += dy * 0.002;
      }

      // Wrap around edges
      if (arr[ix] > SPREAD / 2) arr[ix] = -SPREAD / 2;
      if (arr[ix] < -SPREAD / 2) arr[ix] = SPREAD / 2;
      if (arr[ix + 1] > SPREAD / 2) arr[ix + 1] = -SPREAD / 2;
      if (arr[ix + 1] < -SPREAD / 2) arr[ix + 1] = SPREAD / 2;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group onPointerMove={handlePointerMove as any}>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        </bufferGeometry>
        <pointsMaterial
          size={1.5}
          color="#00E676"
          transparent
          opacity={0.35}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
