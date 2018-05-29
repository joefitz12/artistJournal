//jshint ignore: start

import React from "react";
import SidewaysTitle from "../../components/SidewaysTitle";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import "./Preferences.css";

const Preferences = (props) => (
  <Container fluid>
    <Row>
      <Col id="preferences-title-col" size="md-1 sm-1 xs-1">
        <SidewaysTitle divStyle1={{ background: "#FFD97D", border: "0 1px solid #FFCA3A" }} id="pref-title">
          preferences
        </SidewaysTitle>
      </Col>
      <Col id="main-container" size="md-11 sm-11 xs-11">
        <Row>
          <Col size="md-5 sm-12 xs-12">
            <div id="artist-prefs-col">
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
              {/* <select value={props.textNotifications}
                onChange={props.handleInputChange}
                name="textNotifications">
                <option value="true">I want to receive text message notifications.</option>
                <option value="false">I would like to opt out of receiving text message notifications.</option>
              </select> */}
              <select value={props.emailNotifications}
                onChange={props.handleInputChange}
                name="emailNotifications">
                <option value="true">I want to receive email notifications.</option>
                <option value="false">I would like to opt out of receiving email notifications.</option>
              </select>
              {/* <h2>theme</h2>
              <select
                value={props.theme}
                onChange={props.handleInputChange}
                name="theme"
              >
                <option value="first theme">first theme</option>
                <option value="theme2">theme again</option>
                <option value="theme3">a theme x 3</option>
              </select> */}
              <FormBtn
                onClick={props.handlePrefSubmit}
              >
                save changes
              </FormBtn>
            </div>
          </Col>
          <Col size="md-5 sm-12 xs-12">
            <div id="artist-accomplishments-col">
              {!props.artistProgress.noteCount ? "" :
              <div>
                <h1>be proud of your accomplishments.</h1>
                <h2>you've written: {props.artistProgress.noteCount} notes; {props.artistProgress.wordCount} words.</h2>
                <h2>the last time you freewrote was {props.artistProgress.lastEntryDate}.</h2>
                <h2>your current streak: {props.artistProgress.currentStreak}.</h2>
              </div>
              }
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Preferences;
