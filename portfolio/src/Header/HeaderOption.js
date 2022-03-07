import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div className={`headerOption ${selected && "headerOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default HeaderOption;
