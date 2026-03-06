export default function Header({ stage, onReset }) {
  return (
    <header style={{
      borderBottom: "1px solid #E8DDD4",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "white",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "#C4522A",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18,
        }}>⚖️</div>
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 18, fontWeight: 700, color: "#2C1810",
          }}>HerRights AI</div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, color: "#9A7E6E",
            letterSpacing: "1.5px", textTransform: "uppercase",
          }}>Know Your Rights</div>
        </div>
      </div>

      {stage === "chat" && (
        <button onClick={onReset} style={{
          background: "transparent", color: "#C4522A",
          border: "1.5px solid #C4522A", borderRadius: 4,
          padding: "7px 16px", fontSize: 13,
          fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
        }}>
          ← New Topic
        </button>
      )}
    </header>
  )
}