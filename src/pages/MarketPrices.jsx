import { useState } from "react";

import MarketLocationSelector from "../components/MarketLocationSelector";

import {
  getCurrentMarket,
  getCurrentPrices,
  getMarketPrices,
} from "../services/marketPriceService";

import {
  syncMarketPrices,
  getLastMarketUpdate,
} from "../services/marketSyncService";

function MarketPrices() {
  const [message,
    setMessage] =
    useState("");

  const market =
    getCurrentMarket();

  const prices =
    getCurrentPrices();

  const allMarkets =
    getMarketPrices();

  const lastUpdated =
    getLastMarketUpdate();

  async function handleSync() {
    setMessage(
      "Synchronizing market prices..."
    );

    const result =
      await syncMarketPrices();

    setMessage(
      result.message
    );

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  if (!prices) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>
            💹 Market Prices
          </h2>

          <MarketLocationSelector />

          <button
            onClick={
              handleSync
            }
          >
            🔄 Update Prices
          </button>

          <p>
            {message}
          </p>

          <p>
            No market data
            available.
          </p>
        </div>
      </main>
    );
  }

  const currency =
    allMarkets[
      market.country
    ].currency;

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          💹 Market Prices
        </h2>

        <MarketLocationSelector />

        <div
          className="tasks-card"
          style={{
            marginTop:
              "15px",
          }}
        >
          <p>
            📍{" "}
            {market.region},
            {" "}
            {market.country}
          </p>

          <p>
            📅 Last Updated:
            {" "}
            {lastUpdated ===
            "Never"
              ? "Never"
              : new Date(
                  lastUpdated
                ).toLocaleString()}
          </p>

          <button
            onClick={
              handleSync
            }
          >
            🔄 Update Prices
          </button>

          {message && (
            <p
              style={{
                marginTop:
                  "10px",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {Object.entries(
          prices
        ).map(
          ([name, item]) => (
            <div
              key={name}
              className="tasks-card"
              style={{
                marginTop:
                  "15px",
              }}
            >
              <h3>
                {name
                  .charAt(
                    0
                  )
                  .toUpperCase() +
                  name.slice(
                    1
                  )}
              </h3>

              <p>
                💰{" "}
                {currency}
                {" "}
                {
                  item.price
                }
                {" "}
                {
                  item.unit
                }
              </p>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default MarketPrices;