/*
==========================================================

Farm Manager Pro

Component : Bottom Navigation

Version : 2.2.0

Developer : Francis Junior

==========================================================
*/

import { NavLink } from "react-router-dom";

function BottomNav() {
  const navItems = [
    {
      path: "/dashboard",
      icon: "🏠",
      label: "Home",
    },
    {
      path: "/farms",
      icon: "🚜",
      label: "Farm",
    },
    {
      path: "/market-dashboard",
      icon: "📈",
      label: "Market",
    },
    {
      path: "/finance",
      icon: "💰",
      label: "Finance",
    },
    {
      path: "/ai-assistant",
      icon: "🤖",
      label: "AI",
    },
    {
      path: "/menu",
      icon: "☰",
      label: "Menu",
    },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "nav-item active"
              : "nav-item"
          }
        >
          <span
            style={{
              fontSize: "1.4rem",
            }}
          >
            {item.icon}
          </span>

          <small>{item.label}</small>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;