// src/hooks/useMarket.js

import { useEffect, useMemo, useState } from "react";

import {
  getMarketData,
  searchMarketPrices,
  filterByCounty,
  filterByCategory,
  sortPrices,
} from "../services/marketService";

export default function useMarket() {
  const [marketData, setMarketData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [county, setCounty] =
    useState("All");

  const [category, setCategory] =
    useState("All");

  const [sortField, setSortField] =
    useState("crop");

  const [sortDirection,
    setSortDirection] =
    useState("asc");

  async function loadMarket() {
    setLoading(true);

    const result =
      await getMarketData();

    if (result.success) {
      setMarketData(result.data);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMarket();
  }, []);
    const filteredMarket = useMemo(() => {
    if (!marketData) {
      return null;
    }

    let data = marketData;

    data = searchMarketPrices(
      data,
      search
    );

    data = filterByCounty(
      data,
      county
    );

    data = filterByCategory(
      data,
      category
    );

    data = sortPrices(
      data,
      sortField,
      sortDirection
    );

    return data;
  }, [
    marketData,
    search,
    county,
    category,
    sortField,
    sortDirection,
  ]);

  function reloadMarket() {
    loadMarket();
  }
    return {
    loading,

    marketData: filteredMarket,

    rawMarketData: marketData,

    search,
    setSearch,

    county,
    setCounty,

    category,
    setCategory,

    sortField,
    setSortField,

    sortDirection,
    setSortDirection,

    reloadMarket,
  };
}