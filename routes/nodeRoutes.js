// routes/nodeRoutes.js
const express = require("express");
const { createNode } = require("../controller/nodeController");
const router = express.Router();

router.post("/api/nodes", createNode);

// Define additional routes here for updateNode, deleteNode, getNodeTree

module.exports = router;
