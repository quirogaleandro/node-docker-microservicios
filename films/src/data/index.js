const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const films = await axios.get("http://database:8004/Film");
    return films.data;
  },
  create: async (film) => {
    try {
      const films = await axios.post("http://database:8004/Film", film);
      return films.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error creating film");
    }
  },
};
