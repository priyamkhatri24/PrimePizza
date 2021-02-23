import React, { Component } from "react";
import BuildControls from "../../components/BuildControls/BuildControls";
import Aux from "../../components/hoc/Auxiliary";
import Pizza from "../../components/Pizza/Pizza";
import Modal from "../../UI/Modal/Modal";

const INGREDIENT_PRICE = {
  mushrooms: 60,
  pepperoni: 120,
  peppers: 40,
  cheese: 50,
  crust: 20,
};

class PizzaBuilder extends Component {
  state = {
    ingredients: {
      mushrooms: false,
      pepperoni: false,
      peppers: false,
      cheese: false,
      crust: false,
    },
    config: {
      size: "Regular",
      priceMultiplier: 1,
    },
    basePrice: 0,
    totalPrice: 0,
    purchasable: false,
  };

  ingredientSelectHandler = (e) => {
    const label = e.target.getAttribute("label");
    const updatedIngredients = { ...this.state.ingredients };
    let newPrice;
    let { basePrice } = this.state;
    if (e.target.checked) {
      newPrice = basePrice + INGREDIENT_PRICE[label];
    }
    if (!e.target.checked) {
      newPrice = basePrice - INGREDIENT_PRICE[label];
    }
    updatedIngredients[label] = e.target.checked;
    this.setState({
      ingredients: updatedIngredients,
      basePrice: newPrice,
      totalPrice: newPrice * this.state.config.priceMultiplier,
    });
    const ingArr = [];
    for (let [_, val] of Object.entries(updatedIngredients)) {
      ingArr.push(val);
    }
    const purchasableArr = ingArr.filter((ele) => ele);
    if (purchasableArr.length) {
      this.setState({ purchasable: true });
    } else {
      this.setState({ purchasable: false });
    }
  };

  sizeSelectHandler = (e) => {
    const updatedSize = { ...this.state.config };
    const size = e.target.getAttribute("name");
    updatedSize["size"] = size;
    let { basePrice } = this.state;
    let priceMultiplier;
    if (size === "Regular") priceMultiplier = 1;
    if (size === "Medium") priceMultiplier = 1.5;
    if (size === "Large") priceMultiplier = 2.5;
    updatedSize["priceMultiplier"] = priceMultiplier;
    this.setState({
      config: updatedSize,
      totalPrice: basePrice * priceMultiplier,
    });
  };

  componentDidUpdate() {}

  render() {
    return (
      <Aux>
        <Modal />
        <Pizza
          size={this.state.config.size}
          ingredients={this.state.ingredients}
        />
        <BuildControls
          pizzaSize={this.state.config.size}
          totPrice={this.state.totalPrice}
          ingChecked={this.ingredientSelectHandler}
          sizeChecked={this.sizeSelectHandler}
          disable={this.state.purchasable}
        />
      </Aux>
    );
  }
}

export default PizzaBuilder;
