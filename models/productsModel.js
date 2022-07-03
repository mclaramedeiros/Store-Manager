const connection = require('./connections');
// const productService = require('../services/productsService');

const productsModel = {
  getAll: async () => {
    const query = 'SELECT * FROM StoreManager.products';
    const [products] = await connection.execute(query);
    return products;
  },
  findById: async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [product] = await connection.execute(query, [id]);
    return product;
  },
  addProducts: async (name) => {
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await connection.execute(query, [name]);
    return { id: insertId };
  },
};

module.exports = productsModel;
