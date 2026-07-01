import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(
        `${import.meta.env.BASE_URL}sw.js`
      )
      .then(() => {
        console.log(
          "Service Worker Registered"
        );
      })
      .catch((error) => {
        console.log(
          "Service Worker Error:",
          error
        );
      });
  });
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter
      basename={import.meta.env.BASE_URL}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);