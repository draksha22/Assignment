// controllers/nodeController.js
const { validationResult } = require("express-validator");
const Node = require("../models/Node");
const { getNextColor } = require("./colorUtils");

async function createNode(req, res) {
  const { nodeName, nodeType, parentId } = req.body;
  try {
    // Prevent cycles by checking for ancestry
    if (parentId) {
      const parentNode = await Node.findByPk(parentId);
      if (!parentNode) return res.status(400).json({ message: "Parent not found" });
      if (await causesCycle(parentId)) return res.status(400).json({ message: "Cycle detected" });
    }

    const nodeColor = ["location", "department"].includes(nodeType) ? getNextColor() : null;
    const newNode = await Node.create({ NODE_NAME: nodeName, NODE_TYPE: nodeType, NODE_COLOR: nodeColor, PARENT_ID: parentId });
    res.status(201).json(newNode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Helper function to detect cycles
async function causesCycle(parentId, childId = null) {
  const nodeStack = [];
  let current = parentId;

  while (current) {
    if (nodeStack.includes(current)) return true;
    nodeStack.push(current);
    const node = await Node.findByPk(current);
    current = node ? node.PARENT_ID : null;
  }
  return false;
}

// Update node logic here (move with children or shift children up)

// Delete node logic here (remove with children or shift children up)

module.exports = { createNode, /* updateNode, deleteNode, getNodeTree */ };
