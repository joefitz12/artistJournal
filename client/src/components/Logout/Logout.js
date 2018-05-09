//jshint ignore: start

import React from "react";
import { FormBtn } from "../Form";
import "./Logout.css";

const Logout = props => (
  <span id="logout-div">
    {props.isAuthorized && <FormBtn id="logout-btn" onClick={props.handleLogout}>logout</FormBtn> }
  </span>
);

export default Logout;
