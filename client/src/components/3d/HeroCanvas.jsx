import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <mesh position={[-1.2, 0, 0]}>
        <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
        <meshStandardMaterial color="#7b3aff" metalness={0.75} roughness={0.2} />
      </mesh>
      <mesh position={[1.5, 0.2, 0]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#ffca3a" metalness={0.5} roughness={0.25} />
      </mesh>
      <Stars radius={50} depth={20} count={2000} factor={4} saturation={0} fade />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
    </>
  );
}

function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <HeroScene />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
