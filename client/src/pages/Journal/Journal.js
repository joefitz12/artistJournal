//jshint ignore: start

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import Note from "../../components/Note";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Journal = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-12 sm-12">
        <Jumbotron>
          <h1>My Notes</h1>
        </Jumbotron>
        <Input
          value={props.search}
          onChange={props.updateSearch}
          name="search"
          placeholder="Search"
        />
      </Col>
    </Row>
    <Row>
      <Col size="md-6 sm-12">
        {props.notes ? (
          <List>
            {props.notes.map(note => (
              <ListItem key={note._id}>
                <a onClick={() => props.selectNote(note._id)}>
                  <strong>
                    {`${note.date.substring(5, 10)}-${note.date.substring(0, 4)} - ${note.title}`}
                  </strong>
                </a>
                <DeleteBtn onClick={() => props.deleteNote(note._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </Col>
      <Col size="md-6 sm-12">
        {props.selectedNote.title ? (
          <Note title={props.selectedNote.title} body={props.selectedNote.body} />
        )
        : (
          <h3>Select a note to read</h3>
        )
        }
      </Col>
    </Row>
  </Container>
);


export default Journal;
