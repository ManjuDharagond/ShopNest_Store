const express = require('express');
const logout = express.Router();
const logoutController = require('../Controllers/logout');


logout.post('/',logoutController.logoutUser);

module.exports = logout;