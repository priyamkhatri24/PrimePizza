import "./App.css";
import React, { Component } from "react";
import Layout from "./Layout/Layout";
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";
import Checkout from "./Checkout/Checkout";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Route exact path="/" component={PizzaBuilder} />
          <Route path="/checkout" component={Checkout} />
        </Layout>
      </div>
    );
  }
}

export default App;
