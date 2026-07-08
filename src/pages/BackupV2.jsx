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

import CreateBackupForm from "../components/CreateBackupForm";
import BackupList from "../components/BackupList";

import {
  createBackup,
  loadBackup,
  deleteBackup,
} from "../services/cloudBackupV2";

import {
  autoCloudSync,
} from "../services/autoCloudSync";

import useCloudBackups from "../hooks/useCloudBackups";

import {
  getBackupData,
  restoreBackupData,
} from "../utils/backupHelpers";

function BackupV2() {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [syncing, setSyncing] =
    useState(false);

  const {
    backups,
    loadingBackups,
    refreshBackups,
  } =
    useCloudBackups(user);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (
          currentUser
        ) => {
          setUser(
            currentUser
          );

          setLoading(
            false
          );

          if (
            currentUser &&
            navigator.onLine
          ) {
            await autoCloudSync(
              currentUser
            );
          }
        }
      );

    return () =>
      unsubscribe();
  }, []);

  useEffect(() => {
    async function handleOnline() {
      if (user) {
        await autoCloudSync(
          user
        );
      }
    }

    window.addEventListener(
      "online",
      handleOnline
    );

    return () => {
      window.removeEventListener(
        "online",
        handleOnline
      );
    };
  }, [user]);

  async function login() {
    try {
      const result =
        await signInWithPopup(
          auth,
          provider
        );

      setUser(
        result.user
      );
    } catch (error) {
      alert(
        error.message
      );
    }
  }

  async function logout() {
    await signOut(auth);

    setUser(null);
  }

  async function syncEntireFarm() {
    if (!user) return;

    setSyncing(true);

    await autoCloudSync(
      user
    );

    await refreshBackups();

    setSyncing(false);

    alert(
      "Farm synchronized successfully."
    );
  }

  async function restoreEntireFarm() {
    if (
      !user ||
      backups.length === 0
    ) {
      alert(
        "No backups available."
      );
      return;
    }

    const latest =
      backups[0];

    const result =
      await loadBackup(
        user.uid,
        latest.id
      );

    if (
      result.success
    ) {
      restoreBackupData(
        result.data
      );

      alert(
        "Latest backup restored."
      );

      window.location.reload();
    }
  }
    async function handleCreateBackup(
    backupName
  ) {
    if (!user) {
      alert(
        "Please sign in first."
      );
      return;
    }

    const result =
      await createBackup(
        user.uid,
        backupName,
        getBackupData()
      );

    if (result.success) {
      alert(
        "Cloud backup created successfully."
      );

      refreshBackups();
    } else {
      alert(result.message);
    }
  }

  async function handleRestoreBackup(
    backupId
  ) {
    if (!user) return;

    const result =
      await loadBackup(
        user.uid,
        backupId
      );

    if (!result.success) {
      alert(result.message);
      return;
    }

    restoreBackupData(
      result.data
    );

    alert(
      "Backup restored successfully."
    );

    window.location.reload();
  }

  async function handleDeleteBackup(
    backupId
  ) {
    if (!user) return;

    const confirmed =
      window.confirm(
        "Delete this backup?"
      );

    if (!confirmed) return;

    const result =
      await deleteBackup(
        user.uid,
        backupId
      );

    if (result.success) {
      alert("Backup deleted.");

      refreshBackups();
    } else {
      alert(result.message);
    }
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

  if (loading) {
    return (
      <main className="dashboard">
        <div className="farm-card">
          <h2>Loading...</h2>
        </div>
      </main>
    );
  }

  return (
    <main className="dashboard">
      <div className="farm-card">

        <h2>
          ☁️ Backup & Cloud Sync
        </h2>

        {!user ? (
          <button
            onClick={login}
          >
            🔐 Sign in with Google
          </button>
        ) : (
          <>
            <p>
              Signed in as
            </p>

            <strong>
              {user.email}
            </strong>

            <br />
            <br />

            <button
              onClick={logout}
            >
              🚪 Sign Out
            </button>

            <hr
              style={{
                margin:
                  "25px 0",
              }}
            />

            <button
              onClick={
                syncEntireFarm
              }
              disabled={
                syncing
              }
            >
              ☁️ Sync Entire Farm
            </button>

            <br />
            <br />

            <button
              onClick={
                restoreEntireFarm
              }
            >
              ☁️ Restore Latest Backup
            </button>

            <br />
            <br />

            <button
              onClick={
                exportData
              }
            >
              ⬇️ Export Local Backup
            </button>

            <hr
              style={{
                margin:
                  "25px 0",
              }}
            />

            <CreateBackupForm
              onCreateBackup={
                handleCreateBackup
              }
            />

            <br />

            {loadingBackups ? (
              <p>
                Loading cloud backups...
              </p>
            ) : (
              <BackupList
                backups={
                  backups
                }
                onRestore={
                  handleRestoreBackup
                }
                onDelete={
                  handleDeleteBackup
                }
              />
            )}

          </>
        )}

      </div>
    </main>
  );
}

export default BackupV2;