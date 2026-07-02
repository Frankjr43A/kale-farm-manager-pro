import { useEffect, useState } from "react";

function Profile() {
  const [name, setName] =
    useState("");

  const [farm, setFarm] =
    useState("");

  const [country, setCountry] =
    useState("");

  useEffect(() => {
    const profile =
      JSON.parse(
        localStorage.getItem(
          "profile"
        )
      ) || {};

    setName(profile.name || "");
    setFarm(profile.farm || "");
    setCountry(
      profile.country || ""
    );
  }, []);

  function saveProfile(e) {
    e.preventDefault();

    const profile = {
      name,
      farm,
      country,
    };

    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    alert(
      "Profile saved successfully!"
    );
  }

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={saveProfile}
      >
        <h2>
          👨‍🌾 Farmer Profile
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Farm Name"
          value={farm}
          onChange={(e) =>
            setFarm(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) =>
            setCountry(
              e.target.value
            )
          }
        />

        <button type="submit">
          💾 Save Profile
        </button>

        <p
          style={{
            marginTop: "20px",
          }}
        >
          Version:
          {" "}
          Farm Manager Pro v1.0
        </p>
      </form>
    </main>
  );
}

export default Profile;