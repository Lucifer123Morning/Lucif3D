'use client'

import { useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'
import gsap from 'gsap'
import * as THREE from 'three'

export default function Mustang() {
    const { nodes } = useGLTF('/models/mustang/mustang.glb')

    const doorL = useRef<THREE.Object3D>(null!)
    const doorR = useRef<THREE.Object3D>(null!)

    const [open, setOpen] = useState(false)

    const toggleDoors = () => {
        setOpen(!open)

        gsap.to(doorL.current.rotation, {
            y: open ? 0 : Math.PI / 2,
            duration: 1,
            ease: 'power2.out',
        })

        gsap.to(doorR.current.rotation, {
            y: open ? 0 : -Math.PI / 2,
            duration: 1,
            ease: 'power2.out',
        })
    }

    return (
        <group onClick={toggleDoors}>
            <primitive object={nodes.Body} />
            <primitive ref={doorL} object={nodes.Door_L} />
            <primitive ref={doorR} object={nodes.Door_R} />
            <primitive object={nodes.Interior} />
        </group>
    )
}
