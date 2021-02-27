import React from "react";
import "./Form.css";

const form = (props) => {
  return (
    <div className="form_container">
      <h2>Please fill your contact details</h2>
      <form>
        <input type="text" placeholder="Your name"></input>
        <input type="email" placeholder="Your email"></input>
        <input type="text" placeholder="Adress"></input>
        <input type="text" placeholder="contact"></input>
        <button className="place_order" onClick={props.clicked}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default form;
