function Backup() {
  function exportData() {
    const backup = {
      farms:
        JSON.parse(
          localStorage.getItem(
            "farms"
          )
        ) || [],

      fields:
        JSON.parse(
          localStorage.getItem(
            "fields"
          )
        ) || [],

      crops:
        JSON.parse(
          localStorage.getItem(
            "crops"
          )
        ) || [],

      expenses:
        JSON.parse(
          localStorage.getItem(
            "expenses"
          )
        ) || [],

      incomes:
        JSON.parse(
          localStorage.getItem(
            "incomes"
          )
        ) || [],

      harvests:
        JSON.parse(
          localStorage.getItem(
            "harvests"
          )
        ) || [],

      inventory:
        JSON.parse(
          localStorage.getItem(
            "inventory"
          )
        ) || [],

      inventoryHistory:
        JSON.parse(
          localStorage.getItem(
            "inventoryHistory"
          )
        ) || [],
    };

    const blob = new Blob(
      [
        JSON.stringify(
          backup,
          null,
          2
        ),
      ],
      {
        type: "application/json",
      }
    );

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "farm-manager-backup.json";

    link.click();
  }

  function importData(event) {
    const file =
      event.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = (e) => {
      const backup =
        JSON.parse(
          e.target.result
        );

      Object.keys(
        backup
      ).forEach((key) => {
        localStorage.setItem(
          key,
          JSON.stringify(
            backup[key]
          )
        );
      });

      alert(
        "Backup restored successfully!"
      );

      window.location.reload();
    };

    reader.readAsText(file);
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          ☁️ Backup & Restore
        </h2>

        <button
          onClick={
            exportData
          }
        >
          ⬇️ Export Backup
        </button>

        <br />
        <br />

        <input
          type="file"
          accept=".json"
          onChange={
            importData
          }
        />
      </div>
    </main>
  );
}

export default Backup;