/*
==========================================================

Farm Manager Pro

Module : Market Module

Page : Market Dashboard

Version : 2.1.0

Developer : Francis Junior

==========================================================
*/

import useMarket from "../../hooks/useMarket";

import SearchBar from "../../components/market/SearchBar";
import CountyFilter from "../../components/market/CountyFilter";
import CategoryFilter from "../../components/market/CategoryFilter";
import SortFilter from "../../components/market/SortFilter";
import MarketSummary from "../../components/market/MarketSummary";
import PriceCard from "../../components/market/PriceCard";

function MarketDashboard() {
  const {
    loading,
    marketData,

    search,
    setSearch,

    county,
    setCounty,

    category,
    setCategory,

    sortField,
    setSortField,

    reloadMarket,
  } = useMarket();

  if (loading) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>📈 Market Dashboard</h2>

          <p>Loading market data...</p>
        </div>
      </main>
    );
  }

  if (!marketData) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>📈 Market Dashboard</h2>

          <p>No market data available.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">

        <h2>📈 Market Dashboard</h2>

        <p>
          Stay updated with market prices,
          trends and opportunities.
        </p>

      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search crop..."
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "15px",
        }}
      >
        <CountyFilter
          counties={marketData.counties}
          value={county}
          onChange={setCounty}
        />

        <CategoryFilter
          categories={marketData.categories}
          value={category}
          onChange={setCategory}
        />
                <SortFilter
          value={sortField}
          onChange={setSortField}
        />
      </div>

      <div
        className="farm-card"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={reloadMarket}
          className="save-btn"
        >
          🔄 Refresh Market
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <MarketSummary
          marketData={marketData}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h2>🌾 Latest Market Prices</h2>

        {marketData.prices.length === 0 ? (
          <div className="farm-card">
            <p>
              No market prices match your
              current filters.
            </p>
          </div>
        ) : (
          marketData.prices.map((item) => (
            <PriceCard
              key={item.id}
              crop={item.crop}
              county={item.county}
              category={item.category}
              price={item.price}
              unit={item.unit}
              trend={item.trend}
              change={item.change}
              updated={item.updated}
              currency={marketData.currency}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default MarketDashboard;