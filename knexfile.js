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
    client: 'pg',
    connection: {
      database: "d85q2v8kvodqoq",
      user: "vaynfjykynglcb",
      password: "e2c65e6177100d5c73a9c57a06575dd934650acbeee3cfcef73c65f02a235ea4",
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
  },
  
    // migrations: {
    //   tableName: 'knex_migrations'
    // }

};