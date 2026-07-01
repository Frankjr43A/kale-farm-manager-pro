function FarmCard({ farm }) {
  return (
    <div className="farm-card">
      <h3>🌿 {farm.name}</h3>

      <p>
        <strong>Owner:</strong> {farm.owner}
      </p>

      <p>
        <strong>County:</strong> {farm.county}
      </p>

      <p>
        <strong>Size:</strong> {farm.size} Acres
      </p>
    </div>
  );
}

export default FarmCard;