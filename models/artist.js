const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
// const passportLocalMongoose = require('passport-local-mongoose');

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please use a valid email address'] 
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

const Artist = mongoose.model("Artist", artistSchema);

// Creating a custom method for our Artist model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
Artist.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
artistSchema.pre("save", function(artist) {
  artist.password = bcrypt.hashSync(artist.password, bcrypt.genSaltSync(10), null);
});

module.exports = Artist;
