import React, { Component } from "react";
import Pizza from "../../components/Pizza/Pizza";
import "./Checkout.css";
import axios from "axios";
import Modal from "../../UI/Modal/Modal";
import Form from "../../components/Form/Form";
import Spinner from "../../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Checkout extends Component {
  state = {
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

  checkoutCancelHandler = () => {
    this.props.history.replace("/");
    this.props.checkoutCancelHandler();
  };

  continueHandler = () => {
    this.setState({ continued: true });
  };

  placeOrderHandler = (e) => {
    e.preventDefault();
    this.setState({ ordered: true });
    const order = {
      ingredients: this.props.ingredients,
      size: this.props.config.size,
      price: this.props.totalPrice,
      customer: this.state.customer,
    };
    axios
      .post(
        "https://prime-pizza-ddef6-default-rtdb.firebaseio.com/orders.json",
        order
      )
      .then((_) => {
        this.setState({ ordered: false, continued: false });
        this.props.history.replace("/");
        this.props.orderCompletedHandler();
      })
      .catch((err) => {
        this.setState({ error: err });
      });
    window.scroll({ top: 0, behavior: "smooth" });
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
    this.setState({ isValid: isValid });
  };

  render() {
    let pizza, modalForm;
    if (this.props.ingredients) {
      pizza = (
        <Pizza ingredients={this.props.ingredients} size="Regular" rotate="" />
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
        <h5>Total Price: {this.props.totalPrice}</h5>
        <button onClick={this.checkoutCancelHandler} className="red">
          CANCEL
        </button>
        <button onClick={this.continueHandler} className="green">
          CONTINUE
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    config: state.config,
    basePrice: state.basePrice,
    totalPrice: state.totalPrice,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    checkoutCancelHandler: () => dispatch({ type: "CANCEL_CHECKOUT" }),
    orderCompletedHandler: () => dispatch({ type: "ORDER_COMPLETED" }),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Checkout);
