function FarmCard({ farm, onDelete }) {
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

      <button
        className="delete-btn"
        onClick={() => onDelete(farm.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default FarmCard;