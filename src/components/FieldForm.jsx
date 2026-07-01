import { useState } from "react";

function FieldForm({ onAddField }) {
  const [name, setName] = useState("");
  const [farm, setFarm] = useState("");
  const [size, setSize] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !farm || !size) return;

    onAddField({
      id: Date.now(),
      name,
      farm,
      size,
    });

    setName("");
    setFarm("");
    setSize("");
  }

  return (
    <form
      className="farm-form"
      onSubmit={handleSubmit}
    >
      <h2>🌾 Add New Field</h2>

      <input
        type="text"
        placeholder="Field Name"
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
        type="number"
        placeholder="Field Size (Acres)"
        value={size}
        onChange={(e) =>
          setSize(e.target.value)
        }
      />

      <button type="submit">
        Save Field
      </button>
    </form>
  );
}

export default FieldForm;