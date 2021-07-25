import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

	return (
		<div className={classes.expenseItem}>
			<ExpenseDate date = {props.expenseDetails.date}/>
			<div className={classes.expenseItemDescription}>
				<h2>{props.expenseDetails.title}</h2>
				<div className={classes.expenseItemPrice}>{props.expenseDetails.price}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;