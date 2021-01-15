
exports.up = function(knex) {
    return knex.schema.createTable('players', table => {
        table.increments('id').primary();
        table.string('name');
        table.integer('rating').defaultTo(1600);
        table.integer('vitorias_total').defaultTo(0);
        table.integer('derrotas_total').defaultTo(0);
        table.integer('empates_totais').defaultTo(0);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable();
};

