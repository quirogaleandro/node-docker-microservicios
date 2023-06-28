const Planets = require("../data");

module.exports = (req, res) => {
  res.status(200).json(Planets.listPlanets());
};
