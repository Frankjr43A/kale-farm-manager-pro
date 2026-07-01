import { useEffect, useState } from "react";

import FieldForm from "../components/FieldForm";
import FieldCard from "../components/FieldCard";

function Fields() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("fields")
      ) || [];

    setFields(saved);
  }, []);

  function addField(field) {
    const updated = [...fields, field];

    setFields(updated);

    localStorage.setItem(
      "fields",
      JSON.stringify(updated)
    );
  }

  function deleteField(id) {
    const updated = fields.filter(
      (field) => field.id !== id
    );

    setFields(updated);

    localStorage.setItem(
      "fields",
      JSON.stringify(updated)
    );
  }

  return (
    <main className="dashboard">
      <FieldForm
        onAddField={addField}
      />

      <div style={{ marginTop: "30px" }}>
        {fields.length === 0 ? (
          <p>No fields added yet.</p>
        ) : (
          fields.map((field) => (
            <FieldCard
              key={field.id}
              field={field}
              onDelete={deleteField}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Fields;