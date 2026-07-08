/*
==========================================================

Farm Manager Pro

Reports

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

function Reports() {
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
          📋 Farm Report Summary
        </h2>
      </div>

      <div className="tasks-card">
        <p>
          🚜 Farms:
          <strong>
            {" "}
            {farms.length}
          </strong>
        </p>

        <p>
          📦 Inventory Items:
          <strong>
            {" "}
            {inventory.length}
          </strong>
        </p>

        <p>
          🥬 Harvest Income:
          <strong>
            {" "}
            KES{" "}
            {totalHarvest.toLocaleString()}
          </strong>
        </p>

        <p>
          💰 Total Income:
          <strong>
            {" "}
            KES{" "}
            {totalIncome.toLocaleString()}
          </strong>
        </p>

        <p>
          💸 Total Expenses:
          <strong>
            {" "}
            KES{" "}
            {totalExpenses.toLocaleString()}
          </strong>
        </p>

        <p>
          📈 Net Profit:
          <strong>
            {" "}
            KES{" "}
            {profit.toLocaleString()}
          </strong>
        </p>
      </div>

    </main>
  );
}

export default Reports;