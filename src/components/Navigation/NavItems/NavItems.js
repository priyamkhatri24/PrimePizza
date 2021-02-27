import React from "react";
import Aux from "../../hoc/Auxiliary";
import "./NavItems.css";
import { NavLink } from "react-router-dom";

const navItems = (props) => {
  return (
    <Aux>
      <h4 className="logo">
        My<span style={{ fontWeight: 300 }}>Pizza</span>
      </h4>
      <ul className="nav_items">
        <li className="nav_item">
          <NavLink exact to="/">
            MY PIZZA
          </NavLink>
        </li>
        <li className="nav_item">
          <NavLink to="/orders">MY ORDERS</NavLink>
        </li>
      </ul>
    </Aux>
  );
};

export default navItems;
