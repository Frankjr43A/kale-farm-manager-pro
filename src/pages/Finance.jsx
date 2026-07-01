import {
  useEffect,
  useState,
} from "react";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseCard from "../components/ExpenseCard";

function Finance() {
  const [expenses, setExpenses] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem(
          "expenses"
        )
      ) || [];

    setExpenses(saved);
  }, []);

  function addExpense(
    expense
  ) {
    const updated = [
      ...expenses,
      expense,
    ];

    setExpenses(updated);

    localStorage.setItem(
      "expenses",
      JSON.stringify(updated)
    );
  }

  function deleteExpense(
    id
  ) {
    const updated =
      expenses.filter(
        (expense) =>
          expense.id !== id
      );

    setExpenses(updated);

    localStorage.setItem(
      "expenses",
      JSON.stringify(updated)
    );
  }

  const totalExpenses =
    expenses.reduce(
      (
        total,
        expense
      ) =>
        total +
        Number(
          expense.amount
        ),
      0
    );

  return (
    <main className="dashboard">
      <ExpenseForm
        onAddExpense={
          addExpense
        }
      />

      <div
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h2>
          Total Expenses
        </h2>

        <h1>
          KES{" "}
          {totalExpenses.toLocaleString()}
        </h1>
      </div>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {expenses.length ===
        0 ? (
          <p>
            No expenses
            added yet.
          </p>
        ) : (
          expenses.map(
            (expense) => (
              <ExpenseCard
                key={
                  expense.id
                }
                expense={
                  expense
                }
                onDelete={
                  deleteExpense
                }
              />
            )
          )
        )}
      </div>
    </main>
  );
}

export default Finance;