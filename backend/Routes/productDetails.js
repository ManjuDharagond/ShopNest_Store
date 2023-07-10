const express = require('express');
const product = express.Router();
const productController = require('../Controllers/productDetails');

product.get('/', productController.getAllProducts);

module.exports = product;