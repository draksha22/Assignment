// controllers/colorUtils.js
const colors = ["#F6AF8E", "#C3A5FF", "#B1D0A5", "#F6ED8E", "#8EF4F6", "#C0F68E", "#F68ECB", "#8E97F6", "#F68EAB", "#F6CE8E", "#DFF68E"];
let colorIndex = 0;

function getNextColor() {
  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  return color;
}

module.exports = { getNextColor };
