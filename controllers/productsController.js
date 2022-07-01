const productService = require('../services/productsService');

const productsController = {
  getAll: async (_req, res) => {
    const { code, message, products } = await productService.getAll();
    if (message) return res.status(code).json({ message });
    res.status(code).json(products);
  },
  // erro de retorno por id foi corrigido adicionando o 0 ao final de product
  findById: async (req, res) => {
    const { id } = req.params;
    const { code, message, product } = await productService.findById(id);
    if (message) return res.status(code).json({ message });
    res.status(code).json(product[0]);
  },
  addProducts: async (req, res) => {
    const { name } = req.body;
    const { data, code, message } = await productService.addProducts({ name });
    if (message) return res.status(code).json({ message });
    // console.log(data.id);
    return res.status(code).send({ id: data.id, name });
  },
};

module.exports = productsController;
