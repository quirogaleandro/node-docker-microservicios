const Films = require("../data/index");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const createFilm = await Films.createFilms();
  response(res, 200, createFilm);
};
