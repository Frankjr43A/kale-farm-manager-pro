/*
==========================================================

Farm Manager Pro

Kale Expert AI

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function KaleExpert() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askExpert() {
    const text = question.toLowerCase();

    if (!text.trim()) return;

    if (
      text.includes("yellow")
    ) {
      setAnswer(`Possible Causes

• Nitrogen deficiency
• Downy Mildew

Recommendations

• Apply CAN fertilizer.
• Spray copper fungicide.
• Remove infected leaves.`);
      return;
    }

    if (
      text.includes("aphid") ||
      text.includes("insect")
    ) {
      setAnswer(`Aphid Control

• Spray Abamectin or Acetamiprid.
• Encourage beneficial insects.
• Inspect weekly.`);
      return;
    }

    if (
      text.includes("fertilizer")
    ) {
      setAnswer(`Kale Fertilizer Program

Week 1
• DAP

Week 3
• CAN

Week 5 onwards
• CAN every 2 weeks

Use foliar feeds weekly.`);
      return;
    }

    if (
      text.includes("watering")
    ) {
      setAnswer(`Irrigation

• Water consistently.
• Avoid waterlogging.
• Irrigate early morning or evening.`);
      return;
    }

    setAnswer(`General Kale Advice

• Rotate crops.
• Weed regularly.
• Scout for pests weekly.
• Harvest continuously.
• Maintain soil fertility.`);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>🥬 Kale Expert AI</h2>

        <p>
          Ask anything about kale production,
          diseases, fertilizer and harvesting.
        </p>

      </div>

      <div className="farm-form">

        <textarea
          rows="6"
          placeholder="Example: My kale leaves are turning yellow."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button onClick={askExpert}>
          🥬 Ask Kale Expert
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

export default KaleExpert;