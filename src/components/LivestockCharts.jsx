function LivestockCharts() {
  const records =
    JSON.parse(
      localStorage.getItem(
        "livestock"
      )
    ) || [];

  const maxEggs = Math.max(
    ...records.map(
      (r) =>
        Number(r.eggs || 0)
    ),
    1
  );

  const maxFeed = Math.max(
    ...records.map(
      (r) =>
        Number(r.feed || 0)
    ),
    1
  );

  return (
    <>
      <section className="tasks-card">
        <h3>
          🥚 Egg Production Trend
        </h3>

        {records.length === 0 ? (
          <p>No data yet.</p>
        ) : (
          records.map(
            (record) => (
              <div
                key={record.id}
                style={{
                  marginBottom:
                    "15px",
                }}
              >
                <small>
                  {record.date}
                </small>

                <div
                  style={{
                    background:
                      "#e5e7eb",
                    borderRadius:
                      "10px",
                    height:
                      "26px",
                    overflow:
                      "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        (Number(
                          record.eggs ||
                            0
                        ) /
                          maxEggs) *
                        100
                      }%`,
                      background:
                        "#22c55e",
                      height:
                        "100%",
                      color:
                        "white",
                      paddingLeft:
                        "10px",
                      lineHeight:
                        "26px",
                    }}
                  >
                    🥚{" "}
                    {record.eggs}
                  </div>
                </div>
              </div>
            )
          )
        )}
      </section>

      <section className="tasks-card">
        <h3>
          🌽 Feed Usage Trend
        </h3>

        {records.length === 0 ? (
          <p>No data yet.</p>
        ) : (
          records.map(
            (record) => (
              <div
                key={record.id}
                style={{
                  marginBottom:
                    "15px",
                }}
              >
                <small>
                  {record.date}
                </small>

                <div
                  style={{
                    background:
                      "#e5e7eb",
                    borderRadius:
                      "10px",
                    height:
                      "26px",
                    overflow:
                      "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${
                        (Number(
                          record.feed ||
                            0
                        ) /
                          maxFeed) *
                        100
                      }%`,
                      background:
                        "#f59e0b",
                      height:
                        "100%",
                      color:
                        "white",
                      paddingLeft:
                        "10px",
                      lineHeight:
                        "26px",
                    }}
                  >
                    🌽{" "}
                    {record.feed} Kg
                  </div>
                </div>
              </div>
            )
          )
        )}
      </section>
    </>
  );
}

export default LivestockCharts;