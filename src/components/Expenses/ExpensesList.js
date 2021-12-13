import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
function ExpensesList(props) {
  if (props.filteredExpenseItems.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenseItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
