//jshint ignore: start

import React from "react";
import Jumbotron from "../../components/Jumbotron";
import SidewaysTitle from "../../components/SidewaysTitle";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Preferences.css";

const Preferences = (props) => (
  <Container fluid>
    <Row>
      <Col size="md-1">
        <SidewaysTitle divStyle1={{ background: "#FFD97D", border: "0 1px solid #FFCA3A" }} titleStyle={{ left: "-9vw", top: "130px" }}>
          preferences
        </SidewaysTitle>
      </Col>
      <Col size="md-6 sm-12">
        <h1>artist info & prefs</h1> 
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
        <select value={props.textNotifications}
          onChange={props.handleInputChange}
          name="textNotifications">
          <option value="true">I want to receive text message notifications.</option>
          <option value="false">I would like to opt out of receiving text message notifications.</option>
        </select>
        <select value={props.emailNotifications}
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
        <FormBtn
          onClick={props.handlePrefSubmit}
        >
          Save Changes
        </FormBtn>
      </Col>
      <Col size="md-4">
        {!props.allNotes[0] ? "" :
          <div>
            <h1>the goods</h1>
            <h2>you've written {props.allNotes.length} notes</h2>
            <h2>the last time you freewrote was {props.allNotes[0].date.substring(5, 10) + "-" + props.allNotes[0].date.substring(2, 4)}</h2>
          </div>
        }
      </Col>
    </Row>
  </Container>
);

export default Preferences;
