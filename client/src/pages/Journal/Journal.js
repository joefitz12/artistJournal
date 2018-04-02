//jshint ignore: start

import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
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
        {props.notes ? (
          <List>
            {props.notes.map(note => (
              <ListItem key={note._id}>
                
                <Link to={"/journal/" + note._id}>
                  <strong>
                  {`${note.date.substring(5,10)}-${note.date.substring(0,4)} - ${note.title}`}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => props.deleteNote(note._id)} />
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


export default Journal;
