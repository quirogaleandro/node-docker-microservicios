const planets = require("./planets.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const planets = await axios.get("http://database:8004/Character");
    return planets.data;
  },
  createPlanet: () => {
    return "New Planets" + planets[0];
  },
};
