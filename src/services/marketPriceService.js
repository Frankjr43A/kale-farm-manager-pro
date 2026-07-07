const DEFAULT_PRICES = {
  Kenya: {
    currency: "KES",
    markets: {
      "Siaya": {
        kale: {
          price: 2,
          unit: "per leaf",
        },
        tomatoes: {
          price: 110,
          unit: "per kg",
        },
        eggs: {
          price: 15,
          unit: "each",
        },
        layers: {
          price: 650,
          unit: "each",
        },
      },
    },
  },

  Uganda: {
    currency: "UGX",
    markets: {
      Kampala: {
        kale: {
          price: 200,
          unit: "per leaf",
        },
        tomatoes: {
          price: 3500,
          unit: "per kg",
        },
        eggs: {
          price: 500,
          unit: "each",
        },
        layers: {
          price: 18000,
          unit: "each",
        },
      },
    },
  },

  USA: {
    currency: "USD",
    markets: {
      Dallas: {
        kale: {
          price: 0.2,
          unit: "per leaf",
        },
        tomatoes: {
          price: 2,
          unit: "per kg",
        },
        eggs: {
          price: 0.25,
          unit: "each",
        },
        layers: {
          price: 10,
          unit: "each",
        },
      },
    },
  },
};

export function getMarketPrices() {
  const saved =
    JSON.parse(
      localStorage.getItem(
        "marketPrices"
      )
    );

  if (saved) {
    return saved;
  }

  localStorage.setItem(
    "marketPrices",
    JSON.stringify(
      DEFAULT_PRICES
    )
  );

  return DEFAULT_PRICES;
}

export function saveMarketPrices(
  prices
) {
  localStorage.setItem(
    "marketPrices",
    JSON.stringify(prices)
  );
}

export function getCurrentMarket() {
  const saved =
    JSON.parse(
      localStorage.getItem(
        "currentMarket"
      )
    );

  if (saved) {
    return saved;
  }

  const market = {
    country: "Kenya",
    region: "Siaya",
  };

  localStorage.setItem(
    "currentMarket",
    JSON.stringify(
      market
    )
  );

  return market;
}

export function setCurrentMarket(
  country,
  region
) {
  localStorage.setItem(
    "currentMarket",
    JSON.stringify({
      country,
      region,
    })
  );
}

export function getCurrentPrices() {
  const prices =
    getMarketPrices();

  const market =
    getCurrentMarket();

  const country =
    prices[
      market.country
    ];

  if (!country) {
    return null;
  }

  return (
    country.markets[
      market.region
    ] || null
  );
}