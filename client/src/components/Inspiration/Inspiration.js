//jshint ignore: start

import React from "react";
import { FormBtn } from "../../components/Form";
import "./Inspiration.css";

const Inspiration = (props) =>
    <div className="inspiration-div">
        <FormBtn
            onClick={props.loadInspiration}
            id={props.id}
        >
            get
        </FormBtn>
    </div>;

export default Inspiration;