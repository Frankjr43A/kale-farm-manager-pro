import jsPDF from "jspdf";

function PdfReports() {
  const downloadReport = () => {
    const doc = new jsPDF();

    const incomes =
      JSON.parse(
        localStorage.getItem("incomes")
      ) || [];

    const expenses =
      JSON.parse(
        localStorage.getItem("expenses")
      ) || [];

    const harvests =
      JSON.parse(
        localStorage.getItem("harvests")
      ) || [];

    const totalIncome =
      incomes.reduce(
        (sum, item) =>
          sum + Number(item.amount || 0),
        0
      );

    const totalExpenses =
      expenses.reduce(
        (sum, item) =>
          sum + Number(item.amount || 0),
        0
      );

    const totalHarvest =
      harvests.reduce(
        (sum, item) =>
          sum + Number(item.income || 0),
        0
      );

    const profit =
      totalIncome - totalExpenses;

    doc.setFontSize(20);
    doc.text(
      "Farm Manager Pro Report",
      20,
      20
    );

    doc.setFontSize(14);

    doc.text(
      `Income: KES ${totalIncome}`,
      20,
      50
    );

    doc.text(
      `Expenses: KES ${totalExpenses}`,
      20,
      70
    );

    doc.text(
      `Profit: KES ${profit}`,
      20,
      90
    );

    doc.text(
      `Harvest Income: KES ${totalHarvest}`,
      20,
      110
    );

    doc.save(
      "farm-manager-report.pdf"
    );
  };

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>📄 PDF Reports</h2>

        <p
          style={{
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Export your farm summary
          as a PDF document.
        </p>

        <button
          className="delete-btn"
          onClick={downloadReport}
        >
          📄 Download PDF Report
        </button>
      </div>
    </main>
  );
}

export default PdfReports;