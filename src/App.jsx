import { useState } from "react"
import Header from "./components/Header"
import CarGrid from "./components/CarGrid"

export default function App() {
    const tabs = ["Cars", "Books", "Course", "Language"]
    const [activeTab, setActiveTab] = useState("Cars")

    return (
        <div style={{ width: "100vw", height: "100vh", background: "#111", color: "#fff" }}>
            <Header tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div style={{ padding: "20px", height: "calc(100% - 60px)", overflowY: "auto" }}>
                {activeTab === "Cars" && <CarGrid />}
                {activeTab === "Books" && <h1>Books Tab</h1>}
                {activeTab === "Course" && <h1>Course Tab</h1>}
                {activeTab === "Language" && <h1>Language Tab</h1>}
            </div>
        </div>
    )
}