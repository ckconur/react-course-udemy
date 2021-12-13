import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const onCancel = props.onCancel;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // // Method 1: Update state object with spread operator
  // const titleChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: e.target.value,
  //   });
  // };

  // // Method 1
  // const amountChangeHandler = (e) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: e.target.value,
  //   });
  // };

  // // Method 2: Update state object with anon func.
  // // This method will gurantee to us state have latest value.
  // // Latest state snapshot
  // const dateChangeHandler = (e) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: e.target.value };
  //   });
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    let d = new Date(enteredDate);

    if (
      Object.prototype.toString.call(d) === "[object Date]" &&
      !isNaN(enteredAmount) &&
      enteredTitle !== ""
    ) {
      const newExpenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      props.onSaveExpenseData(newExpenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    } else {
      console.log("Somethings wrong about inputs");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            step="any"
            min="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2021-07-12"
            max="2025-07-12"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
