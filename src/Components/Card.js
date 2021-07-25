import ExpenseItem from "./Expenses/ExpenseItem";
import ExpenseItemsObj from "../ExpenseItemsObj.js";
import classes from './Card.module.css';

function createExpenseItem(expenseItem) {
	return (
		<ExpenseItem expenseDetails={expenseItem} key={expenseItem.id}/>
	)
}

function Card() {
	return(
		<div className={classes.expenses}>
			{ExpenseItemsObj.map(createExpenseItem)}
		</div>
	);
}

export default Card;