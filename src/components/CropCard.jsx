function CropCard({ crop, onDelete }) {
  return (
    <div className="farm-card">
      <h3>🥬 {crop.name}</h3>

      <p>
        <strong>Farm:</strong> {crop.farm}
      </p>

      <p>
        <strong>Field:</strong> {crop.field}
      </p>

      <p>
        <strong>Area:</strong> {crop.area} Acres
      </p>

      <button
        className="delete-btn"
        onClick={() => onDelete(crop.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default CropCard;