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

    y += 10;

    doc.setFontSize(16);
    doc.text(
      "Inventory Report",
      20,
      y
    );

    y += 10;

    doc.setFontSize(10);
    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      20,
      y
    );

    y += 15;

    inventory.forEach(
      (item, index) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }

        doc.text(
          `${index + 1}. ${item.category}`,
          20,
          y
        );

        y += 7;

        doc.text(
          `Item: ${item.name}`,
          25,
          y
        );

        y += 7;

        doc.text(
          `Quantity: ${item.quantity}`,
          25,
          y
        );

        y += 10;
      }
    );

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(12);

    doc.text(
      `Total Items: ${inventory.length}`,
      20,
      y
    );

    y += 8;

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
          Generate a printable inventory report.
        </p>

        <button
          onClick={
            downloadReport
          }
        >
          📄 Download PDF
        </button>

      </div>

    </main>
  );
}

export default InventoryReport;