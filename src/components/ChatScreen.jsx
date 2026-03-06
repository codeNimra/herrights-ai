import { useState, useRef, useEffect } from "react"
import { SYSTEM_PROMPT } from "../constants/topics"

function formatMessage(text) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <br key={i} />
    const parts = line.split(/\*\*(.*?)\*\*/g)
    return (
      <p key={i} style={{ margin: "0 0 6px 0", lineHeight: 1.7 }}>
        {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
      </p>
    )
  })
}

export default function ChatScreen({ topic, region }) {
  const greeting = `Hi, I'm HerRights AI. 💛\n\nI'm here to help you understand your rights around **${topic?.label}**${region ? ` in **${region}**` : ""}.\n\nAsk me anything — whether you're dealing with a situation right now or just want to know your options.\n\nWhat's on your mind?`

  const [messages, setMessages] = useState([{ role: "assistant", content: greeting }])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput("")
    const newMessages = [...messages, { role: "user", content: userMsg }]
    setMessages(newMessages)
    setLoading(true)

    const apiMessages = newMessages
      .filter((_, i) => i !== 0)
      .map(m => ({ role: m.role, content: m.content }))

    if (!apiMessages.length || apiMessages[apiMessages.length - 1].role !== "user") {
      apiMessages.push({ role: "user", content: userMsg })
    }

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT +
            (region ? `\n\nUser's location: ${region}` : "") +
            `\n\nTopic focus: ${topic?.label} — ${topic?.desc}`,
          messages: apiMessages,
        }),
      })
      const data = await res.json()
      const reply = data.content?.map(b => b.text || "").join("") || "Sorry, I couldn't get a response. Please try again."
      setMessages([...newMessages, { role: "assistant", content: reply }])
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please try again." }])
    }
    setLoading(false)
  }

  return (
    <div style={{
      maxWidth: 700, margin: "0 auto", padding: "0 16px",
      display: "flex", flexDirection: "column", height: "calc(100vh - 69px)",
    }}>
      <div style={{ padding: "10px 0" }}>
        <span style={{
          background: "#FFF5F0", border: "1px solid #F0D4C4",
          borderRadius: 20, padding: "4px 12px",
          fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#C4522A",
        }}>
          {topic?.icon} {topic?.label}{region && ` · ${region}`}
        </span>
      </div>

      <div style={{
        flex: 1, overflowY: "auto", paddingBottom: 16,
        display: "flex", flexDirection: "column", gap: 16,
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
          }}>
            {msg.role === "assistant" && (
              <div style={{
                width: 30, height: 30, borderRadius: "50%", background: "#C4522A",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, flexShrink: 0, marginRight: 8, marginTop: 4,
              }}>⚖️</div>
            )}
            <div style={msg.role === "user" ? {
              background: "#C4522A", color: "#FAF7F2",
              borderRadius: "16px 16px 4px 16px", padding: "12px 16px",
              maxWidth: "75%", marginLeft: "auto",
              fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, lineHeight: 1.6,
            } : {
              background: "white", border: "1.5px solid #EDE5DC",
              borderRadius: "16px 16px 16px 4px", padding: "14px 18px",
              maxWidth: "80%", fontFamily: "'DM Sans', sans-serif", fontSize: 14.5,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}>
              {msg.role === "user" ? msg.content : formatMessage(msg.content)}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
            <div style={{
              width: 30, height: 30, borderRadius: "50%", background: "#C4522A",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
            }}>⚖️</div>
            <div style={{
              background: "white", border: "1.5px solid #EDE5DC",
              borderRadius: "16px 16px 16px 4px", padding: "14px 18px",
            }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 0.2, 0.4].map((d, i) => (
                  <span key={i} style={{
                    width: 7, height: 7, borderRadius: "50%", background: "#C4522A",
                    display: "inline-block",
                    animation: `pulse 1.2s ${d}s ease-in-out infinite`,
                  }} />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={{
        borderTop: "1px solid #E8DDD4", paddingTop: 16, paddingBottom: 16,
        display: "flex", gap: 10, alignItems: "flex-end",
      }}>
        <textarea
          placeholder="Ask about your rights, your situation, or what steps to take..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage() } }}
          rows={2}
          style={{
            flex: 1, border: "1.5px solid #E8DDD4", borderRadius: 6,
            padding: "12px 16px", fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, background: "white", color: "#2C1810",
            outline: "none", resize: "none", maxHeight: 120,
          }}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || loading}
          style={{
            background: !input.trim() || loading ? "#CCC" : "#C4522A",
            color: "white", border: "none", borderRadius: 4,
            padding: "12px 20px", fontFamily: "'DM Sans', sans-serif",
            fontSize: 15, fontWeight: 500,
            cursor: !input.trim() || loading ? "not-allowed" : "pointer",
          }}
        >Send</button>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  )
}