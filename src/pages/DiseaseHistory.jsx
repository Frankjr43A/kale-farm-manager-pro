/*
==========================================================

Farm Manager Pro

Disease History

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useEffect, useState } from "react";

function DiseaseHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  function loadHistory() {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [];

    setHistory(saved);
  }

  function deleteRecord(id) {
    const updated = history.filter(
      (item) => item.id !== id
    );

    setHistory(updated);

    localStorage.setItem(
      "disease-history",
      JSON.stringify(updated)
    );
  }

  function clearHistory() {
    if (
      !window.confirm(
        "Delete all disease history?"
      )
    ) {
      return;
    }

    localStorage.removeItem(
      "disease-history"
    );

    setHistory([]);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>
          📋 Disease History
        </h2>

        <p>
          Total Records:
          <strong>
            {" "}
            {history.length}
          </strong>
        </p>

        {history.length > 0 && (
          <button
            className="delete-btn"
            onClick={clearHistory}
            style={{
              marginTop: "15px",
            }}
          >
            🗑 Clear History
          </button>
        )}

      </div>

      {history.length === 0 ? (

        <div className="tasks-card">

          <h3>
            ✅ No Records
          </h3>

          <p>
            Disease scans will appear here.
          </p>

        </div>

      ) : (

        history.map((record) => (

          <div
            key={record.id}
            className="farm-card"
          >

            {record.photo && (
              <img
                src={record.photo}
                alt={record.disease}
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              />
            )}

            <h3>
              🌱 {record.crop}
            </h3>

            <p>
              <strong>Disease:</strong>{" "}
              {record.disease}
            </p>

            {record.confidence && (
              <p>
                <strong>
                  Confidence:
                </strong>{" "}
                {record.confidence}
              </p>
            )}

            <p>
              <strong>
                Symptoms:
              </strong>{" "}
              {record.symptoms}
            </p>

            <p>
              <strong>
                Recommendation:
              </strong>{" "}
              {record.recommendation}
            </p>

            <p>
              <strong>Date:</strong>{" "}
              {record.date}
            </p>

            <button
              className="delete-btn"
              onClick={() =>
                deleteRecord(record.id)
              }
            >
              🗑 Delete
            </button>

          </div>

        ))

      )}

    </main>
  );
}

export default DiseaseHistory;