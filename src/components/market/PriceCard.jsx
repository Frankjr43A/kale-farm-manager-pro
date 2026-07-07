// src/components/market/PriceCard.jsx

function PriceCard({
  crop,
  county,
  category,
  price,
  unit,
  trend,
  change,
  updated,
  currency = "KES",
}) {
  function getTrendIcon() {
    switch (trend) {
      case "up":
        return "📈";

      case "down":
        return "📉";

      default:
        return "➖";
    }
  }

  function getTrendColor() {
    switch (trend) {
      case "up":
        return "green";

      case "down":
        return "red";

      default:
        return "#666";
    }
  }

  return (
    <div
      className="farm-card"
      style={{
        marginBottom: "15px",
      }}
    >
      <h3>
        🌱 {crop}
      </h3>

      <p>
        <strong>County:</strong>{" "}
        {county}
      </p>

      <p>
        <strong>Category:</strong>{" "}
        {category}
      </p>

      <p>
        <strong>Price:</strong>{" "}
        {currency} {price} / {unit}
      </p>

      <p
        style={{
          color: getTrendColor(),
          fontWeight: "bold",
        }}
      >
        {getTrendIcon()} {change}%
      </p>

      <p>
        <strong>Updated:</strong>{" "}
        {updated}
      </p>
    </div>
  );
}

export default PriceCard;