import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, selected }) {
  return (
    <div className={`headerOption ${selected && "headerOption--active"}`}>
      <h3>{title}</h3>
      <Icon />
    </div>
  );
}

export default HeaderOption;
