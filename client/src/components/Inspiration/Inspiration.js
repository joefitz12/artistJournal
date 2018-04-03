//jshint ignore: start

import React from "react";
import { FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import "./Inspiration.css";

const Inspiration = (props) =>
    <div className="inspiration-div">
        <FormBtn
            onClick={props.loadInspiration}
        >
            get inspiration
        </FormBtn>
    </div>;

export default Inspiration;