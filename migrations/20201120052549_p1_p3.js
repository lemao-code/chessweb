exports.up = function(knex) {
    return knex.schema.createTable('p1_p3', table => {
        table.integer('id_player').references('id').inTable('players');
        table.integer('vitorias').defaultTo(0);
        table.integer('derrotas').defaultTo(0);
        table.integer('empates').defaultTo(0);             
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable()
};
