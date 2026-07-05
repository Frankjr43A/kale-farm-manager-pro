export function getFarmingAdvice(
  question,
  weather = {}
) {
  const q =
    question.toLowerCase();

  if (
    q.includes("spray")
  ) {
    if (
      weather.rainChance >=
      40
    ) {
      return "🌧 Rain is expected. Avoid spraying today.";
    }

    if (
      weather.wind >= 15
    ) {
      return "💨 Wind is strong. Delay spraying to avoid drift.";
    }

    return "✅ Weather conditions are suitable for spraying.";
  }

  if (
    q.includes(
      "irrigat"
    )
  ) {
    if (
      weather.rainChance >=
      40
    ) {
      return "🌧 Rain is likely. Irrigation may not be necessary.";
    }

    if (
      weather.temperature >=
      28
    ) {
      return "💧 Hot conditions. Irrigation is recommended.";
    }

    return "💧 Monitor soil moisture before irrigating.";
  }

  if (
    q.includes(
      "yellow"
    )
  ) {
    return "🟡 Yellow leaves can be caused by nitrogen deficiency, poor drainage, pests, or disease.";
  }

  if (
    q.includes(
      "fertilizer"
    )
  ) {
    return "🌱 Apply fertilizer according to your crop stage and soil conditions.";
  }

  return "🤖 I need more information. Please ask a more specific farming question.";
}