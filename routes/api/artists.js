const router = require("express").Router();
const artistsController = require("../../controllers/artistsController");
const passport = require("../../config/passport");
const cron = require("node-cron");

cron.schedule('0 9 * * *', function(){
  console.log('getting all email notification accounts and hitting getAllEmail at 9am every day');
  artistsController.getAllEmail();
});

<<<<<<< HEAD
=======
cron.schedule('35 19 * * *', function(){
  console.log('getting all email notification accounts and hitting getAllEmail at 9am every day');
  artistsController.getAllEmail();
});

>>>>>>> 3548067f33271b760d28b3d075de72c00da43959
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
