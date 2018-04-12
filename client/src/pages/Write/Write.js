//jshint-ignore: start

import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Inspiration from "../../components/Inspiration";
import { Input, TextArea, FormBtn } from "../../components/Form";
import WordCounter from "../../components/WordCounter";
import SidewaysTitle from "../../components/SidewaysTitle";
import "./Write.css";

const Write = (props) => (
  <Container fluid>
    <Row>
      <Col id="freewrite-title-col" size="md-1">
        <SidewaysTitle divStyle1={{ background: "#4D6CA5", border: "0 1px #4862A0" }} titleStyle={{ left: "-7vw", top: "100px" }}>
          freewrite
        </SidewaysTitle>
      </Col>
      <Col size="md-10">
        <Row>

          <Col size="md-10">

            <Input
              value={props.title}
              onChange={props.handleInputChange}
              id="write-inspiration-input"
              name="title"
              placeholder="inspiration"
            />
          </Col>
          <Col size="md-2">
            <Inspiration id="write-inspiration-btn" loadInspiration={props.loadInspiration} />
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
            <WordCounter wordCount={props.wordCount} />
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
            <Link to="/journal">← to journal</Link>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Write;
