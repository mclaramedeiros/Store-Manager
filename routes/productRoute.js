const rescue = require('express-rescue');
const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
// const validateProducts = require('../middlewares/validateProducts');

router.get('/', rescue(productsController.getAll));

router.get('/:id', rescue(productsController.findById));

router.post('/', rescue(productsController.addProducts));

module.exports = router;
