import { useState } from "react";

function CreateBackupForm({
  onCreateBackup,
}) {
  const [
    backupName,
    setBackupName,
  ] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onCreateBackup(
      backupName.trim()
    );

    setBackupName("");
  }

  return (
    <div className="farm-card">
      <h3>
        ☁️ Create Cloud
        Backup
      </h3>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          type="text"
          placeholder="Backup name (optional)"
          value={
            backupName
          }
          onChange={(e) =>
            setBackupName(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom:
              "12px",
            borderRadius:
              "10px",
          }}
        />

        <button
          type="submit"
        >
          ☁️ Create Backup
        </button>
      </form>
    </div>
  );
}

export default CreateBackupForm;