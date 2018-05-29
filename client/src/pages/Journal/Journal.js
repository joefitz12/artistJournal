//jshint ignore: start

import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import Note from "../../components/Note";
import SidewaysTitle from "../../components/SidewaysTitle";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Journal.css";

const Journal = (props) => (
  <Container fluid>
    <Row>
      <Col id="journal-title-col" size="md-1 sm-1 xs-1">
        <SidewaysTitle divStyle1={{ background: "#FFA987", border: "0 1px solid #FCDEBE" }} id="journal-title">
          free thoughts
        </SidewaysTitle>
      </Col>
      <Col id="main-container" size="md-11 sm-11 xs-11">
        <Row>
          <Col size="md-6 sm-12">
            <Row>
              <Col size="md-8 sm-9 xs-8">
                <Input
                  value={props.search}
                  onChange={props.updateSearch}
                  id="search-bar-input"
                  name="search"
                  placeholder="search"
                />
              </Col>
              <Col size="md-4 sm-3 xs-4">
                <FormBtn id="new-note-btn" onClick={props.newNote}>
                  new note
                </FormBtn>
              </Col>
            </Row>
            <Row>
              {props.notes ? (
                <List>
                  {props.notes.map(note => (
                    <ListItem key={note._id} date={note.date}>
                      <a onClick={() => props.selectNote(note._id)}>
                        <strong>
                          {`${note.title}`}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => props.deleteNote(note._id)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h3>nothing to display. freewrite, and your notes will show up here!</h3>
                )}
            </Row>
          </Col>
          <Col size="md-6 sm-12">
              <Note title={props.title} body={props.body} handleNoteSubmit={props.handleNoteSubmit} loadInspiration={props.loadInspiration} handleInputChange={props.handleInputChange} wordCount={props.wordCount} />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);


export default Journal;
