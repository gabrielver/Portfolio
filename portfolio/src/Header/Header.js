import React from "react";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HeaderOption from "./HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__home">
        <a href="#info">
          <HeaderOption Icon={HomeIcon} title="Home" selected={true} />
        </a>
      </div>
      <div className="header__work">
        <a href="#work">
          <HeaderOption Icon={WorkOutlineIcon} title="Projets" />
        </a>
      </div>
      <div className="header__user">
        <a href="#about">
          <HeaderOption Icon={PersonOutlineIcon} title="Parcours" />
        </a>
      </div>
      <div className="header__contact">
        <a href="#contact">
          <HeaderOption Icon={MailOutlineIcon} title="Contact" />
        </a>
      </div>
    </div>
  );
}

export default Header;
