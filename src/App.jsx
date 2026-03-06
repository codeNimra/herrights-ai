import { useState } from "react"
import Header from "./components/Header"
import HomeScreen from "./components/HomeScreen"
import RegionScreen from "./components/RegionScreen"
import ChatScreen from "./components/ChatScreen"
import { TOPICS } from "./constants/topics"

export default function App() {
  const [stage, setStage] = useState("home") // home | region | chat
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [region, setRegion] = useState("")

  const reset = () => {
    setStage("home")
    setSelectedTopic(null)
    setRegion("")
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAF7F2" }}>
      <Header stage={stage} onReset={reset} />

      {stage === "home" && (
        <HomeScreen
          topics={TOPICS}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
          onContinue={() => setStage("region")}
        />
      )}

      {stage === "region" && (
        <RegionScreen
          topic={TOPICS.find(t => t.id === selectedTopic)}
          region={region}
          onRegionChange={setRegion}
          onContinue={() => setStage("chat")}
        />
      )}

      {stage === "chat" && (
        <ChatScreen
          topic={TOPICS.find(t => t.id === selectedTopic)}
          region={region}
        />
      )}
    </div>
  )
}