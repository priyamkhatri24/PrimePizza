import "./App.css";
import React, { Component } from "react";
import Layout from "./Layout/Layout";
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";
import Checkout from "./Checkout/Checkout";
import { Route } from "react-router-dom";
import Orders from "./Orders/Orders";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path="/" component={PizzaBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Layout>
      </div>
    );
  }
}

export default App;
