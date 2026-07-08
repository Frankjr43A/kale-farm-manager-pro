/*
==========================================================

Farm Manager Pro

Analytics Dashboard

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

function Analytics() {
  const expenses =
    JSON.parse(
      localStorage.getItem(
        "expenses"
      )
    ) || [];

  const incomes =
    JSON.parse(
      localStorage.getItem(
        "incomes"
      )
    ) || [];

  const harvests =
    JSON.parse(
      localStorage.getItem(
        "harvests"
      )
    ) || [];

  const farms =
    JSON.parse(
      localStorage.getItem(
        "farm-manager-pro-farms"
      )
    ) || [];

  const livestock =
    JSON.parse(
      localStorage.getItem(
        "livestock"
      )
    ) || [];

  const inventory =
    JSON.parse(
      localStorage.getItem(
        "inventory"
      )
    ) || [];

  const totalExpenses =
    expenses.reduce(
      (sum, item) =>
        sum +
        Number(
          item.amount || 0
        ),
      0
    );

  const totalIncome =
    incomes.reduce(
      (sum, item) =>
        sum +
        Number(
          item.amount || 0
        ),
      0
    );

  const totalHarvest =
    harvests.reduce(
      (sum, item) =>
        sum +
        Number(
          item.income || 0
        ),
      0
    );

  const profit =
    totalIncome -
    totalExpenses;

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>
          📊 Farm Analytics
        </h2>

      </div>

      <section className="dashboard-grid">

        <div className="card">
          <div className="card-icon">
            💰
          </div>

          <h3>Income</h3>

          <h2>
            KES{" "}
            {totalIncome.toLocaleString()}
          </h2>
        </div>

        <div className="card">
          <div className="card-icon">
            💸
          </div>

          <h3>Expenses</h3>

          <h2>
            KES{" "}
            {totalExpenses.toLocaleString()}
          </h2>
        </div>

        <div className="card">
          <div className="card-icon">
            📈
          </div>

          <h3>Profit</h3>

          <h2>
            KES{" "}
            {profit.toLocaleString()}
          </h2>
        </div>

        <div className="card">
          <div className="card-icon">
            🥬
          </div>

          <h3>Harvest</h3>

          <h2>
            KES{" "}
            {totalHarvest.toLocaleString()}
          </h2>
        </div>

        <div className="card">
          <div className="card-icon">
            🚜
          </div>

          <h3>Farms</h3>

          <h2>{farms.length}</h2>
        </div>

        <div className="card">
          <div className="card-icon">
            🐔
          </div>

          <h3>Livestock</h3>

          <h2>{livestock.length}</h2>
        </div>

        <div className="card">
          <div className="card-icon">
            📦
          </div>

          <h3>Inventory</h3>

          <h2>{inventory.length}</h2>
        </div>

      </section>

    </main>
  );
}

export default Analytics;