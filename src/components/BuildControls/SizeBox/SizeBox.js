import React from "react";
import "./sizeBox.css";

const PIZZA_SIZES = ["Regular", "Medium", "Large"];

const sizeBox = (props) => {
  const sizeInput = PIZZA_SIZES.map((ele) => {
    return (
      <label key={ele} className="container top">
        {ele}
        <input
          readOnly
          onClick={props.checked}
          checked={ele === props.size}
          type="checkbox"
          name={ele}
        />
        <span className="checkmark"></span>
      </label>
    );
  });

  return (
    <div className="ing_control_box second spacing">
      Size
      {sizeInput}
    </div>
  );
};

export default sizeBox;
