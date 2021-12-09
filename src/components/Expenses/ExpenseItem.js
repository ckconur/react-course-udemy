import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = (e) => {
    setTitle("Updated Title");
  };

  return (
    // Wrapper item "card". Commen features of components such as box-shadow and border radius to contain.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₺ {props.amount.toFixed(2)}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
