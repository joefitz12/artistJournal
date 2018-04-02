// jshint ignore: start

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./Home";

!document.getElementById("root") ? ReactDOM.render(<Home />, document.getElementById("login-root")) : ReactDOM.render(<App />, document.getElementById("root"));



