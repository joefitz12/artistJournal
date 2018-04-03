const router = require("express").Router();
const noteRoutes = require("./notes");
const artistRoutes = require("./artists");

// Note routes
router.use("/notes", noteRoutes);
router.use("/artists", artistRoutes);

module.exports = router;

data => console.log("user data: ", data);