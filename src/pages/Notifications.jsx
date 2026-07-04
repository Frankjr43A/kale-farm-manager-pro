function Notifications() {
  const inventory =
    JSON.parse(
      localStorage.getItem(
        "inventory"
      )
    ) || [];

  const lowStock =
    inventory.filter(
      (item) =>
        Number(item.quantity) <= 2
    );

  const notifications = [];

  lowStock.forEach((item) => {
    notifications.push({
      id:
        "stock-" + item.id,
      message: `⚠️ ${item.name} is running low (${item.quantity} left).`,
    });
  });

  notifications.push({
    id: "irrigation",
    message:
      "💧 Check if irrigation is needed today.",
  });

  notifications.push({
    id: "backup",
    message:
      "☁️ Remember to create a cloud backup.",
  });

  notifications.push({
    id: "harvest",
    message:
      "🥬 Review today's harvest activities.",
  });

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          🔔 Notifications
        </h2>

        {notifications.length ===
        0 ? (
          <p>
            No notifications.
          </p>
        ) : (
          notifications.map(
            (notification) => (
              <div
                key={
                  notification.id
                }
                style={{
                  padding:
                    "16px",
                  borderBottom:
                    "1px solid #eee",
                }}
              >
                {
                  notification.message
                }
              </div>
            )
          )
        )}
      </div>
    </main>
  );
}

export default Notifications;