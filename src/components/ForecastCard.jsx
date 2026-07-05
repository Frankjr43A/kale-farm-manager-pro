import {
  useEffect,
  useState,
} from "react";

function ForecastCard() {
  const [forecast, setForecast] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadForecast();
  }, []);

  async function loadForecast() {
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
        setLoading(false);
        return;
      }

      const response =
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
        );

      const data =
        await response.json();

      const days =
        data.daily.time.map(
          (date, index) => ({
            date,
            max:
              data.daily
                .temperature_2m_max[
                index
              ],
            min:
              data.daily
                .temperature_2m_min[
                index
              ],
            code:
              data.daily
                .weather_code[
                index
              ],
            rain:
              data.daily
                .precipitation_probability_max?.[
                index
              ] ?? 0,
          })
        );

      setForecast(
        days.slice(0, 3)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function getIcon(
    code
  ) {
    if (code >= 95)
      return "⛈️";

    if (code >= 61)
      return "🌧️";

    if (code >= 45)
      return "🌫️";

    if (code >= 1)
      return "☁️";

    return "☀️";
  }

  if (loading) {
    return (
      <section className="tasks-card">
        <h3>
          🌤 Loading forecast...
        </h3>
      </section>
    );
  }

  return (
    <section className="tasks-card">
      <h3>
        ☁️ 3-Day Forecast
      </h3>

      {forecast.map(
        (day) => (
          <div
            key={day.date}
            style={{
              display:
                "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              padding:
                "14px 0",
              borderBottom:
                "1px solid #eee",
            }}
          >
            <div>
              {new Date(
                day.date
              ).toLocaleDateString(
                undefined,
                {
                  weekday:
                    "long",
                }
              )}
            </div>

            <div
              style={{
                fontSize:
                  "1.5rem",
              }}
            >
              {getIcon(
                day.code
              )}
            </div>

            <div>
              🌧 {day.rain}%
            </div>

            <div>
              {day.max}°
              {" / "}
              {day.min}°
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default ForecastCard;