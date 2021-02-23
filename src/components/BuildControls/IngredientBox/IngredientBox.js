import React from "react";
import "./ingredientBox.css";

const ingredients = [
  { label: "Mushrooms", type: "mushrooms" },
  { label: "Peppers", type: "peppers" },
  { label: "Pepperoni", type: "pepperoni" },
  { label: "Extra Cheese", type: "cheese" },
  { label: "Thin crust", type: "crust" },
];

const ingredientBox = (props) => {
  return ingredients.map((ele, i) => {
    const backgroundClass = i % 2 === 0 ? "first" : "second";
    return (
      <div key={ele.label} className={"ing_control_box " + backgroundClass}>
        {ele.label}
        <label className="container">
          <input onClick={props.checked} type="checkbox" label={ele.type} />
          <span className="checkmark"></span>
        </label>
      </div>
    );
  });
};

export default ingredientBox;
