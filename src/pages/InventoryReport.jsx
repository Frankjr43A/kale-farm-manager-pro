import jsPDF from "jspdf";

function InventoryReport() {
  function downloadReport() {
    const doc = new jsPDF();

    const inventory =
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || [];

    const lowStock =
      inventory.filter(
        (item) =>
          item.quantity <= 2
      );

    let y = 20;

    doc.setFontSize(20);

    doc.text(
      "Farm Manager Pro",
      20,
      y
    );

    y += 15;

    doc.setFontSize(16);

    doc.text(
      "Inventory Report",
      20,
      y
    );

    y += 20;

    inventory.forEach(
      (item) => {
        doc.text(
          `${item.category} - ${item.name} - Qty: ${item.quantity}`,
          20,
          y
        );

        y += 10;
      }
    );

    y += 10;

    doc.text(
      `Total Items: ${inventory.length}`,
      20,
      y
    );

    y += 10;

    doc.text(
      `Low Stock Items: ${lowStock.length}`,
      20,
      y
    );

    doc.save(
      "inventory-report.pdf"
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          📄 Inventory PDF Report
        </h2>

        <p>
          Download your
          inventory report as PDF.
        </p>

        <button
          onClick={
            downloadReport
          }
        >
          📄 Download Report
        </button>
      </div>
    </main>
  );
}

export default InventoryReport;