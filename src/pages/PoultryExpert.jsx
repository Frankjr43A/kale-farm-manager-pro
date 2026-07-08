/*
==========================================================

Farm Manager Pro

Poultry Expert AI

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function PoultryExpert() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function askExpert() {
    const text = question.toLowerCase();

    if (!text.trim()) {
      return;
    }

    if (
      text.includes("green") ||
      text.includes("diarrhea")
    ) {
      setAnswer(`Possible Cause:
Coccidiosis

Treatment:
• Give Amprolium immediately.
• Keep litter dry.
• Clean drinkers daily.

Prevention:
• Vaccinate where appropriate.
• Maintain good hygiene.`);
      return;
    }

    if (
      text.includes("egg") ||
      text.includes("lay")
    ) {
      setAnswer(`To improve egg production:

• Feed quality layers mash.
• Supply clean water all day.
• Provide 16 hours of light.
• Control parasites.
• Reduce stress.`);
      return;
    }

    if (
      text.includes("cough") ||
      text.includes("sneeze")
    ) {
      setAnswer(`Possible respiratory infection.

Recommendations:

• Isolate affected birds.
• Improve ventilation.
• Consult a veterinarian for appropriate medication.`);
      return;
    }

    setAnswer(`General Poultry Advice

• Maintain clean housing.
• Vaccinate on schedule.
• Feed balanced rations.
• Keep fresh water available.
• Observe birds daily.`);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>🐔 Poultry Expert AI</h2>

        <p>
          Ask questions about layers, broilers,
          feeding, diseases and management.
        </p>

      </div>

      <div className="farm-form">

        <textarea
          rows="6"
          placeholder="Example: My layers have green diarrhea."
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button onClick={askExpert}>
          🐔 Ask Poultry Expert
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

export default PoultryExpert;