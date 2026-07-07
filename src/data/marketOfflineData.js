// src/data/marketOfflineData.js

/**
 * ==========================================================
 * Farm Manager Pro
 * Offline Market Database
 * Version: 2.0
 * ==========================================================
 *
 * This file contains the default offline market prices.
 * The data is used whenever:
 *
 * • Internet is unavailable
 * • Firebase has no market data
 * • First app installation
 *
 * Firebase data will always override this data after syncing.
 */

const marketOfflineData = {
  lastUpdated: new Date().toISOString(),
  source: "Offline Cache",
  currency: "KES",

  counties: [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Nakuru",
    "Eldoret",
    "Meru",
    "Machakos",
    "Nyeri",
    "Kitale",
    "Malindi",
  ],

  categories: [
    {
      id: "vegetables",
      name: "Vegetables",
    },
    {
      id: "fruits",
      name: "Fruits",
    },
    {
      id: "cereals",
      name: "Cereals",
    },
    {
      id: "livestock",
      name: "Livestock Products",
    },
  ],

  prices: [
    {
      id: 1,
      crop: "Kale",
      category: "vegetables",
      county: "Nairobi",
      unit: "Bundle",
      price: 35,
      trend: "up",
      change: 3.2,
      updated: "Today",
    },

    {
      id: 2,
      crop: "Tomatoes",
      category: "vegetables",
      county: "Nairobi",
      unit: "Kg",
      price: 95,
      trend: "up",
      change: 5.4,
      updated: "Today",
    },

    {
      id: 3,
      crop: "Onions",
      category: "vegetables",
      county: "Nakuru",
      unit: "Kg",
      price: 75,
      trend: "down",
      change: -2.1,
      updated: "Today",
    },

    {
      id: 4,
      crop: "Spinach",
      category: "vegetables",
      county: "Meru",
      unit: "Bundle",
      price: 28,
      trend: "stable",
      change: 0,
      updated: "Today",
    },

    {
      id: 5,
      crop: "Cabbage",
      category: "vegetables",
      county: "Eldoret",
      unit: "Head",
      price: 60,
      trend: "up",
      change: 2.4,
      updated: "Today",
    },

    {
      id: 6,
      crop: "Maize",
      category: "cereals",
      county: "Kitale",
      unit: "90 Kg Bag",
      price: 4200,
      trend: "stable",
      change: 0,
      updated: "Today",
    },

    {
      id: 7,
      crop: "Beans",
      category: "cereals",
      county: "Nyeri",
      unit: "90 Kg Bag",
      price: 7200,
      trend: "up",
      change: 4.7,
      updated: "Today",
    },

    {
      id: 8,
      crop: "Avocado",
      category: "fruits",
      county: "Murang'a",
      unit: "Piece",
      price: 18,
      trend: "up",
      change: 1.8,
      updated: "Today",
    },

    {
      id: 9,
      crop: "Bananas",
      category: "fruits",
      county: "Kisumu",
      unit: "Bunch",
      price: 180,
      trend: "stable",
      change: 0,
      updated: "Today",
    },

    {
      id: 10,
      crop: "Milk",
      category: "livestock",
      county: "Nakuru",
      unit: "Litre",
      price: 65,
      trend: "up",
      change: 1.5,
      updated: "Today",
    },

    {
      id: 11,
      crop: "Eggs",
      category: "livestock",
      county: "Kiambu",
      unit: "Tray",
      price: 470,
      trend: "down",
      change: -1.2,
      updated: "Today",
    },

    {
      id: 12,
      crop: "Broiler Chicken",
      category: "livestock",
      county: "Machakos",
      unit: "Bird",
      price: 650,
      trend: "up",
      change: 6.3,
      updated: "Today",
    },
  ],
};

export default marketOfflineData;