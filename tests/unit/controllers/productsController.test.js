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

  describe('testing findById function', () => {
    const req = {};
    const res = {};
    beforeEach(() => {
      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      sinon
        .stub(productsService, 'findById')
        .resolves({ code: 200, product: ARR_OF_TESTING });
    });
    afterEach(() => {
      sinon.restore();
    });

    it('it must be code 200', async () => {
      await productsController.findById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    })
    it('must return an object with the product', async () => {
      await productsController.findById(req, res);
      expect(res.json.calledWith(ARR_OF_TESTING[0]))
        .to.be.true;
    });
  });
});
