/*
==========================================================

Farm Manager Pro

Production AI Assistant

Version : 3.0.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

import { getFarmAdvice } from "../services/smartFarmAI";
import {
  askOnlineFarmAI,
  clearConversation,
} from "../services/onlineFarmAI";

import { speak } from "../services/voiceAssistant";
import VoiceControls from "../components/VoiceControls";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [thinking, setThinking] = useState(false);

  const suggestions = [
    "Why are my tomato leaves curling?",
    "My layers have green diarrhoea.",
    "Best fertilizer for kale?",
    "How often should I irrigate tomatoes?",
    "How can I increase egg production?",
    "How do I control aphids?"
  ];

  async function askAI(e) {
    if (e) e.preventDefault();

    if (!question.trim()) return;

    setThinking(true);

    try {
      if (navigator.onLine) {
        const online = await askOnlineFarmAI(question);

        if (online.success) {
          setAnswer(online.answer);
          setQuestion("");

          // Voice remains optional.
          // Uncomment the next line if you want auto voice.
          // speak(online.answer);

          return;
        }
      }

      const text = question.toLowerCase();

      let crop = "Tomatoes";

      if (text.includes("kale")) crop = "Kale";

      if (
        text.includes("layer") ||
        text.includes("chicken") ||
        text.includes("egg") ||
        text.includes("poultry")
      ) {
        crop = "Layers";
      }

      const result = getFarmAdvice(crop, question);

      const response = result.success
        ? `Diagnosis

${result.disease}

Treatment

${result.treatment}

Prevention

${result.prevention}`
        : result.treatment;

      setAnswer(response);

    } catch (error) {
      setAnswer(error.message);
    } finally {
      setThinking(false);
    }
  }

  function useSuggestion(text) {
    setQuestion(text);
  }

  function handleTranscript(text) {
    setQuestion(text);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>🤖 Farm Manager Pro AI</h2>
        <p>
          Online Gemini AI with offline farming knowledge.
        </p>

      </div>

      <div className="farm-form">

        <textarea
          rows="5"
          placeholder="Ask anything about farming..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={askAI}
          disabled={thinking}
        >
          {thinking ? "🤖 Thinking..." : "🤖 Ask AI"}
        </button>

        <button
          onClick={() => {
            clearConversation();
            setAnswer("");
            setQuestion("");
          }}
          style={{ marginTop: 10 }}
        >
          🗑 New Chat
        </button>

      </div>

      <div className="tasks-card">

        <h3>💡 Suggested Questions</h3>

        {suggestions.map((item) => (
          <button
            key={item}
            style={{
              width: "100%",
              marginBottom: 10
            }}
            onClick={() => useSuggestion(item)}
          >
            {item}
          </button>
        ))}

      </div>

      <VoiceControls
        onTranscript={handleTranscript}
        answer={answer}
      />

      {answer && (
        <div
          className="farm-card"
          style={{ marginTop: 20 }}
        >
          <h3>🌿 AI Response</h3>

          <div
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.7
            }}
          >
            {answer}
          </div>

          <button
            style={{ marginTop: 15 }}
            onClick={() => speak(answer)}
          >
            🔊 Read Answer
          </button>

        </div>
      )}

    </main>
  );
}

export default AIAssistant;