import axios from "axios";
import React, { Component } from "react";
import Order from "../../components/Order/Order";
import Spinner from "../../UI/Spinner/Spinner";
import "./Orders.css";

class Orders extends Component {
  state = {
    orders: null,
    error: null,
  };
  componentDidMount() {
    let orders = [];
    axios
      .get("https://prime-pizza-ddef6-default-rtdb.firebaseio.com/orders.json")
      .then((response) => {
        for (let [key, val] of Object.entries(response.data)) {
          val.id = key;
          orders.push(val);
        }
        this.setState({ orders: orders });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      });
  }
  render() {
    let orders = <Spinner />;
    if (this.state.error) {
      orders = <h2>No orders to display</h2>;
    }
    if (this.state.orders) {
      orders = this.state.orders.reverse().map((ele) => {
        return (
          <Order
            key={ele.id}
            ingredients={ele.ingredients}
            size={ele.size}
            price={ele.price}
            customerName={ele.customer.name}
          />
        );
      });
    }

    return <div className="orders">{orders}</div>;
  }
}

export default Orders;
