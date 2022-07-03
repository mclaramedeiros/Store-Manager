const salesService = require('../services/salesService');

const salesController = {
  addSales: async () => {
    const data = await salesService.addSales();
    return data.insertId;
  },
  addProductSales: async () => {
    const data = await salesService.addProductSales();
    
  }
};

module.exports = { salesController };
