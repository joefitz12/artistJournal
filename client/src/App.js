//jshint ignore: start

import React, { Component } from "react";
import moment from "moment";
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
    login: true,
    email: "",
    password: "",
    phone: "",
    firstName: "",
    emailNotifications: "",
    textNotifications: "",
    theme: "",
    allNotes: [],
    artistProgress: {},
    notes: [],
    selectedNote: {},
    title: "",
    body: "",
    wordCount: 0,
    inspiration: "",
    search: ""
  };

  successfulLogin = () => {
    this.loadArtist(this.state.id);
    this.loadNotes(this.state.id);
  }

  loadArtist = id => {
    API.getArtist(id)
      .then(res => {
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
        this.setState({ allNotes: res.data, notes: res.data, title: "", body: "" }, () => this.updateProgress())
      })
      .catch(err => console.log(err));
  };

  updateProgress = () => {
    let noteCount = this.state.allNotes.length;
    let wordCount = this.state.allNotes.reduce((total, current) => current.body.trim().split(" ").filter(word => word !== "").length + total, 0);
    // eslint-disable-next-line radix
    let lastEntryDate = this.state.allNotes.length > 0 ? parseInt(this.state.allNotes[0].date.substring(5, 7)) + "-" + parseInt(this.state.allNotes[0].date.substring(8, 10)) + "-" + parseInt(this.state.allNotes[0].date.substring(2, 4)) : 0;

    let differenceCounter = this.calcDateDifference(this.state.allNotes);

    let currentStreak = this.updateCurrentStreak(differenceCounter);

    let artistProgress = {
      noteCount,
      wordCount,
      lastEntryDate,
      differenceCounter,
      currentStreak
    };

    this.setState({ artistProgress });
  }

  updateCurrentStreak = (arr) => {
    if (arr[0] > 1) {
      return 0;
    }
    else {
      let streak = 1;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= 1) {
          streak = streak + arr[i]
        }
        else {
          return streak;
        }
      }
    }
  }

  calcDateDifference = (notes) => {

    let streakCounter = [];
    let currentDate = moment().format("MMM Do YY");

    for (let i = 0; i < notes.length; i++) {
      if (notes[i + 1]) {
        let date1 = moment(notes[i].date).format("MMM Do YY");
        let date2 = moment(notes[i + 1].date).format("MMM Do YY");
        streakCounter.push(moment(date1, "MMM Do YY").diff(moment(date2, "MMM Do YY"), "days"))
      }
      else {
        let lastDate = moment(notes[0].date).format("MMM Do YY");
        streakCounter = [(moment(currentDate, "MMM Do YY").diff(moment(lastDate, "MMM Do YY"), "days")), ...streakCounter]
      }
    }

    return streakCounter;

  }

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
        this.setState({ selectedNote: this.state.notes[key] },
          () => this.setState({
            title: this.state.selectedNote.title,
            body: this.state.selectedNote.body
          }, () => this.countWords(this.state.selectedNote.body))
        )
      }
    }
  };

  newNote = () => {
    this.setState({ selectedNote: {}, wordCount: 0, title: "", body: "", search: "", notes: this.state.allNotes })
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

  countWords = (note) => {
    let wordCount = note.split(" ").length > 0 ? note.trim().split(" ").filter(word => word !== "").length : 0;
    this.setState({ wordCount: wordCount });
  }

  switchNav = () => {
    this.state.login === true ? this.setState({ login: false }) : this.setState({ login: true });
  };

  handleEmailNotificationChange = () => {
    this.state.emailNotifications === true ? this.setState({ emailNotifications: false }) : this.setState({ emailNotifications: true });
  }

  handleTextNotificationChange = () => {
    this.state.textNotifications === true ? this.setState({ textNotifications: false }) : this.setState({ textNotifications: true });
  }

  handleLogin = event => {
    event.preventDefault();
    API.login({
      email: this.state.email,
      password: this.state.password
    })
      .then(data => {
        // console.log("data: ", data);
        // console.log("data.data._id: ", data.data._id);
        // let id = data.data._id;
        this.setState({ id: data.data._id, isAuthorized: true, password: "" },()=>this.successfulLogin());
        // If there's an error, log the error
        // this.componentDidMount();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  handleLogout = event => {
    event.preventDefault();
    this.setState({ 
      id: 0, 
      isAuthorized: false, 
      phone: 0,
      firstName: "",
      emailNotifications: "",
      textNotifications: "",
      theme: "",
      allNotes: [],
      artistProgress: {},
      notes: [],
      selectedNote: {},
      title: "",
      body: "",
      wordCount: 0,
      inspiration: "",
      search: "" 
    });
  };

  handleCreateArtist = event => {
    event.preventDefault();
    API.createArtist({
      email: this.state.email,
      password: this.state.password,
      phone: parseInt(this.state.phone, 10),
      firstName: this.state.firstName,
      emailNotifications: this.state.emailNotifications,
      textNotifications: this.state.textNotifications,
    })
      .then(() => API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(data => {
          this.setState({ id: data.data._id, isAuthorized: true, password: "" }, ()=>this.successfulLogin());
        })
        .catch(function (err) {
          console.log(err);
        }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }, () => this.countWords(this.state.body));
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
      if (this.state.selectedNote._id) {
        console.log(this.state.selectedNote._id);
        API.updateNote(this.state.selectedNote._id, {
          title: this.state.title,
          body: this.state.body
        })
          .then(res => this.loadNotes(this.state.id))
          .catch(err => console.log(err));
      }
      else {
        API.saveNote({
          userId: this.state.id,
          title: this.state.title,
          body: this.state.body
        })
          .then(res => this.loadNotes(this.state.id))
          .then(() => this.updateProgress())
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    return (
      <Router>
        <div>
          <Nav isAuthorized={this.state.isAuthorized} handleLogout={this.handleLogout} />
          <Switch>
            <Route exact path="/login" render={() => <Home state={this.state} switchNav={this.switchNav} handleEmailNotificationChange={this.handleEmailNotificationChange} handleTextNotificationChange={this.handleTextNotificationChange} handleLogin={this.handleLogin} handleCreateArtist={this.handleCreateArtist} handleInputChange={this.handleInputChange} />} />
            <Route exact path="/" 
              render={() => this.state.isAuthorized && this.state.id ? 
              <Journal search={this.state.search} notes={this.state.notes} selectedNote={this.state.selectedNote} title={this.state.title} body={this.state.body} selectNote={this.selectNote} deleteNote={this.deleteNote} newNote={this.newNote} updateSearch={this.updateSearch} loadInspiration={this.loadInspiration} handleNoteSubmit={this.handleNoteSubmit} handleInputChange={this.handleInputChange} wordCount={this.state.wordCount} /> :
              <Home state={this.state} switchNav={this.switchNav} handleEmailNotificationChange={this.handleEmailNotificationChange} handleTextNotificationChange={this.handleTextNotificationChange} handleLogin={this.handleLogin} handleCreateArtist={this.handleCreateArtist} handleInputChange={this.handleInputChange} />} />
            <Route exact path="/write" 
              render={() => this.state.isAuthorized && this.state.id ? 
              <Write title={this.state.title} body={this.state.body} inspiration={this.state.inspiration} loadInspiration={this.loadInspiration} handleInputChange={this.handleInputChange} handleNoteSubmit={this.handleNoteSubmit} wordCount={this.state.wordCount} /> :
              <Home state={this.state} switchNav={this.switchNav} handleEmailNotificationChange={this.handleEmailNotificationChange} handleTextNotificationChange={this.handleTextNotificationChange} handleLogin={this.handleLogin} handleCreateArtist={this.handleCreateArtist} handleInputChange={this.handleInputChange} />} />
            <Route exact path="/preferences" 
              render={() => this.state.isAuthorized && this.state.id ? 
              <Preferences id={this.state.id} artistProgress={this.state.artistProgress} email={this.state.email} phone={this.state.phone} firstName={this.state.firstName} textNotifications={this.state.textNotifications} emailNotifications={this.state.emailNotifications} theme={this.state.theme} handleInputChange={this.handleInputChange} handlePrefSubmit={this.handlePrefSubmit} /> :
              <Home state={this.state} switchNav={this.switchNav} handleEmailNotificationChange={this.handleEmailNotificationChange} handleTextNotificationChange={this.handleTextNotificationChange} handleLogin={this.handleLogin} handleCreateArtist={this.handleCreateArtist} handleInputChange={this.handleInputChange} />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  };
}


export default App;

