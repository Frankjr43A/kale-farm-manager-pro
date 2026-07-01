import DashboardCard from "../components/DashboardCard";

function Dashboard() {
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

  const farms =
    JSON.parse(
      localStorage.getItem("farms")
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

  const totalHarvestIncome =
    harvests.reduce(
      (total, harvest) =>
        total + Number(harvest.income),
      0
    );

  const profit =
    totalIncome - totalExpenses;

  return (
    <main className="dashboard">
      <section className="welcome-card">
        <h2>
          👋 Good Afternoon, Francis
        </h2>

        <p>
          Welcome back to Farm Manager Pro.
        </p>
      </section>

      <section className="dashboard-grid">
        <DashboardCard
          icon="💰"
          title="Income"
          value={`KES ${totalIncome.toLocaleString()}`}
        />

        <DashboardCard
          icon="💸"
          title="Expenses"
          value={`KES ${totalExpenses.toLocaleString()}`}
        />

        <DashboardCard
          icon="📈"
          title="Profit"
          value={`KES ${profit.toLocaleString()}`}
        />

        <DashboardCard
          icon="🥬"
          title="Harvest"
          value={`KES ${totalHarvestIncome.toLocaleString()}`}
        />

        <DashboardCard
          icon="🚜"
          title="Farms"
          value={farms.length}
        />
      </section>

      <section className="tasks-card">
        <h3>📅 Today's Tasks</h3>

        <ul>
          <li>🥬 Inspect Kale Field</li>
          <li>💧 Irrigation</li>
          <li>🧪 Apply Fertilizer</li>
        </ul>
      </section>
    </main>
  );
}

export default Dashboard;