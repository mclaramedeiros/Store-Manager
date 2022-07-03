const rescue = require('express-rescue');
const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');

router.post('/', rescue(productsController.addSales));

module.exports = router;