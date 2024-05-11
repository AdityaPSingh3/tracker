import React from "react";

function Header({ walletBalance }) {
  return (
    <header>
      <h1>Expense Tracker</h1>
      <p>Wallet Balance: ${walletBalance.toFixed(2)}</p>
    </header>
  );
}

export default Header;
