/*
==========================================================

Farm Manager Pro

Notifications Center

Version : 2.3.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function Notifications() {
  const inventory =
    JSON.parse(
      localStorage.getItem("inventory")
    ) || [];

  const lowStock = inventory.filter(
    (item) => Number(item.quantity) <= 2
  );

  const [notifications, setNotifications] =
    useState(() => {
      const list = [];

      lowStock.forEach((item) => {
        list.push({
          id: "stock-" + item.id,
          type: "Inventory",
          icon: "📦",
          title: "Low Stock",
          message: `${item.name} has only ${item.quantity} remaining.`,
          priority: "High",
          read: false,
        });
      });

      list.push({
        id: "weather",
        type: "Weather",
        icon: "🌤",
        title: "Weather",
        message:
          "Review today's weather forecast before field work.",
        priority: "Medium",
        read: false,
      });

      list.push({
        id: "backup",
        type: "Backup",
        icon: "☁️",
        title: "Cloud Backup",
        message:
          "Create a cloud backup to protect your farm data.",
        priority: "Medium",
        read: false,
      });

      list.push({
        id: "market",
        type: "Market",
        icon: "📈",
        title: "Market Prices",
        message:
          "Check today's market prices before selling produce.",
        priority: "Low",
        read: false,
      });

      list.push({
        id: "vaccination",
        type: "Livestock",
        icon: "💉",
        title: "Vaccination",
        message:
          "Review livestock vaccination schedule.",
        priority: "High",
        read: false,
      });

      return list;
    });

  function markAsRead(id) {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  }

  function clearAll() {
    setNotifications([]);
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>🔔 Notifications Center</h2>

        <p>
          Total Notifications:{" "}
          <strong>
            {notifications.length}
          </strong>
        </p>

        <button
          onClick={clearAll}
          style={{
            marginTop: "15px",
            marginBottom: "20px",
          }}
        >
          🗑 Clear All
        </button>

        {notifications.length === 0 ? (
          <div className="tasks-card">
            <h3>
              ✅ All Caught Up
            </h3>

            <p>
              No notifications available.
            </p>
          </div>
        ) : (
          notifications.map(
            (notification) => (
              <div
                key={notification.id}
                className="farm-card"
                style={{
                  marginBottom: "15px",
                  borderLeft:
                    notification.priority ===
                    "High"
                      ? "5px solid #d32f2f"
                      : notification.priority ===
                        "Medium"
                      ? "5px solid #f9a825"
                      : "5px solid #2e7d32",
                }}
              >
                <h3>
                  {notification.icon}{" "}
                  {notification.title}
                </h3>

                <p>
                  {notification.message}
                </p>

                <p>
                  <strong>
                    Category:
                  </strong>{" "}
                  {notification.type}
                </p>

                <p>
                  <strong>
                    Priority:
                  </strong>{" "}
                  {notification.priority}
                </p>

                <p>
                  <strong>
                    Status:
                  </strong>{" "}
                  {notification.read
                    ? "✅ Read"
                    : "🟡 Unread"}
                </p>

                {!notification.read && (
                  <button
                    onClick={() =>
                      markAsRead(
                        notification.id
                      )
                    }
                  >
                    ✓ Mark as Read
                  </button>
                )}
              </div>
            )
          )
        )}

      </div>

    </main>
  );
}

export default Notifications;