import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      whatsapp: "",
      address: "",
      country: "",
      county: "",
      farmName: "",
      farmLocation: "",
      latitude: "",
      longitude: "",
      farmSize: "",
      mainCrops: "",
      mainLivestock: "",
      emergencyName: "",
      emergencyPhone: "",
      emergencyRelation: "",
      photo: "",
    });

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "profile"
        )
      ) || {};

    setProfile((prev) => ({
      ...prev,
      ...saved,
    }));
  }, []);

  function handleChange(e) {
    const { name, value } =
      e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePhoto(e) {
    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {
      setProfile((prev) => ({
        ...prev,
        photo: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  }

  async function useCurrentLocation() {
    if (
      !navigator.geolocation
    ) {
      alert(
        "Location is not supported on this device."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        try {
          const response =
            await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );

          const data =
            await response.json();

          const address =
            data.address || {};

          const location =
            address.village ||
            address.hamlet ||
            address.suburb ||
            address.town ||
            address.city ||
            "";

          const county =
            address.county ||
            address.state ||
            "";

          const country =
            address.country ||
            "";

          setProfile((prev) => ({
            ...prev,
            farmLocation:
              location,
            county,
            country,
            latitude:
              latitude.toString(),
            longitude:
              longitude.toString(),
          }));
        } catch (error) {
          console.error(error);

          alert(
            "Unable to determine location."
          );
        }
      },
      () => {
        alert(
          "Unable to determine your location."
        );
      }
    );
  }

  function saveProfile(e) {
    e.preventDefault();

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

        {profile.photo && (
          <img
            src={profile.photo}
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom:
                "20px",
            }}
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />

        <h3>
          Personal Details
        </h3>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={
            profile.fullName
          }
          onChange={
            handleChange
          }
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={
            profile.email
          }
          onChange={
            handleChange
          }
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={
            profile.phone
          }
          onChange={
            handleChange
          }
        />

        <input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp Number"
          value={
            profile.whatsapp
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={
            profile.address
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={
            profile.country
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="county"
          placeholder="County / State"
          value={
            profile.county
          }
          onChange={
            handleChange
          }
        />

        <h3>
          Farm Information
        </h3>

        <input
          type="text"
          name="farmName"
          placeholder="Farm Name"
          value={
            profile.farmName
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="farmLocation"
          placeholder="Farm Location"
          value={
            profile.farmLocation
          }
          onChange={
            handleChange
          }
        />

        <button
          type="button"
          onClick={
            useCurrentLocation
          }
        >
          📍 Use Current Location
        </button>

        <br />
        <br />

        <input
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={
            profile.latitude
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={
            profile.longitude
          }
          onChange={
            handleChange
          }
        />

        <input
          type="number"
          name="farmSize"
          placeholder="Farm Size (Acres)"
          value={
            profile.farmSize
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="mainCrops"
          placeholder="Main Crops"
          value={
            profile.mainCrops
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="mainLivestock"
          placeholder="Main Livestock"
          value={
            profile.mainLivestock
          }
          onChange={
            handleChange
          }
        />

        <h3>
          Emergency Contact
        </h3>

        <input
          type="text"
          name="emergencyName"
          placeholder="Contact Name"
          value={
            profile.emergencyName
          }
          onChange={
            handleChange
          }
        />

        <input
          type="tel"
          name="emergencyPhone"
          placeholder="Contact Phone"
          value={
            profile.emergencyPhone
          }
          onChange={
            handleChange
          }
        />

        <input
          type="text"
          name="emergencyRelation"
          placeholder="Relationship"
          value={
            profile.emergencyRelation
          }
          onChange={
            handleChange
          }
        />

        <button
          type="submit"
        >
          💾 Save Profile
        </button>

        <p
          style={{
            marginTop: "20px",
          }}
        >
          Version:
          {" "}
          Farm Manager Pro
          v4.1
        </p>
      </form>
    </main>
  );
}

export default Profile;