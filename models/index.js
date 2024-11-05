const { Sequelize } = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const Node = require("./Node");

sequelize
  .sync({ force: false })
  .then(() => console.log("Database synced"))
  .catch((error) => console.error("Error syncing database:", error));

module.exports = sequelize;
