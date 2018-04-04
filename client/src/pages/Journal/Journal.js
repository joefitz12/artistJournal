//jshint ignore: start

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import Note from "../../components/Note";
import Write from "../Write";
import SidewaysTitle from "../../components/SidewaysTitle";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Journal = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-1">
        <SidewaysTitle divStyle1={{ background: "#FFA987", border: "0 1px solid #FCDEBE" }} titleStyle={{ left: "-12vw", top: "170px" }}>
          free thoughts
        </SidewaysTitle>
      </Col>
      <Col size="md-10">
        <Row>
          <Col size="md-6 sm-12">
            <Row>
              <Col size="md-9">
                <Input
                  value={props.search}
                  onChange={props.updateSearch}
                  id="search-bar-input"
                  name="search"
                  placeholder="Search"
                />
              </Col>
              <Col size="md-3">
                <FormBtn id="new-note-btn" onClick={props.newNote}>
                  new note
                </FormBtn>
              </Col>
            </Row>
            {props.notes ? (
              <List>
                {props.notes.map(note => (
                  <ListItem key={note._id}>
                    <a onClick={() => props.selectNote(note._id)}>
                      <strong>
                        {`${note.date.substring(5, 10)}-${note.date.substring(2, 4)} - ${note.title}`}
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => props.deleteNote(note._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>nothing to display. freewrite, and your notes will show up here!</h3>
              )}
          </Col>
          <Col size="md-6 sm-12">
            {props.selectedNote.title ? (
              <Note title={props.selectedNote.title} body={props.selectedNote.body} handleNoteSubmit={props.handleNoteSubmit} loadInspiration={props.loadInspiration} handleInputChange={props.handleInputChange} />
            )
              : (
                <Note title={props.title} body={props.body} handleNoteSubmit={props.handleNoteSubmit} loadInspiration={props.loadInspiration} handleInputChange={props.handleInputChange} />
              )
            }
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);


export default Journal;
