import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} id={props.id} className="btn btn-success">
    {props.children}
  </button>;
