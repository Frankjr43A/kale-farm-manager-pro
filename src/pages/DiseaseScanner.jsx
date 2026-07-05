import { useState } from "react";

function DiseaseScanner() {
  const [crop, setCrop] =
    useState("");

  const [symptoms, setSymptoms] =
    useState("");

  const [photo, setPhoto] =
    useState("");

  const [result, setResult] =
    useState(null);

  function handlePhoto(e) {
    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  }

  function scanDisease() {
    const text =
      symptoms.toLowerCase();

    let disease =
      "Unknown Disease";

    let recommendation =
      "Consult an agricultural extension officer.";

    if (
      crop === "Tomatoes"
    ) {
      if (
        text.includes(
          "yellow"
        ) ||
        text.includes(
          "brown spots"
        )
      ) {
        disease =
          "Early Blight";

        recommendation =
          "Spray Mancozeb every 7 days and remove infected leaves.";
      } else if (
        text.includes(
          "wilting"
        )
      ) {
        disease =
          "Bacterial Wilt";

        recommendation =
          "Remove infected plants and improve drainage.";
      }
    }

    if (crop === "Kale") {
      if (
        text.includes(
          "white powder"
        )
      ) {
        disease =
          "Powdery Mildew";

        recommendation =
          "Apply sulphur fungicide and improve air circulation.";
      } else if (
        text.includes(
          "yellow"
        )
      ) {
        disease =
          "Downy Mildew";

        recommendation =
          "Spray copper fungicide and avoid overhead irrigation.";
      }
    }

    if (
      crop === "Layers"
    ) {
      if (
        text.includes(
          "bloody"
        ) ||
        text.includes(
          "diarrhea"
        )
      ) {
        disease =
          "Coccidiosis";

        recommendation =
          "Treat with Amprolium and keep litter dry.";
      } else if (
        text.includes(
          "twisted neck"
        )
      ) {
        disease =
          "Newcastle Disease";

        recommendation =
          "Isolate affected birds and vaccinate healthy birds immediately.";
      }
    }

    const diagnosis = {
      id: Date.now(),
      crop,
      symptoms,
      disease,
      recommendation,
      date:
        new Date().toLocaleString(),
      photo,
    };

    const history =
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [];

    history.unshift(
      diagnosis
    );

    localStorage.setItem(
      "disease-history",
      JSON.stringify(
        history
      )
    );

    setResult(
      diagnosis
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          📷 Disease Scanner
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={
            handlePhoto
          }
        />

        {photo && (
          <img
            src={photo}
            alt="Crop"
            style={{
              width: "100%",
              marginTop:
                "20px",
              borderRadius:
                "15px",
            }}
          />
        )}

        <select
          value={crop}
          onChange={(e) =>
            setCrop(
              e.target.value
            )
          }
          style={{
            marginTop:
              "20px",
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
          placeholder="Describe symptoms..."
          value={symptoms}
          onChange={(e) =>
            setSymptoms(
              e.target.value
            )
          }
          style={{
            marginTop:
              "20px",
          }}
        />

        <button
          onClick={
            scanDisease
          }
        >
          🔍 Scan Disease
        </button>
      </div>

      {result && (
        <div className="tasks-card">
          <h3>
            Diagnosis Result
          </h3>

          <p>
            🌱 Crop:
            {" "}
            {
              result.crop
            }
          </p>

          <p>
            🦠 Disease:
            {" "}
            {
              result.disease
            }
          </p>

          <p>
            💡 Recommendation:
            {" "}
            {
              result.recommendation
            }
          </p>

          <p>
            🕒
            {" "}
            {
              result.date
            }
          </p>
        </div>
      )}
    </main>
  );
}

export default DiseaseScanner;