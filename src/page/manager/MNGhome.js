import React, { useState } from 'react';
import './MNGhome.css'

function MNGhome () {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Income-Expense Dashboard</h1>
      </div>
      <div className="input-container">
        <div className="income-container">
          <h2>Income</h2>
          <input type="number" value={income} onChange={handleIncomeChange} />
        </div>
        <div className="expense-container">
          <h2>Expense</h2>
          <input type="number" value={expense} onChange={handleExpenseChange} />
        </div>
      </div>
      <div className="result-container">
        <div className="income-result">
          <h2>Total Income</h2>
          <h3>{income}</h3>
        </div>
        <div className="expense-result">
          <h2>Total Expense</h2>
          <h3>{expense}</h3>
        </div>
        <div className="balance-result">
          <h2>Balance</h2>
          <h3>{income - expense}</h3>
        </div>
      </div>
    </div>
  );
}

export default MNGhome;
