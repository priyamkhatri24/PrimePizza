import "./App.css";
import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Pizza from "../components/Pizza/Pizza";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Pizza />
        </Layout>
      </div>
    );
  }
}

export default App;
