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
            <h2>chosen name</h2>
            <Input
            value={props.firstName}
            onChange={props.handleInputChange}
            name="firstName"
            />
            <h2>email</h2>
            <Input
            value={props.email}
            onChange={props.handleInputChange}
            name="email"
            />
            <h2>phone</h2>
            <Input
            value={props.phone}
            onChange={props.handleInputChange}
            name="phone"
            />
            <h2>notifications</h2>
            <select value={props.textNotifcations}
            onChange={props.handleInputChange}
            name="textNotifications">
              <option value="true">I want to receive text message notifications.</option>
              <option value="false">I would like to opt out of receiving text message notifications.</option>
            </select>
            <br />
            <br />
            <select value={props.emailNotifcations}
            onChange={props.handleInputChange}
            name="emailNotifications">
              <option value="true">I want to receive email notifications.</option>
              <option value="false">I would like to opt out of receiving email notifications.</option>
            </select>
            <h2>theme</h2>
            <select
            value={props.theme}
            onChange={props.handleInputChange}
            name="theme"
            >
              <option value="first theme">first theme</option>
              <option value="theme2">theme again</option>
              <option value="theme3">a theme x 3</option>
            </select>
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
