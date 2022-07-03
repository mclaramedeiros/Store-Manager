const salesModel = require('../models/salesModel');

const validateSales = async () => {
  body.forEach(({ productId, quantity }) => {
    if (!productId) {
      return { code: 400, message: '"productId" is required' };
    }
    if (!quantity) {
      return {
        code: 400,
        message: '"quantity" is required',
      };
    }
    if (quantity <= 0) {
      return {
        code: 422,
        message: '"quantity" must be greater than or equal to 1',
      };
    }
  });
};

const salesService = {
  addSales: async () => {
    const sales = await salesModel.addSales();
    return sales;
  },

  addProductSales: async (body) => {
    body.forEach(({ productId, quantity }) => {
      if (!productId) {
        return { code: 400, message: '"productId" is required' };
      }
      if (!quantity) {
        return {
          code: 400,
          message: '"quantity" is required',
        };
      }
      if (quantity <= 0) {
        return {
          code: 422,
          message: '"quantity" must be greater than or equal to 1',
        };
      }
    });
    const saleId = await salesModel.addSales();
    const data = await salesModel.addProductSales(saleId, productId, quantity);
    return { code: 201, Response: { saleId, itemsSold: [data] } };
  },
};

module.exports = { salesService };
