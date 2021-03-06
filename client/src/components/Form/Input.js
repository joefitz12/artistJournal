import React from "react";
import "./Form.css";

export const Input = props =>
  <div className="form-group">
    <input className="form-control" id={props.id} {...props} />
  </div>;
