import React from "react";

const WordCounter = (props) =>
  <div className="word-counter">
    <h2>
      {(!props.body.match(/\w+\s/g) ? 0 : props.body.match(/\w+\s/g).length) + (!props.body.match(/\w+[-,."'\])]/g) ? 0 : props.body.match(/\w+[-,."'\])]/g).length)}
    </h2>
  </div>;

export default WordCounter;
