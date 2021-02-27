import axios from "axios";
import React, { Component } from "react";
import Order from "../../components/Order/Order";
import "./Orders.css";

class Orders extends Component {
  state = {
    orders: null,
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
        console.log(err);
      });
  }
  render() {
    let orders = null;
    if (this.state.orders) {
      orders = this.state.orders.map((ele) => {
        return (
          <Order
            key={ele.id}
            ingredients={ele.ingredients}
            size={ele.size}
            price={ele.price}
          />
        );
      });
    }

    return <div className="orders">{orders}</div>;
  }
}

export default Orders;
