import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" id={props.id} rows="15" {...props} />
  </div>;
