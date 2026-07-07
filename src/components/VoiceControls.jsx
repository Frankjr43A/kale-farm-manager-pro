import { useState } from "react";

import {
  startListening,
  stopListening,
  speak,
} from "../services/voiceAssistant";

function VoiceControls({
  onTranscript,
  answer,
}) {
  const [recognition,
    setRecognition] =
    useState(null);

  const [listening,
    setListening] =
    useState(false);

  function handleStart() {
    if (listening) return;

    const instance =
      startListening(
        (text) => {
          onTranscript(text);
          setListening(
            false
          );
        },
        (error) => {
          console.log(
            error
          );

          setListening(
            false
          );
        }
      );

    if (instance) {
      setRecognition(
        instance
      );
      setListening(
        true
      );
    }
  }

  function handleStop() {
    stopListening(
      recognition
    );

    setListening(
      false
    );
  }

  function handleRepeat() {
    if (answer) {
      speak(answer);
    }
  }

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <h3>
        🎤 Voice Assistant
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        <button
          type="button"
          onClick={
            handleStart
          }
          disabled={
            listening
          }
        >
          {listening
            ? "🎤 Listening..."
            : "🎤 Start Listening"}
        </button>

        <button
          type="button"
          onClick={
            handleStop
          }
          disabled={
            !listening
          }
        >
          ⏹ Stop
        </button>

        <button
          type="button"
          onClick={
            handleRepeat
          }
          disabled={
            !answer
          }
        >
          🔊 Repeat Answer
        </button>
      </div>

      {listening && (
        <p
          style={{
            marginTop:
              "10px",
            fontWeight:
              "bold",
          }}
        >
          🎤 Listening...
          Please speak now.
        </p>
      )}
    </div>
  );
}

export default VoiceControls;