'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  const legsRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    }
    if (legsRef.current) {
      legsRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 2) * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#8B6F47" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.15, 1.4, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 1.4, 0.45]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.35, 0.4, 0.8, 32]} />
        <meshStandardMaterial color="#A0522D" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.55, 0.6, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#8B6F47" />
      </mesh>
      <mesh position={[0.55, 0.6, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
        <meshStandardMaterial color="#8B6F47" />
      </mesh>

      {/* Legs with animation */}
      <group ref={legsRef} position={[0, 0, 0]}>
        <mesh position={[-0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
        <mesh position={[0.2, -0.5, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color="#654321" />
        </mesh>
      </group>

      {/* Ears */}
      <mesh position={[-0.35, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#8B6F47" />
      </mesh>
      <mesh position={[0.35, 1.5, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#8B6F47" />
      </mesh>
    </group>
  )
}

export function HeroCharacter() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#60A5FA" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#A78BFA" />
        <AnimatedCharacter />
      </Canvas>
    </div>
  )
}
