module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "postgres",
    host: "127.0.0.1",
    port: 5432,
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_prod",
    host: "127.0.0.1",
    dialect: "postgres"
  }
}
