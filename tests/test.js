const assert = require('assert');
const nock = require('nock');
const { obterJogadores } = require('./services')

describe('teste webchess', function () {
    this.beforeAll(() => {
        const response = { nome: 'Thiago' }
        nock('http://localhost:3000')
        .get('/busca')
        .reply(200,response)
    })
   

    it('deve buscar jogadores', async () => {
        const expected = {
            nome: "Thiago",
        }
        const nomeBase = `Thiago`;
        const resultado = await obterJogadores(nomeBase)
        assert.deepStrictEqual(resultado,expected)
    })
})