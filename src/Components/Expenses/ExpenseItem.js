import { useState } from 'react';
import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

	const [title, setTitle] = useState(props.expenseDetails.title);

	const buttonClickHandler = () => {
		setTitle('Updated!');
	};

	return (
		<div className={classes.expenseItem}>
			<ExpenseDate date = {props.expenseDetails.date}/>
			<div className={classes.expenseItemDescription}>
				<h2>{title}</h2>
				<div className={classes.expenseItemPrice}>{props.expenseDetails.price}</div>
			</div>
			<button onClick={buttonClickHandler}>Change title</button>
		</div>
	);
};

export default ExpenseItem;