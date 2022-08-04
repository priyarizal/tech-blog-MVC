const router = require('express').Router();

// requiring and establishing routes 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//now using them as arguments
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;