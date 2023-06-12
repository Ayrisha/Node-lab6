const EXPENSES = []

let dailyLimit = 0;

function addExpense(expens){
    EXPENSES.push(expens);
}

function getExpense(){
    return [...EXPENSES];
}

function allExpense(){
    const total = EXPENSES.reduce((acc, expense) => acc + expense.count, 0);
    return total;
}

function dateExpense(date){
    console.log(date);
    const dailyExpenses = EXPENSES.filter(expense => expense.date.toDateString() === date.toDateString());
    const total = dailyExpenses.reduce((acc, expense) => acc + expense.count, 0);
    return total;
}

function addLimit(limit){
    dailyLimit = limit;
}

function getLimit(){
    return dailyLimit;
}

module.exports = {
    getExpense,
    addExpense,
    allExpense,
    dateExpense,
    addLimit, 
    getLimit
}