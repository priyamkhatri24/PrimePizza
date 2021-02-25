import React, { Component } from "react";
import BuildControls from "../../components/BuildControls/BuildControls";
import Aux from "../../components/hoc/Auxiliary";
import Pizza from "../../components/Pizza/Pizza";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";
import ModalContent from "../../UI/Modal/ModalContent/ModalContent";
import Spinner from "../../UI/Spinner/Spinner";

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
    ordered: false,
    continued: false,
    error: null,
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

  orderNowBtnHandler = () => {
    this.setState({ ordered: true });
    window.scroll({ top: 0, behavior: "smooth" });
  };
  orderCancelHandler = () => {
    this.setState({ ordered: false });
  };
  orderContinueHandler = () => {
    this.setState({ continued: true });
    const order = {
      ingredients: this.state.ingredients,
      size: this.state.config.size,
      price: this.state.totalPrice,
      customer: {
        name: "Priyam",
        email: "priyamkhatri24@gmail.com",
        address: {
          city: "Noida",
          street: "Sector 55",
          House: "E 107",
        },
      },
    };
    axios
      .post(
        "https://prime-pizza-ddef6-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((response) => {
        this.setState({ ordered: false, continued: false });
      })
      .catch((err) => {
        this.setState({ error: err, continued: false });
      });
  };

  render() {
    let modalContent;

    if (this.state.continued) {
      modalContent = <Spinner />;
    }
    if (!this.state.continued) {
      modalContent = (
        <ModalContent
          ordered={this.state.ingredients}
          size={this.state.config.size}
          price={this.state.totalPrice}
          canceledOrder={this.orderCancelHandler}
          purchasedOrder={this.orderContinueHandler}
        />
      );
    }
    if (this.state.error) {
      modalContent = (
        <p style={{ margin: "auto" }}>
          {this.state.error.message}. Please reload the application.
        </p>
      );
    }
    return (
      <Aux>
        <Modal cancel={this.orderCancelHandler} ordered={this.state.ordered}>
          {modalContent}
        </Modal>
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
          orderNow={this.orderNowBtnHandler}
        />
      </Aux>
    );
  }
}

export default PizzaBuilder;
