import { useState } from "react"
import CarModal from "./CarModal"
import Mustang from "./Mustang"

const cars = [
    { name: "Mustang GTD 2025", path: "/models/car/2025_ford_mustang_gtd.glb" },
    { name: "Mustang Shelby 2021", path: "/models/car/ford_mustang_shelby_gt500.glb" },

]

export default function CarGrid() {
    const [selectedCar, setSelectedCar] = useState(null)

    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "20px"
            }}>
                {cars.map((car, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedCar(car)}
                        style={{
                            cursor: "pointer",
                            border: "1px solid #555",
                            borderRadius: "10px",
                            background: "#111",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "5px"
                        }}
                    >
                        <h4 style={{ color: "#fff", textAlign: "center", margin: "5px 0" }}>{car.name}</h4>
                        <Mustang modelPath={car.path} maxScale={1} width="100%" height="200px" />
                    </div>
                ))}
            </div>

            {selectedCar && (
                <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
            )}
        </>
    )
}