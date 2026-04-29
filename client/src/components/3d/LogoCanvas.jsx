import { Canvas } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';

function LogoMesh() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh>
        <boxGeometry args={[2.6, 2.6, 0.4]} />
        <meshStandardMaterial color="#7b3aff" emissive="#7b3aff" emissiveIntensity={0.35} metalness={0.7} roughness={0.15} />
        <Html center>
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/70 text-sm uppercase tracking-[0.3em] text-white">
            K
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function LogoCanvas() {
  return (
    <div className="h-[360px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <LogoMesh />
      </Canvas>
    </div>
  );
}

export default LogoCanvas;
