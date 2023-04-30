const { isAdmin } = require('../Middleware/auths');
const admin = require('../Controllers/adminControllers')
const filters = require('../Middleware/InputFilters')

const adminRoute = require('express').Router();

adminRoute.get('/allusers', isAdmin, admin.getAllUsers);

adminRoute.post('/updateshare', isAdmin, admin.updateShare)
adminRoute.post('/addmember', isAdmin, filters.noSingleEmpties, admin.addMember)
adminRoute.post('/grantloan', isAdmin, admin.grantLoan)
adminRoute.post('/payloan', isAdmin, admin.payLoan)


module.exports = adminRoute;
