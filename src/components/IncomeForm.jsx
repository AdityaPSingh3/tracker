import React, { useState } from "react";
import { useSnackbar } from "notistack";

function IncomeForm({ onAddIncome }) {
  const { enqueueSnackbar } = useSnackbar();
  const [incomeAmount, setIncomeAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!incomeAmount || parseFloat(incomeAmount) <= 0) {
      enqueueSnackbar("Please enter a valid income amount", {
        variant: "error",
      });
      return;
    }

    onAddIncome(parseFloat(incomeAmount));
    setIncomeAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="income-form">
      {/* ... form field for income amount ... */}
      <button type="submit">Add Income</button>
    </form>
  );
}

export default IncomeForm;
