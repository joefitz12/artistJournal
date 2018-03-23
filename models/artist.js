const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: Number,
  firstName: { type: String, required: true },
  emailNotifications: Boolean,
  textNotifications: Boolean,
  theme: String
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
