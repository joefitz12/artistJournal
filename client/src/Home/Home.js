//jshint ignore: start

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Login from "../components/Login";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    state = {
        login: true,
        email: "",
        password: "",
        phone: "",
        firstName: "",
        emailNotifications: "",
        textNotifications: "",
        loggedInData: {}
    };

    switchNav = () => {
        this.state.login === true ? this.setState({login: false}) : this.setState({login: true});
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLogin = event => {
        event.preventDefault();
        API.login({
            email: this.state.email,
            password: this.state.password
        })
        .then(function(data) {
        console.log("data.data._id: ", data.data._id);
        // If there's an error, log the error
        })
        .then()
        .catch(function(err) {
        console.log(err);
      });
    };

    handleCreateArtist = event => {
        event.preventDefault();
        API.createArtist({
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            firstName: this.state.firstName,
            emailNotifications: this.state.emailNotifications,
            textNotifications: this.state.textNotifications,
        })
            .then(res => console.log("res: ",res))
            .catch(err => console.log(err));
    };

    render() {
        return (
        <Container fluid>
            <Nav />
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
                    <Login state={this.state} switchNav={this.switchNav} handleInputChange={this.handleInputChange} handleCreateArtist={this.handleCreateArtist} handleLogin={this.handleLogin} />
                </Col>
            </Row>
        </Container>
        )
    };
};

export default Home;