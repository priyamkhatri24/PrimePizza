import React from "react";
import Cheese from "./PizzaIngredient/Cheese";
import Peppers from "./PizzaIngredient/Peppers";
import Mushrooms from "./PizzaIngredient/Mushrooms";
import Crust from "./PizzaIngredient/Crust";

const Pizza = (props) => {
  return (
    <div id="pizza">
      <div className="scale">
        <Peppers />
        <Mushrooms />
        <Cheese />
        <Crust />
      </div>
    </div>
  );
};

export default Pizza;
