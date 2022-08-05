
const router = require('express').Router();

// here we are establishing out routes by assigning it to variables
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboard = require('./dashboard');
//an using them as arguments now '/' knows its route is the homepage etc
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboard);

module.exports = router;