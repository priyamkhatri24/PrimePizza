import React from "react";
import Cheese from "./PizzaIngredient/Cheese";
import Peppers from "./PizzaIngredient/Peppers";
import Mushrooms from "./PizzaIngredient/Mushrooms";
import Crust from "./PizzaIngredient/Crust";
import Sauce from "./PizzaIngredient/Sauce";
import Pepperoni from "./PizzaIngredient/Pepperoni";

const Pizza = (props) => {
  return (
    <div id="pizza">
      <div className="scale_small">
        <Peppers wanted={props.ingredients.peppers} />
        <Mushrooms wanted={props.ingredients.mushrooms} />
        <Cheese wanted={props.ingredients.cheese} />
        <Pepperoni wanted={props.ingredients.pepperoni} />
        <Sauce wanted={props.ingredients.sauce} />
        <Crust wanted={props.ingredients.crust} />
      </div>
    </div>
  );
};

export default Pizza;
