function UpcomingActivities() {
  const activities =
    JSON.parse(
      localStorage.getItem(
        "cropCalendar"
      )
    ) || [];

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
    tomorrow.getDate() + 1
  );

  const upcoming =
    activities.filter(
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

        return (
          date <=
          tomorrow
        );
      }
    );

  if (
    upcoming.length === 0
  ) {
    return null;
  }

  return (
    <section className="tasks-card">
      <h3>
        📅 Upcoming
        Activities
      </h3>

      <ul>
        {upcoming.map(
          (
            activity
          ) => {
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

            let icon =
              "🟢";

            let label =
              "Today";

            if (
              date >
              today
            ) {
              icon =
                "🟡";

              label =
                "Tomorrow";
            }

            if (
              date <
              today
            ) {
              icon =
                "🔴";

              label =
                "Overdue";
            }

            return (
              <li
                key={
                  activity.id
                }
              >
                {icon}
                {" "}
                {label}
                {" - "}
                {
                  activity.title
                }
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default UpcomingActivities;