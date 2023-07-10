const express = require('express');
const cart = express.Router();
const cartController = require('../Controllers/cart');


cart.post('/add',cartController.addProduct);
cart.get('/:userId', cartController.getAllProduct)
cart.delete('/remove',cartController.removeProduct);
cart.put('/update',cartController.updateQuantity);

module.exports = cart;