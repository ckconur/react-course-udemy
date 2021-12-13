import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [formState, setFormState] = useState(false);

  const closeNewExpenseForm = () => {
    setFormState(false);
  };

  const openNewExpenseForm = () => {
    setFormState(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // Content Variables

  // New Expense Form Content
  let expenseFormContent = (
    <button onClick={openNewExpenseForm}>Open New Expense Form</button>
  );

  if (formState) {
    expenseFormContent = (
      <ExpenseForm
        onCancel={closeNewExpenseForm}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{expenseFormContent}</div>;
}

export default NewExpense;
