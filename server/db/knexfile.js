const path = require("path");
const _ = require("lodash");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

module.exports = {
  client: "postgres",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "planka",
    password: "j0-fds9*er.w8s0F4",
    database: "planka",
  },
  migrations: {
    tableName: "migration",
    directory: path.join(__dirname, "migrations"),
  },
  seeds: {
    directory: path.join(__dirname, "seeds"),
  },
  wrapIdentifier: (value, origImpl) => origImpl(_.snakeCase(value)),
};
