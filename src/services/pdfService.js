import jsPDF from "jspdf";

export function exportTextPdf(
  title,
  lines,
  fileName
) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text(title, 20, 20);

  doc.setFontSize(12);

  let y = 35;

  lines.forEach((line) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.text(
      String(line),
      20,
      y
    );

    y += 10;
  });

  doc.save(
    `${fileName}.pdf`
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

  records.forEach(
    (record) => {
      lines.push(
        `Date: ${record.date}`
      );
      lines.push(
        `Birds: ${record.birds}`
      );
      lines.push(
        `Eggs: ${record.eggs}`
      );
      lines.push(
        `Feed: ${record.feed} Kg`
      );
      lines.push(
        `Deaths: ${record.deaths}`
      );
      lines.push(
        `Notes: ${record.notes}`
      );
      lines.push(
        "------------------------"
      );
    }
  );

  exportTextPdf(
    "Livestock Report",
    lines,
    "livestock-report"
  );
}

export function exportDiseaseReport() {
  const records =
    JSON.parse(
      localStorage.getItem(
        "disease-history"
      )
    ) || [];

  const lines = [];

  records.forEach(
    (record) => {
      lines.push(
        `Date: ${record.date}`
      );
      lines.push(
        `Crop: ${record.crop}`
      );
      lines.push(
        `Disease: ${record.disease}`
      );
      lines.push(
        `Symptoms: ${record.symptoms}`
      );
      lines.push(
        `Recommendation: ${record.recommendation}`
      );
      lines.push(
        "------------------------"
      );
    }
  );

  exportTextPdf(
    "Disease Report",
    lines,
    "disease-report"
  );
}

export function exportFinanceReport() {
  const expenses =
    JSON.parse(
      localStorage.getItem(
        "expenses"
      )
    ) || [];

  const income =
    JSON.parse(
      localStorage.getItem(
        "incomes"
      )
    ) || [];

  const lines = [];

  lines.push(
    "INCOME"
  );

  income.forEach((item) => {
    lines.push(
      `${item.description || "Income"} - KES ${item.amount}`
    );
  });

  lines.push("");
  lines.push(
    "EXPENSES"
  );

  expenses.forEach(
    (item) => {
      lines.push(
        `${item.description || "Expense"} - KES ${item.amount}`
      );
    }
  );

  exportTextPdf(
    "Finance Report",
    lines,
    "finance-report"
  );
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

  const lines = [
    `Farmer: ${
      profile.fullName ||
      "Farmer"
    }`,
    `Farm Name: ${
      profile.farmName ||
      "Not Set"
    }`,
    `County: ${
      profile.county ||
      ""
    }`,
    `Country: ${
      profile.country ||
      ""
    }`,
    `Number of Farms: ${
      farms.length
    }`,
  ];

  exportTextPdf(
    "Farm Summary",
    lines,
    "farm-summary"
  );
}