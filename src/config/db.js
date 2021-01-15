const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile[process.env.DB_ENVIRONMENT || 'development'])
module.exports = knex;