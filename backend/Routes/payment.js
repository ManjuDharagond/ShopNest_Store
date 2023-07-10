const express = require('express');
const payment= express.Router();
const paymentController = require('../Controllers/payment');


payment.post('/', paymentController.createOrder);


module.exports = payment;
