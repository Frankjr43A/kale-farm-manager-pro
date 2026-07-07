// src/services/marketService.js

import marketOfflineData from "../data/marketOfflineData";

const STORAGE_KEY = "farm-manager-pro-market-cache";
const CACHE_VERSION = 1;

/**
 * Returns current ISO timestamp.
 */
function nowIso() {
  return new Date().toISOString();
}

/**
 * Creates a deep copy of an object.
 */
function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

/**
 * Returns the bundled offline market data.
 */
export function getOfflineMarketData() {
  return clone(marketOfflineData);
}

/**
 * Loads cached market data from localStorage.
 */
export function loadMarketCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);

    if (parsed.version !== CACHE_VERSION) {
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error(
      "Failed to load market cache:",
      error
    );

    return null;
  }
}

/**
 * Saves market data into localStorage.
 */
export function saveMarketCache(data) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        version: CACHE_VERSION,
        savedAt: nowIso(),
        data,
      })
    );

    return true;
  } catch (error) {
    console.error(
      "Failed to save market cache:",
      error
    );

    return false;
  }
}
/**
 * Returns market data.
 *
 * Priority:
 * 1. Cached data
 * 2. Offline bundled data
 */
export async function getMarketData() {
  const cached = loadMarketCache();

  if (cached) {
    return {
      success: true,
      source: "cache",
      data: cached,
    };
  }

  const offline = getOfflineMarketData();

  saveMarketCache(offline);

  return {
    success: true,
    source: "offline",
    data: offline,
  };
}

/**
 * Refreshes market data from a remote source.
 *
 * The fetcher parameter should return
 * fresh market data.
 */
export async function refreshMarketData(fetcher) {
  if (typeof fetcher !== "function") {
    return {
      success: false,
      message: "No fetcher supplied.",
    };
  }

  try {
    const freshData = await fetcher();

    saveMarketCache(freshData);

    return {
      success: true,
      source: "remote",
      data: freshData,
    };
  } catch (error) {
    console.error(
      "Market refresh failed:",
      error
    );

    return {
      success: true,
      source: "offline",
      data: (await getMarketData()).data,
      warning: error.message,
    };
  }
}

/**
 * Searches market prices.
 */
export function searchMarketPrices(
  data,
  searchTerm = ""
) {
  const term = searchTerm
    .trim()
    .toLowerCase();

  if (!term) {
    return data;
  }

  return {
    ...data,
    prices: data.prices.filter(
      (item) =>
        item.crop
          .toLowerCase()
          .includes(term) ||
        item.county
          .toLowerCase()
          .includes(term) ||
        item.category
          .toLowerCase()
          .includes(term)
    ),
  };
}
/**
 * Filters prices by county.
 */
export function filterByCounty(
  data,
  county
) {
  if (!county || county === "All") {
    return data;
  }

  return {
    ...data,
    prices: data.prices.filter(
      (item) => item.county === county
    ),
  };
}

/**
 * Filters prices by category.
 */
export function filterByCategory(
  data,
  category
) {
  if (!category || category === "All") {
    return data;
  }

  return {
    ...data,
    prices: data.prices.filter(
      (item) =>
        item.category === category
    ),
  };
}

/**
 * Sorts market prices.
 */
export function sortPrices(
  data,
  field = "crop",
  direction = "asc"
) {
  const sorted = [...data.prices].sort(
    (a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) {
        return direction === "asc"
          ? -1
          : 1;
      }

      if (valueA > valueB) {
        return direction === "asc"
          ? 1
          : -1;
      }

      return 0;
    }
  );

  return {
    ...data,
    prices: sorted,
  };
}

/**
 * Clears the cached market data.
 */
export function clearMarketCache() {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Default Market Service
 */
const marketService = {
  getOfflineMarketData,
  getMarketData,
  refreshMarketData,
  loadMarketCache,
  saveMarketCache,
  searchMarketPrices,
  filterByCounty,
  filterByCategory,
  sortPrices,
  clearMarketCache,
};

export default marketService;