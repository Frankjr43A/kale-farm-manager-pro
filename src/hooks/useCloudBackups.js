import { useEffect, useState } from "react";

import {
  getBackups,
} from "../services/cloudBackupV2";

function useCloudBackups(user) {
  const [backups, setBackups] =
    useState([]);

  const [loadingBackups,
    setLoadingBackups] =
    useState(false);

  async function refreshBackups() {
    if (!user) {
      setBackups([]);
      return;
    }

    try {
      setLoadingBackups(true);

      const result =
        await getBackups(
          user.uid
        );

      if (result.success) {
        setBackups(
          result.backups
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingBackups(
        false
      );
    }
  }

  useEffect(() => {
    refreshBackups();
  }, [user]);

  return {
    backups,
    setBackups,
    loadingBackups,
    refreshBackups,
  };
}

export default useCloudBackups;