import { Fragment, useRef, useState } from "react";
import "./ExpenseForm.css";
import Error from '../UI/Error'

const ExpenseForm = (props) => {
  const [error,setError] = useState(null)
  console.log(error)
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || enteredDate.trim().length == 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid title or amount or date (non-empty values)'
        });
        return
      }

      
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.onCancel(); 
    // Clear input fields (optional, but works)
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" min="0.01" step="0.01" id="amount" ref={amountInputRef} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2024-11-12" max="2026-01-31" id="date" ref={dateInputRef} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button> {/* ✅ Fixed */}
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

{/*
import { Fragment, useRef, useState } from "react";
import "./ExpenseForm.css";
import Error from '../UI/Error'

const ExpenseForm = (props) => {
  const [error,setError] = useState(null)
  console.log(error)
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 || enteredDate.trim().length == 0) {
        setError({
          title: 'Invalid input',
          message: 'Please enter a valid title or amount or date (non-empty values)'
        });
        return
      }

      
    const enteredTitle = titleInputRef.current.value;
    const enteredPrice = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    props.onCancel(); 
    // Clear input fields (optional, but works)
    titleInputRef.current.value = "";
    amountInputRef.current.value = "";
    dateInputRef.current.value = "";
  };

  return (
    <>
    {
      error &&
      <Error />
    }
    {
      <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
        </div>
        <div className="new-expense__control">
        </div>
        <div className="new-expense__control">
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button> 
        <button type="submit">Add Expense</button>
      </div>
    </form>
  }
  </>
  );
};

export default ExpenseForm;
*/}