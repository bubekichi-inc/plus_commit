"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from 'three'

function RecruitShape() {
    const meshRef = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (meshRef.current) {
            // ゆっくりとした回転アニメーション
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
            meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
            // 上下に浮遊するアニメーション
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
        }
    })

    return (
        <group ref={meshRef} position={[2, 0, 0]}>
            {/* Core Solid Shape - Orange accent colors */}
            <mesh>
                <octahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color="#fb923c"
                    metalness={0.8}
                    roughness={0.2}
                    envMapIntensity={1.5}
                    flatShading={true}
                />
            </mesh>
            {/* Wireframe Overlay */}
            <mesh>
                <octahedronGeometry args={[1.05, 0]} />
                <meshBasicMaterial
                    color="#fdba74"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    )
}

export function RecruitAnimation() {
    return (
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.5} />
                <directionalLight
                    position={[10, 10, 5]}
                    intensity={1}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={0.4} color="#fb923c" />
                <pointLight position={[10, -5, -5]} intensity={0.3} color="#fdba74" />

                <RecruitShape />

                {/* 環境マッピング用 */}
                <mesh position={[0, 0, -5]} visible={false}>
                    <planeGeometry args={[100, 100]} />
                    <meshBasicMaterial color="#ffffff" />
                </mesh>
            </Canvas>
        </div>
    )
}
