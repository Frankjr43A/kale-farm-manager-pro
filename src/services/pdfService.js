/*
==========================================================

Farm Manager Pro

PDF Service

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import jsPDF from "jspdf";

function createPdf(title) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Farm Manager Pro", 20, 20);

  doc.setFontSize(16);
  doc.text(title, 20, 32);

  doc.setFontSize(10);
  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    20,
    42
  );

  return doc;
}

function saveLines(
  doc,
  lines,
  filename
) {
  let y = 55;

  doc.setFontSize(11);

  lines.forEach((line) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }

    doc.text(
      String(line),
      20,
      y
    );

    y += 8;
  });

  doc.save(`${filename}.pdf`);
}

export function exportFarmSummary() {
  const profile =
    JSON.parse(
      localStorage.getItem(
        "profile"
      )
    ) || {};

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

  const lines = [
    `Farmer: ${profile.fullName || ""}`,
    `Farm: ${profile.farmName || ""}`,
    `County: ${profile.county || ""}`,
    `Country: ${profile.country || ""}`,
    "",
    `Farms: ${farms.length}`,
    `Livestock Records: ${livestock.length}`,
    `Inventory Items: ${inventory.length}`,
  ];

  const doc =
    createPdf("Farm Summary");

  saveLines(
    doc,
    lines,
    "farm-summary"
  );
}

export function exportFinanceReport() {
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

  const lines = [];

  lines.push("INCOME");
  lines.push("");

  incomes.forEach((item) => {
    lines.push(
      `${item.description || "Income"} : KES ${item.amount}`
    );
  });

  lines.push("");
  lines.push("EXPENSES");
  lines.push("");

  expenses.forEach((item) => {
    lines.push(
      `${item.description || "Expense"} : KES ${item.amount}`
    );
  });

  const doc =
    createPdf("Finance Report");

  saveLines(
    doc,
    lines,
    "finance-report"
  );
}

export function exportLivestockReport() {
  const records =
    JSON.parse(
      localStorage.getItem(
        "livestock"
      )
    ) || [];

  const lines = [];

  records.forEach((item) => {
    lines.push(
      `Date: ${item.date || ""}`
    );

    lines.push(
      `Birds: ${item.birds || ""}`
    );

    lines.push(
      `Eggs: ${item.eggs || ""}`
    );

    lines.push(
      `Feed: ${item.feed || ""}`
    );

    lines.push(
      `Deaths: ${item.deaths || ""}`
    );

    lines.push(
      "--------------------------------"
    );
  });

  const doc =
    createPdf("Livestock Report");

  saveLines(
    doc,
    lines,
    "livestock-report"
  );
}

export function exportDiseaseReport() {
  const history =
    JSON.parse(
      localStorage.getItem(
        "disease-history"
      )
    ) || [];

  const lines = [];

  history.forEach((item) => {
    lines.push(
      `Crop: ${item.crop}`
    );

    lines.push(
      `Disease: ${item.disease}`
    );

    lines.push(
      `Symptoms: ${item.symptoms}`
    );

    lines.push(
      `Recommendation: ${item.recommendation}`
    );

    lines.push(
      "--------------------------------"
    );
  });

  const doc =
    createPdf("Disease Report");

  saveLines(
    doc,
    lines,
    "disease-report"
  );
}