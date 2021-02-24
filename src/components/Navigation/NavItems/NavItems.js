import React from "react";
import Aux from "../../hoc/Auxiliary";
import "./NavItems.css";

const navItems = (props) => {
  return (
    <Aux>
      <h4 className="logo">
        My<span style={{ fontWeight: 300 }}>Pizza</span>
      </h4>
      <ul className="nav_items">
        <li className="nav_item active">MY PIZZA</li>
        <li className="nav_item">ORDERS</li>
      </ul>
    </Aux>
  );
};

export default navItems;
