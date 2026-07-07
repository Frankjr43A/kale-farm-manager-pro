import { useState } from "react";

import useMarketReports from "../hooks/useMarketReports";

function MarketReports() {
  const {
    reports,
    loading,
    addReport,
  } = useMarketReports();

  const [item, setItem] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [market, setMarket] =
    useState("");

  async function saveReport(
    e
  ) {
    e.preventDefault();

    if (
      !item ||
      !price ||
      !market
    ) {
      return;
    }

    const report = {
      id: Date.now(),
      item,
      price:
        Number(price),
      market,
      date:
        new Date().toLocaleString(),
    };

    const result =
      await addReport(
        report
      );

    if (
      result.success
    ) {
      setItem("");
      setPrice("");
      setMarket("");
    }
  }

  function deleteReport(
    id
  ) {
    const updated =
      reports.filter(
        (
          report
        ) =>
          report.id !==
          id
      );

    localStorage.setItem(
      "marketReports",
      JSON.stringify(
        updated
      )
    );

    window.location.reload();
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          👥 Community Market Reports
        </h2>

        <p>
          Submit local
          market prices and
          help farmers
          worldwide.
        </p>

        <form
          className="farm-form"
          onSubmit={
            saveReport
          }
        >
          <input
            type="text"
            placeholder="Item (Tomatoes)"
            value={item}
            onChange={(
              e
            ) =>
              setItem(
                e.target
                  .value
              )
            }
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(
              e
            ) =>
              setPrice(
                e.target
                  .value
              )
            }
          />

          <input
            type="text"
            placeholder="Market (Siaya)"
            value={market}
            onChange={(
              e
            ) =>
              setMarket(
                e.target
                  .value
              )
            }
          />

          <button
            type="submit"
          >
            ➕ Submit Price
          </button>
        </form>

        <h3
          style={{
            marginTop:
              "30px",
          }}
        >
          🌍 Community Prices
        </h3>

        {loading ? (
          <p>
            Loading market
            reports...
          </p>
        ) : reports.length ===
          0 ? (
          <p>
            No reports yet.
          </p>
        ) : (
          reports.map(
            (
              report
            ) => (
              <div
                key={
                  report.id
                }
                className="tasks-card"
                style={{
                  marginTop:
                    "15px",
                }}
              >
                <h3>
                  {
                    report.item
                  }
                </h3>

                <p>
                  💰{" "}
                  {
                    report.price
                  }
                </p>

                <p>
                  📍{" "}
                  {
                    report.market
                  }
                </p>

                <p>
                  🕒{" "}
                  {
                    report.date
                  }
                </p>

                <button
                  onClick={() =>
                    deleteReport(
                      report.id
                    )
                  }
                >
                  🗑 Delete
                </button>
              </div>
            )
          )
        )}
      </div>
    </main>
  );
}

export default MarketReports;