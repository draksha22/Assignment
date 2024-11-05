// models/Node.js
const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Node = sequelize.define("Node", {
  NODE_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  NODE_NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  NODE_TYPE: {
    type: DataTypes.ENUM("location", "employee", "department"),
    allowNull: false,
  },
  NODE_COLOR: {
    type: DataTypes.STRING,
  },
  PARENT_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: "Nodes",
      key: "NODE_ID",
    },
  },
});

module.exports = Node;
