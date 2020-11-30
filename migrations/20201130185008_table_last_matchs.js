
exports.up = function(knex) {
    return knex.schema.createTable('lastmatchs', table => {
        table.varchar('p1')
        table.varchar('p2')
        table.integer('empate')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('lastmatchs');
};
