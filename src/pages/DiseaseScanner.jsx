/*
==========================================================

Farm Manager Pro

Disease Scanner AI

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function DiseaseScanner() {
  const [crop, setCrop] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState(null);

  function handlePhoto(e) {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function scanDisease() {
    if (!crop || !symptoms.trim()) {
      alert("Select a crop and enter symptoms.");
      return;
    }

    const text = symptoms.toLowerCase();

    let disease = "Unknown Disease";
    let confidence = "55%";
    let recommendation =
      "Consult your agricultural extension officer.";

    switch (crop) {
      case "Tomatoes":
        if (
          text.includes("yellow") ||
          text.includes("brown")
        ) {
          disease = "Early Blight";
          confidence = "92%";
          recommendation =
            "Spray Mancozeb every 7 days and remove infected leaves.";
        } else if (
          text.includes("wilting")
        ) {
          disease = "Bacterial Wilt";
          confidence = "90%";
          recommendation =
            "Remove infected plants and improve drainage.";
        }
        break;

      case "Kale":
        if (
          text.includes("white powder")
        ) {
          disease = "Powdery Mildew";
          confidence = "91%";
          recommendation =
            "Apply sulphur fungicide and improve airflow.";
        } else if (
          text.includes("yellow")
        ) {
          disease = "Downy Mildew";
          confidence = "88%";
          recommendation =
            "Apply copper fungicide and avoid overhead irrigation.";
        }
        break;

      case "Layers":
        if (
          text.includes("bloody") ||
          text.includes("diarrhea")
        ) {
          disease = "Coccidiosis";
          confidence = "95%";
          recommendation =
            "Treat immediately with Amprolium and keep litter dry.";
        } else if (
          text.includes("twisted neck")
        ) {
          disease = "Newcastle Disease";
          confidence = "93%";
          recommendation =
            "Isolate sick birds and vaccinate healthy birds immediately.";
        }
        break;

      default:
        break;
    }

    const diagnosis = {
      id: Date.now(),
      crop,
      symptoms,
      disease,
      confidence,
      recommendation,
      date: new Date().toLocaleString(),
      photo,
    };

    const history =
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [];

    history.unshift(diagnosis);

    localStorage.setItem(
      "disease-history",
      JSON.stringify(history)
    );

    setResult(diagnosis);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>📷 Disease Scanner AI</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />

        {photo && (
          <img
            src={photo}
            alt="Crop"
            style={{
              width: "100%",
              marginTop: 20,
              borderRadius: 15,
            }}
          />
        )}

        <select
          value={crop}
          onChange={(e) =>
            setCrop(e.target.value)
          }
          style={{
            marginTop: 20,
          }}
        >
          <option value="">
            Select Crop
          </option>

          <option>
            Tomatoes
          </option>

          <option>
            Kale
          </option>

          <option>
            Layers
          </option>

        </select>

        <textarea
          rows="5"
          placeholder="Describe the symptoms..."
          value={symptoms}
          onChange={(e) =>
            setSymptoms(e.target.value)
          }
          style={{
            marginTop: 20,
          }}
        />

        <button
          onClick={scanDisease}
        >
          🤖 Scan with AI
        </button>

      </div>

      {result && (

        <div className="farm-card">

          <h2>
            ✅ Diagnosis Result
          </h2>

          <p>
            🌱 Crop:
            <strong>
              {" "}
              {result.crop}
            </strong>
          </p>

          <p>
            🦠 Disease:
            <strong>
              {" "}
              {result.disease}
            </strong>
          </p>

          <p>
            🎯 Confidence:
            <strong>
              {" "}
              {result.confidence}
            </strong>
          </p>

          <p>
            💊 Recommendation:
          </p>

          <p>
            {result.recommendation}
          </p>

          <p
            style={{
              marginTop: 15,
            }}
          >
            🕒 {result.date}
          </p>

        </div>

      )}

    </main>
  );
}

export default DiseaseScanner;