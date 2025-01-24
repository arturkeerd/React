import React from 'react'
import Expenses from './components/Expenses/Expenses.jsx'
import './App.css' 

const App = () => {

  const expenses = [
    {
      date : new Date(2024, 10, 12),
      title : 'Jonagold',
      price : 2.49
    },
    {
      date : new Date(2024, 10, 12),
      title : 'Granny Smith',
      price : 2.99
    },
    {
      date : new Date(2024, 10, 12),
      title : 'Eesti segu',
      price : 3.49
    },
    {
      date : new Date(2024, 10, 12),
      title : 'Polish Red',
      price : 0.99
    }
  ]


  return (
    <div className="App">
      <Expenses expenses={expenses}/>
    </div>
  )
}

export default App