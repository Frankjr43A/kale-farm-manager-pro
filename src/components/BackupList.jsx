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
      <div
        className="farm-card"
        style={{
          marginTop: "20px",
        }}
      >
        <h3>
          ☁️ My Cloud
          Backups
        </h3>

        <p>
          No cloud backups
          found.
        </p>
      </div>
    );
  }

  return (
    <div
      className="farm-card"
      style={{
        marginTop: "20px",
      }}
    >
      <h3>
        ☁️ My Cloud
        Backups
      </h3>

      {backups.map(
        (backup) => (
          <div
            key={backup.id}
            style={{
              border:
                "1px solid var(--border-color, #ddd)",
              borderRadius:
                "12px",
              padding:
                "16px",
              marginBottom:
                "16px",
            }}
          >
            <h4>
              🌾{" "}
              {backup.name}
            </h4>

            <p>
              {backup
                .createdAt
                ?.toDate
                ? backup.createdAt
                    .toDate()
                    .toLocaleString()
                : "Date unavailable"}
            </p>

            <button
              onClick={() =>
                onRestore(
                  backup.id
                )
              }
            >
              ☁️ Restore
            </button>

            {" "}

            <button
              onClick={() =>
                onDelete(
                  backup.id
                )
              }
            >
              🗑 Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default BackupList;