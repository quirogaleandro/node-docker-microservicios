const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");
const middlewares = require("../middlewares");

router.get("/:model", middlewares.validateModel, controllers.listCharacters);

router.get("/:model/:id", middlewares.validateModel, controllers.getChacter);

module.exports = router;
