const Planets = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const new_planet = await Planets.create(req.body);
  response(res, 200, new_planet);
};
