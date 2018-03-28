import axios from "axios";

export default {
  // Gets artist info
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Gets artist info
  saveArtist: function(id, artistData) {
    return axios.put("/api/artists/" + id, artistData);
  },
  // Creates new Artist
  createArtist: function(artistData) {
    return axios.post("/api/artists/", artistData);
  },
  // Gets all notes
  getAllNotes: function(id) {
    console.log("getAllNotes id: ", id);
    return axios.get("/api/notes/all/" + id);
  },
  // Gets the note with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Updates the note with the given id
  updateNote: function(id){
    return axios.put("/api/notes/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }
};
