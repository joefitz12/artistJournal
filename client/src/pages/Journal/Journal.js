//jshint ignore: start

import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import Note from "../../components/Note";
import SidewaysTitle from "../../components/SidewaysTitle";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

const Journal = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-1 sm-1 xs-1">
        <SidewaysTitle divStyle1={{ background: "#FFA987", border: "0 1px solid #FCDEBE" }} titleStyle={{ left: "-12vw", top: "170px" }}>
          free thoughts
        </SidewaysTitle>
      </Col>
      <Col size="md-10 sm-11 xs-11">
        <Row>
          <Col size="md-6 sm-12">
            <Row>
              <Col size="md-9">
                <Input
                  value={props.search}
                  onChange={props.updateSearch}
                  id="search-bar-input"
                  name="search"
                  placeholder="search"
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
