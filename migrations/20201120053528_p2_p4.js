exports.up = function(knex) {
    return knex.schema.createTable('p2_p4', table => {
        table.integer('id_player').references('id').inTable('players')
        table.integer('vitorias')
        table.integer('derrotas')           
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable()
};
