import {
  useEffect,
  useState,
} from "react";

function WeatherAlerts() {
  const [alerts, setAlerts] =
    useState([]);

  useEffect(() => {
    loadAlerts();
  }, []);

  async function loadAlerts() {
    try {
      const profile =
        JSON.parse(
          localStorage.getItem(
            "profile"
          )
        ) || {};

      const latitude =
        profile.latitude;

      const longitude =
        profile.longitude;

      if (
        !latitude ||
        !longitude
      ) {
        return;
      }

      const response =
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min&timezone=auto`
        );

      const data =
        await response.json();

      const rain =
        data.daily
          .precipitation_probability_max?.[1] ??
        0;

      const maxTemp =
        data.daily
          .temperature_2m_max?.[1] ??
        0;

      const alertsList =
        [];

      if (rain >= 50) {
        alertsList.push(
          "🌧 Rain expected tomorrow. Avoid spraying pesticides."
        );
      }

      if (maxTemp >= 30) {
        alertsList.push(
          "💧 Hot and dry tomorrow. Prepare irrigation."
        );
      }

      if (rain <= 10) {
        alertsList.push(
          "☀️ Dry conditions expected. Good for field operations."
        );
      }

      if (
        alertsList.length ===
        0
      ) {
        alertsList.push(
          "✅ No major weather risks expected tomorrow."
        );
      }

      setAlerts(
        alertsList
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="tasks-card">
      <h3>
        ⚠️ Smart Weather Alerts
      </h3>

      <ul>
        {alerts.map(
          (
            alert,
            index
          ) => (
            <li
              key={index}
            >
              {alert}
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default WeatherAlerts;