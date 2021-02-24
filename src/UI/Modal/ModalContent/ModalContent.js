import React from "react";
import "./ModalContent.css";

const modalContent = (props) => {
  const orderedArr = [];
  const ingredients = { ...props.ordered };
  for (let [key, val] of Object.entries(ingredients)) {
    if (val) orderedArr.push(key.slice(0, 1).toUpperCase() + key.slice(1));
  }
  const ingMarkup = orderedArr.map((ele) => {
    return <li key={ele}>{ele}</li>;
  });
  const styles = {
    textAlign: "left",
    margin: "0px auto",
    padding: "15px",
  };

  return (
    <div style={styles}>
      <p>
        You have ordered a {props.size} Pizza with the following ingredients:
      </p>
      <ul>{ingMarkup}</ul>
      <p>Total price of Pizza: Rs. {props.price.toFixed(2)}</p>
      <p>Proceed to checkout?</p>
      <button onClick={props.canceledOrder} className="btn cancel_btn">
        CANCEL
      </button>
      <button onClick={props.purchasedOrder} className="btn cont_btn">
        CONTINUE
      </button>
    </div>
  );
};

export default modalContent;
