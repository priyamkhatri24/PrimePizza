import "./App.css";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";
import PizzaBuilder from "./PizzaBuilder/PizzaBuilder";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <PizzaBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
