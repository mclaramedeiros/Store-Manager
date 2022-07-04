const connection = require('./connections');

const salesModel = {

  addProductSales: async (saleId, productId, quantity) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
    await connection.execute(query, [
      saleId,
      productId,
      quantity,
    ]);
    return true;
  },
};

const addSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [{ insertId }] = await connection.execute(query);
  return { insertId };
};

module.exports = {
  salesModel,
  addSales,
};
