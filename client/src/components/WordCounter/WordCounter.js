import React from "react";
import "./WordCounter.css";

const WordCounter = (props) =>
  <div className="word-counter">
    <h2 id="word-count">
      words: {(!props.body.match(/\w+\s/g) ? 0 : props.body.match(/\w+\s/g).length) + (!props.body.match(/\w+[-,;:."'\])]/g) ? 0 : props.body.match(/\w+[-,;:."'\])]/g).length)}
    </h2>
  </div>;

export default WordCounter;
