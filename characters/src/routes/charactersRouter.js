const { Router } = require("express");
const controllers = require("../controllers");

const characterRouter = Router();

characterRouter.get("/", controllers.getCharacter);

module.exports = characterRouter;
