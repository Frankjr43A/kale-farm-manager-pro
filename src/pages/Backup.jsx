import {
  useEffect,
  useState,
} from "react";

import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  auth,
  provider,
} from "../firebase/firebase";

import {
  backupToCloud,
  restoreFromCloud,
} from "../services/cloudBackup";

function Backup() {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        }
      );

    return () =>
      unsubscribe();
  }, []);

  async function login() {
    try {
      const result =
        await signInWithPopup(
          auth,
          provider
        );

      setUser(result.user);
    } catch (error) {
      alert(error.message);
    }
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
  }

  function getBackupData() {
    return {
      farms:
        JSON.parse(
          localStorage.getItem(
            "farm-manager-pro-farms"
          )
        ) || [],

      fields:
        JSON.parse(
          localStorage.getItem(
            "fields"
          )
        ) || [],

      crops:
        JSON.parse(
          localStorage.getItem(
            "crops"
          )
        ) || [],

      expenses:
        JSON.parse(
          localStorage.getItem(
            "expenses"
          )
        ) || [],

      incomes:
        JSON.parse(
          localStorage.getItem(
            "incomes"
          )
        ) || [],

      harvests:
        JSON.parse(
          localStorage.getItem(
            "harvests"
          )
        ) || [],

      inventory:
        JSON.parse(
          localStorage.getItem(
            "inventory"
          )
        ) || [],

      inventoryHistory:
        JSON.parse(
          localStorage.getItem(
            "inventoryHistory"
          )
        ) || [],

      activities:
        JSON.parse(
          localStorage.getItem(
            "activities"
          )
        ) || [],

      profile:
        JSON.parse(
          localStorage.getItem(
            "profile"
          )
        ) || {},

      darkMode:
        JSON.parse(
          localStorage.getItem(
            "darkMode"
          )
        ) || false,
    };
  }

  async function cloudBackup() {
    if (!user) {
      alert(
        "Please sign in first."
      );
      return;
    }

    const result =
      await backupToCloud(
        user.uid,
        getBackupData()
      );

    alert(result.message);
  }

  async function cloudRestore() {
    if (!user) {
      alert(
        "Please sign in first."
      );
      return;
    }

    const result =
      await restoreFromCloud(
        user.uid
      );

    if (!result.success) {
      alert(result.message);
      return;
    }

    const data =
      result.data;

    if (data.farms) {
      localStorage.setItem(
        "farm-manager-pro-farms",
        JSON.stringify(
          data.farms
        )
      );
    }

    if (data.fields) {
      localStorage.setItem(
        "fields",
        JSON.stringify(
          data.fields
        )
      );
    }

    if (data.crops) {
      localStorage.setItem(
        "crops",
        JSON.stringify(
          data.crops
        )
      );
    }

    if (data.expenses) {
      localStorage.setItem(
        "expenses",
        JSON.stringify(
          data.expenses
        )
      );
    }

    if (data.incomes) {
      localStorage.setItem(
        "incomes",
        JSON.stringify(
          data.incomes
        )
      );
    }

    if (data.harvests) {
      localStorage.setItem(
        "harvests",
        JSON.stringify(
          data.harvests
        )
      );
    }

    if (data.inventory) {
      localStorage.setItem(
        "inventory",
        JSON.stringify(
          data.inventory
        )
      );
    }

    if (
      data.inventoryHistory
    ) {
      localStorage.setItem(
        "inventoryHistory",
        JSON.stringify(
          data.inventoryHistory
        )
      );
    }

    if (data.activities) {
      localStorage.setItem(
        "activities",
        JSON.stringify(
          data.activities
        )
      );
    }

    if (data.profile) {
      localStorage.setItem(
        "profile",
        JSON.stringify(
          data.profile
        )
      );
    }

    if (
      data.darkMode !==
      undefined
    ) {
      localStorage.setItem(
        "darkMode",
        JSON.stringify(
          data.darkMode
        )
      );
    }

    alert(
      "Cloud backup restored successfully."
    );

    window.location.reload();
  }

  function exportData() {
    const backup =
      getBackupData();

    const blob =
      new Blob(
        [
          JSON.stringify(
            backup,
            null,
            2
          ),
        ],
        {
          type:
            "application/json",
        }
      );

    const link =
      document.createElement(
        "a"
      );

    link.href =
      URL.createObjectURL(
        blob
      );

    link.download =
      "farm-manager-backup.json";

    link.click();
  }

  function importData(
    event
  ) {
    const file =
      event.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = (
      e
    ) => {
      const backup =
        JSON.parse(
          e.target.result
        );

      Object.keys(
        backup
      ).forEach((key) => {
        localStorage.setItem(
          key,
          JSON.stringify(
            backup[key]
          )
        );
      });

      window.location.reload();
    };

    reader.readAsText(file);
  }

  if (loading) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>
            Loading...
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          ☁️ Backup &
          Restore
        </h2>

        {!user ? (
          <button
            onClick={login}
          >
            🔐 Sign in with
            Google
          </button>
        ) : (
          <>
            <p>
              Signed in as:
              <br />
              <strong>
                {
                  user.email
                }
              </strong>
            </p>

            <button
              onClick={
                logout
              }
            >
              🚪 Sign Out
            </button>

            <br />
            <br />

            <button
              onClick={
                cloudBackup
              }
            >
              ☁️ Backup to
              Cloud
            </button>

            <br />
            <br />

            <button
              onClick={
                cloudRestore
              }
            >
              ☁️ Restore
              from Cloud
            </button>

            <br />
            <br />
          </>
        )}

        <button
          onClick={
            exportData
          }
        >
          ⬇️ Export Backup
        </button>

        <br />
        <br />

        <input
          type="file"
          accept=".json"
          onChange={
            importData
          }
        />
      </div>
    </main>
  );
}

export default Backup;