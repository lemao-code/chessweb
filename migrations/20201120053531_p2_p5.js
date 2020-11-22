exports.up = function(knex) {
    return knex.schema.createTable('p2_p5', table => {
        table.integer('id_player').references('id').inTable('players');
        table.integer('vitorias');
        table.integer('derrotas');
        table.integer('empates');            
    })  
};

exports.down = function(knex) {
    return knex.schema.dropTable()
};
