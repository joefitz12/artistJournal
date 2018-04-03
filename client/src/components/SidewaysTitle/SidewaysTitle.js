//jshint ignore: start

import React from "react";
import "./SidewaysTitle.css";

const SidewaysTitle = (props) =>
    <div style={props.divStyle} className="sideways-div">
        <h2 style={props.titleStyle}>{props.children}</h2>
    </div>;


export default SidewaysTitle;