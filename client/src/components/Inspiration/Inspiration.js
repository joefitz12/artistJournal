//jshint ignore: start

import React from "react";
import { FormBtn } from "../../components/Form";

const Inspiration = (props) =>
    <div style={{ height: 100, clear: 'both' }} className="inspiration">
        <div id="inspiration">
            {props.inspiration}
        </div>
        <FormBtn
            onClick={props.loadInspiration}
        >
        get inspiration
        </FormBtn>
    </div>;

export default Inspiration;