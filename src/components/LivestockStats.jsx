function LivestockStats() {
  const records =
    JSON.parse(
      localStorage.getItem(
        "livestock"
      )
    ) || [];

  const totalBirds =
    records.reduce(
      (sum, record) =>
        sum +
        Number(
          record.birds || 0
        ),
      0
    );

  const totalEggs =
    records.reduce(
      (sum, record) =>
        sum +
        Number(
          record.eggs || 0
        ),
      0
    );

  const totalFeed =
    records.reduce(
      (sum, record) =>
        sum +
        Number(
          record.feed || 0
        ),
      0
    );

  const totalDeaths =
    records.reduce(
      (sum, record) =>
        sum +
        Number(
          record.deaths || 0
        ),
      0
    );

  const production =
    totalBirds > 0
      ? (
          (totalEggs /
            totalBirds) *
          100
        ).toFixed(1)
      : 0;

  return (
    <section className="dashboard-grid">
      <div className="dashboard-card">
        <h3>🐔 Birds</h3>
        <h2>
          {totalBirds}
        </h2>
      </div>

      <div className="dashboard-card">
        <h3>🥚 Eggs</h3>
        <h2>
          {totalEggs}
        </h2>
      </div>

      <div className="dashboard-card">
        <h3>🌽 Feed</h3>
        <h2>
          {totalFeed} Kg
        </h2>
      </div>

      <div className="dashboard-card">
        <h3>💀 Deaths</h3>
        <h2>
          {totalDeaths}
        </h2>
      </div>

      <div className="dashboard-card">
        <h3>
          📈 Production
        </h3>
        <h2>
          {production}%
        </h2>
      </div>
    </section>
  );
}

export default LivestockStats;