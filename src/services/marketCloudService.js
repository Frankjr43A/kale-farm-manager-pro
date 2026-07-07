import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const COLLECTION =
  "marketReports";

export async function createMarketReport(
  report
) {
  try {
    await addDoc(
      collection(
        db,
        COLLECTION
      ),
      {
        ...report,
        createdAt:
          serverTimestamp(),
      }
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error(
      error
    );

    return {
      success: false,
      error:
        error.message,
    };
  }
}

export async function getMarketReports() {
  try {
    const q = query(
      collection(
        db,
        COLLECTION
      ),
      orderBy(
        "createdAt",
        "desc"
      )
    );

    const snapshot =
      await getDocs(q);

    const reports =
      snapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

    return {
      success: true,
      reports,
    };
  } catch (error) {
    console.error(
      error
    );

    return {
      success: false,
      reports: [],
      error:
        error.message,
    };
  }
}