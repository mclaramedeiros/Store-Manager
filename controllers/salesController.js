const salesService = require('../services/salesService');

const salesController = {
  addSales: async () => {
    const data = await salesService.addSales();
    return data.insertId;
  },
  // logica da 8
  listAllSales: async (req, res) => {
    const { code, returnSale } = await salesService.listAllSales();
    res.status(code).send(returnSale);
  },
  findSalesByID: async (req, res) => {
    const { id } = req.params;
    const { code, message, sale } = await salesService.findSalesById(id);
    if (message) return res.status(code).json({ message });
    return res.status(200).send(sale);
  },
  addProductSales: async (req, res) => {
    const { body } = req;
    const { code, message, saleId } = await salesService.addProductSaless(body);
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(201).send({ id: saleId, itemsSold: body });
  },
};

module.exports = { salesController };
