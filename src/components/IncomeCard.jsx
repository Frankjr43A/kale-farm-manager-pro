function IncomeCard({ income, onDelete }) {
  return (
    <div className="farm-card">
      <h3>💰 {income.name}</h3>

      <p>
        <strong>Category:</strong> {income.category}
      </p>

      <p>
        <strong>Amount:</strong> KES {income.amount}
      </p>

      <button
        className="delete-btn"
        onClick={() => onDelete(income.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default IncomeCard;