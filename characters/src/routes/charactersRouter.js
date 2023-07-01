const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const characterRouter = Router();

characterRouter.get("/", controllers.getCharacter);
characterRouter.post(
  "/",
  middlewares.characterValidation,
  controllers.createCharacter
);

module.exports = characterRouter;