import React from "react";
import navstyle from "./NavBarItem.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBarItem = (props) => {
  const classes = props.active ? navstyle.border : "";
  return (
    <div className={`${navstyle.nav} ${classes}`}>
      <i className={`fa ${props.icon}`} />
      <span className={navstyle.navbar}>{props.type}</span>
      <span>{props.active}</span>
    </div>
  );
};

export default NavBarItem;
