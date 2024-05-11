import React, { useState } from "react";
import { useSnackbar } from "notistack";

function ExpenseForm({ onAddExpense }) {
  const { enqueueSnackbar } = useSnackbar();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food"); // Default category
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) {
      enqueueSnackbar("Please fill in all fields", { variant: "error" });
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category,
      date,
    };

    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      {/* ... form fields for title, amount, category, date ... */}
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
