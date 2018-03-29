const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const passport = require("../../config/passport");

// Matches with "/api/artists"
router.route("/")
  .post(artistsController.create);

// Checks login info against db
router.route("/login")
  .post(passport.authenticate("local"), artistsController.login);

// Matches with "/api/artists/:id"
router.route("/:id")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;