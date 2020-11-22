
exports.up = function(knex) {
    return knex.schema.createTable('players', table => {
        table.increments('id').primary();
        table.string('name');
        table.integer('rating');
        table.integer('vitorias_total');
        table.integer('derrotas_total');
        table.integer('empates_totais');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable();
};

