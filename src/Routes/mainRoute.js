const user = require('../Controllers/userControllers')
const mainRoute = require('express').Router();

mainRoute.post('/signup', user.signUp);

mainRoute.post('/login', user.login);


module.exports = mainRoute