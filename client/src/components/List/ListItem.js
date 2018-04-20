import React from "react";
import moment from "moment";

export const ListItem = props =>
  <li className="list-group-item">
     <div id="date-container">
     {moment(props.date).format("M/D/YYYY")}
     </div>
     {props.children}
  </li>;
