import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  // States
  const [year, setYear] = useState("");
  // Props
  const expenses = props.expenseItems;
  // Altered Datas
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  // Content Variables

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onChange={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesList filteredExpenseItems={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
}

export default Expenses;
