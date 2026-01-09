'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Mustang from './Mustang'
import CameraRig from './CameraRig'

export default function Scene() {
    return (
        <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />

            <CameraRig />
            <Mustang />

            <OrbitControls enablePan={false} />
            <Environment preset="city" />
        </Canvas>
    )
}
