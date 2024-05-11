import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ExpenseTrends({ expenses }) {
  // 1. Group expenses by date (or other time period if needed)
  const expensesByDate = {};
  expenses.forEach((expense) => {
    const dateKey = expense.date.slice(0, 7); // Group by month (YYYY-MM)
    expensesByDate[dateKey] = (expensesByDate[dateKey] || 0) + expense.amount;
  });

  // 2. Prepare data for the bar chart
  const data = Object.keys(expensesByDate).map((date) => ({
    name: date,
    amount: expensesByDate[date],
  }));

  return (
    <div className="expense-trends">
      <h2>Expense Trends</h2>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default ExpenseTrends;
