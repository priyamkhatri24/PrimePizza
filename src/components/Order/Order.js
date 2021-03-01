import React from "react";
import "./Order.css";

const order = (props) => {
  const ingredientsArray = [];
  for (let [key, val] of Object.entries(props.ingredients)) {
    if (val)
      ingredientsArray.push(key.slice(0, 1).toUpperCase() + key.slice(1));
  }
  return (
    <div className="order">
      <div className="ingredients">
        <p>
          <strong>{props.size} Pizza with</strong>
        </p>
        <p>{ingredientsArray.join(", ")}</p>
        <p>Customer: {props.customerName}</p>
      </div>
      <div className="price">
        <p>Total price: {props.price}</p>
      </div>
    </div>
  );
};
export default order;
