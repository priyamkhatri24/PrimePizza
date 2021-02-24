import React from "react";
import Aux from "../../components/hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const modal = (props) => {
  let classList = "modal modal_not_shown";
  if (props.ordered) {
    classList = "modal";
  }
  return (
    <Aux>
      <Backdrop cancel={props.cancel} show={props.ordered} />
      <div className={classList}>{props.children}</div>
    </Aux>
  );
};

export default modal;
