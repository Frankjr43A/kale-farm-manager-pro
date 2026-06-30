import WeatherCard from "../components/WeatherCard";
import DashboardCard from "../components/DashboardCard";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  return (
    <main className="dashboard">

      <section className="welcome-card">
        <h2>👋 Welcome, Francis</h2>
        <p>Here's your farm overview for today.</p>
      </section>

      <WeatherCard />

      <section className="stats-grid">

        <StatsCard
          label="Active Crops"
          value="4"
          color="#4CAF50"
        />

        <StatsCard
          label="Workers"
          value="8"
          color="#2196F3"
        />

        <StatsCard
          label="Tasks"
          value="12"
          color="#FF9800"
        />

        <StatsCard
          label="Fields"
          value="3"
          color="#9C27B0"
        />

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
          <li>🌱 Plant kale seedlings</li>
          <li>💧 Irrigate Field A</li>
          <li>🧪 Apply fertilizer</li>
          <li>🚜 Prepare harvest records</li>
        </ul>
      </section>

    </main>
  );
}

export default Dashboard;