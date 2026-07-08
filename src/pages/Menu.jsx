/*
==========================================================

Farm Manager Pro

Professional Menu

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>☰ Farm Manager Pro</h2>

        <p>Professional Farm Management System</p>

      </div>

      <div className="farm-card">

        <h3>🏠 Dashboard</h3>

        <div className="menu-links">
          <NavLink to="/dashboard">📊 Dashboard</NavLink>
        </div>

      </div>

      <div className="farm-card">

        <h3>🚜 Farm Management</h3>

        <div className="menu-links">

          <NavLink to="/farms">
            🚜 Farms
          </NavLink>

          <NavLink to="/fields">
            🌾 Fields
          </NavLink>

          <NavLink to="/crops">
            🥬 Crops
          </NavLink>

          <NavLink to="/livestock">
            🐔 Livestock
          </NavLink>

          <NavLink to="/vaccinations">
            💉 Vaccinations
          </NavLink>

          <NavLink to="/crop-calendar">
            📅 Crop Calendar
          </NavLink>

        </div>

      </div>

      <div className="farm-card">

        <h3>📈 Market Intelligence</h3>

        <div className="menu-links">

          <NavLink to="/market-dashboard">
            📈 Market Dashboard
          </NavLink>

          <NavLink to="/market-prices">
            💹 Market Prices
          </NavLink>

          <NavLink to="/market-reports">
            👥 Community Reports
          </NavLink>

          <NavLink to="/market-analytics">
            📊 Market Analytics
          </NavLink>

        </div>

      </div>

      <div className="farm-card">

        <h3>🤖 AI Experts</h3>

        <div className="menu-links">

          <NavLink to="/ai-assistant">
            🤖 Smart Farming AI
          </NavLink>

          <NavLink to="/poultry-expert">
            🐔 Poultry Expert AI
          </NavLink>

          <NavLink to="/tomato-expert">
            🍅 Tomato Expert AI
          </NavLink>

          <NavLink to="/kale-expert">
            🥬 Kale Expert AI
          </NavLink>

          <NavLink to="/disease-scanner">
            📷 Disease Scanner AI
          </NavLink>

          <NavLink to="/disease-history">
            📋 Disease History
          </NavLink>

        </div>

      </div>

      <div className="farm-card">

        <h3>💰 Finance</h3>

        <div className="menu-links">

          <NavLink to="/finance">
            💸 Finance
          </NavLink>

          <NavLink to="/income">
            💰 Income
          </NavLink>

          <NavLink to="/harvests">
            🥬 Harvests
          </NavLink>

          <NavLink to="/reports">
            📄 Reports
          </NavLink>

          <NavLink to="/pdf-reports">
            📄 PDF Reports
          </NavLink>

        </div>

      </div>

      <div className="farm-card">

        <h3>📦 Inventory</h3>

        <div className="menu-links">

          <NavLink to="/inventory">
            📦 Inventory
          </NavLink>

          <NavLink to="/inventory-report">
            📄 Inventory Report
          </NavLink>

          <NavLink to="/inventory-analytics">
            📊 Inventory Analytics
          </NavLink>

        </div>

      </div>

      <div className="farm-card">

        <h3>⚙️ System</h3>

        <div className="menu-links">

          <NavLink to="/weather">
            🌤 Weather
          </NavLink>

          <NavLink to="/notifications">
            🔔 Notifications
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