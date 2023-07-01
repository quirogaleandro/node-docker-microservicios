const ClientError = require("../utils/errors");
const films = require("./films.json");

module.exports = {
  listFilms: () => {
    return films;
  },
  createFilms: (name) => {
    return films;
  },
};
