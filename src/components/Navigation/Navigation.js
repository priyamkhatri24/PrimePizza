import React from "react";
import "./Navigation.css";
import NavItems from "./NavItems/NavItems";

const navigation = (props) => {
  return (
    <div className="nav_menu">
      <ion-icon onClick={props.toggle} name="menu-outline"></ion-icon>
      <NavItems />
    </div>
  );
};

export default navigation;
