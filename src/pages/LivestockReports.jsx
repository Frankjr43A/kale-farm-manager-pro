function LivestockReports() {
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

  const eggPrice = 15;
  const feedPrice = 60;

  const eggIncome =
    totalEggs *
    eggPrice;

  const feedCost =
    totalFeed *
    feedPrice;

  const profit =
    eggIncome -
    feedCost;

  const production =
    totalBirds > 0
      ? (
          (totalEggs /
            totalBirds) *
          100
        ).toFixed(1)
      : 0;

  return (
    <main className="dashboard">
      <h2>
        🐔 Livestock Reports
      </h2>

      <section className="dashboard-grid">
        <div className="dashboard-card">
          <h3>
            🐔 Birds
          </h3>

          <h2>
            {totalBirds}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>
            🥚 Eggs
          </h3>

          <h2>
            {totalEggs}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>
            🌽 Feed
          </h3>

          <h2>
            {totalFeed} Kg
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

        <div className="dashboard-card">
          <h3>
            💰 Egg Income
          </h3>

          <h2>
            KES{" "}
            {eggIncome.toLocaleString()}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>
            💸 Feed Cost
          </h3>

          <h2>
            KES{" "}
            {feedCost.toLocaleString()}
          </h2>
        </div>

        <div className="dashboard-card">
          <h3>
            💵 Profit
          </h3>

          <h2>
            KES{" "}
            {profit.toLocaleString()}
          </h2>
        </div>
      </section>

      <section className="tasks-card">
        <h3>
          📊 Layer Summary
        </h3>

        <p>
          🐔 Total Birds:
          {" "}
          {totalBirds}
        </p>

        <p>
          🥚 Total Eggs:
          {" "}
          {totalEggs}
        </p>

        <p>
          🌽 Total Feed:
          {" "}
          {totalFeed}
          {" "}
          Kg
        </p>

        <p>
          💰 Estimated Income:
          {" "}
          KES{" "}
          {eggIncome.toLocaleString()}
        </p>

        <p>
          💵 Estimated Profit:
          {" "}
          KES{" "}
          {profit.toLocaleString()}
        </p>
      </section>
    </main>
  );
}

export default LivestockReports;