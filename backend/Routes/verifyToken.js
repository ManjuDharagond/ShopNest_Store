const express = require('express');
const verify = express.Router();
const verifyTokenController = require('../Controllers/verifyToken');

// Verify token
verify.get('/', verifyTokenController.verifyToken);

module.exports = verify;