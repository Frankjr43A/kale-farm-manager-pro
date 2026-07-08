import { useState } from "react";
import { stopSpeaking } from "../services/voiceAssistant";

function VoiceControls({
  onTranscript,
}) {
  const [listening, setListening] =
    useState(false);

  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Speech recognition is not supported on this device."
      );
      return;
    }

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setListening(true);

    recognition.start();

    recognition.onresult = (
      event
    ) => {
      const text =
        event.results[0][0]
          .transcript;

      onTranscript(text);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <button
        type="button"
        onClick={startListening}
      >
        {listening
          ? "🎤 Listening..."
          : "🎤 Voice Input"}
      </button>

      <button
        type="button"
        onClick={stopSpeaking}
      >
        🔇 Stop Voice
      </button>
    </div>
  );
}

export default VoiceControls;