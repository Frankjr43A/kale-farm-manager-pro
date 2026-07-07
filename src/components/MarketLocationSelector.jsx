import { useState } from "react";

import {
  getMarketPrices,
  getCurrentMarket,
  setCurrentMarket,
} from "../services/marketPriceService";

function MarketLocationSelector() {
  const allMarkets =
    getMarketPrices();

  const current =
    getCurrentMarket();

  const [country,
    setCountry] =
    useState(
      current.country
    );

  const [region,
    setRegion] =
    useState(
      current.region
    );

  const countries =
    Object.keys(
      allMarkets
    );

  const regions =
    country
      ? Object.keys(
          allMarkets[
            country
          ].markets
        )
      : [];

  function handleCountry(
    e
  ) {
    const selected =
      e.target.value;

    setCountry(
      selected
    );

    const firstRegion =
      Object.keys(
        allMarkets[
          selected
        ].markets
      )[0];

    setRegion(
      firstRegion
    );
  }

  function saveLocation() {
    setCurrentMarket(
      country,
      region
    );

    window.location.reload();
  }

  return (
    <section className="tasks-card">
      <h3>
        📍 Market Location
      </h3>

      <div
        style={{
          marginTop:
            "15px",
        }}
      >
        <label>
          Country
        </label>

        <select
          value={
            country
          }
          onChange={
            handleCountry
          }
        >
          {countries.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>
      </div>

      <div
        style={{
          marginTop:
            "15px",
        }}
      >
        <label>
          Region
        </label>

        <select
          value={region}
          onChange={(
            e
          ) =>
            setRegion(
              e.target
                .value
            )
          }
        >
          {regions.map(
            (item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            )
          )}
        </select>
      </div>

      <button
        style={{
          marginTop:
            "20px",
        }}
        onClick={
          saveLocation
        }
      >
        💾 Save Location
      </button>

      <p
        style={{
          marginTop:
            "15px",
        }}
      >
        📍 Current:
        {" "}
        {country},
        {" "}
        {region}
      </p>
    </section>
  );
}

export default MarketLocationSelector;