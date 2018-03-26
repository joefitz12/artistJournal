import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Write extends Component {
  state = {
    title: "",
    body: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.body) {
      API.saveNote({
        title: this.state.title,
        body: this.state.body
      })
        .then(res => this.setState({title: "", body: ""}))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Freewrite Here</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Enter Note Here!"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.body)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Write;
