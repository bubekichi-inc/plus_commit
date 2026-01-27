"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

function MetalSphere() {
    const meshRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (meshRef.current) {
            // ゆっくりとした回転アニメーション
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
            // 上下に浮遊するアニメーション
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
        }
    })

    return (
        <group ref={meshRef} position={[2, 0, 0]}>
            {/* Core Solid Shape - Brighter, lighter colors */}
            <mesh>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#93c5fd"
                    metalness={0.7}
                    roughness={0.2}
                    envMapIntensity={1.5}
                    flatShading={true}
                />
            </mesh>
            {/* Wireframe Overlay */}
            <mesh>
                <icosahedronGeometry args={[1.05, 0]} />
                <meshBasicMaterial
                    color="#60a5fa"
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </mesh>
        </group>
    )
}

export function MetalAnimation() {
    return (
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1.2}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <MetalSphere />

                {/* 環境マッピング用 */}
                <mesh position={[0, 0, -5]} visible={false}>
                    <planeGeometry args={[100, 100]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </Canvas>
        </div>
    )
}