"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Icosahedron, Torus, Environment, Sparkles } from "@react-three/drei"

function Geometrics() {
    return (
        <>
            <Float
                speed={4}
                rotationIntensity={1}
                floatIntensity={2}
                position={[3, 1, -2]}
            >
                <Icosahedron args={[1, 0]}>
                    <meshStandardMaterial
                        color="#3b82f6"
                        wireframe
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={0.3}
                    />
                </Icosahedron>
            </Float>

            <Float
                speed={3}
                rotationIntensity={1.5}
                floatIntensity={1.5}
                position={[-3, -1, -3]}
            >
                <Torus args={[0.8, 0.2, 16, 32]}>
                    <meshStandardMaterial
                        color="#8b5cf6"
                        wireframe
                        roughness={0.1}
                        metalness={0.5}
                        transparent
                        opacity={0.3}
                    />
                </Torus>
            </Float>

            <Float
                speed={2}
                rotationIntensity={2}
                floatIntensity={1}
                position={[2, -2, -1]}
            >
                <Icosahedron args={[0.5, 0]}>
                    <meshStandardMaterial
                        color="#06b6d4"
                        roughness={0.1}
                        metalness={0.8}
                        transparent
                        opacity={0.6}
                    />
                </Icosahedron>
            </Float>
        </>
    )
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none fade-in">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Geometrics />
                <Sparkles
                    count={50}
                    scale={10}
                    size={2}
                    speed={0.4}
                    opacity={0.5}
                    color="#ffffff"
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
