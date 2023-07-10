const express = require('express');
const register = express.Router();
const registerController = require('../Controllers/register');


register.post('/', registerController.registerAccount);
register.get('/', registerController.getRegisterAccount);

module.exports = register;