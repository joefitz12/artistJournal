import React from "react";

export const ListItem = props =>
  <li className="list-group-item">
     <div id="date-container">
     {
       // eslint-disable-next-line radix
     }{`${parseInt(props.date.substring(5, 7))}/${parseInt(props.date.substring(8, 10))}/${parseInt(props.date.substring(2, 4))}`}
     </div>
     {props.children}
  </li>;
