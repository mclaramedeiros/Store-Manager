const { expect } = require('chai');
const sinon = require('sinon');
const productsController = require('../../controllers/productsController');
const productsService = require('../../../services/productsService');

describe(
  'Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação'
),
  () => {
    const result = [
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
      beforeEach(() => {
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
          .stub(productsService, 'getAll')
          .resolves({ code: 200, products: result });
      });
      afterEach(() => {
        sinon.restore();
      });
    it('Através do caminho /products, todos os produtos devem ser retornados'),
      async () => {
        await productsController.getAll(req, res);
        expect(res.status.calledWith(200)).to.be.equal(true);
      };
    it(
      'Através do caminho /products/:id, apenas o produto com o id presente na URL deve ser retornado', async () => {
        await productsController.findById(req, res);
        expect(res.json.calledWith(result[0])).to.be.true;
      }
    );
    it(
      'Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http 404', () => {
          const req = {};
          const res = {};
          beforeEach(() => {
            req.params = { id: 1 };
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon
              .stub(productsService, 'findById')
              .resolves({ code: 404, message: 'Product not found' });
          });
          afterEach(() => {
            sinon.restore();
          });

      }
    );
  };
