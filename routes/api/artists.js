const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const passport = require("../../config/passport");
// const cron = require("node-cron");

// cron.schedule('0 9 * * *', function(){
//   console.log('getting all email notification accounts and hitting getAllEmail at 9am every day');
//   artistsController.getAllEmail();
// });


// Matches with "/api/artists"
router.route("/")
  .post(artistsController.create);

  router.route("/email")
  .get(artistsController.getAllEmail);

// Checks login info against db
router.route("/login")
  .post(passport.authenticate("local", { failureRedirect: '/login' }), artistsController.login);

// Matches with "/api/artists/:id"
router.route("/:id")
  .get(artistsController.findById)
  .put(artistsController.update)
  .delete(artistsController.remove);

module.exports = router;
