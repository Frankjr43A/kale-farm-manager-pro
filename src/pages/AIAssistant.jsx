import {
  useState,
} from "react";

import {
  getFarmingAdvice,
} from "../services/farmingAdvisor";

function AIAssistant() {
  const [question,
    setQuestion] =
    useState("");

  const [answer,
    setAnswer] =
    useState("");

  function askAI(e) {
    e.preventDefault();

    const weather =
      JSON.parse(
        localStorage.getItem(
          "currentWeather"
        )
      ) || {};

    const response =
      getFarmingAdvice(
        question,
        weather
      );

    setAnswer(
      response
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-form">
        <h2>
          🤖 Smart Farming AI
        </h2>

        <p>
          Ask me anything
          about your farm.
        </p>

        <form
          onSubmit={
            askAI
          }
        >
          <textarea
            placeholder="Example: Should I spray tomatoes today?"
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
          >
            🤖 Ask AI
          </button>
        </form>

        {answer && (
          <div
            className="tasks-card"
            style={{
              marginTop:
                "20px",
            }}
          >
            <h3>
              AI Advice
            </h3>

            <p>
              {
                answer
              }
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default AIAssistant;