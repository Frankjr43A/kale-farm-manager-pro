/*
==========================================================

Farm Manager Pro

Backup Helpers

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

export function getBackupData() {
  return {
    farms:
      JSON.parse(
        localStorage.getItem(
          "farm-manager-pro-farms"
        )
      ) || [],

    fields:
      JSON.parse(
        localStorage.getItem("fields")
      ) || [],

    crops:
      JSON.parse(
        localStorage.getItem("crops")
      ) || [],

    livestock:
      JSON.parse(
        localStorage.getItem("livestock")
      ) || [],

    expenses:
      JSON.parse(
        localStorage.getItem("expenses")
      ) || [],

    incomes:
      JSON.parse(
        localStorage.getItem("incomes")
      ) || [],

    harvests:
      JSON.parse(
        localStorage.getItem("harvests")
      ) || [],

    inventory:
      JSON.parse(
        localStorage.getItem("inventory")
      ) || [],

    inventoryHistory:
      JSON.parse(
        localStorage.getItem(
          "inventoryHistory"
        )
      ) || [],

    activities:
      JSON.parse(
        localStorage.getItem(
          "activities"
        )
      ) || [],

    diseaseHistory:
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [],

    marketReports:
      JSON.parse(
        localStorage.getItem(
          "marketReports"
        )
      ) || [],

    notifications:
      JSON.parse(
        localStorage.getItem(
          "notifications"
        )
      ) || [],

    weather:
      JSON.parse(
        localStorage.getItem(
          "weather"
        )
      ) || {},

    cropCalendar:
      JSON.parse(
        localStorage.getItem(
          "cropCalendar"
        )
      ) || [],

    profile:
      JSON.parse(
        localStorage.getItem("profile")
      ) || {},

    darkMode:
      JSON.parse(
        localStorage.getItem("darkMode")
      ) || false,

    version: "2.4.0",

    backupDate:
      new Date().toISOString(),
  };
}

export function restoreBackupData(
  data
) {
  if (!data) return;

  const save = (key, value) => {
    if (value !== undefined) {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    }
  };

  save(
    "farm-manager-pro-farms",
    data.farms
  );

  save("fields", data.fields);

  save("crops", data.crops);

  save(
    "livestock",
    data.livestock
  );

  save(
    "expenses",
    data.expenses
  );

  save(
    "incomes",
    data.incomes
  );

  save(
    "harvests",
    data.harvests
  );

  save(
    "inventory",
    data.inventory
  );

  save(
    "inventoryHistory",
    data.inventoryHistory
  );

  save(
    "activities",
    data.activities
  );

  save(
    "disease-history",
    data.diseaseHistory
  );

  save(
    "marketReports",
    data.marketReports
  );

  save(
    "notifications",
    data.notifications
  );

  save(
    "weather",
    data.weather
  );

  save(
    "cropCalendar",
    data.cropCalendar
  );

  save(
    "profile",
    data.profile
  );

  save(
    "darkMode",
    data.darkMode
  );
}