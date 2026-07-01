function FieldCard({ field, onDelete }) {
  return (
    <div className="farm-card">
      <h3>🌾 {field.name}</h3>

      <p>
        <strong>Farm:</strong> {field.farm}
      </p>

      <p>
        <strong>Size:</strong> {field.size} Acres
      </p>

      <button
        className="delete-btn"
        onClick={() => onDelete(field.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default FieldCard;