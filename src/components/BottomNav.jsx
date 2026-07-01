import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "nav-item active"
            : "nav-item"
        }
      >
        <span>🏠</span>
        <small>Home</small>
      </NavLink>

      <NavLink
        to="/farms"
        className={({ isActive }) =>
          isActive
            ? "nav-item active"
            : "nav-item"
        }
      >
        <span>🚜</span>
        <small>Farms</small>
      </NavLink>

      <NavLink
        to="/finance"
        className={({ isActive }) =>
          isActive
            ? "nav-item active"
            : "nav-item"
        }
      >
        <span>💸</span>
        <small>Finance</small>
      </NavLink>

      <NavLink
        to="/reports"
        className={({ isActive }) =>
          isActive
            ? "nav-item active"
            : "nav-item"
        }
      >
        <span>📊</span>
        <small>Reports</small>
      </NavLink>

      <NavLink
        to="/menu"
        className={({ isActive }) =>
          isActive
            ? "nav-item active"
            : "nav-item"
        }
      >
        <span>☰</span>
        <small>Menu</small>
      </NavLink>
    </nav>
  );
}

export default BottomNav;