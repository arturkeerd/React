import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2025')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Year data in Expenses.jsx ${selectedYear}`);
  }

  const filterExpenses = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear() == filteredYear
  })

  props.expenses.map((expense) => {
    console.log(expense)
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        filterExpenses.length > 0 ? (filterExpenses.map((expense) => (<ExpenseItem expenseData={expense} key={expense.id} />)))
          : (<p>no items found</p>)
      }
    </Card>
  )
}


export default Expenses