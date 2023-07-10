const express = require('express');
const bill = express.Router();
const billController = require('../Controllers/bill');


bill.post('/',billController.calculateFinalBill);

module.exports = bill;