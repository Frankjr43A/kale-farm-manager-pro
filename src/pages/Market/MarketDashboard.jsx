// src/pages/Market/MarketDashboard.jsx

import useMarket from "../../hooks/useMarket";
import MarketSummary from "../../components/market/MarketSummary";
import PriceCard from "../../components/market/PriceCard";

function MarketDashboard() {
  const {
    loading,
    marketData,
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

  if (
    !marketData ||
    !marketData.prices
  ) {
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
      <MarketSummary
        marketData={marketData}
      />

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <h2>🌾 Latest Market Prices</h2>

        {marketData.prices.map(
          (item) => (
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
              currency={
                marketData.currency
              }
            />
          )
        )}
      </div>
    </main>
  );
}

export default MarketDashboard;