const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const SALT_WORK_FACTOR = 10;
// const passportLocalMongoose = require('passport-local-mongoose');


const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
  return re.test(email);
};

const artistSchema = new Schema({
  email: { 
    type: String, 
    trim: true,
    lowercase: true,
    unique: true,
    required: 'email address is required',
    validate: [validateEmail, 'please use a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, 'please use a valid email address'] 
  },
  password: { type: String, required: true },
  phone: {
    type: Number,
    trim: true,
    unique: true
  },
  firstName: { type: String, required: true },
  emailNotifications: Boolean,
  textNotifications: Boolean,
  theme: String
});

// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
artistSchema.pre('save', function(next) {

  let artist = this;

  // only hash the password if it has been modified (or is new)
  if (!artist.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password along with our new salt
      bcrypt.hash(artist.password, salt, null, function(err, hash) {
          if (err) return next(err);

          // override the cleartext password with the hashed one
          artist.password = hash;
          next();
      });
  });
});

const Artist = mongoose.model("Artist", artistSchema);

// Creating a custom method for our Artist model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
Artist.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};



module.exports = Artist;
