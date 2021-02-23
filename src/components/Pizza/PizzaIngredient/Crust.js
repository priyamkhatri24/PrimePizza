import "../Pizza.css";
import React from "react";

const crust = (props) => {
  const classes = props.wanted ? "crust hidden" : "crust";
  return <section className={classes}></section>;
};

export default crust;
