//jshint ignore: start

import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Login from "../../components/Login";
import { Col, Row, Container } from "../../components/Grid";

const Home = (props) => (
    <Container fluid>
        <Row>
            <Col size="md-5 md-offset-1 sm-12">
                <Jumbotron>
                    <h3>freewriting is a process to help artists shake off apathy and self doubt. <br /><br />
                        artistJournal is designed to help you become disciplined about your freewriting process. <br /><br />
                        every day we'll send you an email reminding you to reflect, explore ideas, and grow as an artist. <br /><br />
                        freewrite today. freewrite every day. <br />
                        become the artist you were born to be.</h3>
                </Jumbotron>
            </Col>
            <Col size="md-5 sm-12">
                <Login state={props.state} switchNav={props.switchNav} handleInputChange={props.handleInputChange} handleEmailNotificationChange={props.handleEmailNotificationChange} handleTextNotificationChange={props.handleTextNotificationChange} handleCreateArtist={props.handleCreateArtist} handleLogin={props.handleLogin} />
            </Col>
        </Row>
    </Container>
);

export default Home;