//jshint ignore: start

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import obliqueStratAPI from "./utils/obliqueStratAPI";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Write from "./pages/Write";
import Preferences from "./pages/Preferences";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {

  state = {
    id: "5ac5001de3bcd21d53cdf105",
    email: "",
    phone: 0,
    firstName: "",
    emailNotifications: "",
    textNotifications: "",
    theme: "",
    allNotes: [],
    notes: [],
    selectedNote: {},
    title: "",
    body: "",
    inspiration: "",
    search: ""
  };



  componentDidMount() {
    this.loadArtist(this.state.id);
    this.loadNotes(this.state.id);
    this.loadInspiration();
  }

  loadArtist = id => {
    API.getArtist(id)
      .then(res => {
        console.log("loadArtist results", res);
        this.setState(
          {
            email: res.data.email,
            phone: res.data.phone,
            firstName: res.data.firstName,
            emailNotifications: res.data.emailNotifications,
            textNotifications: res.data.textNotifications,
            theme: res.data.theme,
          }
        )
      }
      )
      .catch(err => console.log(err));
  }

  loadNotes = (id) => {
    API.getAllNotes(id)
      .then(res => {
        console.log("loadNotes res:", res);
        this.setState({ allNotes: res.data, notes: res.data, title: "", body: "" })
      })
      .catch(err => console.log(err));
  };

  searchNotes = () => {
    let filteredNotes = this.state.allNotes.filter(note => (note.title.toLowerCase().includes(this.state.search.toLowerCase()) || note.body.toLowerCase().includes(this.state.search.toLowerCase())));
    !this.state.search ? this.setState({ notes: this.state.allNotes }) : this.setState({ notes: filteredNotes });
  };

  updateSearch = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, this.searchNotes);
  };

  selectNote = (id) => {
    for (let key in this.state.notes) {
      if (this.state.notes[key]._id === id) {
        this.setState({ selectedNote: this.state.notes[key] })
      }
    }
  };

  newNote = () => {
    this.setState({selectedNote: {}, title: "", body: "", search: "", notes: this.state.allNotes})
  }

  loadInspiration = () => {
    let inspiration = obliqueStratAPI.getInspiration();
    this.setState({ inspiration: inspiration });
    this.setState({ title: inspiration });
  };

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNotes(this.state.id))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handlePrefSubmit = event => {
    event.preventDefault();
    API.saveArtist(this.state.id, {
      email: this.state.email,
      phone: this.state.phone,
      firstName: this.state.firstName,
      emailNotifications: this.state.emailNotifications,
      textNotifications: this.state.textNotifications,
      theme: this.state.theme,
    })
      .then(res => this.loadArtist(this.state.id))
      .catch(err => console.log(err));
  };

  handleNoteSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      API.saveNote({
        userId: this.state.id,
        title: this.state.title,
        body: this.state.body
      })
        .then(res => this.loadNotes(this.state.id))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/login" render={() => <Home />} />
            <Route exact path="/" render={() => <Journal search={this.state.search} notes={this.state.notes} selectedNote={this.state.selectedNote} title={this.state.title} body={this.state.body} selectNote={this.selectNote} deleteNote={this.deleteNote} newNote={this.newNote} updateSearch={this.updateSearch} loadInspiration={this.loadInspiration} handleNoteSubmit={this.handleNoteSubmit} handleInputChange={this.handleInputChange} />} />
            <Route exact path="/write" render={() => <Write title={this.state.title} body={this.state.body} inspiration={this.state.inspiration} loadInspiration={this.loadInspiration} handleInputChange={this.handleInputChange} handleNoteSubmit={this.handleNoteSubmit} />} />
            <Route exact path="/preferences" render={() => <Preferences id={this.state.id} allNotes={this.state.allNotes} email={this.state.email} phone={this.state.phone} firstName={this.state.firstName} textNotifications={this.state.textNotifications} emailNotifications={this.state.emailNotifications} theme={this.state.theme} handleInputChange={this.handleInputChange} handlePrefSubmit={this.handlePrefSubmit} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;
