function ExpenseCard({
  expense,
  onDelete,
}) {
  return (
    <div className="farm-card">
      <h3>💸 {expense.name}</h3>

      <p>
        <strong>Category:</strong>{" "}
        {expense.category}
      </p>

      <p>
        <strong>Amount:</strong> KES{" "}
        {expense.amount}
      </p>

      <button
        className="delete-btn"
        onClick={() =>
          onDelete(expense.id)
        }
      >
        🗑 Delete
      </button>
    </div>
  );
}

export default ExpenseCard;