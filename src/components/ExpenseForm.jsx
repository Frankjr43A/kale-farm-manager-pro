import { useState } from "react";

function ExpenseForm({
  onAddExpense,
}) {
  const [name, setName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [amount, setAmount] =
    useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !name ||
      !category ||
      !amount
    )
      return;

    onAddExpense({
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
      <h2>
        💸 Add Expense
      </h2>

      <input
        type="text"
        placeholder="Expense Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(
            e.target.value
          )
        }
      />

      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) =>
          setAmount(
            e.target.value
          )
        }
      />

      <button type="submit">
        Save Expense
      </button>
    </form>
  );
}

export default ExpenseForm;