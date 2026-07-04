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

    activities:
      JSON.parse(
        localStorage.getItem(
          "activities"
        )
      ) || [],

    profile:
      JSON.parse(
        localStorage.getItem(
          "profile"
        )
      ) || {},

    darkMode:
      JSON.parse(
        localStorage.getItem(
          "darkMode"
        )
      ) || false,
  };
}

export function restoreBackupData(
  data
) {
  if (data.farms) {
    localStorage.setItem(
      "farm-manager-pro-farms",
      JSON.stringify(
        data.farms
      )
    );
  }

  if (data.fields) {
    localStorage.setItem(
      "fields",
      JSON.stringify(
        data.fields
      )
    );
  }

  if (data.crops) {
    localStorage.setItem(
      "crops",
      JSON.stringify(
        data.crops
      )
    );
  }

  if (data.expenses) {
    localStorage.setItem(
      "expenses",
      JSON.stringify(
        data.expenses
      )
    );
  }

  if (data.incomes) {
    localStorage.setItem(
      "incomes",
      JSON.stringify(
        data.incomes
      )
    );
  }

  if (data.harvests) {
    localStorage.setItem(
      "harvests",
      JSON.stringify(
        data.harvests
      )
    );
  }

  if (data.inventory) {
    localStorage.setItem(
      "inventory",
      JSON.stringify(
        data.inventory
      )
    );
  }

  if (
    data.inventoryHistory
  ) {
    localStorage.setItem(
      "inventoryHistory",
      JSON.stringify(
        data.inventoryHistory
      )
    );
  }

  if (data.activities) {
    localStorage.setItem(
      "activities",
      JSON.stringify(
        data.activities
      )
    );
  }

  if (data.profile) {
    localStorage.setItem(
      "profile",
      JSON.stringify(
        data.profile
      )
    );
  }

  if (
    data.darkMode !==
    undefined
  ) {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(
        data.darkMode
      )
    );
  }
}