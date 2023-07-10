const express = require('express');
const google= express.Router();
const googleLoginController = require('../Controllers/googleLogin.js');


google.post('/', googleLoginController.login);


module.exports = google;
