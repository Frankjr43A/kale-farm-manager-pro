import useMarketReports from "../hooks/useMarketReports";

function MarketAnalytics() {
  const {
    reports,
    loading,
  } = useMarketReports();

  const analytics = {};

  reports.forEach(
    (report) => {
      const item =
        report.item
          ?.trim()
          .toLowerCase();

      if (!item) return;

      if (
        !analytics[item]
      ) {
        analytics[item] = {
          total: 0,
          count: 0,
          highest: 0,
          lowest:
            Number.MAX_VALUE,
        };
      }

      const price =
        Number(
          report.price || 0
        );

      analytics[
        item
      ].total += price;

      analytics[
        item
      ].count += 1;

      analytics[
        item
      ].highest =
        Math.max(
          analytics[
            item
          ].highest,
          price
        );

      analytics[
        item
      ].lowest =
        Math.min(
          analytics[
            item
          ].lowest,
          price
        );
    }
  );

  return (
    <main className="dashboard">
      <div className="farm-card">
        <h2>
          📊 Market Analytics
        </h2>

        <p>
          Community market
          intelligence from
          farmers worldwide.
        </p>

        {loading ? (
          <p>
            Loading market
            analytics...
          </p>
        ) : Object.keys(
            analytics
          ).length ===
          0 ? (
          <p>
            No market reports
            available yet.
          </p>
        ) : (
          Object.entries(
            analytics
          ).map(
            ([
              item,
              data,
            ]) => {
              const average =
                (
                  data.total /
                  data.count
                ).toFixed(
                  2
                );

              return (
                <div
                  key={item}
                  className="tasks-card"
                  style={{
                    marginTop:
                      "15px",
                  }}
                >
                  <h3>
                    {item
                      .charAt(
                        0
                      )
                      .toUpperCase() +
                      item.slice(
                        1
                      )}
                  </h3>

                  <p>
                    📈 Average:
                    {" "}
                    {average}
                  </p>

                  <p>
                    🔺 Highest:
                    {" "}
                    {
                      data.highest
                    }
                  </p>

                  <p>
                    🔻 Lowest:
                    {" "}
                    {
                      data.lowest
                    }
                  </p>

                  <p>
                    🌍 Reports:
                    {" "}
                    {
                      data.count
                    }
                  </p>
                </div>
              );
            }
          )
        )}
      </div>
    </main>
  );
}

export default MarketAnalytics;