import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Write = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Freewrite Here</h1>
        </Jumbotron>
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
          <FormBtn
            disabled={!(props.title && props.body)}
            onClick={props.handleNoteSubmit}
          >
            Submit Note
              </FormBtn>
        </form>
      </Col>
    </Row>
  </Container>
);

export default Write;
