import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, ContactShadows, Bounds, Center } from "@react-three/drei"
import Mustang from "./Mustang"

export default function CarModal({ car, onClose }) {
    return (
        <div
            style={{
                position: "fixed",
                top: 0, left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0,0,0,0.95)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000
            }}
            onClick={onClose}
        >
            <div
                style={{ width: "80%", height: "80%", position: "relative" }}
                onClick={e => e.stopPropagation()}
            >
                <h2 style={{ color: "#fff", textAlign: "center" }}>{car.name}</h2>
                <Canvas shadows camera={{ position: [5, 2, 5], fov: 50 }} style={{ width: "100%", height: "90%" }}>
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
                    <Bounds fit clip observe margin={1}>
                        <Center>
                            <Mustang modelPath={car.path} maxScale={5} />
                        </Center>
                    </Bounds>
                    <ContactShadows position={[0,0,0]} scale={10} blur={2} opacity={0.5} far={10} />
                    <Environment preset="city" background={false} />
                    <OrbitControls />
                </Canvas>
            </div>
        </div>
    )
}