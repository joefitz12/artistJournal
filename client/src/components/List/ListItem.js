import React from "react";
import moment from "moment";

export const ListItem = props =>
  <li className="row list-group-item">
    <div id="date-container">
      {moment(props.date).format("M/D/YYYY")}
    </div>
    <div id="note-title-container">
     {props.children}
    </div>
  </li>;
