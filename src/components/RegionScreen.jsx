export default function RegionScreen({ topic, region, onRegionChange, onContinue }) {
  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: "64px 24px" }}>
      <div style={{
        background: "white", borderRadius: 12, padding: 36,
        border: "1px solid #E8DDD4", boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>{topic?.icon}</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 24, fontWeight: 700, marginBottom: 8, color: "#2C1810",
        }}>Where are you located?</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, color: "#6B4F3F", marginBottom: 24, lineHeight: 1.6,
        }}>
          Legal rights vary by country and region. Sharing your location helps me give you
          accurate, relevant information. This stays in our conversation only.
        </p>

        <input
          placeholder="e.g. United States, California — or skip"
          value={region}
          onChange={e => onRegionChange(e.target.value)}
          onKeyDown={e => e.key === "Enter" && onContinue()}
          autoFocus
          style={{
            width: "100%", border: "1.5px solid #E8DDD4", borderRadius: 6,
            padding: "12px 16px", fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, background: "white", color: "#2C1810",
            outline: "none", marginBottom: 16,
          }}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onContinue}
            style={{
              flex: 1, background: "#C4522A", color: "white",
              border: "none", borderRadius: 4, padding: "12px 0",
              fontFamily: "'DM Sans', sans-serif", fontSize: 15,
              fontWeight: 500, cursor: "pointer",
            }}
          >Continue →</button>
          <button
            onClick={() => { onRegionChange(""); onContinue(); }}
            style={{
              background: "transparent", color: "#C4522A",
              border: "1.5px solid #C4522A", borderRadius: 4,
              padding: "10px 22px", fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, cursor: "pointer",
            }}
          >Skip</button>
        </div>
      </div>
    </div>
  )
}