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



// router.use("/write", function (req, res) {
//   console.log(arguments[0]);
//   console.log("hit write route");
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// If no API routes are hit, send the React app
// router.use(isAuthenticated, function (req, res) {
//   console.log("hit * route");
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// router.use("/login", function (req, res) {
//   console.log(arguments[0].baseUrl);
//   console.log("hit login route");
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
// router.use("/*", function(req, res){
//   if(arguments[0].baseUrl === "/login"){
//     console.log("hit login route");
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   }
//   else{
//     router.use(isAuthenticated, function (req, res) {
//         console.log("hit * route");
//         res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
//   }
// });

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
