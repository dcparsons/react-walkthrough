const router = require("express").Router();
const gameController = require("../../controllers/gameController");

router
  .route("/")
  .get(gameController.getGameByTitle);

module.exports = router;