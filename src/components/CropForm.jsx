import { useState } from "react";

function CropForm({ onAddCrop }) {
  const [name, setName] = useState("");
  const [farm, setFarm] = useState("");
  const [field, setField] = useState("");
  const [area, setArea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name ||
      !farm ||
      !field ||
      !area
    )
      return;

    onAddCrop({
      id: Date.now(),
      name,
      farm,
      field,
      area,
    });

    setName("");
    setFarm("");
    setField("");
    setArea("");
  }

  return (
    <form
      className="farm-form"
      onSubmit={handleSubmit}
    >
      <h2>🥬 Add Crop</h2>

      <input
        type="text"
        placeholder="Crop Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Farm Name"
        value={farm}
        onChange={(e) =>
          setFarm(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Field Name"
        value={field}
        onChange={(e) =>
          setField(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Area (Acres)"
        value={area}
        onChange={(e) =>
          setArea(e.target.value)
        }
      />

      <button type="submit">
        Save Crop
      </button>
    </form>
  );
}

export default CropForm;