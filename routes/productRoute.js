const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
// const validateProducts = require('../middlewares/validateProducts');

router.get('/', productsController.getAll);

router.get('/:id', productsController.findById);

router.put('/:id', productsController.updateProduct);

router.post('/', productsController.addProducts);

module.exports = router;
