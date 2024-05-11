import React from "react";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {/* ... display expense details with edit and delete buttons ... */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
