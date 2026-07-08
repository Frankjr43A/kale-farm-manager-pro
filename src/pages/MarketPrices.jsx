import { useEffect, useState } from "react";
import { getOfflineMarketPrices } from "../services/marketPriceService";

function MarketPrices() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    setPrices(getOfflineMarketPrices());
  }, []);

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>📈 Market Prices</h2>

        {prices.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3>{item.crop}</h3>

            <p>
              KES {item.price} / {item.unit}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MarketPrices;