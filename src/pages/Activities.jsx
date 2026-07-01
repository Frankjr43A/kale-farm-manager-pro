import { useEffect, useState } from "react";

function Activities() {
  const [activity, setActivity] =
    useState("");

  const [date, setDate] =
    useState("");

  const [activities, setActivities] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "activities"
        )
      ) || [];

    setActivities(saved);
  }, []);

  function saveActivity(e) {
    e.preventDefault();

    if (!activity || !date) return;

    const newActivity = {
      id: Date.now(),
      activity,
      date,
    };

    const updated = [
      ...activities,
      newActivity,
    ];

    setActivities(updated);

    localStorage.setItem(
      "activities",
      JSON.stringify(updated)
    );

    setActivity("");
    setDate("");
  }

  function deleteActivity(id) {
    const updated =
      activities.filter(
        (a) => a.id !== id
      );

    setActivities(updated);

    localStorage.setItem(
      "activities",
      JSON.stringify(updated)
    );
  }

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={saveActivity}
      >
        <h2>
          📅 Add Activity
        </h2>

        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) =>
            setActivity(
              e.target.value
            )
          }
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
        />

        <button type="submit">
          Save Activity
        </button>
      </form>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {activities.length ===
        0 ? (
          <p>
            No activities yet.
          </p>
        ) : (
          activities.map(
            (activity) => (
              <div
                key={activity.id}
                className="farm-card"
              >
                <h3>
                  📅{" "}
                  {
                    activity.activity
                  }
                </h3>

                <p>
                  Date:{" "}
                  {
                    activity.date
                  }
                </p>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteActivity(
                      activity.id
                    )
                  }
                >
                  🗑 Delete
                </button>
              </div>
            )
          )
        )}
      </div>
    </main>
  );
}

export default Activities;