const {Client } = require('pg')

const client =  new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'chess',
      user: 'postgres',
      password: 'chaveiro12'
    }
  },
  production: {
    client: client,
    
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
  },
  
    migrations: {
      tableName: 'knex_migrations'
    }

};