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
    },
    ssl: {
      rejectUnauthorized: false
    }
  },
  
    migrations: {
      tableName: 'knex_migrations'
    }

};