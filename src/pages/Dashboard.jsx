import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <main className="dashboard">
      <h2 style={{ marginBottom: "20px" }}>
        👋 Welcome, Francis
      </h2>

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
    </main>
  );
}

export default Dashboard;