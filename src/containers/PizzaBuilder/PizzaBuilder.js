import React, { Component } from "react";
import BuildControls from "../../components/BuildControls/BuildControls";
import Aux from "../../components/hoc/Auxiliary";
import Pizza from "../../components/Pizza/Pizza";
import Modal from "../../UI/Modal/Modal";
import axios from "axios";
import ModalContent from "../../UI/Modal/ModalContent/ModalContent";
import Spinner from "../../UI/Spinner/Spinner";
import { connect } from "react-redux";

class PizzaBuilder extends Component {
  state = {
    purchasable: false,
    ordered: false,
    continued: false,
    error: null,
  };

  purchasableHandler = () => {
    const ingArr = [];
    for (let [_, val] of Object.entries(this.props.ingredients)) {
      ingArr.push(val);
    }
    const purchasableArr = ingArr.filter((ele) => ele);
    return purchasableArr.length !== 0;
  };

  sizeSelectHandler = (e) => {};

  orderNowBtnHandler = () => {
    this.setState({ ordered: true });
    window.scroll({ top: 0, behavior: "smooth" });
  };

  orderCancelHandler = () => {
    this.setState({ ordered: false });
  };

  orderContinueHandler = () => {
    this.setState({ continued: true });

    this.props.history.push("/checkout");
  };

  render() {
    let modalContent;

    if (this.state.continued) {
      modalContent = <Spinner />;
    }
    if (!this.state.continued) {
      modalContent = (
        <ModalContent
          ordered={this.props.ingredients}
          size={this.props.config.size}
          price={this.props.totalPrice}
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
          rotate="rotate"
          size={this.props.config.size}
          ingredients={this.props.ingredients}
        />
        <BuildControls
          pizzaSize={this.props.config.size}
          totPrice={this.props.totalPrice}
          ingChecked={this.props.ingredientSelectHandler}
          sizeChecked={this.props.sizeSelectHandler}
          disable={this.purchasableHandler()}
          orderNow={this.orderNowBtnHandler}
        />
      </Aux>
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
    ingredientSelectHandler: (e) => dispatch({ type: "SELECT", e: e }),
    sizeSelectHandler: (e) => dispatch({ type: "SIZE_SELECT", e: e }),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(PizzaBuilder);
