//jshint-ignore: start

import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Inspiration from "../../components/Inspiration";
import { Input, TextArea, FormBtn } from "../../components/Form";
import WordCounter from "../../components/WordCounter";
import SidewaysTitle from "../../components/SidewaysTitle";
import "./Write.css";

const Write = (props) => (
  <Container fluid>
    <Row>
      <Col id="freewrite-title-col" size="md-1 sm-1 xs-1">
        <SidewaysTitle divStyle1={{ background: "#4D6CA5", border: "0 1px #4862A0" }} id="write-title">
          freewrite
        </SidewaysTitle>
      </Col>
      <Col id="main-container" size="md-11 sm-11 xs-11">
        <Row>
          <div id="inspiration-input-div">
            <Col size="md-11 sm-10 xs-10">
              <Input
                value={props.title}
                onChange={props.handleInputChange}
                id="write-inspiration-input"
                name="title"
                placeholder="inspiration"
              />
            </Col>
            <Col size="md-1 sm-2 xs-2">
              <Inspiration id="write-inspiration-btn" loadInspiration={props.loadInspiration} />
            </Col>
          </div>
        </Row>
        <Row>
          <Col size="md-12 sm-12 xs-12">
            <div id="thoughts-input-div">
              <TextArea
                value={props.body}
                onChange={props.handleInputChange}
                name="body"
                placeholder="thoughts"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <div id="word-count-submit-div">
            <Col size="md-6 sm-6 xs-6">
              <WordCounter wordCount={props.wordCount} />
            </Col>
            <Col size="md-6 sm-6 xs-6">
              <FormBtn
                disabled={!(props.title && props.body)}
                onClick={props.handleNoteSubmit}
              >
                submit
                </FormBtn>
            </Col>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Write;
