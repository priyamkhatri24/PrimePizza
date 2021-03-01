import React from "react";
import "./Input.css";

const input = (props) => {
  return (
    <input
      required
      onChange={props.changed}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default input;
