import { useEffect, useState } from "react";

import {
  createMarketReport,
  getMarketReports,
} from "../services/marketCloudService";

export default function useMarketReports() {
  const [reports,
    setReports] =
    useState([]);

  const [loading,
    setLoading] =
    useState(true);

  async function loadReports() {
    setLoading(true);

    try {
      if (
        navigator.onLine
      ) {
        const result =
          await getMarketReports();

        if (
          result.success
        ) {
          setReports(
            result.reports
          );

          localStorage.setItem(
            "marketReports",
            JSON.stringify(
              result.reports
            )
          );

          setLoading(
            false
          );

          return;
        }
      }

      const local =
        JSON.parse(
          localStorage.getItem(
            "marketReports"
          )
        ) || [];

      setReports(
        local
      );
    } catch (
      error
    ) {
      console.error(
        error
      );
    }

    setLoading(
      false
    );
  }

  async function addReport(
    report
  ) {
    try {
      const local =
        JSON.parse(
          localStorage.getItem(
            "marketReports"
          )
        ) || [];

      const updated = [
        report,
        ...local,
      ];

      localStorage.setItem(
        "marketReports",
        JSON.stringify(
          updated
        )
      );

      setReports(
        updated
      );

      if (
        navigator.onLine
      ) {
        await createMarketReport(
          report
        );
      }

      return {
        success: true,
      };
    } catch (
      error
    ) {
      console.error(
        error
      );

      return {
        success: false,
      };
    }
  }

  useEffect(() => {
    loadReports();
  }, []);

  return {
    reports,
    loading,
    addReport,
    reload:
      loadReports,
  };
}