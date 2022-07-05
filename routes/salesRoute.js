const express = require('express');

const router = express.Router();
const { salesController } = require('../controllers/salesController');

router.post('/', salesController.addProductSales);

router.get('/:id', salesController.findSalesByID);
router.get('/', salesController.listAllSales);

module.exports = router;