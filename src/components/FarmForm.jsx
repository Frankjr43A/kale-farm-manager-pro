import { useState } from "react";

function FarmForm({ onAddFarm }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [county, setCounty] = useState("");
  const [size, setSize] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !owner || !county || !size) {
      alert("Please fill in all fields.");
      return;
    }

    onAddFarm({
      id: Date.now(),
      name,
      owner,
      county,
      size,
    });

    setName("");
    setOwner("");
    setCounty("");
    setSize("");
  }

  return (
    <form className="farm-form" onSubmit={handleSubmit}>
      <h2>Add New Farm</h2>

      <input
        type="text"
        placeholder="Farm Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />

      <input
        type="text"
        placeholder="County"
        value={county}
        onChange={(e) => setCounty(e.target.value)}
      />

      <input
        type="number"
        placeholder="Farm Size (Acres)"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <button type="submit">
        Save Farm
      </button>
    </form>
  );
}

export default FarmForm;