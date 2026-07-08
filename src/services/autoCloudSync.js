import { createBackup } from "./cloudBackupV2";
import { getBackupData } from "../utils/backupHelpers";

export async function autoCloudSync(user) {
  if (!navigator.onLine) return;

  if (!user) return;

  try {
    await createBackup(
      user.uid,
      "Auto Sync",
      getBackupData()
    );

    localStorage.setItem(
      "lastAutoSync",
      new Date().toISOString()
    );

    console.log(
      "✅ Auto Cloud Sync Complete"
    );
  } catch (error) {
    console.error(
      "Auto Sync Failed",
      error
    );
  }
}