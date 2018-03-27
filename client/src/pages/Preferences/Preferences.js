//jshint ignore: start

import React from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

const Preferences = (props) => (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>My Preferences</h1>
            </Jumbotron>
            {console.log(props)}
            <Input
            value={props.firstName}
            onChange={props.handleInputChange}
            name="firstName"
            />
          </Col>
          <FormBtn
            onClick={props.handlePrefSubmit}
          >
            Save Changes
              </FormBtn>
        </Row>
      </Container>
  );

export default Preferences;
