
exports.up = function(knex) {
    return knex.schema.createTable('lastmatchs', table => {
        table.integer('p1')
        table.integer('p2')
        table.integer('winner')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('lastmatchs');
};
