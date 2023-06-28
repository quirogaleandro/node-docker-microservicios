const Films = require("../data/index");

module.exports = (req, res) => {
  res.status(200).json(Films.listFilms());
};
