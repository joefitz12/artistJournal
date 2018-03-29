var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy({ usernameField: "email"}, function (email, password, done) {
  db.Artist.findOne({ email: email }, function (err, artist) {
    console.log("err:", err, "\n artist: ", artist);
    if (err) { return done(err); }
    if (!artist) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (!artist.validPassword(password)) {

      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, artist);
  });

}));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
