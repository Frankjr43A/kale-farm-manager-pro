import { useState } from "react";

function IncomeForm({ onAddIncome }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !category || !amount) {
      return;
    }

    onAddIncome({
      id: Date.now(),
      name,
      category,
      amount,
    });

    setName("");
    setCategory("");
    setAmount("");
  }

  return (
    <form
      className="farm-form"
      onSubmit={handleSubmit}
    >
      <h2>💰 Add Income</h2>

      <input
        type="text"
        placeholder="Income Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button type="submit">
        Save Income
      </button>
    </form>
  );
}

export default IncomeForm;