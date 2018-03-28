const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Artist = require('./models/artist');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);
// Initializes passport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(Artist.authenticate()));
// passport.serializeUser(Artist.serializeUser());
// passport.deserializeUser(Artist.deserializeUser());

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://joefitz12:mYzguP4TvxmKNoypzreLjWyM@ds139869.mlab.com:39869/heroku_b96dmrv0",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
