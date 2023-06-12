const express = require('express');
const db = require('../db.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(db.getExpense());
})

router.post('/', (req, res) => {
    if (!req.body.name || !req.body.count || !req.body.date){
        res.sendStatus(400);
        return;
    }

    const expense = {
        name: req.body.name,
        count: req.body.count,
        date: new Date(req.body.date)
    }

    db.addExpense(expense);
    res.sendStatus(201);
})

router.get('/all', (req, res) => {
    res.json(db.allExpense());
})

router.post('/date', (req, res) => {
    if (!req.body.date){
        res.sendStatus(400);
        return;
    }

    const date = new Date(req.body.date);
    res.json(db.dateExpense(date));
})

router.get('/limit', (req, res) => {
    res.json(db.getLimit());
})

router.post('/limit', (req, res) => {
    if (!req.body){
        res.sendStatus(400);
        return;
    }

    db.addLimit(req.body.limit);
    res.sendStatus(201);
})

module.exports = router;