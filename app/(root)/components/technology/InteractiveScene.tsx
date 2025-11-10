'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center, Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

// 3D Node component representing business entities
function BusinessNode({ position, color, label, scale = 1 }: any) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;

            // Scale on hover
            const targetScale = hovered ? scale * 1.3 : scale;
            meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh
                ref={meshRef}
                position={position}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <dodecahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={hovered ? 0.8 : 0.3}
                    metalness={0.8}
                    roughness={0.2}
                />
                {hovered && (
                    <>
                        {/* Glow effect */}
                        <mesh>
                            <dodecahedronGeometry args={[0.7, 0]} />
                            <meshBasicMaterial
                                color={color}
                                transparent
                                opacity={0.2}
                                side={THREE.BackSide}
                            />
                        </mesh>
                    </>
                )}
            </mesh>
        </Float>
    );
}

// Connection line between nodes
function ConnectionLine({ start, end, animated = true }: any) {
    const [progress, setProgress] = useState(0);

    useFrame((state) => {
        if (animated) {
            setProgress((state.clock.elapsedTime % 2) / 2);
        }
    });

    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    return (
        <>
            <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
                color: "#ef4444",
                transparent: true,
                opacity: 0.3
            }))} />
            {animated && (
                <mesh position={[
                    start[0] + (end[0] - start[0]) * progress,
                    start[1] + (end[1] - start[1]) * progress,
                    start[2] + (end[2] - start[2]) * progress,
                ]}>
                    <sphereGeometry args={[0.05, 16, 16]} />
                    <meshBasicMaterial color="#ef4444" />
                </mesh>
            )}
        </>
    );
}

// Main 3D scene component
function Scene() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Slow rotation
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    // Define positions for business entities in a network
    const nodes = [
        { position: [0, 0, 0], color: '#ef4444', label: 'Platform', scale: 1.2 }, // Center - Red
        { position: [-2, 1, 0], color: '#22c55e', label: 'Farmers', scale: 0.8 }, // Green
        { position: [2, 1, 0], color: '#3b82f6', label: 'Buyers', scale: 0.8 }, // Blue
        { position: [-1.5, -1.5, 1], color: '#ec4899', label: 'Women', scale: 0.8 }, // Pink
        { position: [1.5, -1.5, 1], color: '#8b5cf6', label: 'Banks', scale: 0.8 }, // Purple
        { position: [0, 2, -1], color: '#f59e0b', label: 'Finance', scale: 0.9 }, // Orange
    ];

    return (
        <group ref={groupRef}>
            {/* Central nodes */}
            {nodes.map((node, i) => (
                <BusinessNode key={i} {...node} />
            ))}

            {/* Connection lines - creating a network */}
            <ConnectionLine start={nodes[0].position} end={nodes[1].position} animated />
            <ConnectionLine start={nodes[0].position} end={nodes[2].position} animated />
            <ConnectionLine start={nodes[0].position} end={nodes[3].position} animated />
            <ConnectionLine start={nodes[0].position} end={nodes[4].position} animated />
            <ConnectionLine start={nodes[0].position} end={nodes[5].position} animated />

            {/* Cross connections */}
            <ConnectionLine start={nodes[1].position} end={nodes[2].position} />
            <ConnectionLine start={nodes[3].position} end={nodes[4].position} />
            <ConnectionLine start={nodes[1].position} end={nodes[5].position} />
            <ConnectionLine start={nodes[2].position} end={nodes[4].position} />

            {/* Ambient particles */}
            <Float speed={3} rotationIntensity={0.2} floatIntensity={0.3}>
                <mesh position={[-3, 2, -2]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color="#ef4444" transparent opacity={0.5} />
                </mesh>
            </Float>
            <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.4}>
                <mesh position={[3, -2, -2]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color="#3b82f6" transparent opacity={0.5} />
                </mesh>
            </Float>
            <Float speed={3.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh position={[0, -3, 1]}>
                    <sphereGeometry args={[0.05, 8, 8]} />
                    <meshBasicMaterial color="#22c55e" transparent opacity={0.5} />
                </mesh>
            </Float>
        </group>
    );
}

export function InteractiveScene() {
    return (
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
            >
                <color attach="background" args={['transparent']} />

                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#3b82f6" />

                {/* Environment for reflections */}
                <Environment preset="city" />

                {/* Main Scene */}
                <Scene />

                {/* Camera controls */}
                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minDistance={5}
                    maxDistance={15}
                    autoRotate={false}
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Interaction hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <div className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 border border-white/20">
                    <p className="text-xs text-white/80 font-medium">
                        🖱️ Drag to rotate • Scroll to zoom
                    </p>
                </div>
            </div>
        </div>
    );
}
