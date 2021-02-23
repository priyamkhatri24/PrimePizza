import React from "react";

const sauce = (props) => {
  const classes = props.wanted
    ? "sauce sauce-white"
    : "sauce sauce-white hidden";
  return <section className="sauce sauce-white"></section>;
};

export default sauce;
