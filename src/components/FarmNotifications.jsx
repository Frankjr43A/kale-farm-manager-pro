import { useMemo } from "react";

function FarmNotifications() {
  const activities =
    JSON.parse(
      localStorage.getItem(
        "cropCalendar"
      )
    ) || [];

  const notifications =
    useMemo(() => {
      const today =
        new Date();

      today.setHours(
        0,
        0,
        0,
        0
      );

      const tomorrow =
        new Date(today);

      tomorrow.setDate(
        tomorrow.getDate() +
          1
      );

      return activities
        .map(
          (activity) => {
            const date =
              new Date(
                activity.date
              );

            date.setHours(
              0,
              0,
              0,
              0
            );

            if (
              date.getTime() ===
              today.getTime()
            ) {
              return {
                type:
                  "today",
                message:
                  `🔔 Today: ${activity.title}`,
              };
            }

            if (
              date.getTime() ===
              tomorrow.getTime()
            ) {
              return {
                type:
                  "tomorrow",
                message:
                  `🟡 Tomorrow: ${activity.title}`,
              };
            }

            if (
              date < today
            ) {
              return {
                type:
                  "overdue",
                message:
                  `🔴 Overdue: ${activity.title}`,
              };
            }

            return null;
          }
        )
        .filter(Boolean);
    }, [activities]);

  if (
    notifications.length ===
    0
  ) {
    return null;
  }

  return (
    <section className="tasks-card">
      <h3>
        🔔 Farm
        Notifications
      </h3>

      <ul>
        {notifications.map(
          (
            item,
            index
          ) => (
            <li
              key={index}
            >
              {
                item.message
              }
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default FarmNotifications;