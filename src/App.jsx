import { useState } from 'react'
import React from 'react'
import Expenses from './components/Expenses/Expenses.jsx'
import './App.css' 
import NewExpense from './components/NewExpense/NewExpense.jsx'

  const DUMMY_EXPENSES = [
    {
      id: 'id1',
      date : new Date(2023, 10, 12),
      title : 'Jonagold',
      price : 2.49
    },
    {
      id: 'id2',
      date : new Date(2024, 10, 12),
      title : 'Granny Smith',
      price : 2.99
    },
    {
      id: 'id3',
      date : new Date(2024, 10, 12),
      title : 'Eesti segu',
      price : 3.49
    },
    {
      id: 'id4',
      date : new Date(2025, 10, 12),
      title : 'Polish Red',
      price : 0.99
    }
  ]
  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previouseExpenses]
  })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App