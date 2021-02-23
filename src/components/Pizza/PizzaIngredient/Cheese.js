import React from "react";
import "../Pizza.css";

const cheese = (props) => {
  const classes = props.wanted ? "cheese" : "cheese hidden";
  return <section className={classes}></section>;
};

export default cheese;
