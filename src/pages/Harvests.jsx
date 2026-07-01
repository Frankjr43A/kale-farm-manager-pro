import { useEffect, useState } from "react";

function Harvests() {
  const [date, setDate] = useState("");
  const [leaves, setLeaves] = useState("");
  const [price, setPrice] = useState(2);
  const [harvests, setHarvests] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "harvests"
        )
      ) || [];

    setHarvests(saved);
  }, []);

  function saveHarvest(e) {
    e.preventDefault();

    if (!date || !leaves) return;

    const income =
      Number(leaves) *
      Number(price);

    const newHarvest = {
      id: Date.now(),
      date,
      leaves,
      price,
      income,
    };

    const updated = [
      ...harvests,
      newHarvest,
    ];

    setHarvests(updated);

    localStorage.setItem(
      "harvests",
      JSON.stringify(updated)
    );

    setDate("");
    setLeaves("");
  }

  function deleteHarvest(id) {
    const updated =
      harvests.filter(
        (h) => h.id !== id
      );

    setHarvests(updated);

    localStorage.setItem(
      "harvests",
      JSON.stringify(updated)
    );
  }

  const totalIncome =
    harvests.reduce(
      (total, h) =>
        total + h.income,
      0
    );

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={saveHarvest}
      >
        <h2>
          🥬 Record Harvest
        </h2>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Number of Leaves"
          value={leaves}
          onChange={(e) =>
            setLeaves(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Price per Leaf"
          value={price}
          onChange={(e) =>
            setPrice(
              e.target.value
            )
          }
        />

        <button type="submit">
          Save Harvest
        </button>
      </form>

      <div
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h2>
          Total Harvest Income
        </h2>

        <h1>
          KES{" "}
          {totalIncome.toLocaleString()}
        </h1>
      </div>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {harvests.map(
          (harvest) => (
            <div
              key={harvest.id}
              className="farm-card"
            >
              <h3>
                🥬 {harvest.date}
              </h3>

              <p>
                Leaves:{" "}
                {harvest.leaves}
              </p>

              <p>
                Income: KES{" "}
                {harvest.income.toLocaleString()}
              </p>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteHarvest(
                    harvest.id
                  )
                }
              >
                🗑 Delete
              </button>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default Harvests;