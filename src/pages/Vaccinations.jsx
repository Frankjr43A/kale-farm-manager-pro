import {
  useEffect,
  useState,
} from "react";

function Vaccinations() {
  const [vaccines,
    setVaccines] =
    useState([]);

  const [form,
    setForm] =
    useState({
      vaccine: "",
      date: "",
      notes: "",
    });

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "vaccinations"
        )
      ) || [];

    setVaccines(saved);
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

  function saveVaccine(
    e
  ) {
    e.preventDefault();

    const newVaccine = {
      id:
        Date.now(),
      ...form,
    };

    const updated = [
      ...vaccines,
      newVaccine,
    ];

    setVaccines(
      updated
    );

    localStorage.setItem(
      "vaccinations",
      JSON.stringify(
        updated
      )
    );

    setForm({
      vaccine: "",
      date: "",
      notes: "",
    });
  }

  function deleteVaccine(
    id
  ) {
    const updated =
      vaccines.filter(
        (vaccine) =>
          vaccine.id !==
          id
      );

    setVaccines(
      updated
    );

    localStorage.setItem(
      "vaccinations",
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
          saveVaccine
        }
      >
        <h2>
          💉 Vaccination
          Schedule
        </h2>

        <input
          type="text"
          name="vaccine"
          placeholder="Vaccine Name"
          value={
            form.vaccine
          }
          onChange={
            handleChange
          }
          required
        />

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
          ➕ Save Vaccine
        </button>
      </form>

      <section className="tasks-card">
        <h3>
          Vaccination
          Schedule
        </h3>

        {vaccines.length ===
        0 ? (
          <p>
            No vaccination
            records yet.
          </p>
        ) : (
          vaccines.map(
            (
              vaccine
            ) => (
              <div
                key={
                  vaccine.id
                }
                className="farm-card"
              >
                <h3>
                  💉{" "}
                  {
                    vaccine.vaccine
                  }
                </h3>

                <p>
                  📅{" "}
                  {
                    vaccine.date
                  }
                </p>

                <p>
                  📝{" "}
                  {
                    vaccine.notes
                  }
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteVaccine(
                      vaccine.id
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

export default Vaccinations;