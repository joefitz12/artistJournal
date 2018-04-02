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
      <Col size="md-12">
        <Jumbotron>
          <h1>Freewrite Here</h1>
        </Jumbotron>
        <Inspiration loadInspiration={props.loadInspiration} inspiration={props.inspiration} />
        <form>
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
          <WordCounter body={props.body} />
          <FormBtn
            disabled={!(props.title && props.body)}
            onClick={props.handleNoteSubmit}
          >
            Submit Note
              </FormBtn>
        </form>
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
