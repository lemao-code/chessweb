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
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },
  
    migrations: {
      tableName: 'knex_migrations'
    }

};