import {
  useEffect,
  useState,
} from "react";

function DiseaseHistory() {
  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [];

    setHistory(saved);
  }, []);

  function deleteRecord(id) {
    const updated =
      history.filter(
        (record) =>
          record.id !== id
      );

    setHistory(updated);

    localStorage.setItem(
      "disease-history",
      JSON.stringify(
        updated
      )
    );
  }

  return (
    <main className="dashboard">
      <h2>
        📋 Disease History
      </h2>

      {history.length ===
      0 ? (
        <section className="tasks-card">
          <p>
            No disease
            history yet.
          </p>
        </section>
      ) : (
        history.map(
          (record) => (
            <section
              key={
                record.id
              }
              className="farm-card"
            >
              {record.photo && (
                <img
                  src={
                    record.photo
                  }
                  alt="Diagnosis"
                  style={{
                    width:
                      "100%",
                    maxHeight:
                      "250px",
                    objectFit:
                      "cover",
                    borderRadius:
                      "12px",
                    marginBottom:
                      "15px",
                  }}
                />
              )}

              <h3>
                🌱{" "}
                {
                  record.crop
                }
              </h3>

              <p>
                🦠{" "}
                {
                  record.disease
                }
              </p>

              <p>
                📝{" "}
                {
                  record.symptoms
                }
              </p>

              <p>
                💡{" "}
                {
                  record.recommendation
                }
              </p>

              <p>
                🕒{" "}
                {
                  record.date
                }
              </p>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteRecord(
                    record.id
                  )
                }
              >
                🗑 Delete
              </button>
            </section>
          )
        )
      )}
    </main>
  );
}

export default DiseaseHistory;