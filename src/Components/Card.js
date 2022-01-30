import React, { useState } from 'react';
import ExpenseItem from "./Expenses/ExpenseItem";
import OldExpenseItemsObj from "../ExpenseItemsObj.js";
import classes from './Card.module.css';
import NewExpense from "./NewExpense/NewExpense";

function createExpenseItem(expenseItem) {
	return (
		<ExpenseItem expenseDetails={expenseItem} key={expenseItem.id}/>
	)
}

const Card = () => {
	const [ExpenseItemsObj, setExpenseItemsObj] = useState(OldExpenseItemsObj);
	const addExpenseHandler = expense => {
		// console.log('In card.js');
		console.log(expense);
		setExpenseItemsObj(prevState => {
			return [expense, ...prevState];
		});
	};
	return(
		<div>
			<NewExpense addExpense={addExpenseHandler}/>
			<div className={classes.expenses}>
				{ExpenseItemsObj.map(createExpenseItem)}
			</div>
		</div>
	);
}

export default Card;