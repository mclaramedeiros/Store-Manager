const { salesModel, addSales, findSaleById } = require('../models/salesModel');
const productsModels = require('../models/productsModel');
// const validateProduct = async (productId) => {
//   const items = await productsModels.getAll();
//   console.log(`items: ${items}`);
//   const response = items.some(({ id }) => id === productId);
//   return response;
// };

const validateSales = async (body) => {
  const items = await productsModels.getAll();
  const response = body.map(({ productId, quantity }) => {
    // const exist = await validateProduct(productId);
    const exist = items.some(({ id }) => id === productId);
    console.log(`exist: ${exist}`);
    if (!productId) return { code: 400, message: '"productId" is required' };
    if (!exist) return { code: 404, message: 'Product not found' };
    if (quantity < 1) {
      return {
        code: 422,
        message: '"quantity" must be greater than or equal to 1',
      };
    }
    if (!quantity) return { code: 400, message: '"quantity" is required' };
    // console.log('oi to aqui');
    // return { code: 'aqui' };
    return { code: 200 };
  });
  return response;
};
const addSaleProduct = async (body, saleId) => {
  const product = body.forEach(async ({ productId, quantity }) => {
    await salesModel.addProductSales(saleId, productId, quantity);
  });
  return product;
};

const salesService = {
  addSales: async () => {
    const sales = await addSales();
    return sales;
  },
};

const addProductSaless = async (body) => {
  const validate = await validateSales(body);
  console.log(`validate: ${validate[0].message}`);
  const valid = validate.find((v) => v.message);
  console.log(`valid: ${valid}`);
  if (valid) {
    return { code: valid.code, message: valid.message };
  }
  const { insertId } = await addSales();
  console.log(`saleID: ${insertId}`);

  await addSaleProduct(body, insertId);
  return { code: 201, saleId: insertId };
};
// logica da 8
const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  console.log(`sales: ${sales}`);
  const returnSale = sales.map(
    ({ sale_id: saleId, product_id: productId, quantity, date }) => ({
      date,
      saleId,
      productId,
      quantity,
    }),
  );
  console.log(sales);
  return { code: 200, returnSale };
};

const findSalesById = async (id) => {
  const products = await findSaleById(id);
  console.log(`products: ${products}`);
  if (products.length === 0) {
    return ({
      code: 404,
      message: 'Sale not found',
    });
  }
  const sale = products.map(({ product_id: productId, quantity, date }) => ({
    date,
    productId,
    quantity,
  }));
  console.log(`sale: ${sale}`);
  return { code: 200, sale };
};

module.exports = {
  salesService,
  addProductSaless,
  findSalesById,
  listAllSales,
};
