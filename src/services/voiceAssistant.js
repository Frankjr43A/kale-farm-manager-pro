export function speak(text) {
  if (!("speechSynthesis" in window)) {
    console.log(
      "Text-to-speech not supported."
    );
    return;
  }

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  utterance.lang = "en-US";
  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(
    utterance
  );
}

export function startListening(
  onResult,
  onError
) {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    if (onError) {
      onError(
        "Speech recognition is not supported on this device."
      );
    }
    return null;
  }

  const recognition =
    new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults =
    false;
  recognition.maxAlternatives =
    1;

  recognition.onresult =
    (event) => {
      const text =
        event.results[0][0]
          .transcript;

      if (onResult) {
        onResult(text);
      }
    };

  recognition.onerror =
    (event) => {
      if (onError) {
        onError(
          event.error
        );
      }
    };

  recognition.start();

  return recognition;
}

export function stopListening(
  recognition
) {
  if (recognition) {
    recognition.stop();
  }
}