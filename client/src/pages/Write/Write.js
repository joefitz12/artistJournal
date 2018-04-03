//jshint-ignore: start

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Inspiration from "../../components/Inspiration";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import WordCounter from "../../components/WordCounter";

const Write = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-6">
        <Jumbotron>
          <h1>Freewrite Here</h1>
        </Jumbotron>
      </Col>
      <Col size="md-6">
        <Inspiration loadInspiration={props.loadInspiration} inspiration={props.inspiration} />
      </Col>
    </Row>
    <Row>
      <Col size="md-12">

        <Input
          value={props.title}
          onChange={props.handleInputChange}
          name="title"
          placeholder="Title"
        />
        <TextArea
          value={props.body}
          onChange={props.handleInputChange}
          name="body"
          placeholder="Enter Note Here!"
        />
      </Col>
      <Col size="md-4">
        <WordCounter body={props.body} />
      </Col>
      <Col size="md-8">
        <FormBtn
          disabled={!(props.title && props.body)}
          onClick={props.handleNoteSubmit}
        >
          Submit Note
              </FormBtn>
      </Col>
    </Row>
    <Row>
      <Col size="md-2">
        <Link to="/journal">← Back to Journal</Link>
      </Col>
    </Row>
  </Container>
);

export default Write;
