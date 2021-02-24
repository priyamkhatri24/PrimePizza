import React from "react";
import IngredientBox from "./IngredientBox/IngredientBox";
import "./buildControls.css";
import SizeBox from "./SizeBox/SizeBox";

const buildControls = (props) => {
  return (
    <div className="build_controls">
      <h4>
        Total Price: <span>{props.totPrice.toFixed(2)}</span>
      </h4>
      <SizeBox size={props.pizzaSize} checked={props.sizeChecked} />
      <IngredientBox checked={props.ingChecked} />
      <button
        onClick={props.orderNow}
        className="order_btn"
        disabled={!props.disable}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default buildControls;
