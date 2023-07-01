const planets = require("./planets.json");

module.exports = {
  listPlanets: () => {
    return planets;
  },
  createPlanet: () => {
    return "New Planets" + planets[0];
  },
};
