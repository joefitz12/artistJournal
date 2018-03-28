const router = require("express").Router();
const notesController = require("../../controllers/notesController");

// Matches with "/api/notes"
router.route("/")
  .post(notesController.create);

// Matches with "/api/notes/all/:id"
router.route("/all/:id")
  .get(notesController.findAll);

// Matches with "/api/notes/:id"
router.route("/:id")
  .get(notesController.findById)
  .put(notesController.update)
  .delete(notesController.remove);

module.exports = router;
