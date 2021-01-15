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
      host: "ec2-52-6-75-198.compute-1.amazonaws.com",
      database: "d85q2v8kvodqoq",
      user: "vaynfjykynglcb",
      password: "e2c65e6177100d5c73a9c57a06575dd934650acbeee3cfcef73c65f02a235ea4",
      ssl: true,
  dialect: 'postgres',
  dialectOptions: {
    "ssl": {"require":true }
  }
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