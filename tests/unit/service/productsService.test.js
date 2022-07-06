const sinon = require('sinon');
const { expect } = require('chai');
const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

const ARR_OF_TESTING = [
  {
    id: 1,
    name: 'Machado do Thor Stormbreaker',
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
      console.log(response);
      expect(response).to.be.deep.equal({
        code: 200,
        products: ARR_OF_TESTING,
      });
    });
  });
});
