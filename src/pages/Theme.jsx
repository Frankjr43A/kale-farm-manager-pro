/*
==========================================================

Farm Manager Pro

Theme Settings

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import { useEffect, useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "darkMode"
      );

    const enabled =
      saved === "true";

    setDarkMode(enabled);

    document.body.classList.toggle(
      "dark-mode",
      enabled
    );
  }, []);

  function toggleTheme() {
    const enabled =
      !darkMode;

    setDarkMode(enabled);

    document.body.classList.toggle(
      "dark-mode",
      enabled
    );

    localStorage.setItem(
      "darkMode",
      enabled
    );
  }

  return (
    <main className="dashboard">

      <div className="farm-card">

        <h2>
          🎨 Theme Settings
        </h2>

        <p>
          Customize the appearance of
          Farm Manager Pro.
        </p>

        <br />

        <button
          onClick={
            toggleTheme
          }
        >
          {darkMode
            ? "☀️ Switch to Light Mode"
            : "🌙 Switch to Dark Mode"}
        </button>

        <br />
        <br />

        <p>
          Current Theme:
          <strong>
            {" "}
            {darkMode
              ? "Dark"
              : "Light"}
          </strong>
        </p>

      </div>

    </main>
  );
}

export default Theme;