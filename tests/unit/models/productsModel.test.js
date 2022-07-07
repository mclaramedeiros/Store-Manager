const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connections');
const productsModel = require('../../../models/productsModel');

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

describe('testing products model layer', () => {
  describe('testing getAll function', () => {
    beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([ARR_OF_TESTING]);
    });

    afterEach(() => {
      sinon.restore();
    });
    it('it must be an array', async () => {
      const response = await productsModel.getAll();
      expect(response).to.be.an('array');
    });
    it('it must return an array with all products', async () => {
      const response = await productsModel.getAll();
      expect(response).to.be.deep.equal(ARR_OF_TESTING);
    });
  });
  describe('testing findById function', () => {
     beforeEach(() => {
      sinon.stub(connection, 'execute').resolves([ARR_OF_TESTING[0]]);
    });
    
      afterEach(() => {
      sinon.restore();
    });
    
    it('must be an obj', async () => {
      const response = await productsModel.findById();
      expect(response).to.be.an('object');
    });
    it('must return an object with an "id" and "name"', async () => {
      const response = await productsModel.findById(1);
      expect(response).to.be.deep.equal(ARR_OF_TESTING[0])
    })
  })
});
