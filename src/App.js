// App.jsx
import React, { useState, useEffect } from "react";
import { SnackbarProvider } from "notistack";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseTrends from "./components/ExpenseTrends";
import IncomeForm from "./components/IncomeForm";
import Header from "./components/Header";
import "./styles.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [walletBalance, setWalletBalance] = useState(
    parseFloat(localStorage.getItem("walletBalance")) || 5000
  );

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("walletBalance", walletBalance);
  }, [expenses, walletBalance]);

  const addExpense = (newExpense) => {
    if (newExpense.amount > walletBalance) {
      alert("Insufficient balance!");
      return;
    }
    setExpenses([newExpense, ...expenses]);
    setWalletBalance(walletBalance - newExpense.amount);
  };

  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  const deleteExpense = (id) => {
    const deletedExpense = expenses.find((expense) => expense.id === id);
    setExpenses(expenses.filter((expense) => expense.id !== id));
    setWalletBalance(walletBalance + deletedExpense.amount);
  };

  const editExpense = (updatedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense
      )
    );
  };

  return (
    <SnackbarProvider maxSnack={3}>
      <div className="app-container">
        <Header walletBalance={walletBalance} />
        <IncomeForm onAddIncome={addIncome} />
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={deleteExpense}
          onEditExpense={editExpense}
        />
        <div className="chart-container">
          <ExpenseSummary expenses={expenses} />
          <ExpenseTrends expenses={expenses} />
        </div>
      </div>
    </SnackbarProvider>
  );
}

export default App;
