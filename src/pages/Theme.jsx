import { useEffect, useState } from "react";

function Theme() {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        "darkMode"
      );

    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add(
        "dark-mode"
      );
    }
  }, []);

  function toggleTheme() {
    const newMode =
      !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add(
        "dark-mode"
      );

      localStorage.setItem(
        "darkMode",
        "true"
      );
    } else {
      document.body.classList.remove(
        "dark-mode"
      );

      localStorage.setItem(
        "darkMode",
        "false"
      );
    }
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>🌙 Theme</h2>

        <button
          onClick={
            toggleTheme
          }
        >
          {darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode"}
        </button>
      </div>
    </main>
  );
}

export default Theme;