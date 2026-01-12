import { useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Center, Bounds, ContactShadows } from "@react-three/drei"

export default function Mustang({ modelPath, maxScale = 1, width = "100%", height = "200px" }) {
    const gltf = useGLTF(modelPath)

    return (
        <Canvas
            shadows
            camera={{ position: [5, 2, 5], fov: 50 }}
            style={{ width, height, borderRadius: "10px" }}
        >
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
            <Bounds fit clip observe margin={1}>
                <Center>
                    <primitive object={gltf.scene} scale={maxScale} />
                </Center>
            </Bounds>
            <ContactShadows position={[0, 0, 0]} scale={10} blur={2} opacity={0.5} far={10} />
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    )
}