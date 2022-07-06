const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../../controllers/productsController')
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

describe('testing the products controller', () => {
  describe('testing the getAll function', () => {
    const req = {};
    const res = {};
    beforeEach(() => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'getAll')
        .resolves({ code: 200, products: ARR_OF_TESTING });
    });
    
    afterEach(() => {
      sinon.restore();
    });

    it('must return the code "200"', async () => {
      await productsController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    });
    it('should return the array of projects in a json', async () => {
      await productsController.getAll(req, res);
      expect(res.json.calledWith({ products: ARR_OF_TESTING }));
    });
  })
});