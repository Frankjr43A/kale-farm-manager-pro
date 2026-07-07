import {
  getMarketPrices,
  saveMarketPrices,
} from "./marketPriceService";

export async function syncMarketPrices() {
  try {
    if (!navigator.onLine) {
      return {
        success: false,
        message:
          "No internet connection. Using saved market prices.",
      };
    }

    const prices =
      getMarketPrices();

    // Placeholder for future APIs.
    // This is where live market data
    // will be downloaded.

    saveMarketPrices(
      prices
    );

    localStorage.setItem(
      "marketPricesLastUpdated",
      new Date().toISOString()
    );

    return {
      success: true,
      message:
        "Market prices synchronized successfully.",
      prices,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        "Unable to synchronize market prices.",
    };
  }
}

export function getLastMarketUpdate() {
  return (
    localStorage.getItem(
      "marketPricesLastUpdated"
    ) ||
    "Never"
  );
}