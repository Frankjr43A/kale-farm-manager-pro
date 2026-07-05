function VaccinationReminders() {
  const vaccines =
    JSON.parse(
      localStorage.getItem(
        "vaccinations"
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
    tomorrow.getDate() +
      1
  );

  const reminders =
    vaccines.filter(
      (vaccine) => {
        const date =
          new Date(
            vaccine.date
          );

        date.setHours(
          0,
          0,
          0,
          0
        );

        return (
          date.getTime() ===
            today.getTime() ||
          date.getTime() ===
            tomorrow.getTime()
        );
      }
    );

  if (
    reminders.length ===
    0
  ) {
    return null;
  }

  return (
    <section className="tasks-card">
      <h3>
        💉 Vaccinations Due
      </h3>

      <ul>
        {reminders.map(
          (vaccine) => {
            const date =
              new Date(
                vaccine.date
              );

            date.setHours(
              0,
              0,
              0,
              0
            );

            const label =
              date.getTime() ===
              today.getTime()
                ? "🔴 Today"
                : "🟡 Tomorrow";

            return (
              <li
                key={
                  vaccine.id
                }
              >
                {label}:{" "}
                {
                  vaccine.vaccine
                }
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}

export default VaccinationReminders;