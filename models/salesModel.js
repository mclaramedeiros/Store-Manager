const connection = require('./connections');

const salesModel = {
  listAllSales: async () => {
    const query = `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON s.id = sp.sale_id
      ORDER BY sp.sale_id, sp.product_id;`;
    const [allSales] = await connection.execute(query);
    return allSales;
  },
  addProductSales: async (saleId, productId, quantity) => {
    const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);';
    await connection.execute(query, [saleId, productId, quantity]);
    return true;
  },
};

const findSaleById = async (id) => {
  const query = `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date
      FROM StoreManager.sales_products AS sp
      INNER JOIN StoreManager.sales AS s
      ON s.id = sp.sale_id
      WHERE sp.sale_id = ?
      ORDER BY sp.sale_id, sp.product_id;`;
  const [saleById] = await connection.execute(query, [id]);
  console.log(`saleByIDMODEL: ${saleById}`);
  return saleById;
};

const addSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const [{ insertId }] = await connection.execute(query);
  return { insertId };
};

module.exports = {
  salesModel,
  addSales,
  findSaleById,
};
