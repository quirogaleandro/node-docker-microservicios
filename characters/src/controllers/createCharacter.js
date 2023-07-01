const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newCharacter = await Characters.createCharacter();
  response(res, 200, newCharacter);
};