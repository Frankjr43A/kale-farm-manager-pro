import { useMemo } from "react";

function FarmCopilot() {
  const advice = useMemo(() => {
    const messages = [];

    const profile =
      JSON.parse(
        localStorage.getItem(
          "profile"
        )
      ) || {};

    const farmerName =
      profile.fullName ||
      "Farmer";

    // Greeting
    const hour =
      new Date().getHours();

    let greeting =
      "Good Evening";

    if (hour < 12) {
      greeting =
        "Good Morning";
    } else if (
      hour < 18
    ) {
      greeting =
        "Good Afternoon";
    }

    messages.push(
      `👋 ${greeting}, ${farmerName}.`
    );

    // Weather
    const weather =
      JSON.parse(
        localStorage.getItem(
          "currentWeather"
        )
      ) || {};

    const rain =
      Number(
        weather.precipitationProbability ||
          0
      );

    const temp =
      Number(
        weather.temperature ||
          0
      );

    if (rain >= 50) {
      messages.push(
        "🌧 Rain is expected soon. Delay spraying activities."
      );
    } else if (
      rain < 20
    ) {
      messages.push(
        "☀️ Dry conditions today. Good time for field operations and spraying."
      );
    }

    if (temp >= 30) {
      messages.push(
        "🌡 High temperatures expected. Increase irrigation and provide shade for poultry."
      );
    }

    // Activities
    const activities =
      JSON.parse(
        localStorage.getItem(
          "activities"
        )
      ) || [];

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    const todayActivities =
      activities.filter(
        (activity) =>
          activity.date ===
          today
      );

    if (
      todayActivities.length >
      0
    ) {
      messages.push(
        `📅 You have ${todayActivities.length} activity scheduled today.`
      );

      todayActivities.forEach(
        (
          activity
        ) => {
          messages.push(
            `• ${activity.title}`
          );
        }
      );
    }

    // Inventory
    const inventory =
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || [];

    const lowStock =
      inventory.filter(
        (item) =>
          Number(
            item.quantity
          ) <= 2
      );

    if (
      lowStock.length >
      0
    ) {
      messages.push(
        `📦 ${lowStock.length} inventory item(s) are running low. Consider restocking.`
      );
    }

    // Vaccinations
    const vaccinations =
      JSON.parse(
        localStorage.getItem(
          "vaccinations"
        )
      ) || [];

    if (
      vaccinations.length >
      0
    ) {
      messages.push(
        `💉 ${vaccinations.length} vaccination record(s) available. Review your schedule.`
      );
    }

    // Livestock
    const livestock =
      JSON.parse(
        localStorage.getItem(
          "livestock"
        )
      ) || [];

    if (
      livestock.length >
      0
    ) {
      const latest =
        livestock[
          livestock.length -
            1
        ];

      const birds =
        Number(
          latest.birds || 0
        );

      const eggs =
        Number(
          latest.eggs || 0
        );

      if (
        birds > 0
      ) {
        const production =
          (
            (eggs /
              birds) *
            100
          ).toFixed(1);

        if (
          production >=
          80
        ) {
          messages.push(
            `🥚 Egg production is excellent at ${production}%.`
          );
        } else if (
          production >=
          70
        ) {
          messages.push(
            `🥚 Egg production is good at ${production}%.`
          );
        } else {
          messages.push(
            `⚠️ Egg production is low at ${production}%. Check feed quality and bird health.`
          );
        }
      }
    }

    // Harvest reminder
    const harvests =
      JSON.parse(
        localStorage.getItem(
          "harvests"
        )
      ) || [];

    if (
      harvests.length >
      0
    ) {
      messages.push(
        `🥬 You have ${harvests.length} harvest record(s). Keep tracking your production.`
      );
    }

    // Default
    if (
      messages.length ===
      1
    ) {
      messages.push(
        "🌿 Everything looks good today. Keep monitoring your farm."
      );
    }

    return messages;
  }, []);

  return (
    <section className="tasks-card">
      <h3>
        🤖 Farm Copilot
      </h3>

      <ul>
        {advice.map(
          (
            message,
            index
          ) => (
            <li
              key={
                index
              }
            >
              {message}
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default FarmCopilot;