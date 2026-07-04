import { db } from "../firebase/firebase";
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

export const backupToCloud = async (
  userId,
  data
) => {
  try {
    await setDoc(
      doc(db, "backups", userId),
      {
        data,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    return {
      success: true,
      message:
        "Backup completed successfully.",
    };
  } catch (error) {
    console.error(
      "Cloud backup error:",
      error
    );

    return {
      success: false,
      message: error.message,
    };
  }
};

export const restoreFromCloud =
  async (userId) => {
    try {
      const snapshot =
        await getDoc(
          doc(
            db,
            "backups",
            userId
          )
        );

      if (!snapshot.exists()) {
        return {
          success: false,
          message:
            "No cloud backup found.",
        };
      }

      return {
        success: true,
        data: snapshot.data().data,
      };
    } catch (error) {
      console.error(
        "Cloud restore error:",
        error
      );

      return {
        success: false,
        message: error.message,
      };
    }
  };