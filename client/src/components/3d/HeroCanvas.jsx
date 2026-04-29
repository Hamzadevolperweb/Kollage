import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron, OrbitControls, Stars, Sparkles } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function FloatingShape({ position, color, geometry, speed = 1, distort = 0.4, scale = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.2;
      meshRef.current.rotation.y += 0.005 * speed;
    }
  });

  const Geometry = () => {
    switch(geometry) {
      case 'sphere': return <sphereGeometry args={[1 * scale, 64, 64]} />;
      case 'box': return <boxGeometry args={[1.2 * scale, 1.2 * scale, 1.2 * scale]} />;
      case 'torus': return <torusGeometry args={[0.8 * scale, 0.3 * scale, 32, 100]} />;
      case 'icosahedron': return <icosahedronGeometry args={[1 * scale, 1]} />;
      default: return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <Geometry />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3);
    const color1 = new THREE.Color('#7b3aff');
    const color2 = new THREE.Color('#ffca3a');
    
    for (let i = 0; i < count; i++) {
      const mixed = color1.clone().lerp(color2, Math.random());
      cols[i * 3] = mixed.r;
      cols[i * 3 + 1] = mixed.g;
      cols[i * 3 + 2] = mixed.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WavePlane() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -3, -5]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <meshStandardMaterial
        color="#7b3aff"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

function HeroScene() {
  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <fog attach="fog" args={['#0a0a0a', 5, 25]} />
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, 3, -5]} intensity={1} color="#7b3aff" />
      <pointLight position={[5, -3, 5]} intensity={0.8} color="#ffca3a" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#ffffff"
      />

      <ParticleField />
      <Stars radius={50} depth={20} count={2000} factor={4} saturation={0} fade speed={1} />
      <Sparkles 
        count={200} 
        size={4} 
        scale={10} 
        speed={0.4} 
        opacity={0.5} 
        color="#ffca3a" 
      />

      <WavePlane />

      <FloatingShape
        position={[-2, 1, 0]}
        color="#7b3aff"
        geometry="icosahedron"
        speed={1.2}
        distort={0.3}
        scale={1.2}
      />
      
      <FloatingShape
        position={[2, -0.5, -2]}
        color="#ffca3a"
        geometry="torus"
        speed={0.8}
        distort={0.5}
        scale={0.9}
      />
      
      <FloatingShape
        position={[0, 2, -3]}
        color="#ff6b9d"
        geometry="sphere"
        speed={1}
        distort={0.4}
        scale={0.8}
      />

      <OrbitControls 
        enableZoom={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}

function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}

export default HeroCanvas;
