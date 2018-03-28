//jshint ignore: start

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import obliqueStratAPI from "./utils/obliqueStratAPI";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Note from "./pages/Note";
import Write from "./pages/Write";
import Preferences from "./pages/Preferences";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

class App extends Component {

  state = {
    id: "5aba6c1424123a9e59ca4c74",
    email: "",
    phone: 0,
    firstName: "",
    emailNotifications: "",
    textNotifications: "",
    theme: "",
    notes: [],
    title: "",
    body: "",
    inspiration: ""
  };



  componentDidMount() {
    this.loadArtist(this.state.id);
    this.loadNotes(this.state.id);
    this.loadInspiration();
  }

  loadArtist = id => {
    API.getArtist(id)
      .then(res =>
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
      )
      .catch(err => console.log(err));
  }

  loadNotes = (id) => {
    API.getAllNotes(id)
      .then(res =>
        this.setState({ notes: res.data, title: "", body: "" })
      )
      .catch(err => console.log(err));
  };

  loadInspiration = () => {
    let inspiration = obliqueStratAPI.getInspiration();
    this.setState({ inspiration: inspiration });
  };

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNotes())
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
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Journal notes={this.state.notes} deleteNote={this.deleteNote} />} />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/journal" render={() => <Journal notes={this.state.notes} deleteNote={this.deleteNote} />} />
            <Route exact path="/journal/:id" component={Note} />
            <Route exact path="/write" render={() => <Write title={this.state.title} body={this.state.body} inspiration={this.state.inspiration} loadInspiration={this.loadInspiration} handleInputChange={this.handleInputChange} handleNoteSubmit={this.handleNoteSubmit} />} />
            <Route exact path="/preferences" render={() => <Preferences id={this.state.id} email={this.state.email} phone={this.state.phone} firstName={this.state.firstName} textNotifications={this.state.textNotifications} emailNotifications={this.state.emailNotifications} theme={this.state.theme} handleInputChange={this.handleInputChange} handlePrefSubmit={this.handlePrefSubmit} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;
