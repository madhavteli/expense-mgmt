import React from 'react';
import Card from "./Components/Card";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {

	const addExpenseHandler = expense => {
		console.log('In App.js');
		console.log(expense);
	};
	return (
		<div>
			<NewExpense addExpense={addExpenseHandler}/>
			<Card />
		</div>
	);
}

export default App;
