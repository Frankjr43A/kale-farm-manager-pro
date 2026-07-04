import {
  useEffect,
  useState,
} from "react";

import {
  getWeather,
  getWeatherText,
  geocodeLocation,
} from "../services/weatherService";

function WeatherCard() {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadWeather();
  }, []);

  async function loadWeather() {
    try {
      const profile =
        JSON.parse(
          localStorage.getItem(
            "profile"
          )
        ) || {};

      let latitude =
        profile.latitude;

      let longitude =
        profile.longitude;

      const location =
        [
          profile.farmLocation,
          profile.county,
          profile.country,
        ]
          .filter(Boolean)
          .join(", ");

      if (
        (!latitude ||
          !longitude) &&
        location
      ) {
        const geo =
          await geocodeLocation(
            location
          );

        if (geo.success) {
          latitude =
            geo.latitude;

          longitude =
            geo.longitude;
        }
      }

      if (
        !latitude ||
        !longitude
      ) {
        setLoading(false);
        return;
      }

      const response =
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&hourly=precipitation_probability`
        );

      const data =
        await response.json();

      const current =
        data.current;

      const rainChance =
        data.hourly
          ?.precipitation_probability?.[0] ??
        0;

      const weatherData = {
        location:
          location ||
          "Farm Location",

        temperature:
          current.temperature_2m,

        condition:
          getWeatherText(
            current.weather_code
          ),

        humidity:
          current.relative_humidity_2m,

        wind:
          current.wind_speed_10m,

        rainChance,
      };

      setWeather(
        weatherData
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="weather-card">
        <h3>
          🌤 Loading weather...
        </h3>
      </section>
    );
  }

  if (!weather) {
    return (
      <section className="weather-card">
        <h3>
          🌤 Weather
        </h3>

        <p>
          Please add your
          farm location in
          Profile Settings.
        </p>
      </section>
    );
  }

  let recommendation =
    "Good day for farming activities.";

  if (
    weather.condition.includes(
      "Rain"
    )
  ) {
    recommendation =
      "Possible rain. Avoid spraying pesticides and foliar fertilizers.";
  } else if (
    weather.condition.includes(
      "Thunder"
    )
  ) {
    recommendation =
      "Thunderstorms possible. Stay out of fields and protect equipment.";
  } else if (
    weather.condition.includes(
      "Overcast"
    )
  ) {
    recommendation =
      "Good day for planting and transplanting. Monitor for possible showers later.";
  } else if (
    weather.humidity >= 80
  ) {
    recommendation =
      "High humidity. Monitor crops for fungal diseases and avoid unnecessary irrigation.";
  } else if (
    weather.condition.includes(
      "Cloud"
    ) ||
    weather.condition.includes(
      "Partly"
    )
  ) {
    recommendation =
      "Good conditions for field work.";
  } else if (
    weather.condition.includes(
      "Clear"
    )
  ) {
    recommendation =
      "Good day for irrigation and spraying.";
  }

  return (
    <section className="weather-card">
      <div>
        <h3>
          🌤 Weather
        </h3>

        <p>
          📍{" "}
          {
            weather.location
          }
        </p>
      </div>

      <div
        className="weather-temp"
        style={{
          marginTop: "16px",
        }}
      >
        <h2>
          {
            weather.temperature
          }
          °C
        </h2>

        <small>
          {
            weather.condition
          }
        </small>
      </div>

      <div
        style={{
          marginTop: "16px",
          lineHeight: "1.8",
        }}
      >
        <div>
          💨 Wind:
          {" "}
          {weather.wind}
          {" "}
          km/h
        </div>

        <div>
          💧 Humidity:
          {" "}
          {
            weather.humidity
          }
          %
        </div>

        <div>
          🌧 Rain Chance:
          {" "}
          {
            weather.rainChance
          }
          %
        </div>
      </div>

      <p
        style={{
          marginTop: "18px",
          fontWeight:
            "bold",
        }}
      >
        💡
        {" "}
        {
          recommendation
        }
      </p>
    </section>
  );
}

export default WeatherCard;