//jshint ignore: start

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Journal extends Component {
  state = {
    id: "",
    email: "",
    password: "",
    phone: 0,
    firstName: "",
    emailNotifications: "",
    textNotifications: "",
    theme: "",
    notes: [],
    title: "",
    body: ""
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getAllNotes()
      .then(res =>
        this.setState({ notes: res.data, title: "", body: ""})
        
      )
      .catch(err => console.log(err));
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

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      API.saveNote({
        title: this.state.title,
        body: this.state.body
      })
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>My Preferences</h1>
            </Jumbotron>
            {this.state.notes.length ? (
              <List>
                {this.state.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/journal/" + note._id}>
                      <strong>
                        {note.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteNote(note._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Journal;
