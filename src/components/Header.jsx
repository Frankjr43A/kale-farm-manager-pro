import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

function Header() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [profile, setProfile] =
    useState({});

  const [isOnline, setIsOnline] =
    useState(navigator.onLine);

  const [today, setToday] =
    useState("");

  const [lastBackup, setLastBackup] =
    useState("");

  const [notifications, setNotifications] =
    useState(0);

  useEffect(() => {
    const savedProfile =
      JSON.parse(
        localStorage.getItem(
          "profile"
        )
      ) || {};

    setProfile(savedProfile);

    const backup =
      localStorage.getItem(
        "lastBackup"
      );

    if (backup) {
      setLastBackup(
        new Date(
          backup
        ).toLocaleString()
      );
    }

    setToday(
      new Date().toLocaleDateString(
        undefined,
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      )
    );

    const inventory =
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || [];

    const lowStock =
      inventory.filter(
        (item) =>
          Number(
            item.quantity
          ) <= 2
      );

    setNotifications(
      lowStock.length + 3
    );
  }, [location.pathname]);

  useEffect(() => {
    function goOnline() {
      setIsOnline(true);
    }

    function goOffline() {
      setIsOnline(false);
    }

    window.addEventListener(
      "online",
      goOnline
    );

    window.addEventListener(
      "offline",
      goOffline
    );

    return () => {
      window.removeEventListener(
        "online",
        goOnline
      );

      window.removeEventListener(
        "offline",
        goOffline
      );
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <h1>
          🌿 Farm Manager Pro
        </h1>

        <p>
          Smart Farming Made Simple
        </p>

        <small>
          📅 {today}
        </small>

        <br />

        <small>
          ☁️ Last backup:{" "}
          {lastBackup ||
            "Never"}
        </small>
      </div>

      <div className="profile">
        {profile.photo ? (
          <img
            src={
              profile.photo
            }
            alt="Profile"
          />
        ) : (
          <div
            style={{
              fontSize:
                "2rem",
            }}
          >
            👨🏽‍🌾
          </div>
        )}

        <div className="profile-info">
          <strong>
            {profile.fullName ||
              "Farmer"}
          </strong>

          <small>
            {profile.farmName ||
              "No Farm Name"}
          </small>

          <small>
            {isOnline
              ? "🟢 Online"
              : "🔴 Offline"}
          </small>

          <button
            onClick={() =>
              navigate(
                "/notifications"
              )
            }
            style={{
              marginTop:
                "6px",
              border:
                "none",
              background:
                "rgba(255,255,255,.2)",
              color:
                "white",
              padding:
                "6px 10px",
              borderRadius:
                "10px",
              cursor:
                "pointer",
              fontSize:
                "12px",
            }}
          >
            🔔{" "}
            {
              notifications
            }{" "}
            Alerts
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;