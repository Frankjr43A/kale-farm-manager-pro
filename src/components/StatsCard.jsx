function StatsCard({ label, value, color }) {
  return (
    <div
      className="stats-card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h2>{value}</h2>

      <p>{label}</p>
    </div>
  );
}

export default StatsCard;