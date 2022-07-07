const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

const ARR_OF_TESTING = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do Capitão América',
  },
];

const ARR_FIND_ONE = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
];

describe('testing the products layer', () => {
  describe('testing the getAll function', () => {
    beforeEach(() => {
      sinon.stub(productsModel, 'getAll').resolves(ARR_OF_TESTING);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('it must be an object', async () => {
      const response = await productsService.getAll();
      expect(response).to.be.an('object');
    });
    it('it must return an object with "code" and "products"', async () => {
      const response = await productsService.getAll();
      expect(response).to.be.deep.equal({
        code: 200,
        products: ARR_OF_TESTING,
      });
    });
  });

  describe('testing findById function', () => {
    beforeEach(() => {
      sinon.stub(productsModel, 'getAll').resolves([ARR_OF_TESTING[0]]);
      sinon.stub(productsModel, 'findById').resolves(ARR_FIND_ONE);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('it must be an object', async () => {
      const response = await productsService.getAll(1);
      expect(response).to.be.an('object');
    });

    it('must be status 200', async () => {
      const response = await productsService.findById(1);
      expect(response).to.be.deep.equal({
        code: 200,
        product: ARR_FIND_ONE,
      });
    });
  });
});
