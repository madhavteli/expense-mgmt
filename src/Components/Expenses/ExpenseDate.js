import classes from './ExpenseDate.module.css';

function ExpenseDate(props) {

	let date = Date.parse(props.date);
	date = new Date(date);
	const month = date.toLocaleString('en-IN', {month: 'long'});
	const day = date.toLocaleString('en-IN', {day: '2-digit'});
	const year = date.getFullYear();

	return(
		<div className={classes.expenseDate}>
			<div className={classes.expenseDateMonth}>{month}</div>
			<div className={classes.expenseDateYear}>{year}</div>
			<div className={classes.expenseDateDay}>{day}</div>
		</div>
	)
}

export default ExpenseDate;