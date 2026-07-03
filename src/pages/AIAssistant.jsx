import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState(
      "👋 Welcome to Farm AI Assistant. Ask me about tomatoes, kale, fertilizers, irrigation, pests or diseases."
    );

  function askAI() {
    const q =
      question.toLowerCase();

    if (!q.trim()) {
      setAnswer(
        "Please type a question."
      );
      return;
    }

    if (
      q.includes("early blight")
    ) {
      setAnswer(
        `🍅 Early Blight

Cause:
Alternaria solani fungus.

Symptoms:
• Brown spots with yellow rings.
• Lower leaves affected first.

Management:
• Remove infected leaves.
• Avoid overhead irrigation.
• Spray Ridomil Gold, Milraz or Mancozeb every 7 days.`
      );

      return;
    }

    if (
      q.includes("late blight")
    ) {
      setAnswer(
        `🍅 Late Blight

Symptoms:
• Dark water-soaked spots.
• White mould under leaves.

Management:
• Spray Ridomil Gold.
• Improve airflow.
• Avoid wet foliage.`
      );

      return;
    }

    if (
      q.includes("alternaria")
    ) {
      setAnswer(
        `🥬 Alternaria Leaf Spot

Symptoms:
• Circular brown spots.
• Yellowing leaves.

Management:
• Remove infected leaves.
• Spray Mancozeb every 7-10 days.
• Improve spacing and airflow.`
      );

      return;
    }

    if (
      q.includes("clubroot")
    ) {
      setAnswer(
        `🥬 Clubroot

Symptoms:
• Wilting during hot weather.
• Swollen roots.

Management:
• Rotate crops.
• Raise soil pH with lime.
• Improve drainage.`
      );

      return;
    }

    if (
      q.includes("fertilizer")
    ) {
      setAnswer(
        `🧪 Fertilizer Advice

Kale:
• DAP at planting.
• CAN during vegetative growth.

Tomatoes:
• DAP at planting.
• NPK during flowering.
• Calcium nitrate during fruiting.`
      );

      return;
    }

    if (
      q.includes("water")
    ) {
      setAnswer(
        `💧 Irrigation Advice

Kale:
2-3 irrigations per week depending on weather.

Tomatoes:
Maintain consistent moisture and avoid waterlogging.`
      );

      return;
    }

    setAnswer(
      `🤖 I don't know the answer yet.

Future versions of Farm AI will continuously learn more about:
• Tomatoes
• Kale
• Diseases
• Pesticides
• Fertilizers
• Irrigation`
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          🤖 Farm AI Assistant
        </h2>

        <p>
          Ask me anything about farming.
        </p>

        <br />

        <input
          type="text"
          placeholder="Ask a farming question..."
          value={question}
          onChange={(e) =>
            setQuestion(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <button
          onClick={askAI}
        >
          Ask AI
        </button>

        <br />
        <br />

        <div className="tasks-card">
          <p
            style={{
              whiteSpace:
                "pre-line",
            }}
          >
            {answer}
          </p>
        </div>

        <br />

        <h3>
          Example Questions
        </h3>

        <ul>
          <li>
            🍅 What is Early Blight?
          </li>

          <li>
            🥬 What is Clubroot?
          </li>

          <li>
            💧 When should I water tomatoes?
          </li>

          <li>
            🧪 What fertilizer should I use?
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AIAssistant;