import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Inspiration from "../../components/Inspiration";
import WordCounter from "../../components/WordCounter";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Note.css";

const Note = (props) => (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Row>
  
            <Col size="md-10 sm-10 xs-10">
  
              <Input
                value={props.title}
                onChange={props.handleInputChange}
                id="inspiration-input"
                name="title"
                placeholder="inspiration"
              />
            </Col>
            <Col size="md-2 sm-2 xs-2">
              <Inspiration id="inspiration-button" loadInspiration={props.loadInspiration} />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <TextArea
                value={props.body}
                onChange={props.handleInputChange}
                name="body"
                placeholder="thoughts"
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-4 sm-4 xs-4">
              <WordCounter wordCount={props.wordCount} />
            </Col>
            <Col size="md-8 sm-8 xs-8">
              <FormBtn
                disabled={!(props.title && props.body)}
                onClick={props.handleNoteSubmit}
              >
                submit
                </FormBtn>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );

export default Note;
