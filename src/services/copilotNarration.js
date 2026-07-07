import { speak } from "./voiceAssistant";

export function playCopilotNarration() {
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
    `${greeting}, ${farmerName}.`
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

  if (rain >= 50) {
    messages.push(
      "Rain is expected soon. Delay spraying activities."
    );
  } else {
    messages.push(
      "Weather conditions are favorable for field operations today."
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
      `You have ${todayActivities.length} activity scheduled today.`
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
      "Please review your vaccination schedule."
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
          (eggs / birds) *
          100
        ).toFixed(1);

      if (
        production >= 80
      ) {
        messages.push(
          `Egg production is excellent at ${production} percent.`
        );
      } else if (
        production >= 70
      ) {
        messages.push(
          `Egg production is good at ${production} percent.`
        );
      } else {
        messages.push(
          `Egg production is low at ${production} percent.`
        );
      }
    }
  }

  const narration =
    messages.join(" ");

  speak(
    narration
  );

  return narration;
}