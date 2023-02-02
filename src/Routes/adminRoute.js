const { isAdmin } = require('../Middleware/auths');

const adminRoute = require('express').Router();

adminRoute.get('/allusers', isAdmin,  )


module.exports = adminRoute;
