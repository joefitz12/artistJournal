//jshint ignore: start

import React from "react";
import { Input, FormBtn } from "../Form";
import "./Login.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="login-div">
    {props.state.login === false ?
      <div>
        <FormBtn
          onClick={props.switchNav}
        >
          login to existing
        </FormBtn>
        <h1>create account</h1>
        <h2>chosen name</h2>
        <Input
          value={props.state.firstName}
          onChange={props.handleInputChange}
          name="firstName"
        />
        <h2>email</h2>
        <Input
          value={props.state.email}
          onChange={props.handleInputChange}
          name="email"
        />
        <h2>password</h2>
        <Input
          value={props.state.password}
          onChange={props.handleInputChange}
          name="password"
          type="password"
        />
        <h2>phone</h2>
        <Input
          value={props.state.phone}
          onChange={props.handleInputChange}
          name="phone"
        />
        <h2>notifications</h2>
        <select value={props.state.textNotifications}
          onChange={props.handleTextNotificationChange}
          name="textNotifications">
          <option value="true">I want to receive text message notifications.</option>
          <option value="false">I would like to opt out of receiving text message notifications.</option>
        </select>
        <br />
        <br />
        <select value={props.state.emailNotifications}
          onChange={props.handleEmailNotificationChange}
          name="emailNotifications">
          <option value="true">I want to receive email notifications.</option>
          <option value="false">I would like to opt out of receiving email notifications.</option>
        </select>
        <FormBtn
          onClick={props.handleCreateArtist}
        >
          create artist
        </FormBtn>
      </div>
      :
      <div>
        <FormBtn
          onClick={props.switchNav}
        >
          create new account
        </FormBtn>
        <h1>login</h1>
        <h2>email</h2>
        <Input
          value={props.state.email}
          onChange={props.handleInputChange}
          name="email"
        />
        <h2>password</h2>
        <Input
          value={props.state.password}
          onChange={props.handleInputChange}
          name="password"
          type="password"
        />
        <FormBtn
          onClick={props.handleLogin}
        >
          login
        </FormBtn>
      </div>}
  </span>
);

export default DeleteBtn;
