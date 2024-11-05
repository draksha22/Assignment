// app.js
const express = require("express");
const nodeRoutes = require("./routes/nodeRoutes");

const app = express();
app.use(express.json());
app.use(nodeRoutes);

module.exports = app;
