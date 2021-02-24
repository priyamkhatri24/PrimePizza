import React, { Component } from "react";
import Aux from "../../components/hoc/Auxiliary";
import Navigation from "../../components/Navigation/Navigation";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./layout.css";

class Layout extends Component {
  state = {
    showSidebar: false,
  };
  removeSidebarHandler = () => {
    this.setState({ showSidebar: false });
    console.log("hide");
  };

  showSidebarHandler = () => {
    this.setState({ showSidebar: true });
    console.log("show");
  };

  render() {
    return (
      <Aux>
        <Navigation toggle={this.showSidebarHandler} />
        <Sidebar
          show={this.state.showSidebar}
          removeSidebar={this.removeSidebarHandler}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
