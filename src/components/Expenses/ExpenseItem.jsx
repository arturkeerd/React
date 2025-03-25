import ExpenseDate from './ExpenseDate.jsx'
import './ExpenseItem.css'
import Card from '../UI/Card.jsx'
import { useState } from 'react'


const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.title)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseData.date}/>
            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item__price'>{props.expenseData.price}€</div>
            </div>
            <button onClick={clickHandler}>Buy</button>
        </Card>
    )
}

export default ExpenseItem