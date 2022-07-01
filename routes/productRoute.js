const rescue = require('express-rescue');
const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', rescue(productsController.getAll));

router.get('/:id', rescue(productsController.findById));

router.post('/products', rescue(productsController.addProducts));

module.exports = router;
