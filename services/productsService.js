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
      return { code: 400, message: 'Can not add Product' };
    }
    const { id } = await productsModel.addProducts({ name });
    return { code: 201, product: id, name };
  },
};

module.exports = productsService;
