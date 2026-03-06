export default function HomeScreen({ topics, selectedTopic, onSelectTopic, onContinue }) {
  return (
    <div style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ marginBottom: 40 }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 38, fontWeight: 700, lineHeight: 1.2,
          color: "#2C1810", marginBottom: 16,
        }}>
          Your rights, explained.<br />
          <span style={{ color: "#C4522A", fontStyle: "italic" }}>Simply. Clearly. For you.</span>
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 16, color: "#6B4F3F", lineHeight: 1.7,
        }}>
          Legal information is written in language designed to confuse. HerRights AI translates it
          giving women and marginalized communities plain-language guidance on their rights, options, and next steps.
        </p>
      </div>

      <div style={{ marginBottom: 32 }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 500, color: "#9A7E6E",
          letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 16,
        }}>Choose your topic</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {topics.map(t => (
            <button
              key={t.id}
              onClick={() => onSelectTopic(t.id)}
              style={{
                border: selectedTopic === t.id ? "1.5px solid #C4522A" : "1.5px solid #E8DDD4",
                borderRadius: 8, padding: "14px 16px", cursor: "pointer",
                background: selectedTopic === t.id ? "#FFF5F0" : "white",
                textAlign: "left", transition: "all 0.2s",
                boxShadow: selectedTopic === t.id ? "0 4px 16px rgba(196,82,42,0.15)" : "none",
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 6 }}>{t.icon}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 500, color: "#2C1810", marginBottom: 3,
              }}>{t.label}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12, color: "#9A7E6E",
              }}>{t.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!selectedTopic}
        style={{
          width: "100%", padding: 14, fontSize: 16,
          background: selectedTopic ? "#C4522A" : "#CCC",
          color: "white", border: "none", borderRadius: 4,
          fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
          cursor: selectedTopic ? "pointer" : "not-allowed",
        }}
      >
        Get Started →
      </button>

      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12, color: "#B0A090", textAlign: "center", marginTop: 16, lineHeight: 1.6,
      }}>
        ⚠️ HerRights AI provides general legal information, not legal advice.
        For your specific situation, please consult a qualified lawyer.
      </p>
    </div>
  )
}