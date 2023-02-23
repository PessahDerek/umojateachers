const user = require('../Controllers/userControllers')
const auths = require('../middleware/auths')

const mainRoute = require('express').Router();

mainRoute.post('/signup', user.signUp);
mainRoute.post('/login', user.login);

mainRoute.get('/myloanandshares', auths.isMember, user.getLoanShares)
mainRoute.get("/allshares", user.getAllShares)


module.exports = mainRoute