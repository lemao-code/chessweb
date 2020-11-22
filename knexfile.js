module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'chess',
      user: 'postgres',
      password: 'chaveiro12'
    }
  },
  
    migrations: {
      tableName: 'knex_migrations'
    }

};