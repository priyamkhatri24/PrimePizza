import React from "react";
import Aux from "../hoc/Auxiliary";
import "./layout.css";

const Layout = (props) => {
  return (
    <Aux>
      <div className="nav_menu">
        {/* <h4 className="logo">
          PRIME<span>PIZZA</span>
        </h4>
        <ul className="nav_items">
          <li>PIZZA</li>
          <li>ORDERS</li>
        </ul> */}
      </div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default Layout;
