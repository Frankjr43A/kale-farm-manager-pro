/*
==========================================================

Farm Manager Pro

Create Backup Form

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

import { useState } from "react";

function CreateBackupForm({
  onCreateBackup,
}) {
  const [backupName, setBackupName] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const name =
      backupName.trim() ||
      `Backup ${new Date().toLocaleString()}`;

    onCreateBackup(name);

    setBackupName("");
  }

  return (
    <div className="farm-card">

      <h3>
        ☁️ Create Cloud Backup
      </h3>

      <p>
        Save the current state of your farm
        to Firebase.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Example: Before Harvest"
          value={backupName}
          onChange={(e) =>
            setBackupName(
              e.target.value
            )
          }
        />

        <button type="submit">
          ☁️ Create Backup
        </button>

      </form>

    </div>
  );
}

export default CreateBackupForm;