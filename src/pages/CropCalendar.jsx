import {
  useEffect,
  useState,
} from "react";

function CropCalendar() {
  const [activities,
    setActivities] =
    useState([]);

  const [form,
    setForm] =
    useState({
      title: "",
      date: "",
      notes: "",
    });

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "cropCalendar"
        )
      ) || [];

    setActivities(saved);
  }, []);

  function handleChange(
    e
  ) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }

  function saveActivity(
    e
  ) {
    e.preventDefault();

    const newActivity = {
      id:
        Date.now(),
      ...form,
    };

    const updated = [
      ...activities,
      newActivity,
    ];

    setActivities(
      updated
    );

    localStorage.setItem(
      "cropCalendar",
      JSON.stringify(
        updated
      )
    );

    setForm({
      title: "",
      date: "",
      notes: "",
    });
  }

  function deleteActivity(
    id
  ) {
    const updated =
      activities.filter(
        (
          activity
        ) =>
          activity.id !==
          id
      );

    setActivities(
      updated
    );

    localStorage.setItem(
      "cropCalendar",
      JSON.stringify(
        updated
      )
    );
  }

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={
          saveActivity
        }
      >
        <h2>
          📅 Crop Calendar
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Activity"
          value={
            form.title
          }
          onChange={
            handleChange
          }
          required
        />

        <input
          type="date"
          name="date"
          value={
            form.date
          }
          onChange={
            handleChange
          }
          required
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={
            form.notes
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          ➕ Add Activity
        </button>
      </form>

      <section
        className="tasks-card"
      >
        <h3>
          Upcoming
          Activities
        </h3>

        {activities.length ===
        0 ? (
          <p>
            No activities
            yet.
          </p>
        ) : (
          activities.map(
            (
              activity
            ) => (
              <div
                key={
                  activity.id
                }
                className="farm-card"
              >
                <h3>
                  {
                    activity.title
                  }
                </h3>

                <p>
                  📅{" "}
                  {
                    activity.date
                  }
                </p>

                <p>
                  📝{" "}
                  {
                    activity.notes
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
      </section>
    </main>
  );
}

export default CropCalendar;