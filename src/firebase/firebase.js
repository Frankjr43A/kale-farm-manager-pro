// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh-g8zBvJ6c8w3Zc51sbw4R-ROgztRjVw",
  authDomain: "farm-manager-pro-b3b17.firebaseapp.com",
  projectId: "farm-manager-pro-b3b17",
  storageBucket: "farm-manager-pro-b3b17.firebasestorage.app",
  messagingSenderId: "371551869553",
  appId: "1:371551869553:web:098bfd74931c4275dc59d0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;