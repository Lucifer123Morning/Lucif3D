import { FaCar } from "react-icons/fa"

export default function Header({ tabs, activeTab, setActiveTab }) {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            gap: "20px",
            background: "#222"
        }}>
            <div
                onClick={() => setActiveTab("Cars")}
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#555",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                }}
            >
                <FaCar color="#fff" />
            </div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                        padding: "10px 15px",
                        border: "none",
                        background: activeTab === tab ? "#555" : "#333",
                        color: "#fff",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}