const store = require("../database");

module.exports = {
  list: async (req, res) => {
    const { model } = req.params;
    const response = await store[model].list();
    res.status(200).json(response);
  },
  get: async (req, res) => {
    const { model, id } = req.params;
    const response = await store[model].get(id);
    res.status(200).json(response);
  },
  create: async (req, res) => {
    const { model } = req.params;
    const { _id } = req.body;
    const object_id = await store[model].findById(_id);

    if (object_id) {
      res.status(409).json({ error: "El elemento ya existe" });
    } else {
      const response = await store[model].insert(req.body);
      res.status(200).json(response);
    }
  },
};
