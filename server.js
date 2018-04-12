const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require('passport');
const authCheck = require('./config/middleware/isAuthenticated');
const routes = require("./routes");
const cron = require("node-cron");
const artistsController = require("./controllers/artistsController");

// const email = require("./notifications/email");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// pass the authenticaion checker middleware

// Initializes passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.use('/api', authCheck);
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://joefitz12:mYzguP4TvxmKNoypzreLjWyM@ds139869.mlab.com:39869/heroku_b96dmrv0",
  {
    useMongoClient: true
  }
);

let emailNotifications = cron.schedule('2 14 * * *', function(){
  console.log('getting all email notification accounts and hitting getAllEmail at 9am every day');
  artistsController.getAllEmail();
});

emailNotifications.start();

let testEmailNotifications = cron.schedule('16 15 * * *', function(){
  console.log('getting all email notification accounts and hitting getAllEmail at 9am every day');
  artistsController.getAllEmail();
});

testEmailNotifications.start();

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
