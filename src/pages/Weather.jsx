import { useEffect, useState } from "react";

import { getCurrentWeather } from "../services/weatherService";

function Weather() {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const result =
          await getCurrentWeather(
            position.coords.latitude,
            position.coords.longitude
          );

        setWeather(result);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>🌤 Weather</h2>
          <p>Loading weather...</p>
        </div>
      </main>
    );
  }

  if (!weather?.success) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>🌤 Weather</h2>
          <p>Unable to load weather.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>🌤 Live Weather</h2>

        <img
          src={weather.icon}
          alt={weather.description}
          width="100"
        />

        <h3>
          {weather.city}, {weather.country}
        </h3>

        <p>
          🌡 Temperature: {weather.temperature}°C
        </p>

        <p>
          🤗 Feels Like: {weather.feelsLike}°C
        </p>

        <p>
          💧 Humidity: {weather.humidity}%
        </p>

        <p>
          🌬 Wind: {weather.windSpeed} m/s
        </p>

        <p>
          🧭 Pressure: {weather.pressure} hPa
        </p>

        <p>
          ☁️ {weather.description}
        </p>

        <hr
          style={{
            margin: "20px 0",
          }}
        />

        <h3>
          🌱 Recommended Farm Activities
        </h3>

        <ul>
          <li>💧 Irrigate early morning.</li>
          <li>🧪 Spray only if rain is not expected.</li>
          <li>🥬 Harvest during cool hours.</li>
          <li>🚜 Monitor livestock water supply.</li>
        </ul>
      </div>
    </main>
  );
}

export default Weather;