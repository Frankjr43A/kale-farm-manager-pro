export async function getWeather(
  latitude,
  longitude
) {
  try {
    const response =
      await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
      );

    const data =
      await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        error.message,
    };
  }
}

export async function geocodeLocation(
  location
) {
  try {
    const response =
      await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          location
        )}&limit=1`
      );

    const data =
      await response.json();

    if (
      !data ||
      data.length === 0
    ) {
      return {
        success: false,
      };
    }

    return {
      success: true,
      latitude:
        Number(data[0].lat),
      longitude:
        Number(data[0].lon),
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}

export function getWeatherText(
  code
) {
  const weatherCodes = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light Drizzle",
    53: "Drizzle",
    55: "Heavy Drizzle",
    61: "Light Rain",
    63: "Rain",
    65: "Heavy Rain",
    80: "Rain Showers",
    95: "Thunderstorm",
  };

  return (
    weatherCodes[code] ||
    "Unknown"
  );
}