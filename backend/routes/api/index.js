const express = require('express');
const router = express.Router();

router.use('/services', require('./services'));
router.use('/products', require('./products'));
router.use('/projects', require('./projects'));

module.exports = router;
