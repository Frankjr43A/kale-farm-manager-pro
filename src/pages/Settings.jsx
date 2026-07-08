/*
==========================================================

Farm Manager Pro

Settings

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import { NavLink } from "react-router-dom";

function Settings() {
  function installApp() {
    if (
      "serviceWorker" in navigator &&
      "PushManager" in window
    ) {
      alert(
        "To install Farm Manager Pro, open the browser menu and choose 'Add to Home Screen' or 'Install App'."
      );
    } else {
      alert(
        "App installation is not available on this device."
      );
    }
  }

  function clearCache() {
    const confirmed = window.confirm(
      "Clear temporary cached market data?"
    );

    if (!confirmed) return;

    localStorage.removeItem(
      "farm-manager-pro-market-cache"
    );

    alert("Cache cleared successfully.");
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>⚙️ Settings</h2>

        <div className="menu-links">

          <NavLink to="/settings/profile">
            👨‍🌾 Farmer Profile
          </NavLink>

          <NavLink to="/settings/theme">
            🌙 Theme & Dark Mode
          </NavLink>

          <NavLink to="/notifications">
            🔔 Notifications
          </NavLink>

          <NavLink to="/backup">
            ☁️ Backup & Cloud Sync
          </NavLink>

          <NavLink to="/pdf-reports">
            📄 Export Reports
          </NavLink>

          <button onClick={clearCache}>
            🧹 Clear Market Cache
          </button>

          <button onClick={installApp}>
            📱 Install App
          </button>

        </div>

      </div>

    </main>
  );
}

export default Settings;