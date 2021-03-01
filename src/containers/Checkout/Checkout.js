import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import "./Checkout.css";
import axios from "axios";
import Modal from "../../UI/Modal/Modal";
import Form from "../../components/Form/Form";
import Spinner from "../../UI/Spinner/Spinner";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
    size: "Regular",
    customer: {
      name: "",
      email: "",
      address: "",
      contact: "",
    },
    continued: false,
    ordered: false,
    error: null,
    inputEl: null,
    isValid: false,
  };

  componentDidMount() {
    const isTrue = (string) => string === "true";
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let totPrice, size;
    for (let i of query.entries()) {
      if (i[0] === "price") {
        totPrice = +i[1];
      } else if (i[0] === "size") {
        size = i[1];
      } else {
        ingredients[i[0]] = isTrue(i[1]);
      }
    }
    this.setState({ price: totPrice, ingredients: ingredients, size: size });
  }

  checkoutCancelHandler = () => {
    this.props.history.push("/");
  };

  continueHandler = () => {
    this.setState({ continued: true });
  };

  placeOrderHandler = (e) => {
    e.preventDefault();
    this.setState({ ordered: true });
    const order = {
      ingredients: this.state.ingredients,
      size: this.state.size,
      price: this.state.price,
      customer: this.state.customer,
    };
    axios
      .post(
        "https://prime-pizza-ddef6-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((response) => {
        this.setState({ ordered: false, continued: false });
        this.props.history.replace("/");
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  cancelFormHandler = () => {
    const customer = {
      name: "",
      email: "",
      address: "",
      contact: "",
    };
    this.setState({ continued: false, isValid: false, customer: customer });
  };

  contactDataHandler = (e) => {
    const customer = { ...this.state.customer };
    customer[e.target.name] = e.target.value;
    this.setState({ customer: customer });
    const isValid =
      customer.name.trim().length > 0 &&
      customer.email.trim().length > 0 &&
      customer.address.trim().length > 0 &&
      customer.contact.trim().length > 0;
    console.log(isValid);
    this.setState({ isValid: isValid });
  };

  render() {
    let pizza, modalForm;
    if (this.state.ingredients) {
      pizza = (
        <Pizza ingredients={this.state.ingredients} size="Regular" rotate="" />
      );
    }
    if (this.state.continued) {
      modalForm = (
        <Form
          isValid={this.state.isValid}
          cancelOrder={this.cancelFormHandler}
          clicked={this.placeOrderHandler}
          changed={this.contactDataHandler}
        />
      );
    }
    if (this.state.ordered) {
      modalForm = <Spinner />;
    }
    if (this.state.error) {
      modalForm = (
        <p style={{ margin: "auto" }}>
          {this.state.error.message}. Please reload the application.
        </p>
      );
    }
    return (
      <div className="checkout">
        <Modal ordered={this.state.continued}>{modalForm}</Modal>
        <h1>Hope You like the Pizza!</h1>
        {pizza}
        <h5>Total Price: {this.state.price}</h5>
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
