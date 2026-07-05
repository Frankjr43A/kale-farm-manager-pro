import {
  useEffect,
  useState,
} from "react";

function Livestock() {
  const [records,
    setRecords] =
    useState([]);

  const [form,
    setForm] =
    useState({
      date: "",
      birds: "",
      eggs: "",
      feed: "",
      deaths: "",
      notes: "",
    });

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "livestock"
        )
      ) || [];

    setRecords(saved);
  }, []);

  function handleChange(
    e
  ) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }

  function saveRecord(
    e
  ) {
    e.preventDefault();

    const newRecord = {
      id:
        Date.now(),
      ...form,
    };

    const updated = [
      ...records,
      newRecord,
    ];

    setRecords(
      updated
    );

    localStorage.setItem(
      "livestock",
      JSON.stringify(
        updated
      )
    );

    setForm({
      date: "",
      birds: "",
      eggs: "",
      feed: "",
      deaths: "",
      notes: "",
    });
  }

  function deleteRecord(
    id
  ) {
    const updated =
      records.filter(
        (record) =>
          record.id !==
          id
      );

    setRecords(
      updated
    );

    localStorage.setItem(
      "livestock",
      JSON.stringify(
        updated
      )
    );
  }

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={
          saveRecord
        }
      >
        <h2>
          🐔 Livestock
          Manager
        </h2>

        <input
          type="date"
          name="date"
          value={
            form.date
          }
          onChange={
            handleChange
          }
          required
        />

        <input
          type="number"
          name="birds"
          placeholder="Number of Birds"
          value={
            form.birds
          }
          onChange={
            handleChange
          }
        />

        <input
          type="number"
          name="eggs"
          placeholder="Eggs Collected"
          value={
            form.eggs
          }
          onChange={
            handleChange
          }
        />

        <input
          type="number"
          name="feed"
          placeholder="Feed Used (Kg)"
          value={
            form.feed
          }
          onChange={
            handleChange
          }
        />

        <input
          type="number"
          name="deaths"
          placeholder="Bird Deaths"
          value={
            form.deaths
          }
          onChange={
            handleChange
          }
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={
            form.notes
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          ➕ Save Record
        </button>
      </form>

      <section
        className="tasks-card"
      >
        <h3>
          Livestock Records
        </h3>

        {records.length ===
        0 ? (
          <p>
            No livestock
            records yet.
          </p>
        ) : (
          records.map(
            (record) => (
              <div
                key={
                  record.id
                }
                className="farm-card"
              >
                <h3>
                  📅{" "}
                  {
                    record.date
                  }
                </h3>

                <p>
                  🐔 Birds:
                  {" "}
                  {
                    record.birds
                  }
                </p>

                <p>
                  🥚 Eggs:
                  {" "}
                  {
                    record.eggs
                  }
                </p>

                <p>
                  🌽 Feed:
                  {" "}
                  {
                    record.feed
                  }
                  {" "}
                  Kg
                </p>

                <p>
                  💀 Deaths:
                  {" "}
                  {
                    record.deaths
                  }
                </p>

                <p>
                  📝{" "}
                  {
                    record.notes
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
              </div>
            )
          )
        )}
      </section>
    </main>
  );
}

export default Livestock;