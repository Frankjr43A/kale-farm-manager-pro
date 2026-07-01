import { useEffect, useState } from "react";

function Inventory() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] =
    useState("");

  const [items, setItems] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || [];

    setItems(saved);
  }, []);

  function saveItem(e) {
    e.preventDefault();

    if (!name || !quantity)
      return;

    const newItem = {
      id: Date.now(),
      name,
      quantity,
    };

    const updated = [
      ...items,
      newItem,
    ];

    setItems(updated);

    localStorage.setItem(
      "inventory",
      JSON.stringify(updated)
    );

    setName("");
    setQuantity("");
  }

  function deleteItem(id) {
    const updated =
      items.filter(
        (item) =>
          item.id !== id
      );

    setItems(updated);

    localStorage.setItem(
      "inventory",
      JSON.stringify(updated)
    );
  }

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={saveItem}
      >
        <h2>
          📦 Add Inventory Item
        </h2>

        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              e.target.value
            )
          }
        />

        <button type="submit">
          Save Item
        </button>
      </form>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="farm-card"
          >
            <h3>
              📦 {item.name}
            </h3>

            <p>
              Quantity:
              {" "}
              {item.quantity}
            </p>

            {Number(
              item.quantity
            ) <= 2 && (
              <p>
                ⚠️ Low Stock
              </p>
            )}

            <button
              className="delete-btn"
              onClick={() =>
                deleteItem(
                  item.id
                )
              }
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Inventory;