/*
==========================================================

Farm Manager Pro

Tomato Expert AI

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function TomatoExpert() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askExpert() {
    const text = question.toLowerCase();

    if (!text.trim()) return;

    if (
      text.includes("yellow") ||
      text.includes("leaf")
    ) {
      setAnswer(`Possible Causes

• Early Blight
• Late Blight
• Nutrient Deficiency

Recommendations

• Spray Mancozeb.
• Remove infected leaves.
• Apply balanced fertilizer.
• Avoid overhead irrigation.`);
      return;
    }

    if (
      text.includes("curl")
    ) {
      setAnswer(`Leaf Curl

Possible Cause

• Tomato Yellow Leaf Curl Virus

Recommendations

• Control whiteflies.
• Remove infected plants.
• Use resistant varieties.`);
      return;
    }

    if (
      text.includes("flower")
    ) {
      setAnswer(`Flower Drop

Recommendations

• Maintain regular watering.
• Avoid excessive nitrogen.
• Improve pollination.
• Reduce heat stress.`);
      return;
    }

    if (
      text.includes("fertilizer")
    ) {
      setAnswer(`Tomato Fertilizer Guide

• DAP at transplanting.
• CAN after establishment.
• NPK during flowering.
• Calcium during fruit development.`);
      return;
    }

    setAnswer(`General Tomato Advice

• Use certified seed.
• Rotate crops.
• Mulch.
• Irrigate consistently.
• Scout for pests weekly.`);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">
        <h2>🍅 Tomato Expert AI</h2>

        <p>
          Ask anything about tomato production,
          diseases, nutrition and management.
        </p>
      </div>

      <div className="farm-form">

        <textarea
          rows="6"
          placeholder="Example: My tomato leaves are turning yellow."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button onClick={askExpert}>
          🍅 Ask Tomato Expert
        </button>

      </div>

      {answer && (

        <div className="farm-card">

          <h2>📋 Recommendation</h2>

          <p
            style={{
              whiteSpace: "pre-line",
            }}
          >
            {answer}
          </p>

        </div>

      )}

    </main>
  );
}

export default TomatoExpert;