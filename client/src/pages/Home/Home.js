//jshint ignore: start

import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Login from "../../components/Login";
import { Col, Row, Container } from "../../components/Grid";

const Home = (props) => (
    <Container fluid>
        <Row>
            <Col size="md-12 sm-12">
                <Jumbotron>
                    <h1>Welcome</h1>
                </Jumbotron>
            </Col>
            <Col size="md-6 sm-12">
                <Jumbotron>
                    <h3>it takes 21 consecutive days of doing something to form a habit. make a habit of freewriting. become the artist you were born to be.</h3>
                </Jumbotron>
            </Col>
            <Col size="md-6 sm-12">
                <Login state={props.state} switchNav={props.switchNav} handleInputChange={props.handleInputChange} handleEmailNotificationChange={props.handleEmailNotificationChange} handleTextNotificationChange={props.handleTextNotificationChange} handleCreateArtist={props.handleCreateArtist} handleLogin={props.handleLogin} />
            </Col>
        </Row>
    </Container>
);

export default Home;