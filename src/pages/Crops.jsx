import { useEffect, useState } from "react";

import CropForm from "../components/CropForm";
import CropCard from "../components/CropCard";

function Crops() {
  const [crops, setCrops] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("crops")
      ) || [];

    setCrops(saved);
  }, []);

  function addCrop(crop) {
    const updated = [...crops, crop];

    setCrops(updated);

    localStorage.setItem(
      "crops",
      JSON.stringify(updated)
    );
  }

  function deleteCrop(id) {
    const updated = crops.filter(
      (crop) => crop.id !== id
    );

    setCrops(updated);

    localStorage.setItem(
      "crops",
      JSON.stringify(updated)
    );
  }

  return (
    <main className="dashboard">
      <CropForm
        onAddCrop={addCrop}
      />

      <div style={{ marginTop: "30px" }}>
        {crops.length === 0 ? (
          <p>No crops added yet.</p>
        ) : (
          crops.map((crop) => (
            <CropCard
              key={crop.id}
              crop={crop}
              onDelete={deleteCrop}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Crops;