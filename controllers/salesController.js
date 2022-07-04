const salesService = require('../services/salesService');

const salesController = {
  addSales: async () => {
    const data = await salesService.addSales();
    return data.insertId;
  },
  addProductSales: async (req, res) => {
    const { body } = req;
    const { code, message, saleId } = await salesService.addProductSaless(body);
    if (message) {
      console.log('oi');
      return res.status(code).json({ message });
    }
    return res.status(201).send({ id: saleId, itemsSold: body });
  },
};

module.exports = { salesController };
