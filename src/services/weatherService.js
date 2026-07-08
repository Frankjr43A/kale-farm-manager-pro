const API_KEY =
  "e176a0db1c202f75a54b645a4ba99780";

export async function getCurrentWeather(
  latitude,
  longitude
) {
  try {
    const response =
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );

    const data =
      await response.json();

    return {
      success: true,
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      windSpeed: data.wind.speed,
      description:
        data.weather[0].description,
      icon:
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
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

    if (!data.length) {
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
  } catch {
    return {
      success: false,
    };
  }
}

export function getWeatherText(
  code
) {
  if (code === 0)
    return "Clear Sky";

  if (
    [1, 2, 3].includes(code)
  )
    return "Partly Cloudy";

  if (
    [45, 48].includes(code)
  )
    return "Fog";

  if (
    [51, 53, 55].includes(code)
  )
    return "Drizzle";

  if (
    [61, 63, 65].includes(code)
  )
    return "Rain";

  if (
    [71, 73, 75].includes(code)
  )
    return "Snow";

  if (
    [95, 96, 99].includes(code)
  )
    return "Thunderstorm";

  return "Unknown";
}