import React from "react";

export const Col = ({ id, size, children }) =>
  <div id={id} className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;
