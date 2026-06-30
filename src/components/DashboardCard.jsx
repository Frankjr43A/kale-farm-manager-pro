import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <main className="dashboard">

      <section className="welcome-card">
        <h2>👋 Good Afternoon, Francis</h2>
        <p>Welcome back to Farm Manager Pro.</p>
      </section>

      <section className="dashboard-grid">

        <DashboardCard
          icon="💰"
          title="Income"
          value="KES 0.00"
        />

        <DashboardCard
          icon="💸"
          title="Expenses"
          value="KES 0.00"
        />

        <DashboardCard
          icon="🥬"
          title="Harvest"
          value="0 kg"
        />

        <DashboardCard
          icon="📦"
          title="Inventory"
          value="0 Items"
        />

      </section>

      <section className="tasks-card">
        <h3>📅 Today's Tasks</h3>

        <ul>
          <li>✅ Inspect Kale Field</li>
          <li>💧 Irrigation</li>
          <li>🧪 Apply Fertilizer</li>
        </ul>
      </section>

    </main>
  );
}

export default Dashboard;