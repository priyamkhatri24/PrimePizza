import "./App.css";
import React, { Component } from "react";
import Layout from "./Layout/Layout";
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";
import Checkout from "./Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./Orders/Orders";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={PizzaBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route render={() => <h1>Error: 404</h1>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
