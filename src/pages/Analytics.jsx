function Analytics() {
  const expenses =
    JSON.parse(
      localStorage.getItem("expenses")
    ) || [];

  const incomes =
    JSON.parse(
      localStorage.getItem("incomes")
    ) || [];

  const harvests =
    JSON.parse(
      localStorage.getItem("harvests")
    ) || [];

  const totalExpenses =
    expenses.reduce(
      (total, expense) =>
        total + Number(expense.amount),
      0
    );

  const totalIncome =
    incomes.reduce(
      (total, income) =>
        total + Number(income.amount),
      0
    );

  const totalHarvest =
    harvests.reduce(
      (total, harvest) =>
        total +
        Number(harvest.income),
      0
    );

  const profit =
    totalIncome -
    totalExpenses;

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>📊 Analytics</h2>

        <p style={{ marginTop: 20 }}>
          💰 Income:
          {" "}
          KES {totalIncome.toLocaleString()}
        </p>

        <p style={{ marginTop: 15 }}>
          💸 Expenses:
          {" "}
          KES {totalExpenses.toLocaleString()}
        </p>

        <p style={{ marginTop: 15 }}>
          📈 Profit:
          {" "}
          KES {profit.toLocaleString()}
        </p>

        <p style={{ marginTop: 15 }}>
          🥬 Harvest Income:
          {" "}
          KES {totalHarvest.toLocaleString()}
        </p>
      </div>
    </main>
  );
}

export default Analytics;