/*
==========================================================

Farm Manager Pro

Page : Dashboard

Version : 2.2.0

Developer : Francis Junior

==========================================================
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import DashboardCard from "../components/DashboardCard";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import WeatherAlerts from "../components/WeatherAlerts";
import UpcomingActivities from "../components/UpcomingActivities";
import FarmNotifications from "../components/FarmNotifications";
import VaccinationReminders from "../components/VaccinationReminders";
import FarmCopilot from "../components/FarmCopilot";

import {
  playCopilotNarration,
} from "../services/copilotNarration";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const enabled = localStorage.getItem(
      "copilotNarration"
    );

    if (enabled !== "false") {
      const timer = setTimeout(() => {
        playCopilotNarration();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  const incomes =
    JSON.parse(localStorage.getItem("incomes")) || [];

  const harvests =
    JSON.parse(localStorage.getItem("harvests")) || [];

  const farms =
    JSON.parse(
      localStorage.getItem(
        "farm-manager-pro-farms"
      )
    ) || [];

  const inventory =
    JSON.parse(
      localStorage.getItem("inventory")
    ) || [];

  const totalExpenses = expenses.reduce(
    (t, e) => t + Number(e.amount || 0),
    0
  );

  const totalIncome = incomes.reduce(
    (t, i) => t + Number(i.amount || 0),
    0
  );

  const totalHarvestIncome =
    harvests.reduce(
      (t, h) => t + Number(h.income || 0),
      0
    );

  const profit =
    totalIncome - totalExpenses;

  const lowStockItems =
    inventory.filter(
      (item) =>
        Number(item.quantity) <= 2
    );

  const profile =
    JSON.parse(
      localStorage.getItem("profile")
    ) || {};

  const farmerName =
    profile.fullName || "Farmer";

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18)
    greeting = "Good Afternoon";

  return (
    <main className="dashboard">

      <section className="welcome-card">
        <h2>
          🌿 {greeting},{" "}
          {farmerName}
        </h2>

        <p>
          Welcome back to
          <strong>
            {" "}
            Farm Manager Pro
          </strong>
        </p>
      </section>

      <FarmCopilot />

      <section
        className="dashboard-grid"
        style={{
          marginTop: "20px",
        }}
      >
        <DashboardCard
          icon="💰"
          title="Income"
          value={`KES ${totalIncome.toLocaleString()}`}
          subtitle="Total"
          color="#2e7d32"
        />

        <DashboardCard
          icon="💸"
          title="Expenses"
          value={`KES ${totalExpenses.toLocaleString()}`}
          subtitle="Total"
          color="#d32f2f"
        />

        <DashboardCard
          icon="📈"
          title="Profit"
          value={`KES ${profit.toLocaleString()}`}
          subtitle="Net"
          color="#1565c0"
        />

        <DashboardCard
          icon="🥬"
          title="Harvest"
          value={`KES ${totalHarvestIncome.toLocaleString()}`}
          subtitle="Income"
          color="#43a047"
        />

        <DashboardCard
          icon="🚜"
          title="Farms"
          value={farms.length}
          subtitle="Registered"
          color="#6d4c41"
        />

        <DashboardCard
          icon="📦"
          title="Inventory"
          value={inventory.length}
          subtitle="Items"
          color="#fb8c00"
        />

        <DashboardCard
          icon="⚠️"
          title="Low Stock"
          value={lowStockItems.length}
          subtitle="Alerts"
          color="#e53935"
        />
      </section>

      <WeatherCard />

      <ForecastCard />

      <WeatherAlerts />

      <FarmNotifications />

      <VaccinationReminders />

      <UpcomingActivities />

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
        <h3>
          ⚡ Quick Actions
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "12px",
          }}
        >
          <button
            onClick={() =>
              navigate("/farms")
            }
          >
            🚜 Farms
          </button>

          <button
            onClick={() =>
              navigate("/market-dashboard")
            }
          >
            📈 Market
          </button>

          <button
            onClick={() =>
              navigate("/finance")
            }
          >
            💸 Finance
          </button>

          <button
            onClick={() =>
              navigate("/inventory")
            }
          >
            📦 Inventory
          </button>

          <button
            onClick={() =>
              navigate("/crop-calendar")
            }
          >
            📅 Calendar
          </button>

          <button
            onClick={() =>
              navigate("/disease-scanner")
            }
          >
            📷 Disease Scanner
          </button>

          <button
            onClick={() =>
              navigate("/ai-assistant")
            }
          >
            🤖 AI Assistant
          </button>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;