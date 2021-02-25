import React, { Component } from "react";
import Aux from "../../components/hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.ordered !== nextProps.ordered ||
      this.props.children !== nextProps.children
    );
  }

  render() {
    let classList = "modal modal_not_shown";
    if (this.props.ordered) {
      classList = "modal";
    }
    return (
      <Aux>
        <Backdrop cancel={this.props.cancel} show={this.props.ordered} />
        <div className={classList}>{this.props.children}</div>
      </Aux>
    );
  }
}

export default Modal;
