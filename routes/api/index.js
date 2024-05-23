const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
    res.send('<h1>This is a incorrect route!</h1>');
    });