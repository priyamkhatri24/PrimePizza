import React from "react";
import NavItems from "../Navigation/NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./Sidebar.css";
import Aux from "../hoc/Auxiliary";

const sidebar = (props) => {
  let assignedClasses = ["sidebar", "close"];
  if (props.show) assignedClasses = ["sidebar", "open"];
  return (
    <Aux>
      <Backdrop show={props.show} cancel={props.removeSidebar} />
      <div className={assignedClasses.join(" ")}>
        <NavItems />
      </div>
    </Aux>
  );
};

export default sidebar;
