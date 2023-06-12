const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const expensRouter = require('./routes/expenses.js');

app.use(bodyParser.json());

app.use('/api/expenses', expensRouter);


app.listen(3000, () => {
    console.log('Started...');
})