/*
==========================================================

Farm Manager Pro

PDF Reports Center

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import {
  exportFarmSummary,
  exportFinanceReport,
  exportLivestockReport,
  exportDiseaseReport,
} from "../services/pdfService";

function PdfReports() {
  return (
    <main className="dashboard">

      <div className="farm-card">
        <h2>
          📄 PDF Reports Center
        </h2>

        <p>
          Generate professional PDF reports
          for your farm records.
        </p>
      </div>

      <div className="tasks-card">

        <h3>
          🚜 Farm Reports
        </h3>

        <button
          onClick={exportFarmSummary}
        >
          📄 Farm Summary
        </button>

        <br />
        <br />

        <button
          onClick={exportFinanceReport}
        >
          💰 Finance Report
        </button>

        <br />
        <br />

        <button
          onClick={exportLivestockReport}
        >
          🐔 Livestock Report
        </button>

        <br />
        <br />

        <button
          onClick={exportDiseaseReport}
        >
          🌿 Disease Report
        </button>

      </div>

    </main>
  );
}

export default PdfReports;