function Reports() {
  const expenses =
    JSON.parse(
      localStorage.getItem(
        "expenses"
      )
    ) || [];

  const incomes =
    JSON.parse(
      localStorage.getItem(
        "incomes"
      )
    ) || [];

  const totalExpenses =
    expenses.reduce(
      (total, expense) =>
        total +
        Number(expense.amount),
      0
    );

  const totalIncome =
    incomes.reduce(
      (total, income) =>
        total +
        Number(income.amount),
      0
    );

  const profit =
    totalIncome -
    totalExpenses;

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          💰 Total Income
        </h2>

        <h1>
          KES{" "}
          {totalIncome.toLocaleString()}
        </h1>
      </div>

      <div
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h2>
          💸 Total Expenses
        </h2>

        <h1>
          KES{" "}
          {totalExpenses.toLocaleString()}
        </h1>
      </div>

      <div
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h2>
          📈 Net Profit
        </h2>

        <h1>
          KES{" "}
          {profit.toLocaleString()}
        </h1>
      </div>
    </main>
  );
}

export default Reports;