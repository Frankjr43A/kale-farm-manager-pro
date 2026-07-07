// src/components/market/MarketSummary.jsx

function MarketSummary({ marketData }) {
  if (!marketData || !marketData.prices) {
    return (
      <div className="farm-card">
        <h2>📊 Market Summary</h2>
        <p>No market data available.</p>
      </div>
    );
  }

  const prices = marketData.prices;

  const totalProducts = prices.length;

  const averagePrice =
    totalProducts > 0
      ? (
          prices.reduce(
            (sum, item) => sum + Number(item.price),
            0
          ) / totalProducts
        ).toFixed(2)
      : 0;

  const trendingUp = prices.filter(
    (item) => item.trend === "up"
  ).length;

  const trendingDown = prices.filter(
    (item) => item.trend === "down"
  ).length;

  const counties = new Set(
    prices.map((item) => item.county)
  ).size;

  const lastUpdated =
    marketData.lastUpdated || "Unknown";

  return (
    <div className="farm-card">
      <h2>📊 Market Summary</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <div className="card-icon">📦</div>
          <h3>Total Products</h3>
          <h2>{totalProducts}</h2>
        </div>

        <div className="card">
          <div className="card-icon">💰</div>
          <h3>Average Price</h3>
          <h2>KES {averagePrice}</h2>
        </div>

        <div className="card">
          <div className="card-icon">📈</div>
          <h3>Trending Up</h3>
          <h2>{trendingUp}</h2>
        </div>

        <div className="card">
          <div className="card-icon">📉</div>
          <h3>Trending Down</h3>
          <h2>{trendingDown}</h2>
        </div>

        <div className="card">
          <div className="card-icon">🌍</div>
          <h3>Counties</h3>
          <h2>{counties}</h2>
        </div>

        <div className="card">
          <div className="card-icon">🕒</div>
          <h3>Last Updated</h3>
          <p
            style={{
              fontSize: "14px",
              marginTop: "10px",
            }}
          >
            {new Date(lastUpdated).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarketSummary;