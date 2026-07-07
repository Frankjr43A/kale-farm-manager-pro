import { useState } from "react";

import {
  getFarmAdvice,
} from "../services/smartFarmAI";

import {
  askOnlineFarmAI,
} from "../services/onlineFarmAI";

import VoiceControls from "../components/VoiceControls";

import {
  speak,
} from "../services/voiceAssistant";

function AIAssistant() {
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [thinking, setThinking] =
    useState(false);

  async function askAI(e) {
    if (e) {
      e.preventDefault();
    }

    if (!question.trim()) {
      return;
    }

    setThinking(true);

    try {
      let response;

      // Online AI
      if (navigator.onLine) {
        response =
          await askOnlineFarmAI(
            question
          );

        if (
          response.success
        ) {
          setAnswer(
            response.answer
          );

          speak(
            response.answer
          );

          setThinking(
            false
          );

          return;
        }
      }

      // Offline AI
      const text =
        question.toLowerCase();

      let category =
        "Tomatoes";

      if (
        text.includes(
          "chicken"
        ) ||
        text.includes(
          "bird"
        ) ||
        text.includes(
          "layer"
        ) ||
        text.includes(
          "poultry"
        ) ||
        text.includes(
          "egg"
        )
      ) {
        category =
          "Layers";
      } else if (
        text.includes(
          "kale"
        )
      ) {
        category =
          "Kale";
      }

      response =
        getFarmAdvice(
          category,
          question
        );

      const offlineAnswer =
        response.success
          ? `Possible ${response.disease}.

Treatment:
${response.treatment}

Prevention:
${response.prevention}`
          : response.treatment;

      setAnswer(
        offlineAnswer
      );

      speak(
        offlineAnswer
      );
    } finally {
      setThinking(false);
    }
  }

  function handleTranscript(
    text
  ) {
    setQuestion(text);

    setTimeout(() => {
      askAI();
    }, 500);
  }

  return (
    <main className="dashboard">
      <div className="farm-form">
        <h2>
          🤖 Smart Farm AI
        </h2>

        <p>
          Ask me anything
          about:
        </p>

        <ul>
          <li>
            🥬 Kale
          </li>

          <li>
            🍅 Tomatoes
          </li>

          <li>
            🐔 Poultry
          </li>

          <li>
            🌤 Farming
          </li>
        </ul>

        <form
          onSubmit={
            askAI
          }
        >
          <textarea
            placeholder="Example: My layers have green diarrhea."
            value={
              question
            }
            onChange={(
              e
            ) =>
              setQuestion(
                e.target
                  .value
              )
            }
            rows="5"
          />

          <button
            type="submit"
            disabled={
              thinking
            }
          >
            {thinking
              ? "🤖 Thinking..."
              : "🤖 Ask Farm AI"}
          </button>
        </form>

        <VoiceControls
          onTranscript={
            handleTranscript
          }
          answer={answer}
        />

        {answer && (
          <div
            className="tasks-card"
            style={{
              marginTop:
                "20px",
            }}
          >
            <h3>
              🌿 Farm AI
              Response
            </h3>

            <p
              style={{
                whiteSpace:
                  "pre-line",
              }}
            >
              {answer}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default AIAssistant;