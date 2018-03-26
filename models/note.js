const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  // userId: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  title: { type: String, required: true },
  body: { type: String, required: true },
  inspiration: String,
  date: {type: Date, default: Date.now},
  favorite: Boolean
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
