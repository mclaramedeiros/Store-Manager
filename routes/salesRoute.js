const rescue = require('express-rescue');
const express = require('express');

const router = express.Router();
const { salesController } = require('../controllers/salesController');

router.post('/', rescue(salesController.addProductSales));

module.exports = router;