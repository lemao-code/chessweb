
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {name: 'Thiago', rating: 1600, vitorias_total: 0, derrotas_total: 0},
        {name: 'Rick', rating: 1600, vitorias_total: 0, derrotas_total: 0},
        {name: 'Joao', rating: 1600, vitorias_total: 0, derrotas_total: 0},
        {name: 'Daniel', rating: 1600, vitorias_total: 0, derrotas_total: 0},
        {name: 'Vitor', rating: 1600, vitorias_total: 0, derrotas_total: 0},
      ]);
    });
};
