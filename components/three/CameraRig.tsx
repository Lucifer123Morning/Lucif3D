'use client'

import { useThree } from '@react-three/fiber'
import { useState } from 'react'
import gsap from 'gsap'

export default function CameraRig() {
    const { camera } = useThree()
    const [inside, setInside] = useState(false)

    const moveCamera = () => {
        setInside(!inside)

        gsap.to(camera.position, {
            x: inside ? 5 : 0,
            y: inside ? 2 : 1.2,
            z: inside ? 5 : 0.6,
            duration: 1.2,
            ease: 'power2.inOut',
        })
    }

    return (
        <mesh onClick={moveCamera} visible={false}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial />
        </mesh>
    )
}
