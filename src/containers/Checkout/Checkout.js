import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import "./Checkout.css";
import axios from "axios";

class Checkout extends Component {
  state = {
    ingredients: {
      peppers: true,
      mushrooms: true,
      pepperoni: false,
      cheese: true,
      crust: false,
    },
    continued: false,
    ordered: false,
    error: null,
  };

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    this.setState({ continued: true });
    console.log("Order Placed");
    // const order = {
    //   ingredients: this.state.ingredients,
    //   size: this.state.config.size,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Priyam",
    //     email: "priyamkhatri24@gmail.com",
    //     address: {
    //       city: "Noida",
    //       street: "Sector 55",
    //       House: "E 107",
    //     },
    //   },
    // };
    // axios
    //   .post(
    //     "https://prime-pizza-ddef6-default-rtdb.firebaseio.com/orders.json",
    //     order
    //   )
    //   .then((response) => {
    //     this.setState({ ordered: false, continued: false });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: err, continued: false });
    //   });
  };

  render() {
    return (
      <div className="checkout">
        <h1>Hope You like the Pizza!</h1>
        <Pizza ingredients={this.state.ingredients} size="Regular" rotate="" />
        <h5>Total Price: Rs 120.00</h5>
        <button onClick={this.checkoutCancelHandler} className="green">
          CANCEL
        </button>
        <button onClick={this.continueHandler} className="red">
          CONTINUE
        </button>
      </div>
    );
  }
}
export default Checkout;
