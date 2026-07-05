import {
  exportLivestockReport,
  exportDiseaseReport,
  exportFinanceReport,
  exportFarmSummary,
} from "../services/pdfService";

function PdfReports() {
  return (
    <main className="dashboard">
      <h2>
        📄 PDF Reports Center
      </h2>

      <section className="farm-card">
        <h3>
          📊 Farm Summary
        </h3>

        <p>
          Export your farm profile
          and farm information.
        </p>

        <button
          onClick={
            exportFarmSummary
          }
        >
          📄 Export Farm Summary
        </button>
      </section>

      <section className="farm-card">
        <h3>
          💸 Finance Reports
        </h3>

        <p>
          Export income and
          expense records.
        </p>

        <button
          onClick={
            exportFinanceReport
          }
        >
          📄 Export Finance Report
        </button>
      </section>

      <section className="farm-card">
        <h3>
          🐔 Livestock Reports
        </h3>

        <p>
          Export poultry and
          livestock records.
        </p>

        <button
          onClick={
            exportLivestockReport
          }
        >
          📄 Export Livestock Report
        </button>
      </section>

      <section className="farm-card">
        <h3>
          🌿 Disease Reports
        </h3>

        <p>
          Export all disease
          diagnoses and
          recommendations.
        </p>

        <button
          onClick={
            exportDiseaseReport
          }
        >
          📄 Export Disease Report
        </button>
      </section>
    </main>
  );
}

export default PdfReports;