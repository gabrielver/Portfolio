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
        <HeaderOption Icon={HomeIcon} title="Home" selected={true} />
      </div>
      <div className="header__work">
        <HeaderOption Icon={WorkOutlineIcon} title="Projets" />
      </div>
      <div className="header__user">
        <HeaderOption Icon={PersonOutlineIcon} title="Parcour" />
      </div>
      <div className="header__contact">
        <HeaderOption Icon={MailOutlineIcon} title="Contact" />
      </div>
    </div>
  );
}

export default Header;
