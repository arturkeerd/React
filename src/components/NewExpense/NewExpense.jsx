import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    setIsFormVisible(false); // Hide form after submission
  };

  return (
    <div className="new-expense">
      {!isFormVisible ? (
        <button
          onClick={() => setIsFormVisible(true)}
          className="new-expense__button"
        >
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => setIsFormVisible(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;