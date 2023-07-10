const express = require('express');
const verify= express.Router();
const verifyController = require('../Controllers/verify.js');


verify.post('/', verifyController.verify);


module.exports = verify;
