const router = require("express").Router();
const noteRoutes = require("./notes");

// Book routes
router.use("/books", noteRoutes);

module.exports = router;
