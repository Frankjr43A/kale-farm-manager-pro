/*
==========================================================

Farm Manager Pro

Production Voice Assistant

Version : 3.0.0

Developer : Francis Junior

==========================================================
*/

let synthesis = window.speechSynthesis;

export function speak(text) {
  if (!("speechSynthesis" in window)) return;

  synthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-US";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  const voices = synthesis.getVoices();

  const englishVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("en") &&
      !voice.localService
  ) || voices.find((voice) => voice.lang.startsWith("en"));

  if (englishVoice) {
    speech.voice = englishVoice;
  }

  synthesis.speak(speech);
}

export function stopSpeaking() {
  if ("speechSynthesis" in window) {
    synthesis.cancel();
  }
}

export function startListening(onResult) {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser.");
    return null;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const transcript =
      event.results[0][0].transcript;

    if (onResult) {
      onResult(transcript);
    }
  };

  recognition.onerror = (event) => {
    console.error("Voice Error:", event.error);
  };

  recognition.start();

  return recognition;
}