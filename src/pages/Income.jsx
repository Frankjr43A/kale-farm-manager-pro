import { useEffect, useState } from "react";

import IncomeForm from "../components/IncomeForm";
import IncomeCard from "../components/IncomeCard";

function Income() {
  const [incomes, setIncomes] =
    useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("incomes")
      ) || [];

    setIncomes(saved);
  }, []);

  function addIncome(income) {
    const updated = [
      ...incomes,
      income,
    ];

    setIncomes(updated);

    localStorage.setItem(
      "incomes",
      JSON.stringify(updated)
    );
  }

  function deleteIncome(id) {
    const updated =
      incomes.filter(
        (income) =>
          income.id !== id
      );

    setIncomes(updated);

    localStorage.setItem(
      "incomes",
      JSON.stringify(updated)
    );
  }

  const totalIncome =
    incomes.reduce(
      (total, income) =>
        total +
        Number(income.amount),
      0
    );

  return (
    <main className="dashboard">
      <IncomeForm
        onAddIncome={addIncome}
      />

      <div
        className="farm-card"
        style={{
          marginTop: 20,
        }}
      >
        <h2>Total Income</h2>

        <h1>
          KES{" "}
          {totalIncome.toLocaleString()}
        </h1>
      </div>

      <div
        style={{
          marginTop: 30,
        }}
      >
        {incomes.length === 0 ? (
          <p>
            No income added yet.
          </p>
        ) : (
          incomes.map((income) => (
            <IncomeCard
              key={income.id}
              income={income}
              onDelete={deleteIncome}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Income;