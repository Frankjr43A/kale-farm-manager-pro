/*
==========================================================

Farm Manager Pro

Cloud Backup List

Version : 2.4.0

Developer : Francis Junior

==========================================================
*/

function BackupList({
  backups,
  onRestore,
  onDelete,
}) {
  if (
    !backups ||
    backups.length === 0
  ) {
    return (
      <div className="farm-card">

        <h3>
          ☁️ My Cloud Backups
        </h3>

        <p>
          No cloud backups available.
        </p>

      </div>
    );
  }

  return (
    <div className="farm-card">

      <h3>
        ☁️ My Cloud Backups
      </h3>

      <p>
        Total Backups:
        <strong>
          {" "}
          {backups.length}
        </strong>
      </p>

      <br />

      {backups.map(
        (backup, index) => (

          <div
            key={backup.id}
            className="tasks-card"
            style={{
              marginBottom: "18px",
            }}
          >

            <h3>
              📦 Backup {index + 1}
            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {backup.name}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {backup.createdAt?.toDate
                ? backup.createdAt
                    .toDate()
                    .toLocaleString()
                : "Unknown"}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >

              <button
                onClick={() =>
                  onRestore(
                    backup.id
                  )
                }
              >
                ☁️ Restore
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  onDelete(
                    backup.id
                  )
                }
              >
                🗑 Delete
              </button>

            </div>

          </div>

        )
      )}

    </div>
  );
}

export default BackupList;