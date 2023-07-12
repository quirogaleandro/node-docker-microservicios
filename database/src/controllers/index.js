const store = require("../database");

module.exports = {
  listCharacters: async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
  },
  getChacter: async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
  },
};
