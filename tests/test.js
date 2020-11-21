const assert = require('assert');
const nock = require('nock');
const { obterJogadores } = require('./services')

describe('teste webchess', function () {
    // this.beforeAll(() => {
    //     const response = { nome: 'Thiago' }
    //     nock('http://localhost:3000')
    //     .get('/busca')
    //     .reply(200,response)
    // })
   

    it('deve buscar jogadores', async () => {
        const expected = [
            {
              "id": 1,
              "name": "Thiago",
              "rating": 1600,
              "vitorias_total": 0,
              "derrotas_total": 0
            },
            {
              "id": 2,
              "name": "Rick",
              "rating": 1600,
              "vitorias_total": 0,
              "derrotas_total": 0
            },
            {
              "id": 3,
              "name": "Joao",
              "rating": 1600,
              "vitorias_total": 0,
              "derrotas_total": 0
            },
            {
              "id": 4,
              "name": "Daniel",
              "rating": 1600,
              "vitorias_total": 0,
              "derrotas_total": 0
            },
            {
              "id": 5,
              "name": "Vitor",
              "rating": 1600,
              "vitorias_total": 0,
              "derrotas_total": 0
            }
          ]
        const resultado = await obterJogadores()
        assert.deepStrictEqual(resultado,expected)
    })
})