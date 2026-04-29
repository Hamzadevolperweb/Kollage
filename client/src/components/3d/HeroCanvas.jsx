import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function SimpleCube() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#7b3aff" 
        metalness={0.3} 
        roughness={0.4} 
      />
    </mesh>
  );
}

function SimpleLighting() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ffca3a" />
    </>
  );
}

function HeroScene() {
  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <SimpleLighting />
      <SimpleCube />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#0a0a0a]">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-brand-gold border-t-transparent mx-auto" />
        <p className="text-brand-gold">Loading 3D Experience...</p>
      </div>
    </div>
  );
}

function ErrorFallback({ error }) {
  console.error('Three.js error:', error);
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-purple/20 via-brand-gold/10 to-brand-purple/20">
      <div className="text-center p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
        <h2 className="text-2xl font-bold text-white mb-2">3D Experience Unavailable</h2>
        <p className="text-white/70 mb-4">WebGL may not be supported on your device.</p>
        <p className="text-sm text-brand-gold">You can still browse the website normally.</p>
      </div>
    </div>
  );
}

function HeroCanvas() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleCreated = (state) => {
    if (state.events?.error) {
      setError(state.events.error);
    }
    if (state.events?.created) {
      setIsLoading(false);
    }
  };

  // If there's an error or still loading, show fallback
  if (error) {
    return <ErrorFallback error={error} />;
  }

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={handleCreated}
        dpr={[1, 2]}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
