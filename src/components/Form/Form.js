import React, { Component } from "react";
import "./Form.css";
import Input from "../../UI/Input/Input";

class Form extends Component {
  state = {
    name: {
      placeholder: "Your name",
      type: "text",
      name: "name",
      value: "",
    },
    email: {
      placeholder: "Your email",
      type: "text",
      name: "email",
      value: "",
    },
    address: {
      placeholder: "Your Address",
      type: "text",
      name: "address",
      value: "",
    },
    contact: {
      placeholder: "Your contact",
      type: "text",
      name: "contact",
      value: "",
    },
  };

  validationClassesHandler = () => {};

  render() {
    const formArray = [];
    for (let [_, val] of Object.entries(this.state)) {
      formArray.push(val);
    }
    const form = formArray.map((inpt) => {
      return (
        <Input
          changed={this.props.changed}
          placeholder={inpt.placeholder}
          name={inpt.name}
          type={inpt.type}
          key={inpt.name}
          value={inpt.value}
        />
      );
    });
    return (
      <div className="form_container">
        <h2>Please fill your contact details</h2>
        <form>
          {form}
          <button
            disabled={!this.props.isValid}
            className="place_order"
            onClick={this.props.clicked}
          >
            Place Order
          </button>
        </form>
        <button className="cancel" onClick={this.props.cancelOrder}>
          CANCEL
        </button>
      </div>
    );
  }
}

export default Form;
