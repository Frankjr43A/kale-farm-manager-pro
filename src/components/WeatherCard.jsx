import {
  useEffect,
  useState,
} from "react";

import {
  getWeatherText,
  geocodeLocation,
} from "../services/weatherService";

function WeatherCard() {
  const [weather,
    setWeather] =
    useState(null);

  const [loading,
    setLoading] =
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

        if (
          geo.success
        ) {
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

      const weatherData =
        {
          location:
            location,
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

      localStorage.setItem(
        "currentWeather",
        JSON.stringify(
          weatherData
        )
      );
    } catch (
      error
    ) {
      console.error(
        error
      );
    } finally {
      setLoading(
        false
      );
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

  return (
    <section className="weather-card">
      <h3>
        🌤 Weather
      </h3>

      <p>
        📍
        {" "}
        {
          weather.location
        }
      </p>

      <div
        className="weather-temp"
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
          marginTop:
            "16px",
          lineHeight:
            "1.8",
        }}
      >
        <div>
          💨 Wind:
          {" "}
          {
            weather.wind
          }
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
    </section>
  );
}

export default WeatherCard;