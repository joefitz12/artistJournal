import axios from "axios";

export default {
  // Logs in
  login: function(loginData) {
    return axios.post("/api/artists/login/", loginData);
  },
  // Gets artist info
  getArtist: function(id) {
    return axios.get("/api/artists/" + id);
  },
  // Gets artists for email
  getAllEmail: function() {
    return axios.get("/api/artists/email");
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
    return axios.get("/api/notes/all/" + id);
  },
  // Gets the note with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Updates the note with the given id
  updateNote: function(id, noteData){
    return axios.put("/api/notes/" + id, noteData);
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
