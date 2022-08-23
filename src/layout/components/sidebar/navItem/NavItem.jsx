import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navItem.module.css";
import NavItemHeader from "./NavItemHeader.jsx";

console.log({ style });
const NavItem = (props) => {
  const { label, Icon, to, children } = props.item;

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <NavLink
      // exact
      to={to}
      className={style.navItem}
      style={({ isActive }) =>
        isActive ? { color: "#dbeafe", backgroundColor: " #4164c4" } : undefined
      }
    >
      <Icon className={style.navIcon} />
      <span className={style.navLabel}>{label}</span>
    </NavLink>
  );
};

export default NavItem;
