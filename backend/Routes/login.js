const express = require('express');
const login = express.Router();
const loginController = require('../Controllers/login');


login.post('/',loginController.tryLogin);

module.exports = login;