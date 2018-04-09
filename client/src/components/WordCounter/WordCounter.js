//jshint ignore: start

import React from "react";
import "./WordCounter.css";

const WordCounter = (props) =>
  <div className="word-counter">
    <h2 id="word-count">
      words: {props.wordCount}
    </h2>
  </div>;

export default WordCounter;
