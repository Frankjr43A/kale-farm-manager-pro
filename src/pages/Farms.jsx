import { useEffect, useState } from "react";

import FarmForm from "../components/FarmForm";
import FarmCard from "../components/FarmCard";

import { getFarms, saveFarms } from "../data/storage";

function Farms() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    setFarms(getFarms());
  }, []);

  function addFarm(farm) {
    const updated = [...farms, farm];

    setFarms(updated);

    saveFarms(updated);
  }

  return (
    <main className="dashboard">

      <FarmForm onAddFarm={addFarm} />

      <div style={{ marginTop: "30px" }}>
        {farms.length === 0 ? (
          <p>No farms added yet.</p>
        ) : (
          farms.map((farm) => (
            <FarmCard
              key={farm.id}
              farm={farm}
            />
          ))
        )}
      </div>

    </main>
  );
}

export default Farms;