import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext); // Destructure currency from context

  const changeBudget = val => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (val < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: val
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <label>
        Budget: {currency} 
        <input
          type="number"
          step="10"
          value={budget}
          onInput={event => changeBudget(event.target.value)}
        />
      </label>
    </div>
  );
};

export default Budget;