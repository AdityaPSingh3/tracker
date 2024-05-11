import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseSummary({ expenses }) {
  // 1. Calculate total expenses and expenses per category
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const expensesByCategory = {};
  expenses.forEach((expense) => {
    expensesByCategory[expense.category] =
      (expensesByCategory[expense.category] || 0) + expense.amount;
  });

  // 2. Prepare data for the pie chart
  const data = Object.keys(expensesByCategory).map((category) => ({
    name: category,
    value: expensesByCategory[category],
  }));

  // 3. Define colors for each category slice
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default ExpenseSummary;
