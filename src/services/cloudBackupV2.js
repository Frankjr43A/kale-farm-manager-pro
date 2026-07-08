/*
==========================================================

Farm Manager Pro

Cloud Backup V2

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export async function createBackup(
  userId,
  backupName,
  data
) {
  try {
    const backupsRef = collection(
      db,
      "users",
      userId,
      "backups"
    );

    const docRef =
      await addDoc(backupsRef, {
        name:
          backupName ||
          `Backup ${new Date().toLocaleString()}`,
        data,
        version: "2.4.0",
        createdAt:
          serverTimestamp(),
      });

    localStorage.setItem(
      "lastBackup",
      new Date().toISOString()
    );

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
}

export async function getBackups(
  userId
) {
  try {
    const backupsRef = collection(
      db,
      "users",
      userId,
      "backups"
    );

    const q = query(
      backupsRef,
      orderBy(
        "createdAt",
        "desc"
      )
    );

    const snapshot =
      await getDocs(q);

    const backups =
      snapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

    return {
      success: true,
      backups,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      backups: [],
      message:
        error.message,
    };
  }
}

export async function loadBackup(
  userId,
  backupId
) {
  try {
    const snapshot =
      await getDoc(
        doc(
          db,
          "users",
          userId,
          "backups",
          backupId
        )
      );

    if (!snapshot.exists()) {
      return {
        success: false,
        message:
          "Backup not found.",
      };
    }

    return {
      success: true,
      data:
        snapshot.data().data,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        error.message,
    };
  }
}

export async function deleteBackup(
  userId,
  backupId
) {
  try {
    await deleteDoc(
      doc(
        db,
        "users",
        userId,
        "backups",
        backupId
      )
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message:
        error.message,
    };
  }
}