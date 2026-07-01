function Weather() {
  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>🌤 Weather Dashboard</h2>

        <p style={{ marginTop: "20px" }}>
          Current weather integration is coming next.
        </p>

        <div style={{ marginTop: "20px" }}>
          <h3>Recommended Farm Activities</h3>

          <ul
            style={{
              marginTop: "15px",
              paddingLeft: "20px",
            }}
          >
            <li>💧 Irrigate early morning.</li>
            <li>🧪 Avoid spraying before rain.</li>
            <li>🌱 Plan transplanting after rainfall.</li>
            <li>🥬 Harvest during cool hours.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Weather;