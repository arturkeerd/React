import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const date = new Date(2024, 10, 12)
    const title = 'New book'
    const price = 30.99

    console.log(props)
    console.log(props.data)

    return (
        <div className='expense-item'>
            <div>{props.data.date.toString()}</div>
            <div className='expense-item__description'>
                <h2>{props.data.title}</h2>
                <div className='expense-item__price'>{props.data.price}</div>
            </div>
        </div>
    )
}

export default ExpenseItem