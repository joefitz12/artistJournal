const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api", apiRoutes);

// router.use("/login", function(req, res){
//   res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// If no API routes are hit, send the React app
// router.use(isAuthenticated, function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
