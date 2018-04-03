//jshint-ignore: start

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Inspiration from "../../components/Inspiration";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import WordCounter from "../../components/WordCounter";
import SidewaysTitle from "../../components/SidewaysTitle";
import "./Write.css";

const Write = (props) => (
  <Container fluid>
    <Row>
      <Col id="freewrite-title-col" size="md-1">
        <SidewaysTitle divStyle={{ background: "#23395B" }} titleStyle={{ left: "-7vw", top: "100px" }}>
          freewrite
        </SidewaysTitle>
      </Col>
      <Col size="md-10">
        <Row>

          <Col size="md-10">

            <Input
              value={props.title}
              onChange={props.handleInputChange}
              name="title"
              placeholder="inspiration"
            />
          </Col>
          <Col size="md-2">
            <Inspiration loadInspiration={props.loadInspiration} />
          </Col>
          <Col size="md-12">
            <TextArea
              value={props.body}
              onChange={props.handleInputChange}
              name="body"
              placeholder="thoughts"
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
      </Col>
    </Row>
  </Container>
);

export default Write;
