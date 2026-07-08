/*
==========================================================

Farm Manager Pro

Cloud Sync Service

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const COLLECTION = "users";

export async function syncUserData(
  userId,
  data
) {
  try {
    await setDoc(
      doc(db, COLLECTION, userId),
      {
        ...data,
        updatedAt: serverTimestamp(),
      },
      {
        merge: true,
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
}

export async function downloadUserData(
  userId
) {
  try {
    const snapshot = await getDoc(
      doc(db, COLLECTION, userId)
    );

    if (!snapshot.exists()) {
      return {
        success: false,
        message: "No cloud data found.",
      };
    }

    return {
      success: true,
      data: snapshot.data(),
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
}

export function buildFarmBackup() {
  return {
    farms:
      JSON.parse(
        localStorage.getItem(
          "farm-manager-pro-farms"
        )
      ) || [],

    fields:
      JSON.parse(
        localStorage.getItem("fields")
      ) || [],

    crops:
      JSON.parse(
        localStorage.getItem("crops")
      ) || [],

    livestock:
      JSON.parse(
        localStorage.getItem("livestock")
      ) || [],

    inventory:
      JSON.parse(
        localStorage.getItem("inventory")
      ) || [],

    expenses:
      JSON.parse(
        localStorage.getItem("expenses")
      ) || [],

    incomes:
      JSON.parse(
        localStorage.getItem("incomes")
      ) || [],

    harvests:
      JSON.parse(
        localStorage.getItem("harvests")
      ) || [],

    diseaseHistory:
      JSON.parse(
        localStorage.getItem(
          "disease-history"
        )
      ) || [],

    marketReports:
      JSON.parse(
        localStorage.getItem(
          "marketReports"
        )
      ) || [],

    profile:
      JSON.parse(
        localStorage.getItem("profile")
      ) || {},
  };
}

export function restoreFarmBackup(
  backup
) {
  if (!backup) return;

  localStorage.setItem(
    "farm-manager-pro-farms",
    JSON.stringify(
      backup.farms || []
    )
  );

  localStorage.setItem(
    "fields",
    JSON.stringify(
      backup.fields || []
    )
  );

  localStorage.setItem(
    "crops",
    JSON.stringify(
      backup.crops || []
    )
  );

  localStorage.setItem(
    "livestock",
    JSON.stringify(
      backup.livestock || []
    )
  );

  localStorage.setItem(
    "inventory",
    JSON.stringify(
      backup.inventory || []
    )
  );

  localStorage.setItem(
    "expenses",
    JSON.stringify(
      backup.expenses || []
    )
  );

  localStorage.setItem(
    "incomes",
    JSON.stringify(
      backup.incomes || []
    )
  );

  localStorage.setItem(
    "harvests",
    JSON.stringify(
      backup.harvests || []
    )
  );

  localStorage.setItem(
    "disease-history",
    JSON.stringify(
      backup.diseaseHistory || []
    )
  );

  localStorage.setItem(
    "marketReports",
    JSON.stringify(
      backup.marketReports || []
    )
  );

  localStorage.setItem(
    "profile",
    JSON.stringify(
      backup.profile || {}
    )
  );
}