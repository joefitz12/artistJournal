const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  body: { type: String, required: true },
  inspiration: String,
  favorite: Boolean
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
