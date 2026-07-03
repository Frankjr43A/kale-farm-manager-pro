import DashboardCard from "../components/DashboardCard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

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

  const inventory =
    JSON.parse(
      localStorage.getItem("inventory")
    ) || [];

  const totalExpenses =
    expenses.reduce(
      (total, expense) =>
        total +
        Number(expense.amount || 0),
      0
    );

  const totalIncome =
    incomes.reduce(
      (total, income) =>
        total +
        Number(income.amount || 0),
      0
    );

  const totalHarvestIncome =
    harvests.reduce(
      (total, harvest) =>
        total +
        Number(harvest.income || 0),
      0
    );

  const profit =
    totalIncome - totalExpenses;

  const lowStockItems =
    inventory.filter(
      (item) =>
        Number(item.quantity) <= 2
    );

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

        <DashboardCard
          icon="📦"
          title="Inventory"
          value={inventory.length}
        />

        <DashboardCard
          icon="⚠️"
          title="Low Stock"
          value={lowStockItems.length}
        />
      </section>

      {lowStockItems.length > 0 && (
        <section className="tasks-card">
          <h3>
            ⚠️ Low Stock Alerts
          </h3>

          <ul>
            {lowStockItems.map(
              (item) => (
                <li key={item.id}>
                  📦 {item.name} (
                  {item.quantity})
                </li>
              )
            )}
          </ul>
        </section>
      )}

      <section className="tasks-card">
        <h3>📅 Today's Tasks</h3>

        <ul>
          <li>
            🥬 Inspect Kale Field
          </li>
          <li>
            💧 Irrigation
          </li>
          <li>
            🧪 Apply Fertilizer
          </li>
        </ul>
      </section>

      <button
        className="fab"
        popovertarget="quick-actions"
      >
        ＋
      </button>

      <div
        id="quick-actions"
        popover="auto"
        className="quick-actions"
      >
        <h3>⚡ Quick Actions</h3>

        <button
          onClick={() =>
            navigate("/farms")
          }
        >
          🚜 Add Farm
        </button>

        <button
          onClick={() =>
            navigate("/finance")
          }
        >
          💸 Add Expense
        </button>

        <button
          onClick={() =>
            navigate("/harvests")
          }
        >
          🥬 Add Harvest
        </button>

        <button
          onClick={() =>
            navigate("/ai-assistant")
          }
        >
          🤖 AI Assistant
        </button>

        <button>
          📷 Scan Disease
        </button>
      </div>
    </main>
  );
}

export default Dashboard;