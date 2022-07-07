const productsModel = require('../models/productsModel');

const productsService = {
  getAll: async () => {
    const products = await productsModel.getAll();
    const sorted = products.sort((a, b) => a.id - b.id);
    return { code: 200, products: sorted };
  },
  findById: async (id) => {
    const product = await productsModel.findById(id);
    if (product.length === 0) {
      return { code: 404, message: 'Product not found' };
    }
    return { code: 200, product };
  },
  addProducts: async (name) => {
    if (!name) {
      return { code: 400, message: '"name" is required' };
    }
    if (name.length < 5) {
      return {
        code: 422,
        message: '"name" length must be at least 5 characters long',
      };
    }
    const data = await productsModel.addProducts(name);
    return { code: 201, data };
  },
  updateProduct: async (id, name) => {
    if (!name || name === undefined) {
      return { code: 400, message: '"name" is required' };
    }
    if (name.length < 5) {
      return {
        code: 422,
        message: '"name" length must be at least 5 characters long',
      };
    }
    const product = await productsModel.findById(id);
    if (product.length === 0) {
       return { code: 404, message: 'Product not found' };
     }
    await productsModel.updateProduct(id, name);
    const response = [id, name];
    return { code: 200, response };
  },
};

module.exports = productsService;
