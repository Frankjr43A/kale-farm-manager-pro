function WeatherCard() {
  return (
    <section className="weather-card">
      <div>
        <h3>🌤 Weather</h3>
        <p>Siaya County</p>
      </div>

      <div className="weather-temp">
        <h2>27°C</h2>
        <small>Sunny</small>
      </div>
    </section>
  );
}

export default WeatherCard;