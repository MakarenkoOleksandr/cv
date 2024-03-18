import React from "react";
import btns from "../props/btns";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      {btns.map((content, index) => (
        <NavLink
          className="menu__action"
          key={index}
          to={content === "Home" ? "/cv" : `/${content.toLowerCase()}`}
        >
          {content}
        </NavLink>
      ))}
    </div>
  );
};

export default Menu;
