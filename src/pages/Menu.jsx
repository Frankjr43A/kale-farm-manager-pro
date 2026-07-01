import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>☰ Farm Manager Menu</h2>

        <div className="menu-links">
          <NavLink to="/dashboard">
            🏠 Dashboard
          </NavLink>

          <NavLink to="/farms">
            🚜 Farms
          </NavLink>

          <NavLink to="/fields">
            🌾 Fields
          </NavLink>

          <NavLink to="/crops">
            🥬 Crops
          </NavLink>

          <NavLink to="/finance">
            💸 Finance
          </NavLink>

          <NavLink to="/income">
            💰 Income
          </NavLink>

          <NavLink to="/harvests">
            🥬 Harvests
          </NavLink>

          <NavLink to="/activities">
            📅 Activities
          </NavLink>

          <NavLink to="/weather">
            🌤 Weather
          </NavLink>

          <NavLink to="/analytics">
            📊 Analytics
          </NavLink>

          <NavLink to="/reports">
            📄 Reports
          </NavLink>

          <NavLink to="/pdf-reports">
            📄 PDF Reports
          </NavLink>

          <NavLink to="/inventory">
            📦 Inventory
          </NavLink>

          <NavLink to="/inventory-report">
            📄 Inventory Report
          </NavLink>

          <NavLink to="/inventory-analytics">
            📊 Inventory Analytics
          </NavLink>

          <NavLink to="/backup">
            ☁️ Backup & Restore
          </NavLink>

          <NavLink to="/settings">
            ⚙️ Settings
          </NavLink>
        </div>
      </div>
    </main>
  );
}

export default Menu;