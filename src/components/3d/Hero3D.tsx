"use client"

import { Canvas } from "@react-three/fiber"
import { Float, Icosahedron, Environment, Sparkles } from "@react-three/drei"

function Geometrics() {
    return (
        <>
            <Float
                speed={3}
                rotationIntensity={1}
                floatIntensity={1}
                position={[3, 0, -1]}
            >
                <Icosahedron args={[1.5, 0]}>
                    <meshStandardMaterial
                        color="#06b6d4"
                        roughness={0.1}
                        metalness={0.9}
                        transparent
                        opacity={0.6}
                    />
                </Icosahedron>
            </Float>
        </>
    )
}

export default function Hero3D() {
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
