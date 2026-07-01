import { useEffect, useState } from "react";

function Inventory() {
  const [category, setCategory] =
    useState("Fertilizer");

  const [name, setName] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [items, setItems] =
    useState([]);

  const [history, setHistory] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [filterCategory,
    setFilterCategory] =
    useState("All");

  const [showLowStock,
    setShowLowStock] =
    useState(false);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "inventory"
        )
      ) || [];

    const savedHistory =
      JSON.parse(
        localStorage.getItem(
          "inventoryHistory"
        )
      ) || [];

    setItems(saved);
    setHistory(savedHistory);
  }, []);

  function saveData(updated) {
    setItems(updated);

    localStorage.setItem(
      "inventory",
      JSON.stringify(updated)
    );
  }

  function saveHistory(record) {
    const updated = [
      record,
      ...history,
    ];

    setHistory(updated);

    localStorage.setItem(
      "inventoryHistory",
      JSON.stringify(updated)
    );
  }

  function saveItem(e) {
    e.preventDefault();

    if (!name || !quantity)
      return;

    const newItem = {
      id: Date.now(),
      category,
      name,
      quantity:
        Number(quantity),
    };

    saveData([
      ...items,
      newItem,
    ]);

    saveHistory({
      id: Date.now(),
      type: "Created",
      item: name,
      amount:
        Number(quantity),
      date:
        new Date().toLocaleString(),
    });

    setName("");
    setQuantity("");
  }

  function deleteItem(id) {
    saveData(
      items.filter(
        (item) =>
          item.id !== id
      )
    );
  }

  function stockIn(id) {
    const amount =
      Number(
        prompt(
          "Enter quantity to add:"
        )
      );

    if (!amount) return;

    const updated =
      items.map((item) => {
        if (
          item.id === id
        ) {
          saveHistory({
            id: Date.now(),
            type:
              "Stock In",
            item:
              item.name,
            amount,
            date:
              new Date().toLocaleString(),
          });

          return {
            ...item,
            quantity:
              item.quantity +
              amount,
          };
        }

        return item;
      });

    saveData(updated);
  }

  function stockOut(id) {
    const amount =
      Number(
        prompt(
          "Enter quantity used:"
        )
      );

    if (!amount) return;

    const updated =
      items.map((item) => {
        if (
          item.id === id
        ) {
          saveHistory({
            id: Date.now(),
            type:
              "Stock Out",
            item:
              item.name,
            amount,
            date:
              new Date().toLocaleString(),
          });

          return {
            ...item,
            quantity:
              Math.max(
                0,
                item.quantity -
                  amount
              ),
          };
        }

        return item;
      });

    saveData(updated);
  }

  const filteredItems =
    items.filter((item) => {
      const matchesSearch =
        item.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        filterCategory ===
          "All" ||
        item.category ===
          filterCategory;

      const matchesLowStock =
        !showLowStock ||
        item.quantity <= 2;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesLowStock
      );
    });

  return (
    <main className="dashboard">
      <form
        className="farm-form"
        onSubmit={saveItem}
      >
        <h2>
          📦 Add Inventory Item
        </h2>

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
        >
          <option>
            Fertilizer
          </option>
          <option>
            Seeds
          </option>
          <option>
            Pesticides
          </option>
          <option>
            Tools
          </option>
        </select>

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

      <section
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h3>
          🔍 Search & Filters
        </h3>

        <input
          type="text"
          placeholder="Search item..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        <select
          value={
            filterCategory
          }
          onChange={(e) =>
            setFilterCategory(
              e.target.value
            )
          }
        >
          <option>All</option>
          <option>
            Fertilizer
          </option>
          <option>
            Seeds
          </option>
          <option>
            Pesticides
          </option>
          <option>
            Tools
          </option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={
              showLowStock
            }
            onChange={() =>
              setShowLowStock(
                !showLowStock
              )
            }
          />

          Show Low Stock Only
        </label>
      </section>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {filteredItems.map(
          (item) => (
            <div
              key={item.id}
              className="farm-card"
            >
              <h3>
                📦 {item.name}
              </h3>

              <p>
                Category:
                {" "}
                {item.category}
              </p>

              <p>
                Quantity:
                {" "}
                {item.quantity}
              </p>

              {item.quantity <=
                2 && (
                <p>
                  ⚠️ Low Stock
                </p>
              )}

              <button
                onClick={() =>
                  stockIn(
                    item.id
                  )
                }
              >
                ➕ Stock In
              </button>

              <button
                onClick={() =>
                  stockOut(
                    item.id
                  )
                }
              >
                ➖ Stock Out
              </button>

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
          )
        )}
      </div>

      <section
        className="tasks-card"
        style={{
          marginTop: 40,
        }}
      >
        <h3>
          📊 Stock Movement History
        </h3>

        {history.length ===
        0 ? (
          <p>
            No stock
            movements yet.
          </p>
        ) : (
          <ul>
            {history.map(
              (record) => (
                <li
                  key={
                    record.id
                  }
                >
                  {record.date}
                  {" - "}
                  {record.type}
                  {" - "}
                  {record.item}
                  {" ("}
                  {
                    record.amount
                  }
                  {")"}
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Inventory;