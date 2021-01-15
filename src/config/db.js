const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile[process.env.DB_ENVIROMENT || 'development'])
module.exports = knex;