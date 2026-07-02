import { NavLink } from "react-router-dom";

function Settings() {
  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>⚙️ Settings</h2>

        <div className="menu-links">
          <NavLink to="/settings/profile">
            👨‍🌾 Farmer Profile
          </NavLink>

          <NavLink to="/settings/theme">
            🌙 Dark Mode
          </NavLink>

          <NavLink to="/pdf-reports">
            📄 Export Reports
          </NavLink>

          <NavLink to="/backup">
            💾 Backup Data
          </NavLink>

          <button
            onClick={() => {
              if (
                "serviceWorker" in navigator &&
                "PushManager" in window
              ) {
                alert(
                  "To install the app, open it in your browser and use Add to Home Screen."
                );
              } else {
                alert(
                  "Install is not available on this device."
                );
              }
            }}
            style={{
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            📱 Install App
          </button>
        </div>
      </div>
    </main>
  );
}

export default Settings;