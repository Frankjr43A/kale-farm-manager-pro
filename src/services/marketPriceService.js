export async function getMarketPrices() {
  try {
    const response = await fetch(
      "https://api.commodities-api.com/api/latest"
    );

    if (!response.ok) {
      throw new Error("Unable to load market prices.");
    }

    const data = await response.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export function getOfflineMarketPrices() {
  return [
    {
      crop: "Kale",
      price: 20,
      unit: "bundle",
    },
    {
      crop: "Tomatoes",
      price: 120,
      unit: "crate",
    },
    {
      crop: "Maize",
      price: 3500,
      unit: "90kg bag",
    },
    {
      crop: "Beans",
      price: 8500,
      unit: "90kg bag",
    },
    {
      crop: "Eggs",
      price: 420,
      unit: "tray",
    },
    {
      crop: "Broiler Chicken",
      price: 650,
      unit: "bird",
    },
    {
      crop: "Layer Chicken",
      price: 900,
      unit: "bird",
    },
    {
      crop: "Milk",
      price: 55,
      unit: "litre",
    },
  ];
}