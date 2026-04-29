import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Text3D, Center, OrbitControls, Sphere, Box } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function AnimatedBox({ position, color, label }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={() => {}}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <MeshDistortMaterial
          color={color}
          distort={hovered ? 0.6 : 0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function ConnectingLines() {
  const linesRef = useRef();

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={linesRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial color="#ffca3a" transparent opacity={0.3} />
    </mesh>
  );
}

function ContentScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color="#7b3aff" />
      
      <AnimatedBox position={[-2.5, 0.5, 0]} color="#7b3aff" label="Design" />
      <AnimatedBox position={[0, -0.3, 1]} color="#ffca3a" label="Video" />
      <AnimatedBox position={[2.5, 0.5, 0]} color="#ff6b9d" label="Social" />
      
      <ConnectingLines />
    </>
  );
}

function AboutScene() {
  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <fog attach="fog" args={['#0a0a0a', 5, 20]} />
      
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <pointLight position={[-5, 0, -5]} intensity={0.8} color="#7b3aff" />
      <pointLight position={[5, 0, 5]} intensity={0.8} color="#ffca3a" />
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial
            color="#7b3aff"
            metalness={0.7}
            roughness={0.2}
            wireframe
          />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

function ServicesScene() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#ffca3a" />
      
      <group ref={groupRef}>
        {[...Array(5)].map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 3;
          return (
            <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <mesh position={[Math.cos(angle) * radius, Math.sin(angle) * 0.5, Math.sin(angle) * radius]}>
                <torusGeometry args={[0.4, 0.15, 16, 32]} />
                <meshStandardMaterial
                  color={i % 2 === 0 ? '#7b3aff' : '#ffca3a'}
                  metalness={0.8}
                  roughness={0.2}
                  emissive={i % 2 === 0 ? '#7b3aff' : '#ffca3a'}
                  emissiveIntensity={0.15}
                />
              </mesh>
            </Float>
          );
        })}
      </group>
    </>
  );
}

function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
      <ContentScene />
    </Canvas>
  );
}

function AboutScene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <AboutScene />
    </Canvas>
  );
}

function ServicesScene3D() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
      <ServicesScene />
    </Canvas>
  );
}

export { Scene3D, AboutScene3D, ServicesScene3D };
export default Scene3D;
