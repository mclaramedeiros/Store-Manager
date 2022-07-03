const connection = require('./connections');

const salesModel = {
  addSales: async () => {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
    const [sales] = await connection.execute(query);
    return sales;
  },

  addProductSales: async (saleId, productId, quantity) => {
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
  const [data] = await connection.execute(query, [saleId, productId, quantity]);
  return data;
  },
  
};

module.exports = {
  salesModel,
};
