const Characters = require("../data");

module.exports = (req, res) => {
  res.status(200).json(Characters.list());
};
