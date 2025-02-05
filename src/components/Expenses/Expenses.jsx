import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpenseItem from './ExpenseItem.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2024')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(`Year data in Expenses.jsx ${selectedYear}`);
  }

  props.expenses.map((expense) => {
    console.log(expense)
  })

    return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        props.expenses.map((expense) => {
          return <ExpenseItem expenseData={expense} key={expense.id}/>
        })
      }
    </Card>
    )
}


export default Expenses